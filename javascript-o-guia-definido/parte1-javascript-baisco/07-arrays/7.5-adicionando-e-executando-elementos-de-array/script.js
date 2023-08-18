a = []; // Começa com um array vazio.
a[0] = 'zero'; // E adiciona elementos nele.
a[1] = 'one';

// O método push() também pode ser usado para adicionar um ou mais valores no final de um array:
a = []; // Começa com um array vazio
a.push('zero'); // Adiciona um valor no final. a = ["zero"]
a.push('one', 'two'); // Adiciona mais dois valores. a = ["zero", "one", "two"]

// Os elementos de um array podem ser excluídos com o operador delete , exatamente como se exclui propriedades de objeto
a = [1, 2, 3];
delete a[1]; // agora a não tem elemento no índice 1
1 in a; // => falso: nenhum índice do array 1 está definido
a.length; // => 3: delete não afeta o comprimento do array
