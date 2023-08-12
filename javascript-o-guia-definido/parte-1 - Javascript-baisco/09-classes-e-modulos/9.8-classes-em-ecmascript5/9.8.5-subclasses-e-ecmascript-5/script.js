// StringSet: uma subclasse de Set usando ECMAScript 5
function StringSet() {
  this.set = Object.create(null); // Cria um objeto sem protótipo
  this.n = 0;
  this.add.apply(this, arguments);
}
// Note que com Object.create podemos herdar do protótipo da superclasse
// e definir métodos em uma única chamada. Como não especificamos nenhuma das
// propriedades writable, enumerable e configurable, todas elas são false por padrão.
// Métodos somente para leitura tornam mais complicado fazer subclasses dessa classe.
StringSet.prototype = Object.create(AbstractWritableSet.prototype, {
  constructor: { value: StringSet },
  contains: {
    value: function (x) {
      return x in this.set;
    },
  },
  size: {
    value: function (x) {
      return this.n;
    },
  },
  foreach: {
    value: function (f, c) {
      Object.keys(this.set).forEach(f, c);
    },
  },
  add: {
    value: function () {
      for (var i = 0; i < arguments.length; i++) {
        if (!(arguments[i] in this.set)) {
          this.set[arguments[i]] = true;
          this.n++;
        }
      }
      return this;
    },
  },
  remove: {
    value: function () {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] in this.set) {
          delete this.set[arguments[i]];
          this.n--;
        }
      }
      return this;
    },
  },
});
