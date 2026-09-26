/* ============================================================
   GABARITO CAFÉ — js/edital.js
   Tela "Meu edital": recebe o PDF, lê o texto com PDF.js,
   chama a análise e desenha o resultado (cargos, matérias,
   trechos e plano de estudo) com botão para gerar simulado.
   ============================================================ */

// Objeto global da tela do edital
const EditalUI = {

  ultimaAnalise: null,               // guarda a última análise (para gerar simulado depois)

  // Liga os eventos da tela (chamado uma vez no início do app)
  iniciar() {
    if (this._ligado) return;                               // já ligado? Não duplica eventos
    this._ligado = true;                                    // marca como ligado para sempre

    const zona = document.getElementById('zona-pdf');       // pega a zona de soltar arquivo
    const input = document.getElementById('input-pdf');     // pega o campo de arquivo invisível

    // Clique (ou Enter) na zona abre o seletor de arquivos
    zona.addEventListener('click', () => input.click());    // clica no input escondido
    zona.addEventListener('keydown', (e) => {               // acessível por teclado
      if (e.key === 'Enter' || e.key === ' ') {             // se apertou Enter ou espaço
        e.preventDefault();                                 // evita rolagem no espaço
        input.click();                                      // abre o seletor
      }
    });

    // Quando um arquivo é escolhido, processa
    input.addEventListener('change', () => {                // arquivo selecionado
      if (input.files[0]) this.processarArquivo(input.files[0]); // manda processar o primeiro
      input.value = '';                                     // limpa para permitir reenviar o mesmo
    });

    // Arrastar e soltar: destaca a zona enquanto o arquivo está "no ar"
    zona.addEventListener('dragover', (e) => {              // arquivo sobre a zona
      e.preventDefault();                                   // permite o "soltar"
      zona.classList.add('arrastando');                     // acende o destaque
    });
    zona.addEventListener('dragleave', () => {              // arquivo saiu da zona
      zona.classList.remove('arrastando');                  // apaga o destaque
    });
    zona.addEventListener('drop', (e) => {                  // arquivo solto
      e.preventDefault();                                   // evita abrir o arquivo na aba
      zona.classList.remove('arrastando');                  // apaga o destaque
      const arquivo = e.dataTransfer.files[0];              // pega o arquivo solto
      if (arquivo) this.processarArquivo(arquivo);          // manda processar
    });

    // Botão de analisar texto colado (plano B sem PDF)
    document.getElementById('btn-analisar-cola').addEventListener('click', () => { // clique no botão
      const texto = document.getElementById('edital-cola').value.trim(); // pega o texto colado
      if (texto.length < 40) {                              // texto curto demais
        App.torrada(T('toast_cola_curto'), 'erro'); // avisa
        return;                                             // para por aqui
      }
      const analise = AnaliseEdital.analisar(texto);        // analisa o texto colado
      this.ultimaAnalise = analise;                         // guarda a análise
      this.renderizarResultado(analise);                    // desenha o resultado
    });

    // Botão de guardar o cargo focado
    document.getElementById('btn-salvar-cargo').addEventListener('click', () => { // clique no botão
      const cargo = document.getElementById('edital-cargo').value.trim(); // pega o cargo digitado
      Auth.salvarFoco(cargo);                               // salva no perfil
      App.atualizarPerfil();                                // atualiza lateral e saudação
      // Confirma o que aconteceu (com foco salvo ou limpo), traduzido
      App.torrada(cargo ? T('toast_foco_guardado', { cargo: cargo }) : T('toast_foco_limpo'), 'sucesso');
    });

    // Pré-preenche o campo de foco com o que já estava salvo
    document.getElementById('edital-cargo').value = Auth.focoAtual(); // carrega o foco salvo
  },

  // Recebe o arquivo PDF e cuida de todo o fluxo de leitura
  async processarArquivo(arquivo) {
    const estado = document.getElementById('edital-estado'); // caixa de status
    estado.classList.remove('oculto');                     // mostra a caixa
    estado.innerHTML = '<div class="girando"></div><p class="mensagem">' + T('ed_lendo') + '</p>'; // estado "lendo"

    try {
      const texto = await this.textoDoPdf(arquivo);         // extrai o texto do PDF
      const analise = AnaliseEdital.analisar(texto);        // analisa o texto extraído
      this.ultimaAnalise = analise;                         // guarda a análise
      this.renderizarResultado(analise);                    // desenha o resultado na tela
      App.torrada(T('toast_edital_ok'), 'sucesso'); // avisa que deu certo
    } catch (erro) {
      console.warn('Falha ao ler o PDF', erro);             // registra o erro no console
      // Aviso honesto com o plano B (traduzido)
      estado.innerHTML = '<p class="mensagem">' + T('ed_erro_t') + '</p><p class="texto-suave">' + T('ed_erro_sub') + '</p>'; // orienta
      App.torrada(T('toast_edital_erro'), 'erro'); // torrada de erro
    }
  },

  // Extrai o texto de um PDF usando a biblioteca PDF.js
  async textoDoPdf(arquivo) {
    if (!window.pdfjsLib) {                                 // se a biblioteca não carregou (sem internet)
      throw new Error('pdfjs-indisponivel');                // avisa o problema
    }
    const buffer = await arquivo.arrayBuffer();             // lê o arquivo em bytes
    const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise; // abre o documento
    let texto = '';                                         // acumulador de texto
    for (let pagina = 1; pagina <= pdf.numPages; pagina++) { // percorre todas as páginas
      const pag = await pdf.getPage(pagina);                // carrega a página
      const conteudo = await pag.getTextContent();          // pega o texto da página
      for (const item of conteudo.items) {                  // percorre os pedaços de texto
        texto += item.str + (item.hasEOL ? '\n' : ' ');     // junta respeitando quebras de linha
      }
      texto += '\n';                                        // separa as páginas
    }
    return texto;                                           // devolve o texto completo
  },

  // Desenha o resultado da análise na tela
  renderizarResultado(analise) {
    const estado = document.getElementById('edital-estado'); // caixa de status
    estado.classList.add('oculto');                        // esconde o "lendo"

    if (!analise.valido) {                                  // análise vazia (texto curto)
      document.getElementById('edital-resultado').innerHTML = '<div class="nota">' + T('ed_curto_aviso') + '</div>'; // avisa
      return;                                               // para
    }

    const caixa = document.getElementById('edital-resultado'); // onde o resultado aparece
    let html = '';                                          // acumulador de HTML

    // ---- Cartão 1: o edital em resumo (título, confiança e trechos citados) ----
    html += '<div class="cartao destaque bloco-edital aparecer">'; // abre o cartão
    html += '<h3>📋 ' + this.escape(analise.titulo || T('ed_resumo')) + '</h3>'; // título do concurso
    // Barra de confiança da análise (o quanto o robô conseguiu entender)
    const corConfianca = analise.confianca >= 70 ? 'var(--verde)' : (analise.confianca >= 40 ? 'var(--caramelo)' : 'var(--vermelho)'); // cor pela nota
    html += '<div style="display:flex;align-items:center;gap:0.6rem;margin:0.6rem 0">'; // linha da confiança
    html += '<span style="font-weight:900;font-size:0.85rem;white-space:nowrap">' + T('ed_confianca') + ' ' + analise.confianca + '%</span>'; // rótulo
    html += '<div class="barra-progresso" style="flex:1"><span style="width:' + analise.confianca + '%;background:' + corConfianca + '"></span></div>'; // barra
    html += '</div>';                                       // fecha a linha
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0">' + T('ed_confianca_aviso') + '</p>'; // aviso curto
    if (analise.trechos.length === 0) {                     // se não achamos trechos
      html += '<p class="texto-suave">' + T('ed_sem_trechos') + '</p>'; // explica
    }
    for (const trecho of analise.trechos) {                 // percorre os trechos achados
      html += '<p style="font-weight:800;margin:0.7rem 0 0.2rem">' + this.escape(trecho.nome) + '</p>'; // nome da seção
      html += '<div class="trecho-citado">' + this.escape(trecho.texto) + '</div>'; // citação do edital
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 2: banca organizadora + datas (o "prazo de validade" do estudo) ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_banca_t') + '</h3>';             // título da seção
    if (analise.banca) {                                    // se identificamos a banca
      html += '<p style="font-weight:900;font-size:1.1rem;color:var(--cafe);margin:0.3rem 0">' + this.escape(analise.banca.rotulo) + '</p>'; // nome da banca
      html += '<p class="texto-suave" style="font-size:0.8rem">…' + this.escape(analise.banca.trecho) + '…</p>'; // trecho de onde tiramos
      html += '<button class="botao botao-contorno pequeno" id="btn-ver-banca">' + T('ed_banca_ver') + '</button>'; // botão para as pegadinhas
    } else {                                                // se não identificamos
      html += '<p class="texto-suave">' + T('ed_banca_nenhuma') + '</p>'; // avisa
    }
    // Datas importantes + contagem regressiva
    html += '<div class="titulo-secao" style="margin:1.2rem 0 0.6rem"><h3>' + T('ed_datas_t') + '</h3></div>'; // subtítulo
    html += this.blocoDatas(analise);                       // desenha as datas e o contador
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 3: os números do edital ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_numeros_t') + '</h3>';           // título da seção
    html += this.blocoNumeros(analise);                     // desenha vagas, salário, taxa, questões e validade
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 4: cargos encontrados ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_cargos_t') + '</h3>';            // título da seção
    if (analise.cargos.length > 0) {                        // se achamos cargos
      html += '<div class="lista-chips">';                  // abre a fileira de chips
      for (const cargo of analise.cargos) {                 // percorre os cargos
        html += '<span class="chip materia">' + this.escape(cargo) + '</span>'; // chip de cada cargo
      }
      html += '</div>';                                     // fecha a fileira
      // Escolaridade exigida (quando o edital fala dela)
      if (analise.escolaridade.length > 0) {                // se achamos escolaridade
        html += '<p style="font-weight:900;font-size:0.85rem;margin:0.9rem 0 0.3rem">' + T('ed_escolaridade_t') + '</p>'; // rótulo
        html += '<div class="lista-chips">';                // fileira de chips
        for (const nivel of analise.escolaridade) {         // percorre os níveis
          html += '<span class="chip caramelo">🎓 ' + this.escape(nivel) + '</span>'; // chip do nível
        }
        html += '</div>';                                   // fecha a fileira
      }
    } else {                                                // se não achamos
      html += '<p class="texto-suave">' + T('ed_cargos_vazio') + '</p>'; // pede ajuda
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 5: matérias identificadas ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_materias_t') + '</h3>';          // título da seção
    if (analise.materias.length > 0) {                      // se achamos matérias
      html += '<div class="lista-chips">';                  // abre a fileira de chips
      for (const materia of analise.materias) {             // percorre as matérias
        const rotulo = materia.rotulo + (materia.temBanco ? ' ✓' : ' 🕮'); // marca as que têm questões
        html += '<span class="chip ' + (materia.temBanco ? 'verde' : '') + '">' + this.escape(rotulo) + '</span>'; // chip de cada matéria
      }
      html += '</div>';                                     // fecha a fileira
      html += '<p class="texto-suave" style="font-size:0.8rem;margin-top:0.6rem">' + T('ed_legenda') + '</p>'; // legenda
    } else {                                                // se não achamos
      html += '<p class="texto-suave">' + T('ed_materias_vazio') + '</p>'; // orienta
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 6: o conteúdo programático, matéria por matéria ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_programa_t') + '</h3>';          // título da seção
    html += this.blocoPrograma(analise);                    // desenha os tópicos que o edital pede
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 7: plano de estudo sugerido (com cronograma inteligente) ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>' + T('ed_plano_t') + '</h3>';             // título da seção
    html += this.blocoCronograma(analise);                  // dica de ritmo conforme os dias que faltam
    if (analise.materias.length > 0) {                      // se temos matérias para planejar
      for (const materia of analise.materias) {             // percorre as matérias
        html += this.planoDeMateria(materia.rotulo);        // monta o item de plano de cada uma
      }
    } else {                                                // sem matérias, sem plano
      html += '<p class="texto-suave">' + T('ed_plano_vazio') + '</p>'; // orienta
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Botão: gerar simulado com as matérias do edital ----
    if (analise.materias.some(m => m.temBanco)) {           // só mostra se há questões disponíveis
      html += '<button id="btn-simulado-edital" class="botao botao-primario grande">' + T('ed_btn_simulado') + '</button>'; // botão de ação
    }

    caixa.innerHTML = html;                                 // despeja o HTML na tela

    // Liga o botão de gerar simulado (se ele existe)
    const btn = document.getElementById('btn-simulado-edital'); // pega o botão criado
    if (btn) {                                              // se o botão existe
      btn.addEventListener('click', () => {                 // no clique
        const materias = this.ultimaAnalise.materias        // matérias detectadas
          .filter(m => m.temBanco)                          // só as que têm questões
          .map(m => m.rotulo);                              // pega os nomes
        SimuladoUI.abrir({ materias: materias, origem: 'edital' }); // abre o simulado filtrado
        App.irPara('simulado');                             // navega para a tela do simulado
      });
    }

    // Liga o botão "ver as pegadinhas dessa banca"
    const btnBanca = document.getElementById('btn-ver-banca'); // pega o botão criado
    if (btnBanca) {                                         // se o botão existe
      btnBanca.addEventListener('click', () => App.irPara('bancas')); // leva para a tela de bancas
    }
  },

  // Desenha as datas importantes com contagem regressiva para a prova
  blocoDatas(analise) {
    const d = analise.datas;                                // atalho para as datas
    const linhas = [];                                      // lista de linhas a mostrar
    // Formata uma data no padrão brasileiro (ou vazio)
    const fmt = (data) => data ? data.toLocaleDateString('pt-BR') : null; // formata dd/mm/aaaa
    if (fmt(d.inscricoesInicio) || fmt(d.inscricoesFim)) {  // se temos datas de inscrição
      const periodo = fmt(d.inscricoesInicio) + (fmt(d.inscricoesFim) ? ' a ' + fmt(d.inscricoesFim) : ''); // período
      linhas.push({ rotulo: T('ed_data_inscricoes'), valor: periodo, destaque: false }); // adiciona a linha
    }
    if (fmt(d.prova)) linhas.push({ rotulo: T('ed_data_prova'), valor: fmt(d.prova), destaque: true }); // data da prova
    if (fmt(d.resultado)) linhas.push({ rotulo: T('ed_data_resultado'), valor: fmt(d.resultado), destaque: false }); // resultado

    if (linhas.length === 0) return '<p class="texto-suave">' + T('ed_sem_datas') + '</p>'; // nada achado

    // Monta o contador regressivo quando há data de prova
    let html = '';                                          // acumulador
    if (d.prova) {                                          // se sabemos a data da prova
      const dias = this.diasAte(d.prova);                   // quantos dias faltam
      let aviso;                                            // texto do aviso
      let estilo = 'nota';                                  // estilo do aviso
      if (dias > 0) { aviso = T('ed_faltam', { dias: dias }); }          // faltam N dias
      else if (dias === 0) { aviso = T('ed_prova_hoje'); estilo = 'cartao'; } // é hoje!
      else { aviso = T('ed_prova_passou'); estilo = 'nota'; }            // já passou
      html += '<div class="' + estilo + '" style="margin-bottom:0.8rem"><strong>' + T('ed_contagem') + ':</strong> ' + aviso + '</div>'; // mostra o contador
    }

    // Tabelinha de datas
    html += '<div class="lista-datas">';                    // abre a lista
    for (const linha of linhas) {                           // percorre as linhas
      html += '<div class="linha-dado' + (linha.destaque ? ' destaque' : '') + '">'; // abre a linha
      html += '<span class="dado-rotulo">' + this.escape(linha.rotulo) + '</span>'; // rótulo
      html += '<span class="dado-valor">' + this.escape(linha.valor) + '</span>';   // valor
      html += '</div>';                                     // fecha a linha
    }
    html += '</div>';                                       // fecha a lista
    return html;                                            // devolve o bloco
  },

  // Desenha os números do edital (vagas, salário, taxa, questões, validade)
  blocoNumeros(analise) {
    const n = analise.numeros;                              // atalho para os números
    const linhas = [];                                      // linhas a mostrar
    if (n.vagas) linhas.push({ rotulo: T('ed_num_vagas'), valor: String(n.vagas) }); // vagas
    if (n.salarioMin) {                                     // se temos salário
      const faixa = n.salarioMax && n.salarioMax !== n.salarioMin // faixa ou valor único?
        ? this.moeda(n.salarioMin) + ' a ' + this.moeda(n.salarioMax) // faixa
        : this.moeda(n.salarioMin);                         // valor único
      linhas.push({ rotulo: T('ed_num_salario'), valor: faixa }); // salário
    }
    if (n.taxa) linhas.push({ rotulo: T('ed_num_taxa'), valor: this.moeda(n.taxa) }); // taxa
    if (n.questoes) linhas.push({ rotulo: T('ed_num_questoes'), valor: String(n.questoes) }); // questões
    if (n.validade) {                                       // validade
      const unidade = n.validade.unidade === 'anos' ? T('ed_anos') : T('ed_meses'); // traduz a unidade
      linhas.push({ rotulo: T('ed_num_validade'), valor: n.validade.quantidade + ' ' + unidade }); // valor
    }
    if (linhas.length === 0) return '<p class="texto-suave">' + T('ed_numeros_vazio') + '</p>'; // nada achado

    let html = '<div class="lista-datas">';                 // abre a lista
    for (const linha of linhas) {                           // percorre as linhas
      html += '<div class="linha-dado">';                   // abre a linha
      html += '<span class="dado-rotulo">' + this.escape(linha.rotulo) + '</span>'; // rótulo
      html += '<span class="dado-valor">' + this.escape(linha.valor) + '</span>';   // valor
      html += '</div>';                                     // fecha a linha
    }
    html += '</div>';                                       // fecha a lista
    return html;                                            // devolve o bloco
  },

  // Desenha o conteúdo programático que o edital pede, matéria por matéria
  blocoPrograma(analise) {
    const comTopicos = analise.materias.filter(m => m.topicos && m.topicos.length > 0); // matérias com tópicos
    if (comTopicos.length === 0) return '<p class="texto-suave">' + T('ed_programa_vazio') + '</p>'; // nada achado
    let html = '<p class="texto-suave" style="font-size:0.85rem">' + T('ed_programa_sub') + '</p>'; // explicação
    for (const materia of comTopicos) {                     // percorre as matérias com tópicos
      html += '<div class="plano-item">';                   // abre o bloco da matéria
      html += '<span class="materia-nome">' + this.escape(materia.rotulo) + (materia.temBanco ? ' ✓' : '') + '</span>'; // nome da matéria
      html += '<div class="lista-topicos">';                // abre a lista de tópicos
      for (const topico of materia.topicos) {               // percorre os tópicos do edital
        html += '<span class="chip">' + this.escape(topico) + '</span>'; // chip de cada tópico
      }
      html += '</div>';                                     // fecha a lista
      html += '</div>';                                     // fecha o bloco
    }
    return html;                                            // devolve o bloco
  },

  // Dá uma orientação de ritmo de estudo conforme os dias que faltam para a prova
  blocoCronograma(analise) {
    if (!analise.datas.prova) {                             // sem data de prova
      return '<p class="texto-suave" style="font-size:0.88rem">' + T('ed_plano_sem_data') + '</p>'; // orienta a achar a data
    }
    const dias = this.diasAte(analise.datas.prova);          // dias restantes
    let dica;                                               // texto da dica
    if (dias <= 0) dica = T('ed_plano_passou');              // prova passou (ou é hoje)
    else if (dias <= 30) dica = T('ed_plano_dias_1', { dias: dias });   // reta final
    else if (dias <= 90) dica = T('ed_plano_dias_2', { dias: dias });   // meio de caminho
    else dica = T('ed_plano_dias_3', { dias: dias });                   // bastante tempo
    return '<div class="postit" style="margin-bottom:0.9rem">' + dica + '</div>'; // mostra em post-it
  },

  // Quantos dias faltam para uma data (0 = hoje, negativo = já passou)
  diasAte(data) {
    const hoje = new Date();                                // agora
    const alvo = new Date(data.getFullYear(), data.getMonth(), data.getDate()); // zera a hora do alvo
    const base = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()); // zera a hora de hoje
    return Math.round((alvo - base) / 86400000);            // diferença em dias
  },

  // Formata um número como dinheiro brasileiro (R$ 2.500,00)
  moeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // formata 2 casas
  },

  // Monta o bloco de plano de estudo de uma matéria
  planoDeMateria(rotuloMateria) {
    // Procura a matéria nos temas de concursos e de vestibular
    const fonte = DadosTemas.concursos.concat(DadosTemas.vestibular) // junta as duas listas
      .find(t => t.materia === rotuloMateria);              // acha pelo nome
    if (!fonte) {                                           // matéria sem resumo pronto no app
      return '<div class="plano-item"><span class="materia-nome">' + this.escape(rotuloMateria) + '</span><br><span class="texto-suave">' + T('ed_plano_sem_resumo') + '</span></div>'; // item honesto
    }
    let html = '<div class="plano-item">';                  // abre o item
    html += '<span class="materia-nome">' + fonte.icone + ' ' + this.escape(rotuloMateria) + '</span>'; // nome com emoji
    html += '<p style="font-size:0.88rem;margin:0.3rem 0">' + this.escape(fonte.resumo) + '</p>'; // resumo da matéria
    html += '<p style="font-size:0.85rem"><strong>' + T('ed_plano_comeca') + '</strong> '; // abre a lista de tópicos
    const top = fonte.topicos.slice(0, 3);                  // pega os 3 tópicos que mais caem
    html += top.map(t => this.escape(t.nome)).join(' · ');  // junta com pontinhos
    html += '.</p>';                                        // fecha a lista
    html += '</div>';                                       // fecha o item
    return html;                                            // devolve o bloco
  },

  // Foge do HTML (segurança ao exibir texto do PDF na tela)
  escape(texto) {
    return String(texto)                                    // garante texto
      .replace(/&/g, '&amp;')                               // escapa "&"
      .replace(/</g, '&lt;')                                // escapa "<"
      .replace(/>/g, '&gt;')                                // escapa ">"
      .replace(/"/g, '&quot;')                              // escapa aspas
      .replace(/'/g, '&#39;');                              // escapa apóstrofo
  }
};
