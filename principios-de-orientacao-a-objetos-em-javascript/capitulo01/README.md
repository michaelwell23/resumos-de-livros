# CAPÍTULO 01 — TIPOS PRIMITIVOS E DE REFERÊNCIA

Muitos desenvolvedores quando começam a aprender JavaScript, ficam desorientados porque a linguagem não tem um suporte formal para classes. Em vez de definir as classes desde o início, você pode simplesmente escrever código e criar as estruturas de dados à medida que precisa delas. Como não há classes, também não há agrupamento de classes, os chamados `pacotes` (packages). Programar em JavaScript é como começar com uma folha em branco: você pode organizar tudo do jeito que quiser. Para iniciantes, essa liberdade pode ser confusa, mas depois de se habituar a ela, verá que o JavaScript é uma linguagem altamente flexível, que se adapta às suas preferências facilmente.
Quase todos os dados em JavaScript são objeto ou são acessados por meio deles. De fato, até as funções são representadas como objetos, o que as tornam funções de primeira-classe. Trabalhar com objetos e entendê-los são aspectos fundamentais para compreender o JavaScript com um todo. Os objetos são extremamente flexíveis e têm funcionalidade que geram padrões únicos e interessantes simplesmente impossíveis de serem criados em outras linguagens.

## O QUE SÃO TIPOS?

O JavaScript utiliza dois tipos: `primitivos` e de `referência`. O `tipo primitivos` são armazenados como tipos de dados simples. Os `tipos de referência` são armazenados como objetos e, na realidade, são referência à posição de memória. O JavaScript permite tratar tipos primitivos como tipos de referência para fazer com que a linguagem seja mais consistente para o desenvolvedor. A linguagem controla as variáveis de um escopo em particular usando um `objeto variável`. Valores primitivos são armazenados diretamente no objeto variável, enquanto os valores de referência são criados como ponteiros no objeto variável. Valores primitivos e valores de referência se comportam de modo bem diferente, embora possam parecer iguais à primeira vista.

### TIPOS PRIMITIVOS

Os tipos primitivos representam simples porções de dados armazenados. Há cinco tipos primitivos em JavaScript:

|           |                                                                                     |
| :-------: | :---------------------------------------------------------------------------------- |
|  Boolena  | true ou false                                                                       |
|  Number   | Qualquer valor numérico ou de ponto flutuante                                       |
|  String   | Um caractere ou uma sequência de caracteres delimitados por aspas simples ou duplas |
|   Null    | Um tipo primitivo que tem apenas um valor: null                                     |
| Undefined | É o valor atribuido a uma variável não inicializada                                 |

Os três primeiros tipos se comportam de forma semelhante, enquanto os dois últimos são um pouco diferentes. Todos os tipos primitivos têm representações literais de seus valores. Os `literais` representam valores que não são armazenados em uma variável.

```js
//Stings
var name = 'Nichola';
var selection = 'a';

//Number
var count = 25;
var cost = 1.51;

//Boolean
var found = true;

//null
var object = null;

//undefined
var flag = undefined;
var ref; //valor atribuido automaticamnete
```

Quando um valor primitivo é atribuído a uma variável, o valor é copiado para essa variável. Isso significa que se você definir que uma variável é igual a outra, cada variável terá a sua própria cópia do dado.

```js
var color1 = 'red';
var color2 = color1;
```

No exemplo, embora `color1` e `color2` contenham o mesmo valor, eles são totalmente diferentes um do outro, e você pode mudar o valor `color1` sem afetar o `color2` e vice-versa. Isso ocorre porque há dois lugares diferentes de armazenamento, um para cada variável.
Cada variável que contém um valor primitivo usa seu próprio espaço de armazenamento, as alterações em uma variável não afetam a outra.

```js
var color1 = 'red';
var color2 = color1;

console.log(colo1); // "red"
console.log(colo2); // "red"

color1 = 'blue';

console.log(colo1); // "blue"
console.log(colo2); // "red"
```

O código acima, `color1`tem seu valor alterado para "blue" e color2 preserva o valor original, "red". [Exemplo 1.1](/capitulo01/exemplos/ex1/ex1.1.js);

---

### IDENTIFICANDO TIPOS PRIMITIVOS

A melhor maneira de identificar tipos primitivos é por meio do operador `typeof`, ele retorna uma string indicando o tipo de dado.

```js
console.log(typeof 'Nichola');
console.log(typeof 10);
console.log(typeof 5.1);
console.log(typeof true);
console.log(typeof undefined);
```

A parte confusa é quando envolve o `null`. Ao executar `typeof null, o resultado é “object`. Podemos argumentar que `null` é uma referência a um objeto vazio, porém ainda assim é confuso. Isso é reconhecido como um erro pelo TC39, um comitê que faz o design e mantém o JavaScript.

```js
console.log(typeof null); //object
```

A melhor maneira de determinar se um valor é null é compará-lo diretamente com null. [Exemplo 1.2](/capitulo01/exemplos/ex1/ex1.2.js);

```js
console.log(value === null); //true ou false
```

```text
COMPARANDO SEM CONVERSÃO

Note que esse código usa o operador de igualdade triplo ( === ) em vez de usar o operador de
igualdade duplo. Isso ocorre porque o operador triplo faz a comparação sem converter a
variável para outro tipo. Para entender o motivo pelo qual isso é importante, veja o código a
seguir:

console.log("5" == 5); // true
console.log("5" === 5); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

Quando a igualdade dupla é utilizada, a string "5" e o número 5 são considerados iguais
porque a igualdade dupla converte a string em um número antes de fazer a comparação. O
operador de igualdade tripla não considera esses valores iguais porque eles são de tipos
diferentes. Da mesma forma, quando comparamos undefined e null , a igualdade dupla
mostra que eles são equivalentes, enquanto a igualdade tripla diz que não. Quando estiver
tentando identi car um null , use a igualdade tripla para que você possa identi car o tipo
corretamente.
```

---

### MÉTODOS PRIMITIVOS

Strings, Number, e Booleans contêm métodos. As Strings em particular, têm vários métodos para ajudar a trabalhar com elas.
[Exemplo 1.3](/capitulo01/exemplos/ex1/ex1.3.js);

```js
var name = 'Nicholas';
var lowercaseName = name.toLowerCase(); // Converte para minúsculo
var firstLetter = name.charAt(0); // Obtém o primeiro caractere
var middleOfName = name.substring(2, 5); // Obtém os caracteres de 2 a 4
var count = 10;
var fixedCount = count.toFixed(2); // Converte para "10.00"
var hexCount = count.toString(16); // Converte para "a"
var flag = true;
var stringFlag = flag.toString(); // Converte para "true"
```

`NOTA: Apesar de terem métodos, os valores primitivos não são objetos. O JavaScript faz com que eles pareçam ser objetos para oferecer uma experiência consistente na linguagem, como será visto adiante.`
