var empty = {};
console.log(empty.toString); // → function toString(){…}
console.log(empty.toString()); // → [object Object]

// ====================

console.log(Object.getPrototypeOf({}) == Object.prototype); // → true
console.log(Object.getPrototypeOf(Object.prototype)); // → null

// ====================

console.log(Object.getPrototypeOf(isNaN) == Function.prototype); // → true
console.log(Object.getPrototypeOf([]) == Array.prototype); // → true

// ====================

var protoCoelho = {
  fala: function (linha) {
    console.log('O coelho ' + this.tipo + " fala '" + linha + "'");
  },
};

var coelhoAssassino = Object.create(protoCoelho);
coelhoAssassino.tipo = 'assassino';
coelhoAssassino.fala('SKREEEE!'); // → O coelho assassino fala 'SKREEEE!'
