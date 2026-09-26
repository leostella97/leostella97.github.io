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
        App.torrada('Cola um pedaço maior do edital aí — precisa de conteúdo para analisar!', 'erro'); // avisa
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
      App.torrada(cargo ? 'Foco guardado! Bora mirar em ' + cargo + ' 🎯' : 'Foco limpo. Escolhe um cargo quando quiser.', 'sucesso'); // confirma
    });

    // Pré-preenche o campo de foco com o que já estava salvo
    document.getElementById('edital-cargo').value = Auth.focoAtual(); // carrega o foco salvo
  },

  // Recebe o arquivo PDF e cuida de todo o fluxo de leitura
  async processarArquivo(arquivo) {
    const estado = document.getElementById('edital-estado'); // caixa de status
    estado.classList.remove('oculto');                     // mostra a caixa
    estado.innerHTML = '<div class="girando"></div><p class="mensagem">Passando o café... lendo seu edital ☕</p>'; // estado "lendo"

    try {
      const texto = await this.textoDoPdf(arquivo);         // extrai o texto do PDF
      const analise = AnaliseEdital.analisar(texto);        // analisa o texto extraído
      this.ultimaAnalise = analise;                         // guarda a análise
      this.renderizarResultado(analise);                    // desenha o resultado na tela
      App.torrada('Edital na mesa! Olha o que encontrei 📄', 'sucesso'); // avisa que deu certo
    } catch (erro) {
      console.warn('Falha ao ler o PDF', erro);             // registra o erro no console
      // Aviso honesto com o plano B
      estado.innerHTML = '<p class="mensagem">😅 Não consegui ler esse PDF (pode estar protegido ou com layout complicado).</p><p class="texto-suave">Plano B: abre o edital, copia o texto e cola no campo abaixo. A análise funciona do mesmo jeito!</p>'; // orienta
      App.torrada('Não consegui ler o PDF. Tenta colar o texto abaixo!', 'erro'); // torrada de erro
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
      document.getElementById('edital-resultado').innerHTML = '<div class="nota">Hmm, o texto estava curto demais para analisar. Tenta colar mais conteúdo (o edital inteiro, de preferência).</div>'; // avisa
      return;                                               // para
    }

    const caixa = document.getElementById('edital-resultado'); // onde o resultado aparece
    let html = '';                                          // acumulador de HTML

    // ---- Cartão 1: o edital em resumo (título + trechos citados) ----
    html += '<div class="cartao destaque bloco-edital aparecer">'; // abre o cartão
    html += '<h3>📋 ' + this.escape(analise.titulo || 'Seu edital em resumo') + '</h3>'; // título do concurso
    if (analise.trechos.length === 0) {                     // se não achamos trechos
      html += '<p class="texto-suave">Não consegui separar seções claras, mas olha o que encontrei abaixo. 👇</p>'; // explica
    }
    for (const trecho of analise.trechos) {                 // percorre os trechos achados
      html += '<p style="font-weight:800;margin:0.7rem 0 0.2rem">' + this.escape(trecho.nome) + '</p>'; // nome da seção
      html += '<div class="trecho-citado">' + this.escape(trecho.texto) + '</div>'; // citação do edital
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 2: cargos encontrados ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>💼 Cargos que encontrei</h3>';             // título da seção
    if (analise.cargos.length > 0) {                        // se achamos cargos
      html += '<div class="lista-chips">';                  // abre a fileira de chips
      for (const cargo of analise.cargos) {                 // percorre os cargos
        html += '<span class="chip materia">' + this.escape(cargo) + '</span>'; // chip de cada cargo
      }
      html += '</div>';                                     // fecha a fileira
    } else {                                                // se não achamos
      html += '<p class="texto-suave">Não consegui identificar cargos automaticamente (alguns editais usam tabelas complexas). Dá uma conferida no PDF e me diz o cargo no campo "Meu foco" lá embaixo. 👇</p>'; // pede ajuda
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 3: matérias identificadas ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>📚 Matérias que identifiquei</h3>';        // título da seção
    if (analise.materias.length > 0) {                      // se achamos matérias
      html += '<div class="lista-chips">';                  // abre a fileira de chips
      for (const materia of analise.materias) {             // percorre as matérias
        const rotulo = materia.rotulo + (materia.temBanco ? ' ✓' : ' 🕮'); // marca as que têm questões
        html += '<span class="chip ' + (materia.temBanco ? 'verde' : '') + '">' + this.escape(rotulo) + '</span>'; // chip de cada matéria
      }
      html += '</div>';                                     // fecha a fileira
      html += '<p class="texto-suave" style="font-size:0.8rem;margin-top:0.6rem">✓ = temos questões prontas no simulado · 🕮 = ainda não temos questões dessa matéria (estude pelo edital)</p>'; // legenda
    } else {                                                // se não achamos
      html += '<p class="texto-suave">Não identifiquei matérias nesse texto. Pode ser um edital com formatação diferente — confere o PDF e, se quiser, usa o campo de colar texto com o conteúdo programático.</p>'; // orienta
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Cartão 4: plano de estudo sugerido ----
    html += '<div class="cartao bloco-edital aparecer">';   // abre o cartão
    html += '<h3>🗺️ Por onde começar (plano de estudo)</h3>'; // título da seção
    if (analise.materias.length > 0) {                      // se temos matérias para planejar
      for (const materia of analise.materias) {             // percorre as matérias
        html += this.planoDeMateria(materia.rotulo);        // monta o item de plano de cada uma
      }
    } else {                                                // sem matérias, sem plano
      html += '<p class="texto-suave">Sem matérias detectadas, não consigo montar o plano ainda. Cola o conteúdo programático no campo abaixo! 📋</p>'; // orienta
    }
    html += '</div>';                                       // fecha o cartão

    // ---- Botão: gerar simulado com as matérias do edital ----
    if (analise.materias.some(m => m.temBanco)) {           // só mostra se há questões disponíveis
      html += '<button id="btn-simulado-edital" class="botao botao-primario grande">📝 Gerar simulado com as matérias do edital</button>'; // botão de ação
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
  },

  // Monta o bloco de plano de estudo de uma matéria
  planoDeMateria(rotuloMateria) {
    // Procura a matéria nos temas de concursos e de vestibular
    const fonte = DadosTemas.concursos.concat(DadosTemas.vestibular) // junta as duas listas
      .find(t => t.materia === rotuloMateria);              // acha pelo nome
    if (!fonte) {                                           // matéria sem resumo pronto no app
      return '<div class="plano-item"><span class="materia-nome">' + this.escape(rotuloMateria) + '</span><br><span class="texto-suave">Ainda não temos resumo pronto dessa matéria — estude direto pelo conteúdo programático do edital. Anota os tópicos e manda ver!</span></div>'; // item honesto
    }
    let html = '<div class="plano-item">';                  // abre o item
    html += '<span class="materia-nome">' + fonte.icone + ' ' + this.escape(rotuloMateria) + '</span>'; // nome com emoji
    html += '<p style="font-size:0.88rem;margin:0.3rem 0">' + this.escape(fonte.resumo) + '</p>'; // resumo da matéria
    html += '<p style="font-size:0.85rem"><strong>Começa por:</strong> '; // abre a lista de tópicos
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
