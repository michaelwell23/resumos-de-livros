// O método Array.slice() retorna um pedaço (ou subarray) do array especificado. Seus dois argumentos especificam o início e o fim do trecho a ser retornado. O array retornado contém o elemento especificado pelo primeiro argumento e todos os elementos subsequentes, até (mas não incluindo) o elemento especificado pelo segundo argumento.
var a = [1, 2, 3, 4, 5];
a.slice(0, 3); // Retorna [1,2,3]
a.slice(3); // Retorna [4,5]
a.slice(1, -1); // Retorna [2,3,4]
a.slice(-3, -2); // Retorna [3]
