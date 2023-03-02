// Vou usar um sistema onde um objeto de sequência possui dois métodos:
//
// * next(), que retorna um booleano indicando se existem mais
// elementos na sequência, e avança para o próximo
// elemento quando existem.
//
// * current(), que retorna o elemento atual, e só deve ser
// chamado após next() ter retornado true pelo menos uma vez.

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next()) break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function () {
  if (this.pos >= this.array.length - 1) return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function () {
  return this.array[this.pos];
};

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function () {
  if (this.pos >= this.to) return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function () {
  return this.pos;
};

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));

// Esta abordagem alternativa representa a sequência vazia como nula,
// e fornece dois métodos para sequências não vazias:
//
// * head() retorna o elemento no início da sequência.
//
// * rest() retorna o restante da sequência, ou null se não houver
// elementos restantes.
//
// Como um construtor JavaScript não pode retornar nulo, adicionamos um make
// função para construtores deste tipo de sequência, que constrói
// uma sequência, ou retorna nulo se a sequência resultante for
// vazio.

function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence != null; i++) {
    console.log(sequence.head());
    sequence = sequence.rest();
  }
}

function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
ArraySeq2.prototype.rest = function () {
  return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function () {
  return this.array[this.offset];
};
ArraySeq2.make = function (array, offset) {
  if (offset == null) offset = 0;
  if (offset >= array.length) return null;
  else return new ArraySeq2(array, offset);
};

function RangeSeq2(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq2.prototype.rest = function () {
  return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function () {
  return this.from;
};
RangeSeq2.make = function (from, to) {
  if (from > to) return null;
  else return new RangeSeq2(from, to);
};

logFive2(ArraySeq2.make([1, 2]));
logFive2(RangeSeq2.make(100, 1000));
