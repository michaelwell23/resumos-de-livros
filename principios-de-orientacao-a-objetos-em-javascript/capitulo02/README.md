# CAPÍTULO 02 — FUNÇÕES

A característica determinante de uma função — o que a distingue de outros objetos — é a presença de uma `propriedade interna` chamada [[call]]. As propriedades internas não são acessíveis por meio de código, porém definem o seu comportamento à medida que ele é executado. A propriedade [[call]] é exclusiva das funções e indica que o objeto pode ser executado. Como somente as funções têm essa propriedade o operador `typeof` é definido para retornar `function`para qualquer objeto que tenha a propriedade [[call]]. Como as funções são objetos, elas se comportam de modo diferente das funções em outras linguagens, e entender esse comportamento é fundamental para ter uma boa compreensão de JavaScript.

## DECLARAÇÕES VERSUS EXPRESSÕES

Há duas formas literais para se declarar funções. A primeira é a `declaração de função`, que começa com a palavra-chave `function` e inclui o nome da função logo em seguida.

```js
function add(num1, num2) {
  return num1 + num2;
}
```

A segunda forma é a `expressão de função`, que não exige um nome após a palavra-chave `function`. Essas funções são consideradas anônimas porque o objeto função propriamente dito não possui um nome, sendo referenciadas por meio de uma variável de propriedade.

```js
var add = function (num1, num2) {
  return num1 + num2;
};
```

Apesar de essas duas formas serem muito parecidas, elas diferem fundamentalmente em relação a um aspecto. As declarações de funções recebem um `hoisting` (“içamento”) para o topo do contexto quando o código é executado. Isso significa que podemos definir uma função depois de ela ter sido utilizada no código, sem que um erro seja gerado.

```js
var result = add(5, 5);

function add(num1, num2) {
  return num1 + num2;
}
```

Isso ocorre porque a engine do JavaScript efetua a elevação da declaração da função para o topo e executa o código.

```js
// Como a engine do JavaScript interpreta o código

function add(num1, num2) {
  return num1 + num2;
}

var result = add(5, 5);
```

O hoisting de função ocorre somente em declarações de funções porque o nome da função é previamente conhecido. Expressões de função,não podem sofrer hoisting porque as funções pode ser referenciadas somente por meio de uma variável.

```js
// Erro!
var result = add(5, 5);
var add = function (num1, num2) {
  return num1 + num2;
};
```

Desde que as funçĩes sejam sempre definidas antes de serem utilizadas, tanto as declarações quanto às expressões de funções poderão ser usadas.

---

## FUNÇÕES COM VALORES

Uma função pode ser usada em qualquer local em que outro valor de referência pode ser utilizado. Isso faz com que as funções JavaScript sejam incrivelmente eficazes.

```js
function sayHi() {
  console.log('Hi!');
}
sayHi(); // exibe "Hi!"

var sayHi2 = sayHi;
sayHi2(); // exibe "Hi!";
```

No código, há uma declaração e execução da função, em seguida, uma variável é declarada com o valor da função. Podemos perceber que tanto a função, quanto a variável podem ser executadas gerando o mesmo resultado. Para entender melhor, podemos observar o código reescrito utilizando um construtor.

```js
var sayHi3 = new Function("console.log('hi');");
sayHi3(); // exibe "Hi"

var sayHi4 = sayHi3;
sayHi4(); // exibe "Hi"
```

O construtor `Function` deixa explícito o fato que a variável pode ser atribuída como qualquer outro objeto. Quando temos em mente que funções são objetos, muitos comportamentos começam a fazer sentido. Podemos passar uma função para outra função como argumento. O método `sort()` de arrays em JavaScript aceita funções de comparação como parâmetro opcional. Por padrão ele converte todos os itens de um array em uma string e, em seguida, efetua a comparação.

```js
var numbers = [1, 5, 8, 4, 7, 10, 2, 6];

numbers.sort(function (first, second) {
  return first - second;
});

console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"

numbers.sort();
console.log(numbers); // "[1, 10, 2, 4, 5, 6, 7, 8]"
```

Nesse exemplo, a função de comparação 1 passada para `sort()`, na realidade, é uma expressão de função.Subtrair os dois valores faz o resultado correto ser retornado pela função de comparação. Se comparar isso com a segunda chamada a `sort(), que não utiliza uma função de comparação, a ordem do array é diferente do esperado, pois 10 vem depois do 1, porque a comparação-padrão converte todos os valores para string antes de compará-los.

---

## PARÂMETROS

É possível passar qualquer número de parâmetros para qualquer função sem causar erros. Isso ocorre porque os parâmetros de função são armazenados em um estrutura semelhante a array chamada `arguments`. Ele pode ser estendido de modo a receber qualquer quantidade de valores e os valores são referenciados por meio de índices numéricos, pela propriedade `length` que determina a quantidade de valores.

<kbd>NOTA: O objeto arguments não é uma instância de Array e, portanto, não tem os mesmos métodos de um array. Array.isArray(arguments) sempre retornará false.</kbd>

{c:green}[fa=check-circle /]{/c} Meu Ícone Verde

O JavaScript ignora os parâmetros nomeados de uma função. O número de argumentos que uma função espera é armazenado na propriedade `length`, essa propriedade indica a o número de parâmetros que ela espera (aridade). Conhecer esse número é importante porque as funções não gerarão um erro se forem passados parâmetros a mais ou a menos.

```js
function reflect(value) {
  return value;
}
console.log(reflect('Hi!')); // "Hi!"
console.log(reflect('Hi!', 25)); // "Hi!"
console.log(reflect.length); // 1
reflect = function () {
  return arguments[0];
};

console.log(reflect('Hi!')); // "Hi!"
console.log(reflect('Hi!', 25)); // "Hi!"
console.log(reflect.length); // 0
```

No exemplo a função é definida com apenas um parâmetro, mas não há erro quando um segundo parâmetro é passado. Há somente um parâmetro nomeado, por tanto o seu retorno é `arguments[0].

A versão com o objeto `arguments` pode ser confusa porque não há argumentos nomeados, por isso é preciso ler o corpo da função para determinar se há argumentos. Usar `arguments` é mais eficiente do que usar parâmetros. Suponha que uma função recebesse qualquer número de parâmetros e que retorne a soma deles. Com parâmetros nomeados isso não seria possível por não sabermos a quantidade de parâmetros necessários, mas a melhor opção para esse caso é utilizar `arguments`.

```js
function sum() {
  var result = 0,
    i = 0,
    len = arguments.length;
  while (i < len) {
    result += arguments[i];
    i++;
  }
  return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(3, 4, 5, 6)); // 18
console.log(sum(50)); // 50
console.log(sum()); // 0
```

A função aceita qualquer parâmetro e efetua a soma deles por meio de uma iteração pelos valores em `arguments` utilizando um loop `while`. A função é executada até mesmo quando nenhum parâmetro é passado, porque a variável seria inicializada com um valor 0.

---

## SOBRECARGA

Sobrecarga de função é a possibilidade de uma função ter diversas `assinaturas`. A assinatura de uma função é composta do nome da função e da quantidade de parâmetros e dos tipos de parâmetros esperados. Assim uma função pode aceitar apenas argumentos de um mesmo tipo. Em JavaScript as funções aceitam qualquer quantidade de parâmetros, e os tipos de parâmetros que uma função aceita não são especificados. Isso significa que as funções não tem assinatura. Essa ausência não significa a ausência de sobrecarga de função.

```js
function sayMessage(message) {
  console.log(message);
}
function sayMessage() {
  console.log('Default message');
}
sayMessage('Hello!'); // exibe "Default message"
```

Quando várias funções são definidas com o mesmo nome. As funções declaradas anteriormente serão removidas e a última será usada. Mas uma vez, usar objetos ajuda a entender essa situação:

```js
var sayMessage = new Function('message', 'console.log(message);');
sayMessage = new Function('console.log("Default message");');
sayMessage('Hello!'); // exibe "Default message"
```

O fato de as funçẽo não terem assinatura em JavaScript não quer dizer que não possa imitar o comportamento da sobrecarga de função. O número de parâmetros passados pode ser obtido por meio do objeto `arguments`, e essa informação pode ser usada para decidir o que deve ser feito.

```js
function sayMessage(message) {
  if (arguments.length === 0) {
    message = 'Default message';
  }
  console.log(message);
}
sayMessage('Hello!'); // exibe "Hello!"
```

No exemplo a função se comporta de modo diferente de acordo com o número de argumentos passados. Se nenhum argumento for passado, uma mensagem-padrão será usada. Caso o primeiro parâmetro será usado com a mensagem. Isso é um pouco mais complicado que sobrecarga de função em outras linguagens, mas o resultado será o mesmo.

<kbd>NOTA: Na prática, comparar o parâmetro nomeado com undefined é mais comum do que basear-se em arguments.length === 0</kbd>

---

## MÉTODOS DE OBJETOS

Quando um valor de propriedade é uma função, esse valor é considerado um método. Você pode adicionar um método a um objeto da mesma maneira que uma propriedade é adicionada.

```js
var person = {
  name: 'Nicholas',
  sayName: function () {
    console.log(person.name);
  },
};
person.sayName(); // exibe "Nicholas"
```

Pode-se notar que a sintaxe é a mesma. No caso, o valor é uma função. O método pode ser chamado diretamente a partir do objeto.

### OBJETO THIS

O método `sayName()` referência `person.name` diretamente, o que gera um alto nível de acoplamento entre método e o objeto. Isso representa um problema por vários motivos. O primeiro, se o nome da variável for alterado, você terá de se lembrar de alterar a referência a esse nome no método. Em segundo, esse tipo de alto acoplamento faz com que seja difícil usar a mesma função em diferentes objetos.

Todo escopo tem um objeto `this` que representa o objeto que chama a função. No escopo global, `this` representa o objeto global. Quando a função associada a um objeto é chamada, por padrão, o valor de `this` é igual a esse objeto. Portanto, em vez de referenciar diretamente um objeto em um método, `this` pode ser referenciado em seu lugar.

```js
var person = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};
person.sayName(); // exibe "Nicholas"
```

O código funciona do mesmo modo que a versão anterior, mas, dessa vez, a função referencia `this` em vez de `person`.Podemos facilmente alterar o nome da variável ou até mesmo reutilizar a função em objetos diferentes.

```js
function sayNameForAll() {
  console.log(this.name);
}
var person1 = {
  name: 'Nicholas',
  sayName: sayNameForAll,
};
var person2 = {
  name: 'Greg',
  sayName: sayNameForAll,
};
var name = 'Michael';

person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"
sayNameForAll(); // exibe "Michael"
```

No exemplo, a função chamada inicialmente é criada. Em seguida, dois objetos são criados, em que a função é definida para que seja igual à função `sayNameForAll`. As funções são apenas valores de referência, portanto elas podem ser definidas como valores de propriedade em qualquer objeto.

### MUDANDO THIS

A capacidade de usar e de manipular o valor de `this` das funções é fundamental para um bom entendimento de orientação a objetos em JavaScript. As funções podem ser usadas em muitos contextos diferentes e elas devem funcionar em todas as situações. Embora `this` normalmente seja definido automaticamente, seu valor poderá ser alterado para obter resultados diferentes. Há três métodos que permitem mudar o valor de `this`.

#### MÉTODO CALL()

O primeiro método usado para manipular o `this` é o `call()`, que executa a função com um determinado valor de `this` e com parâmetros específicos. O primeiro parâmetro é o valor que `this` deve ter quando a função for executada. Todos os parâmetros seguintes correspondem aos parâmetros que devem ser passados para a função.

```js
function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}
var person1 = {
  name: 'Nicholas',
};
var person2 = {
  name: 'Greg',
};
var name = 'Michael';
sayNameForAll.call(this, 'global'); // exibe "global: Michael"
sayNameForAll.call(person1, 'person1'); // exibe "person1:Nicholas"
sayNameForAll.call(person2, 'person2'); // exibe "person2:Greg"
```

No exemplo, `sayNameForAll()` aceita um parâmetro que é usado como label para exibir o valor de saída. Em seguida, a função é chamada três vezes. Não há parênteses depois da função porque ela é acessada como um objeto em vez de ser acessada como um código a ser executado.

#### MÉTODO APPLY()

O método `apply()` funciona exatamente como `call()`, exceto que ele aceita somente um parâmetro: o valor de this e um array ou um objeto semelhante a um array contendo os parâmetros a serem passados para a função. Desse modo, em vez de nomear individualmente cada parâmetro usando `call()`, você pode facilmente passar arrays para o `apply()` como segundo argumento.

```js
function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}
var person1 = {
  name: 'Nicholas',
};
var person2 = {
  name: 'Greg',
};
var name = 'Michael';
sayNameForAll.apply(this, ['global']); // exibe "global:Michael"
sayNameForAll.apply(person1, ['person1']); // exibe "person1:Nicholas"
sayNameForAll.apply(person2, ['person2']); // exibe "person2:Greg"
```

O método usado normalmente dependerá do tipo de dados que você tiver. Se você já tiver um array de dados, use `apply()`; se tiver apenas variáveis individuais, use `call()`.

#### MÉTODO BIND()

O método `bind()` se comporta de modo bem diferente dos outros dois. O primeiro argumento corresponde ao valor de `this` para a nova função; Todos os demais argumentos representam parâmetros nomeados que devem ser definidos permanentemente na nova função. Podemos passar qualquer parâmetro que não seja definido de modo permanente mais tarde. Abaixo há dois exemplos que mostra a utilização do `bind()`.A função `sayNameForPerson2()` é criada ao efetuar a ligação do valor `this` com `person1`, enquanto `sayNameForPerson2()` faz ligação de this com `person2` e do primeiro parâmetro com “person2”.

```js
function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}
var person1 = {
  name: 'Nicholas',
};
var person2 = {
  name: 'Greg',
};
```

---

## SUMÁRIO

As funções em JavaScript são únicas porque elas também são objetos, o que significa que podem ser acessadas, copiadas, sobrescritas e normalmente tratadas como qualquer outro objeto. A principal diferença entre uma função JavaScript e outros objetos está na propriedade interna especial [[Call]] , que contém as instruções de execução da função. O operador typeof procura essa propriedade interna em um objeto e, se ela for encontrada, "function" será retornado. Há duas formas literais de função: as declarações e as expressões As declarações de função são compostas do nome da função à direita da palavra-chave function e são “içadas” (hoisted) para o topo do contexto em que são de nidas. As expressões de função são usadas nos locais em que outros valores também podem ser usados, por exemplo, em expressões de atribuição, em parâmetros de função ou no valor de retorno de outra função.

Como as funções são objetos, o construtor Function está presente. Você pode criar novas funções com o construtor Function , mas isso, normalmente, não é recomendável porque pode tornar o seu código mais difícil de entender e o debugging será muito mais complicado. Apesar do que foi dito, é provável que você vá ver o uso do construtor de vez em quando, em situações em que a verdadeira forma de uma função não é conhecida até a execução do programa.

É necessário ter um bom domínio sobre as funções para entender como a programação orientada a objetos funciona em JavaScript. Como em JavaScript não há o conceito de classes, tudo o que você tem para trabalhar a m de implementar a agregação e a herança são as funções e os demais objetos.
