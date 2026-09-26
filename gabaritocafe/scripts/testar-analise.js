/* ============================================================
   GABARITO CAFÉ — scripts/testar-analise.js
   Ferramenta de desenvolvimento: alimenta a análise de edital
   com um edital fictício e imprime o resultado, para conferir
   se a detecção de cargos/matérias/trechos está funcionando.
   Uso:  node scripts/testar-analise.js
   ============================================================ */

// Módulos do Node usados no teste
const fs = require('fs');               // para ler arquivos
const vm = require('vm');               // para executar o JS isolado
const path = require('path');           // para montar caminhos

// Função que carrega um arquivo JS e devolve o objeto global criado
function carregar(nomeArquivo, variavel, contexto) {  // recebe caminho, nome e contexto
  const caminho = path.join(__dirname, '..', 'js', nomeArquivo); // resolve o caminho
  vm.runInContext(fs.readFileSync(caminho, 'utf8'), contexto); // roda o arquivo no contexto
  return vm.runInContext(variavel, contexto);           // devolve a variável global
}

// Contexto isolado compartilhado (o banco e a análise se enxergam)
const contexto = {};                    // contexto vazio
vm.createContext(contexto);             // cria o contexto

// Carrega o banco primeiro (a análise usa ele para saber quais matérias têm questões)
carregar('banco-questoes.js', 'BancoQuestoes', contexto); // banco de questões
const AnaliseEdital = carregar('analise-edital.js', 'AnaliseEdital', contexto); // análise

// Edital fictício, parecido com um edital real de prefeitura
const editalFicticio = `
CONCURSO PÚBLICO Nº 01/2025
PREFEITURA MUNICIPAL DE CAFEZINHOS - SP

A Prefeitura Municipal de Cafezinhos torna público o concurso para provimento de vagas.

1. DOS CARGOS
1.1 Agente Administrativo - 10 vagas - R$ 2.500,00
1.2 Técnico em Enfermagem - 5 vagas - R$ 3.200,00
1.3 Professor de Educação Básica - 8 vagas - R$ 4.000,00
1.4 Motorista - 3 vagas - R$ 2.100,00

2. DOS REQUISITOS
2.1 Escolaridade mínima conforme tabela de cargos.

3. DA REMUNERAÇÃO
3.1 A remuneração é a indicada na tabela de cargos.

4. DAS INSCRIÇÕES
4.1 As inscrições serão realizadas pela internet, de 10/02/2025 a 10/03/2025.

5. DAS PROVAS
5.1 A prova objetiva terá 40 questões de múltipla escolha.

6. CONTEÚDO PROGRAMÁTICO
LÍNGUA PORTUGUESA: interpretação de texto, concordância, crase, pontuação.
MATEMÁTICA: porcentagem, regra de três, juros, média.
RACIOCÍNIO LÓGICO: proposições, sequências, diagramas.
NOÇÕES DE INFORMÁTICA: Excel, segurança da informação, atalhos.
DIREITO CONSTITUCIONAL: art. 5º, art. 37, nacionalidade.
DIREITO ADMINISTRATIVO: atos administrativos, licitações, poderes.
LEGISLAÇÃO MUNICIPAL: Lei Orgânica do Município, Estatuto dos Servidores.
`;

// Roda a análise no edital fictício
const resultado = AnaliseEdital.analisar(editalFicticio); // análise completa

// Imprime o resultado de forma organizada
console.log('========== TESTE DA ANÁLISE DE EDITAL =========='); // cabeçalho
console.log('Título detectado: ' + resultado.titulo);            // título
console.log('');                                                  // linha em branco
console.log('Cargos detectados (' + resultado.cargos.length + '):'); // seção de cargos
resultado.cargos.forEach(c => console.log('  - ' + c));           // lista os cargos
console.log('');                                                  // linha em branco
console.log('Matérias detectadas (' + resultado.materias.length + '):'); // seção de matérias
resultado.materias.forEach(m => console.log('  - ' + m.rotulo + (m.temBanco ? ' (com questões no banco)' : ' (sem questões ainda)'))); // lista matérias
console.log('');                                                  // linha em branco
console.log('Trechos separados (' + resultado.trechos.length + '):'); // seção de trechos
resultado.trechos.forEach(t => console.log('  - ' + t.nome + ': ' + t.texto.slice(0, 90) + '...')); // lista trechos
console.log('================================================'); // rodapé

// Confere o esperado e avisa se algo não bateu
const esperadoCargos = ['Agente Administrativo', 'Técnico em Enfermagem', 'Professor de Educação Básica', 'Motorista']; // cargos esperados
const faltando = esperadoCargos.filter(c => !resultado.cargos.some(x => x.includes(c))); // cargos que não apareceram
if (faltando.length > 0) {            // se algo faltou
  console.log('⚠️ Atenção: não detectei: ' + faltando.join(', ')); // avisa
  process.exit(1);                    // sai com erro
} else {                              // se tudo certo
  console.log('✅ Análise funcionando como esperado!'); // celebra
  process.exit(0);                    // sai com sucesso
}
