/* ============================================================
   GABARITO CAFÉ — js/armazenamento.js
   Camada única de acesso ao localStorage do navegador.
   Toda leitura/gravação do app passa por aqui, para ficar
   organizado e fácil de trocar no futuro.
   ============================================================ */

// Objeto global com as operações de armazenamento
const Armazenamento = {

  // Lê uma chave do localStorage e devolve o valor (ou um padrão)
  ler(chave, padrao) {
    try {                                     // tenta ler sem quebrar o app
      const bruto = localStorage.getItem(chave); // pega o texto bruto salvo
      if (bruto === null) return padrao;        // se não existe, devolve o padrão
      return JSON.parse(bruto);                 // transforma o texto em objeto
    } catch (erro) {                           // se algo der errado (corrompido etc.)
      console.warn('Não consegui ler ' + chave, erro); // registra o problema no console
      return padrao;                           // devolve o padrão e segue a vida
    }
  },

  // Grava um valor em uma chave (qualquer objeto vira texto JSON)
  salvar(chave, valor) {
    try {                                       // tenta gravar sem quebrar o app
      localStorage.setItem(chave, JSON.stringify(valor)); // converte em texto e salva
      return true;                              // avisa que deu certo
    } catch (erro) {                            // se o armazenamento estiver cheio ou bloqueado
      console.warn('Não consegui salvar ' + chave, erro); // registra o problema
      return false;                             // avisa que falhou
    }
  },

  // Apaga uma chave do localStorage
  remover(chave) {
    try { localStorage.removeItem(chave); }     // pede a remoção da chave
    catch (erro) { console.warn('Não consegui remover ' + chave, erro); } // registra se falhar
  }
};
