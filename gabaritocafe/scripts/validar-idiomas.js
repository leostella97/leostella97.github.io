/* ============================================================
   GABARITO CAFÉ — scripts/validar-idiomas.js
   Ferramenta de desenvolvimento: confere se as traduções estão
   completas e coerentes:
     1. todas as chaves existem em pt, en e es;
     2. os placeholders ({nome}, {n}...) são iguais em todos;
     3. toda chave usada no HTML e nos JS realmente existe;
     4. as listas de frases e dicas têm o mesmo tamanho por idioma.
   Uso:  node scripts/validar-idiomas.js
   ============================================================ */

// Módulos do Node usados na verificação
const fs = require('fs');               // ler arquivos
const vm = require('vm');               // executar o JS isolado
const path = require('path');           // montar caminhos

// Raiz do projeto (uma pasta acima de scripts/)
const raiz = path.join(__dirname, '..');

// Contexto isolado para carregar os arquivos do app
// (o idioma.js se inicializa sozinho, então simulamos o navegador aqui)
const memoria = {};                     // "localStorage" falso em memória
const contexto = {
  console,                              // mantém o console para os avisos
  localStorage: {                       // localStorage falso
    getItem: (k) => (k in memoria ? memoria[k] : null), // lê da memória
    setItem: (k, v) => { memoria[k] = String(v); },     // grava na memória
    removeItem: (k) => { delete memoria[k]; }           // apaga da memória
  },
  document: {                           // document falso (só o que o idioma usa)
    documentElement: { lang: '', setAttribute: () => {} }, // <html>
    querySelectorAll: () => [],         // nenhum elemento encontrado
    getElementById: () => null,         // nenhum elemento encontrado
    addEventListener: () => {}          // ignora eventos
  }
};
vm.createContext(contexto);             // cria o contexto

// Carrega armazenamento, idioma e dados (a ordem importa)
vm.runInContext(fs.readFileSync(path.join(raiz, 'js', 'armazenamento.js'), 'utf8'), contexto); // armazenamento.js
vm.runInContext(fs.readFileSync(path.join(raiz, 'js', 'idioma.js'), 'utf8'), contexto);        // idioma.js
vm.runInContext(fs.readFileSync(path.join(raiz, 'js', 'dados-temas.js'), 'utf8'), contexto);   // dados-temas.js
const Idioma = vm.runInContext('Idioma', contexto);         // objeto de idiomas
const DadosTemas = vm.runInContext('DadosTemas', contexto); // dados de temas

// Dicionário e lista de idiomas
const dic = Idioma.DICIONARIO;                              // todos os dicionários
const idiomas = Object.keys(dic);                           // ['pt','en','es']
const base = Object.keys(dic.pt);                           // chaves de referência (português)

let erros = 0;                                              // contador de problemas
const problemas = (msg) => { erros += 1; console.log('❌ ' + msg); }; // registra um problema

// ---------- 1) Todas as chaves existem em todos os idiomas ----------
console.log('========== VALIDAÇÃO DOS IDIOMAS =========='); // cabeçalho
for (const idioma of idiomas) {                             // percorre pt, en e es
  const chaves = Object.keys(dic[idioma]);                  // chaves daquele idioma
  const faltando = base.filter(k => !chaves.includes(k));   // o que falta
  const sobrando = chaves.filter(k => !base.includes(k));   // o que sobra (aviso)
  if (faltando.length > 0) problemas(idioma + ' sem as chaves: ' + faltando.join(', ')); // reporta
  if (sobrando.length > 0) console.log('⚠️  ' + idioma + ' tem chaves extras: ' + sobrando.join(', ')); // avisa
}
console.log('Chaves por idioma: ' + idiomas.map(i => i + '=' + Object.keys(dic[i]).length).join(' ')); // resumo

// ---------- 2) Placeholders iguais em todos os idiomas ----------
// Extrai os nomes entre chaves de um texto: "oi {nome}" -> ['nome']
const placeholders = (texto) => (String(texto).match(/\{(\w+)\}/g) || []).map(p => p.slice(1, -1)).sort().join(',');
for (const chave of base) {                                 // percorre as chaves de referência
  const esperado = placeholders(dic.pt[chave]);             // placeholders do português
  for (const idioma of idiomas) {                           // compara com os outros idiomas
    const atual = placeholders(dic[idioma][chave]);         // placeholders do idioma
    if (atual !== esperado) problemas('placeholders diferentes em "' + chave + '" (' + idioma + '): esperado [' + esperado + '], veio [' + atual + ']'); // reporta
  }
}

// ---------- 3) Chaves usadas no HTML e nos JS existem ----------
const usadas = new Set();                                   // conjunto de chaves usadas
// No HTML: data-i18n, data-i18n-ph e data-i18n-title
const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8'); // lê o index.html
for (const m of html.matchAll(/data-i18n(?:-ph|-title)?="([^"]+)"/g)) usadas.add(m[1]); // captura as chaves
// Nos JS: chamadas T('chave')
const pastaJs = path.join(raiz, 'js');                      // pasta dos scripts
for (const arquivo of fs.readdirSync(pastaJs)) {            // percorre os arquivos
  if (!arquivo.endsWith('.js')) continue;                   // só arquivos .js
  const conteudo = fs.readFileSync(path.join(pastaJs, arquivo), 'utf8'); // lê o arquivo
  // Remove comentários para não confundir exemplos de código com uso real
  const semComentarios = conteudo.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, ''); // limpa
  for (const m of semComentarios.matchAll(/\bT\('([a-z0-9_]+)'/g)) usadas.add(m[1]); // captura T('chave')
}
for (const chave of usadas) {                               // confere cada chave usada
  if (!dic.pt[chave]) problemas('chave usada no código mas inexistente no dicionário: ' + chave); // reporta
}
console.log('Chaves usadas no código: ' + usadas.size);     // resumo

// ---------- 4) Frases e dicas com o mesmo tamanho por idioma ----------
for (const campo of ['frasesMotivacionais', 'dicasRapidas']) { // percorre os dois acervos
  const obj = DadosTemas[campo];                            // objeto por idioma
  const tamanhos = idiomas.map(i => i + '=' + (obj[i] ? obj[i].length : 0)); // tamanho de cada idioma
  const valores = tamanhos.map(t => Number(t.split('=')[1])); // só os números
  if (new Set(valores).size !== 1) problemas(campo + ' com tamanhos diferentes: ' + tamanhos.join(' ')); // reporta
  else console.log('✅ ' + campo + ': ' + tamanhos.join(' ')); // ok
}

// ---------- 5) Dicas importantes: mesma estrutura em todos os idiomas ----------
const dicas = DadosTemas.dicasImportantes;                  // dicas por idioma
const idiomasDicas = Object.keys(dicas);                    // idiomas disponíveis
// Resume a estrutura (quantidade de dicas por categoria) para comparar
const estrutura = (lista) => lista.map(c => c.dicas.length).join('-'); // ex.: "4-4-4-4"
console.log('dicasImportantes: ' + idiomasDicas.map(i => i + '=' + dicas[i].length + ' categorias (' + estrutura(dicas[i]) + ')').join(' ')); // resumo
for (const idioma of idiomasDicas) {                        // percorre os idiomas
  if (estrutura(dicas[idioma]) !== estrutura(dicas.pt)) problemas('dicasImportantes com estrutura diferente em ' + idioma + ': ' + estrutura(dicas[idioma])); // compara
  dicas[idioma].forEach((categoria, ci) => {                // percorre as categorias
    if (!categoria.icone || !categoria.titulo) problemas('dicasImportantes ' + idioma + ' categoria ' + ci + ' sem ícone ou título'); // campos obrigatórios
    categoria.dicas.forEach((d, di) => {                    // percorre as dicas
      if (!d.titulo || !d.texto) problemas('dicasImportantes ' + idioma + ' dica ' + ci + '.' + di + ' incompleta'); // campos obrigatórios
    });
  });
}

// ---------- Resultado final ----------
console.log('=========================================='); // rodapé
console.log(erros === 0 ? '✅ Tudo certo! Traduções completas e coerentes.' : '❌ Problemas encontrados: ' + erros); // veredito
process.exit(erros > 0 ? 1 : 0);                            // código de saída
