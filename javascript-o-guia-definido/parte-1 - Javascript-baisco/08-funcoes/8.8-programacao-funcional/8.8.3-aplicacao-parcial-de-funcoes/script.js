// Uma função utilitária para converter um objeto semelhante a um array (ou um sufixo dele)
// em um array verdadeiro. Utilizada a seguir para converter objetos arguments em arrays
//reais.
function array(a, n) {
  return Array.prototype.slice.call(a, n || 0);
}
// Os argumentos dessa função são passados na esquerda
function partialLeft(f /*, ...*/) {
  var args = arguments;
  // Salva o array de argumentos externo
  return function () {
    // E retorna esta função
    var a = array(args, 1); // Começa com os argumentos externos de 1 em diante.
    a = a.concat(array(arguments)); // Em seguida, adiciona todos os argumentos
    //internos.
    return f.apply(this, a);
    // Depois chama f nessa lista de argumentos.
  };
}
// Os argumentos dessa função são passados na direita
function partialRight(f /*, ...*/) {
  var args = arguments;
  // Salva o array de argumentos externos
  return function () {
    // E retorna esta função
    var a = array(arguments);
    // Começa com os argumentos internos.
    a = a.concat(array(args, 1)); // Em seguida, adiciona os args externos de 1 em
    //diante.
    return f.apply(this, a);
    // Depois chama f nessa lista de argumentos.
  };
}
// Os argumentos dessa função servem como modelo. Os valores indefinidos
// na lista de argumentos são preenchidos com valores do conjunto interno.
function partial(f /*, ... */) {
  var args = arguments;
  // Salva o array de argumentos externos
  return function () {
    var a = array(args, 1); // Começa com um array de args externos
    var i = 0,
      j = 0;
    // Itera por esses args, preenchendo os valores indefinidos do interno
    for (; i < a.length; i++) if (a[i] === undefined) a[i] = arguments[j++];
    // Agora anexa os argumentos internos restantes
    a = a.concat(array(arguments, j));
    return f.apply(this, a);
  };
}
// Aqui está uma função com três argumentos
var f = function (x, y, z) {
  return x * (y - z);
};
// Observe como essas três aplicações parciais diferem
partialLeft(f, 2)(3, 4);
// => -2: Vincula o primeiro argumento: 2 * (3 – 4)
partialRight(f, 2)(3, 4);
// => 6: Vincula o último argumento: 3 * (4 – 2)
partial(f, undefined, 2)(3, 4);
// => -6: Vincula o argumento do meio: 3 * (2 – 4)

// Essas funções de aplicação parcial nos permitem definir facilmente funções interessantes a partir de funções que já definimos. Aqui estão alguns exemplos:
var increment = partialLeft(sum, 1);
var cuberoot = partialRight(Math.pow, 1 / 3);
String.prototype.first = partial(String.prototype.charAt, 0);
String.prototype.last = partial(String.prototype.substr, -1, 1);

var not = partialLeft(compose, function (x) {
  return !x;
});
var even = function (x) {
  return x % 2 === 0;
};
var odd = not(even);
var isNumber = not(isNaN);

// Também podemos usar composição e aplicação parcial para refazer nossos cálculos de média e desvio padrão no estilo funcional extremo
var data = [1, 1, 3, 5, 5]; // Nossos dados
var sum = function (x, y) {
  return x + y;
}; // Duas funções elementares
var product = function (x, y) {
  return x * y;
};
var neg = partial(product, -1); // Define algumas outras
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, 0.5);
var reciprocal = partial(Math.pow, undefined, -1);

// Agora calcula a média e o desvio padrão. Todas essas são chamadas de
// função sem operadores e começa a ficar parecido com código Lisp!
var mean = product(reduce(data, sum), reciprocal(data.length));
var stddev = sqrt(
  product(
    reduce(map(data, compose(square, partial(sum, neg(mean)))), sum),
    reciprocal(sum(data.length, -1))
  )
);
