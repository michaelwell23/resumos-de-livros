/* Os métodos unshift() e shift() se comportam quase como push() e pop() , exceto que inserem e
removem elementos do início de um array e não do final. unshift() adiciona um ou mais elemen-
tos no início do array, desloca os elementos existentes no array para cima, para índices mais altos,
a fim de dar espaço, e retorna o novo comprimento do array. shift() remove e retorna o primeiro
elemento do array, deslocando todos os elementos subsequentes uma casa para baixo, para ocuparem
o espaço recentemente vago no início do array.
*/
var a = []; // a:[]
a.unshift(1); // a:[1] Retorna:1
a.unshift(22); // a:[22,1] Retorna:2
a.shift(); // a:[1] Retorna:22
a.unshift(3, [4, 5]); // a:[3,[4,5],1] Retorna:3
a.shift(); // a:[[4,5],1] Retorna:3
a.shift(); // a:[1] Retorna:[4,5]
a.shift(); // a:[] Retorna:1
