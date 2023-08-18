// Uma função de alta ordem é uma função que opera sobre funções, recebendo uma ou mais funções como argumentos e retornando uma nova função. Aqui está um exemplo:
// Esta função de alta ordem retorna uma nova função que passa seus
// argumentos para f e retorna a negação lógica do valor de retorno de f;
function not(f) {
  return function () {
    // Retorna uma nova função
    var result = f.apply(this, arguments); // que chama f
    return !result;
    // e nega seu resultado.
  };
}
var even = function (x) {
  return x % 2 === 0; // Uma função para determinar se um número é par
};
var odd = not(even); // Uma nova função que faz o oposto
[1, 1, 3, 5, 5].every(odd); // => verdadeiro: todo elemento do array é ímpar

// Retorna uma função que espera um argumento de array e aplica f em
// cada elemento, retornando o array de valores de retorno.
// Compare isso com a função map() anterior.
function mapper(f) {
  return function (a) {
    return map(a, f);
  };
}
var increment = function (x) {
  return x + 1;
};
var incrementer = mapper(increment);
incrementer([1, 2, 3]); // => [2,3,4]

// Aqui está outro exemplo, mais geral, que recebe duas funções f e g e retorna uma nova função que calcula f(g()) :
// Retorna uma nova função que calcula f(g(...)).
// A função retornada h passa todos os seus argumentos para g, então passa
// o valor de retorno de g para f e, em seguida, retorna o valor de retorno de f.
// Tanto f como g são chamadas com o mesmo valor de this com que h foi chamada.
function compose(f, g) {
  return function () {
    // Usamos a chamada de f porque estamos passando um único valor e
    // aplicamos em g porque estamos passando um array de valores.
    return f.call(this, g.apply(this, arguments));
  };
}
var square = function (x) {
  return x * x;
};
var sum = function (x, y) {
  return x + y;
};
var squareofsum = compose(square, sum);
squareofsum(2, 3);
// => 25
