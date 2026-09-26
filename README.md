# leostella97.github.io — site raiz da conta

Este repositório publica o **portfólio pessoal de Leonardo Stella** na raiz do
domínio e organiza os **endereços oficiais dos projetos** hospedados em
`leostella97.github.io`.

O GitHub Pages diferencia letras maiúsculas de minúsculas no caminho do projeto,
então cada sistema tem uma grafia oficial (`/ProtocolFit/`, `/GabaritoCafe/`) e
este repositório garante que as variações digitadas "erradas" cheguem ao lugar
certo: a pasta `protocolofit/` responde com HTTP 200 e o `404.html` captura as
demais grafias.

## Projetos hospedados no domínio

| Projeto | Endereço oficial | Repositório |
| --- | --- | --- |
| ProtocolFit — treino e dieta personalizados (PWA) | https://leostella97.github.io/ProtocolFit/ | [leostella97/ProtocolFit](https://github.com/leostella97/ProtocolFit) |
| Gabarito Café — simulados para concursos e vestibulares | https://leostella97.github.io/GabaritoCafe/ | [leostella97/GabaritoCafe](https://github.com/leostella97/GabaritoCafe) |

## Endereços que funcionam

| Endereço digitado | O que acontece |
| --- | --- |
| `https://leostella97.github.io/` | Abre o portfólio (`index.html`) |
| `https://leostella97.github.io/ProtocolFit/` | **Endereço oficial** — servido pelo repo `ProtocolFit` |
| `https://leostella97.github.io/protocolofit/` | Página real (200) que redireciona para `/ProtocolFit/` |
| `https://leostella97.github.io/ProtocoloFit/` | Cai no `404.html` e é redirecionado para `/ProtocolFit/` |
| `https://leostella97.github.io/protocolfit/` | Cai no `404.html` e é redirecionado para `/ProtocolFit/` |
| `https://leostella97.github.io/PROTOCOLFIT/painel/` | Redirecionado para `/ProtocolFit/painel/` (preserva o resto do caminho) |
| `https://leostella97.github.io/GabaritoCafe/` | **Endereço oficial** — servido pelo repo `GabaritoCafe` |
| `https://leostella97.github.io/gabaritocafe/` | Página real (200) — cópia do app versionada neste repositório |
| `https://leostella97.github.io/GABARITOCAFE/` (e outras caixas) | Cai no `404.html` e é redirecionado para `/GabaritoCafe/` |
| `https://leostella97.github.io/outro-site/` | **404 normal** — não redireciona (espaço livre para outros sites do domínio) |

> Observação técnica: no GitHub Pages o caminho diferencia maiúsculas de
> minúsculas e, no Windows, `ProtocoloFit/` e `protocolofit/` seriam a mesma
> pasta (o Git também recusaria as duas entradas). Por isso `protocolofit/` é a
> única pasta-alias de verdade (HTTP 200); todas as outras grafias —
> `ProtocoloFit`, `protocolfit`, `PROTOCOLFIT`, etc. — passam pelo `404.html`,
> que redireciona na hora (JavaScript + `meta refresh`).
>
> **Importante:** o `404.html` **só redireciona variações conhecidas** dos
> endereços oficiais (mapa `redirecionamentos` no script do arquivo). Qualquer
> outro caminho inexistente devolve 404 normal, sem redirecionar.

## Arquivos

- `index.html` — portfólio pessoal (estrutura e conteúdo; textos em pt-BR).
- `css/style.css` — estilos do portfólio, temas escuro/claro e responsivo.
- `js/main.js` — tema, i18n (pt/en/es) e efeitos. **Para editar texto do
  portfólio, mexa no `DICIONARIO` deste arquivo** — o HTML é só o fallback
  inicial, os elementos `data-i18n` são sobrescritos pelo dicionário.
- `favicon.svg`, `img/` — identidade visual e imagens do portfólio.
- `protocolofit/index.html` — alias de `/ProtocolFit/` (redireciona na hora, com
  `canonical` no endereço oficial e `noindex` para não duplicar SEO).
- `gabaritocafe/` — cópia do app Gabarito Café versionada aqui; é o que responde
  em `/gabaritocafe/` (minúsculo), enquanto `/GabaritoCafe/` vem do repo oficial.
- `404.html` — captura endereços não encontrados e reconstrói a URL oficial das
  variações conhecidas, preservando subpastas, query string e âncora.
- `ads.txt` — autorização de anúncios do Google AdSense na raiz do domínio.
- `robots.txt` — libera o rastreamento de todos os projetos do domínio.
- `.nojekyll` — desativa o processamento do Jekyll (são apenas arquivos estáticos).

## O portfólio

Página única em HTML + CSS + JS puro (sem build), com tema escuro/claro
persistido em `localStorage`, três idiomas (pt-BR, en, es) e seções de
apresentação, formação e projetos.
