// Array.sort() classifica os elementos de um array no local e retorna o array classificado. Quando sort() é chamado sem argumentos, ele classifica os elementos do array em ordem alfabética.
var a = new Array('banana', 'cherry', 'apple');
a.sort();
var s = a.join(', '); // s == "apple, banana, cherry"

// Para classificar elementos do array em ordem numérica e não alfabética, você poderia fazer o seguinte
var a = [33, 4, 1111, 222];
a.sort(); // Ordem alfabética: 1111, 222, 33, 4
a.sort(function (a, b) {
  // Ordem numérica: 4, 33, 222, 1111
  return a - b;
  // Retorna &lt; 0, 0 ou &gt; 0, dependendo da ordem
});
a.sort(function (a, b) {
  return b - a;
}); // Inverte a ordem numérica

// Como outro exemplo de classificação de itens de array, poderia ser feita uma classificação alfabética sem considerar letras maiúsculas e minúsculas em um array de strings, passando-se uma função de comparação que convertesse seus dois argumentos em minúsculas
a = ['ant', 'Bug', 'cat', 'Dog'];
a.sort();
// classificação considerando letras maiúsculas e minúsculas:
//['Bug','Dog','ant',cat']
a.sort(function (s, t) {
  // Classificação sem considerar letras maiúsculas e minúsculas
  var a = s.toLowerCase();
  var b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
// => ['ant','Bug','cat','Dog']
