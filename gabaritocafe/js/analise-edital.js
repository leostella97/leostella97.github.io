/* ============================================================
   GABARITO CAFÉ — js/analise-edital.js
   Análise "caseira" do texto do edital: encontra o título,
   detecta cargos, identifica matérias e separa trechos
   importantes (conteúdo programático, requisitos etc.).
   É uma heurística honesta: dá um ótimo ponto de partida,
   mas o edital oficial é sempre a palavra final.
   ============================================================ */

// Objeto global de análise do edital
const AnaliseEdital = {

  // Catálogo de matérias reconhecidas (com os padrões que procuramos no texto)
  CATALOGO: [
    { id: 'portugues', rotulo: 'Língua Portuguesa', padroes: ['LINGUA PORTUGUESA', 'PORTUGUES', 'PORTUGUÊS'] }, // português
    { id: 'matematica', rotulo: 'Matemática', padroes: ['MATEMATICA', 'MATEMÁTICA'] },                          // matemática
    { id: 'raciocinio', rotulo: 'Raciocínio Lógico', padroes: ['RACIOCINIO LOGICO', 'RACIOCÍNIO LÓGICO', 'LOGICA'] }, // raciocínio lógico
    { id: 'informatica', rotulo: 'Informática', padroes: ['INFORMATICA', 'INFORMÁTICA', 'NOCOES DE INFORMATICA'] }, // informática
    { id: 'constitucional', rotulo: 'Direito Constitucional', padroes: ['DIREITO CONSTITUCIONAL', 'CONSTITUCIONAL'] }, // direito constitucional
    { id: 'administrativo', rotulo: 'Direito Administrativo', padroes: ['DIREITO ADMINISTRATIVO', 'ADMINISTRATIVO'] }, // direito administrativo
    { id: 'atualidades', rotulo: 'Atualidades', padroes: ['ATUALIDADES', 'CONHECIMENTOS GERAIS'] },              // atualidades
    { id: 'historia', rotulo: 'História do Brasil', padroes: ['HISTORIA DO BRASIL', 'HISTÓRIA DO BRASIL', 'HISTORIA'] }, // história
    { id: 'geografia', rotulo: 'Geografia', padroes: ['GEOGRAFIA'] },                                            // geografia
    { id: 'biologia', rotulo: 'Biologia', padroes: ['BIOLOGIA'] },                                               // biologia
    { id: 'fisica', rotulo: 'Física', padroes: ['FISICA', 'FÍSICA'] },                                           // física
    { id: 'quimica', rotulo: 'Química', padroes: ['QUIMICA', 'QUÍMICA'] },                                       // química
    { id: 'ingles', rotulo: 'Inglês', padroes: ['LINGUA INGLESA', 'INGLES', 'INGLÊS'] },                         // inglês
    { id: 'legislacao', rotulo: 'Legislação', padroes: ['LEGISLACAO', 'LEGISLAÇÃO', 'REGIME JURIDICO', 'ESTATUTO DOS SERVIDORES', 'LEI ORGANICA'] }, // legislação
    { id: 'redacao', rotulo: 'Redação', padroes: ['REDACAO', 'REDAÇÃO', 'PROVA DISCURSIVA'] },                   // redação
    { id: 'etica', rotulo: 'Ética', padroes: ['ETICA', 'ÉTICA NO SERVICO PUBLICO'] }                             // ética
  ],

  // Palavras típicas de nome de cargo (para achar os cargos do edital)
  PALAVRAS_CARGO: ['AGENTE', 'ANALISTA', 'ASSISTENTE', 'AUXILIAR', 'TECNICO', 'PROFESSOR', 'AUDITOR', 'OFICIAL', 'GUARDA', 'MOTORISTA', 'ENFERMEIRO', 'FISCAL', 'INSPETOR', 'ESCRIVAO', 'DELEGADO', 'PERITO', 'RECEPCIONISTA', 'SECRETARIO', 'ENGENHEIRO', 'ADVOGADO', 'CONTADOR', 'MEDICO', 'ODONTOLOGO', 'ARQUITETO', 'ADMINISTRADOR', 'COZINHEIRO', 'PORTEIRO', 'ZELADOR', 'VIGIA', 'SERVENTE', 'PEDREIRO', 'ELETRICISTA', 'GARI', 'JARDINEIRO', 'PSICOLOGO', 'ASSISTENTE SOCIAL'],

  // Normaliza o texto: tira acentos, vira maiúsculo (facilita comparar)
  normalizar(texto) {
    return String(texto)                                    // garante que é texto
      .normalize('NFD')                                     // separa letras dos acentos
      .replace(/[\u0300-\u036f]/g, '')                      // remove os acentos
      .toUpperCase();                                       // tudo maiúsculo
  },

  // Procura as matérias presentes no texto do edital
  detectarMaterias(texto) {
    const normal = this.normalizar(texto);                  // normaliza o texto inteiro
    const achadas = [];                                     // lista de matérias encontradas
    for (const materia of this.CATALOGO) {                  // percorre o catálogo
      const tem = materia.padroes.some(p => normal.includes(p)); // confere se algum padrão aparece
      if (tem) {                                            // se a matéria apareceu no texto
        achadas.push({                                      // monta o registro da matéria
          id: materia.id,                                   // id da matéria
          rotulo: materia.rotulo,                           // nome bonito da matéria
          temBanco: BancoQuestoes.some(q => q.materia === materia.rotulo) // temos questões dela no banco?
        });
      }
    }
    return achadas;                                         // devolve as matérias achadas
  },

  // Tenta identificar os cargos citados no edital
  extrairCargos(texto) {
    const linhas = String(texto).split(/\r?\n/).map(l => l.trim()).filter(Boolean); // quebra em linhas limpas
    const normLinhas = linhas.map(l => this.normalizar(l)); // versão normalizada de cada linha
    const candidatos = new Set();                           // conjunto (evita repetidos)

    // Procura a seção de cargos para começar a varrer dali
    const indice = normLinhas.findIndex(l => /(DOS CARGOS|CARGOS|VAGAS|EMPREGOS)/.test(l) && l.length < 40); // acha o cabeçalho
    const inicio = indice >= 0 ? indice + 1 : 0;            // começa depois do cabeçalho (ou no início)
    const fim = Math.min(linhas.length, inicio + 90);       // varre no máximo 90 linhas

    for (let i = inicio; i < fim; i++) {                    // percorre as linhas da seção
      const linha = linhas[i];                              // linha original
      const n = normLinhas[i];                              // linha normalizada
      if (n.length < 3 || n.length > 80) continue;          // ignora linhas vazias ou enormes
      if (/^(TABELA|QUADRO|CARGOS|VAGAS|TOTAL)/.test(n)) continue; // pula cabeçalhos de tabela
      const temPalavra = this.PALAVRAS_CARGO.some(p => n.includes(p)); // a linha cita um cargo típico?
      if (temPalavra) {                                     // se sim, é candidata a cargo
        // Limpa a linha: separadores de tabela, numeração, salários e vagas
        const limpo = linha.replace(/[|\t]+/g, ' ')         // troca separadores de tabela por espaço
          .replace(/\s{2,}/g, ' ')                          // junta espaços duplos
          .replace(/[-–:]?\s*R\$\s?[\d.,]+\s*$/i, '')       // corta "R$ 2.500,00" do fim (antes das vagas!)
          .replace(/[-–:]?\s*\d{1,3}(\.\d{3})*(,\d+)?\s*(VAGAS?)?\s*$/i, '') // corta "10 vagas" do fim
          .replace(/^\d+(\.\d+)*[-–:.)]?\s*/, '')           // corta a numeração do início ("1.1 ")
          .replace(/[-–:]\s*$/g, '')                        // corta separador órfão no fim
          .trim();                                          // limpa as pontas
        if (limpo.length >= 4) candidatos.add(limpo.slice(0, 70)); // guarda o cargo (limitado a 70 chars)
      }
    }

    // Plano B: se a seção não existia, varre o documento inteiro atrás de cargos
    if (candidatos.size === 0) {                            // se não achamos nada na seção
      for (let i = 0; i < normLinhas.length; i++) {         // percorre todas as linhas
        const n = normLinhas[i];                            // linha normalizada
        if (n.length > 70) continue;                        // ignora linhas longas demais
        const temPalavra = this.PALAVRAS_CARGO.some(p => n.includes(p)); // cita cargo típico?
        if (temPalavra && /\d/.test(n)) {                   // exige um número junto (vaga/salário)
          candidatos.add(linhas[i].slice(0, 70));           // guarda o candidato
        }
      }
    }

    return Array.from(candidatos).slice(0, 12);             // devolve no máximo 12 cargos
  },

  // Separa trechos importantes do edital (citações literais)
  extrairTrechos(texto) {
    const secoes = [                                        // seções que queremos citar
      { nome: 'Conteúdo programático', regex: /CONTE[UÚ]DO\s+PROGRAM[ÁA]TICO/i }, // o que estudar
      { nome: 'Requisitos para o cargo', regex: /REQUISITOS?/i },                 // o que precisa ter
      { nome: 'Remuneração', regex: /REMUNERA[ÇC][ÃA]O|VENCIMENTOS?|SAL[ÁA]RIO/i }, // quanto paga
      { nome: 'Inscrições', regex: /INSCRI[ÇC][ÕO]ES|DAS INSCRI/i },               // como se inscrever
      { nome: 'Provas e avaliação', regex: /DAS PROVAS|AVALIA[ÇC][ÃA]O|PROVA OBJETIVA/i } // como será a prova
    ];
    const trechos = [];                                     // lista de trechos achados
    for (const secao of secoes) {                           // percorre as seções
      const m = String(texto).match(secao.regex);           // procura o cabeçalho da seção
      if (m) {                                              // se achou
        let pedaco = String(texto).slice(m.index, m.index + 700); // pega 700 caracteres dali em diante
        pedaco = pedaco.replace(/\s{2,}/g, ' ').trim();     // junta espaços e limpa pontas
        trechos.push({ nome: secao.nome, texto: pedaco + '…' }); // guarda o trecho citável
      }
    }
    return trechos;                                         // devolve os trechos
  },

  // Análise completa: título + cargos + matérias + trechos
  analisar(texto) {
    if (!texto || String(texto).trim().length < 40) {       // texto curto demais para analisar
      return { titulo: '', cargos: [], materias: [], trechos: [], valido: false }; // devolve análise vazia
    }
    const linhas = String(texto).split(/\r?\n/).map(l => l.trim()).filter(Boolean); // quebra em linhas
    const titulo = linhas[0].slice(0, 140);                 // primeira linha vira o "título" do concurso
    return {                                               // monta o resultado completo
      titulo: titulo,                                      // título provável do concurso
      cargos: this.extrairCargos(texto),                    // cargos detectados
      materias: this.detectarMaterias(texto),               // matérias detectadas
      trechos: this.extrairTrechos(texto),                  // trechos citáveis
      valido: true                                         // análise válida
    };
  }
};
