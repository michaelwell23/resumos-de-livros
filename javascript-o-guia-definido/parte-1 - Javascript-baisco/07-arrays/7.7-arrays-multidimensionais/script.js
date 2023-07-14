// JavaScript não suporta arrays multidimensionais de verdade, mas é possível ter algo parecido, com arrays de arrays. Para acessar um valor em um array de arrays, basta usar o operador [] duas vezes.
// Cria um array multidimensional
var table = new Array(10);
for (var i = 0; i < table.length; i++) table[i] = new Array(10);
// 10 linhas da tabuada
// Cada linha tem 10 colunas
// Inicializa o array
for (var row = 0; row < table.length; row++) {
  for (col = 0; col < table[row].length; col++) {
    table[row][col] = row * col;
  }
}
// Usa o array multidimensional para calcular 5*7
var product = table[5][7];
// 35
