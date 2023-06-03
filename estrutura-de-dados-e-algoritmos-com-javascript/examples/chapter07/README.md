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

---

## 7.6 - MÉTODO size

- O próximo método a ser implementado é o método `size`, que devolve a quantidade de elementos presentes no conjunto;
- Há três forma de implemnatar esse método:
  - O primeiro método consiste em usar uma variável `length` e controlá-la sempre que os métodos `add` e `remov`forem usados;;
  - No segundo método, usamos uma função embutida da classe `Object` de JavaSript. A classe Object de JavaScript contém um método chamado keys que devolve um array com todas as propriedades de um dado objeto. Podemos então, usar a propriedade `length` desse array para devolver a quantidade de propriedades existentes no objeto `items`;
  - O terceiro método consiste em extrair cada propriedade do objeto `items` manualmente, contar a quantas propriedades há e devolver esse número;

---

## 7.7 - MÉTODO values

- Para implementar o método `values`, podemos usar um método embutido da classe `Object` chamado `values`;
- O método `OBject.values()` devolve um array com os valores de todas as propriedades de um dado objeto;
- Desse modo, inicialmente iteramos por todas as propriedades do objeto items, adicionamos essas propriedades em um array e o devolvemos;

---

## 7.8 - USANDO A CLASSE Set

- Depois de concluir a implementação da estrutura de dados para conjunto, é hora de usá-la;
- Alguns comando foram executados, afim de testar a classe `Set`;
- Depois de finalizado o teste, o resultado é que temos uma implementação muito semelhante à classe `Set` da ECMAScript 2015;

---

## 7.9 - OPERAÇÕES EM CONJUNTOS

- O conjunto é um dos conceitos mais básicos em matemática e é muito importamnte também em ciência da computação;
- Uma das principais aplicações em ciência da computação se dá em `bancos de dados`;
- Os conjuntos são usados no disign e no processamento de consultas;
- Quando criamos uma consulta SQL, podemos especificar se queremos ler todos os dados de uma tabela ou apenas um subconjunto deles;
- Também podemos obter dados que são comuns e duas tabelas, os quais estão presentes apenas em uma tabela;
- Essas operações são conhecidas no mundo SQL como junções (joins), e a base das junções SQL são as operações em conjuntos;

---

## 7.10 - UNIÃO DE CONJUNTOS

- Nesta seção, discutiremos o conceito matemático de união;
- Inicialmente devemos criar outro conjunto para representar a união dos dois conjuntos;
- Em seguida, acessamos todos os values do primeiro conjunto (a instância atual da classe Set), iteramos por eles e adicionamos todos os valores no conjunto que representa a union;
- Então fazemos exatamente o mesmo, mas com o segundo conjunto;
- Por fim, devolvemos o resultado;
- Os métodos ou funções que não têm efeito colateral são chamados de funções puras;
- Uma função pura não modifica a instância atual nem osparâmetros: ela apenas gera um novo resultado. Esse é um conceito muito importante do paradigma de programação funcional;

---

## 7.11 - INTERSECÇÃO DE CONJUNTOS

- Agora discutiremos o conceito matemático de intersecção;
- No método `intersection`, devemos encontrar todos os elementos dainstância atual da classe Set que também estejam presentes na instância de Set especificada (otherSet). Assim, em primeiro lugar, criamos outra instância de Set para que possamos devolvê-la com os elementos comuns;
- Em seguida, iteramos por todos os valores (values) da instância atual da classe `Set` e verificamos se o valor está presente na instância `otherSet` também;
- Podemos usar o método has, que implementamos antes neste capítulo, a fim de verificar se o elemento está presente na instância de `Set`. Então, se o valor estiver presente também na outra instância, nós o adicionamos à variável intersectionSet criada, e a devolvemos;

---

## 7.12 - APERFEIÇOANDO O MÉTODO intersection

- Usando o método intersection que criamos, precisaríamos iterar pelos valores de setA sete vezes, que é o número de elementos nesse conjunto, e comparar esses sete valores somente com os dois elementos de `setB`;
- Seria melhor se tivéssemos o mesmo resultado e tivéssemos de iterar somente duas vezes por `setB`;
- Menos iterações significa um custo menor de processamento, portanto vamos otimizar o nosso código a fim de iterar pelo conjunto com menos elementos;
- Desse modo, inicialmente criaremos outro conjunto para armazenar o resultado de nossa intersection;
- Vamos obter também os valores da instância atual do conjunto e do conjunto especificado, passado como parâmetro para o método intersection. Em seguida, supomos que a instância atual é o conjunto com mais elementos, e o
  conjunto especificado é o conjunto com menos elementos;
- Comparamos o tamanho dos dois conjuntos e, caso o conjunto especificado tenha mais elementos que a instância atual, trocamos os valores de biggerSet e smallerSet. Por fim, iteramos pelo conjunto menor para calcular os valores comuns entre os dois conjuntos e devolvemos o resultado;

---

## 7.13 - DIFERENÇA ENTRE CONJUNTOS

- O método intersection devolverá todos os elementos presentes nos dois conjuntos;
- O método difference devolverá todos os elementos que estão presentes em A, mas não em B. Inicialmente criaremos o nosso conjunto de resultados, pois não queremos modificar o conjunto atual nem o conjunto especificado. Em seguida, fazemos uma iteração por todos os valores da instância do conjunto atual;
- Verificamos se value (o elemento) está presente no conjunto especificado ;
- se ele não estiver em `otherSet`, adicionamos value no conjunto resultante;

---

## 7.14 - SUBCONJUNTOS

- A última operação de conjunto que discutiremos é o subconjunto;
- A primeira verificação que precisamos fazer é conferir o tamanho da instância atual da classe Set. Se a instância atual tiver mais elementos que a instância `otherSet`, ela não será um subconjunto;
- Em seguida, supomos que a instância atual é um subconjunto do conjunto especificado;
- Iteramos por todos os elementos do conjunto atual e verificamos se o elemento também está presente em `otherSet`;
- Se houver algum elemento que não esteja presente em `otherSet`, é sinal de que esse conjunto não é um subconjunto, portanto devolveremos False;
- Se todos os elementos estiverem também presentes em `otherSet`, a linha {5} não será executada e devolveremos true, a flag isSubset não será alterada;
- O método every será chamado enquanto a função de `callback` devolver true. Se a função de `callback` devolver false, o laço será interrompido, e é por isso que estamos também alterando o valor da flag isSubset na linha {5};
- Temos três conjuntos: setA é um subconjunto de `setB`, no entanto, `setA` não é subconjunto de `setC`, poraanto o resultado é `false`;

---

## 7.15 - ECMASCRIPT 2015 - A CLASSE Set

- A ECMAScript 2015 introduziu a classe `Set` como parte da API de JavaScript;
- Vamos agora observar como podemos usar também a classe `Set` nativa;
- A diferença entre a nossa classe `Set` e a classe `Set` da ES2015 é que o método values devolve um Iterator em vez de devolver o array com os valores. Outra diferença está no fato de termos desenvolvido um método size que devolve o número de alores armazenados em `Set`;
- A classe `Set` da ES2015 tem uma propriedade chamada size;
- Também podemos chamar o método delete para remover um elemento de set;
- O método clear também reinicia a estrutura de dados de Set. Ele tem a mesma funcionalidade que nós implementamos;

---
