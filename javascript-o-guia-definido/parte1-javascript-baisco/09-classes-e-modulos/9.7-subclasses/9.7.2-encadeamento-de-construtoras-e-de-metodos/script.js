//  Encadeamento de construtoras e de métodos da subclasse na superclasse
/*
 * NonNullSet é uma subclasse de Set que não permite null e undefined
 * como membros do conjunto.
 */
function NonNullSet() {
  // Apenas encadeia em nossa superclasse.
  // Chama a construtora da superclasse como uma função normal para inicializar
  // o objeto que foi criado por essa chamada de construtora.
  Set.apply(this, arguments);
}
// Torna NonNullSet uma subclasse de Set:
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;
// Para excluir null e undefined, precisamos apenas anular o método add()
NonNullSet.prototype.add = function () {
  // Procura argumentos null ou undefined
  for (var i = 0; i < arguments.length; i++)
    if (arguments[i] == null)
      throw new Error("Can't add null or undefined to a NonNullSet");
  // Encadeia para a superclasse para fazer a inserção real
  return Set.prototype.add.apply(this, arguments);
};

// Define uma classe conjunto que contém somente strings
var StringSet = filteredSetSubclass(Set, function (x) {
  return typeof x === 'string';
});
// Define uma classe conjunto que não permite null, undefined nem funções
var MySet = filteredSetSubclass(NonNullSet, function (x) {
  return typeof x !== 'function';
});

//  Uma fábrica de classe e encadeamento de métodos
/*
 * Esta função retorna uma subclasse da classe Set especificada e anula
 * o método add() dessa classe para aplicar o filtro especificado.
 */
function filteredSetSubclass(superclass, filter) {
  var constructor = function () {
    // A construtora da subclasse
    superclass.apply(this, arguments);
    // Encadeia para a superclasse
  };
  var proto = (constructor.prototype = inherit(superclass.prototype));
  proto.constructor = constructor;
  proto.add = function () {
    // Aplica o filtro em todos os argumentos antes de adicionar algo
    for (var i = 0; i < arguments.length; i++) {
      var v = arguments[i];
      if (!filter(v)) throw 'value ' + v + ' rejected by filter';
    }
    // Encadeia em nossa implementação da superclasse add
    superclass.prototype.add.apply(this, arguments);
  };
  return constructor;
}

var NonNullSet = (function () {
  // Define e chama function
  var superclass = Set;
  // Especifica a superclasse somente uma vez.
  return superclass.extend(
    function () {
      superclass.apply(this, arguments);
    },
    // a construtora
    {
      // os métodos
      add: function () {
        // Procura argumentos null ou undefined
        for (var i = 0; i < arguments.length; i++)
          if (arguments[i] == null)
            throw new Error("Can't add null or undefined");
        // Encadeia para a superclasse para fazer a inserção real
        return superclass.prototype.add.apply(this, arguments);
      },
    }
  );
})();
