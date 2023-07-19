function f(x, y, z) {
  // Primeiramente, verifica se foi passado o número correto de argumentos
  if (arguments.length != 3) {
    throw new Error(
      'function f called with ' +
        arguments.length +
        'arguments, but it expect 3 arguments.'
    );
  }
  // Agora executa a função real...
}

function max(/* ... */) {
  var max = Number.NEGATIVE_INFINITY;
  // Itera através de argumentos, procurando (e lembrando) o maior.
  for (var i = 0; i < arguments.length; i++)
    if (arguments[i] > max) max = arguments[i];
  // Retorna o maior
  return max;
}
var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000

function f(x) {
  console.log(x); // Exibe o valor inicial do argumento
  arguments[0] = null; // Mudar o elemento do array também muda x!
  console.log(x); // Agora exibe "null"
}
