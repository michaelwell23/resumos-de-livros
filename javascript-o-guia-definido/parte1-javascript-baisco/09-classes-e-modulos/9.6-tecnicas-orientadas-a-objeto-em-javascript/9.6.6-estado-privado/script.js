//  Uma classe Range com pontos extremos encapsulados fracamente
function Range(from, to) {
  // Não armazena os pontos extremos como propriedades desse objeto. Em vez disso
  // define funções de acesso que retornam os valores de ponto extremo.
  // Esses valores são armazenados na closure.
  this.from = function () {
    return from;
  };
  this.to = function () {
    return to;
  };
}
// Os métodos do protótipo não podem ver os pontos extremos diretamente: eles precisam
// chamar os métodos de acesso exatamente como todos os demais.
Range.prototype = {
  constructor: Range,
  includes: function (x) {
    return this.from() <= x && x <= this.to();
  },
  foreach: function (f) {
    for (var x = Math.ceil(this.from()), max = this.to(); x <= max; x++) f(x);
  },
  toString: function () {
    return '(' + this.from() + '...' + this.to() + ')';
  },
};

var r = new Range(1, 5); // Um intervalo "imutável"
r.from = function () {
  return 0;
}; // Muda pela substituição do método
