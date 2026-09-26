/* ============================================================
   GABARITO CAFÉ — js/dados-temas.js
   Os temas que mais caem em concursos e vestibulares,
   escritos em tom de estudante. Frequência vai de 1 a 5
   (5 = cai demais, pode apostar o cafezinho).
   ============================================================ */

// Conteúdo dos temas de estudo
const DadosTemas = {

  // ---------- Temas campeões de CONCURSOS ----------
  concursos: [
    {
      materia: 'Língua Portuguesa',      // nome da matéria
      icone: '📖',                       // emoji do cartão
      resumo: 'A espinha dorsal de toda prova: quase nenhum concurso escapa dela e é onde muita gente é eliminada por bobeira.', // resumo em tom de estudante
      topicos: [                         // tópicos que mais caem dentro da matéria
        { nome: 'Interpretação de texto', frequencia: 5, porque: 'Abre praticamente toda prova e decide sua classificação.', como: 'Leia o enunciado antes do texto e grife o verbo principal: é ele que diz o que a questão quer.' },
        { nome: 'Concordância verbal e nominal', frequencia: 4, porque: 'Toda banca adora um sujeito escondido no meio da frase.', como: 'Ache o sujeito e pergunte "quem faz a ação?" antes de conjugar o verbo.' },
        { nome: 'Crase', frequencia: 4, porque: 'É clássica, tem regra decorável e a banca sabe que você confunde "a" com "à".', como: 'Troque a palavra por uma masculina: se aparecer "ao", tem crase. "Vou à praia" → "Vou ao clube".' },
        { nome: 'Pontuação (especialmente vírgula)', frequencia: 4, porque: 'Uma vírgula muda o sentido, e a banca cobra exatamente isso.', como: 'Nunca separe sujeito de verbo. Releia em voz alta: onde você respira, a vírgula costuma morar.' },
        { nome: 'Regência verbal e nominal', frequencia: 3, porque: 'Verbos como "assistir", "preferir" e "visar" são os queridinhos das bancas.', como: 'Faça fichas dos verbos que mudam de sentido conforme a preposição (assistir o / assistir a).' },
        { nome: 'Colocação pronominal', frequencia: 3, porque: 'Cai direto na FCC e na FGV, quase sempre com palavra negativa atraindo o pronome.', como: 'Decore os gatilhos de próclise: palavras negativas, advérbios e pronomes relativos puxam o pronome para antes do verbo.' }
      ]
    },
    {
      materia: 'Matemática',             // nome da matéria
      icone: '🧮',                       // emoji
      resumo: 'Não foge: porcentagem e regra de três aparecem em uns 80% das provas, do nível fundamental ao superior.', // resumo
      topicos: [                         // tópicos
        { nome: 'Porcentagem', frequencia: 5, porque: 'Está em desconto, aumento, taxa e até em gráfico de atualidades.', como: 'Transforme tudo em fração de 100: 20% é 20/100. E cuidado com aumentos sucessivos: 10% + 10% não é 20%.' },
        { nome: 'Regra de três (simples e composta)', frequencia: 5, porque: 'Resolve metade das questões "do dia a dia" que a banca inventa.', como: 'Monte a tabela com grandezas, veja se são diretas ou inversas e multiplique em cruz na simples.' },
        { nome: 'Juros simples e compostos', frequencia: 4, porque: 'Cai em quase todo edital que tem matemática financeira.', como: 'Simples: J = C·i·t. Composto: M = C·(1+i)^t. Grave as fórmulas e faça 10 questões de cada.' },
        { nome: 'Média aritmética', frequencia: 4, porque: 'É rápida de cobrar e rende questão "de graça" para quem treinou.', como: 'Some tudo e divida pela quantidade. Em média ponderada, não esqueça de multiplicar pelos pesos.' },
        { nome: 'Equações e sistemas do 1º grau', frequencia: 3, porque: 'Aparece disfarçada em probleminhas de texto.', como: 'Traduza o texto: "o dobro de x mais 5" vira 2x + 5. Depois isole o x sem medo.' },
        { nome: 'Razão, proporção e divisão proporcional', frequencia: 3, porque: 'Divide lucro, mistura tinta e paga herança: a banca ama.', como: 'Some as partes da razão e divida o total por essa soma para achar o valor de uma "parte".' }
      ]
    },
    {
      materia: 'Raciocínio Lógico',      // nome da matéria
      icone: '🧩',                       // emoji
      resumo: 'O terror de muita gente — mas é puro treino: as questões seguem uns 6 modelos que se repetem.', // resumo
      topicos: [                         // tópicos
        { nome: 'Proposições, negações e equivalências', frequencia: 5, porque: 'É o carro-chefe da banca quando o edital cita "lógica proposicional".', como: 'Decore as negações: "todo" vira "algum não"; "p e q" vira "não p ou não q"; "se p então q" vira "p e não q".' },
        { nome: 'Sequências lógicas', frequencia: 4, porque: 'Aparece em toda prova e vale ponto rápido para quem enxerga o padrão.', como: 'Olhe a diferença entre termos seguidos antes de inventar fórmula: quase sempre é soma ou multiplicação.' },
        { nome: 'Diagramas lógicos (todo/algum/nenhum)', frequencia: 4, porque: 'Questão clássica de "todo A é B" que confunde geral.', como: 'Desenhe círculos! "Todo A é B" = círculo A dentro do B. O desenho resolve sem decorar.' },
        { nome: 'Verdades e mentiras', frequencia: 3, porque: 'Parece charada, mas tem método: testar cada hipótese.', como: 'Supõe que o primeiro diz a verdade e vê se o resto se sustenta. Se quebrar, troca a hipótese.' },
        { nome: 'Contagem e princípio multiplicativo', frequencia: 3, porque: 'Questão de combinar camiseta com calça que todo mundo erra por desatenção.', como: 'Multiplique as escolhas independentes. Se a ordem importar, é arranjo; se não, combinação.' }
      ]
    },
    {
      materia: 'Informática',            // nome da matéria
      icone: '💻',                       // emoji
      resumo: 'Presente em quase todo edital de nível médio, com Excel e segurança dominando as questões.', // resumo
      topicos: [                         // tópicos
        { nome: 'Excel / planilhas (fórmulas e atalhos)', frequencia: 5, porque: 'É o assunto mais cobrado de informática, disparado.', como: 'Abra o Excel de verdade e teste =SOMA, =MÉDIA, =SE e =PROCV. Decorar sem testar não funciona.' },
        { nome: 'Segurança da informação', frequencia: 4, porque: 'Phishing, malware e backup caem em toda prova recente.', como: 'Entenda os golpes: phishing imita banco e pede seus dados; backup é cópia de segurança. Relacione exemplos reais.' },
        { nome: 'Atalhos e Windows', frequencia: 4, porque: 'É o "ponto fácil" que a banca dá para quem usa o computador no dia a dia.', como: 'Decore os clássicos: Ctrl+C copiar, Ctrl+V colar, Ctrl+Z desfazer, Alt+Tab trocar janela, Alt+= soma no Excel.' },
        { nome: 'Internet e navegadores', frequencia: 3, porque: 'Modo anônimo e HTTP/HTTPS são perguntas certeiras.', como: 'Guarde: modo anônimo não esconde sua navegação do provedor, só do histórico local.' },
        { nome: 'Hardware básico', frequencia: 3, porque: 'RAM, SSD e processador aparecem em questões conceituais.', como: 'RAM é memória volátil (some ao desligar); SSD é armazenamento. Uma frase para cada peça resolve.' }
      ]
    },
    {
      materia: 'Direito Constitucional', // nome da matéria
      icone: '⚖️',                       // emoji
      resumo: 'Cai em praticamente todo concurso de nível médio e superior — e o art. 5º é o rei absoluto.', // resumo
      topicos: [                         // tópicos
        { nome: 'Art. 5º (direitos e garantias fundamentais)', frequencia: 5, porque: 'É a mina de ouro: sozinho responde por boa parte da prova de constitucional.', como: 'Leia o art. 5º inteiro pelo menos 3 vezes na semana e sublinhe as exceções (são as mais cobradas).' },
        { nome: 'Remédios constitucionais (HC, MS, HD)', frequencia: 4, porque: 'Toda banca pergunta "qual remédio para qual direito".', como: 'Decore a tríade: Habeas Corpus = liberdade de locomoção; Mandado de Segurança = direito líquido e certo; Habeas Data = informações pessoais.' },
        { nome: 'Nacionalidade', frequencia: 4, porque: 'As exceções (estrangeiro a serviço do país) são pegadinha clássica.', como: 'Monte uma tabela: nato x naturalizado, com as exceções de cada caso. A exceção é a questão.' },
        { nome: 'Administração pública (art. 37)', frequencia: 4, porque: 'Os princípios LIMPE caem em TODA prova, inclusive de português e ética.', como: 'Decore LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência — e o que cada um significa.' },
        { nome: 'Organização dos poderes', frequencia: 3, porque: 'Separação de poderes e competências aparecem com frequência.', como: 'Faça um mapa mental com Legislativo, Executivo e Judiciário e a função típica de cada um.' }
      ]
    },
    {
      materia: 'Direito Administrativo', // nome da matéria
      icone: '🏛️',                       // emoji
      resumo: 'Parece árido, mas é puro padrão: atos, poderes e licitação se repetem em todas as bancas.', // resumo
      topicos: [                         // tópicos
        { nome: 'Atos administrativos e atributos', frequencia: 5, porque: 'Os atributos (presunção, imperatividade, autoexecutoriedade) caem sem dó.', como: 'Uma frase para cada atributo e um exemplo real: multa de trânsito tem imperatividade (você obedece mesmo sem querer).' },
        { nome: 'Poderes administrativos', frequencia: 4, porque: 'Poder de polícia é disparado o mais cobrado.', como: 'Poder de polícia = Estado limitando direitos em nome do coletivo. Pense em fiscalização, alvará e multa.' },
        { nome: 'Licitações (Lei 14.133/2021)', frequencia: 4, porque: 'A lei nova virou febre nas provas recentes.', como: 'Decore as 5 modalidades novas: pregão, concorrência, concurso, leilão e diálogo competitivo.' },
        { nome: 'Responsabilidade civil do Estado', frequencia: 4, porque: 'O art. 37, §6º da CF é clássico de prova.', como: 'Guarde: o Estado responde objetivamente (não precisa provar culpa) pelos danos de seus agentes.' },
        { nome: 'Improbidade administrativa (Lei 8.429)', frequencia: 4, porque: 'As três espécies de ato ímprobo caem muito.', como: 'Decore os 3 tipos: enriquecimento ilícito, prejuízo ao erário e violação de princípios.' }
      ]
    },
    {
      materia: 'Atualidades',            // nome da matéria
      icone: '🌎',                       // emoji
      resumo: 'Não dá para estudar só na véspera: é hábito. Dez minutinhos de notícia por dia valem ouro.', // resumo
      topicos: [                         // tópicos
        { nome: 'Meio ambiente e ODS (Agenda 2030)', frequencia: 4, porque: 'Sustentabilidade virou tema fixo de redação e objetivas.', como: 'Saiba que a ONU tem 17 Objetivos de Desenvolvimento Sustentável e cite 3 de cor: fome zero, educação, clima.' },
        { nome: 'Tecnologia e inteligência artificial', frequencia: 4, porque: 'IA generativa virou pergunta padrão de atualidades.', como: 'Entenda o básico: IA generativa cria conteúdo novo (texto, imagem) a partir de padrões aprendidos.' },
        { nome: 'Saúde e SUS', frequencia: 3, porque: 'Universalidade, integralidade e equidade caem até em prova de prefeitura.', como: 'Decore os 3 princípios do SUS e o que cada um significa na prática.' },
        { nome: 'Economia brasileira', frequencia: 3, porque: 'Inflação, juros e emprego aparecem contextualizados.', como: 'Inflação = aumento generalizado de preços. Quando ela sobe, o Banco Central sobe os juros. Ponto.' },
        { nome: 'Cidadania e democracia', frequencia: 3, porque: 'Voto, direitos e deveres são clássicos de prova cidadã.', como: 'Guarde as idades: voto obrigatório dos 18 aos 70; facultativo aos 16-17 e acima de 70.' }
      ]
    },
    {
      materia: 'Legislação e Ética',     // nome da matéria
      icone: '📜',                       // emoji
      resumo: 'Aqui o edital manda: cada órgão tem sua lei. Mas ética no serviço público é quase universal.', // resumo
      topicos: [                         // tópicos
        { nome: 'Ética no serviço público', frequencia: 4, porque: 'Impessoalidade, moralidade e conflito de interesses caem em todo lugar.', como: 'Pense em situações: servidor usando o cargo para benefício próprio = violação. Relacione com o art. 37 da CF.' },
        { nome: 'Estatuto do servidor (lei do edital)', frequencia: 5, porque: 'Quando está no edital, é a matéria que mais derruba candidato.', como: 'Baixe a lei exata do edital e leia os artigos de deveres, proibições e penalidades — as bancas copiam o texto.' },
        { nome: 'Lei Orgânica / leis municipais', frequencia: 4, porque: 'Concurso de prefeitura cobra a lei local na veia.', como: 'Imprima a lei orgânica do município e grife prazos e competências: é decoreba pura.' }
      ]
    }
  ],

  // ---------- Temas campeões de VESTIBULARES ----------
  vestibular: [
    {
      materia: 'Redação',                // nome da matéria
      icone: '✍️',                       // emoji
      resumo: 'Vale quase metade da nota em muita universidade. É o tema mais importante do vestibular, sem discussão.', // resumo
      topicos: [                         // tópicos
        { nome: 'Estrutura dissertativa-argumentativa', frequencia: 5, porque: 'É o formato exigido pelo ENEM e pela maioria das bancas.', como: 'Decore o esqueleto: introdução com tese, 2 parágrafos de desenvolvimento com repertório e conclusão com proposta.' },
        { nome: 'Repertório sociocultural', frequencia: 5, porque: 'Sem citação/referência consistente, a nota trava.', como: 'Tenha 10 repertórios coringa (filmes, livros, dados) que servem para vários temas e use 1 por parágrafo.' },
        { nome: 'Temas de atualidades', frequencia: 4, porque: 'A redação quase sempre parte de uma notícia do ano.', como: 'Toda semana escreva uma redação sobre a manchete mais importante do Brasil.' }
      ]
    },
    {
      materia: 'História do Brasil',     // nome da matéria
      icone: '🏛️',                       // emoji
      resumo: 'O vestibular ama a história do Brasil — e alguns períodos caem mais que os outros.', // resumo
      topicos: [                         // tópicos
        { nome: 'Escravidão e abolição (Lei Áurea, 1888)', frequencia: 5, porque: 'Cai sempre, junto com as leis anteriores (Ventre Livre, Sexagenários).', como: 'Monte a linha do tempo das leis abolicionistas: 1850 (Eusébio de Queirós) → 1871 → 1885 → 1888.' },
        { nome: 'República Velha e a política do café com leite', frequencia: 4, porque: 'Combina com o nosso tema! Alternância SP-MG é pergunta clássica.', como: 'Entenda o pacto: São Paulo (café) e Minas (leite) revezavam a presidência entre 1894 e 1930.' },
        { nome: 'Era Vargas (1930-1945)', frequencia: 4, porque: 'CLT, Estado Novo e trabalhismo caem em toda prova.', como: 'Decore as fases: Governo Provisório (30-34), Constitucional (34-37), Estado Novo (37-45). CLT é de 1943.' },
        { nome: 'Ditadura militar (1964-1985)', frequencia: 4, porque: 'AI-5, censura e abertura política são presença garantida.', como: 'Construa a linha do tempo dos presidentes militares e marque o AI-5 (1968) como o ponto de endurecimento.' }
      ]
    },
    {
      materia: 'Geografia',              // nome da matéria
      icone: '🗺️',                       // emoji
      resumo: 'Brasil físico + população: esses dois blocos respondem pela maior parte da prova.', // resumo
      topicos: [                         // tópicos
        { nome: 'Clima e biomas brasileiros', frequencia: 5, porque: 'Clima da Amazônia (equatorial) e domínio do bioma Amazônia são pergunta batida.', como: 'Faça um mapa e cole em cada região seu clima e bioma. Amazonas = equatorial, quente e úmido.' },
        { nome: 'Urbanização e êxodo rural', frequencia: 4, porque: 'O Brasil virou urbano no século XX e a banca cobra esse processo.', como: 'Êxodo rural = migração campo → cidade. Associa com industrialização dos anos 1950-80.' },
        { nome: 'Demografia e densidade', frequencia: 3, porque: 'Densidade demográfica (hab/km²) cai como conta ou como conceito.', como: 'Decore a fórmula: população ÷ área. E lembre: Brasil é populoso, mas pouco povoado no interior.' },
        { nome: 'Geopolítica e globalização', frequencia: 3, porque: 'Blocos econômicos (Mercosul) e tensões atuais aparecem contextualizados.', como: 'Saiba o básico: Mercosul é bloco sul-americano; a ONU tem órgãos como a Assembleia Geral e o Conselho de Segurança.' }
      ]
    },
    {
      materia: 'Biologia',               // nome da matéria
      icone: '🧬',                       // emoji
      resumo: 'Ecologia é o tema mais rentável: cai no ENEM todo ano e rende questões fáceis de acertar.', // resumo
      topicos: [                         // tópicos
        { nome: 'Ecologia (cadeias, ciclos, impactos)', frequencia: 5, porque: 'É o queridinho do ENEM: sustentabilidade + biomas.', como: 'Entenda fluxo de energia (produtor → consumidor) e o efeito estufa natural vs. intensificado.' },
        { nome: 'Genética básica', frequencia: 4, porque: 'Heredograma e leis de Mendel caem com regularidade.', como: 'Treine cruzamentos simples (Aa × Aa) e monte quadros de Punnett até ficar automático.' },
        { nome: 'Fisiologia humana', frequencia: 3, porque: 'Sistemas (circulatório, digestório) aparecem de forma aplicada.', como: 'Uma função por sistema: coração bombeia, pulmão troca gases, rim filtra. Relacione com situações do cotidiano.' }
      ]
    },
    {
      materia: 'Física',                 // nome da matéria
      icone: '⚡',                       // emoji
      resumo: 'Mecânica domina: se você dominar cinemática e energia, já garante boa parte da prova.', // resumo
      topicos: [                         // tópicos
        { nome: 'Mecânica (cinemática e leis de Newton)', frequencia: 5, porque: 'MRU, MRUV e as 3 leis de Newton caem em todo vestibular.', como: 'Decore as equações do MRUV e treine interpretar gráficos de posição e velocidade.' },
        { nome: 'Energia e trabalho', frequencia: 4, porque: 'Conservação de energia é o caminho mais rápido em várias questões.', como: 'Guarde: energia mecânica = cinética + potencial; sem atrito, ela se conserva.' },
        { nome: 'Eletricidade', frequencia: 4, porque: 'Lei de Ohm e potência aparecem todo ano.', como: 'V = R·i e P = V·i. Duas fórmulas resolvem metade das questões de circuito.' }
      ]
    },
    {
      materia: 'Química',                // nome da matéria
      icone: '🧪',                       // emoji
      resumo: 'Estequiometria e orgânica são os campeões de queda — e assustam, mas são treináveis.', // resumo
      topicos: [                         // tópicos
        { nome: 'Estequiometria', frequencia: 4, porque: 'É a "regra de três da química" e cai todo ano.', como: 'Balanceie a equação, ache a proporção em mol e converta para gramas com a massa molar. Passo a passo sempre.' },
        { nome: 'Ligações químicas', frequencia: 3, porque: 'Iônica x covalente é conceito rápido e frequente.', como: 'Metal + ametal = ligação iônica; ametal + ametal = covalente. Decore os exemplos clássicos (NaCl, H₂O).' },
        { nome: 'Química orgânica', frequencia: 4, porque: 'Funções (álcool, cetona...) e reações básicas caem muito no ENEM.', como: 'Monte flashcards das funções orgânicas com um exemplo do cotidiano (etanol, acetona, ácido acético).' }
      ]
    }
  ],

  // ---------- Dicas rápidas mostradas abaixo dos simulados (por idioma) ----------
  dicasRapidas: {
    pt: [
      'Leia o enunciado duas vezes: a banca esconde o verbo principal atrás de enfeite. Sublinhe o que a questão realmente pede.',
      'Elimine primeiro as alternativas absurdas — cada eliminação aumenta (e muito) sua chance de acertar o chute consciente.',
      'Na hora da prova CESPE/Cebraspe, questão errada costuma anular uma certa: responda só o que tem confiança. Leia o edital para confirmar!',
      'Controle o relógio: 3 minutos por questão é o ritmo médio da maioria das provas. Se travou, pula e volta depois.',
      'Marque sua resposta no rascunho antes de passar para o gabarito oficial — transcrever tudo no fim evita erro de bolinha.',
      'Guarde os 10 minutos finais para revisar as questões em dúvida. A pressa é a maior aliada da banca.'
    ],
    en: [
      'Read the question twice: the board hides the main verb behind decoration. Underline what the question really asks.',
      'Eliminate the absurd options first — each one removed hugely increases your chance of a smart guess.',
      'On CESPE/Cebraspe tests a wrong answer often cancels a right one: only answer what you are sure about. Check the notice to confirm!',
      'Watch the clock: 3 minutes per question is the average pace in most tests. If you get stuck, skip it and come back later.',
      'Mark your answer on the draft sheet before transferring it to the official answer sheet — copying everything at the end avoids bubbling mistakes.',
      'Save the last 10 minutes to review the questions you doubted. Hurry is the board’s best ally.'
    ],
    es: [
      'Lee el enunciado dos veces: el comité esconde el verbo principal detrás de adornos. Subraya lo que la pregunta pide de verdad.',
      'Elimina primero las opciones absurdas — cada una que descartas aumenta muchísimo tu chance de acertar con criterio.',
      'En exámenes CESPE/Cebraspe, una pregunta errada suele anular una correcta: responde solo lo que dominas. ¡Revisa la convocatoria para confirmar!',
      'Controla el reloj: 3 minutos por pregunta es el ritmo medio de la mayoría de los exámenes. Si te trabas, sáltala y vuelve después.',
      'Marca tu respuesta en el borrador antes de pasarla a la hoja oficial — copiar todo al final evita errores de marcado.',
      'Guarda los últimos 10 minutos para revisar las preguntas dudosas. La prisa es la mejor aliada del comité.'
    ]
  },

  // ---------- Frases motivacionais de estudo (sorteadas a cada acesso), por idioma ----------
  frasesMotivacionais: {
    pt: [
      'A aprovação não chega de uma vez: chega em goles diários.',
      'Cada questão errada hoje é uma certa amanhã.',
      'O edital é o mapa; o simulado, o caminho.',
      'Constância vence intensidade: 1 hora por dia vale mais que 10 no domingo.',
      'Você não precisa ser o melhor do mundo — precisa passar da nota de corte.',
      'Estudar é como passar café: devagar, o sabor sai melhor.',
      'Foca no processo que a aprovação vira consequência.',
      'Descansar também é estudo: cérebro cansado não aprende. Vai dormir, campeão(a).',
      'Quem revisa hoje responde com segurança amanhã.',
      'Não existe matéria impossível: existe matéria ainda não revisada.',
      'Três páginas por dia viram um livro por mês. E um livro vira aprovação.',
      'A banca cobra justamente o que você evitou estudar. Encara a matéria chata primeiro.',
      'Fazer questão é o único jeito de descobrir o que você ainda não sabe.',
      'Anota o erro, revisa a anotação: é assim que a nota sobe.',
      'Disciplina é lembrar do objetivo quando a vontade passa longe.',
      'Você não está atrasado(a) — está no caminho. Só não pare.',
      'Resumo bom é resumo curto: se não couber numa página, ainda não ficou claro.',
      'Aprovação é feita de dias comuns bem aproveitados.',
      'Teoria, questão, correção do erro. Repete. É simples, não é fácil.',
      'Pequenos avanços diários constroem grandes notas.'
    ],
    en: [
      'Approval doesn’t come all at once: it comes in daily sips.',
      'Every question you miss today is a right answer tomorrow.',
      'The exam notice is the map; the mock test is the road.',
      'Consistency beats intensity: 1 hour a day is worth more than 10 on Sunday.',
      'You don’t have to be the best in the world — you just have to beat the cut-off score.',
      'Studying is like brewing coffee: slowly, the flavour comes out better.',
      'Focus on the process and approval becomes a consequence.',
      'Resting is studying too: a tired brain doesn’t learn. Go to sleep, champ.',
      'Whoever reviews today answers with confidence tomorrow.',
      'There is no impossible subject: only a subject you haven’t reviewed yet.',
      'Three pages a day become a book a month. And a book becomes approval.',
      'The board tests exactly what you avoided studying. Face the boring subject first.',
      'Solving questions is the only way to find out what you still don’t know.',
      'Write down the mistake, review the note: that’s how the score goes up.',
      'Discipline is remembering the goal when motivation is far away.',
      'You are not behind — you are on the way. Just don’t stop.',
      'A good summary is a short summary: if it doesn’t fit on one page, it’s not clear yet.',
      'Approval is made of ordinary days well used.',
      'Theory, question, fix the mistake. Repeat. It’s simple, not easy.',
      'Small daily steps build big scores.'
    ],
    es: [
      'La aprobación no llega de una vez: llega a sorbos diarios.',
      'Cada pregunta fallada hoy es un acierto mañana.',
      'La convocatoria es el mapa; el simulacro, el camino.',
      'La constancia vence a la intensidad: 1 hora al día vale más que 10 el domingo.',
      'No necesitas ser el mejor del mundo — necesitas superar la nota de corte.',
      'Estudiar es como preparar café: despacio, el sabor sale mejor.',
      'Enfócate en el proceso y la aprobación será una consecuencia.',
      'Descansar también es estudiar: un cerebro cansado no aprende. A dormir, campeón(a).',
      'Quien repasa hoy responde con seguridad mañana.',
      'No existe materia imposible: existe materia aún no repasada.',
      'Tres páginas al día se vuelven un libro al mes. Y un libro se vuelve aprobación.',
      'El comité evalúa justo lo que evitaste estudiar. Enfrenta primero la materia aburrida.',
      'Resolver preguntas es la única forma de descubrir lo que aún no sabes.',
      'Anota el error, repasa la nota: así sube la calificación.',
      'La disciplina es recordar el objetivo cuando las ganas están lejos.',
      'No estás atrasado(a) — estás en el camino. Solo no pares.',
      'Un buen resumen es un resumen corto: si no cabe en una página, aún no está claro.',
      'La aprobación se hace de días comunes bien aprovechados.',
      'Teoría, pregunta, corrección del error. Repite. Es simple, no fácil.',
      'Los pequeños avances diarios construyen grandes notas.'
    ]
  }
};
