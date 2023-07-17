// O método forEach() itera por um array, chamando uma função especificada para cada elemento.
var data = [1, 2, 3, 4, 5]; // Um array para soma
// Calcula a soma dos elementos do array
var sum = 0; // Começa em 0
data.forEach(function (value) {
  sum += value;
}); // Adiciona cada value em sum
sum; // => 15
// Agora incrementa cada elemento do array
data.forEach(function (v, i, a) {
  a[i] = v + 1;
});
data; // => [2,3,4,5,6]

// O código a seguir define uma função foreach() que chama o método forEach() dentro de um bloco try. Se a função passada para foreach() lança foreach.break , o laço termina antes
function foreach(a, f, t) {
  try {
    a.forEach(f, t);
  } catch (e) {
    if (e === foreach.break) return;
    else throw e;
  }
}
foreach.break = new Error('StopIteration');
