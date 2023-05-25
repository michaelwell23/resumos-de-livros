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

- Para limpar todos os elementos da fila, podemos chamar o método `dequeue` até que ele devolta `undefined`;
- Ou podemos simplesmente reiniciar o valor das propriedades da classe `Queue` com os mesmo valores declarados em seu construtor;

---

## 5.8 - CRIANDO O MÉTODO toString

- Depois de implementar a classe Queue, podemos acrescentar o método `toString`;
- Como o primeiroa índice da classe `Queue` pode ser zero, começamos iterando a partir do índice `lowestCount`;
- As classes `Queue` e `Stack` são parecidas!
- A diferença está nos métodos `dequeue` e `peek`, que se deve à distinção entre os princípios FIFO e LIFO;

---

## 5.9 - USANDO A CLASSE QUEUE

- Inicialmente devemos instanciar a classe `Queue` e verificar se ela está vazia;
- Em seguida, podemos adicionar alguns elementos na fila;
- Podemos executar alguns comandos:
  - Se pedirmos para exibir o conteúdo da fila, os valores será retornados na ordem em que os elementos foram adicionados;
  - Se exibirmos o tamanho, ele será de acordo com o numero de elementos que adicionamos, pois é a quantidade de elementos adicionado na fila;
  - Podemos remover dois elementos da fila chamando `dequeue` duas vezes;
  - Ao exibir o conteúdo da fila novamente,podemos ver os últimos elementos que foram inseridos na fila. Isso significa que a classe está seguindo corretamente o princípio de FIFO;

---

## 5.10 - ESTRUTURA DE DADOS DEQUE

- A estrutura de dados de `deque`, também conhecida como `fila de duas pontas`, é uma fila especial que nos permite inserir e remover elementos do final ou da frente da fila;
- Uma aplicação comum de um deque é na armazenagem de uma lista de operações para desfazer ações (undo);
- Sempre que um usuário executa uma operação no software, um push dessa operação será feito no deque;
- Quando o usuário clicar no botão Undo (desfazer), uma operação de pop será efetuada no deque, o que significa que essa operação será removida do final;
- Depois de um número predefinido de operações, as operações mais antigas serão removidas da frente do deque;
- Como o deque implemente os princípios tanto FIFO quanto LIFO, pode-se dizer também que o deque combina as estruturas de dados de fila e de pilha;

---

## 5.11 - CRIANDO A CLASSE DEQUE

- Para iniciar, criamos a classe `Deque` junto ao seu construtor;
- Como deque é uma fila especial, podemos perceber que ele compartilha alguns trechos de código com o contrutor, tem mesmas propriedades internas e tem os seguintes métodos: `isEmpty`, `clear`, `size` e `toString`;
- Pelo fato de que deque permite inserir e remover elementos das duas extremidades, também será adicionados alguns outros métodos:
  - `addFront(element)`: esse método adiciona um novo elemento na frente do deque.
  - `addBack(element)`: esse método adiciona um novo elemento no fim do deque (a mesma implementação do método enqueue da classe Queue).
  - `removeFront()`: esse método remove o primeiro elemento do deque (a mesma implementação do método dequeue da classe Queue).
  - `removeBack()`: esse método remove o último elemento do deque (a mesma implementação do método pop da classe Stack).
  - `peekFront()`: esse método devolve o primeiro elemento do deque (a mesma implementação do método peek da classe Queue).
  - `peekBack()`: esse método devolve o último elemento do deque (a mesma implementação do método peek da classe Stack).

---

## 5.12 - ADICIONANDO ELEMENTOS NA FRENTE DO DEQUE

- Ao adicionar um elemento na frente do deque, há três cenários.
  - O primeiro cenário é aquele em que o deque está vazio;
    - Nesse caso, chamamos o método `addBack`.
    - O elemento será adicionado no final do deque, que, nesse caso, também será a frente. O método addBack já tem a lógica necessária para incrementar a propriedade count, portanto podemos reutilizá-la a fim de evitar um código duplicado;-
  - O segundo cenário é aquele em que um elemento é removido da frente do deque, o que significa que a propriedade `lowestCount` terá um valor
    maior ou igual a 1;
    - Nesse caso, basta decrementar a propriedade `lowestCount` e atribuir o elemento à chave desse objeto (posição).
  - O terceiro e último cenário é aquele em que lowestCount é igual a 0 (zero);
    - Poderíamos atribuir uma chave com um valor negativo e atualizar a lógica usada para calcular o tamanho do deque para avaliar também as chaves negativas;
    - Nesse caso, a operação para adicionar um novo valor continuaria tendo o menor custo de processamento;
- Para adicionar um novo elemento na primeira chave ou posição, devemos mover todos os elementos para a próxima posição a fim de deixar o primeiro index livre.
- Como não queremos perder nenhum valor existente, começamos a iterar pelos valores existentes na propriedade items a partir de seu último índice, atribuindo-lhe o elemento que está em _index - 1_;
- Depois que todos os elementos tiverem sidomovidos, a primeira posição estará livre e poderemos sobrescrever qualquer valor existente com o elemento que queremos adicionar no deque;

---

## 5.13 - USANDO A CLASSE DEQUE

- Depois da criação da classe Deque, podemos chamar o método;
- Com a classe Deque, podemos chamar operações das classes Stack e Queue;

---

## 5.14 - RESOLVENDO PROBLEMAS USANDO FILAS E DEQUES

- Depois de iplementar as classes Queue e Deque, podemos utilizá-las para resolver alguns problemas de ciência da computação;
- Podemo simular um jogo de Batata Quente com filas;
- Além de verificar se uma frase é um palíndromo usando deques;

---

## 5.15 - FILA CIRCULAR – BATATA QUENTE

- Como as filas são aplicadas com frequência em ciência da computação e em nossas vidas, há algumas versões modificadas em relação à fila padrão que implementamos;
- Uma versão modificada é a `fila circular`;
- Um bom exemplo de fila circular é o jogo de Batata Quente. Para implementaruma simulação desse jogo, usaremos a classe Queue:
  - Vamos obteruma lista de nomes e enfileirar todos eles;
  - Dado um número, devemos iterar pela fila. Remover um item do início da fila e adicioná-lo no final para simular a batata quente;
  - Uma vez que o número for alcançado, a pessoa que tiver a batata quente será eliminada;
  - Quando restar apenas uma pessoa, ela será declarada a vencedora;
- O jogo pode ter o número alterado passando para afunção a fim de simular enários diferentes;

---

## 5.16 - VEFICADOR DE PALÍNDROMO

- Um palíndromo é uma palavra, frase, número ou outra sequência de caracteres que é lido igualmente de trás para frente ou de frente para trás, por exemplo, madam ou racecar;
- Há diferentes algoritmos que podem ser usados para verificar se uma frase ou uma string é um palíndromo;
- O modo mais fácil é inverter a string e compará-la com a string original. Se as duas strings forem iguais, teremos um palíndromo;
- Também podemos usar uma pilha para fazer isso, mas amaneira mais fácil de resolver esse problema com uma estrutura de dados é usando um deque:
  - Antes de começar a analisar a lógica do algoritmo, devemos verificar se a string passada como parâmetro é válida. Se não for, devolveremos false;
  - Como podemos receber uma string com letras tanto minúsculas quanto maiúsculas, transformamos todas as letras em minúsculas e removemos também todos os espaços;
  - Em seguida, inserimos todos os caracteres da string no deque usando enqueue;
  - Enquanto tivermos elementos no deque e a string for um palíndromo, removemos um elemento da frente e um de trás;
  - Para ser um palíndromo, os dois caracteres removidos do deque devem ser iguais. Se os caracteres não coincidirem, a string não será um palíndromo;

---

## 5.17 - FILAS DE TAREFAS EM JAVASCRIPT

- Quando abrimos uma nova aba no navegador, uma fila de tarefas é criada;
- Isso ocorre porque apenas uma única thread trata todas as tarefas de uma única aba, e ela é chamada de laço de eventos;
- O navegador é responsável por várias tarefas, como renderizar o HTML, executar comandos com código JavaScript, tratar a interação com o usuário e executar e processar requisições assíncronas;

---

## RESUMO

Neste capítulo, conhecemos a estrutura de dados de fila (queue). Implementamos o nosso próprio algoritmo para representar uma fila e vimos como adicionar e remover elementos dela usando os métodos enqueue e dequeue, de acordo com o princípio de FIFO. Também conhecemos a estrutura de dados de deque, aprendemos a adicionar elementos na frente e no final do deque e a remover elementos da frente ou do final dessa estrutura.

Além disso, discutimos como resolver dois problemas famosos usando as estruturas de dados de fila e de deque: o jogo de Batata Quente (usando uma fila modificada: a fila circular) e um verificador de palíndromo usandoum deque.
