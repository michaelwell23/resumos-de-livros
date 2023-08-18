var p = { x: 1 }; // Define um objeto protótipo.
var o = Object.create(p); // Cria um objeto com esse protótipo.
p.isPrototypeOf(o); // => verdadeiro: o herda de p
Object.prototype.isPrototypeOf(p); // => verdadeiro: p herda de Object.prototype
