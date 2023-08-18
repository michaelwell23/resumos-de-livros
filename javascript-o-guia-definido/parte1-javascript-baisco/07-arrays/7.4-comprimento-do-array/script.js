[].length; // => 0: o array não tem elementos
['a', 'b', 'c'].length; // => 3: o índice mais alto é 2, o comprimento é 3

a = [1, 2, 3, 4, 5]; // Começa com um array de 5 elementos.
a.length = 3; // agora a é [1,2,3].
a.length = 0; // Exclui todos os elementos. a é [].
a.length = 5; // O comprimento é 5, mas não há elementos, como new Array(5)

a = [1, 2, 3]; // Começa com um array de 3 elementos.
Object.defineProperty(a, 'length', { writable: false }); // Torna a propriedade length somente para leitura.
a.length = 0; // a fica inalterado.
