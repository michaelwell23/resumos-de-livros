B.prototype = inherit(A.prototype); // A subclasse herda da superclasse
B.prototype.constructor = B; // Sobrescreve a prop. construtora herdada.

// Utilitários de definição de subclasse
// Uma função simples para criar subclasses simples
function defineSubclass(
  superclass, // Construtora da superclasse
  constructor, // A construtora da nova subclasse
  methods,
  // Métodos de instância: copiados no protótipo
  statics
) {
  // Propriedades de classe: copiadas na construtora
  // Configura o objeto protótipo da subclasse
  constructor.prototype = inherit(superclass.prototype);
  constructor.prototype.constructor = constructor;
  // Copia methods e statics como faríamos para uma classe normal
  if (methods) extend(constructor.prototype, methods);
  if (statics) extend(constructor, statics);
  // Retorna a classe
  return constructor;
}
// Também podemos fazer isso como um método da construtora da superclasse
Function.prototype.extend = function (constructor, methods, statics) {
  return defineSubclass(this, constructor, methods, statics);
};

//  SingletonSet: uma subclasse de conjunto simples
// A função construtora
function SingletonSet(member) {
  this.member = member;
  // Lembra o único membro do conjunto
}
// Cria um objeto protótipo que herda do protótipo de Set.
SingletonSet.prototype = inherit(Set.prototype);
// Agora adiciona propriedades no protótipo.
// Essas propriedades anulam as propriedades de mesmo nome de Set.prototype.
extend(SingletonSet.prototype, {
  // Configura a propriedade constructor apropriadamente
  constructor: SingletonSet,
  // Esse conjunto é somente para leitura: add() e remove() lançam erros
  add: function () {
    throw 'read-only set';
  },
  remove: function () {
    throw 'read-only set';
  },
  // Um SingletonSet sempre tem tamanho 1
  size: function () {
    return 1;
  },
  // Basta chamar a função uma vez, passando o único membro.
  foreach: function (f, context) {
    f.call(context, this.member);
  },
  // O método contains() é simples: true somente para um valor
  contains: function (x) {
    return x === this.member;
  },
});
