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

---

## TIPOS DE REFERÊNCIA

Valores de referência são `instâncias` de tipos de referência e são sinônimos de objeto. Um objeto é uma lista não ordenada de `propriedades` de chave e valor. Quando o valor de uma propriedade for uma função, ela é chamada de `método`. As funções propriamente ditas, na verdade, são valores de referência em JavaScript, de modo que há pouca diferença entre uma propriedade que contém um array e uma que contém uma função, exceto pelo fato de que a função pode ser executada.

### CRIANDO OBJETOS

Podemos pensar em objetos JavaScript como nada mais que tabela hash.

![img1_2](/.github/img/cap01/img1_2.png);

Existem algumas maneiras de `instanciar` um objeto. A primeira é por meio do operador `new` e um `construtor`. Por convenção os nomes dos construtores em JavaScript iniciam com uma letra maiúscula para distingui-los de funções que não são construtoras.

```js
var object = new Object();
```

Os tipos de referência não armazenam o objeto diretamente na variável à qual ele foi atribuído. Em vez disso, ela armazena um ponteiro (referência) para a posição de memória em que esse objeto está. A principal diferença entre objetos e valores primitivos é essa: “Os valores primitivos são armazenados diretamente na variável em que são definidos, já os objetos não.

```js
var object1 = new Object();
var object2 = object1;
```

O código cria um objeto e então armazena uma referência em `object1`. Em seguida, `object2` recebe o valor de `object1`. Continua havendo somente uma única instância do objeto criado na primeira linha, mas ambas as variáveis agora apontam para esse objeto.

![Img1_2.1](/.github/img/cap01/img1_2.1.png);

### REMOVENDO REFERÊNCIA A OBJETOS

Em JavaScript não é realmente necessário se preocupar com alocações de memória ao usar tipos de referência. Pois a linguagem contém o `garbage-collection` (coletores de lixo). Mas, é melhor remover a referência aos objetos que não sejam mais necessários para que o coletor de lixo possa liberar a memória que está sendo referenciada.

```js
var object1 = new Object();

//faça algo

object1 = null; // remove a referência;
```

No caso, o `object1` é criado e usado antes de finalmente ser definido como `null`. Quando não houver mais referência a um objeto na memória, o coletor de lixo poderá usar essa área de memória para algo diferente. Remover a referência aos objetos é importante em aplicações grandes com grandes volumes de objetos.

### ADICIONANDO OU REMOVENDO PROPRIEDADES

Outro aspecto interessante sobre objetos em JavaScript é que podemos adicionar ou remover propriedades a qualquer momento.

```js
var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = 'Awesome!';
console.log(object2.myCustomProperty); //"Awesome!"
```

`NOTA Esse exemplo demonstra uma particularidade única do JavaScript: você pode modi car objetos quando quiser, mesmo que eles não tenham sido de nidos antes. Também há maneiras de evitar essas modi cações, como você verá mais adiante neste livro.`

No caso, `myCustomProperty` é adicionada a `object1` com valor igual a “Awesome!”. Também pode acessar a propriedade no `object2`, porque as duas variáveis aponta para o mesmo objeto.

---

## INSTANCIANDO TIPOS PRÓPRIOS

O tipo `Object` é somente um entre uma grande variedade de tipos de referência que o JavaScript oferece. Outros tipos próprios são mais especializados no que diz respeito ao uso pretendido e podem ser instanciados a qualquer momento.

|          |                                                      |
| :------: | :--------------------------------------------------- |
|  Array   | Uma lista ordenada de valores indexado numericamente |
|   Date   | Uma data e hora                                      |
|  Error   | Um erro de execução                                  |
| Function | Uma função                                           |
|  Object  | Um obejto genérico                                   |
|  RegExp  | Uma expressão regular                                |

Podemo instanciar cada tipo usando o objeto `new`.

```js
var itens = new Array();
var now = new Date();
var error = new Error('Something bad happened');
var func = new Function('Console.log("Hello World");');
var object = new Object();
var re = new RegExp('\\d+');
```

### FORMAS LITERAIS

Uma forma `literal` é uma sintaxe que permite definir um valor de referência sem criar um objeto explicitamente, usando o operador `new` e o construtor do objeto.

## LITERAIS DE OBJETOS E DE ARRAYS

Para definir um objeto com a sintaxe literal é preciso definir as propriedades de um novo objeto entre as chaves. As propriedades são compostas de um identificador ou de uma string, dois pontos é um valor com várias propriedades separadas por vírgula.

```js
var book = {
  name: 'Princípios de Orientação a objetos em JavaScript',
  year: 2014,
};
```

Também podemos usar strings para nomes de propriedade, é muito útil quando queremos definir um nome de propriedade usando espaço ou caracteres especiais.

```js
var book2 = {
  'name ': 'Princípios de Orientação a objetos em JavaScript',
  'year ': 2014,
};
```

Os exemplos acima são logicamente equivalentes ao mostrado logo abaixo, apesar das diferenças sintáticas. A escolha do padrão a ser usado cabe a você, pois a funcionalidades, em última instância, são as mesmas.

```js
var book3 = new Object();
book.name = 'Princípios de Orientação a objetos em JavaScript';
book.year = 2014;
```

Você pode definir um `literal de array` de forma semelhante, inserindo qualquer quantidade de valores separados por vírgula dentro de colchetes.

```js
var colors = ['red', 'blue', 'green'];
console.log('colors[0]'); //red
```

```js
var colors2 = new Array('red', 'blue', 'green');
console.log('colors[0]');
```

### LITERAIS DE FUNÇÕES

Usar o construtor `Function` normalmente é desaconselhável por ser mais difícil de manter, ler e depurar uma string de código do que o código em si, de modo que raramente, você verá o uso do construtor. Criar funções é muito mais simples e menos sujeito a erros quando usamos a forma literal.

```js
function reflact(value) {
  return value;
}

var reflect = new Function('value', 'return value');
```

O código define a função `reflect()` que retorna qualquer valor passado a ela. Mesmo no caso dessa função simples, a forma literal é mais fácil de escrever e de ser entendida se comparada ao código que utiliza o construtor.

### LITERAIS DE EXPRESSÕES REGULARES

As expressões regulares também possuem `literias` que permite definir essas expressões sem usar o construtor `RegExp`.

```js
var numbers = /\d+/g;

var numbers = new RegExp('\\d+', 'g');
```

É mais fácil lidar com a forma literal das expressões regulares em JavaScript do que usar o método com o construtor porque não é necessário se preocupar com caracteres de escape nas strings. Quando o construtor `RegExp` é usado, a expressão é passado na forma de uma string, de modo que é preciso usar o escape em qualquer barra invertida. Literais de expressões regulares são preferíveis ao método do construtor em JavaScript, exceto quando a expressão regular for construída dinamicamente a partir de uma ou mais strings.

---

## ACESSO A PROPRIEDADES

Além da notação de ponto, as propriedades em objetos JavaScript também podem ser acessadas usando a notação de colchetes com uma string.

```js
var array = [];
```

Com a notação de colchetes, o nome do método passa a ser incluído em uma string dentro de colchetes.

```js
var array = [];
array['push'](12345);
```

Essa sintaxe é muito útil quando é preciso decidir dinamicamente qual propriedade deverá ser acessada.

```js
var array = [];
var method = 'push';
array[method](12345);
```

Além da sintaxe, a única diferença – considerando o desempenho e outros aspectos – entre a notação de ponto e de colchetes é que a notação de colchetes permite user caracteres especiais em nome de propriedade.

---

## IDENTIFICANDO TIPOS DE REFERÊNCIA

Uma função é o tipo de referência mais fácil de se identificar porque, ao usar o operador `typeof` em uma função, ele deverá retornar `function`.

```js
fucntion reflect(value){
  return value
}

console.log( typeof reflect);
```

Outros tipos de referência podem ser mais difíceis de identificar porque, para todos os tipos de referência que não sejam funções, o operador `typeof` retorna `object`. Para identificar tipos de referência mais facilmente, o operador 'instanceof' pode ser utilizado. Ele recebe um objeto e um construtor como parâmetros. quando o valor for uma instância do tipo especificado pelo construtor, o operador `instanceof` retornará `true`. Caso contrário, ele retorna `false`.

```js
var items = [];

var object = {};

function reflect(value) {
  return value;
}

console.log(items instanceof Array);
console.log(object instanceof Object);
console.log(reflect instanceof Function);
```

O operador `instanceof` pode identificar tipos herdados. Isso significa que todo objeto na verdade é uma instância de 'Object' porque todo tipo de referência herda de `Object`.

```js
var items = [];
var object = {};

function reflect(value) {
  return value;
}

console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(objects instanceof Object); // true
console.log(object instanceof Array); // false
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true
```

Cada tipo de referência é identificado corretamente como uma instância de `Object`, da qual todos os tipos de referência herdam.

---

## IDENTIFICANDO ARRAYS

Valores em JavaScript podem ser passados entre frames na mesma página web. Isso se torna um problema quando se tenta identificar o tipo de um valor de referência, pois cada página web tem sua própria versão de `Object`, `Array` e todos os tipos próprios. Como resultado, ao passar um array de um frame para outro, `instanceof` não funciona porque o array é uma instância de `Array` de um frame diferente.

Para corrigir isso, O EcmaScript 5 introduziu `Array.isArray()`, que identifica definitivamente o valor como a instância, sem se importar com a origem do valor, retornando `true` quando receber um valor que seja uma array nativo de qualquer contexto.

```js
var items = [];
console.log(Array.isArray(items)); //true
```

---

## TIPOS WRAPPER PRIMITIVOS

Há três tipos de wrapper primitivos: `String`,`Number` e `Boolean`. Esses tipos de referência especiais existem para fazer com que trabalhar com valores primitivos seja tão simples quanto trabalhar com objetos. Os tipos wrapper primitivos são tipos de referência criados automaticamente por baixo dos panos sempre que strings, numbers ou booleans são lidos.

```js
var name = 'Nicholas';
var firstChar = name.charAt(0);
console.log(firstChar); // "N"
```

Isso é o que acontece internamente:

```js
// O que a engine do JavaScript faz
var name = 'Nicholas';
var temp = new String(name);
var firstChar = temp.charAt(0);
temp = null;
console.log(firstChar); // "N"
```

A engine do JavaScript cria uma instância de String para que charAt(0) funcione.

```js
var name = 'Nicholas';
name.last = 'Zakas';
console.log(name.last); // undefined
```

Quando trabalhamos com objetos normais, podemos adicionar propriedades a qualquer momento e elas estarão presentes até serem manualmente removidas. Com tipos de wrapper primitivos, as propriedades parecem desaparecer porque o objeto no qual a propriedade foi definida é destruída imediatamente na sequência.

```js
// O que a engine do JavaScript faz
var name = 'Nicholas';
var temp = new String(name);
temp.last = 'Zakas';
temp = null; // objeto temporário é destruído
var temp = new String(name);
console.log(temp.last); // undefined
temp = null;
```

Em vez de atribuir uma nova propriedade à string, o código cria uma nova propriedade em um objeto temporário que então é destruído. Ao tentar acessar essa propriedade posteriormente, um objeto temporário diferente será criado e a nova propriedade não estará presente ali.

```js
var name = 'Nicholas';
var count = 10;
var found = false;
console.log(name instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false
```

O operador `instanceof` retornará `false` porque um objeto temporário é criado somente quando um valor é lido. E como`instanceof`na verdade não lê nada, nenhum objeto temporário é criado, e ele nos diz que esses valores não são instâncias de tipos wrapper primitivos.

```js
var name = new String('Nicholas');
var count = new Number(10);
var found = new Boolean(false);
console.log(typeof name); // "object"
console.log(typeof count); // "object"
console.log(typeof found); // "object"
```

Criar uma instância de um tipo wrapper primitivo apenas dá origem a outro objeto, o que significa que `typeof` não pode identificar o tipo de dado que pretende ser armazenado. Além do mais, você não pode usar objetos `String`, `Number` ou `Boolean` como faria com valores primitivos.

```js
var found = new Boolean(false);
if (found) {
  console.log('Found'); // isso é executado
}
```

Instanciar manualmente tipos wrapper primitivos também pode ser confuso em outros aspectos, portanto, a manos que você se depara com um caso especial em que faça sentido faz isso, evite-os.

---

## SUMÁRIO

Embora não tenha classes, o JavaScript tem tipos. Cada variável ou porção de dado é associado a um tipo primitivo ou de referência especí co. Os cinco tipos primitivos (`strings`, `numbers`, `booleans`, `null` e `undefined` ) representam valores simples armazenados diretamente no objeto variável em um determinado contexto. Você pode usar `typeof` para identificar tipos primitivos com exceção de `null` , que deve ser comparado diretamente com o valor especial `null`.

`Tipos de referência` são o recurso que mais se assemelha a classes em JavaScript, e os objetos são instâncias de tipos de referência. Podemos
criar novos objetos usando o operador `new` ou uma forma literal. As propriedades e os métodos podem ser acessados por meio da notação de ponto ou de colchetes. Funções são objetos em JavaScript, e você pode identificá-las usando o operador `typeof` . Use o operador `instanceof` com um
construtor para identificar objetos de outros tipos de referência.

Para fazer com que os primitivos se assemelhem mais às referências, o JavaScript tem três tipos `wrapper primitivos`: `String` , `Number` e `Boolean` . O JavaScript cria esses objetos internamente para que você possa tratar os primitivos como se fossem objetos normais, porém os objetostemporários são destruídos assim que a instrução que os utiliza for executada. Embora você possa criar suas próprias instâncias de wrappers primitivos, é melhor não fazer isso porque poderá ser confuso.
