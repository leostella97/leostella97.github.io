/* ============================================================
   GABARITO CAFÉ — js/banco-questoes.js
   O coração do simulado: questões autorais, organizadas por
   matéria, com explicação, pegadinha da banca e aula no
   YouTube. Para adicionar questões novas, copie um bloco
   completo e siga o mesmo formato (veja o README).
   ============================================================ */

// Banco de questões do Gabarito Café
const BancoQuestoes = [

  /* ===================== LÍNGUA PORTUGUESA ===================== */
  {
    id: 'p01',                          // identificador único da questão
    materia: 'Língua Portuguesa',       // matéria (usada nos filtros do simulado)
    tema: 'Verbos impessoais (haver/fazer)', // assunto específico
    banca: 'CESPE/Cebraspe',            // banca cujo estilo inspirou a questão
    enunciado: 'Assinale a frase correta quanto à concordância verbal:', // texto da pergunta
    alternativas: [                     // opções de resposta
      'Fazem dois anos que estudo para concursos.',
      'Faz dois anos que estudo para concursos.',
      'Houveram muitos candidatos na prova.',
      'Haviam dias em que eu não estudava.',
      'Devem haver soluções melhores.'
    ],
    correta: 1,                         // índice da alternativa certa (começa em 0)
    explicacao: 'Os verbos "haver" (no sentido de existir) e "fazer" (indicando tempo decorrido) são impessoais: não têm sujeito e ficam sempre na 3ª pessoa do singular. Por isso o certo é "faz dois anos" e "havia muitos candidatos".', // explicação do gabarito
    dica: 'Pegadinha clássica da CESPE: "dois anos" parece sujeito, mas não é — o verbo não concorda com ele. Sempre que "fazer" indicar tempo, trave no singular.', // pegadinha da banca
    video: 'verbos impessoais haver e fazer para concurso' // busca da aula no YouTube
  },
  {
    id: 'p02',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Crase',                      // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Complete corretamente: "Os candidatos chegaram ___ sala de provas às 13h."', // pergunta
    alternativas: [                     // opções
      'a',
      'à',
      'há',
      'aa',
      'á'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Quem chega, chega A algum lugar (preposição pedida pelo verbo "chegar"). "Sala" pede artigo "a". Preposição a + artigo a = crase (à).', // explicação
    dica: 'A FGV ama trocar "a" por "há": "há" indica tempo passado ("há dois anos"), nunca lugar. Se dá para trocar por "ao", tem crase.', // pegadinha
    video: 'crase para concursos como usar' // busca no YouTube
  },
  {
    id: 'p03',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Regência verbal (preferir)', // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Assinale a frase que segue a norma culta:', // pergunta
    alternativas: [                     // opções
      'Prefiro estudar do que assistir séries.',
      'Prefiro mais estudar que assistir séries.',
      'Prefiro estudar a assistir séries.',
      'Prefiro estudar que assistir séries.',
      'Prefiro antes estudar que assistir séries.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'O verbo "preferir" rege a preposição "a": prefere-se uma coisa A outra. Formas como "prefiro X do que Y" ou "prefiro mais X que Y" são vícios de linguagem reprovados pela norma culta.', // explicação
    dica: 'Pegadinha da FCC: "preferir mais... do que" soa natural na fala — e é exatamente aí que a banca fisga o candidato desavisado.', // pegadinha
    video: 'regência verbal preferir a concurso' // busca no YouTube
  },
  {
    id: 'p04',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Uso dos porquês',            // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Complete: "Ninguém entendeu o ___ daquela decisão."', // pergunta
    alternativas: [                     // opções
      'porque',
      'por que',
      'porquê',
      'por quê'
    ],
    correta: 2,                         // índice da certa
    explicacao: '"Porquê" (junto e com acento) é substantivo: vem acompanhado de artigo ("o porquê") e significa "motivo". "Porque" é conjunção; "por que" é preposição + pronome; "por quê" só aparece no fim de frase.', // explicação
    dica: 'Atalho de prova: antes de artigo ("o", "um") ou no fim da frase, é "porquê" substantivo. A banca confia que você vai marcar "porque" no automático.', // pegadinha
    video: 'uso dos porquês para concurso' // busca no YouTube
  },
  {
    id: 'p05',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Colocação pronominal',       // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Assinale a frase que obedece à norma culta:', // pergunta
    alternativas: [                     // opções
      'Me empresta o caderno, por favor?',
      'Empresta-me o caderno, por favor?',
      'Não empresta-me o caderno, por favor?',
      'Emprestaria-me o caderno?',
      'Nunca esqueça-se do edital.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Não se inicia frase com pronome oblíquo ("me empresta" é coloquial). Depois de palavra negativa ("não"), a próclise é obrigatória: "não me empresta". Com futuro do pretérito, o correto é mesóclise: "emprestar-me-ia".', // explicação
    dica: 'A FCC e a IBFC adoram o "não + pronome": palavra negativa puxa o pronome para antes do verbo (próclise). "Nunca esqueça-se" também está errada pela mesma regra.', // pegadinha
    video: 'colocação pronominal próclise ênclise mesóclise concurso' // busca no YouTube
  },
  {
    id: 'p06',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Pontuação (vírgula)',        // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Em qual frase a vírgula está bem empregada?', // pergunta
    alternativas: [                     // opções
      'Os alunos, estudaram muito para a prova.',
      'Depois da aula, fomos tomar um café.',
      'O edital, será publicado amanhã.',
      'A prova de hoje, está muito difícil.',
      'Todos os candidatos, receberam o cartão.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Em "b", a vírgula separa uma expressão deslocada para o início da frase (adjunto adverbial). Nas demais alternativas, a vírgula separa o sujeito do verbo — erro grave e o mais cobrado em provas.', // explicação
    dica: 'Regra de ouro: sujeito e verbo são inseparáveis. Se a frase tem vírgula entre eles, desconfie na hora — é a pegadinha número 1 de pontuação.', // pegadinha
    video: 'vírgula entre sujeito e verbo erro para concurso' // busca no YouTube
  },
  {
    id: 'p07',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Interpretação de texto',     // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Leia o trecho: "Estudar todos os dias, nem que seja por meia hora, rende mais do que virar a noite na véspera. O cérebro consolida a memória aos poucos, como um café passado lentamente: a pressa queima o grão e amarga o resultado." A ideia central do texto é:', // pergunta
    alternativas: [                     // opções
      'O café passado rápido é o mais saboroso.',
      'Estudar na véspera é a estratégia mais eficiente.',
      'A constância diária vale mais que a maratona de última hora.',
      'Memória não se relaciona com frequência de estudo.',
      'Só se aprende estudando muitas horas seguidas.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'O texto compara o estudo ao café passado devagar: a regularidade (goles diários) consolida a memória melhor do que a correria da véspera. A metáfora do café reforça a ideia de processo lento e constante.', // explicação
    dica: 'Em interpretação, desconfie de alternativas com palavras radicais ("só", "nunca", "mais", "todo"). O texto raramente é tão absoluto quanto a alternativa.', // pegadinha
    video: 'interpretação de texto para concursos dicas' // busca no YouTube
  },
  {
    id: 'p08',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Concordância nominal',       // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Complete: "Seguem ___ os documentos solicitados."', // pergunta
    alternativas: [                     // opções
      'anexo',
      'anexos',
      'anexas',
      'em anexo',
      'anexada'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Anexo" é adjetivo e concorda com o substantivo a que se refere: documentos anexos. "Em anexo" é expressão invariável, mas não se encaixa na construção pedida ("seguem em anexo" seria aceitável em registro informal, não é o padrão cobrado em prova).', // explicação
    dica: 'Pegadinha recorrente: "segue anexo" (um documento) x "seguem anexos" (vários). A banca inverte o número do substantivo para derrubar quem concorda no automático.', // pegadinha
    video: 'concordância nominal anexo incluso obrigado para concurso' // busca no YouTube
  },
  {
    id: 'p09',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Ortografia (Acordo Ortográfico)', // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Segundo a ortografia oficial, qual grafia está correta?', // pergunta
    alternativas: [                     // opções
      'jibóia',
      'jiboia',
      'jibóya',
      'giboia',
      'jiboya'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Acordo Ortográfico de 1990 eliminou o acento dos ditongos abertos "ei" e "oi" das palavras paroxítonas: jiboia, ideia, heroico, assembleia. A grafia com "g" ("giboia") simplesmente não existe na norma oficial.', // explicação
    dica: 'Depois do Acordo: paroxítonas com "ei"/"oi" abertos perderam o acento, mas as oxítonas mantiveram — "herói" continua acentuada. A banca mistura as duas regras.', // pegadinha
    video: 'acordo ortográfico ditongos abertos ei oi para concurso' // busca no YouTube
  },
  {
    id: 'p10',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Acentuação gráfica',         // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Assinale a palavra grafada corretamente:', // pergunta
    alternativas: [                     // opções
      'onibus',
      'ônibus',
      'onibús',
      'ônibuz',
      'ónibus'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Ônibus" é paroxítona terminada em "us" que se pronuncia como proparoxítona — e toda proparoxítona (real ou aparente) é acentuada. As demais grafias erram a posição do acento ou a letra.', // explicação
    dica: 'Regra infalível: TODA proparoxítona leva acento. Se você lê a palavra com a força na antepenúltima sílaba, acentue sem medo.', // pegadinha
    video: 'regras de acentuação gráfica para concurso' // busca no YouTube
  },

  /* ===================== MATEMÁTICA ===================== */
  {
    id: 'm01',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Porcentagem',                // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Em um concurso, 12.000 candidatos se inscreveram. No dia da prova, 25% faltaram. Quantos candidatos fizeram a prova?', // pergunta
    alternativas: [                     // opções
      '3.000',
      '8.000',
      '9.000',
      '9.600',
      '10.000'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo de como resolver
      'Calcule quem faltou: 25% de 12.000 = 12.000 × 0,25 = 3.000.',
      'Subtraia dos inscritos: 12.000 − 3.000 = 9.000.'
    ],
    explicacao: 'A pergunta é sobre quem FEZ a prova, não sobre quem faltou. Dos 12.000 inscritos, 3.000 faltaram, então 9.000 compareceram.', // explicação
    dica: 'A Vunesp sempre oferece "3.000" nas alternativas — o valor dos que FALTARAM. A banca aposta que você responde a primeira conta que aparece. Leia o comando até o fim!', // pegadinha
    video: 'porcentagem para concursos como calcular' // busca no YouTube
  },
  {
    id: 'm02',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Regra de três composta',     // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Uma gráfica, com 4 impressoras, produz 600 provas em 3 horas. Mantendo o ritmo, quantas provas 6 impressoras produziriam em 2 horas?', // pergunta
    alternativas: [                     // opções
      '600',
      '900',
      '450',
      '800',
      '1.200'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Monte a proporção composta: provas = 600 × (6/4) × (2/3).',
      'Impressoras: 6/4 = 1,5 (mais impressoras, mais provas — proporção direta).',
      'Tempo: 2/3 ≈ 0,667 (menos tempo, menos provas — proporção direta).',
      '600 × 1,5 × 0,667 = 600 provas.'
    ],
    explicacao: 'Com 50% mais impressoras a produção cresce 50%; com 1/3 a menos de tempo ela cai 1/3. Os dois efeitos se anulam: continuam 600 provas.', // explicação
    dica: 'Em regra de três composta, escreva cada grandeza e classifique direta/inversa ANTES de multiplicar. O erro clássico é inverter a grandeza errada — e a alternativa dessa conta errada está lá.', // pegadinha
    video: 'regra de três composta para concurso passo a passo' // busca no YouTube
  },
  {
    id: 'm03',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Juros simples',              // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Um estudante aplicou R$ 1.500,00 a juros simples de 2% ao mês. Qual será o montante após 8 meses?', // pergunta
    alternativas: [                     // opções
      'R$ 1.560,00',
      'R$ 1.740,00',
      'R$ 1.800,00',
      'R$ 2.400,00',
      'R$ 1.620,00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Aplique a fórmula dos juros simples: J = C × i × t.',
      'J = 1.500 × 0,02 × 8 = 1.500 × 0,16 = R$ 240,00.',
      'Montante: M = C + J = 1.500 + 240 = R$ 1.740,00.'
    ],
    explicacao: 'No regime simples, o juro incide sempre sobre o capital inicial: 2% de 1.500 é R$ 30,00 por mês, vezes 8 meses = R$ 240,00 de juros.', // explicação
    dica: 'Confira as unidades antes de calcular: taxa mensal com tempo em meses. A alternativa "1.800" engana quem usou 2,5% ou errou o número de meses.', // pegadinha
    video: 'juros simples para concursos fórmula' // busca no YouTube
  },
  {
    id: 'm04',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Juros compostos',            // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'R$ 10.000,00 aplicados a juros compostos de 10% ao ano renderão, em 2 anos, um montante de:', // pergunta
    alternativas: [                     // opções
      'R$ 12.000,00',
      'R$ 12.100,00',
      'R$ 12.200,00',
      'R$ 11.000,00',
      'R$ 12.010,00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Aplique a fórmula do montante composto: M = C × (1 + i)^t.',
      'M = 10.000 × (1,10)² = 10.000 × 1,21.',
      'M = R$ 12.100,00.'
    ],
    explicacao: 'No regime composto, o juro do 2º ano incide sobre o montante do 1º: 10.000 → 11.000 → 12.100. A alternativa "12.000" é a armadilha de quem calculou juros simples.', // explicação
    dica: 'Quando a banca mistura regimes na mesma questão, ela quer que você confunda. Tempo maior que 1 período + "juros compostos" no enunciado = eleve à potência, não multiplique.', // pegadinha
    video: 'juros compostos para concurso fórmula montante' // busca no YouTube
  },
  {
    id: 'm05',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Média aritmética',           // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'As notas de um candidato em 4 provas foram 7, 8, 9 e 10. A média aritmética dessas notas é:', // pergunta
    alternativas: [                     // opções
      '8,0',
      '8,5',
      '8,75',
      '9,0',
      '8,25'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Some as notas: 7 + 8 + 9 + 10 = 34.',
      'Divida pela quantidade de provas: 34 ÷ 4 = 8,5.'
    ],
    explicacao: 'Média aritmética é a soma de todos os valores dividida pela quantidade de valores. 34 ÷ 4 = 8,5.', // explicação
    dica: 'Média não é a "nota do meio" (isso é mediana). A banca troca os conceitos de propósito e ainda oferece a mediana nas alternativas.', // pegadinha
    video: 'média aritmética para concursos exercícios' // busca no YouTube
  },
  {
    id: 'm06',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Equação do 1º grau',         // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Resolva a equação: 3(x − 2) = 2x + 4', // pergunta
    alternativas: [                     // opções
      'x = 10',
      'x = 8',
      'x = 6',
      'x = 4',
      'x = 2'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Aplique a distributiva: 3x − 6 = 2x + 4.',
      'Leve os termos com x para um lado e os números para o outro: 3x − 2x = 4 + 6.',
      'x = 10.'
    ],
    explicacao: 'O erro campeão é esquecer de distribuir o 3 para o "−2", ficando "3x − 2 = 2x + 4", que daria x = 6 — e essa resposta está entre as alternativas.', // explicação
    dica: 'A banca coloca exatamente o resultado da conta errada (sem distributiva) nas alternativas. Distribua o número para TODOS os termos do parêntese, com o sinal.', // pegadinha
    video: 'equação do primeiro grau para concurso resolvida' // busca no YouTube
  },
  {
    id: 'm07',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Sistema de equações',        // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No sistema abaixo, o valor de x é: { x + y = 20 ; x − y = 8 }', // pergunta
    alternativas: [                     // opções
      '12',
      '14',
      '16',
      '8',
      '10'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Some as duas equações (método da adição): (x + y) + (x − y) = 20 + 8.',
      'O y desaparece: 2x = 28.',
      'x = 14 (e, substituindo, y = 6).'
    ],
    explicacao: 'Somando as equações, o "+y" e o "−y" se cancelam, sobrando 2x = 28, logo x = 14. A alternativa "12" é o valor de y disfarçado.', // explicação
    dica: 'A banca adora inverter x com y: resolve o sistema e oferece o valor da OUTRA incógnita como alternativa. Depois de achar x, confira qual incógnita a pergunta pede.', // pegadinha
    video: 'sistema de equações método da adição para concurso' // busca no YouTube
  },
  {
    id: 'm08',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Razão e proporção',          // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Uma sociedade divide R$ 150,00 entre dois sócios na razão 2 : 3. Quanto recebe o sócio com a parte maior?', // pergunta
    alternativas: [                     // opções
      'R$ 60,00',
      'R$ 75,00',
      'R$ 90,00',
      'R$ 100,00',
      'R$ 120,00'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Some as partes da razão: 2 + 3 = 5 partes no total.',
      'Calcule o valor de uma parte: 150 ÷ 5 = R$ 30,00.',
      'Parte maior: 3 × 30 = R$ 90,00.'
    ],
    explicacao: 'A razão 2:3 divide o total em 5 partes iguais de R$ 30,00. O sócio maior fica com 3 partes: R$ 90,00.', // explicação
    dica: 'A pegadinha clássica é dividir por 3 (o maior número da razão) em vez de somar as partes. "150 × 2/3 = 100" — e lá está a alternativa 100 esperando.', // pegadinha
    video: 'razão e proporção divisão proporcional para concurso' // busca no YouTube
  },
  {
    id: 'm09',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Área de figuras planas',     // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Uma sala retangular tem 6 m de comprimento por 4,5 m de largura. A área dessa sala é:', // pergunta
    alternativas: [                     // opções
      '21 m²',
      '24 m²',
      '27 m²',
      '30 m²',
      '25,5 m²'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Área do retângulo = comprimento × largura.',
      '6 × 4,5 = 27 m².'
    ],
    explicacao: 'A área é o produto das duas dimensões: 6 × 4,5 = 27 m². Perímetro (soma dos lados) seria 6 + 4,5 + 6 + 4,5 = 21 m — e a alternativa "21" está lá de propósito.', // explicação
    dica: 'Perímetro não é área! A banca põe o perímetro entre as alternativas para pegar quem confunde os dois conceitos na pressa.', // pegadinha
    video: 'área do retângulo exercícios para concurso' // busca no YouTube
  },
  {
    id: 'm10',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Progressão aritmética',      // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Na progressão aritmética 2, 5, 8, 11, ..., o 12º termo é:', // pergunta
    alternativas: [                     // opções
      '32',
      '33',
      '34',
      '35',
      '36'
    ],
    correta: 3,                         // índice da certa
    passos: [                           // passo a passo
      'Calcule a razão: 5 − 2 = 3.',
      'Use a fórmula do termo geral: a(n) = a1 + (n − 1) × r.',
      'a(12) = 2 + (12 − 1) × 3 = 2 + 33 = 35.'
    ],
    explicacao: 'Com razão 3, o termo geral é a(n) = 2 + (n − 1)·3. Para n = 12: 2 + 33 = 35.', // explicação
    dica: 'O erro clássico é usar "n" em vez de "n − 1" na fórmula (2 + 12×3 = 38). A banca coloca a conta errada nas alternativas — use a fórmula com calma.', // pegadinha
    video: 'progressão aritmética termo geral para concurso' // busca no YouTube
  },

  /* ===================== RACIOCÍNIO LÓGICO ===================== */
  {
    id: 'r01',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Negação de proposições',     // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A negação lógica de "Todo candidato estuda" é:', // pergunta
    alternativas: [                     // opções
      'Nenhum candidato estuda.',
      'Todo candidato não estuda.',
      'Algum candidato não estuda.',
      'Algum candidato estuda.',
      'Pelo menos um candidato estuda.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A negação do TODO é o ALGUM NÃO: basta existir um único candidato que não estuda para a afirmação original ser falsa. "Nenhum estuda" é a negação de "algum estuda", não de "todo".', // explicação
    dica: 'Pegadinha CESPE clássica: a negação de "todo" NUNCA é "nenhum" — é "algum não". Grave o par: todo ↔ algum não.', // pegadinha
    video: 'negação de proposições todo algum nenhum raciocínio lógico' // busca no YouTube
  },
  {
    id: 'r02',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Equivalência lógica (contrapositiva)', // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'A proposição logicamente equivalente a "Se chove, então a rua molha" é:', // pergunta
    alternativas: [                     // opções
      'Se a rua molha, então chove.',
      'Se não chove, então a rua não molha.',
      'Se a rua não molha, então não chove.',
      'Chove e a rua não molha.',
      'Não chove e a rua molha.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A contrapositiva (inverte a ordem e nega os dois lados) é equivalente ao condicional: "Se não B, então não A". Se a rua não molhou, é impossível ter chovido.', // explicação
    dica: 'A FGV ama a contrapositiva. As duas armadilhas: inverter sem negar (alternativa a) e negar sem inverter (alternativa b) — nenhuma das duas equivale ao condicional.', // pegadinha
    video: 'equivalência lógica contrapositiva se então para concurso' // busca no YouTube
  },
  {
    id: 'r03',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Leis de De Morgan',          // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A negação de "Estudo português e estudo matemática" é:', // pergunta
    alternativas: [                     // opções
      'Não estudo português e não estudo matemática.',
      'Não estudo português ou não estudo matemática.',
      'Estudo português ou estudo matemática.',
      'Não estudo português e estudo matemática.',
      'Estudo português ou não estudo matemática.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Pela Lei de De Morgan, a negação de "p e q" é "não p OU não q": basta uma das partes falhar para o "e" ser falso.', // explicação
    dica: 'Na negação, o "e" vira "ou" e cada parte é negada. Quem troca só as negações e mantém o "e" (alternativa a) cai na pegadinha mais repetida da lógica.', // pegadinha
    video: 'leis de de morgan negação e ou raciocínio lógico' // busca no YouTube
  },
  {
    id: 'r04',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Sequências lógicas',         // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Na sequência 2, 6, 12, 20, 30, ..., o próximo termo é:', // pergunta
    alternativas: [                     // opções
      '36',
      '40',
      '42',
      '44',
      '48'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Observe as diferenças entre termos seguidos: 4, 6, 8, 10.',
      'As diferenças crescem de 2 em 2: a próxima será 12.',
      '30 + 12 = 42.'
    ],
    explicacao: 'Os termos seguem o padrão n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6... O próximo é 6×7 = 42.', // explicação
    dica: 'Quando a sequência não é PA nem PG, olhe as DIFERENÇAS entre os termos. A banca conta com você tentando multiplicar tudo por 3 ou somar 4 direto.', // pegadinha
    video: 'sequências lógicas para concurso padrão diferenças' // busca no YouTube
  },
  {
    id: 'r05',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Verdades e mentiras',        // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Ana, Bia e Caio fizeram uma prova. Apenas UM deles fala a verdade. Ana diz: "Bia mentiu." Bia diz: "Eu não menti." Caio diz: "Ana mentiu." Quem fala a verdade?', // pergunta
    alternativas: [                     // opções
      'Ana',
      'Bia',
      'Caio',
      'Ninguém',
      'Impossível determinar'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Teste a hipótese "Ana diz a verdade": então Bia mentiu (frase de Bia é falsa) e Caio mentiu ("Ana mentiu" é falso). Exatamente uma verdade. ✓',
      'Teste "Bia diz a verdade": então "Bia mentiu" (frase de Ana) é falso, e "Ana mentiu" (Caio) seria verdadeiro. Duas verdades. ✗',
      'Teste "Caio diz a verdade": "Ana mentiu" é verdadeiro → "Bia mentiu" é falso → Bia falou a verdade. Duas verdades. ✗'
    ],
    explicacao: 'Testando cada hipótese, somente "Ana diz a verdade" se sustenta com exatamente um único verdadeiro, como o enunciado exige.', // explicação
    dica: 'Método infalível: suponha que o primeiro fala a verdade e veja se o resto fecha. Se quebrar, troque a hipótese. Nunca tente resolver "de cabeça" — a banca adora frases que se referem umas às outras.', // pegadinha
    video: 'questões de verdades e mentiras raciocínio lógico como resolver' // busca no YouTube
  },
  {
    id: 'r06',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Silogismos e diagramas',     // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Considere as premissas: "Todo servidor público é responsável" e "João é servidor público". Logo:', // pergunta
    alternativas: [                     // opções
      'João pode não ser responsável.',
      'Todo responsável é servidor público.',
      'João é responsável.',
      'João não é responsável.',
      'Nada se pode concluir.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'É um silogismo válido: se a primeira premissa cobre todo servidor e João é servidor, ele está dentro do conjunto dos responsáveis. Desenhe: círculo "servidores" dentro do círculo "responsáveis", e João dentro de "servidores".', // explicação
    dica: 'A alternativa (b) inverte a afirmação: "todo servidor é responsável" NÃO implica "todo responsável é servidor". A inversão indevida é a pegadinha clássica da banca.', // pegadinha
    video: 'silogismo lógico diagramas para concurso' // busca no YouTube
  },
  {
    id: 'r07',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Princípio multiplicativo',   // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Com 5 camisetas e 3 bermudas diferentes, quantas combinações de roupa é possível montar?', // pergunta
    alternativas: [                     // opções
      '8',
      '10',
      '12',
      '15',
      '30'
    ],
    correta: 3,                         // índice da certa
    passos: [                           // passo a passo
      'Cada camiseta pode combinar com cada uma das 3 bermudas.',
      'Total: 5 camisetas × 3 bermudas = 15 combinações.'
    ],
    explicacao: 'Pelo princípio multiplicativo, escolhas independentes se multiplicam: 5 × 3 = 15.', // explicação
    dica: 'A alternativa "8" (5+3) é a pegadinha da soma. Regra: "combinações" → multiplica; "ou um ou outro" → soma. A banca troca os operadores de propósito.', // pegadinha
    video: 'princípio multiplicativo contagem para concurso' // busca no YouTube
  },
  {
    id: 'r08',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Ordenação',                  // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Ana é mais alta que Bia. Bia é mais alta que Caio. Quem é a pessoa mais baixa?', // pergunta
    alternativas: [                     // opções
      'Ana',
      'Bia',
      'Caio',
      'Ana e Bia empatam',
      'Não dá para saber'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Encadeando as comparações: Ana > Bia > Caio. Caio fica no fim da fila, portanto é o mais baixo.', // explicação
    dica: 'Questão de ordenação: escreva a "fila" com os sinais (A > B > C) antes de responder. A banca conta com você embaralhando a ordem na pressa.', // pegadinha
    video: 'questões de ordenação raciocínio lógico para concurso' // busca no YouTube
  },

  /* ===================== INFORMÁTICA ===================== */
  {
    id: 'i01',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — função MÉDIA',       // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'No Excel, para calcular a média dos valores do intervalo A1 até A10, utiliza-se a fórmula:', // pergunta
    alternativas: [                     // opções
      '=SOMA(A1:A10)/MÉDIA',
      '=MÉDIA(A1:A10)',
      '=MED(A1:A10)',
      '=MÉDIA(A1;A10)',
      '=AVERAGE(A1:A10)'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A função MÉDIA recebe um intervalo (com dois-pontos) e devolve a média aritmética. "AVERAGE" é o nome em inglês, que não vale no Excel em português. Ponto e vírgula (alternativa d) separaria apenas dois valores, não o intervalo.', // explicação
    dica: 'A IBFC adora "AVERAGE" para pegar quem decora em inglês, e ";" no lugar de ":" para pegar quem não domina intervalo. Dois-pontos = intervalo.', // pegadinha
    video: 'função média no excel para concurso' // busca no YouTube
  },
  {
    id: 'i02',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — atalhos',            // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No Excel, o atalho de teclado que insere a SOMA automática (AutoSoma) é:', // pergunta
    alternativas: [                     // opções
      'Ctrl + S',
      'Alt + =',
      'Ctrl + =',
      'Shift + =',
      'Alt + S'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Alt + = insere =SOMA() automaticamente sobre as células vizinhas. É o atalho mais cobrado em provas de informática junto com os de copiar/colar.', // explicação
    dica: 'Ctrl + = insere célula; Alt + = soma. A banca troca Ctrl por Alt e Shift entre as alternativas de propósito — decore o par exato.', // pegadinha
    video: 'atalhos do excel para concursos autosoma' // busca no YouTube
  },
  {
    id: 'i03',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Word em português — atalhos', // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'No Word em português (padrão brasileiro), o atalho Ctrl + B serve para:', // pergunta
    alternativas: [                     // opções
      'Deixar o texto em negrito',
      'Salvar o documento',
      'Imprimir o documento',
      'Copiar o texto',
      'Fechar o programa'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'No Word em português os atalhos seguem os nomes em português: Ctrl + B = Salvar (B de "salvar" na localização brasileira), Ctrl + N = Negrito, Ctrl + I = Itálico, Ctrl + S = Sublinhado. No Word em inglês, Ctrl+B é Bold — e é aí que a banca pega geral.', // explicação
    dica: 'Pegadinha clássica: o Word em português NÃO usa o atalho americano. Negrito = Ctrl+N, Itálico = Ctrl+I, Sublinhado = Ctrl+S, Salvar = Ctrl+B. Grave essa troca!', // pegadinha
    video: 'atalhos do word em português para concurso' // busca no YouTube
  },
  {
    id: 'i04',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Windows — atalhos',          // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No Windows, o atalho Ctrl + Z serve para:', // pergunta
    alternativas: [                     // opções
      'Desfazer a última ação',
      'Refazer a última ação',
      'Recortar o item selecionado',
      'Fechar a janela atual',
      'Salvar o arquivo'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Ctrl + Z desfaz a última ação em praticamente todos os programas. Refazer é Ctrl + Y; recortar é Ctrl + X; fechar janela é Alt + F4.', // explicação
    dica: 'A banca inverte o par: Ctrl+Z desfaz, Ctrl+Y refaz. E cuidado com o Ctrl+X (recortar) — as letras Z, Y e X são trocadas entre as alternativas de propósito.', // pegadinha
    video: 'atalhos do windows para concurso' // busca no YouTube
  },
  {
    id: 'i05',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Segurança — phishing',       // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Phishing é:', // pergunta
    alternativas: [                     // opções
      'Um antivírus gratuito',
      'Golpe em que criminosos imitam bancos e órgãos para roubar seus dados',
      'Um tipo de backup na nuvem',
      'Um vírus que apaga arquivos',
      'Uma técnica de criptografia'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Phishing ("pescaria") é o golpe da mensagem falsa: e-mail ou SMS imitando banco, loja ou governo para fisgar senhas e dados, geralmente com um link para um site falso.', // explicação
    dica: 'Pegadinha de prova: phishing não é vírus — é engenharia social. A vítima entrega os dados de boa vontade, achando que fala com o banco. O alvo é você, não a máquina.', // pegadinha
    video: 'o que é phishing segurança da informação para concurso' // busca no YouTube
  },
  {
    id: 'i06',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Backup',                     // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Backup é:', // pergunta
    alternativas: [                     // opções
      'Programa que acelera o computador',
      'Cópia de segurança dos dados',
      'Atualização do sistema operacional',
      'Limpeza de arquivos temporários',
      'Um tipo de senha forte'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Backup é a cópia dos seus dados guardada em outro lugar (HD externo, nuvem etc.), para permitir a recuperação caso o original se perca ou seja corrompido.', // explicação
    dica: 'A banca confunde backup com formatação, antivírus e atualização. Backup = cópia de segurança. Só isso — e é o suficiente para a questão inteira.', // pegadinha
    video: 'o que é backup para concurso' // busca no YouTube
  },
  {
    id: 'i07',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Hardware — memória RAM',     // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Sobre a memória RAM, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'Guarda os dados mesmo com o computador desligado',
      'É memória volátil: perde o conteúdo ao desligar',
      'É mais lenta que o disco rígido',
      'Armazena apenas o sistema operacional',
      'É a mesma coisa que SSD'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A RAM é a memória de trabalho: rápida e volátil (some ao desligar). Quem guarda dados permanentemente é o armazenamento (HD/SSD).', // explicação
    dica: 'Volátil = some ao desligar. A banca troca RAM por ROM (que é permanente) nas alternativas — fique atento ao par RAM/ROM e RAM/SSD.', // pegadinha
    video: 'memória ram e rom diferença para concurso' // busca no YouTube
  },
  {
    id: 'i08',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Navegação anônima',          // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Sobre a navegação anônima (modo privado) do navegador, é correto dizer:', // pergunta
    alternativas: [                     // opções
      'Esconde sua navegação do provedor de internet',
      'Não salva histórico e cookies no aparelho, mas o provedor ainda enxerga o tráfego',
      'Deixa o computador imune a vírus',
      'Substitui o uso de antivírus',
      'Torna sua conexão criptografada automaticamente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O modo anônimo só evita gravar histórico/cookies no dispositivo. O provedor, o site visitado e a rede (trabalho, escola) continuam vendo o tráfego.', // explicação
    dica: 'Pegadinha recorrente: anônimo ≠ invisível. A banca espera que você ache que o modo privado esconde tudo — ele esconde só do histórico local.', // pegadinha
    video: 'modo anônimo do navegador como funciona para concurso' // busca no YouTube
  },

  /* ===================== DIREITO CONSTITUCIONAL ===================== */
  {
    id: 'c01',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 5º — inviolabilidade do domicílio', // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Conforme o art. 5º da Constituição, pode-se entrar na casa de alguém sem o consentimento do morador:', // pergunta
    alternativas: [                     // opções
      'A qualquer hora, desde que com ordem judicial',
      'Somente em flagrante delito, desastre, para prestar socorro ou, durante o dia, por ordem judicial',
      'Somente com ordem judicial, a qualquer hora do dia ou da noite',
      'Sempre que o policial julgar necessário',
      'Apenas em flagrante delito'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A casa é asilo inviolável. As exceções do texto constitucional: flagrante delito, desastre e socorro (a qualquer hora) e determinação judicial (apenas durante o dia).', // explicação
    dica: 'A CESPE cobra a literalidade: "durante o dia" vale SÓ para a ordem judicial. Nas outras hipóteses não há restrição de horário — e a banca inverte exatamente isso.', // pegadinha
    video: 'artigo 5 constituição inviolabilidade do domicílio para concurso' // busca no YouTube
  },
  {
    id: 'c02',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Remédios constitucionais — Habeas Corpus', // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O Habeas Corpus é o remédio constitucional que protege:', // pergunta
    alternativas: [                     // opções
      'O direito de resposta',
      'A liberdade de locomoção',
      'O acesso a informações pessoais',
      'Qualquer direito líquido e certo',
      'O patrimônio público'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O HC protege o direito de ir e vir, sempre que alguém sofrer ou se vir ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. É gratuito e pode ser impetrado por qualquer pessoa.', // explicação
    dica: 'Troca de rótulos é a pegadinha clássica: HC = locomoção; Mandado de Segurança = direito líquido e certo; Habeas Data = dados pessoais. Não troque os remédios!', // pegadinha
    video: 'habeas corpus o que é remédios constitucionais para concurso' // busca no YouTube
  },
  {
    id: 'c03',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Remédios constitucionais — Mandado de Segurança', // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Cabe Mandado de Segurança para proteger:', // pergunta
    alternativas: [                     // opções
      'Qualquer direito, mesmo que incerto',
      'Direito líquido e certo, não amparado por habeas corpus ou habeas data',
      'Apenas a liberdade de locomoção',
      'Exclusivamente os direitos políticos',
      'Somente o patrimônio público'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O MS protege direito líquido e certo (comprovado de plano, sem precisar de dilação probatória) quando o responsável pela ilegalidade for autoridade pública ou agente no exercício de atribuições do poder público.', // explicação
    dica: 'Direito "líquido e certo" é aquele que dá para provar com documentos na hora. A banca oferece "direito incerto" nas alternativas para pegar o distraído.', // pegadinha
    video: 'mandado de segurança direito líquido e certo para concurso' // busca no YouTube
  },
  {
    id: 'c04',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Nacionalidade',              // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'NÃO será brasileiro nato:', // pergunta
    alternativas: [                     // opções
      'O nascido no Brasil, filho de brasileiros',
      'O nascido no Brasil, filho de estrangeiros, se estes estiverem a serviço de seu país',
      'O nascido no Brasil, filho de estrangeiros residentes no país',
      'O nascido no estrangeiro, de pai brasileiro a serviço do Brasil',
      'O nascido no Brasil, filho de estrangeiros que moram aqui há anos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Critério do jus soli: nasceu no Brasil = nato, EXCETO se os pais estrangeiros estiverem a serviço do país deles. Quem nasce no exterior de brasileiro a serviço do Brasil também é nato (critério funcional).', // explicação
    dica: 'A exceção é a questão: "a serviço do SEU país" (o deles) tira a nacionalidade; "a serviço do Brasil" garante. A banca troca uma preposição e muda o gabarito.', // pegadinha
    video: 'nacionalidade brasileiro nato naturalizado para concurso' // busca no YouTube
  },
  {
    id: 'c05',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 37 — princípios da Administração', // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'São princípios expressos da Administração Pública no art. 37 da Constituição:', // pergunta
    alternativas: [                     // opções
      'Legalidade, impessoalidade, moralidade, publicidade e eficiência',
      'Legalidade, pessoalidade, moralidade, propaganda e eficácia',
      'Liberdade, igualdade, fraternidade, segurança e eficiência',
      'Legalidade, oportunidade, conveniência e eficiência',
      'Moralidade, publicidade, razoabilidade e proporcionalidade'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O famoso LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (esta última incluída pela EC 19/98).', // explicação
    dica: 'A banca troca "impessoalidade" por "pessoalidade" e "publicidade" por "propaganda". Propaganda pessoal do agente é justamente o que a impessoalidade proíbe.', // pegadinha
    video: 'princípios da administração pública artigo 37 LIMPE para concurso' // busca no YouTube
  },
  {
    id: 'c06',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 6º — direitos sociais', // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Qual alternativa NÃO está entre os direitos sociais do art. 6º da Constituição?', // pergunta
    alternativas: [                     // opções
      'Educação',
      'Saúde',
      'Moradia',
      'Turismo',
      'Lazer'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'O art. 6º lista: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados. Turismo não está lá.', // explicação
    dica: 'Questão de literalidade: a banca coloca palavras "do bem" que não estão no texto (turismo, cultura). Só vale o que está escrito no artigo.', // pegadinha
    video: 'artigo 6 direitos sociais constituição para concurso' // busca no YouTube
  },
  {
    id: 'c07',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Emenda à Constituição',      // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Uma proposta de emenda à Constituição precisa ser aprovada:', // pergunta
    alternativas: [                     // opções
      'Em turno único, por maioria simples, no Congresso',
      'Em dois turnos, por três quintos dos votos, em cada Casa do Congresso',
      'Em dois turnos, por maioria absoluta, apenas no Senado',
      'Por referendo popular',
      'Por dois terços da Câmara dos Deputados apenas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Art. 60, §2º da CF: a PEC é discutida e votada em cada Casa do Congresso, em dois turnos, considerando-se aprovada com 3/5 dos votos dos respectivos membros.', // explicação
    dica: 'Números que caem: 3/5 (60%), dois turnos, duas Casas. A banca oferece "2/3" e "maioria simples" para confundir — os 2/3 valem para outras situações.', // pegadinha
    video: 'emenda constitucional artigo 60 quórum para concurso' // busca no YouTube
  },

  /* ===================== DIREITO ADMINISTRATIVO ===================== */
  {
    id: 'a01',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Atributos do ato administrativo', // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'NÃO é atributo do ato administrativo:', // pergunta
    alternativas: [                     // opções
      'Presunção de legitimidade',
      'Imperatividade',
      'Autoexecutoriedade',
      'Onerosidade',
      'Tipicidade'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'Os atributos clássicos são: presunção de legitimidade (atos nascem válidos), imperatividade (se impõem), autoexecutoriedade (a própria Administração executa) e tipicidade (formas previstas em lei). Onerosidade não é atributo do ato.', // explicação
    dica: 'A banca mistura atributo de ato com característica de contrato (onerosidade é dos contratos administrativos). Ato ≠ contrato — fique atento ao contexto.', // pegadinha
    video: 'atributos do ato administrativo para concurso' // busca no YouTube
  },
  {
    id: 'a02',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Poder de polícia',           // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Poder de polícia é a atividade pela qual a Administração:', // pergunta
    alternativas: [                     // opções
      'Pune servidores infratores',
      'Condiciona e restringe direitos em favor do interesse público',
      'Organiza seus órgãos internos',
      'Julga recursos administrativos',
      'Edita normas gerais e abstratas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Poder de polícia limita liberdades e direitos individuais em prol da coletividade: fiscalização, alvará, multa de trânsito, interdição de estabelecimento irregular.', // explicação
    dica: 'Poder de polícia ≠ poder disciplinar (pune servidor) ≠ poder hierárquico (organiza internamente). A banca embaralha esses três o tempo todo.', // pegadinha
    video: 'poder de polícia administrativo conceito para concurso' // busca no YouTube
  },
  {
    id: 'a03',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Administração indireta',     // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Entre as entidades abaixo, a que possui personalidade jurídica de direito PRIVADO é:', // pergunta
    alternativas: [                     // opções
      'Autarquia',
      'Empresa pública',
      'Órgão público',
      'Fundação pública de direito público',
      'Ministério'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Empresa pública (assim como a sociedade de economia mista) tem personalidade de direito privado, mesmo pertencendo ao Estado. Autarquia e fundação pública de direito público são de direito público. Órgão nem personalidade jurídica tem.', // explicação
    dica: 'Pegadinha recorrente: órgão público não tem personalidade jurídica (não pode ser réu em juízo). A banca inclui "órgão" nas alternativas para fisgar.', // pegadinha
    video: 'administração indireta autarquia empresa pública para concurso' // busca no YouTube
  },
  {
    id: 'a04',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Responsabilidade civil do Estado', // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A responsabilidade civil do Estado pelos danos causados por seus agentes é, em regra:', // pergunta
    alternativas: [                     // opções
      'Subjetiva: exige prova de culpa do Estado',
      'Objetiva: independe de culpa, bastando o nexo entre conduta e dano',
      'Inexistente no direito brasileiro',
      'Restrita a atos legislativos',
      'Limitada a danos morais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Art. 37, §6º da CF: as pessoas jurídicas de direito público (e as de direito privado prestadoras de serviço público) respondem objetivamente pelos danos de seus agentes. O Estado pode cobrar do agente depois (ação de regresso), se houve dolo ou culpa.', // explicação
    dica: 'Objetiva = não precisa provar culpa do Estado. Subjetiva = precisa. A banca troca os adjetivos nas alternativas — grave a diferença.', // pegadinha
    video: 'responsabilidade civil do estado artigo 37 para concurso' // busca no YouTube
  },
  {
    id: 'a05',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Licitações (Lei 14.133/2021)', // assunto
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Segundo a Lei 14.133/2021 (nova Lei de Licitações), NÃO é uma modalidade de licitação:', // pergunta
    alternativas: [                     // opções
      'Pregão',
      'Concorrência',
      'Tomada de preços',
      'Leilão',
      'Diálogo competitivo'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'As 5 modalidades da Lei 14.133/2021 são: pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite existiam na antiga Lei 8.666/93 e foram extintas.', // explicação
    dica: 'Questão de atualização legislativa: muita apostila antiga ainda cita convite/tomada de preços como certas. Na lei nova, elas não existem mais.', // pegadinha
    video: 'lei 14133 modalidades de licitação para concurso' // busca no YouTube
  },
  {
    id: 'a06',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Improbidade administrativa', // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A lei que trata da improbidade administrativa é a:', // pergunta
    alternativas: [                     // opções
      'Lei 8.112/90',
      'Lei 8.429/92',
      'Lei 14.133/21',
      'Lei 9.784/99',
      'Lei 8.666/93'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Lei 8.429/92 (reformada pela Lei 14.230/21) trata dos atos de improbidade: enriquecimento ilícito, prejuízo ao erário e violação de princípios. A 8.112 é o estatuto dos servidores federais; a 14.133 é a lei de licitações; a 9.784 é o processo administrativo federal.', // explicação
    dica: 'Decoreba pura de número de lei — e a banca adora trocar 8.429 por 8.112. Faça um cartão para cada lei do seu edital.', // pegadinha
    video: 'lei 8429 improbidade administrativa resumo para concurso' // busca no YouTube
  },
  {
    id: 'a07',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Bens públicos',              // assunto
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Os bens públicos não podem ser adquiridos por usucapião porque são:', // pergunta
    alternativas: [                     // opções
      'Inalienáveis',
      'Imprescritíveis',
      'Impenhoráveis',
      'Onerosos',
      'Divisíveis'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Imprescritibilidade: os bens públicos não se sujeitam a usucapião (prescrição aquisitiva), não importa o tempo de ocupação. Eles também são impenhoráveis (não podem ser penhorados) e, em regra, inalienáveis (não podem ser vendidos livremente).', // explicação
    dica: 'Três "i" que se confundem: imprescritível (sem usucapião), impenhorável (sem penhora), inalienável (sem venda). A banca pergunta um e oferece os outros dois.', // pegadinha
    video: 'bens públicos imprescritibilidade usucapião para concurso' // busca no YouTube
  },

  /* ===================== ATUALIDADES ===================== */
  {
    id: 't01',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Agenda 2030 e ODS',          // assunto
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A Agenda 2030 da ONU estabelece:', // pergunta
    alternativas: [                     // opções
      '10 Objetivos de Desenvolvimento Sustentável',
      '17 Objetivos de Desenvolvimento Sustentável',
      '8 Objetivos do Milênio para 2030',
      '20 Metas do Clima',
      '5 Direitos Fundamentais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Agenda 2030 tem 17 ODS, como fome zero, saúde, educação de qualidade, água limpa e ação contra a mudança do clima. Ela sucedeu os 8 Objetivos de Desenvolvimento do Milênio (2000-2015).', // explicação
    dica: 'Pegadinha: os Objetivos do Milênio eram 8 — a banca mistura os dois programas. ODS = 17, Milênio = 8. Números trocados = questão perdida.', // pegadinha
    video: 'agenda 2030 ODS 17 objetivos para concurso' // busca no YouTube
  },
  {
    id: 't02',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Inteligência artificial',    // assunto
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'O ChatGPT é um exemplo de:', // pergunta
    alternativas: [                     // opções
      'Inteligência artificial generativa',
      'Rede social profissional',
      'Banco de dados governamental',
      'Sistema operacional',
      'Protocolo de segurança'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'IA generativa cria conteúdos novos (textos, imagens, sons) a partir de padrões aprendidos em grandes volumes de dados. O ChatGPT gera texto prevendo a sequência mais provável de palavras.', // explicação
    dica: 'Conceito quente de atualidades: "generativa" = gera conteúdo novo. A banca troca por "preditiva" ou "analítica" — atenção ao adjetivo.', // pegadinha
    video: 'o que é inteligência artificial generativa explicada' // busca no YouTube
  },
  {
    id: 't03',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Matriz elétrica brasileira', // assunto
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Sobre a matriz elétrica brasileira, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'É majoritariamente baseada em carvão mineral',
      'É majoritariamente renovável, com destaque para hidrelétricas, eólica e solar',
      'Não utiliza fontes renováveis',
      'Depende quase exclusivamente de energia nuclear',
      'É 100% solar'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Brasil tem uma das matrizes elétricas mais renováveis do mundo: as hidrelétricas dominam, e as fontes eólica e solar crescem rapidamente. Carvão e nuclear são minoritários.', // explicação
    dica: 'Matriz elétrica (energia gerada) ≠ matriz energética (toda energia consumida, incluindo combustíveis). A banca troca os termos de propósito.', // pegadinha
    video: 'matriz elétrica brasileira energias renováveis para concurso' // busca no YouTube
  },
  {
    id: 't04',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'SUS e saúde pública',        // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'São princípios do SUS previstos na Lei 8.080/90:', // pergunta
    alternativas: [                     // opções
      'Universalidade, integralidade e equidade',
      'Universalidade, parcialidade e gratuidade',
      'Seletividade, centralização e equidade',
      'Integralidade, hierarquia militar e cobrança',
      'Privatização, equidade e universalidade'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A Lei 8.080/90 traz universalidade (acesso para todos), integralidade (cuidado completo) e equidade (tratar diferente quem precisa de mais). Também: descentralização, regionalização e participação da comunidade.', // explicação
    dica: 'Equidade ≠ igualdade: equidade dá mais a quem precisa mais. A banca troca por "igualdade" de propósito — é pegadinha garantida.', // pegadinha
    video: 'princípios do SUS universalidade integralidade equidade para concurso' // busca no YouTube
  },
  {
    id: 't05',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Cidadania — voto',           // assunto
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'No Brasil, o voto é obrigatório para quem tem:', // pergunta
    alternativas: [                     // opções
      '16 a 70 anos',
      '18 a 70 anos',
      '18 a 65 anos',
      '21 a 75 anos',
      '16 a 60 anos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Obrigatório dos 18 aos 70 anos. Facultativo para os de 16 e 17 anos, para os maiores de 70 e para os analfabetos.', // explicação
    dica: 'As idades do voto caem direto: obrigatório 18-70, facultativo 16-17 e 70+. A banca mexe em UM número (65 no lugar de 70) e pega geral.', // pegadinha
    video: 'voto obrigatório facultativo Brasil idades para concurso' // busca no YouTube
  },
  {
    id: 't06',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'COP e mudanças climáticas',  // assunto
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A COP (Conferência das Partes) é:', // pergunta
    alternativas: [                     // opções
      'A cúpula da ONU sobre mudanças climáticas',
      'O congresso mundial de futebol',
      'A reunião anual do Banco Central',
      'O encontro de presidentes da América do Sul',
      'A conferência de comércio da OMC'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A COP reúne os países signatários da Convenção do Clima da ONU para negociar metas de redução de emissões de gases de efeito estufa.', // explicação
    dica: 'COP = clima. Não confunda com OMC (comércio) nem com Mercosul (bloco regional). Atualidades cobra a sigla certa no contexto certo.', // pegadinha
    video: 'o que é a COP conferência do clima ONU' // busca no YouTube
  },

  /* ===================== HISTÓRIA DO BRASIL ===================== */
  {
    id: 'h01',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Abolição da escravidão',     // assunto
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Lei Áurea, que aboliu a escravidão no Brasil, foi assinada em:', // pergunta
    alternativas: [                     // opções
      '1850',
      '1871',
      '1885',
      '1888',
      '1891'
    ],
    correta: 3,                         // índice da certa
    explicacao: '13 de maio de 1888, pela Princesa Isabel. Antes vieram: Eusébio de Queirós (1850, fim do tráfico), Ventre Livre (1871) e Sexagenários (1885).', // explicação
    dica: 'A banca embaralha as datas das leis abolicionistas. Linha do tempo: 1850 → 1871 → 1885 → 1888. Decore a sequência, não só o final.', // pegadinha
    video: 'lei áurea abolição da escravidão 1888 história do Brasil' // busca no YouTube
  },
  {
    id: 'h02',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Proclamação da República',   // assunto
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O primeiro presidente da República proclamada em 1889 foi:', // pergunta
    alternativas: [                     // opções
      'Prudente de Morais',
      'Deodoro da Fonseca',
      'Floriano Peixoto',
      'Getúlio Vargas',
      'Campos Sales'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O marechal Deodoro da Fonseca proclamou a República em 15/11/1889 e governou até 1891. Floriano Peixoto foi o segundo (1891-1894), fechando a "República da Espada".', // explicação
    dica: 'Deodoro (1889-91) e Floriano (1891-94) formam a República da Espada. A banca troca a ordem dos dois marechais de propósito.', // pegadinha
    video: 'proclamação da república 1889 Deodoro história do Brasil' // busca no YouTube
  },
  {
    id: 'h03',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Era Vargas',                 // assunto
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A CLT (Consolidação das Leis do Trabalho) foi criada em 1943, durante:', // pergunta
    alternativas: [                     // opções
      'A República Velha',
      'O Estado Novo de Getúlio Vargas',
      'O governo Juscelino Kubitschek',
      'A ditadura militar',
      'O governo Fernando Henrique Cardoso'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A CLT (1943) é fruto da Era Vargas, no Estado Novo (1937-45), período ditatorial que criou as bases do trabalhismo: CLT, salário mínimo e Justiça do Trabalho.', // explicação
    dica: 'CLT e salário mínimo = Era Vargas. A banca tenta jogar a CLT para a ditadura militar ou para JK — não caia.', // pegadinha
    video: 'era vargas CLT 1943 história do Brasil' // busca no YouTube
  },
  {
    id: 'h04',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Independência do Brasil',    // assunto
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A independência do Brasil, em 7 de setembro de 1822, foi proclamada por:', // pergunta
    alternativas: [                     // opções
      'Dom João VI',
      'Dom Pedro I',
      'Dom Pedro II',
      'José Bonifácio',
      'Tiradentes'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Dom Pedro I proclamou a independência às margens do Ipiranga, em 1822. Dom João VI era seu pai (voltara a Portugal); Dom Pedro II governaria o Segundo Reinado (1840-1889).', // explicação
    dica: 'Pegadinha de vestibular: D. Pedro I independe (1822), D. Pedro II reina depois (1840-1889). A banca inverte os dois Pedros.', // pegadinha
    video: 'independência do Brasil 1822 Dom Pedro I história' // busca no YouTube
  },
  {
    id: 'h05',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'República Velha',            // assunto
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Na República Velha, a política do "café com leite" representava:', // pergunta
    alternativas: [                     // opções
      'A política agrícola de incentivo ao café e ao leite',
      'A alternância de poder entre as oligarquias de São Paulo (café) e Minas Gerais (leite)',
      'Um programa social de merenda escolar',
      'O acordo comercial entre Brasil e EUA',
      'A política de imigração europeia'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Entre 1894 e 1930, as oligarquias paulista (café) e mineira (leite) revezavam a indicação do presidente, controlando a política nacional — daí o apelido "café com leite".', // explicação
    dica: 'Questão com sabor de café! Cuidado para não interpretar ao pé da letra: é sobre política e poder, não sobre agricultura. O vestibular adora essa confusão.', // pegadinha
    video: 'política do café com leite república velha história do Brasil' // busca no YouTube
  },
  {
    id: 'h06',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Constituição de 1988',       // assunto
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Constituição de 1988 ficou conhecida como "Constituição Cidadã" porque:', // pergunta
    alternativas: [                     // opções
      'Foi a primeira Constituição do Brasil',
      'Ampliou direitos sociais e a participação popular',
      'Foi escrita pelos militares',
      'Acabou com o voto feminino',
      'Restaurou o regime monárquico'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A CF/88 marcou a redemocratização, garantindo amplos direitos sociais e individuais, como saúde (SUS), educação e voto direto — por isso o apelido dado por Ulysses Guimarães.', // explicação
    dica: 'CF/88 = direitos e democracia. A banca gosta de afirmar que ela "limitou direitos" — o oposto da verdade histórica.', // pegadinha
    video: 'constituição de 1988 constituição cidadã resumo' // busca no YouTube
  },

  /* ===================== GEOGRAFIA ===================== */
  {
    id: 'g01',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Climas do Brasil',           // assunto
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O clima predominante na Amazônia é o:', // pergunta
    alternativas: [                     // opções
      'Tropical de altitude',
      'Equatorial',
      'Subtropical',
      'Semiárido',
      'Mediterrâneo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O clima equatorial é quente e úmido o ano todo, com chuvas abundantes — perfeito para a floresta amazônica. O semiárido domina o sertão nordestino; o subtropical, o Sul.', // explicação
    dica: 'Mapa mental: Amazônia = equatorial; Nordeste = semiárido; Sul = subtropical. A banca troca as regiões e os climas entre si.', // pegadinha
    video: 'climas do Brasil equatorial tropical para vestibular' // busca no YouTube
  },
  {
    id: 'g02',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Biomas brasileiros',         // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'O maior bioma brasileiro é:', // pergunta
    alternativas: [                     // opções
      'O Cerrado',
      'A Caatinga',
      'A Amazônia',
      'O Pantanal',
      'A Mata Atlântica'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A Amazônia é o maior bioma do Brasil (e a maior floresta tropical do mundo). O Cerrado é o segundo maior. O Pantanal é o menor entre os grandes biomas.', // explicação
    dica: 'Cuidado: o Cerrado é o segundo maior — a banca oferece Cerrado como pegadinha para quem decora o ranking pela metade.', // pegadinha
    video: 'biomas brasileiros amazônia cerrado caatinga para vestibular' // busca no YouTube
  },
  {
    id: 'g03',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Densidade demográfica',      // assunto
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A densidade demográfica é calculada:', // pergunta
    alternativas: [                     // opções
      'Dividindo a população pela área',
      'Somando população e área',
      'Multiplicando nascimentos por mortes',
      'Dividindo a área pela população',
      'Contando apenas os moradores urbanos'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Densidade demográfica = população ÷ área (habitantes por km²). Mede o "povoamento" relativo do território.', // explicação
    dica: 'O Brasil é populoso, mas de baixa densidade média (cerca de 23 hab/km²): muita gente, território gigante. A banca inverte a divisão de propósito.', // pegadinha
    video: 'densidade demográfica população relativa para vestibular' // busca no YouTube
  },
  {
    id: 'g04',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Urbanização',                // assunto
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Êxodo rural é:', // pergunta
    alternativas: [                     // opções
      'A migração das cidades para o campo',
      'O deslocamento do campo para as cidades',
      'A migração entre países diferentes',
      'O deslocamento diário casa-trabalho',
      'A volta dos aposentados ao interior'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Êxodo rural = saída do campo rumo à cidade, impulsionado pela industrialização e pela mecanização agrícola. O movimento contrário é a migração urbano-rural.', // explicação
    dica: 'Direção do movimento: campo → cidade. A banca inverte a seta e chama de "êxodo urbano" — termo que não é o usual.', // pegadinha
    video: 'êxodo rural urbanização brasileira para vestibular' // busca no YouTube
  },
  {
    id: 'g05',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Regiões do Brasil',          // assunto
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Segundo o IBGE, o Brasil é dividido em:', // pergunta
    alternativas: [                     // opções
      '4 regiões',
      '5 regiões',
      '6 regiões',
      '7 regiões',
      '26 regiões'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'São 5: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Os 26 estados e o Distrito Federal se distribuem entre elas.', // explicação
    dica: 'Pegadinha numérica: 26 estados + 1 DF, mas 5 regiões. A banca oferece "26" para pegar quem confunde estado com região.', // pegadinha
    video: 'regiões do Brasil IBGE para vestibular' // busca no YouTube
  },
  {
    id: 'g06',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Relevo brasileiro',          // assunto
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O Brasil não possui grandes cadeias montanhosas porque:', // pergunta
    alternativas: [                     // opções
      'O clima impede a formação de montanhas',
      'Seu território fica em área geologicamente antiga e estável, longe do encontro de placas tectônicas',
      'As montanhas foram desmatadas',
      'A erosão aplainou as montanhas em menos de 100 anos',
      'Nunca chove o suficiente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O relevo brasileiro é antigo (escudos cristalinos e bacias sedimentares) e fica distante das bordas de placas tectônicas, onde surgem os dobramentos modernos (montanhas). Por isso predominam planaltos e depressões.', // explicação
    dica: 'Sem encontro de placas = sem montanhas. O ponto mais alto do Brasil (Pico da Neblina, ~3.000 m) é modesto perto dos 8.000 m do Himalaia.', // pegadinha
    video: 'relevo brasileiro planaltos depressões para vestibular' // busca no YouTube
  }
];
