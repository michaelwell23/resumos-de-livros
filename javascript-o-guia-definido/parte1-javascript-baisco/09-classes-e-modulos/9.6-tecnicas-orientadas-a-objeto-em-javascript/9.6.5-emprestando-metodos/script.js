Range.prototype.equals = generic.equals;

var generic = {
  // Retorna uma string que contém o nome da função construtora
  // se estiver disponível e os nomes e valores de todas as propriedades
  // não herdadas que não são funções.
  toString: function () {
    var s = '[';
    // Se o objeto tem uma construtora e a construtora tem um nome,
    // usa esse nome de classe como parte da string retornada. Note que
    // a propriedade name de funções não é padronizada e não é suportada
    // em qualquer lugar.
    if (this.constructor && this.constructor.name)
      s += this.constructor.name + ': ';
    // Agora enumera todas as propriedades não herdadas que não são funções
    var n = 0;
    for (var name in this) {
      if (!this.hasOwnProperty(name)) continue;
      // pula props herdadas
      var value = this[name];
      if (typeof value === 'function') continue;
      // pula métodos
      if (n++) s += ', ';
      s += name + '=' + value;
    }
    return s + ']';
  },
  // Testa a igualdade comparando as construtoras e as propriedades de instância
  // de this e that. Só funciona para classes cujas propriedades de instância são
  // valores primitivos que podem ser comparados com ===.
  // Como um caso especial, ignora a propriedade especial adicionada pela classe Set.
  equals: function (that) {
    if (that == null) return false;
    if (this.constructor !== that.constructor) return false;
    for (var name in this) {
      if (name === '|**objectid**|') continue;
      // pula prop especial.
      if (!this.hasOwnProperty(name)) continue;
      // pula herdadas
      if (this[name] !== that[name]) return false; // compara valores
    }
    return true; // Se todas as propriedades coincidiram, os objetos são iguais.
  },
};
