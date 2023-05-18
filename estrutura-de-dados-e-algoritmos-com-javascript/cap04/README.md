# PILHAS

- As vezes precisamos de laguma forma de estrutura de dados que na qual tenhamos mais controle sobre o acréscimo e a remoção de itens.
- Há duas estrutura de dados que apresentam alguamas semelhaças com os arrays, mas que nos oferece mais controle sobre a adição e a remoção dos elementos.
- Essas estruturas de dados são as `pilhas` (stack) e `filas`(queues);
- Os seguintes tópicos serão abordados nessa sessão:
  - criação de nossa própria biblioteca de estrutura de dados JavaScript;
  - a estrutura de dados de pilha;
  - adição de elementos em uma pilha;
  - remoção (pop) de elementos de uma pilha;
  - como usar a classe Stack;
  - o problema do decimal para binário;

---

## 4.1 - ESTRUTURA DE DADOS DE PILHA

- Uma pilha é uma coleção ordenada de itens que obedece ao princípio `LIFO (Last In First Out, O último que entra é o primeiro a sair)`.
- O final da pilha é conhecida como topo, enquanto o lado oposto é conhecido como base. Os elementos mais novos fiam proximos ao topo, e os elementos mais antigo estão próximos da base;
- Uma pilha também é usada pelos compiladores em linguagns de programação, pela memória do computador para armazenar variáveis e chamadas de métodos, e também pelo histórico do navegador;

---

## 4.2 - CRIANDO UMA CLASSE STACK BASEADA EM ARRAY

- Precisamos de uma estrutura de dados que armazenará os elementos da pilha. Podemos usar um array para isso;
- A estrutrura de dados de array nos permite adicionar ou remover elementos de qualquer posição da estrutura de dados;
- Como a pilha obedece ao princípio LIFO, limitaremos as funcionalidade que estão disponíveis à inserção e remoção de elementos. Os métodos a seguir estaŕão disponíveis na classe Stack:
  - `push(element(s))`: esse método adiciona um novo elemento (ou vários elementos) no topo da pilha.
  - `pop()`: esse método remove o elemento que está no topo da pilha. Também devolve o elemento removido
  - `peek()`: esse método devolve o elemento que está no topo da pilha. A pilha não é modificada (o elemento não é removido; ele é devolvido apenas como informação).
  - `isEmpty()`: esse método devolve true se a pilha não contiver nenhum elemento e false se o tamanho da pilha for maior que 0.
  - `clear()`: esse método remove todos os elementos da pilha;
  - `size()`: esse método devolve o número de elementos contidos na pilha. É semelhante à propriedade length de um array

---

## 4.3 - PUSH DE ELEMENTOS NA PILHA

- O primeiro método a ser implementado é o método `push`, responsável pela adição de novos elementos na pilha;
- Só podemos adicionar novos itens no topo da pilha, isto é, no final dela;
- Como estamos utilizando array para armazenar os elementos da pilha, podemos utilizar o método push;

---

## 4.4 - POP DE ELEMENTOS DA PILHA

- O método `pop` é responsável pela remoção de itens da pilha;
- Como a pilha utilzia o princípio LIFO, o último item adicionado é aquele que será removido;
- Por esse motivo, podemos usar o método `pop`;
- Como os métodos push e pop serão os únicos métodos disponíveis para a adição e a remoção de itens da pilha, o princípio LIFO se aplicará à classe `Stack`, que criamos nos exemplos;

---
