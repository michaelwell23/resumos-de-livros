var a = ['world']; // Começa com um array de um elemento
var value = a[0]; // Lê o elemento 0
a[1] = 3.14; // Grava o elemento 1
i = 2;
a[i] = 3; // Grava o elemento 2
a[i + 1] = 'hello'; // Grava o elemento 3
a[a[i]] = a[0]; // Lê os elementos 0 e 2, grava o elemento 3

// Não há nada de especial na conversão do índice, de número para string: isso também pode ser feito com objetos normais
o = {}; // Cria um objeto comum
o[1] = 'one'; // O indexa com um inteiro

a.length;
// => 4

// se você indexa um array com uma string que não é um inteiro não negativo, ela se comporta como um índice de array e não como uma propriedade de objeto. O mesmo acontece se você usa um número em ponto flutuante que é igual a um inteiro
a[-1.23] = true; // Isso cria uma propriedade chamada "-1.23"
a['1000'] = 0; // Esse é o 1001º elemento do array
a[1.0]; // Índice de array 1. O mesmo que a[1]

// Quando você tenta consultar uma propriedade inexistente de qualquer objeto, não obtém um erro, mas simplesmente undefined . Isso vale tanto para arrays como para objetos:
a = [true, false]; // Este array tem elementos nos índices 0 e 1
a[2]; // => undefined. Nenhum elemento nesse índice.
a[-1]; // => undefined. Nenhuma propriedade com esse nome.
