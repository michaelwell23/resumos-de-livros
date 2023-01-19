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
