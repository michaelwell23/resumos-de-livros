// Um array esparso é aquele no qual os elementos não têm índices contíguos começando em 0. Normalmente, a propriedade length de um array especifica o número de elementos no array. Se o array é esparso, o valor da  propriedade length é maior do que o número de elementos. Os arrays esparsos podem ser criados com a construtora Array() ou simplesmente pela atribuição de um índice de array maior do que a propriedade length atual do array.
a = new Array(5); // Nenhum elemento, mas a.length é 5.
a = []; // Cria um array sem elementos e comprimento = 0.
a[1000] = 0; // A atribuição adiciona um elemento, mas configura o comprimento como 1001.

// também é possível transformar arrays esparsos com o operador delete
var a1 = [,]; // Este array não tem elementos e tem comprimento 1
var a2 = [undefined]; // Este array tem um elemento undefined
0 in a1; // => falso: a1 não tem elemento com índice 0
0 in a2; // => verdadeiro: a2 tem valor undefined no índice 0

// Entender os arrays esparsos é importante para compreender a verdadeira natureza dos arrays em JavaScript. Na prática, contudo, em sua maioria, os arrays em JavaScript com que você vai trabalhar não serão esparsos.
