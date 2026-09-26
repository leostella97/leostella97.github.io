/* ==========================================================================
   TEAM_001: Lógica do portfólio — tema, idiomas e efeitos (vanilla JS, defer)
   ========================================================================== */

"use strict"; // modo estrito para evitar deslizes silenciosos

/* ---------- Dicionário de traduções (fonte única de verdade do conteúdo) ---------- */
const DICIONARIO = {
  pt: {
    "nav.sobre": "Sobre",
    "nav.formacao": "Formação",
    "nav.projetos": "Projetos",
    "nav.contato": "Contato",

    "hero.selo": "Disponível para novos projetos",
    "hero.funcao": "Infraestrutura, Suporte & Desenvolvimento",
    "hero.texto": "Há mais de 10 anos transformo complexidade técnica em tranquilidade operacional para que a tecnologia nunca seja o seu problema.",
    "hero.cta": "Contato",
    "hero.cta2": "Ver projetos",
    // Frases rotativas do efeito de digitação no hero
    "hero.frases": [
      "Tecnologia que trabalha a favor do seu negócio.",
      "Problemas resolvidos pela raiz, não pelo remendo.",
      "Da rede ao código: soluções que funcionam de verdade.",
      "Sempre estudando. Sempre evoluindo."
    ],

    "letreiro": "Infraestrutura · Redes · Segurança da Informação · Suporte Técnico · Desenvolvimento Web · Automação · Cloud · Usabilidade · ",

    "sobre.kicker": "Quem é Leonardo",
    "sobre.titulo": "Sobre mim",
    "sobre.p1": "Especialista em infraestrutura e gestão de TI com mais de 10 anos de atuação prática. Minha rotina vai da estabilidade de redes e segurança da informação ao desenvolvimento de sistemas focados em usabilidade e eficiência operacional.",
    "sobre.p2": "Graduado em Análise e Desenvolvimento de Sistemas, sigo me aprimorando continuamente no ecossistema de tecnologia — porque tecnologia parada é tecnologia ultrapassada.",
    "sobre.p3": "Perfil analítico e mão na massa: resolvo problemas pela raiz e faço a tecnologia trabalhar a favor do negócio — nunca contra ele.",
    "sobre.cartao1v": "anos",
    "sobre.cartao1r": "de experiência prática",
    "sobre.cartao1s": "infra, suporte & dev",
    "sobre.cartao2v": "Graduado",
    "sobre.cartao2r": "& estudante contínuo",
    "sobre.cartao2s": "mente sempre em progressão",
    "sobre.cartao3v": "Praia Grande – SP",
    "sobre.cartao3r": "Baixada Santista",
    "sobre.cartao3s": "alcance global",
    "sobre.cartao4v": "Remoto & Híbrido",
    "sobre.cartao4r": "onde o trabalho é preciso",
    "sobre.cartao4s": "sem fronteiras",

    "formacao.kicker": "Base sólida, evolução constante",
    "formacao.titulo": "Formação",
    "formacao.tag1": "Graduação",
    "formacao.tag2": "Técnico",
    "formacao.item1t": "Análise e Desenvolvimento de Sistemas",
    "formacao.item1i": "FAM — Centro Universitário",
    "formacao.item2t": "Desenvolvimento de Sistemas",
    "formacao.item2i": "EaDTEC / Centro Paula Souza",
    "formacao.item3t": "Informática",
    "formacao.item3i": "ETEC / Centro Paula Souza",
    "formacao.certt": "Certificados",
    "formacao.certd": "Uma coleção em constante crescimento porque aprender nunca é demais.",
    "formacao.certb": "Ver certificados",

    "projetos.kicker": "Código que virou produto",
    "projetos.titulo": "Projetos & Portfólio",
    "projetos.fit": "Treino e dieta personalizados em segundos motor determinístico com fórmula Mifflin-St Jeor, 100% gratuito e privado.",
    "projetos.fitTag2": "Determinístico",
    "projetos.fitTagSaude": "Saúde",
    "projetos.fitTag3": "100% Gratuito",
    "projetos.cafe": "Plataforma de estudos para concursos/vestibulares: importa o edital, gera simulados com correção comentada e ensina as pegadinhas das bancas.",
    "projetos.cafeTag2": "Estudo",
    "projetos.cafeTag3": "100% Gratuito",
    "projetos.tagAcad1": "Acadêmico · EaDTEC",
    "projetos.tagAcad2": "Acadêmico · ETEC",
    "projetos.freeT": "Plataforma Web para Freelancers",
    "projetos.freeD": "Divulgação de serviços autônomos com conexão direta ao cliente e foco total em usabilidade.",
    "projetos.ecoT": "Website Institucional - ONG Ecophalt",
    "projetos.ecoD": "Plataforma web criada para expandir a presença digital e o engajamento da organização.",

    "cta.titulo": "Vamos construir algo que funcione?",
    "cta.texto": "Infraestrutura estável, suporte que responde e desenvolvimento que entrega. O próximo projeto pode ser o seu.",
    "cta.botao": "Contato",

    "rodape.funcao": "Infraestrutura, Suporte & Desenvolvimento",
    "rodape.feito": "Feito com café, código e boas práticas.",

    "ui.tema": "Alternar tema claro/escuro",
    "ui.rolagem": "Rolar para a próxima seção"
  },

  en: {
    "nav.sobre": "About",
    "nav.formacao": "Education",
    "nav.projetos": "Projects",
    "nav.contato": "Contact",

    "hero.selo": "Available for new projects",
    "hero.funcao": "Infrastructure, Support & Development",
    "hero.texto": "For over 10 years I've turned technical complexity into operational peace of mind so technology is never your problem.",
    "hero.cta": "Contact",
    "hero.cta2": "See projects",
    "hero.frases": [
      "Technology that works for your business.",
      "Problems solved at the root, not patched.",
      "From network to code: solutions that truly work.",
      "Always learning. Always evolving."
    ],

    "letreiro": "Infrastructure · Networks · Information Security · Technical Support · Web Development · Automation · Cloud · Usability · ",

    "sobre.kicker": "Who is Leonardo",
    "sobre.titulo": "About me",
    "sobre.p1": "Infrastructure and IT management specialist with 10+ years of hands-on experience. My daily work goes from network stability and information security to building systems focused on usability and operational efficiency.",
    "sobre.p2": "Graduated in Systems Analysis and Development, I keep improving continuously in the technology ecosystem — because standing still means falling behind.",
    "sobre.p3": "Analytical, hands-on profile: I solve problems at the root and make technology work for the business — never against it.",
    "sobre.cartao1v": "years",
    "sobre.cartao1r": "of hands-on experience",
    "sobre.cartao1s": "infra, support & dev",
    "sobre.cartao2v": "Graduate",
    "sobre.cartao2r": "& lifelong learner",
    "sobre.cartao2s": "mind always progressing",
    "sobre.cartao3v": "Praia Grande – Brazil",
    "sobre.cartao3r": "Baixada Santista",
    "sobre.cartao3s": "global reach",
    "sobre.cartao4v": "Remote & Hybrid",
    "sobre.cartao4r": "where the work is precise",
    "sobre.cartao4s": "no borders",

    "formacao.kicker": "Solid foundation, constant evolution",
    "formacao.titulo": "Education",
    "formacao.tag1": "Degree",
    "formacao.tag2": "Technical",
    "formacao.item1t": "Systems Analysis and Development",
    "formacao.item1i": "FAM — University Center",
    "formacao.item2t": "Systems Development",
    "formacao.item2i": "EaDTEC / Centro Paula Souza",
    "formacao.item3t": "IT Technician",
    "formacao.item3i": "ETEC / Centro Paula Souza",
    "formacao.certt": "Certifications",
    "formacao.certd": "An ever-growing collection because there's no such thing as too much learning.",
    "formacao.certb": "View certificates",

    "projetos.kicker": "Code turned into product",
    "projetos.titulo": "Projects & Portfolio",
    "projetos.fit": "Personalized training and diet plans in seconds - deterministic engine with the Mifflin-St Jeor formula, 100% free and private.",
    "projetos.fitTag2": "Deterministic",
    "projetos.fitTagSaude": "Health",
    "projetos.fitTag3": "100% Free",
    "projetos.cafe": "Study platform for public exams and entrance tests: imports the official notice, generates mock exams with commented corrections and teaches the boards' trick questions.",
    "projetos.cafeTag2": "Study",
    "projetos.cafeTag3": "100% Free",
    "projetos.tagAcad1": "Academic · EaDTEC",
    "projetos.tagAcad2": "Academic · ETEC",
    "projetos.freeT": "Freelancer Web Platform",
    "projetos.freeD": "Promotion of freelance services with direct client connection and total focus on usability.",
    "projetos.ecoT": "Institutional Website - Ecophalt NGO",
    "projetos.ecoD": "Web platform built to expand the organization's digital presence and engagement.",

    "cta.titulo": "Shall we build something that works?",
    "cta.texto": "Stable infrastructure, responsive support and development that delivers. The next project can be yours.",
    "cta.botao": "Contact",

    "rodape.funcao": "Infrastructure, Support & Development",
    "rodape.feito": "Made with coffee, code and good practices.",

    "ui.tema": "Toggle light/dark theme",
    "ui.rolagem": "Scroll to next section"
  },

  es: {
    "nav.sobre": "Sobre mí",
    "nav.formacao": "Formación",
    "nav.projetos": "Proyectos",
    "nav.contato": "Contacto",

    "hero.selo": "Disponible para nuevos proyectos",
    "hero.funcao": "Infraestructura, Soporte & Desarrollo",
    "hero.texto": "Hace más de 10 años transformo la complejidad técnica en tranquilidad operativa para que la tecnología nunca sea tu problema.",
    "hero.cta": "Contacto",
    "hero.cta2": "Ver proyectos",
    "hero.frases": [
      "Tecnología que trabaja a favor de tu negocio.",
      "Problemas resueltos desde la raíz, sin parches.",
      "De la red al código: soluciones que funcionan de verdad.",
      "Siempre aprendiendo. Siempre evolucionando."
    ],

    "letreiro": "Infraestructura · Redes · Seguridad de la Información · Soporte Técnico · Desarrollo Web · Automatización · Cloud · Usabilidad · ",

    "sobre.kicker": "Quién es Leonardo",
    "sobre.titulo": "Sobre mí",
    "sobre.p1": "Especialista en infraestructura y gestión de TI con más de 10 años de experiencia práctica. Mi rutina va desde la estabilidad de redes y la seguridad de la información hasta el desarrollo de sistemas enfocados en usabilidad y eficiencia operativa.",
    "sobre.p2": "Graduado en Análisis y Desarrollo de Sistemas, sigo perfeccionándome continuamente en el ecosistema tecnológico — porque la tecnología parada es tecnología obsoleta.",
    "sobre.p3": "Perfil analítico y práctico: resuelvo problemas desde la raíz y hago que la tecnología trabaje a favor del negocio — nunca en su contra.",
    "sobre.cartao1v": "años",
    "sobre.cartao1r": "de experiencia práctica",
    "sobre.cartao1s": "infra, soporte & dev",
    "sobre.cartao2v": "Graduado",
    "sobre.cartao2r": "& estudiante continuo",
    "sobre.cartao2s": "mente siempre en progresión",
    "sobre.cartao3v": "Praia Grande – Brasil",
    "sobre.cartao3r": "Baixada Santista",
    "sobre.cartao3s": "alcance global",
    "sobre.cartao4v": "Remoto & Híbrido",
    "sobre.cartao4r": "donde el trabajo es preciso",
    "sobre.cartao4s": "sin fronteras",

    "formacao.kicker": "Base sólida, evolución constante",
    "formacao.titulo": "Formación",
    "formacao.tag1": "Superior",
    "formacao.tag2": "Técnico",
    "formacao.item1t": "Análisis y Desarrollo de Sistemas",
    "formacao.item1i": "FAM — Centro Universitario",
    "formacao.item2t": "Desarrollo de Sistemas",
    "formacao.item2i": "EaDTEC / Centro Paula Souza",
    "formacao.item3t": "Informática",
    "formacao.item3i": "ETEC / Centro Paula Souza",
    "formacao.certt": "Certificados",
    "formacao.certd": "Una colección en constante crecimiento porque aprender nunca es suficiente.",
    "formacao.certb": "Ver certificados",

    "projetos.kicker": "Código convertido en producto",
    "projetos.titulo": "Proyectos & Portafolio",
    "projetos.fit": "Entrenamiento y dieta personalizados en segundos - motor determinístico con la fórmula Mifflin-St Jeor, 100% gratuito y privado.",
    "projetos.fitTag2": "Determinístico",
    "projetos.fitTagSaude": "Salud",
    "projetos.fitTag3": "100% Gratuito",
    "projetos.cafe": "Plataforma de estudio para oposiciones/exámenes de ingreso: importa el edicto, genera simulacros con corrección comentada y enseña las trampas de las bancas.",
    "projetos.cafeTag2": "Estudio",
    "projetos.cafeTag3": "100% Gratuito",
    "projetos.tagAcad1": "Académico · EaDTEC",
    "projetos.tagAcad2": "Académico · ETEC",
    "projetos.freeT": "Plataforma Web para Freelancers",
    "projetos.freeD": "Divulgación de servicios autónomos con conexión directa al cliente y foco total en usabilidad.",
    "projetos.ecoT": "Sitio Institucional - ONG Ecophalt",
    "projetos.ecoD": "Plataforma web creada para ampliar la presencia digital y el compromiso de la organización.",

    "cta.titulo": "¿Construimos algo que funcione?",
    "cta.texto": "Infraestructura estable, soporte que responde y desarrollo que entrega. El próximo proyecto puede ser el tuyo.",
    "cta.botao": "Contacto",

    "rodape.funcao": "Infraestructura, Soporte & Desarrollo",
    "rodape.feito": "Hecho con café, código y buenas prácticas.",

    "ui.tema": "Alternar tema claro/oscuro",
    "ui.rolagem": "Ir a la siguiente sección"
  }
};

/* ---------- Estado global leve ---------- */
const raiz = document.documentElement;                 // elemento <html> para tema e lang
const prefereMovimento = !matchMedia("(prefers-reduced-motion: reduce)").matches; // respeita acessibilidade
const ponteiroFino = matchMedia("(pointer: fine)").matches; // só aplica efeitos de mouse em desktop

/* ==========================================================================
   TEMA CLARO / ESCURO
   ========================================================================== */
const interruptorTema = document.querySelector(".tema-interruptor"); // botão do sol/lua

// Aplica um tema: grava no <html>, no localStorage e mantém a página consistente
function aplicarTema(tema) {
  raiz.dataset.tema = tema;                  // atributo que o CSS usa para trocar as cores
  localStorage.setItem("tema", tema);        // lembra a escolha na próxima visita
}

// Clique do interruptor alterna entre os dois temas
interruptorTema.addEventListener("click", () => {
  aplicarTema(raiz.dataset.tema === "claro" ? "escuro" : "claro");
});

/* ==========================================================================
   IDIOMAS (pt / en / es)
   ========================================================================== */
const botoesIdioma = document.querySelectorAll(".idiomas__botao"); // três bandeiras
const elementoDigitado = document.getElementById("texto-digitado"); // span do typewriter
let idiomaAtual = localStorage.getItem("idioma") || "pt";          // idioma salvo ou pt-BR padrão

// Traduz todos os elementos marcados com data-i18n para o idioma escolhido
function traduzir(idioma) {
  const textos = DICIONARIO[idioma];                              // pega o dicionário do idioma

  document.querySelectorAll("[data-i18n]").forEach((elemento) => {
    const chave = elemento.dataset.i18n;                          // chave declarada no HTML
    const valor = textos[chave];                                  // texto traduzido
    if (typeof valor === "string") elemento.innerHTML = valor;    // aplica só strings (arrays são do typewriter)
  });

  // Traduz também os aria-labels marcados com data-i18n-aria
  document.querySelectorAll("[data-i18n-aria]").forEach((elemento) => {
    const chave = elemento.dataset.i18nAria;                      // chave do aria-label
    if (textos[chave]) elemento.setAttribute("aria-label", textos[chave]);
  });

  raiz.lang = idioma === "pt" ? "pt-BR" : idioma;                 // atualiza o atributo lang do documento
  localStorage.setItem("idioma", idioma);                         // lembra a escolha do visitante
  idiomaAtual = idioma;                                           // guarda o idioma corrente

  // Destaca a bandeira do idioma ativo
  botoesIdioma.forEach((botao) => {
    botao.classList.toggle("ativo", botao.dataset.idioma === idioma);
  });

  reiniciarDigitacao();                                           // reinicia o typewriter no novo idioma
}

// Clique numa bandeira troca o idioma inteiro da página
botoesIdioma.forEach((botao) => {
  botao.addEventListener("click", () => traduzir(botao.dataset.idioma));
});

/* ==========================================================================
   TYPEWRITER — frases digitadas/apagadas em loop
   ========================================================================== */
let indiceFrase = 0;      // qual frase está sendo digitada
let indiceLetra = 0;      // quantas letras já foram digitadas
let apagando = false;     // modo digitar vs. apagar
let timerDigitacao = null; // referência do setTimeout para poder cancelar

function passoDigitacao() {
  const frases = DICIONARIO[idiomaAtual]["hero.frases"]; // frases do idioma corrente
  const frase = frases[indiceFrase];                     // frase atual

  if (!apagando) {
    indiceLetra++;                                       // digita uma letra por vez
    elementoDigitado.textContent = frase.slice(0, indiceLetra);
    if (indiceLetra === frase.length) {
      apagando = true;                                   // terminou de digitar: espera e começa a apagar
      timerDigitacao = setTimeout(passoDigitacao, 2200);
      return;
    }
    timerDigitacao = setTimeout(passoDigitacao, 46);     // ritmo de digitação humano
  } else {
    indiceLetra--;                                       // apaga uma letra por vez
    elementoDigitado.textContent = frase.slice(0, indiceLetra);
    if (indiceLetra === 0) {
      apagando = false;                                  // terminou de apagar: passa para a próxima frase
      indiceFrase = (indiceFrase + 1) % frases.length;
      timerDigitacao = setTimeout(passoDigitacao, 350);
      return;
    }
    timerDigitacao = setTimeout(passoDigitacao, 22);     // apagar é mais rápido que digitar
  }
}

// Zera o ciclo do typewriter (usado na troca de idioma e na inicialização)
function reiniciarDigitacao() {
  clearTimeout(timerDigitacao);          // cancela qualquer passo pendente
  indiceFrase = 0;                       // volta para a primeira frase
  indiceLetra = 0;                       // zera a posição da letra
  apagando = false;                      // modo digitar
  elementoDigitado.textContent = "";     // limpa o texto exibido
  if (prefereMovimento) {
    passoDigitacao();                    // inicia o ciclo animado
  } else {
    elementoDigitado.textContent = DICIONARIO[idiomaAtual]["hero.frases"][0]; // sem animação: mostra a 1ª frase direto
  }
}

/* ==========================================================================
   CABEÇALHO + BARRA DE PROGRESSO DE LEITURA
   ========================================================================== */
const cabecalho = document.querySelector(".cabecalho");              // header fixo
const barraProgresso = document.querySelector(".progresso-leitura"); // barra colorida no topo

// Atualiza o estado do cabeçalho e o percentual de leitura a cada rolagem
function aoRolar() {
  cabecalho.classList.toggle("rolado", scrollY > 12);                // vidro fosco após 12px

  const alturaRolavel = document.body.scrollHeight - innerHeight;    // total rolável da página
  const progresso = alturaRolavel > 0 ? scrollY / alturaRolavel : 0; // fração de 0 a 1
  barraProgresso.style.setProperty("--progresso", progresso);        // move a barra via variável CSS
}
addEventListener("scroll", aoRolar, { passive: true });              // listener passivo = sem custo de scroll
aoRolar();                                                         // estado inicial correto já no carregamento

/* ==========================================================================
   REVELAÇÃO AO ROLAR (IntersectionObserver)
   ========================================================================== */
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel"); // elemento entrou na tela: revela
        observador.unobserve(entrada.target);    // revela uma vez só, depois solta
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" } // dispara um pouco antes do elemento chegar
);

// Marca cada elemento revelável com um atraso escalonado dentro do seu grupo
document.querySelectorAll(".revelar").forEach((elemento) => {
  const irmaos = [...elemento.parentElement.children].filter((filho) =>
    filho.classList.contains("revelar")
  );
  const posicao = irmaos.indexOf(elemento);                          // posição dentro do grupo
  elemento.style.setProperty("--atraso", `${Math.min(posicao * 0.09, 0.45)}s`); // atraso crescente, teto de 0,45s
  observador.observe(elemento);                                      // começa a observar
});

/* ==========================================================================
   CONTADORES ANIMADOS (ex.: "+10 anos")
   ========================================================================== */
const observadorContadores = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const elemento = entrada.target;
      const alvo = Number(elemento.dataset.alvo);                    // número final do contador
      const duracao = 1400;                                          // duração total em ms
      const inicio = performance.now();                              // carimbo do início
      observadorContadores.unobserve(elemento);                      // anima uma vez só

      // Animação com easing suave (ease-out cúbico)
      function quadro(agora) {
        const t = Math.min((agora - inicio) / duracao, 1);           // progresso de 0 a 1
        const eased = 1 - Math.pow(1 - t, 3);                        // desacelera no final
        elemento.textContent = Math.round(alvo * eased);             // número arredondado no DOM
        if (t < 1) requestAnimationFrame(quadro);                    // continua até o fim
      }
      requestAnimationFrame(quadro);
    });
  },
  { threshold: 0.6 }                                                 // só conta quando 60% visível
);
document.querySelectorAll(".contador").forEach((el) => observadorContadores.observe(el));

/* ==========================================================================
   EFEITOS DE PONTEIRO — tilt 3D, spotlight e botão magnético (só desktop)
   ========================================================================== */
if (ponteiroFino && prefereMovimento) {

  /* --- Tilt 3D nos cartões --- */
  document.querySelectorAll(".cartao, .mini-cartao").forEach((cartao) => {
    cartao.addEventListener("mousemove", (evento) => {
      const caixa = cartao.getBoundingClientRect();                  // posição do cartão na tela
      const px = (evento.clientX - caixa.left) / caixa.width - 0.5;  // posição X do mouse de -0,5 a 0,5
      const py = (evento.clientY - caixa.top) / caixa.height - 0.5;  // posição Y do mouse de -0,5 a 0,5
      cartao.style.transform = `perspective(700px) rotateX(${-py * 7}deg) rotateY(${px * 7}deg) translateY(-4px)`; // inclina na direção do mouse
      cartao.style.setProperty("--mx", `${evento.clientX - caixa.left}px`); // posição do spotlight
      cartao.style.setProperty("--my", `${evento.clientY - caixa.top}px`);
    });
    cartao.addEventListener("mouseleave", () => {
      cartao.style.transform = "";                                   // volta à posição neutra ao sair
    });
  });

  /* --- Spotlight que segue o mouse nos destaques de projeto e certificados --- */
  document.querySelectorAll(".projeto, .certificados").forEach((alvo) => {
    alvo.addEventListener("mousemove", (evento) => {
      const caixa = alvo.getBoundingClientRect();
      alvo.style.setProperty("--mx", `${evento.clientX - caixa.left}px`);
      alvo.style.setProperty("--my", `${evento.clientY - caixa.top}px`);
    });
  });

  /* --- Botões magnéticos: deslizam levemente em direção ao cursor --- */
  document.querySelectorAll(".botao--magnetico").forEach((botao) => {
    botao.addEventListener("mousemove", (evento) => {
      const caixa = botao.getBoundingClientRect();
      const dx = evento.clientX - (caixa.left + caixa.width / 2);    // distância horizontal do centro
      const dy = evento.clientY - (caixa.top + caixa.height / 2);    // distância vertical do centro
      botao.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`; // atrai 18% da distância
    });
    botao.addEventListener("mouseleave", () => {
      botao.style.transform = "";                                    // solta o botão ao sair
    });
  });
}

/* ==========================================================================
   LETREIRO — duplica o conteúdo para o loop infinito do marquee
   ========================================================================== */
const trilhoLetreiro = document.querySelector(".letreiro__trilho");  // trilho que desliza
const itemLetreiro = trilhoLetreiro.querySelector(".letreiro__item"); // conteúdo original
for (let i = 0; i < 3; i++) {
  trilhoLetreiro.appendChild(itemLetreiro.cloneNode(true));          // 4 cópias no total = loop sem costura
}

/* ---------- Inicialização ---------- */
traduzir(idiomaAtual); // aplica o idioma salvo (ou pt) e liga o typewriter
