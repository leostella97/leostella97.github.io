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
| `https://leostella97.github.io/ProtocolFit/` | Abre o ProtocolFit direto |
| `https://leostella97.github.io/protocolfit/` | Cai no `404.html` e é redirecionado para `/ProtocolFit/` |
| `https://leostella97.github.io/PROTOCOLFIT/painel/` | Redirecionado para `/ProtocolFit/painel/` (preserva o resto do caminho) |

## Arquivos

- `index.html` — redireciona a raiz para `/ProtocolFit/`.
- `404.html` — captura endereços não encontrados e reconstrói a URL oficial,
  preservando subpastas, query string e âncora.
- `.nojekyll` — evita o processamento do Jekyll (são apenas arquivos estáticos).

## O sistema

Código-fonte em **https://github.com/leostella97/ProtocolFit** — o aplicativo
instalável (PWA) fica em **https://leostella97.github.io/ProtocolFit/**.
