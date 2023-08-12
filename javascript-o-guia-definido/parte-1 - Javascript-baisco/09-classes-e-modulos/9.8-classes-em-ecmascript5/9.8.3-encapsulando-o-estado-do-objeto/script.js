// Uma classe Range com extremidades fortemente encapsuladas
// Esta versão da classe Range é mutável, mas encapsula suas variáveis
// limites para manter invariante o fato de que from <= to.
function Range(from, to) {
  // Verifica o que a invariante contém quando criamos
  if (from > to) throw new Error('Range: from must be <= to');
  // Define os métodos de acesso que mantêm a invariante
  function getFrom() {
    return from;
  }
  function getTo() {
    return to;
  }
  function setFrom(f) {
    // Não permite que from seja configurado > to
    if (f <= to) from = f;
    else throw new Error('Range: from must be <= to');
  }
  function setTo(t) {
    // Não permite que to seja configurado < from
    if (t >= from) to = t;
    else throw new Error('Range: to must be >= from');
  }
  // Cria propriedades enumeráveis e não configuráveis que usam os métodos de acesso
  Object.defineProperties(this, {
    from: { get: getFrom, set: setFrom, enumerable: true, configurable: false },
    to: { get: getTo, set: setTo, enumerable: true, configurable: false },
  });
}
// O objeto protótipo não mudou em relação aos exemplos anteriores.
// Os métodos de instância leem from e to como se fossem propriedades normais.
Range.prototype = hideProps({
  constructor: Range,
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  foreach: function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function () {
    return '(' + this.from + '...' + this.to + ')';
  },
});
