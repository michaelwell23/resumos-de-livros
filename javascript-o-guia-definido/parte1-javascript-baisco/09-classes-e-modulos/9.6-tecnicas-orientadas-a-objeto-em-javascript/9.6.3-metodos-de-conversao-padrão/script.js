// Adiciona esses métodos no objeto protótipo Set.
extend(Set.prototype, {
  // Converte um conjunto em uma string
  toString: function () {
    var s = '{',
      i = 0;
    this.foreach(function (v) {
      s += (i++ > 0 ? ', ' : '') + v;
    });
    return s + '}';
  },
  // Como toString, mas chama toLocaleString em todos os valores
  toLocaleString: function () {
    var s = '{',
      i = 0;
    this.foreach(function (v) {
      if (i++ > 0) s += ', ';
      if (v == null) s += v;
      // null & undefined
      else s += v.toLocaleString();
      // todos os outros
    });
    return s + '}';
  },
  // Converte um conjunto em um array de valores
  toArray: function () {
    var a = [];
    this.foreach(function (v) {
      a.push(v);
    });
    return a;
  },
});

// Trata conjuntos como arrays para os propósitos da conversão em string JSON.
Set.prototype.toJSON = Set.prototype.toArray;
