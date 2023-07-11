book.subtitle; // => indefinida: a propriedade não existe

// Dispara um TypeError. undefined não tem uma propriedade length
var len = book.subtitle.length;

// Uma técnica prolixa e explícita
var len = undefined;
if (book) {
  if (book.subtitle) len = book.subtitle.length;
}
// Uma alternativa concisa e idiomática para obter o tamanho de subtitle ou undefined
var len = book && book.subtitle && book.subtitle.length;

// As propriedades prototype de construtoras internas são somente para leitura.
Object.prototype = 0; // A atribuição falha silenciosamente; Object.prototype inalterado
