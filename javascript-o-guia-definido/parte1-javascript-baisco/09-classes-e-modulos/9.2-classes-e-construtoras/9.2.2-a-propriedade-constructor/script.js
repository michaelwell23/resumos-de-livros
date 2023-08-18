var F = function () {}; // ESTE É UM OBJETO FUNÇÃO
var p = F.prototype; // ESTE É O OBJETO PROTÓTIPO ASSOCIADO A ELE.
var c = p.prototype; // ESTE É A FUNÇÃO ASSOCIADA AO PROTÓTIPO
c === F; // => VERDADEIRO: F.prototype.constructor === F para qualquer função

// Podemos resolver esse problema adicionando uma construtora no protótipo explicitamente:
Range.prototype = {
  constructor: Range, // Define explicitamente a referência de volta para a construtora
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  foreach: function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function () {
    return '(' + this.from + '...' + this.to + ')';
  },
};

// Outra técnica comum é usar o objeto protótipo predefinido com sua propriedade constructor e adicionar métodos nele, um por vez:

// Estende o objeto Range.prototype predefinido para que não sobrescrevamos
// a propriedade Range.prototype.constructor criada automaticamente.
Range.prototype.includes = function (x) {
  return this.from <= x && x <= this.to;
};
Range.prototype.foreach = function (f) {
  for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
};
Range.prototype.toString = function () {
  return '(' + this.from + '...' + this.to + ')';
};
