function Set() {
  this.values = {};
  this.n = 0;
  // As propriedades desse objeto contêm o conjunto
  // Quantos valores existem no conjunto
  // Se for passado um único objeto semelhante a um array, adiciona seus elementos no
  // conjunto. Caso contrário, adiciona todos os argumentos no conjunto
  if (arguments.length == 1 && isArrayLike(arguments[0]))
    this.add.apply(this, arguments[0]);
  else if (arguments.length > 0) this.add.apply(this, arguments);
}

Complex.polar = function (r, theta) {
  return new Complex(r * Math.cos(theta), r * Math.sin(theta));
};

// E aqui está um método de fábrica para inicializar um Set a partir de um array:
Set.fromArray = function (a) {
  s = new Set();
  s.add.apply(s, a);
  // Cria um novo conjunto vazio
  // Passa elementos do array a para o método add
  return s;
  // Retorna o novo conjunto
};

// Uma construtora auxiliar para a classe Set.
function SetFromArray(a) {
  // Inicializa o novo objeto chamando Set() como função,
  // passando os elementos de a como argumentos individuais.
  Set.apply(this, a);
}
// Configura o protótipo de modo que SetFromArray crie instâncias de Set
SetFromArray.prototype = Set.prototype;
var s = new SetFromArray([1, 2, 3]);
s instanceof Set;
// => verdadeiro
