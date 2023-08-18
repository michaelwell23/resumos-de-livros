// propriedades e métodos strings
var test = 'hello world'; // uma string
var world = test.substring(test.indexOf(' ') + 1, test.length); // Usa propriedades da string

var v = 'test'; // começa com um valor de string.
v.len = 4; // configura uma propriedade nele.
var t = v.len; // agora consulta a propriedade.

var s = 'test', // ma string, um numero e um valor booleano.
  n = 1,
  b = true;

var S = new String(s); // um objeto String;
var N = new Number(n); // um onjeto NumbNr;
var B = new Boolean(b); // um objeto Boolean;

/*
  JavaScript converte objetos wrapper no valor primitivo empacotado, quando necessário; portanto, os objetos S , N e B anteriores normalmente (mas nem sempre) se comportam exatamente como os valores s , n e b . O operador de igualdade == trata um valor e seu objeto wrapper como iguais, mas é possível diferenciá-los com o operador de igualdade restrito === . O operador typeof também mostra a diferença entre um valor primitivo e seu objeto wrapper.
*/

console.log(s == S);
console.log(n == N);
console.log(b == B);

console.log(s === S);
console.log(n === N);
console.log(b === B);

console.log(typeof s, typeof S);
console.log(typeof n, typeof N);
console.log(typeof b, typeof B);
