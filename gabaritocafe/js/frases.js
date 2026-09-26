/* ============================================================
   GABARITO CAFÉ — js/frases.js
   Escolhe a frase motivadora (tema estudo) do ACESSO atual:

   - sorteia uma frase nova a cada vez que a página é aberta;
   - nunca repete a mesma frase duas visitas seguidas
     (guarda a última em localStorage);
   - durante a mesma visita a frase fica FIXA (não muda a cada
     clique no menu), e ela aparece no login e no dashboard.

   Ficou em arquivo próprio para ter uma responsabilidade só:
   cuidar das frases do café. ☕
   ============================================================ */

// Objeto global das frases de estudo
const FrasesEstudo = {

  // Chave onde guardamos o índice da última frase mostrada
  CHAVE_ULTIMA: 'gc_ultima_frase',

  // Frase escolhida para este acesso (vazia até o iniciar rodar)
  fraseDoAcesso: '',

  // Sorteia uma frase diferente da última mostrada (no idioma atual)
  proxima() {
    const frases = this.acervo();                           // pega o acervo no idioma atual
    const ultima = Armazenamento.ler(this.CHAVE_ULTIMA, -1); // lê o índice da última exibida
    let indice = Math.floor(Math.random() * frases.length); // sorteia um índice qualquer
    // Se caiu justamente na última, pula para a próxima (garante variedade)
    if (frases.length > 1 && indice === ultima) {           // sorteou a mesma de novo?
      indice = (indice + 1) % frases.length;                // anda uma casa e pega outra
    }
    Armazenamento.salvar(this.CHAVE_ULTIMA, indice);        // registra esta como a última
    return frases[indice];                                  // devolve a frase sorteada
  },

  // Devolve a lista de frases do idioma em uso (com reserva no português)
  acervo() {
    const porIdioma = DadosTemas.frasesMotivacionais;        // acervo separado por idioma
    const idioma = (typeof Idioma !== 'undefined') ? Idioma.atual : 'pt'; // idioma atual (ou pt)
    return porIdioma[idioma] || porIdioma.pt;                // devolve o do idioma ou o português
  },

  // Coloca a frase escolhida na tela de login
  aplicarNoLogin() {
    const alvo = document.getElementById('frase-login');    // procura o espaço da frase no login
    if (alvo) alvo.textContent = this.fraseDoAcesso;        // escreve a frase (se o elemento existe)
  },

  // Troca a frase na hora (usado quando o usuário muda de idioma)
  trocar() {
    this.fraseDoAcesso = this.proxima();                    // sorteia uma frase no novo idioma
    this.aplicarNoLogin();                                  // aplica no login
  },

  // Inicia: sorteia a frase do acesso e já aplica no login
  iniciar() {
    this.fraseDoAcesso = this.proxima();                    // sorteia uma frase nova
    this.aplicarNoLogin();                                  // mostra no login
  }
};

// Quando a página terminar de carregar, escolhe a frase do acesso
document.addEventListener('DOMContentLoaded', () => FrasesEstudo.iniciar()); // inicialização
