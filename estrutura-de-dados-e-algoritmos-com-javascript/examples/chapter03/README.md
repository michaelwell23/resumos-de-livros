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

- Os arrays em JavaScript são objetos modificados, que significa que todo array que criamos terá alguns métodos disponíveis para uso;
- Os arrays em JavaScript são muito eficazes e tê mais recursos disponíveis que os arrays primitivos em outra linguagens;
- Podemos escrever funções básicas por conta própria, como acrescentar e remover elementos no meio da estrutura de dados;

Abaixo, há uma lista dos métodos essenciais disponíveis em um objeto array:

|   Método   | Descrição                                                                                                    |
| :--------: | :----------------------------------------------------------------------------------------------------------- |
|   concat   | Junta vários aarrays e devolve uma cópia dos arrays concatenados                                             |
|   every    | Itera por todos os elementos do array, verificando uma condição desejada até que `false` seja devolvido      |
|   filter   | Cria um array com todos os elementos avaliados com `true` pela função especifica                             |
|  foreach   | Executa uma função específica em cada elemento do array.                                                     |
|    join    | Reúne todos os elementos do array em uma string.                                                             |
|  indexOf   | Pesquisa o array em busca de elementos específicos e devolve a sua posição.                                  |
| lasIndesOf | Devolve a posição do último item do array que corresponda ao critério de pesquisa.                           |
|    map     | Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que   |
|            | correspondam ao critério.                                                                                    |
|  reverse   | Inverte o array, de modo que o último item se torne o primeiro, e vice-versa.                                |
|   slice    | Devolve um novo array a partir do índice especificado.                                                       |
|    some    | Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido. |
|    sort    | Organiza o array em ordem alfabética ou de acordo com a função especificada.                                 |
|  toString  | Devolve o array na forma de uma string.                                                                      |
|  valueOf   | É semelhante ao método toString e devolve o array na forma de uma string.                                    |

Alguns desses métodos são muito úteis quando tralhados com `programação funcional

---

## 3.17 - JUNTANDO VÁRIOS ARRAYS

- Considere um cenário em que há vários arrays diferentes e precisamos juntar todos eles em um único array;
- A linguagem JavaScript já tem um método chamado `concat` capaz de fazer isso;
- Ele pode receber quantos arrays e objetos/elementos forem necessários para o array;
- Os arrays são concatenados no arra especificado na ordem em que os argumento forem passado para o método;

---

## 3.18 - FUNÇÕES DE INTERAÇÃO

- Ás vezes, precisamos iterar pelos elementos de um array, e podemos fazer isso usando um laço;
- A linguagem JavaScript tem alguns métodos de iteração embutidos, que podem ser usado com arrays;
- Podemo exemplificar uma condição utilizando `?` caso a condição for _true_ ou `:` caso a condição for _false_;
- Também podemos utilizar a ` função de de seta` para deixar a função ainda mais curta e legivel;

---

## 3.19 - ITERANDO COM O MÉTODO EVERY

- O primeiro método que analisaremos é o `every`, o qual itera pelos elementos do array até a função devolva o primeiro `false`, e assim a iteração é interrompida

---

## 3.20 - ITERANDO COM O MÉTODO SOME

- O método `some` apresenta um comportamento contrário ao método `every`;
- O método `some` itera pelos elementos do array até que a função devolva `true`;
- Após o returno de `true` a interação é interrompida;

---

## 3.21 - ITERANDO COM FOREACH

- Também podemos fazer uma ineração em todo o array utilizando a função `forEach`. O resultado será o mesmo que usar um laço for com o código da função dentro dele;

---

## 3.22 - USANDO MAP E FILTER

- A liguagem JavaScript tem outros dois métodos iteradores que devolve um novo array com um resultado;
- O primeiro é o `map`. Ele retorna um array com o resultado da função passada como parâmetro dentro do método, podendo saber o resultado de cada iteração;
- O outro método é o `filter`, o qual devolve um novo array com os elementos para os quais a função devolveu `true`;

---

## 3.23 - USANDO O MÉTODO REDUCE

- Por fim, temos o método `reduce`;
- Podemos usar essa função para devolver um valor que será somado a uma acumulador, o qual será devolvido depois que o método `reduce` parar de executar.
- Isso pode ser útil ao somar todos os valores de um array;

- Os métodos `map`, `filter` e `reduce` constituem a base da programação funcional em JavaScript;

---

## 3.24 - ECMASCRIPT 6 E AS NOVAS FUNCIONALIDADE DE ARRAY

- A linguagem JavaScript tem novas funcionalidade baseadas nas especificações do `ECMAScript 2015 (ES6 OU ES2015)` ou em especificações mais recentes;
- Abaixo, há uma lista dos novos métodos adicionados:

|   Método   | Descrição                                                                                                                                            |
| :--------: | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| @@iterator | Devolve um objeto iterador que contém os pares chave/valor do array; pode ser chamado sincronamente para obter a chave/valor dos elementos do array. |
| copyWithir | Copia uma sequência de valores do array na posição de um índice de início.                                                                           |
|  entries   | Devolve @@iterator, que contém pares chave/valor.                                                                                                    |
|  includes  | Devolve true caso um elemento seja encontrado no array, e false caso contrário. Foi adicionado na ES2016.                                            |
|    find    | Busca um elemento no array, dada uma condição desejada (função de callback), e devolve o elemento caso seja encontrado.                              |
| findIndex  | Busca um elemento no array, dada uma condição desejada (função de callback), e devolve o índice do elemento caso seja encontrado.                    |
|    fill    | Preenche o array com um valor estático.                                                                                                              |
|    from    | Cria um novo array a partir de um array existente.                                                                                                   |
|    keys    | Devolve @@iterator, contendo as chaves do array.                                                                                                     |
|     of     | Cria um novo array a partir dos argumentos passados para o método.                                                                                   |
|   values   | Devolve @@iterator, contendo os valores do array.                                                                                                    |

- Junto com esses métodos, a API de Array também provê uma forma de iterar pelo array com o objeto `Iterator`, que pode ser obtido da instância do array e usado no laço `for...of`;

---

## 3.25 - ITERANDO COM O LAÇO FOR...OF

- A ES2015 introduziu o laço `for...of` para iterar pelos valores de um array;

---

## 3.26 - USANDO O OBJETO @@iterator

- A classe Array tem uma propriedade chamada @@iterator introduzida na ES2O15;
- Para utilizá-la, é necessário acessar a propriedade `Symbol.iterator` do array;
- Podemos chamar individualmente o método `next` do iterador para obter o valor seguinte do array;
- Também podemos aprensetar todos os valores de um array usando o métodp `for...of`;
- Quando fizermos a iteração pelo array e não houver mais valores para iterar, o código `iterator.next()` retornará `undefined`;

---

## 3.27 - MÉTODOS ENTRIES, KEYS E VALUES DE ARRAY

- A ES2015 também introduziu três formas de obter interadores de um array;
  - A primeira é o método `entries` que devolve `@@iterator` que contém pares chave/valor;
    - Ser capaz de obter pares chave/valor é muito conveniente quando se está trabalhando com conjuntos, dicionários e maras de hash;
  - O método `keys` devolve `@@iterator`, que contém as chaves do array;
    - Quando não há mais valores para iterar, o código `aKeys.next()` devolverá `undefined` como value e done como true. Se done tiver valor false,significa que ainda há mais chaves para iterar no array;
  - O método `values` que devolve `@@iterator`, que contém os valores do array;
- É bom lembrar que nem todas as funcionalidades da ES2015 são tratadas pelos navegadores. Por esse motivo, a melhor maneira de testar esse código é com o Babel;

---

## 3.28 - USANDO O MÉTODO FROM

- O método `Array.from` cria outro array a pertir de um array existente;
- Também é possível passar uma função para que possamos determinar quais valores queremos mapear;

---

## 3.29 - USANDO O MÉTODO ARRAY.of

- O método `Array.of` cria um outro array a partir dos argumento passados para o método;
- Também podemos usar esse método para fazer uma cópia de um array existente;

---

## 3.30 - USANDO MÉTODO FILL

- O método `fill` peenche o array com um valor;
- Podemos preencher o array com s vales inseridos como argumento;
- Se for inserido um único valor todos os valores do array terão aquele valor;
- Podemos passar dois valores onde o primeir valor representa a valor e o segundo valor representa o a chave, fazendo com que todos os valores restantes daquela posição sejam preenchidos com o valor da primeira posição;
- Também é possível passar um terceiro valor, para determinar o índice final do valor, fazendo com que os valores entre o segundo argumento e o terceiro argumento seja preenchidos com o valor do primeiro argumento;
- O método `fill` é ótimo se quisermos criar um array e inicializar seus valores;

---

## 3.31 -USANDO MÉTODO copyWithin

- O método `copyWithin copia uma sequência de valores do array para a posição de um índice de ínicio;
- Soponhamos que queremos copiar os valores 4,5,6 para as primeiras três posições do array, o resultado no array será [4,5,6,4,5,6].

---

## 3.32 - ORDENANDO ELEMENTOS

- O JavaScript possui um método de ordenação e dois métodos de pesquisa disponíveis;
- o método `reverse` pode ser aplicado, o último item será o primeiro e vice-versa;
- Também podemos utilizar o `sort`;
  - Ele não ordena numeros corretamente;
  - Isso ocorre por que o método `sort` deixa os elementos em ordem lexicogáfica e pressupões quee todos so elemento são strings;
  - O `sort` pode recever um pârametro de função, assim podemos criar uma função e passá-la para o `sort`e ter como resultado um array em ordem crescente;

---

## 3.33 - ORDENAÇÃO PERSONALIZADA

- Podemos ordenar um array que tena qualquer tipo de objeto e passar para o `sort`uma função que compara os elementos de acordo com o que for necessário;
- Suponhamos que queremos ordenar um objeto de pessoa de acordo com a idade;
- Podemos criar uma função que compara as idades de cada elemento do array e depois passá-la como parametro do método `sort`;

---

## 3.34 - ORDENANDO STRINGS

Um dos problemas das comparações me JavaScript é que ea linguagem compara os caracteres de acordo com o seu valor `ASCII`. Nessa forma de comparação, as letras são convertidas para um numero que representa os caracteres nesse valor, depois o método compara esses numeros de acordo com a ordem. Por exemplo, A,J,a e j têm os seguintes valores ASCII decimais: A: 65, J: 74, a: 97 e j: 106. Como podemos perceber, as letras maíusculas vêm primeiro nos valores ASCII. A melhor forma de ordenar os elementos do array é utilizando o método `laceleCompare` dentro da função `sort`;

---

## 3.35 - PESQUISA

Temos duas opções para pesquisa: o método `indexOf`, que devolve o índice do primeiro elemento correspondente ao argumento passado, e `lastIndexOf`, que devolve o índice do último elemento encontrado, correspondente ao argumento passado.

---

## 3.36 - ECMASCRIPT 2015 - OS MÉTODOS FIND E FINDINDEX

Os métodos find e findIndex recebem uma função de callback, a qual buscará um valor que satisfaça a condição presente na função de teste. A diferença entre find e findIndex é que o método find devolve o primeiro valor do array que satisfaça a condição proposta. O método findIndex, por outro lado, devolve o índice do primeiro valor do array que satisfaça a condição. Caso o valor não seja encontrado, undefined serádevolvido.

---

## 3.37 - ECMASCRIPT 2016 - USANDO O MÉTODO INCLUDES

- O método includes devolve true caso um elemento seja encontrado no array, e false caso contrário;
- Também podemos passar um índice a partir do qual queremo que o array faça a pesquisa do valor;

---

## 3.38 - CONVRTENDO UM ARRAY EM UMA STRING

- Se quisermos exibir todos os elementos de um array em uma única string, podemos usar o método `toString`;
- Se quisermos separar os elementos com um separador diferente da vírgula, podemos utilizar o `join`;

---

## 3.39 - CLASSE TYPEARRAY

Podemos armazenar qualquer tipo de dado em arrays JavaScript. Isso se deve ao fato de os arrays JavaScript não serem fortemente tipados.
`TypedArray` foi criado para que pudéssemos trabalhar com arrays contendo um único tipo de dado. A sua sintaxe é `let myArray = new TypedArray`(length), em que `TypedArray` deve ser substituído por uma classe `TypedArray`, conforme especificado na tabela a seguir:

![Tabela typepArray](/cap03/img/img3_40.png)

---

## 3.40 - ARRAY EM TYPESCRIPT

- Todo o código-fonte deste capítulo é um código TypeScript válido. A diferença é que o TypeScript fará verificação de tipos em tempo de compilação para garantir que estejamos manipulando somente arrays nos quais todos os valores tenham o mesmo tipo de dado.
- Por causa da inferência de tipo, o TypeScript entende que a declaração do array numbers é igual a `const numbers: number[]`. Por esse motivo, não precisamos sempre declarar explicitamente o tipo da variável se ela for inicializada em sua declaração.

---

## RESUMO

Neste capítulo, descrevemos a estrutura de dados mais usada em programação: os arrays. Vimos como declarar, inicializar e atribuir valores, assim como acrescentar e remover elementos. Conhecemos os arrays bidimensionais e multidimensionais, bem como os principais métodos de um array, os quais serão muito úteis quando começarmos a criar os nossos próprios algoritmos em capítulos futuros.

Também conhecemos os novos métodos e funcionalidades acrescentados na classe Array nas especificações ECMAScript 2015 e 2016.

Por fim, vimos também como garantir que o array contenha somente valores do mesmo tipo usando TypeScript ou o seu recurso de verificação em tempo de compilação, para arquivos JavaScript.

No próximo capítulo, veremos as pilhas, que podem ser tratadas como arrays com um comportamento especial.
