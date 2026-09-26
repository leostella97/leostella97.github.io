/* ============================================================
   GABARITO CAFÉ — scripts/validar-banco.js
   Ferramenta de desenvolvimento: carrega o banco de questões
   e confere se todas estão íntegras (ids únicos, alternativa
   correta válida, campos obrigatórios preenchidos).
   Uso:  node scripts/validar-banco.js
   ============================================================ */

// Módulos do Node usados na verificação
const fs = require('fs');               // para ler arquivos
const vm = require('vm');               // para executar o JS do banco isolado
const path = require('path');           // para montar caminhos

// Caminho do arquivo do banco de questões
const caminhoBanco = path.join(__dirname, '..', 'js', 'banco-questoes.js'); // resolve o caminho
const codigo = fs.readFileSync(caminhoBanco, 'utf8'); // lê o arquivo inteiro

// Executa o arquivo em um contexto isolado (como se fosse o navegador)
const contexto = {};                    // contexto vazio (sem DOM, sem localStorage)
vm.createContext(contexto);             // cria o contexto isolado
vm.runInContext(codigo, contexto);      // roda o arquivo dentro dele
const BancoQuestoes = vm.runInContext('BancoQuestoes', contexto); // pega a constante criada

// Contadores e verificadores
let erros = 0;                          // contador de problemas encontrados
const ids = new Set();                  // conjunto para detectar ids repetidos
const materiasValidas = new Set();      // conjunto de matérias (para listar no fim)

// Verifica cada questão
for (const q of BancoQuestoes) {        // percorre todas as questões
  const problemas = [];                 // lista de problemas desta questão
  if (!q.id) problemas.push('sem id');                           // falta id?
  else if (ids.has(q.id)) problemas.push('id repetido: ' + q.id); // id duplicado?
  else ids.add(q.id);                                           // registra o id
  if (!q.materia) problemas.push('sem matéria');                 // falta matéria?
  else materiasValidas.add(q.materia);                           // guarda a matéria
  if (!q.tema) problemas.push('sem tema');                       // falta tema?
  if (!q.banca) problemas.push('sem banca');                     // falta banca?
  if (!q.enunciado) problemas.push('sem enunciado');             // falta enunciado?
  if (!Array.isArray(q.alternativas) || q.alternativas.length < 2) problemas.push('alternativas insuficientes'); // faltam alternativas?
  if (typeof q.correta !== 'number' || q.correta < 0 || q.correta >= (q.alternativas || []).length) problemas.push('índice da correta inválido'); // correta aponta para fora da lista?
  if (!q.explicacao) problemas.push('sem explicação');           // falta explicação?
  if (!q.dica) problemas.push('sem dica (pegadinha)');           // falta dica?
  if (!q.video) problemas.push('sem busca de vídeo');            // falta vídeo?

  if (problemas.length > 0) {           // se a questão tem problemas
    erros += problemas.length;          // soma ao total de erros
    console.log('❌ ' + (q.id || '???') + ': ' + problemas.join(' | ')); // mostra o que achou
  }
}

// Relatório final
console.log('');                        // linha em branco
console.log('========== RELATÓRIO DO BANCO =========='); // cabeçalho
console.log('Total de questões: ' + BancoQuestoes.length); // quantidade
console.log('Problemas encontrados: ' + erros);            // problemas
console.log('Matérias: ' + Array.from(materiasValidas).join(', ')); // lista de matérias
console.log('========================================='); // rodapé

// Sai com código 1 se houver problemas (para uso em CI/automação)
process.exit(erros > 0 ? 1 : 0);        // código de saída do processo
