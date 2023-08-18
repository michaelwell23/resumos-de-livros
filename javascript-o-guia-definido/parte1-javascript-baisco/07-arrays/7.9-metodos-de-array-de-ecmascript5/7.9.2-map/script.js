// O método map() passa cada elemento do array em que é chamado para a função especificada e retorna um array contendo os valores retornados por essa função.
a = [1, 2, 3];
b = a.map(function (x) {
  return x * x;
}); // b é [1, 4, 9]
