# CAPÍTULO 06 - LISTAS LIGADAS

- Também chamado de lista, um array é uma estrutura de dados muito simples que armazena uma sequência de dados;
- Podemos implementar e usar uma lista ligada, que é uma estrutura, que é uma estrutura de dados dinâmica;
- Com essas listas, podemos adicionar ou remover itens do modo que quisermos, e ela aumentará conforme for necessaŕio;

---

## 6.1 - ESTRUTURA DE DADOS DA LISTA LIGADA

- As listas ligadas armazenam uma coleção sequencial de elementos;
- De modo diferente dos arrays, nas listas ligadas os elementos não são posicionados de forma contígua na memória;
- Cada elemento é constituído de um nó que armazena o elemento propriamente dito, além de uma referêcia que aponta para o própria elemento;
- A desvantagem de uma lista ligada em relação a um array convencional é que não é necessário deslocar os elementos quando eles são adicionados ou removidos;
- É preciso usar ponteiros quando se trabalha com lista ligada;
- É preciso uma atenção especial na implementação desse tipo de lista;
- Em um array, podemos acessar diretamente qualquer elemento em qualquer posição, já em uma lista ligada, se quisermos acessar um elemento no meio, será necessário partir do início e iterar pela lista até encontrar o elemento desejado;

---

## 6.2 - CRIANDO A CLASSE LinkedList

- Depois de implemenar a classe `LinkedList`, podemos obeservar a responsabilidade de alguns métodos antes de implementá-los:
  - `push(element)`: esse método adiciona um novo elemento no final da lista.
  - `insert(element, position)`: esse método insere um novo elemento em uma posição específica da lista.
  - `getElementAt(index)`: esse método devolve o elemento que está em uma posição específica da lista. Se o elemento não estiver na lista, undefined será devolvido.
  - `remove(element)`: esse método remove um elemento da lista.
  - `indexOf(element)`: esse método devolve o índice do elemento na lista.Se o elemento não estiver na lista, -1 será devolvido.
  - `removeAt(position)`: esse método remove um item de uma posição específica da lista.
  - `isEmpty()`: esse método devolve true se a lista ligada não contiver nenhum elemento, e false se o tamanho da lista ligada for maior que 0.
  - `size()`: esse método devolve o número de elementos contidos na lista ligada. É semelhante à propriedade length do array.
  - `toString()`: esse método devolve uma representação em string da lista ligada. Como a lista usa uma classe Node como elemento, devemos sobrescrever o método toString default herdado da classe Object de JavaScript a fim de exibir somente os valores dos elementos.

---

## 6.3 - INSERINDO ELEMENTOS NO FINAL DA LISTA LIGADA

- Ao adicionar um elemento no final de um onjeto, podemos ter dois cenários:
  - Um em que a litsta está vazia e estamos adicionando o seu primeiro elemento;
  - E o outro em que a lista não está vazia e estamos concatenando elementos a ela;

---

## 6.4 - REMOVENDO ELEMENTOS DE UMA POSIÇÃO ESPECÍFICA DA LISTA LIGADA
