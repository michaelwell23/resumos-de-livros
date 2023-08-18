// Uma hierarquia de classes Set abstratas e concretas
// Uma função conveniente que pode ser usada por qualquer método abstrato
function abstractmethod() {
  throw new Error('abstract method');
}

/*
 * A classe AbstractSet define um único método abstrato, contains().
 */
function AbstractSet() {
  throw new Error("Can't instantiate abstract classes");
}

AbstractSet.prototype.contains = abstractmethod;

/*
 * NotSet é uma subclasse concreta de AbstractSet.
 * Todos os membros desse conjunto são valores que não são membros de qualquer
 * outro conjunto. Como ele é definido em termos de outro conjunto, não
 * é gravável e, como tem infinitos membros, não é enumerável.
 * Tudo que podemos fazer com ele é testar a participação como membro.
 * Note que, para definir essa subclasse, estamos usando o método Function.prototype.
 * extend() que definimos anteriormente.
 */
var NotSet = AbstractSet.extend(
  function NotSet(set) {
    this.set = set;
  },
  {
    contains: function (x) {
      return !this.set.contains(x);
    },
    toString: function (x) {
      return '~' + this.set.toString();
    },
    equals: function (that) {
      return that instanceof NotSet && this.set.equals(that.set);
    },
  }
);
/*
 * AbstractEnumerableSet é uma subclasse abstrata de AbstractSet.
 * Ela define os métodos abstratos size() e foreach(), e então implementa
 * os métodos concretos isEmpty(), toArray(), to[Locale]String() e equals()
 * sobre eles. As subclasses que implementam contains(), size() e foreach()
 * obtêm gratuitamente esses cinco métodos concretos.
 */
var AbstractEnumerableSet = AbstractSet.extend(
  function () {
    throw new Error("Can't instantiate abstract classes");
  },
  {
    size: abstractmethod,
    foreach: abstractmethod,
    isEmpty: function () {
      return this.size() == 0;
    },
    toString: function () {
      var s = '{',
        i = 0;

      this.foreach(function (v) {
        if (i++ > 0) s += ', ';
        s += v;
      });
      return s + '}';
    },
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
    toArray: function () {
      var a = [];
      this.foreach(function (v) {
        a.push(v);
      });
      return a;
    },
    equals: function (that) {
      if (!(that instanceof AbstractEnumerableSet)) return false;
      // Se eles não têm o mesmo tamanho, não são iguais
      if (this.size() != that.size()) return false;
      // Agora verifica se todo elemento em this também está em that.
      try {
        this.foreach(function (v) {
          if (!that.contains(v)) throw false;
        });
        return true; // Todos os elementos coincidiram: os conjuntos são iguais.
      } catch (x) {
        if (x === false) return false; // Os conjuntos não são iguais
        throw x;
        // Alguma outra exceção ocorreu: relança-a.
      }
    },
  }
);
/*
 * SingletonSet é uma subclasse concreta de AbstractEnumerableSet.
 * Um conjunto singleton é um conjunto somente para leitura com um só membro.
 */
var SingletonSet = AbstractEnumerableSet.extend(
  function SingletonSet(member) {
    this.member = member;
  },
  {
    contains: function (x) {
      return x === this.member;
    },
    size: function () {
      return 1;
    },
    foreach: function (f, ctx) {
      f.call(ctx, this.member);
    },
  }
);
/*
 * AbstractWritableSet é uma subclasse abstrata de AbstractEnumerableSet.
 * Ela define os métodos abstratos add() e remove() e, então, implementa
 * os métodos concretos union(), intersection() e difference() sobre eles.
 */
var AbstractWritableSet = AbstractEnumerableSet.extend(
  function () {
    throw new Error("Can't instantiate abstract classes");
  },

  {
    add: abstractmethod,
    remove: abstractmethod,
    union: function (that) {
      var self = this;
      that.foreach(function (v) {
        self.add(v);
      });
      return this;
    },
    intersection: function (that) {
      var self = this;
      this.foreach(function (v) {
        if (!that.contains(v)) self.remove(v);
      });
      return this;
    },
    difference: function (that) {
      var self = this;
      that.foreach(function (v) {
        self.remove(v);
      });
      return this;
    },
  }
);

/*
 * Uma ArraySet é uma subclasse concreta de AbstractWritableSet.
 * Ela representa os elementos do conjunto como um array de valores e utiliza uma pesquisa
 * linear do array em seu método contains(). Como o método contains()
 * é O(n) em vez de O(1), só deve ser usado para conjuntos relativamente
 * pequenos. Note que essa implementação conta com os métodos de Array de ES5
 * indexOf() e forEach().
 */
var ArraySet = AbstractWritableSet.extend(
  function ArraySet() {
    this.values = [];
    this.add.apply(this, arguments);
  },
  {
    contains: function (v) {
      return this.values.indexOf(v) != -1;
    },
    size: function () {
      return this.values.length;
    },
    foreach: function (f, c) {
      this.values.forEach(f, c);
    },
    add: function () {
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!this.contains(arg)) this.values.push(arg);
      }
      return this;
    },
    remove: function () {
      for (var i = 0; i < arguments.length; i++) {
        var p = this.values.indexOf(arguments[i]);
        if (p == -1) continue;
        this.values.splice(p, 1);
      }
      return this;
    },
  }
);
