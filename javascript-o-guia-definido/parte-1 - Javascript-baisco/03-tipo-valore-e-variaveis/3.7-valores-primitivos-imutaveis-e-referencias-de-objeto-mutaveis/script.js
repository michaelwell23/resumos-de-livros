var s = ' hello'; // começa com um texto em letras minúsculas;
s.toUpperCase(); // Retorna o valor da variável em letras maísculas
console.log(s); // A string original não mudou

// Objetos são mutáveis
var o = { x: 1 }; // começa com um objeto
o.x = 2; // muda-o, alterando o valor de uma propriedade
o.y = 3; // mada-o novamente, adicionando uma nova propriedade

var a = [1, 2, 3]; // Os arrays também são mutáveis
a[0] = 0; // Muda o valor de um elemento do array
a[3] = 4; // adiciona um novo elemento no array

var O = { x: 1 }, // dois objetos com a mesma propriedade
  p = { x: 1 };
o === p; // falso: objetos distintos nunca são iguais
var a = [], //dois arrays vazios diferentes
  b = [];
a === b; // falso: arrays diferente nunca são iguais

// tipos de referencia
var a = []; // a variável a se refere a um array vazio
var b = a; // agora b se refere ao mesmo array
b[0] = 1; // Muda o array referido pela variável b.
console.log(a[0]); // => 1 a mudança também é visível por meio da variável a.
console.log(a === b); // => verdadeiro a e b se referem ao mesmo objeto, portanto, são iguais;

// fazendo uma cópia do objeto
var array = ['a', 'b', 'c']; // um array que queremos copiar
var array2 = []; // um array para adicionar o array que queremos copiar

for (var i = 0; i < array.length; i++) {
  // Para cada índice de [] a
  array2[i] = array[i]; // copia um elemento de a em b
}

// Comparando dois arrays

function equalArrays(a, b) {
  if (a.length != b.length) return false; // Arrays de tamanho diferente não são iguais

  for (
    var i = 0;
    i < a.length;
    i++ // Itera por todos os elementos
  )
    if (a[i] !== b[i]) return false; // Se algum difere, os arrays não são iguais
  return true; // Caso contrário, eles são iguais
}
