// O método Array.join() converte todos os elementos de um array em strings e as concatena, retornando a string resultante.
var a = [1, 2, 3]; // Cria um novo array com esses três elementos
a.join(); // => "1,2,3"
a.join(' '); // => "1 2 3"
a.join(''); // => "123"
var b = new Array(10); // Um array de comprimento 10 sem elementos
b.join('-'); // => '---------': uma string de 9 hifens

// O método Array.join() é o inverso do método String.split() , que cria um array dividindo uma string em partes.
