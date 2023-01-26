// ======================= Verficando o [[Prototype]] de um objeto genérico vazio =======================
var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(prototype === Object.prototype);

// ======================= utilizando método isPrototypeOf() =======================
var object2 = {};
console.log(Object.prototype.isPrototypeOf(object));

// ======================= Leitura de um objeto =======================
var object = {};
console.log(object.toString()); // "[object Object]"

object.toString = function () {
  return '[object Custom]';
};

console.log(object.toString()); // "[object Custom]"

// apaga a propriedade própria
delete object.toString;
console.log(object.toString()); // "[object Object]"

// sem efeito, pois delete só funciona em propriedades próprias
delete object.toString;
console.log(object.toString()); // "[object Object]"
