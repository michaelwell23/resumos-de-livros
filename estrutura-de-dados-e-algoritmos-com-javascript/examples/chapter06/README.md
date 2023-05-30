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

- Como no caso do método push, há dois cenários para remover elementos de uma lista ligada:
  - O primeiro é aquele que removemos o primeiros elemento;
    - Sequiser remover o primeiro elemento, basta fazer `head` apontar para o segundo elemento da lista;
    - Fazendo uma referência ao primeiro elemento da lista;
    - Assun, a variável `current` é uma referencia ao primeiro elemento da lista;
  - O segundo é aquele que removemos qualquer elemento que não seka o primeiro; - Se queremos remover o último item ou um item do meio da lista,devemos iterar pelos nós da lista ligata até chegar à posição desejada;
    - A variável `current` sempre fará refrência ao elemento atual da lista que estivermos percorrendo com um laço;
    - Devemos ter uma referêncua ao elemento que estiver antes, chamado do `previous`;
    - Depois de iterar até a posição desejada, a variável current armazenará o nó que queremos remover da lista ligada. Assim, para remover o nó
      `current`, tudo que temos a fazer é ligar `previous.next` a `current.next`;
    - Desse modo, o nó current ficará perdido na memória do computador e estará disponível para limpeza pelo coletor de lixo;

---

## 6.5 - PERCORRENDO A LISTA COM UM LAÇO ATÉ ALCANÇAR A POSIÇÃO DESEJADA

- No método remove, devemos percorrer a lista com um laço até alcançar o index (posição) desejado;
- O trecho de código para alcançar o index desejado com um laço é comum nos métodos da classe LinkedList;
- Por esse motivo, podemos refatorá-lo e extrair a sua lógica em um método separado para que ele seja reutilizado em lugares diferentes;

---

## 6.6 - REFATORANDO O MÉTODO REMOVE

- Podemos refatorar o método remove e usar o método `getElementAt` criado. Para isso, podemos substituir algumas linhas do código;

---

## 6.7 - INSERINDO UM ELEMENTO EM QUALQUER POSIÇÃO

- A seguir, implementaremos o método insert, que possibilita inserir um `element` em qualquer posição
- Como estamos lidando com posições (índices), devemos verificar se os valores não estão fora do interval;
- Se o valor estiver fora do intervalo, devolveremos false para informar que nenhum item foi adicionado na lista;
- Se a posição for válida, trataremos os diferentes cenários. O primeiro é aquele em que precisamos adicionar `element` no início da lista, isto é, na primeira posição;
- temos a variável `current` que faz referência ao primeiro elemento da lista. O que precisamos fazer é definir o valor de `node.next` para `current`;
- Em seguida, basta alterar a referência head para node, e teremos um novo elemento na lista.
- Para adicionar `element`no meio ou no final da lista. Em primeiro lugar, devemos percorrer a lista com um laço até a posição desejada seja alcançada;
- Ao sair do laço, a variável previous referenciará um elemento antes do index em que queremos inserir o novo elemento, e a variável current referenciará um element após a posição em que gostaríamos de inserir o novo elemento;
- Portanto, em primeiro lugar, devemos fazer uma ligação entre o novo elemento (node) e current e, então, precisamos alterar a ligação entre previous e current. Devemos fazer previous.next apontar para node em vez de apontar para current;
- Se tentarmos adicionar um novo element na última posição, previous será uma referência ao último item da lista, e current será undefined. Nesse
  caso, node.next apontará para current, previous.next apontará para node e teremos um novo element na lista.

---

## 6.8 - MÉTODO INDEXOF: DEVOLVENDO A POSIÇÃO DE UM ELEMENTO

- O próximo método a ser implementado é o método `indexOf`;
- Ele é o método que recebe o valor de um elemento e devolve sua posição caso ele seja encontrado;
- É preciso de uma variável que possa iterar pela lista, a variável `current`, e o seu primeiro valor é `head`;
- Em seguida, iteramos pelos elementos, começando pelo `head` até que o tamanho da lista seja alcançado;
- Em cada iteração, é verificado se o elemento que estamos procurando é o elemento no nó `current`;
- Se o elemento que estamos procurando for o elemento em `current` devolvemos a sua posição. Se não for, iteramos para o próximo nó da lista;
- O laço não será executado se a lista estiver vazia ou se alcançarmos o final dela. Se o valor não for encontrado, devolvemos -1;

---

## 6.9 - REMOVENDO O ELEMENTO DA LISTA LIGADA

- Com o métdo `indexOf` criado, podemos implementar o método `remove`;
- Se passarmos o valor do elemento, podemos determinar a sua posição e chamar o método `removeAt` passando a posição encontrada;
- É muito mais simples, além de mais fácil, caso haja a necessidade de modificar o código do método `removeAt`;
- Desse modo, não será preciso manter dois códigos para remover um item da lista. Só precisamos de um;
- As retrições de limites também serão verficadas pelo método `removeAt`;

---

## 6.10 - MÉTODOS isEmpty, size e getHead

- O método `size` devole o número de elementos da lista;
- De modo diferente das classes que implementamos em capítulos anteriores, a variável `count` da lista é controlada interanamente, pois a classe foi implementada do zero;
- O método `isEmpty` develverá _true_ se não houver nenhum elemento na lista, e _false_ caso contrátio;
- A variável `head`é uma variável _privada_ da classe _LinkedList_ (pois supomos que somente os métodos da classe serão acessados);
- Assim, se precismaos iterar pela lista fora da implementação da classe, podemos disponibilizar um método para obter o primeiro elemento da lista;

---

## 6.11 - MÉTODO toString

- O método `toString` converte o objeto _LinkedList_ em uma string;
- Se a lista estiver vazia, uma string vazia será retornada;
- Se a lista não estiver vazia, inicializamos a string que será devolvida no final do método com o valor do primeiro elemento;
- Depois, iteramos por todos os outros elementos da lista adicionando os valors a string;
- No final, devolvemos a string com o conteúdo da lista;

---

## 6.12 - LISTA DUPLAMENTE LIGADA

- A diferença entre uma lista duplamente ligada e uma lista ligada comum é que, nessa última, fazemos a ligação somente de um nó para o próximo, enquanto, em uma lista duplamente ligada, temos uma ligação dupla: uma para o próximo elemento e outra para o elemento anterior;
- A lista duplamente ligada nos oferece duas maneiras de iterar por ela: doinício para o fim ou vice-versa. Também podemos acessar o próximo elemento ou o elemento anterior de um nó em particular. Por causa desse comportamento, para cada nó, temos de manter também o controle sobre
  o seu nó anterior;
- Na lista ligada simples, quando iteramos pela lista e ultrapassamos o elemento desejado, é necessário retornar ao início da lista e reiniciar a
  iteração. Essa é uma das vantagens da lista duplamente ligada;

---

## 6.13 - INSERINDO UM NOVO ELEMENTO EM QUALQUER POSIÇÃO

- Inserir um novo element em uma lista duplamente ligada é muito semelhante à inserção em uma lista ligada. A diferença é que, na lista ligada, controlamos apenas um ponteiro (next), enquanto, na lista duplamente ligada, temos de controlar as propriedades `next` e `prev`;
- Na classe _DoublyLinkedList_, sobrescreveremos o método insert, o que significa que aplicaremos um comportamento diferente daquele da classe _LinkedList_.
- O algoritmo para inserir um novo elemento em qualquer posição, analisa três cenários possiveis: adicionando um novo `element` na primeira posição, na última posição e no meio da lista;

---

## 6.14 - REMOVENDO ELEMENTOS DE QUALQUER POSIÇÃO

- Remover elementos de uma lista duplamente ligada também é muito semelhante à remoção em uma lista ligada;
- A única diferença é que devemos definir o ponteiro para o elemento anterior também;
- Devemos tratar três cenários: remover um elemento do início da lista, remover um elemento do meio da lista e remover o último elemento;

---

## 6.15 - LISTAS LIGADAS CIRCULARES

- Uma lista circular pode ter apenas uma direção de referência ou uma referência dupla;
- A única diferença entre uma lista ligada circular e uma lista ligada é que o ponteiro para o próximo item do último elemento não faz uma referência a `undefined`, mas ao primeiro elemento;
- Em uma `lista circular duplamente ligada`, `tail.next` aponta para o elemento `head` e `head.prev` aponta para o elemento `tail`;
- A classe CircularLinkedList não precisa de nenhuma propriedade adicional, portanto basta estender a classe LinkedList e sobrescrever os métodos necessários para aplicar o comportamento especial;

---

## 6.17 - INSERINDO UM NOVO ELEMENTO EM QUALQUER POSIÇÃO

- A lógica para inserir um element em uma lista ligada circular é a mesma usada para inserir um element em uma lista ligada comum;
- A diferença na lista ligada circular é que precisamos também ligar a referência next do último nó ao nó apontado por head;

---

## 6.18 - REMOVENDO ELEMENTOS DE QUALQUER POSIÇÃO

- Para remover um element de uma lista ligada circular, só precisaremos nos preocupar em altera o elemento head da lista;
- O primeiro cenário para remover um element é a remoção desse elemento de uma lista com um único node;
- O segundo cenário consiste em remover o primeiro element de uma lista não vazia;

---

## 6.19 - LISTAS LIGADAS ORDENADAS

- Uma lista ligada ordenada é uma lista que mantém seus elementos ordenados;
- Para manter todos os elementos ordenados, em vez de aplicar um algoritmo de ordenação, inseriremos element em sua posição correta a fim de manter a lista sempre ordenada;
- Para começar, declaramos a classe `SortedLinkedList` que herdará todas as propriedades e os métodos da classe `LinkedList`, mas como essa classe tem um comportamento especial, é preciso de uma funçãi para comparar os elemento;

---

## 6.20 - INSERINDO ELEMENTOS NA ORDEM

- Como não queremos permitir a inserção de elementos em qualquer índice, começaremos atribuindo um valor default ao parâmetro index;
- Se a lista estiver vazia, basta chamar o método insert de LinkedList passando 0 (zero) como index;
- Se a lista não estiver vazia, temos de obter o que é conhecido como o index correto para inserir element;
- chamaremos o método insert de LinkedList, passando a posição a fim de manter a lista ordenada;
- Para obter o índice correto a fim de inserir element, criamos um método chamado getIndexNextSortedElement.
- Nesse método, iteramos pela lista até encontrar uma posição para inserir element ou até que todos os elementos tenham sido percorridos. Nesse último cenário, o index devolvido será o tamanho (size) da lista;
- Para comparar os elementos, usaremos compareFn, passado para o construtor da classe. Quando o element que queremos inserir na lista for menor que o elemento current da lista, teremos encontrado a posição para a inserção;

---

## 6.21 - CRIANDO A CLASSE StackLinkedList

- Também podemos usar a classe LinkedList e suas variantes como estruturas de dados internas a fim de criar outras estruturas de dados como
  `pilha`, `fila` e `deque`;
- Na classe StackLinkedList, em vez de usar um array ou um objeto JavaScript para armazenar items, usamos uma DoublyLinkedList;
- O motivo para usar uma lista duplamente ligada no lugar de uma lista ligada é que, para a pilha, os elementos serão inseridos no final da lista e a remoção também será no final;
- A classe `DoublyLinkedList` mantém uma referência ao último element da lista (tail), portanto não é necessário iterar por todos os elementos da lista para acessá-lo; há um acesso direto ao primeiro e ao último elementos, reduzindo o esforço de processamento e mantendo o custo em O(1), como
  em nosso implementação original da Stack;
- Estamos chamando os métodos da classe DoublyLinkedList para todos os demais métodos.
- Usar a estrutura de dados de lista ligada internamente na implementação de pilha é mais fácil, pois não precisamos criar o código do zero, mantendo o custo de processamento e deixando o código mais legível!

---

## RESUMO

Neste capítulo, conhecemos a estrutura de dados da lista ligada e suas variantes: a lista duplamente ligada, a lista ligada circular e a lista ligada ordenada. Vimos como adicionar e remover elementos de qualquer posição e como iterar por uma lista ligada. Vimos também que a principal
vantagem de uma lista ligada em relação a um array está no fato de ser possível adicionar e remover elementos facilmente da lista, sem precisar
deslocar seus elementos. Assim, sempre que precisar adicionar e remover muitos elementos, a melhor opção será usar uma lista ligada no lugar de
um array.

Aprendemos também a criar uma pilha usando uma lista ligada interna para armazenar seus elementos, em vez de usar um array ou um objeto, e conhecemos também as vantagens de usar outra estrutura de dados para tirar proveito das operações disponíveis, sem ser necessário escrever toda a
lógica do zero.

o próximo capítulo, conheceremos os conjuntos: uma estrutura de dados que armazena elementos únicos.
