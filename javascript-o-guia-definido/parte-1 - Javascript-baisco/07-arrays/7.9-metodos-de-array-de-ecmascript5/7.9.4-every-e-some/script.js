// Os métodos every() e some() são predicados de array: eles aplicam uma função de predicado especificada nos elementos do array e, então, retornam true ou false. O método every() é como o quantificador matemático “para todo” ∀: ele retorna true se, e somente se, sua função de predicado retorna true para todos os elementos do array:
a = [1, 2, 3, 4, 5];
a.every(function (x) {
  return x < 10;
}); // => verdadeiro: todos os valores < 10.
a.every(function (x) {
  return x % 2 === 0;
}); // => falso: nem todos os valores são par.

// O método some() é como o quantificador matemático “existe” ∃: ele retorna true se existe pelo menos um elemento no array para o qual o predicado retorna true , e retorna false se, e somente se, o predicado retorna false para todos os elementos do array:
a = [1, 2, 3, 4, 5];
a.some(function (x) {
  return x % 2 === 0;
}); // => verdadeiro: a tem alguns números pares.
a.some(isNaN); // => falso: a não tem não números.
