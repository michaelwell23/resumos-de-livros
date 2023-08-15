// acesso a propriedades
epressão.identificador;
expressão[expressão];

var o = { x: 1, y: { z: 3 } }; // Um exemplo de objeto
var a = [o, 4, [5, 6]]; // Um exemplo de array que contém o objeto
o.x; // => 1: propriedade x da expressão o
o.y.z; // => 3: propriedade z da expressão o.y
o['x']; // => 1: propriedade x do objeto o
a[1]; // => 4: elemento no índice 1 da expressão a
a[2]['1']; // => 6: elemento no índice 1 da expressão a[2]
a[0].x; // => 1: propriedade x da expressão a[0]
