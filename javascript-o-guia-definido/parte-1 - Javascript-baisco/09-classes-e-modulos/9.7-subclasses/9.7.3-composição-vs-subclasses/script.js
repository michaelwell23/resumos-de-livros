//  Composição de conjuntos em vez de subclasses
/*
 * Um FilteredSet empacota um objeto conjunto especificado e aplica um filtro especificado
 * nos valores passados para seu método add(). Todos os outros métodos de conjunto básicos
 * simplesmente encaminham para a instância do conjunto empacotado.
 */
var FilteredSet = Set.extend(
  function FilteredSet(set, filter) {
    // A construtora
    this.set = set;
    this.filter = filter;
  },
  {
    // Os métodos de instância
    add: function () {
      // Se temos um filtro, o aplicamos
      if (this.filter) {
        for (var i = 0; i < arguments.length; i++) {
          var v = arguments[i];
          if (!this.filter(v))
            throw new Error('FilteredSet: value ' + v + ' rejected by filter');
        }
      }
      // Agora encaminha o método add() para this.set.add()
      this.set.add.apply(this.set, arguments);
      return this;
    },
    // O restante dos métodos apenas encaminha para this.set e não faz mais nada.
    remove: function () {
      this.set.remove.apply(this.set, arguments);
      return this;
    },
    contains: function (v) {
      return this.set.contains(v);
    },
    size: function () {
      return this.set.size();
    },
    foreach: function (f, c) {
      this.set.foreach(f, c);
    },
  }
);

var s = new FilteredSet(new Set(), function (x) {
  return x !== null;
});
var t = new FilteredSet(s, {
  function(x) {
    return !(x instanceof Set);
  },
});
