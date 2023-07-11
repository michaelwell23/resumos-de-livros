var o = {}; // o herda métodos de objeto de Object.prototype
o.x = 1; // e tem uma propriedade própria x.
var p = inherit(o); // p herda propriedades de o e Object.prototype
p.y = 2; // e tem uma propriedade própria y.
var q = inherit(p); // q herda propriedades de p, o e Object.prototype
q.z = 3; // e tem uma propriedade própria z.
var s = q.toString(); // toString é herdado de Object.prototype
q.x + q.y; // => 3: x e y são herdados de o e p

var unitcircle = { r: 1 }; // Um objeto para herdar
var c = inherit(unitcircle); // c herda a propriedade r
c.x = 1;
c.y = 1; // c define duas propriedades próprias
c.r = 2; // c anula sua propriedade herdada
unitcircle.r; // => 1: o objeto protótipo não é afetado
