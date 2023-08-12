// Para impedir extensões em Object.prototype , basta escrever:
Object.seal(Object.prototype);

// Outro recurso dinâmico de JavaScript é a capacidade de substituir (ou fazer “monkey-patch”) métodos de um objeto
var original_sort_method = Array.prototype.sort;
Array.prototype.sort = function () {
  var start = new Date();
  original_sort_method.apply(this, arguments);
  var end = new Date();
  console.log('Array sort took ' + (end - start) + ' milliseconds.');
};

// Na função enumeration() , podemos simplesmente adicionar as seguintes linhas de código:
Object.freeze(enumeration.values);
Object.freeze(enumeration);
