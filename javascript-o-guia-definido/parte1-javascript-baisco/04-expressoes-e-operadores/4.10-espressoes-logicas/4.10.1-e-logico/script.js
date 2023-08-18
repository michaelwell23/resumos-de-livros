x == 0 && y == 0;

var o = { x: 1 };
var p = null;
o && o.x; // => 1: o é verdadeiro; portanto, retorna o valor de o.x
p && p.x; // => null: p é falso; portanto, retorna-o e não avalia p.x

if (a == b) stop(); // Chama stop() somente se a == b
a == b && stop(); // Isto faz a mesma coisa
