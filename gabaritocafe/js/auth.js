/* ============================================================
   GABARITO CAFÉ — js/auth.js
   Contas e sessão 100% locais (localStorage do navegador).
   A senha é transformada em um hash antes de ser guardada,
   mas atenção: isso é proteção básica de curioso, não
   segurança bancária — tudo vive no navegador do usuário.
   ============================================================ */

// Objeto global de autenticação
const Auth = {

  // Nome da chave onde a lista de usuários fica guardada
  CHAVE_USUARIOS: 'gc_usuarios',

  // Nome da chave da sessão atual (quem está logado)
  CHAVE_SESSAO: 'gc_sessao',

  // Transforma um texto em hash (para não guardar a senha "na cara")
  async hash(texto) {
    try {                                     // tenta usar o hash forte do navegador
      if (window.crypto && window.crypto.subtle) { // confere se o recurso existe
        const bytes = new TextEncoder().encode(texto); // converte o texto em bytes
        const digest = await window.crypto.subtle.digest('SHA-256', bytes); // calcula SHA-256
        // Converte cada byte do digest em hexadecimal e junta tudo
        return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
      }
    } catch (erro) { /* se falhar, cai no plano B abaixo */ }

    // Plano B: hash simples (djb2), para navegadores mais restritos
    let resultado = 5381;                     // semente clássica do djb2
    for (let i = 0; i < texto.length; i++) {  // percorre cada letra
      resultado = ((resultado << 5) + resultado + texto.charCodeAt(i)) >>> 0; // mistura a letra no hash
    }
    return 'djb2_' + resultado.toString(16);  // devolve o hash com prefixo identificador
  },

  // Devolve a lista de usuários cadastrados
  usuarios() {
    return Armazenamento.ler(this.CHAVE_USUARIOS, []); // lê (ou lista vazia)
  },

  // Devolve o usuário logado no momento (ou null)
  usuarioAtual() {
    const sessao = Armazenamento.ler(this.CHAVE_SESSAO, null); // lê a sessão
    if (!sessao) return null;                 // sem sessão, ninguém logado
    const usuario = this.usuarios().find(u => u.id === sessao.usuarioId); // procura o usuário da sessão
    return usuario || null;                   // devolve o usuário (ou null se sumiu)
  },

  // Devolve o id de quem está usando o app agora (conta logada ou visitante)
  // O visitante não está na lista de contas, por isso não dá para usar usuarioAtual()
  idAtual() {
    const usuario = this.usuarioAtual();                    // tenta achar a conta logada
    if (usuario) return usuario.id;                         // conta logada, devolve o id dela
    const sessao = Armazenamento.ler(this.CHAVE_SESSAO, null); // lê a sessão salva
    return sessao ? sessao.usuarioId : null;                // visitante (ou ninguém logado)
  },

  // Cria uma conta nova (com validações amigáveis)
  async cadastrar(nome, email, senha) {
    nome = String(nome || '').trim();         // limpa espaços do nome
    email = String(email || '').trim().toLowerCase(); // limpa e padroniza o e-mail
    if (nome.length < 2) return { ok: false, erro: T('erro_nome_curto') }; // valida nome
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, erro: T('erro_email_invalido') }; // valida e-mail
    if (senha.length < 4) return { ok: false, erro: T('erro_senha_curta') }; // valida senha

    const usuarios = this.usuarios();         // pega a lista atual
    if (usuarios.some(u => u.email === email)) return { ok: false, erro: T('erro_email_existe') }; // evita duplicado

    const novo = {                            // monta o novo usuário
      id: 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), // id único improvisado
      nome: nome,                             // nome limpo
      email: email,                           // e-mail padronizado
      senhaHash: await this.hash(senha),      // senha embaralhada (nunca o texto puro)
      foco: '',                               // cargo que o usuário está disputando
      criadoEm: new Date().toISOString()      // data de criação
    };
    usuarios.push(novo);                      // adiciona à lista
    Armazenamento.salvar(this.CHAVE_USUARIOS, usuarios); // grava a lista
    Armazenamento.salvar(this.CHAVE_SESSAO, { usuarioId: novo.id, inicio: Date.now() }); // já loga o usuário
    return { ok: true, usuario: novo };       // sucesso!
  },

  // Faz login com e-mail e senha
  async entrar(email, senha) {
    email = String(email || '').trim().toLowerCase(); // padroniza o e-mail
    const usuario = this.usuarios().find(u => u.email === email); // procura o usuário
    if (!usuario) return { ok: false, erro: T('erro_email_nao_encontrado') }; // e-mail desconhecido
    const hashDigitado = await this.hash(senha); // embaralha a senha digitada
    if (hashDigitado !== usuario.senhaHash) return { ok: false, erro: T('erro_senha_errada') }; // senha não bate
    Armazenamento.salvar(this.CHAVE_SESSAO, { usuarioId: usuario.id, inicio: Date.now() }); // abre a sessão
    return { ok: true, usuario: usuario };    // sucesso!
  },

  // Entra como visitante (modo degustação, sem cadastro)
  entrarVisitante() {
    Armazenamento.salvar(this.CHAVE_SESSAO, { usuarioId: 'visitante', inicio: Date.now() }); // sessão de visitante
    return { ok: true, usuario: { id: 'visitante', nome: 'Visitante', foco: '' } }; // usuário fictício
  },

  // Encerra a sessão atual
  sair() {
    Armazenamento.remover(this.CHAVE_SESSAO); // apaga a sessão
  },

  // Guarda o cargo que o usuário está disputando
  salvarFoco(foco) {
    const usuario = this.usuarioAtual();      // pega quem está logado
    if (!usuario) return false;               // sem sessão, sem gravar
    if (usuario.id === 'visitante') {         // visitante também pode guardar foco (em chave própria)
      Armazenamento.salvar('gc_foco_visitante', foco); // grava o foco do visitante
      return true;                            // sucesso
    }
    const usuarios = this.usuarios();         // pega a lista
    const alvo = usuarios.find(u => u.id === usuario.id); // acha o usuário na lista
    if (alvo) alvo.foco = foco;               // atualiza o foco
    Armazenamento.salvar(this.CHAVE_USUARIOS, usuarios); // regrava a lista
    return true;                              // sucesso
  },

  // Devolve o foco do usuário atual (ou texto vazio)
  focoAtual() {
    const usuario = this.usuarioAtual();      // pega quem está logado
    if (!usuario) return '';                  // ninguém logado
    if (usuario.id === 'visitante') return Armazenamento.ler('gc_foco_visitante', ''); // foco do visitante
    return usuario.foco || '';                // foco da conta
  }
};
