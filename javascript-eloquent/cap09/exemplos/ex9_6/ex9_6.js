var match = /\d+/.exec('one two 100');
console.log(match); // → ["100"]
console.log(match.index); // → 8

console.log('one two 100'.match(/\d+/)); // → ["100", index: 8, input: "one two 100"]

var textoCitado = /'([^']*)'/;
console.log(textoCitado.exec("'ela disse adeus'")); // → ["'ela disse adeus'", "ela disse adeus", index: 0, input: "'ela disse adeus'"]

console.log(/bad(ly)?/.exec('bad')); // → ["bad", undefined]
console.log(/(\d)+/.exec('123')); // → ["123", "3"]
