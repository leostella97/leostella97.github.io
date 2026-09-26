/* ============================================================
   GABARITO CAFÉ — js/dados-bancas.js
   As bancas famosas e as pegadinhas que elas adoram.
   Conhecer a banca é metade do caminho: cada uma tem manias.
   ============================================================ */

// Conteúdo sobre as bancas
const DadosBancas = {

  // Lista de bancas com perfil, pegadinhas e estratégia
  bancas: [
    {
      nome: 'CESPE / Cebraspe',                // nome da banca
      perfil: 'A banca do "certo ou errado". Sem alternativas, uma questão errada pode anular uma certa (depende do edital). Textos enormes e cobrança da letra exata da lei.', // como ela é
      pegadinhas: [                            // as manhas da banca
        'Palavras absolutas ("sempre", "nunca", "somente", "todos") costumam esconder o erro.',
        'Troca de UMA palavra no meio do item muda tudo — leia com lupa.',
        'Item "quase certo" é errado: ou está 100% certo ou você marca errado.',
        'Cobra a literalidade da lei, não o espírito. O que não está escrito, não existe.'
      ],
      comoSeDarBem: 'Treine responder só o que tem certeza e, em cada item, procure a palavra que estraga a frase. Fazer muita questão da própria banca é o segredo.' // estratégia
    },
    {
      nome: 'FGV',                             // nome da banca
      perfil: 'Considerada a banca mais temida do país. Textos longos, alternativas confusas e português no nível "pegadinha fina". Cobra doutrina e detalhes que ninguém espera.', // perfil
      pegadinhas: [                            // pegadinhas
        'A alternativa certa costuma estar disfarçada com palavras incomuns ou inversões.',
        'Em direito, cobra detalhe de doutrina e jurisprudência, não só a lei.',
        'No português, mistura interpretação com gramática: você acha que é uma, mas é outra.',
        'Enunciado com 15 linhas para uma pergunta que se resolve em uma — não se afogue.'
      ],
      comoSeDarBem: 'Resolva MUITAS questões antigas da FGV: a banca repete modelos. E treine ler com calma — o texto gigante é arma contra o apressado.' // estratégia
    },
    {
      nome: 'FCC',                             // nome da banca
      perfil: 'A banca da decoreba: texto seco de lei, gramática tradicional pesada e pouca interpretação. Quem decorou, acerta.', // perfil
      pegadinhas: [                            // pegadinhas
        'Pergunta de lei com troca de um único termo no meio do artigo.',
        'Português com terminologia gramatical técnica (oração subordinada adverbial final...).',
        'Enunciado curto, mas alternativas longas e muito parecidas entre si.',
        'Cobra prazos e números exatos de lei — chute não salva.'
      ],
      comoSeDarBem: 'Estude a letra da lei com resumos e flashcards. Aqui decorar é estratégia, não desperdício. Revisão espaçada resolve.' // estratégia
    },
    {
      nome: 'Vunesp',                          // nome da banca
      perfil: 'Banca paulista clássica: provas bem feitas, matemática contextualizada e português tradicional. É a dona da maioria dos concursos municipais de SP.', // perfil
      pegadinhas: [                            // pegadinhas
        'Matemática com historinha no enunciado para esconder a conta simples.',
        'Alternativas muito parecidas: a diferença é um sinal ou uma vírgula.',
        'Pega o candidato na pressa de ler gráficos e tabelas.',
        'No português, adora acentuação e crase em frases curtas e traiçoeiras.'
      ],
      comoSeDarBem: 'Resolva provas antigas da Vunesp e treine gráficos, tabelas e leitura atenta do comando. A banca é previsível: o modelo se repete.' // estratégia
    },
    {
      nome: 'IBFC',                            // nome da banca
      perfil: 'Português tradicional, legislação local e informática. Presente em muitos concursos de saúde e educação municipais e estaduais.', // perfil
      pegadinhas: [                            // pegadinhas
        'Concordância e crase em frases curtas e traiçoeiras.',
        'Informática com versões antigas e menus específicos de software.',
        'Legislação cobrada ao pé da letra, inclusive artigos "escondidos".'
      ],
      comoSeDarBem: 'Revise a gramática de ponta a ponta (ela domina a prova) e leia a legislação específica do edital sem pular artigo.' // estratégia
    },
    {
      nome: 'FUMARC',                          // nome da banca
      perfil: 'Banca mineira que ama leis estaduais, saúde pública e português. Cobra muito a literalidade de leis específicas.', // perfil
      pegadinhas: [                            // pegadinhas
        'Cobra a literalidade de leis específicas do estado/município.',
        'Interpretação de texto com vocabulário rebuscado.',
        'Alternativas "verdadeiras" mas que não respondem à pergunta feita.'
      ],
      comoSeDarBem: 'Leia a lei específica do edital até cansar e faça questões da própria banca. A literalidade é a regra do jogo.' // estratégia
    },
    {
      nome: 'Instituto AOCP',                  // nome da banca
      perfil: 'Questões objetivas e diretas, com muita atualidade, legislação e informática. Cobra o básico bem feito.', // perfil
      pegadinhas: [                            // pegadinhas
        'Atualidades com datas e nomes trocados de propósito.',
        'Informática perguntando detalhe de menu que ninguém abre.',
        'Duas alternativas corretas, mas uma é "mais correta" que a outra.'
      ],
      comoSeDarBem: 'Mantenha o hábito diário de notícias e faça os simulados da banca no site dela. O básico bem treinado aprova.' // estratégia
    },
    {
      nome: 'ENEM (vestibular)',               // nome da banca
      perfil: 'Não é concurso, mas é a "banca" do vestibular: tudo contextualizado, textos longos, interpretação acima de decoreba e resistência física para 5h30 de prova.', // perfil
      pegadinhas: [                            // pegadinhas
        'Distratores plausíveis: alternativas erradas que parecem certas para quem leu por cima.',
        'Texto gigante para esgotar sua atenção antes da pergunta de verdade.',
        'Questão fácil disfarçada de difícil (e vice-versa) — a ordem não segue dificuldade.',
        'Na redação, fugir do tema ou não propor intervenção derruba a nota.'
      ],
      comoSeDarBem: 'Treine gestão de tempo e energia: priorize as fáceis e médias, e faça simulados com o relógio rodando. Na redação, decore a estrutura e use repertório.' // estratégia
    },
    {
      nome: 'Fuvest / Unicamp (vestibular)',   // nome da banca
      perfil: 'Vestibulares paulistas de elite: interpretação profunda, lista de livros obrigatórios e redação exigente. Aqui não existe questão "de graça".', // perfil
      pegadinhas: [                            // pegadinhas
        'Cobra os clássicos da lista de leitura — sem ler os livros, não tem atalho.',
        'Pergunta sobre as entrelinhas do texto, não o que está escrito.',
        'Alternativas que resumem o texto de forma "bonita", mas não respondem à pergunta.'
      ],
      comoSeDarBem: 'Leia os livros obrigatórios com fichamento, treine resumos de parágrafos e escreva redações no estilo da banca toda semana.' // estratégia
    }
  ]
};
