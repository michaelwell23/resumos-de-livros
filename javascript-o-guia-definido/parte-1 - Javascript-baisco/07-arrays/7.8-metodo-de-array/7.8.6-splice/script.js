// O método Array.splice() é um método de uso geral para inserir ou remover elementos de um array. Ao contrário de slice() e concat() , splice() modifica o array em que é chamado. Note que splice() e slice() têm nomes muito parecidos, mas efetuam operações significativamente diferentes.
var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.splice(4);
// Retorna [5,6,7,8]; a é [1,2,3,4]
a.splice(1, 2); // Retorna [2,3]; a é [1,4]
a.splice(1, 1); // Retorna [4]; a é [1]

var a = [1, 2, 3, 4, 5];
a.splice(2, 0, 'a', 'b'); // Retorna []; a é [1,2,'a','b',3,4,5]
a.splice(2, 2, [1, 2], 3); // Retorna ['a','b']; a é [1,2,[1,2],3,3,4,5]
