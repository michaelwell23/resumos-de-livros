// A classe Range sobrescreveu sua propriedade constructor. Portanto, a adiciona agora.
Range.prototype.constructor = Range;
// Um Range não é igual a nada que não seja um intervalo.
// Dois intervalos são iguais se, e somente se, seus pontos extremos são iguais.
Range.prototype.equals = function (that) {
  if (that == null) return false; // Rejeita null e undefined
  if (that.constructor !== Range) return false; // Rejeita o que não é intervalo
  // Agora retorna true se, e somente se, os dois pontos extremos são iguais.
  return this.from == that.from && this.to == that.to;
};

Set.prototype.equals = function (that) {
  // Atalho para caso trivial
  if (this === that) return true;

  // Se o objeto that não é um conjunto, não é igual a this.
  // Usamos instanceof para permitir qualquer subclasse de Set.
  // Poderíamos moderar esse teste se quiséssemos uma verdadeira tipagem do pato.
  // Ou poderíamos torná-lo mais forte para verificar this.constructor == that.
  // constructor
  // Note que instanceof corretamente rejeita valores null e undefined
  if (!(that instanceof Set)) return false;

  // Se dois conjuntos não têm o mesmo tamanho, eles não são iguais
  if (this.size() != that.size()) return false;
  // Agora verifica se todo elemento em this também está em that.
  // Usa uma exceção para sair do foreach, caso os conjuntos não sejam iguais.
  try {
    this.foreach(function (v) {
      if (!that.contains(v)) throw false;
    });
    return true; // Todos os elementos coincidiram: os conjuntos são iguais.
  } catch (x) {
    if (x === false) return false; // Um elemento em this não está em that.
    throw x;
    // Alguma outra exceção: relança-a.
  }
};

// compareTO
Range.prototype.compareTo = function (that) {
  return this.from - that.from;
};

// Ordena intervalos pelo limite inferior ou pelo limite superior, caso os limites
// inferiores sejam iguais.
// Lança um erro se for passado um valor que não seja Range.
// Retorna 0 se, e somente se, this.equals(that).
Range.prototype.compareTo = function (that) {
  if (!(that instanceof Range))
    throw new Error("Can't compare a Range with " + that);
  var diff = this.from - that.from;
  // Compara os limites inferiores
  if (diff == 0) diff = this.to - that.to;
  // Se são iguais, compara os limites
  // superiores
  return diff;
};

ranges.sort(function (a, b) {
  return a.compareTo(b);
});

ange.byLowerBound = function (a, b) {
  return a.compareTo(b);
};

ranges.sort(Range.byLowerBound);
