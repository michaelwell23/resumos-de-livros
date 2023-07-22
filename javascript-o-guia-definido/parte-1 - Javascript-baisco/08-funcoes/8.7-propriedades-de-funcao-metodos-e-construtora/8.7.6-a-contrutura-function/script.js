// As funções normalmente são definidas com a palavra-chave function , ou na forma de uma instrução de definição de função ou de uma expressão de função literal. Mas as funções também podem ser definidas com a construtora Function()
var f = new Function('x', 'y', 'return x*y;');
var f = function (x, y) {
  return x * y;
};

var scope = 'global';
function constructFunction() {
  var scope = 'local';
  return new Function('return scope');
  // Não captura o escopo local!
}
// Esta linha retorna "global", pois a função retornada pela
// construtora Function() não usa o escopo local.
constructFunction()();
// => "global"
