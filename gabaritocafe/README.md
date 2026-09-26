# ☕ Gabarito Café

> **Estude com sabor de aprovação.**
> Um sistema de estudos para concursos públicos e vestibulares que roda 100% no seu navegador: você importa o edital, descobre o que estudar, faz simulados com correção comentada e acompanha seu progresso — tudo num clima de cafeteria.

---

## 🧭 Sumário

- [O que é o Gabarito Café](#-o-que-é-o-gabarito-café)
- [Funcionalidades](#-funcionalidades)
- [Por que o nome "Gabarito Café"?](#-por-que-o-nome-gabarito-café)
- [Tecnologias](#-tecnologias)
- [Estrutura de arquivos](#-estrutura-de-arquivos)
- [Como rodar localmente](#-como-rodar-localmente)
- [Como publicar no GitHub (isolado dos outros projetos)](#-como-publicar-no-github-isolado-dos-outros-projetos)
- [Privacidade e segurança](#-privacidade-e-segurança)
- [Como adicionar questões novas](#-como-adicionar-questões-novas)
- [Como funciona a análise do edital](#-como-funciona-a-análise-do-edital)
- [Ferramentas de desenvolvimento](#-ferramentas-de-desenvolvimento)
- [Ideias para o futuro](#-ideias-para-o-futuro)

---

## ☕ O que é o Gabarito Café?

Sabe aquele ritual de estudar com um café do lado? O Gabarito Café é isso em forma de site. Ele foi pensado para quem está na correria dos concursos e vestibulares e quer um lugar só para:

1. **Importar o edital** (PDF) e ver, na hora, os cargos, as matérias e os pontos mais importantes — sem ficar caçando no arquivo;
2. **Fazer simulados** de 5, 10, 15, 20, 30 ou 50 questões, com correção comentada questão por questão;
3. **Errou?** O app explica o que você errou, mostra o passo a passo de como resolver e sugere uma aula no YouTube sobre o tema;
4. **Aprender as pegadinhas das bancas** (CESPE, FGV, FCC, Vunesp...) antes de cair nelas;
5. **Acompanhar o progresso** num dashboard com gráficos, médias e sequência de dias estudados.

Tudo com **login local** (localStorage) — nada de servidor, nada de cadastro real, nada de esperar carregar.

---

## ✨ Funcionalidades

| Funcionalidade | Como funciona |
|---|---|
| 📄 **Importação de edital** | Arraste o PDF do edital/manual do candidato (ou cole o texto). O app lê o PDF direto no navegador com PDF.js. |
| 🔍 **Análise do edital** | Detecta o título do concurso, **cargos**, **matérias** do conteúdo programático e cita trechos de requisitos, remuneração, inscrições e provas. |
| 🗺️ **Plano de estudo** | Para cada matéria detectada, mostra o que mais cai e por onde começar (ou avisa honestamente se ainda não tem resumo daquela matéria). |
| 📝 **Simulados** | 5, 10, 15, 20, 30 ou 50 questões, com filtro por matéria e por estilo de banca. Alternativas sempre embaralhadas. |
| ✅ **Correção comentada** | Acertou: explicação para consolidar. Errou: o que errou, o gabarito, o **passo a passo** e a **pegadinha da banca**. |
| 🎥 **Aula no YouTube** | Toda questão tem um link "Assistir aula sobre o tema" que abre a busca do YouTube com a matéria certa. |
| 🏁 **Resultado final** | Acertos, erros, aproveitamento, tempo de prova, desempenho por matéria e revisão das erradas (com a opção de **refazer só as erradas**). |
| 📈 **Dashboard** | Simulados feitos, aproveitamento geral, melhor resultado, questões respondidas, 🔥 dias seguidos, gráfico de evolução e desempenho por matéria. |
| 🕵️ **Bancas** | 9 bancas (CESPE/Cebraspe, FGV, FCC, Vunesp, IBFC, FUMARC, AOCP, ENEM, Fuvest/Unicamp) com perfil, pegadinhas favoritas e como se dar bem. |
| 📚 **Temas que mais caem** | Lista dos temas campeões de concursos e vestibulares, com frequência em "xícaras" (☕☕☕☕☕) e dicas de como estudar cada um. |
| 🔐 **Login local** | Criar conta, entrar ou modo visitante. Senhas guardadas com hash — tudo no localStorage do navegador. |
| 🎨 **Tema café** | Cores de café torrado, caramelo e creme, fontes artesanais (Fraunces + Nunito + Caveat), post-its de dica, vapor animado no logo e microtextos em tom de estudante. |

---

## 🎨 Por que o nome "Gabarito Café"?

- **Gabarito** = a correção oficial da prova, o objetivo de todo concurseiro;
- **Café** = o combustível clássico de quem estuda (e de quem corrige prova de madrugada).

O visual segue o nome: fundo creme, marrom de café torrado, caramelo nos destaques, dicas em post-it amarelo, frases manuscritas e até um vapor subindo da xícara no logo (que tem um ✔ dentro — o gabarito!).

> *"Aprovação não se faz num gole só: se faz em goles diários." — o barista*

---

## 🛠 Tecnologias

| Tecnologia | Para quê |
|---|---|
| **HTML5 + CSS3** | Estrutura e visual (tema café, responsivo) |
| **JavaScript puro (ES6+)** | Toda a lógica: login, análise do edital, simulados, dashboard |
| **PDF.js** (via CDN) | Ler o texto do PDF do edital no navegador |
| **Google Fonts** (Fraunces, Nunito, Caveat) | Tipografia artesanal |
| **localStorage** | Contas, sessão, histórico e progresso |
| **GitHub Pages** | Hospedagem gratuita (estática) |

Nenhum framework, nenhum build, nenhuma dependência para instalar. É só abrir o `index.html` (ou publicar no GitHub Pages) e usar.

---

## 📁 Estrutura de arquivos

```
gabarito-cafe/
├── index.html                 # Página única com todas as telas (login + app)
├── README.md                  # Este guia
├── .gitignore                 # O que o Git deve ignorar
├── assets/
│   ├── logo.svg               # Logo: xícara de café com o "visto" (gabarito)
│   └── icone.svg              # Favicon da aba do navegador
├── css/
│   ├── base.css               # Reset, paleta de cores (tema café) e utilitários
│   ├── componentes.css        # Botões, cartões, chips, post-its, toasts, menu...
│   └── telas.css              # Layouts: login, dashboard, edital, simulado, bancas...
├── js/
│   ├── armazenamento.js       # Camada única de acesso ao localStorage
│   ├── auth.js                # Contas, sessão, hash de senha e foco do usuário
│   ├── dados-temas.js         # Temas que mais caem + dicas rápidas + frases do dia
│   ├── dados-bancas.js        # Bancas famosas e suas pegadinhas
│   ├── banco-questoes.js      # Banco com 68 questões comentadas
│   ├── analise-edital.js      # Heurísticas: detecta cargos, matérias e trechos
│   ├── motor-simulado.js      # Sorteio, embaralhamento e correção (lógica pura)
│   ├── edital.js              # Tela do edital (upload, leitura do PDF, resultado)
│   ├── conteudo.js            # Telas de bancas e temas
│   ├── simulado.js            # Tela do simulado (config → questões → resultado)
│   ├── dashboard.js           # Tela de progresso
│   └── app.js                 # "Gerente": rotas, login, avisos e inicialização
└── scripts/
    ├── validar-banco.js       # (dev) Confere a integridade das questões
    └── testar-analise.js      # (dev) Testa a análise de edital com um edital fake
```

> 💡 **Por que separar a lógica da tela?** Arquivos como `analise-edital.js` e `motor-simulado.js` não tocam em nada visual — dá para testá-los com Node (é o que os scripts de `scripts/` fazem) e, no futuro, trocar a interface sem mexer no cérebro do app.

---

## 🚀 Como rodar localmente

**Opção 1 — o jeito mais preguiçoso (e honesto):**
Dê dois cliques no `index.html` e pronto. (A leitura de PDF e as fontes usam internet; o resto funciona offline.)

**Opção 2 — servidorzinho com Python** (recomendado, evita frescura de navegador):
```bash
python -m http.server 8080
# abra http://localhost:8080
```

**Opção 3 — com Node:**
```bash
npx serve .
```

---

## 🐙 Como publicar no GitHub (isolado dos outros projetos)

O projeto já é um repositório Git independente — ele **não interfere** em nenhum outro projeto seu, desde que você publique em um repositório novo.

**Passo a passo (pela web):**
1. Entre no GitHub e clique em **New repository**;
2. Dê um nome bonito (ex.: `gabarito-cafe`);
3. **NÃO marque** "Add a README" (o projeto já tem o dele);
4. Crie e copie a URL do repositório (ex.: `https://github.com/seu-usuario/gabarito-cafe.git`).

**Passo a passo (no terminal, dentro da pasta do projeto):**
```bash
# 1. Confira se você está na pasta certa (D:\dev\Gabarito Café)
git status

# 2. Conecte o repositório local ao remoto que você criou
git remote add origin https://github.com/SEU-USUARIO/gabarito-cafe.git

# 3. Envie tudo para o GitHub (branch main)
git branch -M main
git push -u origin main
```

**Publicar no GitHub Pages:**
1. No repositório, vá em **Settings → Pages**;
2. Em *Source*, escolha **Deploy from a branch** e a branch `main` (pasta `/ (root)`;
3. Salve e aguarde ~1 minuto. Seu site ficará em:
   `https://SEU-USUARIO.github.io/gabarito-cafe/`

> ⚠️ **Mantenha o isolamento:** nunca rode `git init` nem publique esse projeto dentro de outro repositório. Ele já tem o próprio `.git` — cada projeto, seu cantinho.

---

## 🔒 Privacidade e segurança

- **Tudo fica no seu navegador.** Contas, senhas (com hash SHA-256), histórico de simulados e o texto do edital são guardados no `localStorage` — nada é enviado para servidores.
- O PDF do edital é lido **localmente** pela biblioteca PDF.js; o arquivo não sai do seu computador.
- Isso **não é segurança bancária**: o hash de senha é proteção contra olho curioso, não contra alguém com acesso físico ao navegador. Para uso pessoal de estudos, é mais que suficiente (e é exatamente o que foi pedido no projeto).
- Quer apagar tudo? Limpe os dados do site nas configurações do navegador (chaves começando com `gc_`).

---

## ➕ Como adicionar questões novas

Abra `js/banco-questoes.js` e cole um bloco novo **antes do último `];`**, seguindo o formato:

```js
{
  id: 'p11',                                    // id único (não repita!)
  materia: 'Língua Portuguesa',                 // matéria (usada nos filtros)
  tema: 'Concordância verbal',                  // assunto da questão
  banca: 'CESPE/Cebraspe',                      // banca cujo estilo inspira
  enunciado: 'Texto da pergunta...',            // a pergunta
  alternativas: ['opção A', 'opção B', '...'],  // 2 a 5 alternativas
  correta: 1,                                   // índice da certa (0 = primeira)
  explicacao: 'Por que a certa é a certa...',   // explicação do gabarito
  passos: ['Passo 1...', 'Passo 2...'],         // (opcional) como resolver
  dica: 'A pegadinha da banca é...',            // dica de pegadinha
  video: 'busca que abre no youtube'            // termos da busca da aula
}
```

Depois rode a validação para ter certeza de que está tudo certinho:

```bash
node scripts/validar-banco.js
```

---

## 🧠 Como funciona a análise do edital

A análise é uma **heurística honesta** (sem servidor, sem IA paga):

1. **Texto**: o PDF é convertido em texto com PDF.js;
2. **Normalização**: acentos viram letras simples e tudo vira maiúsculo (PDFs costumam bagunçar acentos);
3. **Cargos**: o app procura a seção "DOS CARGOS/VAGAS" e varre linhas com palavras típicas (Agente, Analista, Técnico, Professor...) limpando numeração, salários e vagas;
4. **Matérias**: compara o texto com um catálogo de 16 matérias (Português, Matemática, Raciocínio Lógico, Informática, Direitos, História...) e marca quais têm questões no banco;
5. **Trechos**: separa citações de "Conteúdo programático", "Requisitos", "Remuneração", "Inscrições" e "Provas";
6. **Plano**: cruza as matérias com os dados de "temas que mais caem" e sugere por onde começar.

**Limitação honesta:** editais com tabelas muito complexas ou PDFs "escaneados" (imagem sem texto) podem não sair perfeitos. Nesses casos o campo **"cola o texto aqui"** resolve — a análise funciona igual.

---

## 🔧 Ferramentas de desenvolvimento

```bash
# Confere se todas as 68 questões estão íntegras (ids, alternativas, campos)
node scripts/validar-banco.js

# Testa a análise de edital com um edital fictício
node scripts/testar-analise.js

# Checa a sintaxe de todos os JS do projeto
node --check js/arquivo.js   # (um por um)
```

---

## 🌱 Ideias para o futuro

- [ ] Questões com imagens (gráficos, tabelas, figuras)
- [ ] Modo "prova completa" com tempo regressivo e cartão-resposta
- [ ] Importar questões de arquivos JSON do usuário
- [ ] Revisão espaçada (reaparecer questões erradas após X dias)
- [ ] PWA (instalar no celular e usar offline)
- [ ] Tema escuro "café à noite"

---

## 💚 Créditos

Feito com ☕, carinho e muitas horas de estudo — **por estudantes, para estudantes**.

Nenhum dado sai do seu navegador. Nenhuma propaganda. Nenhuma pegadinha fora da prova. 😉

---

*Gabarito Café · "Aprovação não se faz num gole só: se faz em goles diários."*
