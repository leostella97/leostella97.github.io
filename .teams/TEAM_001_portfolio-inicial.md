# TEAM_001 — Portfólio Inicial

## Contexto
Criação do site portfólio de Leonardo Stella (`leostella97.github.io`) a partir de um workspace vazio contendo apenas `img/3x4-26.jpg`.

## Decisões
- **Stack:** HTML + CSS + JS puro (sem build) — máxima performance no GitHub Pages.
- **Temas:** escuro (padrão) / claro, persistidos em `localStorage`, respeitando `prefers-color-scheme`.
- **i18n:** pt-BR / en / es via `data-i18n` + dicionário em `js/main.js`; bandeiras em SVG inline (PT = metade Brasil/metade Portugal, EN = Inglaterra, ES = Espanha).
- **Efeitos:** aurora de fundo, reveal on scroll, tilt 3D nos cards, botão magnético, typewriter, contadores, spotlight — tudo em vanilla, com `prefers-reduced-motion` respeitado.

## Arquivos
- `index.html` — estrutura e conteúdo
- `css/style.css` — estilos e temas
- `js/main.js` — tema, idiomas, efeitos
- `favicon.svg` — monograma LS
- `img/3x4-26.jpg` — foto do herói (existente)

## Notas de transferência
- O card "+10 anos de experiência" e o texto "mais de 8 anos" foram mantidos exatamente como especificados pelo usuário.
- Nenhum teste de regressão existia (projeto novo).

## Checklist de transferência
- [x] Projeto "compila" — site estático, sem build; `node --check js/main.js` OK
- [x] Testes — não aplicável (site estático novo); validação: todos os assets respondem 200 e as 60 chaves `data-i18n` existem nos 3 idiomas
- [x] Regressão comportamental — não aplicável (sem baseline anterior)
- [x] Arquivo da equipe atualizado
- [x] Variáveis em pt-BR e código comentado linha a linha
- [x] Sem TODOs pendentes

## Iteração 2 — ajustes de texto solicitados
- `sobre.cartao2s`: "mente sempre em progressão"
- `sobre.cartao3r`: "Baixada Santista" (nome próprio, mantido em EN/ES)
- `sobre.cartao4r`: "onde o trabalho é preciso"
- `projetos.cafeTag2`: "Estudo" (EN "Study" / ES "Estudio")
- Bandeira PT refeita com corte diagonal ascendente (Portugal sup-esq, Brasil inf-dir)
- "Send element / Send console / Errors (0)": é a toolbar do preview do Devin, não do site — nada a remover

## Iteração 3 — deploy em produção
- Workspace transformado no clone real do repo (`git init` + `fetch` + `reset --hard origin/main`), preservando `protocolofit/`, `gabaritocafe/`, `404.html`, `ads.txt`, `robots.txt`, `.nojekyll`, `README.md`
- Commit `4287997` em `main`, push via HTTPS com GCM
- Verificado em produção: raiz com novo portfólio, /ProtocolFit e /GabaritoCafe intactos (200), assets 200
- Observação: CDN do Pages tem `max-age=600` — mudanças podem levar até ~10 min para refletir

## Iteração 4 — sincronização de edições do usuário
- Usuário editou `index.html` diretamente (10 anos, sem travessões, "concursos/vestibulares")
- Textos com `data-i18n` são sobrescritos pelo dicionário em `js/main.js` — dicionário sincronizado com as edições (pt + espelho en/es)
- Regra para o futuro: editar texto = mexer no `DICIONARIO` do `js/main.js`; o HTML é só o fallback inicial

## Próximos passos sugeridos (não bloqueantes)
- Publicar via GitHub Pages (branch `main`, raiz)
- Opcional: otimizar `img/3x4-26.jpg` para WebP/AVIF
- Opcional: capturas reais dos projetos como thumbnails em `projetos`
