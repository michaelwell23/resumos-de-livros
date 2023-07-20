// Para entender como as funções podem ser tanto dados como uma sintaxe de JavaScript, considere a seguinte definição de função:
function square(x) {
  return x * x;
}

var s = square; // Agora s se refere à mesma função que square
square(4);
// => 16
s(4);
// => 16

var o = {
  square: function (x) {
    return x * x;
  },
}; // Um objeto literal
var y = o.square(16); // y é igual a 256

var a = [
  function (x) {
    return x * x;
  },
  20,
]; // Um array literal
a[0](a[1]); // => 400

// Definimos algumas funções simples aqui
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
// Aqui está uma função que recebe uma das funções anteriores
// como argumento e a chama em dois operandos
function operate(operaror, operand1, operand2) {
  return operator(operand1, operand2);
}
// Poderíamos chamar essa função como segue, para calcularmos o valor (2+3) + (4*5):
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
// Para ajudar no exemplo, implementamos as funções simples novamente,
// desta vez usando funções literais dentro de um objeto literal;
var operators = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  pow: Math.pow,
  // Também funciona para funções predefinidas
};
// Esta função recebe o nome de um operador, procura esse operador
// no objeto e, então, o chama nos operandos fornecidos. Observe
// a sintaxe usada para chamar a função operator.
function operate2(operation, operand1, operand2) {
  if (typeof operators[operation] === 'function')
    return operators[operation](operand1, operand2);
  else throw 'unknown operator';
}
// Calcula o valor ("hello" + " " + "world") como segue:
var j = operate2('add', 'hello', operate2('add', ' ', 'world'));
// Usando a função predefinida Math.pow():
var k = operate2('pow', 10, 2);
