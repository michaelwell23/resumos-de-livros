# CAPÍTULO 03 - ARRAYS

- Um `array` é a estrutura de dados mais simples possível em memória;
- Um array armazena valores que são todos do mesmo tipo, sequencialmente;
- Em JavaScript permite a criação de arrays com valores de tipos diferentes. Mas por questão de prática não seguiremos essa prática;

---

## 3.1 - POR QUE DEVEMOS USAR ARRAYS?

- Um dos principais motivos que os arrays foram criados, é que com eles, podemos representar facilmente qualquer tipo de informação.

---

## 3.2 - CRIANDO E INICIALIZANDO ARRAYS

- Declarar, criar e inicializar um array em JavaScript é realmente simples;
- Podemos utilizar a palavras reservada `new`;
  - Também podemos usar tamanho especifico;
  - Ou passar os elementos do array ditertamente para o construtor `Array()`;
- Outra forma é inicializar um array inicianado uma variável que recebe como valor um conchetes vazio;
  - Também podemos inicializar o array com alguns elementos;
- Se quizer saber o tamanho de um array podemos usar a propriedade `length`;

---

## 3.3 - ACESSANDO ELEMENTOS E FAZENDO UMA INTERAÇÃO EM UM ARRAY

- Para acessar uma posição em particular do array, podemos usar colchetes, passando o índice da posição que gostaríamos de acessar;
- se quisermos por exemplo exibir todos os elementos do array, podemos percorrer o array com um laço e exibir os elementos, começando do índice 0;
- podemos usar `console.log` para exibir cada índice do array;
- também podemos usar o `console.log` para exibir o próprio array;

---

## 3.4 - ACRESCENTANDO ELEMENTOS

Acrescentar e remover elementos de um array não é tão difícil; contudo, essas operações podem ter suas sutilezas.

---

## 3.5 - INSERINDO UM ELEMENTO NO FINAL DO ARRAY

- Se quisermos acrescentar um novo elemento no array, tudo que precisamos fazer é referenciar a última posição livre do array e atribuit-lhe um valor;
- Em JavaScript, um array é um objeto mutável;
- Podemos facilmente lhe acrescentar novos elementos;
- O objeto crescerá dinamicamente à medida que novos elementos forem adicionados;

---

## 3.6 - USANDO O MÉTODO PUSH

- A API do JavaScript possui um método chamado `push`, que nos permite adicionar novos elementos no final de um array;
- Podemos acrescentar quantos elementos quisermos como argumento do método;

---

## 3.7 - INSERINDO UM ELEMENTO NA PRIMEIRA POSIÇÃO

- Podemos adicionar elementos no array na primeira posição;
- Para isso devemos deixar a primeira posição livre, deslocando todos os elementos para a direita;
- Percorrer todos os elementos do array com um laço, começando pela última posição, deslocando o elemento anterior para a nova posição;
- e fazer uma atribuição do novo valor desejado à primeira posição;

---

## 3.8 - USANDO O MÉTODO UNSHIFT

A classe array de JavaScript também tem um método chamado `unshift`, que insere no início do array os valores passados como argumentos para o método.

---

## 3.9 - REMOVENDO UM ELEMENTO DO FINAL DO ARRAY

- Para remover um valor do final de um array, podemos utilizar o método `pop`;
- Os métodos push e pop permitem que um array emule uma estrutura de dados stack básica;

---

## 3.10 - REMOVENDO UM ELEMENTO DA PRIMEIRA POSIÇÃO

- Para remover um valor do início do array:
  - Deslocamos os elementos de uma posição para a esquerda;
  - Entretando, o tamanho do array continua igual, o que significa que existe um elemento extra com o valor `undefined`;
  - Simplesmente sobrescreve os valores originais do array, sem de fato removi-los;
  - Essa forma, utilizando o laço, é somente usado como finalidade pedagógica, não deve ser utilizado em projetos de verdade;

## 3.11 - USANDO O MÉTODO SHIFT

- Para remover um elemento do início do array, use o método `shift`;
- Os métodos `shift` e `unshift` permitem que um array emule uma estrutura de dados básica de fila (queue);

---

## 3.12 - ADICIONANDO E REMOVENDO ELEMENTOS DE UMA POSIÇÃO ESPECÍFICA

- O método `splice` pode ser usado para remover um elemento de um array simplesmente especificado a posição/índice a partir do qual queremos fazer a remoção e a quantidade de elementos que gostaríamos de remover;
- Assim como em arrays e objetos JavaScript, também podemos usar o operador `delete` para remover um elemento de um array;

---

## 3.13 - ARRAYS BIDIMENSIONAIS E MULTIDIMENSIONAIS

- Uma `matriz` pode ser usada para armazenar informações;
- JavaScript aceita apenas arrays unidimencionais, não possui suporte para matrizes;
- Podemo implementar qualquer arra multidimencional, usando array de arrays;

---

## 3.14 - ITERANDO PELOS ELEMENTOS DE ARRAYS BIDIMENCIONAIS

- Para ver a saída de uma array de arrays, podemos criar uma função genérica;
- É necessário percorrer todas as linhas e colunas com um laço;
- Devemos usar um laço for aninhado, em que a variável `i` representa as linhas e `j` representa as colunas;
- o valor de parâmetro da função representa um array, que precisamos iterar pelas posições dela no laço aninhado;
- Para exibir um array bidimencional no console do navegador, podemos também usar a instrução `console.table(averageTemp)`. Com ela, teremos uma saída mais elegante;

---

## 3.15 - ARRAYS MULTIDIMENSIONAIS

- É possível também trabalhar com arrays multidimensionais em JavaScript;
- Não importa quantas dimensões temos na estrutura de dados, precismoas percorrer cada dimensão com um laço a fim de acessar a célula;
- Se tivéssemos uma matriz `3 x 3 x 3 x 3`, teríamos quatro instruções `for` aninhadas em nosso código;

---

## 3.16 - REFERÊNCIAS PARA MÉTODOS DE ARRAY EM JAVASCRIPT
