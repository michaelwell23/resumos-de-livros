// Cria um objeto selado com protótipo congelado e uma propriedade não enumerável
var o = Object.seal(
  Object.create(Object.freeze({ x: 1 }), { y: { value: 2, writable: true } })
);
