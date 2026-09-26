/* ============================================================
   GABARITO CAFÉ — js/app.js
   O "gerente da cafeteria": inicializa o app, controla as
   telas (rotas), cuida do login/cadastro, das torradas
   (avisos) e da saudação do topo.
   ============================================================ */

// Objeto global do aplicativo
const App = {

  // Tela que está aberta agora (usado para redesenhar ao trocar o idioma)
  telaAtual: 'dashboard',

  // Chaves de tradução dos títulos de cada tela (texto montado na hora, no idioma atual)
  TELAS: {
    dashboard: { titulo: 'tela_dashboard_t', sub: 'tela_dashboard_s' }, // dashboard
    edital: { titulo: 'tela_edital_t', sub: 'tela_edital_s' },          // edital
    simulado: { titulo: 'tela_simulado_t', sub: 'tela_simulado_s' },    // simulado
    bancas: { titulo: 'tela_bancas_t', sub: 'tela_bancas_s' },          // bancas
    temas: { titulo: 'tela_temas_t', sub: 'tela_temas_s' },             // temas
    dicas: { titulo: 'tela_dicas_t', sub: 'tela_dicas_s' }              // dicas
  },

  // Inicializa o app inteiro (chamado uma vez, no fim da página)
  iniciar() {
    // Configura o "worker" do PDF.js (motor que interpreta o PDF em segundo plano)
    if (window.pdfjsLib) {                                  // se a biblioteca carregou
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; // aponta para o worker
    }

    // O idioma (js/idioma.js) e o tema (js/tema.js) já se aplicam ao carregar a página
    this.ligarControles();                                  // liga as bandeiras e o botão de tema
    this.ligarLogin();                                      // liga os eventos da tela de login
    this.ligarMenu();                                       // liga o menu lateral e o sair

    // Se já existe sessão salva, entra direto no app
    if (Auth.usuarioAtual()) this.entrarNoApp();            // pula o login
  },

  // Liga os controles de idioma (bandeiras) e de tema
  ligarControles() {
    // Cada bandeira troca o idioma do app
    document.querySelectorAll('.bandeira').forEach(botao => { // percorre as bandeiras
      botao.addEventListener('click', () => {                 // ao clicar
        Idioma.definir(botao.dataset.idioma);                 // troca o idioma (salva e traduz)
        FrasesEstudo.trocar();                                // sorteia uma frase no novo idioma
        App.torrada(T('toast_idioma', { idioma: botao.title })); // avisa qual idioma foi escolhido
      });
    });
    // O botão de tema já é ligado pelo js/tema.js (classe .botao-tema)
  },

  // Redesenha a tela aberta (usado depois de trocar o idioma)
  redesenharTelaAtual() {
    const tela = this.telaAtual;                            // pega a tela aberta
    if (document.getElementById('area-app').classList.contains('oculto')) return; // logado? senão, nada
    const info = this.TELAS[tela] || this.TELAS.dashboard;  // informações da tela
    document.getElementById('topo-titulo').textContent = T(info.titulo); // título traduzido
    document.getElementById('topo-subtitulo').textContent = T(info.sub); // legenda traduzida
    this.atualizarPerfil();                                 // refaz a saudação no idioma novo
    // Redesenha o conteúdo conforme a tela
    if (tela === 'dashboard') DashboardUI.renderizar();     // dashboard
    if (tela === 'simulado') SimuladoUI.atualizarIdioma();  // simulado (config/perguntas/resultado)
    if (tela === 'bancas') ConteudoUI.renderizarBancas();   // bancas
    if (tela === 'temas') ConteudoUI.renderizarTemas();     // temas
    if (tela === 'dicas') ConteudoUI.renderizarDicas();     // dicas importantes
    if (tela === 'edital' && EditalUI.ultimaAnalise) EditalUI.renderizarResultado(EditalUI.ultimaAnalise); // edital analisado
  },

  // Liga todos os eventos da tela de login
  ligarLogin() {
    // Abas: alternar entre "entrar" e "criar conta"
    document.getElementById('aba-entrar').addEventListener('click', () => { // aba entrar
      document.getElementById('aba-entrar').classList.add('ativa');         // marca ativa
      document.getElementById('aba-cadastro').classList.remove('ativa');    // desmarca a outra
      document.getElementById('form-entrar').classList.remove('oculto');    // mostra o form de login
      document.getElementById('form-cadastro').classList.add('oculto');     // esconde o de cadastro
    });
    document.getElementById('aba-cadastro').addEventListener('click', () => { // aba cadastro
      document.getElementById('aba-cadastro').classList.add('ativa');       // marca ativa
      document.getElementById('aba-entrar').classList.remove('ativa');      // desmarca a outra
      document.getElementById('form-cadastro').classList.remove('oculto');  // mostra o form de cadastro
      document.getElementById('form-entrar').classList.add('oculto');       // esconde o de login
    });

    // Envio do formulário de login
    document.getElementById('form-entrar').addEventListener('submit', async (e) => { // submit
      e.preventDefault();                                   // não recarrega a página
      const email = document.getElementById('login-email').value; // pega o e-mail
      const senha = document.getElementById('login-senha').value; // pega a senha
      const resultado = await Auth.entrar(email, senha);    // tenta entrar
      if (resultado.ok) {                                   // se deu certo
        this.entrarNoApp();                                 // abre o app
        this.torrada(T('toast_bemvindo', { nome: resultado.usuario.nome }), 'sucesso'); // saúda
      } else {                                              // se falhou
        this.torrada(resultado.erro, 'erro');               // mostra o motivo
      }
    });

    // Envio do formulário de cadastro
    document.getElementById('form-cadastro').addEventListener('submit', async (e) => { // submit
      e.preventDefault();                                   // não recarrega a página
      const nome = document.getElementById('cad-nome').value; // pega o nome
      const email = document.getElementById('cad-email').value; // pega o e-mail
      const senha = document.getElementById('cad-senha').value; // pega a senha
      const resultado = await Auth.cadastrar(nome, email, senha); // tenta criar a conta
      if (resultado.ok) {                                   // se deu certo
        this.entrarNoApp();                                 // abre o app
        this.torrada(T('toast_conta_criada', { nome: resultado.usuario.nome }), 'sucesso'); // celebra
      } else {                                              // se falhou
        this.torrada(resultado.erro, 'erro');               // mostra o motivo
      }
    });

    // Botão visitante (modo degustação)
    document.getElementById('btn-visitante').addEventListener('click', () => { // clique
      Auth.entrarVisitante();                               // abre a sessão de visitante
      this.entrarNoApp();                                   // entra no app
      this.torrada(T('toast_visitante'), 'sucesso'); // avisa
    });
  },

  // Liga o menu lateral e o botão de sair
  ligarMenu() {
    // Cada item do menu navega para sua tela
    document.querySelectorAll('.item-menu').forEach(item => { // percorre o menu
      item.addEventListener('click', () => this.irPara(item.dataset.tela)); // navega no clique
    });
    // Botão de sair encerra a sessão e volta ao login
    document.getElementById('btn-sair').addEventListener('click', () => { // clique em sair
      Auth.sair();                                          // apaga a sessão
      location.reload();                                    // recarrega (volta para o login limpo)
    });
  },

  // Mostra a área do app (esconde o login) e prepara as telas
  entrarNoApp() {
    document.getElementById('tela-login').classList.remove('ativa'); // esconde o login
    document.getElementById('area-app').classList.remove('oculto'); // mostra o app
    this.atualizarPerfil();                                 // nome, foco e saudação
    this.irPara('dashboard');                               // começa no dashboard
  },

  // Atualiza nome do usuário, foco e saudação do topo
  atualizarPerfil() {
    // usuarioAtual() devolve null para o visitante (ele não está na lista de contas),
    // por isso tratamos o "sem usuário" como modo degustação.
    const usuario = Auth.usuarioAtual();                    // pega o usuário logado (ou null)
    const ehVisitante = !usuario;                           // sem conta = visitante
    const nome = ehVisitante ? 'Visitante' : usuario.nome;  // nome a exibir
    document.getElementById('perfil-nome').textContent = nome; // nome na lateral
    const foco = ehVisitante ? '' : Auth.focoAtual();       // visitante não tem foco salvo
    document.getElementById('perfil-foco').textContent = foco ? T('foco_prefixo') + foco : ''; // foco na lateral
    const hora = new Date().getHours();                     // hora atual
    // Período do dia traduzido (bom dia / boa tarde / boa noite)
    const periodo = hora < 12 ? T('saudacao_dia') : (hora < 18 ? T('saudacao_tarde') : T('saudacao_noite'));
    document.getElementById('topo-saudacao').textContent = periodo + ', ' + nome + '! ✨'; // saudação
  },

  // Navega entre telas (troca título, menu ativo e conteúdo)
  irPara(tela) {
    this.telaAtual = tela;                                  // guarda a tela aberta (para o idioma)

    // Marca a tela ativa e apaga as outras
    document.querySelectorAll('.tela').forEach(sec => sec.classList.remove('ativa')); // limpa todas
    const alvo = document.getElementById('tela-' + tela);   // pega a tela destino
    if (alvo) alvo.classList.add('ativa');                  // ativa a tela destino

    // Atualiza o item ativo do menu
    document.querySelectorAll('.item-menu').forEach(item => { // percorre o menu
      item.classList.toggle('ativo', item.dataset.tela === tela); // destaca o item da tela atual
    });

    // Atualiza título e legenda do topo (traduzidos na hora)
    const info = this.TELAS[tela] || this.TELAS.dashboard;  // informações da tela (ou padrão)
    document.getElementById('topo-titulo').textContent = T(info.titulo); // título do topo
    document.getElementById('topo-subtitulo').textContent = T(info.sub);  // legenda do topo

    // Prepara o conteúdo da tela conforme necessário
    if (tela === 'dashboard') DashboardUI.renderizar();     // dashboard sempre recalculado
    if (tela === 'edital') EditalUI.iniciar();              // liga os eventos do edital (idempotente)
    if (tela === 'simulado' && document.getElementById('tela-simulado').innerHTML.trim() === '') SimuladoUI.abrir({}); // simulado vazio abre a configuração
    if (tela === 'bancas') ConteudoUI.renderizarBancas();   // desenha as bancas
    if (tela === 'temas') ConteudoUI.renderizarTemas();     // desenha os temas
    if (tela === 'dicas') ConteudoUI.renderizarDicas();     // desenha as dicas importantes

    window.scrollTo({ top: 0, behavior: 'smooth' });        // volta ao topo da página
  },

  // Mostra um aviso (torrada) no canto da tela
  torrada(mensagem, tipo = '') {
    const pilha = document.getElementById('torradas');      // pilha de avisos
    const aviso = document.createElement('div');            // cria o elemento do aviso
    aviso.className = 'torrada' + (tipo ? ' ' + tipo : ''); // classe com o tipo (sucesso/erro)
    aviso.textContent = mensagem;                           // texto do aviso
    pilha.appendChild(aviso);                               // adiciona à pilha
    setTimeout(() => aviso.remove(), 4000);                 // some sozinho após 4 segundos
  }
};

// Dá a largada: quando a página estiver pronta, inicia o app
document.addEventListener('DOMContentLoaded', () => App.iniciar()); // inicialização
