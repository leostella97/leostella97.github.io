# leostella97.github.io — site raiz da conta

Este repositório existe por um motivo simples: o **GitHub Pages diferencia
letras maiúsculas de minúsculas no caminho do projeto**, então o sistema
ProtocolFit só era acessível escrevendo exatamente `ProtocolFit` (P e F
maiúsculos).

Aqui na raiz da conta não existe nenhum segmento de caminho para errar, e o
arquivo `404.html` captura qualquer endereço digitado com a caixa errada e
redireciona para o lugar certo.

## Endereços que funcionam

| Endereço | O que acontece |
| --- | --- |
| `https://leostella97.github.io/` | Abre o ProtocolFit (via `index.html`) |
| `https://leostella97.github.io/ProtocolFit/` | **Endereço oficial** — abre o sistema direto |
| `https://leostella97.github.io/protocolofit/` | Página real (200) que redireciona para `/ProtocolFit/` |
| `https://leostella97.github.io/ProtocoloFit/` | Cai no `404.html` e é redirecionado para `/ProtocolFit/` |
| `https://leostella97.github.io/protocolfit/` | Cai no `404.html` e é redirecionado para `/ProtocolFit/` |
| `https://leostella97.github.io/PROTOCOLFIT/painel/` | Redirecionado para `/ProtocolFit/painel/` (preserva o resto do caminho) |

> Observação técnica: o GitHub Pages diferencia maiúsculas de minúsculas no
> caminho, então `ProtocoloFit` e `protocolofit` **não podem** ser duas pastas
> diferentes (no Windows elas seriam a mesma pasta — e o Git recusaria as duas
> entradas). Por isso `protocolofit/` é uma pasta de verdade (HTTP 200) e todas
> as outras grafias, incluindo `ProtocoloFit`, passam pelo `404.html`, que
> redireciona na hora (JavaScript + `meta refresh`).

## Arquivos

- `index.html` — redireciona a raiz para `/ProtocolFit/`.
- `protocolofit/index.html` — alias do endereço oficial (redireciona para `/ProtocolFit/`,
  com `canonical` apontando para o endereço oficial e `noindex` para não duplicar SEO).
- `404.html` — captura endereços não encontrados (qualquer caixa ou o typo
  `ProtocoloFit`) e reconstrói a URL oficial, preservando subpastas, query string
  e âncora.
- `ads.txt` — autorização de anúncios do Google AdSense na raiz do domínio.
- `.nojekyll` — evita o processamento do Jekyll (são apenas arquivos estáticos).

## O sistema

Código-fonte em **https://github.com/leostella97/ProtocolFit** — o aplicativo
instalável (PWA) fica em **https://leostella97.github.io/ProtocolFit/**.
