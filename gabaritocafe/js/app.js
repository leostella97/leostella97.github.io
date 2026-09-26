/* ============================================================
   GABARITO CAFÉ — js/app.js
   O "gerente da cafeteria": inicializa o app, controla as
   telas (rotas), cuida do login/cadastro, das torradas
   (avisos) e da saudação do topo.
   ============================================================ */

// Objeto global do aplicativo
const App = {

  // Títulos e legendas de cada tela (para o topo da página)
  TELAS: {
    dashboard: { titulo: 'Dashboard', sub: 'Seu progresso, fresquinho como café passado na hora.' }, // dashboard
    edital: { titulo: 'Seu edital na mesa', sub: 'Importe o PDF e descubra cargos, matérias e por onde começar.' }, // edital
    simulado: { titulo: 'Hora do simulado', sub: 'Escolha o tamanho do desafio e bora.' }, // simulado
    bancas: { titulo: 'Conheça as bancas', sub: 'Cada banca tem manias — aqui você aprende todas as pegadinhas.' }, // bancas
    temas: { titulo: 'O que mais cai', sub: 'Os temas campeões de concursos e vestibulares, com mapa de estudo.' } // temas
  },

  // Inicializa o app inteiro (chamado uma vez, no fim da página)
  iniciar() {
    // Configura o "worker" do PDF.js (motor que interpreta o PDF em segundo plano)
    if (window.pdfjsLib) {                                  // se a biblioteca carregou
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; // aponta para o worker
    }

    this.ligarLogin();                                      // liga os eventos da tela de login
    this.ligarMenu();                                       // liga o menu lateral e o sair

    // Se já existe sessão salva, entra direto no app
    if (Auth.usuarioAtual()) this.entrarNoApp();            // pula o login
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
        this.torrada('Bem-vindo(a) de volta, ' + resultado.usuario.nome + '! ☕', 'sucesso'); // saúda
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
        this.torrada('Conta criada! A cafeteria é sua, ' + resultado.usuario.nome + ' ☕', 'sucesso'); // celebra
      } else {                                              // se falhou
        this.torrada(resultado.erro, 'erro');               // mostra o motivo
      }
    });

    // Botão visitante (modo degustação)
    document.getElementById('btn-visitante').addEventListener('click', () => { // clique
      Auth.entrarVisitante();                               // abre a sessão de visitante
      this.entrarNoApp();                                   // entra no app
      this.torrada('Modo degustação ativado! Pode explorar à vontade ☕', 'sucesso'); // avisa
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
    const usuario = Auth.usuarioAtual();
    const ehVisitante = usuario && usuario.id === 'visitante';
    if (ehVisitante) {
      // Modo degustação: esconde textos da lateral (nome, foco, botão sair)
      document.getElementById('perfil-nome').style.display = 'none';
      document.getElementById('perfil-foco').style.display = 'none';
      document.getElementById('btn-sair').style.display = 'none';
    } else {
      // Usuário logado: mostra textos da lateral
      document.getElementById('perfil-nome').style.display = '';
      document.getElementById('perfil-foco').style.display = '';
      document.getElementById('btn-sair').style.display = '';
    }
    this.atualizarPerfil();                                 // nome, foco e saudação
    this.irPara('dashboard');                               // começa no dashboard
  },

  // Atualiza nome do usuário, foco e saudação do topo
  atualizarPerfil() {
    const usuario = Auth.usuarioAtual();                    // pega o usuário logado
    if (!usuario) return;                                   // sem usuário, nada a fazer
    const ehVisitante = usuario.id === 'visitante';
    if (!ehVisitante) {
      document.getElementById('perfil-nome').textContent = usuario.nome; // nome na lateral
    }
    const foco = Auth.focoAtual();                          // cargo focado
    if (!ehVisitante) {
      document.getElementById('perfil-foco').textContent = foco ? '🎯 Foco: ' + foco : ''; // foco na lateral
    }
    const hora = new Date().getHours();                     // hora atual
    const periodo = hora < 12 ? 'Bom dia' : (hora < 18 ? 'Boa tarde' : 'Boa noite'); // período do dia
    const nomeSaudacao = ehVisitante ? 'Visitante' : usuario.nome;
    document.getElementById('topo-saudacao').textContent = periodo + ', ' + nomeSaudacao + '! ✨'; // saudação
  },

  // Navega entre telas (troca título, menu ativo e conteúdo)
  irPara(tela) {
    // Marca a tela ativa e apaga as outras
    document.querySelectorAll('.tela').forEach(sec => sec.classList.remove('ativa')); // limpa todas
    const alvo = document.getElementById('tela-' + tela);   // pega a tela destino
    if (alvo) alvo.classList.add('ativa');                  // ativa a tela destino

    // Atualiza o item ativo do menu
    document.querySelectorAll('.item-menu').forEach(item => { // percorre o menu
      item.classList.toggle('ativo', item.dataset.tela === tela); // destaca o item da tela atual
    });

    // Atualiza título e legenda do topo
    const info = this.TELAS[tela] || this.TELAS.dashboard;  // informações da tela (ou padrão)
    document.getElementById('topo-titulo').textContent = info.titulo; // título do topo
    document.getElementById('topo-subtitulo').textContent = info.sub;  // legenda do topo

    // Prepara o conteúdo da tela conforme necessário
    if (tela === 'dashboard') DashboardUI.renderizar();     // dashboard sempre recalculado
    if (tela === 'edital') EditalUI.iniciar();              // liga os eventos do edital (idempotente)
    if (tela === 'simulado' && document.getElementById('tela-simulado').innerHTML.trim() === '') SimuladoUI.abrir({}); // simulado vazio abre a configuração
    if (tela === 'bancas') ConteudoUI.renderizarBancas();   // desenha as bancas
    if (tela === 'temas') ConteudoUI.renderizarTemas();     // desenha os temas

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
