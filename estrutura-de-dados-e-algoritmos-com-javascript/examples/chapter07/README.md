# CAPÍTULO 07 - CONJUNTOS

- Conjunto é uma estrutura de dados sequencial,porém não permite valores duplicados;
- Nesse capítulo veremos como criar uma estrutura de dados para conjuntos, como adicionar e remover valpres;
- fazer buscas para saber se um valor já existe;
- Também aprenderá a realizar operações matemáticas como união, intersecção e diferença;
- Por fim, verá como usar a classe `Set` nativa do ECMAScript 2015;

---

## 7.1 - ESTRUTURANDO UM CONJUNTO DE DADOS

- Um conjunto (set) é uma coleção não ordenada de itens, composta de elementos únicos (isto é, que não podem ser repetidos);
- Essa estrutura de dados usa o mesmo conceito matemático dos conjuntos finitos, porém aplicado a uma estrutura de dados em ciência da computação.
- Você também pode pensar em um conjunto como um array sem elementos repetidos e sem o conceito de ordem;
- Em matemática, um conjunto também apresenta algumas operações básicas como união, intersecção e diferença;

---

## 7.2 - CRIANDO UMA CLASSE Set

- A ECMAScript 2015 introduziu a classe Set como parte da API JavaScript;
- Faremos a nossa própria implementação da classe Set baseada na classe da ES2015;
- Será implementada também algumas operações de conjunto como união, intersecção e diferença, que não estão presentes na classe ES2015 nativa;
- Um detalhe muito importante nesse caso é que estamos usando um objeto para representar o nosso conjunto (items), em vez de utilizar um array;
- No entanto, poderíamos também ter usado um array nessa implementação;
- Em seguida, devemos declarar os métodos disponíveis a um conjunto:
  - `add(element)`: adiciona um novo element ao conjunto.
  - `delete(element)`: remove element do conjunto. - has(element): devolve true se element estiver no conjunto, e false caso contrário.
  - `clear()`: remove todos os elementos do conjunto.
  - `size()`: devolve quantos elementos estão contidos no conjunto. É semelhante à propriedade length de um array.
  - `values()`: devolve um array com todos os valores (elementos) que estão no conjunto;

---
