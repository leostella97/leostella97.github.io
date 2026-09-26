/* ============================================================
   GABARITO CAFÉ — js/tema.js
   Liga/desliga o tema escuro ("café à noite"). A escolha fica
   salva no localStorage e é aplicada no <html> pelo atributo
   data-tema. Todo o visual vem das variáveis CSS, então
   trocar o tema é só trocar o atributo.
   ============================================================ */

// Objeto global do tema
const Tema = {

  // Chave onde a preferência de tema fica salva
  CHAVE: 'gc_tema',

  // Tema em uso agora: 'claro' ou 'escuro'
  atual: 'claro',

  // Aplica o tema atual no documento e atualiza os botões
  aplicar() {
    // Escreve o tema no <html> (o CSS reage a este atributo)
    document.documentElement.setAttribute('data-tema', this.atual === 'escuro' ? 'escuro' : 'claro');
    // Atualiza o ícone de todos os botões de tema (login e menu lateral)
    document.querySelectorAll('.botao-tema').forEach(botao => { // percorre os botões
      botao.textContent = this.atual === 'escuro' ? '☀️' : '🌙'; // sol no escuro, lua no claro
    });
  },

  // Define um tema específico, salvando a escolha
  definir(nome) {
    this.atual = nome === 'escuro' ? 'escuro' : 'claro';     // normaliza o valor
    Armazenamento.salvar(this.CHAVE, this.atual);            // salva a preferência
    this.aplicar();                                          // aplica na tela
  },

  // Alterna entre claro e escuro (e avisa o usuário)
  alternar() {
    const novo = this.atual === 'escuro' ? 'claro' : 'escuro'; // calcula o tema oposto
    this.definir(novo);                                      // aplica o novo tema
    // Mostra um aviso amigável sobre a troca
    if (typeof App !== 'undefined' && App.torrada) {         // se o app já está carregado
      App.torrada(T(novo === 'escuro' ? 'toast_tema_escuro' : 'toast_tema_claro')); // avisa
    }
  },

  // Inicia o tema salvo (ou o claro, padrão) e liga os botões
  iniciar() {
    const salvo = Armazenamento.ler(this.CHAVE, 'claro');    // lê a preferência salva
    this.atual = salvo === 'escuro' ? 'escuro' : 'claro';    // normaliza o valor lido
    this.aplicar();                                          // aplica o tema
    if (this._ligado) return;                                // evita ligar os cliques duas vezes
    this._ligado = true;                                     // marca como já ligado
    // Liga todos os botões de tema (login e menu lateral)
    document.querySelectorAll('.botao-tema').forEach(botao => { // percorre os botões
      botao.addEventListener('click', () => this.alternar());   // alterna ao clicar
    });
  }
};

// Como os scripts ficam no fim do <body>, aplica o tema já no carregamento
Tema.iniciar();                                              // aplica o tema salvo imediatamente
