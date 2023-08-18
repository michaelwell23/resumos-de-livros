// Exemplo 9-24 Uma classe Set em uma função módulo
// Declara uma variável global Set e atribui a ela o valor de retorno dessa função
// O parêntese de abertura e o nome de função abaixo sugerem que a função
// vai ser chamada imediatamente após ser definida e que é o valor de
// retorno da função (e não a função em si) que está sendo atribuído.
// Note que essa é uma expressão de função, não uma instrução; portanto, o nome
// "invocation" não cria uma variável global.
var Set = (function invocation() {
  function Set() {
    // Esta função construtora é uma variável local.
    this.values = {};
    // As propriedades deste objeto contêm o conjunto
    this.n = 0;
    // Quantos valores existem no conjunto
    this.add.apply(this, arguments); // Todos os argumentos são valores a adicionar
  }
  // Agora define métodos de instância em Set.prototype.
  // Por brevidade, o código foi omitido aqui
  Set.prototype.contains = function (value) {
    // Note que chamamos v2s() e não a pesadamente prefixada Set._v2s()
    return this.values.hasOwnProperty(v2s(value));
  };
  Set.prototype.size = function () {
    return this.n;
  };
  Set.prototype.add = function () {
    /* ... */
  };
  Set.prototype.remove = function () {
    /* ... */
  };
  Set.prototype.foreach = function (f, context) {
    /* ... */
  };
  // Estas são funções auxiliares e variáveis usadas pelos métodos acima
  // Elas não fazem parte da API pública do módulo, mas ficam ocultas
  // dentro desse escopo de função; portanto, não precisamos defini-las como uma
  // propriedade de Set nem prefixá-las com sublinhados.
  function v2s(val) {
    /* ... */
  }
  function objectId(o) {
    /* ... */
  }

  return Set;
})(); // Chama a função imediatamente após defini-la.

// Cria uma única variável global para conter todos os módulos relacionados a collection
var collections;
if (!collections) collections = {};
// Agora define o módulo sets
collections.sets = (function namespace() {
  // Define as várias classes set aqui, usando variáveis e funções locais
  // ... Bastante código omitido...
  // Agora exporta nossa API retornando um objeto namespace
  return {
    // Nome da propriedade exportada : nome da variável local
    AbstractSet: AbstractSet,
    NotSet: NotSet,
    AbstractEnumerableSet: AbstractEnumerableSet,
    SingletonSet: SingletonSet,
    AbstractWritableSet: AbstractWritableSet,
    ArraySet: ArraySet,
  };
})();

// Uma técnica similar é tratar a função módulo como uma construtora, chamá-la com new e exportar valores atribuindo-os a this :
var collections;
if (!collections) collections = {};
collections.sets = new (function namespace() {
  // ... Bastante código omitido...
  // Agora exporta nossa API para o objeto this
  this.AbstractSet = AbstractSet;
  this.NotSet = NotSet;
  // E assim por diante...
  // Note que não há valor de retorno.
})();

// Como alternativa, se um objeto namespace global já foi definido, a função módulo pode simplesmente configurar propriedades desse objeto diretamente e não se preocupar em retornar nada:

var collections;
if (!collections) collections = {};
collections.sets = {};
(function namespace() {
  // ... Bastante código omitido...
  // Agora exporta nossa API pública para o objeto namespace criado anteriormente
  collections.sets.AbstractSet = AbstractSet;
  collections.sets.NotSet = NotSet; // E assim por diante...
  // Nenhuma instrução return é necessária, pois as exportações foram feitas anteriormente.
})();
