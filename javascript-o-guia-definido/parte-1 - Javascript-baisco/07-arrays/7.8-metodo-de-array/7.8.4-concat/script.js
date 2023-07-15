// O método Array.concat() cria e retorna um novo array contendo os elementos do array original em que concat() foi chamado, seguido de cada um dos argumentos de concat() . Se qualquer um desses argumentos é ele próprio um array, então são os elementos do array que são concatenados e não o array em si.
var a = [1, 2, 3];
a.concat(4, 5); // Retorna [1,2,3,4,5]
a.concat([4, 5]); // Retorna [1,2,3,4,5]
a.concat([4, 5], [6, 7]); // Retorna [1,2,3,4,5,6,7]
a.concat(4, [5, [6, 7]]); // Retorna [1,2,3,4,5,[6,7]]
