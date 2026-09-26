/* ============================================================
   GABARITO CAFÉ — scripts/testar-analise.js
   Ferramenta de desenvolvimento: alimenta a análise de edital
   com um edital fictício (com banca, datas, valores e conteúdo
   programático) e imprime tudo o que o analisador conseguiu
   extrair, para conferir se está funcionando.
   Uso:  node scripts/testar-analise.js
   ============================================================ */

// Módulos do Node usados no teste
const fs = require('fs');               // para ler arquivos
const vm = require('vm');               // para executar o JS isolado
const path = require('path');           // para montar caminhos

// Função que carrega um arquivo JS e devolve o objeto global criado
function carregar(nomeArquivo, variavel, contexto) {  // recebe arquivo, variável e contexto
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

A Prefeitura Municipal de Cafezinhos torna público o concurso público para provimento de vagas,
que será organizado pela FUNDAÇÃO CARLOS CHAGAS (FCC), conforme as normas deste edital.

1. DOS CARGOS
1.1 Agente Administrativo - 10 vagas - R$ 2.500,00
1.2 Técnico em Enfermagem - 5 vagas - R$ 3.200,00
1.3 Professor de Educação Básica - 8 vagas - R$ 4.000,00
1.4 Motorista - 3 vagas - R$ 2.100,00
Total de 26 vagas, mais cadastro de reserva.

2. DOS REQUISITOS
2.1 Nível Médio completo para os cargos de Agente Administrativo e Técnico em Enfermagem.
2.2 Nível Superior completo para o cargo de Professor de Educação Básica.
2.3 Nível Fundamental completo para o cargo de Motorista.

3. DA REMUNERAÇÃO
3.1 A remuneração varia de R$ 2.100,00 a R$ 4.000,00, conforme o cargo.
3.2 A taxa de inscrição será de R$ 60,00 para nível médio.

4. DAS INSCRIÇÕES
4.1 As inscrições serão realizadas pela internet, de 10/02/2025 a 10/03/2025.
4.2 O pagamento da taxa deverá ocorrer até 12/03/2025.

5. DAS PROVAS
5.1 A prova objetiva será aplicada em 27/04/2025 e terá 40 questões de múltipla escolha.
5.2 O gabarito preliminar será divulgado em 29/04/2025.
5.3 O resultado final está previsto para 30/05/2025.
5.4 O prazo de validade do concurso é de 2 anos, prorrogável por igual período.

6. CONTEÚDO PROGRAMÁTICO
LÍNGUA PORTUGUESA: interpretação de texto; concordância verbal e nominal; crase; pontuação; regência.
MATEMÁTICA: porcentagem; regra de três; juros simples e compostos; média aritmética.
RACIOCÍNIO LÓGICO: proposições e negações; sequências lógicas; diagramas de conjuntos.
NOÇÕES DE INFORMÁTICA: planilhas eletrônicas (Excel); segurança da informação; atalhos do Windows.
DIREITO CONSTITUCIONAL: artigo 5º da Constituição; remédios constitucionais; nacionalidade.
DIREITO ADMINISTRATIVO: atos administrativos; poderes administrativos; licitações; improbidade.
LEGISLAÇÃO MUNICIPAL: Lei Orgânica do Município; Estatuto dos Servidores.
`;

// Roda a análise no edital fictício
const r = AnaliseEdital.analisar(editalFicticio); // análise completa

// ---------- Impressão organizada do resultado ----------
console.log('========== TESTE DA ANÁLISE DE EDITAL =========='); // cabeçalho
console.log('Título: ' + r.titulo);                              // título
console.log('Texto lido: ' + r.caracteres + ' caracteres');      // tamanho
console.log('Confiança da análise: ' + r.confianca + '/100');    // nota de confiança

console.log('\nBanca organizadora: ' + (r.banca ? r.banca.rotulo : 'não identificada')); // banca

console.log('\nNúmeros do edital:');                             // seção de números
console.log('  vagas: ' + r.numeros.vagas + ' | questões: ' + r.numeros.questoes + ' | taxa: ' + r.numeros.taxa); // números
console.log('  salário: ' + r.numeros.salarioMin + ' a ' + r.numeros.salarioMax); // faixa salarial
console.log('  validade: ' + (r.numeros.validade ? r.numeros.validade.quantidade + ' ' + r.numeros.validade.unidade : 'n/d')); // validade

console.log('\nDatas:');                                         // seção de datas
const fmt = (d) => (d ? d.toLocaleDateString('pt-BR') : 'n/d');  // formata data em pt-BR
console.log('  inscrições: ' + fmt(r.datas.inscricoesInicio) + ' a ' + fmt(r.datas.inscricoesFim)); // inscrições
console.log('  prova: ' + fmt(r.datas.prova) + ' | resultado: ' + fmt(r.datas.resultado)); // prova e resultado
console.log('  datas encontradas no texto: ' + r.datas.total);   // total de datas

console.log('\nEscolaridade: ' + (r.escolaridade.join(', ') || 'n/d')); // escolaridade

console.log('\nCargos (' + r.cargos.length + '):');              // seção de cargos
r.cargos.forEach(c => console.log('  - ' + c));                  // lista cargos

console.log('\nMatérias (' + r.materias.length + '):');          // seção de matérias
r.materias.forEach(m => {                                        // lista matérias
  const marca = m.temBanco ? ' [temos questões]' : '';           // marca as que têm banco
  const tópicos = m.topicos.length ? ' -> ' + m.topicos.slice(0, 3).join(' / ') : ''; // primeiros tópicos do edital
  console.log('  - ' + m.rotulo + marca + tópicos);              // linha da matéria
});

console.log('\nTrechos separados (' + r.trechos.length + '):');  // seção de trechos
r.trechos.forEach(t => console.log('  - ' + t.nome));            // lista os nomes das seções achadas
console.log('================================================'); // rodapé

// ---------- Conferências automáticas ----------
let erros = 0;                                                   // contador de falhas
const conferir = (nome, ok) => {                                 // função de conferência
  console.log((ok ? '✅ ' : '❌ ') + nome);                      // mostra o resultado
  if (!ok) erros += 1;                                           // soma as falhas
};
console.log('');                                                 // linha em branco
conferir('banca identificada (FCC)', !!r.banca && r.banca.rotulo === 'FCC');           // banca
conferir('4 cargos encontrados', r.cargos.length === 4);                               // cargos
conferir('7 matérias encontradas', r.materias.length === 7);                           // matérias
conferir('data da prova = 27/04/2025', !!r.datas.prova && r.datas.prova.getDate() === 27 && r.datas.prova.getMonth() === 3); // prova
conferir('total de vagas = 26', r.numeros.vagas === 26);                               // vagas
conferir('40 questões na prova', r.numeros.questoes === 40);                           // questões
conferir('validade de 2 anos', !!r.numeros.validade && r.numeros.validade.quantidade === 2); // validade
conferir('escolaridade detectada (3 níveis)', r.escolaridade.length === 3);            // escolaridade
conferir('programa com tópicos por matéria', r.programa.length >= 5);                   // programa
conferir('confiança alta (>= 80)', r.confianca >= 80);                                 // confiança

// Sai com erro se alguma conferência falhar
console.log(erros === 0 ? '\n✅ Análise completa funcionando!' : '\n❌ Falhas: ' + erros); // veredito
process.exit(erros > 0 ? 1 : 0);                                 // código de saída
