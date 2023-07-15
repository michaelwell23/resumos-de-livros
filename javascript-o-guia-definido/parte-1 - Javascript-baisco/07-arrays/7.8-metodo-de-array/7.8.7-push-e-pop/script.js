// Os métodos push() e pop() permitem trabalhar com arrays como se fossem pilhas. O método push() anexa um ou mais novos elementos no final de um array e retorna o novo comprimento do array. O método pop() faz o inverso: ele exclui o último elemento de um array, decrementa o comprimento do array e retorna o valor que removeu.

var stack = []; //  stack: []
stack.push(1, 2); //  stack: [1,2] Retorna 2
stack.pop(); //  stack: [1] Retorna 2
stack.push(3); //  stack: [1,3] Retorna 2
stack.pop(); // stack:[1]
stack.push([4, 5]); // stack:[1,[4,5]]
stack.pop(); // stack:[1]
stack.pop(); // stack:[]
