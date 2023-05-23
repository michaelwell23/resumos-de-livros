# CAÍTULO 05: FILAS E DEQUES

- As filas (queues) são estrutura de dados muito semelhantes, mas em vez de LIFO, elas usam um princípio diferente;
- Neste capítulo veremos como funciona os deques (filas de duas pobtas ou filas duplamente terminada) uma estrutura de dados que mistura princípios de pilha e de fila;
- Também será abordado nesse caítulo sobre:
  - estrutura de dados de fila;
  - estrutura de dados de deque;
  - adição de elementos em uma fila e em um deque;
  - remoção de elementos de uma fila e de um deque;
  - simulação de filas circulares com um jogo de Batata Quente;
  - verificação se uma frase é um palíndromo com um deque;

---

## 5.1 - ESTRUTURA DE DADOS DE FILA

- Uma `fila`é uma coleção ordenada de itens baseado em `FIFO`(O primeira que entra é o primeiro que sai), também é conhecido como princípio do `first-come first-served` (o primeiro a chegar é o primeiro a ser servido);
- A adição de novos elementos em uma fila é feita na causa e remoção, na frente;
- O exemplo mais conhecido de uma fila na vida real é a típica fila que se forma ocasionalmente. A primeira pessa que estiver na fila será a primeira a ser atendida;

---

## 5.2 - CRIANDO A CLASSE QUEUE

- Para começar, podemos criar uma classe que irá reprensentar uma fila;
- Inicialmente precisamos ter uma estrutura de dados que armazene os elementos da fila. Podemos usar um array para isso;
- No entanto, usar um objeto para armazenar os elementos, nos permitiraá escrever uma estrutura de dados mais eficiente para acessar os elementos;
- Para nos ajudar a controlar o tamanho da fila, podemos declarar uma propriedade `count`;
- E como os elementos que estiverem em primeiro, serão removidos, é preciso uma variável para ajudar a manter o controle do primeiro elemento;
- Em seguida, devemos declarar os métodos disponíveis em uma fila;
  - `enqueue(element)`: adiciona um novo elemento no final da fila;
  - `dequeue()`: remove o primeiro elemento da fila. Também devolve o elemento removido;
  - `peek()`: Devolve o primeiro elemento da fila, e também o primeiro item a ser removido;
  - `isEmpty()`: devolve `true` se a fila não conter nenhum elemento, e false se o tamanho for maior do que 0;
  - `size()`: devolve o número de elementos contidos na fila;

---

## 5.3 - INSERÇÃO DE ELEMENTOS NA FILA

- O método `enqueue` tem a mesma implementação que o método `push` da classe `Stack`;
- Como a propriedade items é um objeto JavaScript, ela é uma coleção de pares cahve e valor;
- Para adicionar um elemento à fila, usaremos a variável `count` como chave do objeto `items`, e `element` será o seu valor;
- Depois de inserir o elemento na fila, o valor de `count`será incrementado;

---

## 5.4 - REMOVENDO ELEMENTOS DA FILA

- O método `dequeue` é responsável pela remoção de itens da fila;
- Como a fila utiliza o princípio FIFO, o primeiro item adicionado na fila será o item a ser removido;
- Inicialmente devemos verificar se a fila está vázia, e em caso afirmativo devolvemos o valor `undefined`;
- Se a fila não estiver vazia, armazenaremos o valor da frente da fila para que este possa ser devolvido depois que o elemento tiver sido removido;
- Depois, é preciso incrementar a propriedade `lowestCount` para 1;
- Para acessar o elemento da frente da fila, precisamos acessar a chave com o valor 0;
- Neste cenário, depois que o item é removido, a propriedade conterá somente um elemento, que será o próximo a ser removido se o método `dequeue` for chamado;

---

## 5.5 - DANDO UMA ESPIADA NO ELEMENTO QUE ESTÁ NA FRENTE DA FILA

- O método `peek` é auxiliar, o que devolverá o item que está na frente da fila;
- Ele utiliza o `lowestCount` como chave para obter o valor do elemento;

---

## 5.6 - VERIFICANDO SE A PILHA ESTÁ VAZIA E O SEU TAMANHO

- O próximo método é o `isEmpty`, que devolverá `true` se a pilha estiver vazia, e false caso contrário;
- Para calcular quantos elementos há na fila, é preciso calcular a diferença entre as chaves `count` e `lowessCount`;
- Suponha que a propriedade `count` tenha 2 valores e `lowestCount` seja igual a 0. Isso significa que temos dois elemento na fila;
- Em seguida, removemos um elemento dela. A propriedade `lowestCount` será atualizada com o valor 1 e `count` continuará com um valor igual a 2;
- Agora a fila tera somente um elemento, e assim por diante;
- Para implementar o método `size`, basta devolver a diferença entre `count` e `lowestCount`;
- Ou podemos escrever o método `isEmpty` comparando o método `size` com 0;

---

## 5.7 - LIMPANDO A FILA
