/* ============================================================
   GABARITO CAFÉ — js/idioma.js
   Sistema de idiomas do app: português (pt), inglês (en) e
   espanhol (es). Guarda a escolha no localStorage, troca os
   textos estáticos do HTML (atributo data-i18n) e oferece a
   função T("chave") para os textos montados pelo JavaScript.

   Observação importante: o CONTEÚDO de estudo (questões,
   resumos de matérias e pegadinhas das bancas) continua em
   português, porque são provas brasileiras. A INTERFACE toda
   é traduzida.
   ============================================================ */

// Função global de tradução: T('chave', { nome: 'Ana' })
function T(chave, dados) {
  return Idioma.texto(chave, dados);              // delega para o objeto Idioma
}

// Objeto global de idiomas
const Idioma = {

  // Chave onde a preferência de idioma fica salva
  CHAVE: 'gc_idioma',

  // Idioma em uso agora
  atual: 'pt',

  // Lista dos idiomas disponíveis (código, nome e bandeira)
  IDIOMAS: [
    { codigo: 'pt', nome: 'Português', bandeira: 'assets/bandeira-br.svg' }, // Brasil
    { codigo: 'en', nome: 'English', bandeira: 'assets/bandeira-us.svg' },   // EUA
    { codigo: 'es', nome: 'Español', bandeira: 'assets/bandeira-es.svg' }    // Espanha
  ],

  // ---------- Dicionário de textos da interface ----------
  DICIONARIO: {

    /* ================= PORTUGUÊS ================= */
    pt: {
      // Navegação e topo
      nav_dashboard: '🏠 Dashboard',                       // item do menu
      nav_edital: '📄 Meu edital',                          // item do menu
      nav_simulado: '📝 Simulado',                          // item do menu
      nav_bancas: '🕵️ Bancas',                              // item do menu
      nav_temas: '📚 Temas que caem',                       // item do menu
      app_slogan: 'estude com sabor de aprovação',          // slogan do login
      btn_sair: '↩ Sair da conta',                          // botão de sair
      foco_prefixo: '🎯 Foco: ',                            // prefixo do cargo focado
      tela_dashboard_t: 'Dashboard',                        // título do topo
      tela_dashboard_s: 'Seu progresso, fresquinho como café passado na hora.', // legenda
      tela_edital_t: 'Seu edital na mesa',                  // título do topo
      tela_edital_s: 'Importe o PDF e descubra cargos, matérias e por onde começar.', // legenda
      tela_simulado_t: 'Hora do simulado',                  // título do topo
      tela_simulado_s: 'Escolha o tamanho do desafio e bora.', // legenda
      tela_bancas_t: 'Conheça as bancas',                   // título do topo
      tela_bancas_s: 'Cada banca tem manias — aqui você aprende todas as pegadinhas.', // legenda
      tela_temas_t: 'O que mais cai',                       // título do topo
      tela_temas_s: 'Os temas campeões de concursos e vestibulares, com mapa de estudo.', // legenda
      saudacao_dia: 'Bom dia',                              // saudação da manhã
      saudacao_tarde: 'Boa tarde',                          // saudação da tarde
      saudacao_noite: 'Boa noite',                          // saudação da noite
      rodape: 'Feito com ☕ e muitas horas de estudo — Gabarito Café · seus dados ficam só com você', // rodapé
      tema_titulo: 'Alternar tema claro/escuro',            // dica do botão de tema
      idioma_titulo: 'Escolher idioma',                     // dica do seletor de idioma

      // Tela de login
      login_aba_entrar: 'Já tenho conta',                   // aba de login
      login_aba_criar: 'Criar conta',                       // aba de cadastro
      login_bemvindo: 'Bem-vindo(a) de volta ☕',            // título do login
      login_bemvindo_sub: 'Passa um café e bora revisar?',  // legenda do login
      login_email: 'E-mail',                                // rótulo do e-mail
      login_email_ph: 'voce@exemplo.com',                   // exemplo de e-mail
      login_senha: 'Senha',                                 // rótulo da senha
      login_senha_ph: 'Sua senha',                          // exemplo de senha
      login_btn: 'Entrar na cafeteria',                     // botão de entrar
      login_ou: 'ou',                                       // divisor
      login_visitante: '☕ Entrar como visitante (modo degustação)', // botão visitante
      login_aviso: '🔒 Contas e resultados ficam salvos apenas neste navegador (localStorage). Nada vai para servidores.', // aviso de privacidade
      cad_titulo: 'Criar conta grátis ☕',                   // título do cadastro
      cad_sub: 'Leva menos tempo que passar um espresso.',  // legenda do cadastro
      cad_nome: 'Seu nome',                                 // rótulo do nome
      cad_nome_ph: 'Como devemos te chamar?',               // exemplo de nome
      cad_senha_ph: 'No mínimo 4 caracteres',               // exemplo de senha
      cad_btn: 'Abrir minha conta',                         // botão de cadastrar
      login_destaque_1: '📄 Importe o edital e descubra cargos e matérias', // destaque 1
      login_destaque_2: '📝 Simulados de 5 a 50 questões, com correção comentada', // destaque 2
      login_destaque_3: '🎥 Errou? Veja a explicação e uma aula no YouTube', // destaque 3
      login_destaque_4: '🕵️ Aprenda as pegadinhas das bancas famosas', // destaque 4
      login_destaque_5: '📈 Acompanhe seu progresso no dashboard', // destaque 5
      frase_assinatura: '— o barista',                      // assinatura da frase

      // Erros de conta
      erro_nome_curto: 'Hmm, esse nome está curto demais. Como te chamam?', // nome inválido
      erro_email_invalido: 'Esse e-mail não parece certo. Confere aí?',     // e-mail inválido
      erro_senha_curta: 'Senha muito curta! Mínimo de 4 caracteres, combinado?', // senha curta
      erro_email_existe: 'Já tem uma conta com esse e-mail. Tenta entrar?', // e-mail duplicado
      erro_email_nao_encontrado: 'Não achei conta com esse e-mail. Bora criar uma?', // login sem conta
      erro_senha_errada: 'Senha errada... acontece! Tenta de novo.',        // senha incorreta

      // Avisos (torradas)
      toast_bemvindo: 'Bem-vindo(a) de volta, {nome}! ☕',   // login ok
      toast_conta_criada: 'Conta criada! A cafeteria é sua, {nome} ☕', // cadastro ok
      toast_visitante: 'Modo degustação ativado! Pode explorar à vontade ☕', // visitante
      toast_foco_guardado: 'Foco guardado! Bora mirar em {cargo} 🎯', // foco salvo
      toast_foco_limpo: 'Foco limpo. Escolhe um cargo quando quiser.', // foco removido
      toast_edital_ok: 'Edital na mesa! Olha o que encontrei 📄', // edital analisado
      toast_edital_erro: 'Não consegui ler o PDF. Tenta colar o texto abaixo!', // falha no PDF
      toast_cola_curto: 'Cola um pedaço maior do edital aí — precisa de conteúdo para analisar!', // texto curto
      toast_qtd: 'Escolhe a quantidade de questões primeiro! 😉', // sem quantidade
      toast_refazer: 'Bora refazer as {n} que escaparam! 🔄', // refazer erradas
      toast_idioma: 'Idioma: {idioma}',                     // idioma trocado
      toast_tema_escuro: 'Tema escuro ligado 🌙',           // tema escuro
      toast_tema_claro: 'Tema claro ligado ☀️',             // tema claro

      // Dashboard
      dash_ola: 'E aí, {nome}! ☕',                          // saudação com nome
      dash_ola_sem_nome: 'E aí! ☕',                         // saudação sem nome
      dash_atalho_edital_t: 'Importar edital',              // atalho
      dash_atalho_edital_s: 'Descubra cargos e matérias',   // legenda do atalho
      dash_atalho_sim_t: 'Fazer simulado',                  // atalho
      dash_atalho_sim_s: 'De 5 a 50 questões',              // legenda do atalho
      dash_atalho_bancas_t: 'Estudar bancas',               // atalho
      dash_atalho_bancas_s: 'As pegadinhas de cada uma',    // legenda do atalho
      dash_atalho_temas_t: 'Temas que caem',                // atalho
      dash_atalho_temas_s: 'O mapa das matérias',           // legenda do atalho
      dash_vazio_t: 'Sua xícara de progresso está vazia',   // estado vazio
      dash_vazio_x: 'Que tal o primeiro gole? Faz um simulado rapidinho — 5 questões bastam para começar.', // convite
      dash_vazio_btn: '☕ Fazer meu primeiro simulado',      // botão do estado vazio
      dash_stat_simulados: '📝 Simulados feitos',           // estatística
      dash_stat_aproveitamento: '🎯 Aproveitamento geral',  // estatística
      dash_stat_melhor: '🏆 Melhor resultado',              // estatística
      dash_stat_questoes: '✅ Questões respondidas',         // estatística
      dash_stat_sequencia: 'dias seguidos estudando',       // estatística
      dash_evolucao: '📈 Sua evolução',                     // seção
      dash_evolucao_sub: 'Percentual de acertos nos últimos simulados (o último é o {pct}% de hoje).', // legenda
      dash_materia: '📚 Como você está por matéria',        // seção
      dash_materia_vazio: 'Faz um simulado por matéria para ver seu desempenho aqui.', // sem dados

      // Edital
      ed_zona_t: 'Bota o edital na mesa',                   // título da zona de upload
      ed_zona_sub: 'Arraste o PDF do edital (ou manual do candidato) aqui, ou clique para escolher o arquivo.', // instrução
      ed_zona_aviso: 'O arquivo é lido no seu navegador — nada é enviado para a internet.', // privacidade
      ed_lendo: 'Passando o café... lendo seu edital ☕',    // status de leitura
      ed_erro_t: '😅 Não consegui ler esse PDF (pode estar protegido ou com layout complicado).', // erro
      ed_erro_sub: 'Plano B: abre o edital, copia o texto e cola no campo abaixo. A análise funciona do mesmo jeito!', // plano B
      ed_curto_aviso: 'Hmm, o texto estava curto demais para analisar. Tenta colar mais conteúdo (o edital inteiro, de preferência).', // texto curto
      ed_resumo: 'Seu edital em resumo',                    // título do resumo
      ed_sem_trechos: 'Não consegui separar seções claras, mas olha o que encontrei abaixo. 👇', // sem seções
      ed_cargos_t: '💼 Cargos que encontrei',               // seção de cargos
      ed_cargos_vazio: 'Não consegui identificar cargos automaticamente (alguns editais usam tabelas complexas). Dá uma conferida no PDF e me diz o cargo no campo "Meu foco" lá embaixo. 👇', // sem cargos
      ed_materias_t: '📚 Matérias que identifiquei',        // seção de matérias
      ed_materias_vazio: 'Não identifiquei matérias nesse texto. Pode ser um edital com formatação diferente — confere o PDF e, se quiser, usa o campo de colar texto com o conteúdo programático.', // sem matérias
      ed_legenda: '✓ = temos questões prontas no simulado · 🕮 = ainda não temos questões dessa matéria (estude pelo edital)', // legenda dos chips
      ed_plano_t: '🗺️ Por onde começar (plano de estudo)',  // seção do plano
      ed_plano_vazio: 'Sem matérias detectadas, não consigo montar o plano ainda. Cola o conteúdo programático no campo abaixo! 📋', // plano vazio
      ed_plano_sem_resumo: 'Ainda não temos resumo pronto dessa matéria — estude direto pelo conteúdo programático do edital. Anota os tópicos e manda ver!', // matéria sem resumo
      ed_plano_comeca: 'Começa por:',                       // rótulo dos tópicos
      ed_btn_simulado: '📝 Gerar simulado com as matérias do edital', // ação principal
      ed_cola_t: 'Sem PDF? Cola o texto aqui',              // seção do plano B
      ed_cola_ph: 'Cole aqui o conteúdo do edital (conteúdo programático, cargos, requisitos...)', // exemplo
      ed_cola_btn: '🔍 Analisar texto colado',              // botão
      ed_foco_t: 'Meu foco 🎯',                             // seção do foco
      ed_foco_label: 'Qual cargo você vai disputar?',       // rótulo
      ed_foco_ph: 'Ex.: Técnico Administrativo, Auditor Fiscal, Medicina...', // exemplo
      ed_foco_btn: 'Guardar foco',                          // botão

      // Simulado
      sim_t: '☕ Monte seu simulado',                        // título
      sim_sub: 'Escolhe o tamanho do desafio. O café é por nossa conta.', // legenda
      sim_quantas: 'Quantas questões?',                     // rótulo
      sim_materia_l: 'Matéria',                             // rótulo do filtro
      sim_materia_todas: 'Todas as matérias (prova misturada)', // opção padrão
      sim_banca_l: 'Estilo de banca (pegadinhas)',          // rótulo do filtro
      sim_banca_todas: 'Todas as bancas (misturado)',       // opção padrão
      sim_edital_check: '🎯 Usar só as matérias do meu edital ({n} detectadas)', // filtro do edital
      sim_materias_l: 'Matérias (escolha uma ou mais)',     // rótulo da múltipla escolha
      sim_todas: 'Selecionar todas',                        // marcar todas as matérias
      sim_limpar: 'Limpar',                                 // limpar a seleção
      sim_sel_1: '1 matéria selecionada',                   // contador (singular)
      sim_sel_n: '{n} matérias selecionadas',               // contador (plural)
      sim_disp: '☕ Com esses filtros temos {n} questões no estoque. ', // aviso de estoque
      sim_disp_poucas: 'Relaxa os filtros para liberar mais!', // estoque baixo
      sim_disp_ok: 'Escolhe o tamanho aí em cima.',         // estoque ok
      sim_btn_comecar: '▶️ Passar o café e começar',         // botão de início
      sim_dicas_t: '📝 Dicas antes de começar',             // seção de dicas
      sim_questao: 'Questão {n} de {total}',                // numeração
      sim_responder: 'Responder',                           // botão
      sim_certo: '✅ Mandou bem!',                          // feedback de acerto
      sim_errou: '❌ Ops! Você marcou a alternativa {letra}.', // feedback de erro
      sim_certa_e: 'A certa é a {letra}.',                  // gabarito
      sim_como: '🧭 Como fazer, passo a passo:',            // passo a passo
      sim_dica: '☕ Dica do barista: ',                      // dica
      sim_aula: '▶️ Assistir aula sobre "{tema}" no YouTube', // link do vídeo
      sim_proxima: 'Próxima questão →',                     // botão avançar
      sim_finalizar: '🏁 Finalizar e ver resultado',        // botão finalizar
      sim_resultado_t: '🏁 Simulado concluído!',            // título do resultado
      sim_resultado_refez: '🔄 Revisão concluída!',         // título do resultado (refez)
      sim_resumo: '{total} questões · {tempo} de prova',    // resumo do resultado
      sim_stat_acertos: '✅ Acertos',                       // estatística
      sim_stat_erros: '❌ Erros',                           // estatística
      sim_stat_aproveitamento: '🎯 Aproveitamento',         // estatística
      sim_stat_tempo: '⏱ Tempo de prova',                   // estatística
      sim_por_materia_t: '📚 Desempenho por matéria',       // seção
      sim_escorregou_t: '🔍 Onde você escorregou',          // seção
      sim_gabarito: 'gabarito: {letra}',                    // rótulo do gabarito
      sim_zero: 'Zero erros! Essa prova saiu perfeita, igual café coado na medida.', // parabéns
      sim_refazer: '🔄 Refazer as {n} que errei',           // botão
      sim_novo: '📝 Novo simulado',                         // botão
      sim_ir_dash: '🏠 Ver no dashboard',                   // botão
      sim_dicas_proxima_t: '📝 Dicas do barista para a próxima', // seção
      sim_frase_alta: 'Café forte e gabarito limpo! Você está voando! 🚀',   // desempenho 90%+
      sim_frase_boa: 'Bom demais! A aprovação está no seu radar. ☕',         // desempenho 70%+
      sim_frase_media: 'Na medida! Revise as erradas e sobe mais um degrau. 📈', // desempenho 50%+
      sim_frase_baixa: 'Todo barista queima o primeiro café. Revisa as erradas e volta! 💪', // abaixo de 50%

      // Bancas e temas
      bancas_intro: 'Conhecer a banca é metade do caminho: cada uma tem manias, e aqui a gente expõe todas. 🕵️', // introdução
      bancas_pegadinhas_t: 'Pegadinhas favoritas:',         // rótulo da lista
      conteudo_aviso: 'ℹ️ O conteúdo de estudo (resumos, pegadinhas e questões) é em português, porque são provas brasileiras.', // aviso de conteúdo
      temas_aba_concursos: '🎯 Concursos',                  // aba
      temas_aba_vest: '🎓 Vestibular',                      // aba
      temas_porque: 'Por quê: ',                             // rótulo do motivo

      // Tela de dicas
      nav_dicas: '💡 Dicas',                                 // item do menu
      tela_dicas_t: 'Dicas que valem ouro',                  // título do topo
      tela_dicas_s: 'O que separa quem passa de quem quase passa.', // legenda do topo
      dicas_intro: 'Não é só estudar muito: é estudar do jeito certo. Aqui vai o que a gente aprendeu na prática. 💡', // introdução
      dicas_prova_t: '📝 Dicas rápidas de prova',            // seção final

      // Edital — análise inteligente
      ed_confianca: 'Confiança da análise:',                 // rótulo da nota
      ed_confianca_aviso: 'Quanto mais alto, mais o robô entendeu do seu edital (e menos você precisa conferir no PDF).', // aviso
      ed_banca_t: '🏦 Banca organizadora',                   // seção
      ed_banca_ver: '🕵️ Ver as pegadinhas dessa banca',      // botão
      ed_banca_nenhuma: 'Não identifiquei a banca neste texto. Dá uma olhada no edital — saber a banca muda sua estratégia!', // aviso
      ed_datas_t: '📅 Datas importantes',                    // seção
      ed_sem_datas: 'Não encontrei datas no texto. Confere no PDF do edital!', // aviso
      ed_data_inscricoes: 'Inscrições',                      // rótulo
      ed_data_prova: 'Data da prova',                        // rótulo
      ed_data_resultado: 'Resultado final',                  // rótulo
      ed_contagem: 'Contagem regressiva',                    // rótulo
      ed_faltam: 'Faltam {dias} dias para a prova!',         // contador
      ed_prova_hoje: 'É hoje! Respira fundo e boa prova! 🍀', // dia da prova
      ed_prova_passou: 'A data da prova já passou — confere o edital.', // já passou
      ed_numeros_t: '🔢 Os números do edital',               // seção
      ed_num_vagas: 'Vagas',                                 // rótulo
      ed_num_salario: 'Salário',                             // rótulo
      ed_num_taxa: 'Taxa de inscrição',                      // rótulo
      ed_num_questoes: 'Questões da prova',                  // rótulo
      ed_num_validade: 'Validade do concurso',               // rótulo
      ed_numeros_vazio: 'Não encontrei os números (vagas, salário...) neste texto.', // aviso
      ed_anos: 'anos',                                       // unidade
      ed_meses: 'meses',                                     // unidade
      ed_escolaridade_t: '🎓 Escolaridade exigida',          // seção
      ed_programa_t: '📖 O que o edital pede em cada matéria', // seção
      ed_programa_sub: 'Estes são os tópicos que o próprio edital lista. Comece pelos que você domina menos:', // explicação
      ed_programa_vazio: 'Não consegui separar o conteúdo programático por matéria. Cola o texto do edital no campo abaixo que eu tento de novo!', // aviso
      ed_plano_sem_data: 'Não achei a data da prova no texto — cola o edital aqui que eu monto o cronograma do estudo.', // orientação
      ed_plano_dias_1: 'Faltam {dias} dias: reta final! Priorize revisão, caderno de erros e simulados cronometrados.', // reta final
      ed_plano_dias_2: 'Faltam {dias} dias: dá tempo de fechar o edital com folga. Teoria + questões todos os dias.', // meio do caminho
      ed_plano_dias_3: 'Faltam {dias} dias: ainda dá muito tempo. Monte a base com calma, sem pular etapas.', // bastante tempo
      ed_plano_passou: 'A prova já passou (ou é hoje). Boa sorte — e bora pensar na próxima!', // já passou

      // Dashboard — recomendação inteligente
      dash_fraco_t: '🎯 Onde focar agora',                   // seção
      dash_fraco_txt: 'Seu ponto mais fraco é {materia}, com {pct}% de acerto. Vamos treinar?', // diagnóstico
      dash_fraco_btn: 'Treinar {materia} (10 questões)',     // botão
      dash_fraco_bom: 'Você está indo bem em todas as matérias treinadas! Que tal aumentar o número de questões no próximo simulado?', // elogio
      dash_fraco_pouco: 'Responda algumas questões em cada matéria e eu descubro aqui onde você precisa focar. 🕵️', // sem dados
      toast_treino: 'Bora treinar {materia}! 📝'             // aviso
    },

    /* ================= ENGLISH ================= */
    en: {
      // Navigation
      nav_dashboard: '🏠 Dashboard',
      nav_edital: '📄 My exam notice',
      nav_simulado: '📝 Mock test',
      nav_bancas: '🕵️ Exam boards',
      nav_temas: '📚 Hot topics',
      app_slogan: 'study with a taste of approval',
      btn_sair: '↩ Sign out',
      foco_prefixo: '🎯 Goal: ',
      tela_dashboard_t: 'Dashboard',
      tela_dashboard_s: 'Your progress, fresh as a just-brewed coffee.',
      tela_edital_t: 'Your exam notice on the table',
      tela_edital_s: 'Upload the PDF and find out the positions, subjects and where to start.',
      tela_simulado_t: 'Mock test time',
      tela_simulado_s: 'Pick the size of the challenge and let’s go.',
      tela_bancas_t: 'Meet the exam boards',
      tela_bancas_s: 'Every board has its quirks — here you learn all their traps.',
      tela_temas_t: 'What shows up the most',
      tela_temas_s: 'The top topics in Brazilian public exams, with a study map.',
      saudacao_dia: 'Good morning',
      saudacao_tarde: 'Good afternoon',
      saudacao_noite: 'Good evening',
      rodape: 'Made with ☕ and many study hours — Gabarito Café · your data stays with you',
      tema_titulo: 'Toggle light/dark theme',
      idioma_titulo: 'Choose language',

      // Login
      login_aba_entrar: 'I have an account',
      login_aba_criar: 'Create account',
      login_bemvindo: 'Welcome back ☕',
      login_bemvindo_sub: 'Brew a coffee and let’s review?',
      login_email: 'Email',
      login_email_ph: 'you@example.com',
      login_senha: 'Password',
      login_senha_ph: 'Your password',
      login_btn: 'Enter the coffee shop',
      login_ou: 'or',
      login_visitante: '☕ Enter as guest (tasting mode)',
      login_aviso: '🔒 Accounts and results are saved only in this browser (localStorage). Nothing goes to servers.',
      cad_titulo: 'Create a free account ☕',
      cad_sub: 'Takes less time than pulling an espresso.',
      cad_nome: 'Your name',
      cad_nome_ph: 'What should we call you?',
      cad_senha_ph: 'At least 4 characters',
      cad_btn: 'Create my account',
      login_destaque_1: '📄 Upload the exam notice and discover positions and subjects',
      login_destaque_2: '📝 Mock tests from 5 to 50 questions, with explained answers',
      login_destaque_3: '🎥 Got it wrong? See the explanation and a YouTube lesson',
      login_destaque_4: '🕵️ Learn the traps of the famous exam boards',
      login_destaque_5: '📈 Track your progress on the dashboard',
      frase_assinatura: '— the barista',

      // Account errors
      erro_nome_curto: 'Hmm, that name is too short. What do people call you?',
      erro_email_invalido: 'That email doesn’t look right. Can you check it?',
      erro_senha_curta: 'Password too short! At least 4 characters, deal?',
      erro_email_existe: 'There’s already an account with this email. Try signing in?',
      erro_email_nao_encontrado: 'No account found with this email. Shall we create one?',
      erro_senha_errada: 'Wrong password... it happens! Try again.',

      // Toasts
      toast_bemvindo: 'Welcome back, {nome}! ☕',
      toast_conta_criada: 'Account created! The coffee shop is yours, {nome} ☕',
      toast_visitante: 'Tasting mode on! Feel free to explore ☕',
      toast_foco_guardado: 'Goal saved! Let’s aim at {cargo} 🎯',
      toast_foco_limpo: 'Goal cleared. Pick a position whenever you want.',
      toast_edital_ok: 'Exam notice on the table! Look what I found 📄',
      toast_edital_erro: 'I couldn’t read that PDF. Try pasting the text below!',
      toast_cola_curto: 'Paste a bigger chunk of the notice — I need content to analyse!',
      toast_qtd: 'Pick the number of questions first! 😉',
      toast_refazer: 'Let’s redo the {n} you missed! 🔄',
      toast_idioma: 'Language: {idioma}',
      toast_tema_escuro: 'Dark theme on 🌙',
      toast_tema_claro: 'Light theme on ☀️',

      // Dashboard
      dash_ola: 'Hey, {nome}! ☕',
      dash_ola_sem_nome: 'Hey there! ☕',
      dash_atalho_edital_t: 'Upload exam notice',
      dash_atalho_edital_s: 'Discover positions and subjects',
      dash_atalho_sim_t: 'Take a mock test',
      dash_atalho_sim_s: 'From 5 to 50 questions',
      dash_atalho_bancas_t: 'Study the boards',
      dash_atalho_bancas_s: 'Each one’s traps',
      dash_atalho_temas_t: 'Hot topics',
      dash_atalho_temas_s: 'The subject map',
      dash_vazio_t: 'Your progress cup is empty',
      dash_vazio_x: 'How about the first sip? Take a quick mock test — 5 questions are enough to start.',
      dash_vazio_btn: '☕ Take my first mock test',
      dash_stat_simulados: '📝 Mock tests taken',
      dash_stat_aproveitamento: '🎯 Overall accuracy',
      dash_stat_melhor: '🏆 Best result',
      dash_stat_questoes: '✅ Questions answered',
      dash_stat_sequencia: 'days studying in a row',
      dash_evolucao: '📈 Your progress',
      dash_evolucao_sub: 'Accuracy in your latest mock tests (the last one is today’s {pct}%).',
      dash_materia: '📚 How you are doing by subject',
      dash_materia_vazio: 'Take a mock test by subject to see your performance here.',

      // Exam notice
      ed_zona_t: 'Put the exam notice on the table',
      ed_zona_sub: 'Drag the notice PDF (or candidate handbook) here, or click to choose the file.',
      ed_zona_aviso: 'The file is read inside your browser — nothing is sent to the internet.',
      ed_lendo: 'Brewing... reading your exam notice ☕',
      ed_erro_t: '😅 I couldn’t read that PDF (it may be protected or have a tricky layout).',
      ed_erro_sub: 'Plan B: open the notice, copy the text and paste it in the field below. The analysis works the same way!',
      ed_curto_aviso: 'Hmm, that text was too short to analyse. Try pasting more content (the whole notice, preferably).',
      ed_resumo: 'Your exam notice in short',
      ed_sem_trechos: 'I couldn’t separate clear sections, but look what I found below. 👇',
      ed_cargos_t: '💼 Positions I found',
      ed_cargos_vazio: 'I couldn’t identify positions automatically (some notices use complex tables). Check the PDF and tell me your position in the "My goal" field below. 👇',
      ed_materias_t: '📚 Subjects I identified',
      ed_materias_vazio: 'I didn’t identify subjects in this text. It may be a notice with a different layout — check the PDF and, if you want, paste the syllabus in the text field.',
      ed_legenda: '✓ = we have questions ready in the mock test · 🕮 = no questions for this subject yet (study from the notice)',
      ed_plano_t: '🗺️ Where to start (study plan)',
      ed_plano_vazio: 'Without detected subjects I can’t build the plan yet. Paste the syllabus in the field below! 📋',
      ed_plano_sem_resumo: 'We don’t have a summary for this subject yet — study straight from the notice syllabus. Write down the topics and go for it!',
      ed_plano_comeca: 'Start with:',
      ed_btn_simulado: '📝 Generate a mock test with the notice subjects',
      ed_cola_t: 'No PDF? Paste the text here',
      ed_cola_ph: 'Paste the notice content here (syllabus, positions, requirements...)',
      ed_cola_btn: '🔍 Analyse pasted text',
      ed_foco_t: 'My goal 🎯',
      ed_foco_label: 'Which position are you going for?',
      ed_foco_ph: 'E.g.: Administrative Technician, Tax Auditor, Medicine...',
      ed_foco_btn: 'Save goal',

      // Mock test
      sim_t: '☕ Build your mock test',
      sim_sub: 'Pick the size of the challenge. The coffee is on us.',
      sim_quantas: 'How many questions?',
      sim_materia_l: 'Subject',
      sim_materia_todas: 'All subjects (mixed test)',
      sim_banca_l: 'Exam board style (traps)',
      sim_banca_todas: 'All boards (mixed)',
      sim_edital_check: '🎯 Use only my notice subjects ({n} detected)',
      sim_materias_l: 'Subjects (pick one or more)',
      sim_todas: 'Select all',
      sim_limpar: 'Clear',
      sim_sel_1: '1 subject selected',
      sim_sel_n: '{n} subjects selected',
      sim_disp: '☕ With these filters we have {n} questions in stock. ',
      sim_disp_poucas: 'Loosen the filters to unlock more!',
      sim_disp_ok: 'Pick the size up there.',
      sim_btn_comecar: '▶️ Brew the coffee and start',
      sim_dicas_t: '📝 Tips before you start',
      sim_questao: 'Question {n} of {total}',
      sim_responder: 'Answer',
      sim_certo: '✅ Nice one!',
      sim_errou: '❌ Oops! You picked option {letra}.',
      sim_certa_e: 'The right one is {letra}.',
      sim_como: '🧭 How to solve it, step by step:',
      sim_dica: '☕ Barista’s tip: ',
      sim_aula: '▶️ Watch a lesson on "{tema}" on YouTube',
      sim_proxima: 'Next question →',
      sim_finalizar: '🏁 Finish and see the result',
      sim_resultado_t: '🏁 Mock test finished!',
      sim_resultado_refez: '🔄 Review finished!',
      sim_resumo: '{total} questions · {tempo} of test',
      sim_stat_acertos: '✅ Correct',
      sim_stat_erros: '❌ Wrong',
      sim_stat_aproveitamento: '🎯 Accuracy',
      sim_stat_tempo: '⏱ Time on test',
      sim_por_materia_t: '📚 Performance by subject',
      sim_escorregou_t: '🔍 Where you slipped',
      sim_gabarito: 'answer: {letra}',
      sim_zero: 'Zero mistakes! That test came out perfect, like a well-brewed coffee.',
      sim_refazer: '🔄 Redo the {n} I missed',
      sim_novo: '📝 New mock test',
      sim_ir_dash: '🏠 See it on the dashboard',
      sim_dicas_proxima_t: '📝 Barista’s tips for next time',
      sim_frase_alta: 'Strong coffee and a clean answer sheet! You’re flying! 🚀',
      sim_frase_boa: 'Really good! Approval is on your radar. ☕',
      sim_frase_media: 'Right on track! Review the misses and climb one more step. 📈',
      sim_frase_baixa: 'Every barista burns the first coffee. Review the misses and come back! 💪',

      // Boards and topics
      bancas_intro: 'Knowing the exam board is half the way: each one has quirks, and here we expose them all. 🕵️',
      bancas_pegadinhas_t: 'Favourite traps:',
      conteudo_aviso: 'ℹ️ The study content (summaries, traps and questions) is in Portuguese, because these are Brazilian exams.',
      temas_aba_concursos: '🎯 Public exams',
      temas_aba_vest: '🎓 University entrance',
      temas_porque: 'Why: ',

      // Tips screen
      nav_dicas: '💡 Tips',
      tela_dicas_t: 'Tips worth gold',
      tela_dicas_s: 'What separates those who pass from those who almost pass.',
      dicas_intro: 'It is not only about studying a lot: it is about studying the right way. Here is what we learned in practice. 💡',
      dicas_prova_t: '📝 Quick test-day tips',

      // Exam notice — smart analysis
      ed_confianca: 'Analysis confidence:',
      ed_confianca_aviso: 'The higher it is, the more the robot understood your notice (and the less you need to double-check the PDF).',
      ed_banca_t: '🏦 Exam board',
      ed_banca_ver: '🕵️ See this board’s traps',
      ed_banca_nenhuma: 'I could not identify the board in this text. Take a look at the notice — knowing the board changes your strategy!',
      ed_datas_t: '📅 Important dates',
      ed_sem_datas: 'I found no dates in the text. Check the notice PDF!',
      ed_data_inscricoes: 'Applications',
      ed_data_prova: 'Test date',
      ed_data_resultado: 'Final result',
      ed_contagem: 'Countdown',
      ed_faltam: '{dias} days to go until the test!',
      ed_prova_hoje: 'It is today! Take a deep breath and good luck! 🍀',
      ed_prova_passou: 'The test date has already passed — check the notice.',
      ed_numeros_t: '🔢 The notice numbers',
      ed_num_vagas: 'Vacancies',
      ed_num_salario: 'Salary',
      ed_num_taxa: 'Application fee',
      ed_num_questoes: 'Test questions',
      ed_num_validade: 'Validity of the exam',
      ed_numeros_vazio: 'I could not find the numbers (vacancies, salary...) in this text.',
      ed_anos: 'years',
      ed_meses: 'months',
      ed_escolaridade_t: '🎓 Required education',
      ed_programa_t: '📖 What the notice asks in each subject',
      ed_programa_sub: 'These are the topics the notice itself lists. Start with the ones you master the least:',
      ed_programa_vazio: 'I could not split the syllabus by subject. Paste the notice text in the field below and I will try again!',
      ed_plano_sem_data: 'I did not find the test date in the text — paste the notice here and I will build your study schedule.',
      ed_plano_dias_1: '{dias} days to go: final stretch! Prioritise review, your mistake notebook and timed mock tests.',
      ed_plano_dias_2: '{dias} days to go: enough time to cover the whole notice comfortably. Theory + questions every day.',
      ed_plano_dias_3: '{dias} days to go: plenty of time. Build your base calmly, without skipping steps.',
      ed_plano_passou: 'The test has already happened (or is today). Good luck — and let’s plan the next one!',

      // Dashboard — smart recommendation
      dash_fraco_t: '🎯 Where to focus now',
      dash_fraco_txt: 'Your weakest spot is {materia}, with {pct}% accuracy. Shall we train?',
      dash_fraco_btn: 'Train {materia} (10 questions)',
      dash_fraco_bom: 'You are doing well in every subject you practised! How about increasing the number of questions in your next mock test?',
      dash_fraco_pouco: 'Answer a few questions in each subject and I will figure out here where you need to focus. 🕵️',
      toast_treino: 'Let’s train {materia}! 📝'
    },

    /* ================= ESPAÑOL ================= */
    es: {
      // Navegación
      nav_dashboard: '🏠 Panel',
      nav_edital: '📄 Mi convocatoria',
      nav_simulado: '📝 Simulacro',
      nav_bancas: '🕵️ Comités',
      nav_temas: '📚 Temas frecuentes',
      app_slogan: 'estudia con sabor a aprobación',
      btn_sair: '↩ Cerrar sesión',
      foco_prefixo: '🎯 Meta: ',
      tela_dashboard_t: 'Panel',
      tela_dashboard_s: 'Tu progreso, recién hecho como un café.',
      tela_edital_t: 'Tu convocatoria sobre la mesa',
      tela_edital_s: 'Sube el PDF y descubre los puestos, las materias y por dónde empezar.',
      tela_simulado_t: 'Hora del simulacro',
      tela_simulado_s: 'Elige el tamaño del reto y vamos.',
      tela_bancas_t: 'Conoce los comités',
      tela_bancas_s: 'Cada comité tiene sus manías — aquí aprendes todas sus trampas.',
      tela_temas_t: 'Lo que más sale',
      tela_temas_s: 'Los temas campeones de los exámenes brasileños, con mapa de estudio.',
      saudacao_dia: 'Buenos días',
      saudacao_tarde: 'Buenas tardes',
      saudacao_noite: 'Buenas noches',
      rodape: 'Hecho con ☕ y muchas horas de estudio — Gabarito Café · tus datos se quedan contigo',
      tema_titulo: 'Cambiar tema claro/oscuro',
      idioma_titulo: 'Elegir idioma',

      // Acceso
      login_aba_entrar: 'Ya tengo cuenta',
      login_aba_criar: 'Crear cuenta',
      login_bemvindo: 'Bienvenido(a) de nuevo ☕',
      login_bemvindo_sub: '¿Preparamos un café y repasamos?',
      login_email: 'Correo',
      login_email_ph: 'tu@ejemplo.com',
      login_senha: 'Contraseña',
      login_senha_ph: 'Tu contraseña',
      login_btn: 'Entrar a la cafetería',
      login_ou: 'o',
      login_visitante: '☕ Entrar como invitado (modo degustación)',
      login_aviso: '🔒 Las cuentas y resultados se guardan solo en este navegador (localStorage). Nada va a servidores.',
      cad_titulo: 'Crea una cuenta gratis ☕',
      cad_sub: 'Tarda menos que preparar un espresso.',
      cad_nome: 'Tu nombre',
      cad_nome_ph: '¿Cómo te llamamos?',
      cad_senha_ph: 'Mínimo 4 caracteres',
      cad_btn: 'Abrir mi cuenta',
      login_destaque_1: '📄 Sube la convocatoria y descubre puestos y materias',
      login_destaque_2: '📝 Simulacros de 5 a 50 preguntas, con corrección comentada',
      login_destaque_3: '🎥 ¿Fallaste? Mira la explicación y una clase en YouTube',
      login_destaque_4: '🕵️ Aprende las trampas de los comités famosos',
      login_destaque_5: '📈 Sigue tu progreso en el panel',
      frase_assinatura: '— el barista',

      // Errores de cuenta
      erro_nome_curto: 'Mmm, ese nombre es muy corto. ¿Cómo te llaman?',
      erro_email_invalido: 'Ese correo no parece correcto. ¿Lo revisas?',
      erro_senha_curta: '¡Contraseña muy corta! Mínimo 4 caracteres, ¿de acuerdo?',
      erro_email_existe: 'Ya existe una cuenta con este correo. ¿Intentas entrar?',
      erro_email_nao_encontrado: 'No encontré una cuenta con este correo. ¿Creamos una?',
      erro_senha_errada: 'Contraseña incorrecta... ¡pasa! Inténtalo de nuevo.',

      // Avisos
      toast_bemvindo: '¡Bienvenido(a) de nuevo, {nome}! ☕',
      toast_conta_criada: '¡Cuenta creada! La cafetería es tuya, {nome} ☕',
      toast_visitante: '¡Modo degustación activado! Explora con libertad ☕',
      toast_foco_guardado: '¡Meta guardada! Apuntemos a {cargo} 🎯',
      toast_foco_limpo: 'Meta borrada. Elige un puesto cuando quieras.',
      toast_edital_ok: '¡Convocatoria sobre la mesa! Mira lo que encontré 📄',
      toast_edital_erro: 'No pude leer ese PDF. ¡Intenta pegar el texto abajo!',
      toast_cola_curto: '¡Pega un trozo más grande de la convocatoria — necesito contenido para analizar!',
      toast_qtd: '¡Elige primero la cantidad de preguntas! 😉',
      toast_refazer: '¡Vamos a rehacer las {n} que fallaste! 🔄',
      toast_idioma: 'Idioma: {idioma}',
      toast_tema_escuro: 'Tema oscuro activado 🌙',
      toast_tema_claro: 'Tema claro activado ☀️',

      // Panel
      dash_ola: '¡Hola, {nome}! ☕',
      dash_ola_sem_nome: '¡Hola! ☕',
      dash_atalho_edital_t: 'Subir convocatoria',
      dash_atalho_edital_s: 'Descubre puestos y materias',
      dash_atalho_sim_t: 'Hacer simulacro',
      dash_atalho_sim_s: 'De 5 a 50 preguntas',
      dash_atalho_bancas_t: 'Estudiar comités',
      dash_atalho_bancas_s: 'Las trampas de cada uno',
      dash_atalho_temas_t: 'Temas frecuentes',
      dash_atalho_temas_s: 'El mapa de las materias',
      dash_vazio_t: 'Tu taza de progreso está vacía',
      dash_vazio_x: '¿Qué tal el primer sorbo? Haz un simulacro rápido — 5 preguntas bastan para empezar.',
      dash_vazio_btn: '☕ Hacer mi primer simulacro',
      dash_stat_simulados: '📝 Simulacros hechos',
      dash_stat_aproveitamento: '🎯 Acierto general',
      dash_stat_melhor: '🏆 Mejor resultado',
      dash_stat_questoes: '✅ Preguntas respondidas',
      dash_stat_sequencia: 'días seguidos estudiando',
      dash_evolucao: '📈 Tu evolución',
      dash_evolucao_sub: 'Porcentaje de aciertos en los últimos simulacros (el último es el {pct}% de hoy).',
      dash_materia: '📚 Cómo vas por materia',
      dash_materia_vazio: 'Haz un simulacro por materia para ver tu rendimiento aquí.',

      // Convocatoria
      ed_zona_t: 'Pon la convocatoria sobre la mesa',
      ed_zona_sub: 'Arrastra el PDF de la convocatoria (o el manual del candidato) aquí, o haz clic para elegir el archivo.',
      ed_zona_aviso: 'El archivo se lee en tu navegador — nada se envía a internet.',
      ed_lendo: 'Preparando el café... leyendo tu convocatoria ☕',
      ed_erro_t: '😅 No pude leer ese PDF (puede estar protegido o tener un formato complicado).',
      ed_erro_sub: 'Plan B: abre la convocatoria, copia el texto y pégalo en el campo de abajo. ¡El análisis funciona igual!',
      ed_curto_aviso: 'Mmm, el texto era muy corto para analizar. Intenta pegar más contenido (la convocatoria completa, si es posible).',
      ed_resumo: 'Tu convocatoria en resumen',
      ed_sem_trechos: 'No pude separar secciones claras, pero mira lo que encontré abajo. 👇',
      ed_cargos_t: '💼 Puestos que encontré',
      ed_cargos_vazio: 'No pude identificar puestos automáticamente (algunas convocatorias usan tablas complejas). Revisa el PDF y dime tu puesto en el campo "Mi meta" de abajo. 👇',
      ed_materias_t: '📚 Materias que identifiqué',
      ed_materias_vazio: 'No identifiqué materias en este texto. Puede ser una convocatoria con otro formato — revisa el PDF y, si quieres, pega el programa en el campo de texto.',
      ed_legenda: '✓ = tenemos preguntas listas en el simulacro · 🕮 = aún no tenemos preguntas de esta materia (estudia por la convocatoria)',
      ed_plano_t: '🗺️ Por dónde empezar (plan de estudio)',
      ed_plano_vazio: 'Sin materias detectadas no puedo armar el plan todavía. ¡Pega el programa en el campo de abajo! 📋',
      ed_plano_sem_resumo: 'Aún no tenemos resumen de esta materia — estudia directo del programa de la convocatoria. ¡Anota los temas y a por ello!',
      ed_plano_comeca: 'Empieza por:',
      ed_btn_simulado: '📝 Generar simulacro con las materias de la convocatoria',
      ed_cola_t: '¿Sin PDF? Pega el texto aquí',
      ed_cola_ph: 'Pega aquí el contenido de la convocatoria (programa, puestos, requisitos...)',
      ed_cola_btn: '🔍 Analizar texto pegado',
      ed_foco_t: 'Mi meta 🎯',
      ed_foco_label: '¿A qué puesto vas?',
      ed_foco_ph: 'Ej.: Técnico Administrativo, Auditor Fiscal, Medicina...',
      ed_foco_btn: 'Guardar meta',

      // Simulacro
      sim_t: '☕ Arma tu simulacro',
      sim_sub: 'Elige el tamaño del reto. El café va por nuestra cuenta.',
      sim_quantas: '¿Cuántas preguntas?',
      sim_materia_l: 'Materia',
      sim_materia_todas: 'Todas las materias (examen mezclado)',
      sim_banca_l: 'Estilo de comité (trampas)',
      sim_banca_todas: 'Todos los comités (mezclado)',
      sim_edital_check: '🎯 Usar solo las materias de mi convocatoria ({n} detectadas)',
      sim_materias_l: 'Materias (elige una o más)',
      sim_todas: 'Seleccionar todas',
      sim_limpar: 'Limpiar',
      sim_sel_1: '1 materia seleccionada',
      sim_sel_n: '{n} materias seleccionadas',
      sim_disp: '☕ Con estos filtros tenemos {n} preguntas en stock. ',
      sim_disp_poucas: '¡Relaja los filtros para liberar más!',
      sim_disp_ok: 'Elige el tamaño ahí arriba.',
      sim_btn_comecar: '▶️ Preparar el café y empezar',
      sim_dicas_t: '📝 Consejos antes de empezar',
      sim_questao: 'Pregunta {n} de {total}',
      sim_responder: 'Responder',
      sim_certo: '✅ ¡Muy bien!',
      sim_errou: '❌ ¡Ups! Marcaste la opción {letra}.',
      sim_certa_e: 'La correcta es la {letra}.',
      sim_como: '🧭 Cómo resolverlo, paso a paso:',
      sim_dica: '☕ Consejo del barista: ',
      sim_aula: '▶️ Ver una clase sobre "{tema}" en YouTube',
      sim_proxima: 'Siguiente pregunta →',
      sim_finalizar: '🏁 Terminar y ver el resultado',
      sim_resultado_t: '🏁 ¡Simulacro terminado!',
      sim_resultado_refez: '🔄 ¡Repaso terminado!',
      sim_resumo: '{total} preguntas · {tempo} de examen',
      sim_stat_acertos: '✅ Aciertos',
      sim_stat_erros: '❌ Errores',
      sim_stat_aproveitamento: '🎯 Aprovechamiento',
      sim_stat_tempo: '⏱ Tiempo de examen',
      sim_por_materia_t: '📚 Rendimiento por materia',
      sim_escorregou_t: '🔍 Donde resbalaste',
      sim_gabarito: 'respuesta: {letra}',
      sim_zero: '¡Cero errores! Ese examen salió perfecto, como un café bien hecho.',
      sim_refazer: '🔄 Rehacer las {n} que fallé',
      sim_novo: '📝 Nuevo simulacro',
      sim_ir_dash: '🏠 Verlo en el panel',
      sim_dicas_proxima_t: '📝 Consejos del barista para la próxima',
      sim_frase_alta: '¡Café fuerte y hoja limpia! ¡Estás volando! 🚀',
      sim_frase_boa: '¡Muy bien! La aprobación está en tu radar. ☕',
      sim_frase_media: '¡Vas bien! Repasa los errores y sube un escalón más. 📈',
      sim_frase_baixa: 'Todo barista quema el primer café. ¡Repasa los errores y vuelve! 💪',

      // Comités y temas
      bancas_intro: 'Conocer al comité es la mitad del camino: cada uno tiene manías, y aquí las mostramos todas. 🕵️',
      bancas_pegadinhas_t: 'Trampas favoritas:',
      conteudo_aviso: 'ℹ️ El contenido de estudio (resúmenes, trampas y preguntas) está en portugués, porque son exámenes brasileños.',
      temas_aba_concursos: '🎯 Oposiciones',
      temas_aba_vest: '🎓 Selectividad',
      temas_porque: '¿Por qué? ',

      // Pantalla de consejos
      nav_dicas: '💡 Consejos',
      tela_dicas_t: 'Consejos que valen oro',
      tela_dicas_s: 'Lo que separa a quien aprueba de quien casi aprueba.',
      dicas_intro: 'No es solo estudiar mucho: es estudiar de la manera correcta. Esto es lo que aprendimos en la práctica. 💡',
      dicas_prova_t: '📝 Consejos rápidos para el examen',

      // Convocatoria — análisis inteligente
      ed_confianca: 'Confianza del análisis:',
      ed_confianca_aviso: 'Cuanto más alto, más entendió el robot tu convocatoria (y menos tienes que revisar en el PDF).',
      ed_banca_t: '🏦 Comité organizador',
      ed_banca_ver: '🕵️ Ver las trampas de este comité',
      ed_banca_nenhuma: 'No identifiqué el comité en este texto. ¡Revisa la convocatoria — conocer al comité cambia tu estrategia!',
      ed_datas_t: '📅 Fechas importantes',
      ed_sem_datas: 'No encontré fechas en el texto. ¡Revisa el PDF de la convocatoria!',
      ed_data_inscricoes: 'Inscripciones',
      ed_data_prova: 'Fecha del examen',
      ed_data_resultado: 'Resultado final',
      ed_contagem: 'Cuenta regresiva',
      ed_faltam: '¡Faltan {dias} días para el examen!',
      ed_prova_hoje: '¡Es hoy! ¡Respira hondo y mucha suerte! 🍀',
      ed_prova_passou: 'La fecha del examen ya pasó — revisa la convocatoria.',
      ed_numeros_t: '🔢 Los números de la convocatoria',
      ed_num_vagas: 'Vacantes',
      ed_num_salario: 'Salario',
      ed_num_taxa: 'Tasa de inscripción',
      ed_num_questoes: 'Preguntas del examen',
      ed_num_validade: 'Validez del concurso',
      ed_numeros_vazio: 'No encontré los números (vacantes, salario...) en este texto.',
      ed_anos: 'años',
      ed_meses: 'meses',
      ed_escolaridade_t: '🎓 Escolaridad exigida',
      ed_programa_t: '📖 Lo que la convocatoria pide en cada materia',
      ed_programa_sub: 'Estos son los temas que la propia convocatoria enumera. Empieza por los que dominas menos:',
      ed_programa_vazio: 'No pude separar el programa por materia. ¡Pega el texto de la convocatoria en el campo de abajo y lo intento otra vez!',
      ed_plano_sem_data: 'No encontré la fecha del examen en el texto — pega la convocatoria aquí y armo tu cronograma de estudio.',
      ed_plano_dias_1: 'Faltan {dias} días: ¡recta final! Prioriza repaso, cuaderno de errores y simulacros cronometrados.',
      ed_plano_dias_2: 'Faltan {dias} días: hay tiempo para cubrir la convocatoria con holgura. Teoría + preguntas todos los días.',
      ed_plano_dias_3: 'Faltan {dias} días: todavía hay mucho tiempo. Construye la base con calma, sin saltar etapas.',
      ed_plano_passou: 'El examen ya pasó (o es hoy). ¡Mucha suerte — y a pensar en el próximo!',

      // Panel — recomendación inteligente
      dash_fraco_t: '🎯 Dónde enfocarte ahora',
      dash_fraco_txt: 'Tu punto más débil es {materia}, con {pct}% de acierto. ¿Entrenamos?',
      dash_fraco_btn: 'Entrenar {materia} (10 preguntas)',
      dash_fraco_bom: '¡Vas bien en todas las materias practicadas! ¿Qué tal aumentar la cantidad de preguntas en el próximo simulacro?',
      dash_fraco_pouco: 'Responde algunas preguntas de cada materia y descubriré aquí dónde necesitas enfocarte. 🕵️',
      toast_treino: '¡Vamos a entrenar {materia}! 📝'
    }
  },

  // Troca os textos e monta "chave" → "texto" com placeholders {x}
  texto(chave, dados) {
    const idioma = this.DICIONARIO[this.atual] || this.DICIONARIO.pt; // dicionário do idioma atual
    let bruto = idioma[chave];                              // procura a chave no idioma atual
    if (bruto === undefined) bruto = this.DICIONARIO.pt[chave]; // se faltar, usa o português (reserva)
    if (bruto === undefined) return chave;                  // se não existir nem em PT, devolve a chave
    if (!dados) return bruto;                               // sem dados para substituir, devolve direto
    let saida = bruto;                                      // cópia para substituir os placeholders
    for (const nome in dados) {                             // percorre os valores informados
      saida = saida.split('{' + nome + '}').join(dados[nome]); // troca {nome} pelo valor
    }
    return saida;                                           // devolve o texto final
  },

  // Aplica as traduções nos textos estáticos marcados com data-i18n
  aplicar() {
    // Textos de elementos (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => { // percorre quem tem data-i18n
      el.textContent = this.texto(el.dataset.i18n);          // traduz o texto
    });
    // Placeholders de campos
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { // percorre quem tem data-i18n-ph
      el.placeholder = this.texto(el.dataset.i18nPh);        // traduz o placeholder
    });
    // Rótulos de acessibilidade (title)
    document.querySelectorAll('[data-i18n-title]').forEach(el => { // percorre quem tem data-i18n-title
      el.title = this.texto(el.dataset.i18nTitle);           // traduz o title
    });
    document.documentElement.lang = this.atual === 'pt' ? 'pt-BR' : this.atual; // ajusta o idioma da página
    // Marca a bandeira do idioma escolhido como ativa
    document.querySelectorAll('.bandeira').forEach(botao => { // percorre os botões de bandeira
      botao.classList.toggle('ativa', botao.dataset.idioma === this.atual); // ativa só a do idioma atual
    });
    // Assinatura da frase do login (— o barista / — the barista)
    document.querySelectorAll('.login-assinatura').forEach(el => { // percorre as assinaturas
      el.textContent = this.texto('frase_assinatura');       // traduz a assinatura
    });
  },

  // Troca o idioma do app, salva a escolha e atualiza a tela
  definir(codigo) {
    if (!this.DICIONARIO[codigo]) return;                    // ignora idioma desconhecido
    this.atual = codigo;                                     // guarda o idioma escolhido
    Armazenamento.salvar(this.CHAVE, codigo);                // salva no navegador
    this.aplicar();                                          // traduz os textos estáticos
    if (typeof App !== 'undefined' && App.redesenharTelaAtual) { // se o app já existe
      App.redesenharTelaAtual();                             // redesenha a tela atual traduzida
    }
  },

  // Inicia o idioma salvo (ou português, o padrão)
  iniciar() {
    const salvo = Armazenamento.ler(this.CHAVE, 'pt');       // lê a preferência salva
    this.atual = this.DICIONARIO[salvo] ? salvo : 'pt';      // usa a salva ou cai no português
    this.aplicar();                                          // aplica as traduções
  }
};

// Como os scripts ficam no fim do <body>, o HTML já existe aqui:
// então o idioma é aplicado na hora (antes de qualquer outra tela montar).
Idioma.iniciar();                                            // aplica o idioma salvo já no carregamento
