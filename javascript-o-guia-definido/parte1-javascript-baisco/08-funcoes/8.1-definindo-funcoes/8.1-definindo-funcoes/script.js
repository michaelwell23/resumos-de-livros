// As funções são definidas com a palavra-chave function , que pode ser usada em uma expressão de definição de função (Seção 4.3) ou em uma instrução de declaração de função (Seção 5.3.2).
// Imprime o nome e o valor de cada propriedade de o. Retorna undefined.
function printprops(o) {
  for (var p in o) console.log(p + ': ' + o[p] + '\n');
}
// Calcula a distância entre pontos cartesianos (x1,y1) e (x2,y2).
function distance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
// Uma função recursiva (que chama a si mesma) que calcula fatoriais
// Lembre-se de que x! é o produto de x e todos os inteiros positivos menores do que ele.
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

// Esta expressão de função define uma função que eleva seu argumento ao quadrado.
// Note que a atribuímos a uma variável
var square = function (x) {
  return x * x;
};
// As expressões de função podem incluir nomes, o que é útil para a recursividade.
var f = function fact(x) {
  if (x <= 1) return 1;
  else return x * fact(x - 1);
};
// As expressões de função também podem ser usadas como argumentos de outras funções:
data.sort(function (a, b) {
  return a - b;
});
// Às vezes as expressões de função são definidas e chamadas imediatamente:
var tensquared = (function (x) {
  return x * x;
})(10);
