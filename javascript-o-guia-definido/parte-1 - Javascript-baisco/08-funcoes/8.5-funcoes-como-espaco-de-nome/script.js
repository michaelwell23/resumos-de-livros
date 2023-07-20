function mymodule() {
  // O código do módulo fica aqui.
  // Qualquer variável usada pelo módulo é local a esta função
  // em vez de congestionar o espaço de nomes global.
}
mymodule(); // Mas não se esqueça de chamar a função!

(function () {
  // função mymodule reescrita como uma expressão não nomeada
  // O código do módulo fica aqui.
})();
// finaliza a função literal e a chama agora.

// Define uma função extend que copia as propriedades de seu segundo
// argumento e dos subsequentes em seu primeiro argumento.
// Resolvemos um erro do IE aqui: em muitas versões do IE, o laço for/in
// não enumera uma propriedade enumerável de o, se o protótipo de o tem
// uma propriedade não enumerável de mesmo nome. Isso significa que propriedades
// como toString não são manipuladas corretamente, a não ser que as verifiquemos explicitamente.
var extend = (function () {
  // Atribui o valor de retorno dessa função
  // Primeiramente, verifica a presença do erro, antes de usar o patch.
  for (var p in { toString: null }) {
    // Se chegamos aqui, então o laço for/in funciona corretamente e retornamos
    // uma versão simples da função extend()
    return function extend(o) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var prop in source) o[prop] = source[prop];
      }
      return o;
    };
  }
  // Se chegamos até aqui, isso significa que o laço for/in não enumerou
  // a propriedade toString do objeto de teste. Portanto, retorna uma versão
  // da função extend() que testa explicitamente as propriedades
  // não enumeráveis de Object.prototype.
  // E agora verifica as propriedades de caso especial
  for (var j = 0; j < protoprops.length; j++) {
    prop = protoprops[j];
    if (source.hasOwnProperty(prop)) o[prop] = source[prop];
    return function patched_extend(o) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        // Copia todas as propriedades enumeráveis
        for (var prop in source) o[prop] = source[prop];
      }
    };
    return o;
  }
  // Esta é a lista de propriedades do caso especial que verificamos
  var protoprops = [
    'toString',
    'valueOf',
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
  ];
})();
