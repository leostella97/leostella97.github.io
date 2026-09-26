/* ============================================================
   GABARITO CAFÉ — js/dashboard.js
   Tela inicial do app: saudação, frase do dia, atalhos,
   estatísticas de progresso, gráfico de evolução e
   desempenho por matéria. Tudo calculado na hora.
   ============================================================ */

// Objeto global do dashboard
const DashboardUI = {

  // Devolve o histórico de resultados do usuário atual
  historico() {
    const usuario = Auth.usuarioAtual();                    // pega quem está logado
    if (!usuario) return [];                                // sem usuário, sem histórico
    return Armazenamento.ler('gc_resultados_' + usuario.id, []); // lê o histórico da conta
  },

  // Desenha o dashboard inteiro
  renderizar() {
    const usuario = Auth.usuarioAtual();                    // pega o usuário logado
    const historico = this.historico();                     // histórico de resultados
    const caixa = document.getElementById('tela-dashboard'); // pega a seção da tela
    let html = '';                                          // acumulador de HTML

    // ---- Cartão de boas-vindas com a frase do acesso ----
    // Usa a frase (tema estudo) sorteada para ESTA visita pelo frases.js.
    // Se por algum motivo ela não existir, cai na primeira do acervo para não ficar vazio.
    const frase = FrasesEstudo.fraseDoAcesso || FrasesEstudo.acervo()[0]; // frase do acesso
    html += '<div class="cartao destaque dash-cabecalho">'; // abre o cartão
    html += '<img src="assets/logo.svg" alt="Xícara do Gabarito Café">'; // logo
    html += '<div>';                                        // coluna de texto
    // Saudação com o nome do usuário (ou genérica), traduzida
    html += '<h3>' + (usuario ? T('dash_ola', { nome: this.escape(usuario.nome) }) : T('dash_ola_sem_nome')) + '</h3>';
    html += '<p class="dash-frase">“' + frase + '”</p>';    // frase do acesso em letra de mão
    html += '</div></div>';                                 // fecha coluna e cartão

    // ---- Atalhos rápidos ----
    html += '<div class="dash-acoes">';                     // abre a grade de atalhos
    html += '<button class="dash-atalho" data-ir="edital"><span class="atalho-icone">📄</span><span class="atalho-titulo">' + T('dash_atalho_edital_t') + '</span><span class="atalho-sub">' + T('dash_atalho_edital_s') + '</span></button>'; // atalho edital
    html += '<button class="dash-atalho" data-ir="simulado"><span class="atalho-icone">📝</span><span class="atalho-titulo">' + T('dash_atalho_sim_t') + '</span><span class="atalho-sub">' + T('dash_atalho_sim_s') + '</span></button>'; // atalho simulado
    html += '<button class="dash-atalho" data-ir="bancas"><span class="atalho-icone">🕵️</span><span class="atalho-titulo">' + T('dash_atalho_bancas_t') + '</span><span class="atalho-sub">' + T('dash_atalho_bancas_s') + '</span></button>'; // atalho bancas
    html += '<button class="dash-atalho" data-ir="temas"><span class="atalho-icone">📚</span><span class="atalho-titulo">' + T('dash_atalho_temas_t') + '</span><span class="atalho-sub">' + T('dash_atalho_temas_s') + '</span></button>'; // atalho temas
    html += '</div>';                                       // fecha a grade

    // ---- Se nunca fez simulado: estado vazio acolhedor ----
    if (historico.length === 0) {                           // sem resultados ainda
      html += '<div class="cartao vazio">';                 // abre o cartão vazio
      html += '<div class="vazio-icone">🫗</div>';          // xícara vazia
      html += '<h3>' + T('dash_vazio_t') + '</h3>';         // título traduzido
      html += '<p class="texto-suave">' + T('dash_vazio_x') + '</p>'; // convite traduzido
      html += '<button class="botao botao-primario" data-ir="simulado">' + T('dash_vazio_btn') + '</button>'; // CTA traduzido
      html += '</div>';                                     // fecha o cartão
      caixa.innerHTML = html;                               // despeja e termina (sem estatísticas)
      this.ligarAtalhos(caixa);                             // liga os botões data-ir
      return;                                               // para por aqui
    }

    // ---- Estatísticas gerais ----
    const totalQuestoes = historico.reduce((soma, r) => soma + r.total, 0); // soma de todas as questões
    const totalAcertos = historico.reduce((soma, r) => soma + r.acertos, 0); // soma de acertos
    const media = Math.round((totalAcertos / totalQuestoes) * 100); // aproveitamento geral
    const melhor = Math.max(...historico.map(r => r.percentual)); // melhor percentual
    const ultimo = historico[historico.length - 1];         // último resultado
    const sequencia = this.calcularSequencia(historico);    // dias seguidos

    html += '<div class="grade-estatisticas">';             // abre a grade de números
    html += '<div class="estatistica"><div class="valor">' + historico.length + '</div><div class="rotulo">' + T('dash_stat_simulados') + '</div></div>'; // total de simulados
    html += '<div class="estatistica"><div class="valor">' + media + '%</div><div class="rotulo">' + T('dash_stat_aproveitamento') + '</div></div>'; // média geral
    html += '<div class="estatistica"><div class="valor">' + melhor + '%</div><div class="rotulo">' + T('dash_stat_melhor') + '</div></div>'; // melhor resultado
    html += '<div class="estatistica"><div class="valor">' + totalQuestoes + '</div><div class="rotulo">' + T('dash_stat_questoes') + '</div></div>'; // questões respondidas
    html += '<div class="estatistica"><div class="valor">🔥 ' + sequencia + '</div><div class="rotulo">' + T('dash_stat_sequencia') + '</div></div>'; // sequência
    html += '</div>';                                       // fecha a grade

    // ---- Gráfico de evolução (últimas 10 provas) ----
    html += '<div class="titulo-secao"><h3>' + T('dash_evolucao') + '</h3></div>'; // título da seção
    html += '<div class="cartao">';                         // abre o cartão do gráfico
    html += '<p class="texto-suave" style="font-size:0.85rem;margin:0">' + T('dash_evolucao_sub', { pct: ultimo.percentual }) + '</p>'; // legenda traduzida
    html += '<div class="grafico">';                        // abre a área do gráfico
    const ultimas = historico.slice(-10);                   // pega no máximo as 10 últimas
    for (const r of ultimas) {                              // percorre as provas
      const data = r.dataISO.slice(5, 10).replace('-', '/'); // data curta "MM/DD"
      html += '<div class="coluna" title="' + data + ': ' + r.percentual + '% (' + r.acertos + '/' + r.total + ')">'; // coluna com dica ao passar o mouse
      html += '<div class="barra" style="height:' + r.percentual + '%"></div>'; // barra com altura = percentual
      html += '<span class="rotulo">' + data + '</span>';   // data embaixo
      html += '</div>';                                     // fecha a coluna
    }
    html += '</div></div>';                                 // fecha gráfico e cartão

    // ---- Desempenho por matéria (de todo o histórico) ----
    const porMateria = {};                                  // dicionário matéria → {total, acertos}
    for (const r of historico) {                            // percorre todo o histórico
      for (const materia in r.porMateria) {                 // percorre as matérias do resultado
        if (!porMateria[materia]) porMateria[materia] = { total: 0, acertos: 0 }; // cria o registro
        porMateria[materia].total += r.porMateria[materia].total; // soma questões
        porMateria[materia].acertos += r.porMateria[materia].acertos; // soma acertos
      }
    }
    html += '<div class="titulo-secao"><h3>' + T('dash_materia') + '</h3></div>'; // título da seção
    html += '<div class="cartao">';                         // abre o cartão
    const nomes = Object.keys(porMateria);                  // nomes das matérias
    if (nomes.length === 0) {                               // sem dados por matéria
      html += '<p class="texto-suave">' + T('dash_materia_vazio') + '</p>'; // orienta
    }
    for (const materia of nomes) {                          // percorre as matérias
      const dados = porMateria[materia];                    // dados da matéria
      const pct = Math.round((dados.acertos / dados.total) * 100); // percentual
      html += '<div class="linha-materia">';                // abre a linha
      html += '<span class="nome">' + this.escape(materia) + '</span>'; // nome
      html += '<div class="barra-progresso"><span style="width:' + pct + '%;background:' + (pct >= 70 ? 'var(--verde)' : (pct >= 50 ? 'var(--caramelo)' : 'var(--vermelho)')) + '"></span></div>'; // barra colorida
      html += '<span class="pct">' + pct + '%</span>';      // percentual
      html += '</div>';                                     // fecha a linha
    }
    html += '</div>';                                       // fecha o cartão

    caixa.innerHTML = html;                                 // despeja o dashboard
    this.ligarAtalhos(caixa);                               // liga os botões de atalho
  },

  // Liga os botões "data-ir" (atalhos de navegação)
  ligarAtalhos(caixa) {
    caixa.querySelectorAll('[data-ir]').forEach(btn => {    // para cada botão de atalho
      btn.addEventListener('click', () => App.irPara(btn.dataset.ir)); // navega para a tela
    });
  },

  // Foge do HTML (segurança)
  escape(texto) {
    return String(texto)                                    // garante texto
      .replace(/&/g, '&amp;')                               // escapa "&"
      .replace(/</g, '&lt;')                                // escapa "<"
      .replace(/>/g, '&gt;')                                // escapa ">"
      .replace(/"/g, '&quot;')                              // escapa aspas
      .replace(/'/g, '&#39;');                              // escapa apóstrofo
  }
};

// Corrige a função de sequência (dias seguidos de estudo)
DashboardUI.calcularSequencia = function (historico) {
  if (historico.length === 0) return 0;                     // sem simulados, sequência zero
  const dias = new Set();                                   // conjunto de dias com estudo
  for (const r of historico) {                              // percorre os resultados
    dias.add(r.dataISO.slice(0, 10));                       // guarda a data (AAAA-MM-DD)
  }
  let sequencia = 0;                                        // contador de dias seguidos
  const cursor = new Date();                                // começa de hoje
  // Se hoje ainda não tem estudo, começa a contar de ontem
  if (!dias.has(cursor.toISOString().slice(0, 10))) {       // hoje não tem registro
    cursor.setDate(cursor.getDate() - 1);                   // volta um dia
  }
  // Vai voltando enquanto houver registro no dia
  while (dias.has(cursor.toISOString().slice(0, 10))) {     // o dia tem estudo
    sequencia += 1;                                         // conta mais um dia
    cursor.setDate(cursor.getDate() - 1);                   // volta para o dia anterior
  }
  return sequencia;                                         // devolve a sequência
};
