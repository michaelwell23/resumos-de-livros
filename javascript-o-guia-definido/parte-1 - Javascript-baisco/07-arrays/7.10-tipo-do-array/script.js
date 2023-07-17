// Dado um objeto desconhecido, frequentemente a capacidade de determinar se ele é um array ou não é útil. Em ECMAScript 5, isso pode ser feito com a função Array.isArray() :
Array.isArray([]); // => verdadeiro
Array.isArray({}); // => falso

[] instanceof Array; // => verdadeiro
({}) instanceof Array; // => falso

var isArray =
  Function.isArray ||
  function (o) {
    return (
      typeof o === 'object' &&
      Object.prototype.toString.call(o) === '[object Array]'
    );
  };
