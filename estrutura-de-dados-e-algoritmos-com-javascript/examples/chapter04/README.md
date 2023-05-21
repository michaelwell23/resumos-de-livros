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

## 4.5 - DANDO UMA ESPIADA NO ELEMENTO QUE ESTÁ NO TOPO DA PILHA

- Se queisermos saber qual foi o último elemento adicionado em nossa pilha, podemos usar o método `peek`.
- Esse método delverá o item que está no topo da pilha;
- o último item de uma array pode ser obtido usando `length - 1`;

---

## 4.6 - VERIFICANDO SE A PILHA ESTÁ VAZIA

- Ao usar o método `isEmpty`, podemos simplesmente verificar se o tamanho do array interno é 0;
- De modo semelhante à propriedade `length` da classe array, também podemos implementar `length`.Para coleções em gera podemos usar o termo `size` no lugar de length, daí basta devolver o valor de length;

---

## 4.7 - LIMPANDO OS ELEMENOS DA PILHA

- Podemos implementar o método `clear`, o qual simplesmente esvazia a pilha, removendo todos os seus elementos;
- Uma implementação alternativa seria chamar o método `pop` até que a pilha esteja vazia.

---

## 4.8 - USANDO A CLASSE STACK

- A primeira tarefa deve ser instanciar a classe `Stack`. Em seguida, verfiicar se ela está vazia, usando o método criado `isEmpty`;
- A seguir, adicionaremos alguns elementos na pilha, no exemplos foram adicionados os numeros 8 e 5 usando o método `push`;
- Depois chamamos o método `peek`, na qual retorna o numero 8, porque esse foi o último elemento adicionado na pilha;
- Despois adicionaremos o 11;
- Se chamarmos o métodp `size`, 3 é o resultado, pois há três elementos na pilha;
- se chamarmo o métod `isEmpty` novamente, a saída será `false`;
- E por fim, adicionaremos o numero 5;
- Em seguida, removemos dois elementos da pilha chamando o método `pop`;
- Antes de chamar o método pop duas vezes, nossa pilha tinha quatro elementos. Após a execução do método pop duas vezes, a pilha agora tem apenas dois elementos: 5 e 8;

---

## 4.9 - CRIANDO UMA CLASSE JAVASCRIPT STACK BASEADA EM OBJETO

- AO trabalhar com um conjunto grande de dados, também é necessário analisar qual é o modo mais eficaz de manipular os dados;
- Para a maioria dos métodos, devemos iterar pelo array até encontrarmos o elmento que estamos procurando e, no cenário de pior caso, faremos a iteração por todas as posições do array, considerando que `n` é o tamanho do array;
- Se o array tiver mais elementos, demorará mais para iterar pelos elementos, em comparação com um array com menos elementos;
- Um array é um conjunto ordenado de elementos, e para mentê-los assim, seria necessário ter mais espaço na memória também;
- Seria melhor se pudéssemos acessar diretamente o elemento, usar menos espaço de memória e continuar tendo todos os elementos organizados conforme fosse necessário;
- No cénario de uma estrutura de dados de pilha, é possível usar um objeto para armazenar os elementos da pilha, mentê-los em ordem e obedercer igualmente ao princópio LIFO;
- Nessa versão da classe `Stack`, usaremos uma propriedade `count` para ajudar a manter o controle do tamnho da pilha;

---

## 4.10 - PUSH DE ELEMENTOS NA PILHA

- Como estamos trabalhando com um objeto, essa versão do método `push` permite fazer push somente de um único elmento de cada vez;
- Em JavaScript, um objeto é um conjunto de pares `chave` e `valor`. Para adicionar `element` à pilha, podemos usar a variável `count` como a chave do objeto `items`, e `element` será o seu valor;
- Depois de fazer push do elemento na pilha, incrementamos `count`;

---

## 4.11 - VERFICANDO SE A PILHA ESTÁ VAZIA E O SEU TAMANHO

- A propriedade `count` também funciona como o tamanho da pilha;
- Para o método `size`, podemos simplesmente devolver a propriedade `count`;
- Para verificar se a pilha está vazia, podems compara se o valor de `count` é 0;

---

## 4.12 - POP DE LEMENTOS DE PILHA

- Por não utilizarmos array para armaznar os elementos teremos que implementar a lógica para remover um elemento;
- O método `pop` pode retornar o elemento que foi removido da pilha;
- Para remover um elemento inicialmente devemos:
  - verificar se a pilha está vazia, e se estiver vazia devolver o valor `undefined`;
  - Se a pilha não estiver vazia decrementamos a propriedade `count`;
  - Armazenar o valor do topo da pilha para ser devolvido depois que o elemento for removido;
- Como estamos trabalhando com um objeto, para remover um valor específico de um objeto, podemos usar o operador `delete`;
- Para acessar o elemento do topo da pilha (último elemento adicionado: 8), precisamos acessar a chave com o valor 1. Então decrementamos a variável count de 2 para 1. Podemos acessar items[1], apagá-lo e devolver o seu valor;

---

## 4.13 - DANDO UMA ESPIDA NO TOPO E LIMPANDO A PILHA

- Para limpar a pilha, basta reiniciá-la com os mesmo valores usados no contrutor;
- Também poderíamos usar uma lógica utilizando o `while` para remover todos os elementos da pilha, respeitando o comportamento de LIFO;

---

## 4.14 - CRIANDO O MÉTODO toString

- Para essa versão com objeto, criamos um método `toString` para que possamos exibir o conteúdo da pilha, de modo semelahnte a um array;
- Se a pilha estiver vazia, basta devolver uma string vazia. Se não estiver, iniciamos a string com o primeiro elemento, que está na base da pilha;
- Então fazemos uma iteração por todas as chaves da pilha, até o seu topo, adicionando uma vírgula, seguida do próximo elemento;
- Se a pilha contiver um único elemento, a verficação da pilha e a interação por todas as chaves da pilha, não será executada;
- Com o método toString, concluímos essa versão da classe Stack. Esse é também um exemplo de como ter diferentes versões de código. Para o desenvolvedor que usar a classe Stack, não importa se a versão com array ou com objeto será usada; ambas têm a mesma funcionalidade, mas, internamente, o comportamento é muito diferente;

---

## 4.15 - PROTEGENDO OS ELEMENTOS INTERNOS DA ESTRUTURA DE DADOS

- Ao criar uma estrutura de dados ou um objeto que outros desenvolvedores poderão usar também, devemos proteger os elementos internos para que somente os métodos que expusermos sejam usados para modificar a estrutura interna;
- Precisamos garantir que os elementos sejam adicionados no topo da pilha e que não sejam possível adicionar elementos em sua base nem em qualquer outra posição aleatória;
- Usaremos a sintaxe ES2015 para criar a classe;
- As classes ES2015 são baseadas em protótipo;
- Embora uma classe baseada economize memória e escale melhor que as classes baseadas em funções, essa abordagem não nos permite declarar propriedades ou métodos `private`;
- Agora vamos explorar outras abordagens que nos permite ter propriedades `private` em JavaScript;

---

## 4.16 - CONVENÇÃO DE NOMENCLATURA COM UNDESCORE

- Alguns desenvolvedores preferem usar a convensão de nomenclatura com underscore para marcar um atributo como `private`;

```js
class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
  }
}
```

- Essa convenção consiste em inserir um underscore (\_) como prefixo no nome do atributo;
- No entanto, essa opção é apenas uma convenção;
- Ela não protege os dados e dependemos do bom senso do desenvolvedor que usará o nosso código;

---

## 4.17 - CLASSES ES2015 COM SÍMBOLOS NO ESCOPO
