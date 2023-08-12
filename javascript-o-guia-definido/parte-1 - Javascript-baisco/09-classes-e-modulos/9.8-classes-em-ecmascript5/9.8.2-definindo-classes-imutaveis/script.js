// Uma classe imutável com propriedades e métodos somente para leitura

// Esta função funciona com ou sem 'new': uma função construtora e fábrica
function Range(from, to) {
  // Estes são descritores para as propriedades somente para leitura from e to.
  var props = {
    from: {
      value: from,
      enumerable: true,
      writable: false,
      configurable: false,
    },
    to: { value: to, enumerable: true, writable: false, configurable: false },
  };
  if (this instanceof Range)
    // Se for chamada como uma construtora
    Object.defineProperties(this, props); // Define as propriedades
  // Caso contrário, como uma fábrica
  else return Object.create(Range.prototype, props); // Cria e retorna um novo objeto Range com props
}
// Se adicionamos propriedades no objeto Range.prototype da mesma maneira,
// então podemos configurar atributos nessas propriedades. Como não especificamos
// enumerable, writable nem configurable, todos eles são false por padrão.

Object.defineProperties(Range.prototype, {
  includes: {
    value: function (x) {
      return this.from <= x && x <= this.to;
    },
  },
  foreach: {
    value: function (f) {
      for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
  },
  toString: {
    value: function () {
      return '(' + this.from + '...' + this.to + ')';
    },
  },
});

// Utilitários descritores de propriedade
// Transforma as propriedades nomeadas (ou todas) de o em não graváveis e não configuráveis.
function freezeProps(o) {
  var props =
    arguments.length == 1
      ? // Se 1 arg
        Object.getOwnPropertyNames(o)
      : // usa todas as props
        Array.prototype.splice.call(arguments, 1);
  // senão, as props nomeadas
  props.forEach(function (n) {
    // Transforma cada uma em somente para leitura e permanente
    // Ignora propriedades não configuráveis
    if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
    Object.defineProperty(o, n, { writable: false, configurable: false });
  });
  return o;
  // Para que possamos continuar usando
}
// Transforma as propriedades nomeadas (ou todas) de o em não enumeráveis, se forem
// configuráveis.
function hideProps(o) {
  var props =
    arguments.length == 1
      ? // Se 1 arg
        Object.getOwnPropertyNames(o)
      : // usa todas as props
        Array.prototype.splice.call(arguments, 1);
  // senão, as props nomeadas
  props.forEach(function (n) {
    // Oculta cada uma do laço for/in
    // Ignora propriedades não configuráveis
    if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
    Object.defineProperty(o, n, { enumerable: false });
  });
  return o;
}

// Uma classe imutável mais simples
function Range(from, to) {
  this.from = from;
  this.to = to;
  freezeProps(this);
}
// Construtora para uma classe Range imutável
// Torna as propriedades imutáveis
Range.prototype = hideProps({
  // Define prototype com propriedades não enumeráveis
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
