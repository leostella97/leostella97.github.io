/* ============================================================
   GABARITO CAFÉ — js/motor-simulado.js
   A "máquina de café" do simulado: sorteia questões,
   embaralha alternativas e confere respostas.
   Aqui só existe lógica pura — nada de tela.
   ============================================================ */

// Objeto global do motor do simulado
const MotorSimulado = {

  // Embaralha uma lista (Fisher-Yates) sem alterar a original
  embaralhar(lista) {
    const copia = lista.slice();                            // copia para não mexer na original
    for (let i = copia.length - 1; i > 0; i--) {            // percorre do fim para o começo
      const j = Math.floor(Math.random() * (i + 1));        // sorteia uma posição de 0 até i
      [copia[i], copia[j]] = [copia[j], copia[i]];          // troca as posições i e j
    }
    return copia;                                           // devolve a cópia embaralhada
  },

  // Embaralha as alternativas de uma questão (e atualiza o índice da certa)
  embaralharAlternativas(questao) {
    // Cria pares "texto + posição original" para lembrar qual era a certa
    const pares = questao.alternativas.map((texto, indice) => ({ texto, indice })); // emparelha
    const sorteado = this.embaralhar(pares);                // embaralha os pares
    return {                                               // devolve a questão pronta para o jogo
      ...questao,                                          // mantém todos os dados originais
      alternativas: sorteado.map(p => p.texto),            // só os textos, já embaralhados
      correta: sorteado.findIndex(p => p.indice === questao.correta) // nova posição da resposta certa
    };
  },

  // Monta um simulado: filtra o banco e sorteia a quantidade pedida
  montar({ quantidade, materias = [], banca = '', excluirIds = [], idsExatos = null }) {
    // Se vieram questões exatas (modo "refazer erradas"), usa só elas
    let pool = idsExatos
      ? BancoQuestoes.filter(q => idsExatos.includes(q.id))   // pega só os ids pedidos
      : BancoQuestoes.filter(q => !excluirIds.includes(q.id)); // senão, todo o banco (menos exclusões)

    // Filtra por matérias, se o usuário escolheu alguma
    if (materias.length > 0) {
      pool = pool.filter(q => materias.includes(q.materia)); // só questões das matérias escolhidas
    }

    // Filtra pelo estilo de banca, se o usuário escolheu
    if (banca) {
      pool = pool.filter(q => q.banca === banca);           // só questões no estilo da banca
    }

    const sorteadas = this.embaralhar(pool).slice(0, quantidade); // sorteia e limita à quantidade
    return sorteadas.map(q => this.embaralharAlternativas(q));    // embaralha as alternativas de cada uma
  },

  // Confere se a resposta dada bate com a correta
  corrigir(questao, respostaIndice) {
    return respostaIndice === questao.correta;              // compara os índices
  },

  // Conta quantas questões existem para uma combinação de filtros
  contarDisponiveis({ materias = [], banca = '' }) {
    let pool = BancoQuestoes.slice();                       // começa com o banco inteiro
    if (materias.length > 0) {
      pool = pool.filter(q => materias.includes(q.materia)); // aplica o filtro de matérias
    }
    if (banca) {
      pool = pool.filter(q => q.banca === banca);           // aplica o filtro de banca
    }
    return pool.length;                                     // devolve o total disponível
  },

  // Lista as matérias que existem no banco (com contagem de questões)
  materiasDoBanco() {
    const contagem = {};                                    // dicionário matéria → quantidade
    for (const q of BancoQuestoes) {                        // percorre todas as questões
      contagem[q.materia] = (contagem[q.materia] || 0) + 1; // soma uma questão na matéria
    }
    // Converte o dicionário em lista ordenada
    return Object.keys(contagem).map(nome => ({ nome, quantidade: contagem[nome] })); // lista pronta
  },

  // Lista as bancas (estilos) presentes no banco, com contagem
  bancasDoBanco() {
    const contagem = {};                                    // dicionário banca → quantidade
    for (const q of BancoQuestoes) {                        // percorre todas as questões
      contagem[q.banca] = (contagem[q.banca] || 0) + 1;     // soma uma questão na banca
    }
    return Object.keys(contagem).map(nome => ({ nome, quantidade: contagem[nome] })); // lista pronta
  }
};
