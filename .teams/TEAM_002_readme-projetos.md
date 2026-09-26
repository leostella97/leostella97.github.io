# TEAM_002 — README com os projetos do domínio

## Contexto
O `README.md` estava desatualizado: dizia que a raiz redirecionava para o
ProtocolFit, mas desde a TEAM_001 a raiz é o portfólio pessoal. Pedido do
usuário: atualizar o README abordando `/ProtocolFit` e `/GabaritoCafe`
(o usuário escreveu "DicionarioCafe" — confirmado que era engano, quis dizer
GabaritoCafe) e garantir que `/ProtocoloFit` e `/protocolofit` vão para
`/ProtocolFit`.

## Verificado em produção (curl)
| Caminho | Status | Resultado |
| --- | --- | --- |
| `/` | 200 | portfólio |
| `/ProtocolFit/` | 200 | repo oficial ProtocolFit |
| `/protocolofit/` | 200 | pasta-alias local → redireciona p/ `/ProtocolFit/` |
| `/ProtocoloFit/`, `/protocolfit/` | 404 | `404.html` → `/ProtocolFit/` (já funcionava) |
| `/GabaritoCafe/` | 200 | repo oficial GabaritoCafe (~19 KB) |
| `/gabaritocafe/` | 200 | **cópia local deste repo (~15 KB, mais antiga)** |
| `/GABARITOCAFE/` | 404 | `404.html` → `/GabaritoCafe/` |
| `/outro-site/` | 404 | 404 normal, sem redirecionar |

## Alterações
- `README.md` — reescrito: portfólio na raiz, tabela de projetos, tabela de
  endereços com o comportamento real e lista de arquivos atualizada.
- `404.html` — removidas chaves duplicadas no mapa `redirecionamentos`
  (`'protocolfit'` e `'gabaritocafe'` apareciam 2x; código morto, Regra 6).

## Observações para o usuário / próximas equipes
- O redirecionamento pedido (`/ProtocoloFit`, `/protocolofit` → `/ProtocolFit`)
  já estava implementado — não foi preciso código novo, só documentação.
- A cópia local `gabaritocafe/` está **desatualizada** em relação ao repo
  oficial `GabaritoCafe` (HTML ~15 KB vs ~19 KB). Se a intenção é manter a
  cópia, vale ressincronizar; se não, a pasta poderia virar um alias de
  redirecionamento como `protocolofit/`.
- A descrição do repo no GitHub ainda diz "redireciona qualquer variacao… para
  o ProtocolFit" — só pode ser alterada nas configurações do repo, não em arquivo.
- Regra nova do usuário: **não assinar alterações com o nome da ferramenta** —
  commits futuros sem trailer/co-autor de ferramenta.

## Checklist de transferência
- [x] Projeto "compila" — site estático; sintaxe do script do `404.html` validada com `node`
- [x] Testes — não aplicável (site estático); comportamento verificado em produção via curl
- [x] Regressão comportamental — mapa de redirecionamento mantém os mesmos destinos
- [x] Arquivo da equipe atualizado
- [x] Variáveis/comentários em pt-BR
- [x] Sem TODOs pendentes
