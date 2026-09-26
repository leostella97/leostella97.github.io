/* ============================================================
   GABARITO CAFÉ — js/conteudo.js
   Telas de conteúdo: "Bancas" (pegadinhas) e "Temas que
   caem" (matérias + frequência). Tudo renderizado na hora.
   ============================================================ */

// Objeto global das telas de conteúdo
const ConteudoUI = {

  // Desenha a tela de bancas (cartão para cada banca)
  renderizarBancas() {
    const caixa = document.getElementById('tela-bancas');   // pega a seção da tela
    let html = '<p class="texto-suave">' + T('bancas_intro') + '</p>'; // introdução traduzida
    html += '<div class="nota" style="margin-bottom:1rem">' + T('conteudo_aviso') + '</div>'; // aviso de conteúdo em PT
    html += '<div class="grade-bancas">';                   // abre a grade de cartões
    for (const banca of DadosBancas.bancas) {               // percorre as bancas
      html += '<div class="cartao banca-cartao aparecer">'; // abre o cartão
      html += '<div class="banca-nome">' + this.escape(banca.nome) + '</div>'; // nome da banca
      html += '<p class="banca-perfil">' + this.escape(banca.perfil) + '</p>'; // perfil da banca
      html += '<p style="font-weight:900;font-size:0.9rem">' + T('bancas_pegadinhas_t') + '</p>'; // título da lista
      html += '<ul class="banca-lista">';                   // abre a lista de pegadinhas
      for (const pegadinha of banca.pegadinhas) {           // percorre as pegadinhas
        html += '<li>' + this.escape(pegadinha) + '</li>';  // item de pegadinha
      }
      html += '</ul>';                                      // fecha a lista
      html += '<div class="banca-dica">💡 ' + this.escape(banca.comoSeDarBem) + '</div>'; // estratégia
      html += '</div>';                                     // fecha o cartão
    }
    html += '</div>';                                       // fecha a grade
    caixa.innerHTML = html;                                 // despeja na tela
  },

  // Desenha a tela de temas que mais caem
  renderizarTemas() {
    const caixa = document.getElementById('tela-temas');    // pega a seção da tela
    // Abas: concursos x vestibular
    let html = '<div class="abas" style="max-width:420px"><button id="aba-concursos" class="aba ativa">' + T('temas_aba_concursos') + '</button><button id="aba-vest" class="aba">' + T('temas_aba_vest') + '</button></div>'; // abas traduzidas
    html += '<div class="nota" style="margin-bottom:1rem">' + T('conteudo_aviso') + '</div>'; // aviso de conteúdo em PT
    html += '<div id="lista-temas"></div>';                 // área que recebe a lista
    caixa.innerHTML = html;                                 // despeja a estrutura

    // Função interna que troca a lista conforme a aba
    const mostrar = (lista) => {                            // recebe a lista de matérias
      const area = document.getElementById('lista-temas');  // pega a área da lista
      let conteudo = '<div class="grade-temas">';           // abre a grade
      for (const materia of lista) {                        // percorre as matérias
        conteudo += '<div class="cartao aparecer">';        // abre o cartão
        conteudo += '<h3>' + materia.icone + ' ' + this.escape(materia.materia) + '</h3>'; // título
        conteudo += '<p class="texto-suave" style="font-size:0.88rem">' + this.escape(materia.resumo) + '</p>'; // resumo
        for (const topico of materia.topicos) {             // percorre os tópicos
          conteudo += '<div class="tema-topico">';          // abre o bloco do tópico
          conteudo += '<span class="topico-nome">' + this.escape(topico.nome) + '</span> '; // nome do tópico
          conteudo += '<span class="xicaras">' + '☕'.repeat(topico.frequencia) + '</span>'; // xícaras = frequência
          conteudo += '<p style="font-size:0.85rem;margin:0.2rem 0">' + T('temas_porque') + this.escape(topico.porque) + '</p>'; // motivo de cair
          conteudo += '<div class="tema-como">✍️ ' + this.escape(topico.como) + '</div>'; // como estudar
          conteudo += '</div>';                             // fecha o bloco
        }
        conteudo += '</div>';                               // fecha o cartão
      }
      conteudo += '</div>';                                 // fecha a grade
      area.innerHTML = conteudo;                            // despeja a lista
    };

    // Liga as abas
    document.getElementById('aba-concursos').addEventListener('click', () => { // aba concursos
      document.getElementById('aba-concursos').classList.add('ativa');         // marca como ativa
      document.getElementById('aba-vest').classList.remove('ativa');           // desmarca a outra
      mostrar(DadosTemas.concursos);                        // mostra temas de concurso
    });
    document.getElementById('aba-vest').addEventListener('click', () => {      // aba vestibular
      document.getElementById('aba-vest').classList.add('ativa');              // marca como ativa
      document.getElementById('aba-concursos').classList.remove('ativa');      // desmarca a outra
      mostrar(DadosTemas.vestibular);                       // mostra temas de vestibular
    });

    mostrar(DadosTemas.concursos);                          // começa mostrando concursos
  },

  // Devolve as dicas rápidas no idioma atual (com reserva no português)
  dicasRapidasDoIdioma() {
    const porIdioma = DadosTemas.dicasRapidas;              // dicas separadas por idioma
    return porIdioma[Idioma.atual] || porIdioma.pt;         // do idioma atual ou português
  },

  // Desenha a tela de dicas importantes (organizadas por categoria)
  renderizarDicas() {
    const caixa = document.getElementById('tela-dicas');    // pega a seção da tela
    const porIdioma = DadosTemas.dicasImportantes;          // dicas importantes por idioma
    const categorias = porIdioma[Idioma.atual] || porIdioma.pt; // usa o idioma atual (ou pt)
    let html = '<p class="texto-suave">' + T('dicas_intro') + '</p>'; // introdução traduzida
    // Um cartão para cada categoria de dicas
    for (const categoria of categorias) {                   // percorre as categorias
      html += '<div class="cartao aparecer categoria-dicas">'; // abre o cartão
      html += '<div class="categoria-titulo">' + categoria.icone + ' ' + this.escape(categoria.titulo) + '</div>'; // título
      for (const dica of categoria.dicas) {                 // percorre as dicas da categoria
        html += '<div class="dica-item">';                  // abre a dica
        html += '<div class="dica-titulo">' + this.escape(dica.titulo) + '</div>'; // título da dica
        html += '<p class="dica-texto">' + this.escape(dica.texto) + '</p>'; // explicação
        html += '</div>';                                   // fecha a dica
      }
      html += '</div>';                                     // fecha o cartão
    }
    // Bloco final: as dicas rápidas de prova (mesmas que aparecem no simulado)
    html += '<div class="titulo-secao"><h3>' + T('dicas_prova_t') + '</h3></div>'; // título da seção
    html += '<div class="cartao"><ul class="banca-lista" style="font-size:0.92rem">'; // abre a lista
    for (const dica of this.dicasRapidasDoIdioma()) {       // percorre as dicas rápidas
      html += '<li>' + this.escape(dica) + '</li>';         // cada dica
    }
    html += '</ul></div>';                                  // fecha lista e cartão
    caixa.innerHTML = html;                                 // despeja na tela
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
