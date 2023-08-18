// O código a seguir pega um objeto normal, adiciona propriedades para transformá-lo em um objeto semelhante a um array e depois itera pelos “elementos” do pseudoarray resultante:
var a = {}; // Começa com um objeto vazio normal
// Adiciona propriedades para torná-lo "semelhante a um array"
var i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;
// Agora itera por ele como se fosse um array real
var total = 0;
for (var j = 0; j < a.length; j++) total += a[j];

// Aqui está uma função que poderia ser usada para testar objetos que funcionam como arrays:
// Determina se o é um objeto semelhante a um array.
// Strings e funções têm propriedades length numéricas, mas são
// excluídas pelo teste de typeof. Em JavaScript do lado do cliente, os nós de texto DOM
// têm uma propriedade length numérica e talvez precisem ser excluídos
// com um teste o.nodeType != 3 adicional.
function isArrayLike(o) {
  if (
    o &&
    // o não é null, undefined, etc.
    typeof o === 'object' &&
    // o é um objeto
    isFinite(o.length) &&
    // o.length é um número finito
    o.length >= 0 &&
    // o.length é não negativo
    o.length === Math.floor(o.length) &&
    // o.length é um inteiro
    o.length < 4294967296
  )
    // o.length < 2^32
    return true;
  // Então o é semelhante a um array
  else return false;
  // Caso contrário, não é
}

var a = { 0: 'a', 1: 'b', 2: 'c', length: 3 }; // Um objeto semelhante a um array
Array.prototype.join.call(a, '+');
// => "a+b+c"
Array.prototype.slice.call(a, 0);
// => ["a","b","c"]: cópia do array verdadeiro
Array.prototype.map.call(a, function (x) {
  return x.toUpperCase();
}); // => ["A","B","C"]:

var a = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// Um objeto semelhante a um array
Array.join(a, '+');
Array.slice(a, 0);
Array.map(a, function (x) {
  return x.toUpperCase();
});

Array.join =
  Array.join ||
  function (a, sep) {
    return Array.prototype.join.call(a, sep);
  };
Array.slice =
  Array.slice ||
  function (a, from, to) {
    return Array.prototype.slice.call(a, from, to);
  };
Array.map =
  Array.map ||
  function (a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
  };
