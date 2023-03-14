console.log(/[0123456789]/.test('ano 1992')); // → true
console.log(/[0-9]/.test('ano 1992')); // → true

var dataHora = /\d\d\/\d\d\/\d\d\d\d \d\d:\d\d/;
console.log(dataHora.test('30/01/2003 15:20')); // → true
console.log(dataHora.test('30/jan/2003 15:20')); // → false

var naoBinario = /[^01]/;
console.log(naoBinario.test('01101')); // → false
console.log(naoBinario.test('01201')); // → true
