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

## 7.3 - MÉTODO has(element)

- O método `has(element)` vai ser implementado antes pois ele será utilizado em outros métodos, como `add` e `remove`, para verificar se o elemento está no conjunto;
- O protótipo de `Object`tem o método `hasOwnProperty`, que devolve um booleano informando se o objeto tem a propriedade especificada no objeto ou não;

---

## 7.4 - MÉTODO add

- O próximo elemento a ser implementado é o `add`;
- Dado um `element`, podemos verificar se ele está presente no conjunto;
  - Se o elemento não estiver, podemos retorna `true` para informar que ele foi adicionado;
  - Se estiver, podemos retorna `false` para informa que não foi adicionado;
- Nesse conjunto estamos adicionando `element`com a chave e o valor, pois a chave pode facilitar na procura;

---

## 7.5 - MÉTODS delete e clear

- No método delete, verificaremos se o element especificado está presente no conjunto;
- Em caso afirmativo, removemos element do conjunto e devolvemos `true` para informar que ele foi removido; caso contrário, devolvemos `false`;
- Como estamos usando um objeto items para armazenar o objeto querepresenta o conjunto, podemos simplesmente utilizar o operador delete para remover a propriedade desse objeto;
- Tudo que precisamos fazer para reiniciar o objeto items é atribuir-lhe um objeto vazio novamente;
- Também poderíamos iterar pelo conjunto e remover todos os elementos, um a um, usando o método remove, porém seria muito trabalhoso, e temos uma forma mais fácil de fazer isso;
