// Anexa os nomes das propriedades enumeráveis do objeto o no array a e retorna a. Se a for omitido, cria e retorna um novo array.
function getPropertyNames(o, /* opcional */ a) {
  if (a === undefined) a = []; // Se for undefined, usa um novo array
  for (var property in o) a.push(property);
  return a;
}
// Esta função pode ser chamada com 1 ou 2 argumentos:
var a = getPropertyNames(o); // Obtém as propriedades de o em um novo array
getPropertyNames(p, a); // anexa as propriedades de p nesse array

// Em vez de usar uma instrução if na primeira linha dessa função, pode-se usar o operador || nesta forma idiomática:
a = a || [];
