// Este exemplo demonstra a maioria dos recursos de ECMAScript 5 relacionados às propriedades e também utiliza uma técnica de codificação modular que vai ser discutida na próxima seção.

// Exemplo 9-23 Utilitários de propriedades de ECMAScript 5
/*
 * Define um método properties() em Object.prototype que retorna um
 * objeto representando as propriedades nomeadas do objeto no qual
 * é chamado (ou representando todas as propriedades próprias do objeto, se
 * for chamado sem argumentos). O objeto retornado define quatro métodos
 * úteis: toString(), descriptors(), hide() e show().
 */
(function namespace() {
  // Empacota tudo em um escopo de função privado
  // Esta é a função que será um método de todos os objetos
  function properties() {
    var names;
    // Um array de nomes de propriedade
    if (arguments.length == 0)
      // Todas as propriedade próprias de this
      names = Object.getOwnPropertyNames(this);
    else if (arguments.length == 1 && Array.isArray(arguments[0]))
      names = arguments[0]; // Ou um array de nomes
    // Ou os nomes que estão na lista de argumentos
    else names = Array.prototype.splice.call(arguments, 0);
    // Retorna um novo objeto Properties representando as propriedades nomeadas
    return new Properties(this, names);
  }
  // A transforma uma nova propriedade não enumerável de Object.prototype.
  // Esse é o único valor exportado desse escopo de função privado.
  Object.defineProperty(Object.prototype, 'properties', {
    value: properties,
    enumerable: false,
    writable: true,
    configurable: true,
  });
  // Esta função construtora é chamada pela função properties() anterior.
  // A classe Properties representa um conjunto de propriedades de um objeto.
  function Properties(o, names) {
    this.o = o;
    // O objeto ao qual as propriedades pertencem
    this.names = names;
    // Os nomes das propriedades
  }
  // Transforma as propriedades representadas por esse objeto em não enumeráveis
  Properties.prototype.hide = function () {
    var o = this.o,
      hidden = { enumerable: false };
    this.names.forEach(function (n) {
      if (o.hasOwnProperty(n)) Object.defineProperty(o, n, hidden);
    });
    return this;
  };
  // Transforma essas propriedades em somente para leitura e não configuráveis
  Properties.prototype.freeze = function () {
    var o = this.o,
      frozen = { writable: false, configurable: false };
    this.names.forEach(function (n) {
      if (o.hasOwnProperty(n)) Object.defineProperty(o, n, frozen);
    });
    return this;
  };
  // Retorna um objeto que mapeia nomes em descritores para essas propriedades.
  // Usa this para copiar as propriedades junto com seus atributos:
  // Object.defineProperties(dest, src.properties().descriptors());
  Properties.prototype.descriptors = function () {
    var o = this.o,
      desc = {};
    this.names.forEach(function (n) {
      if (!o.hasOwnProperty(n)) return;
      desc[n] = Object.getOwnPropertyDescriptor(o, n);
    });
    return desc;
  };
  // Retorna uma lista de propriedades perfeitamente formatada, contendo
  // o nome, valor e atributos. Usa o termo "permanent" com o significado de
  // não configurável, "readonly" com o significado de não gravável e "hidden"
  // com o significado de não enumerável. As propriedades enumeráveis, graváveis e
  // configuráveis normais não têm atributos listados.
  Properties.prototype.toString = function () {
    var o = this.o;
    // Usado na função aninhada a seguir
    var lines = this.names.map(nameToString);
    return '{\n ' + lines.join(',\n ') + '\n}';
    function nameToString(n) {
      var s = '',
        desc = Object.getOwnPropertyDescriptor(o, n);
      if (!desc) return 'nonexistent ' + n + ': undefined';
      if (!desc.configurable) s += 'permanent ';
      if ((desc.get && !desc.set) || !desc.writable) s += 'readonly ';
      if (!desc.enumerable) s += 'hidden ';
      if (desc.get || desc.set) s += 'accessor ' + n;
      else
        s +=
          n +
          ': ' +
          (typeof desc.value === 'function' ? 'function' : desc.value);
      return s;
    }
  };
  // Por fim, torna não enumeráveis os métodos de instância do objeto
  // protótipo anterior, usando os métodos que definimos aqui.
  Properties.prototype.properties().hide();
})();
// Invoca a função circundante assim que terminamos de defini-la.
