var f = function (x) {
  return x + 1;
}; // Expressão atribuída a uma variável

function f(x) {
  return x + 1;
}
// A instrução inclui nome de variável: Uma instrução de declaração de função tem a seguinte sintaxe:
// function nomefun([arg1 [, arg2 [..., argn]]]) {
// instruções
// }

function hypotenuse(x, y) {
  return Math.sqrt(x * x + y * y); // return está documentado na próxima seção
}
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Uma função recursiva
}
