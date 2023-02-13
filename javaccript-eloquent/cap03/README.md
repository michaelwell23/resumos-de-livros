# FUNÇÕES

Funções são essenciais na programação. O conceito de encapsular uma parte do programa em um valor tem vários usos. É uma ferramenta usada para estruturar aplicações de larga escala, reduzir repetições de código, associar nomes e subprogramas e isola esses subprogramas uns do outros.

---

## 3.1 - DEFININDO UMA FUNÇÃO

A definição de uma função nada mais é do que declara uma variável, na qual o valor recebido é uma função. active

```js
var square = function (x) {
  return x * x;
};

console.log(square(12));
```

Uma função também pode ser criada por meio de uma expressão que se inicia com a palavra-chave `function`. Funções podem receber uma série de parâmetros e um "corpo", contendo as declarações que serão executadas quando a função for invocada. O "corpo" de uma função sempre deve ser envolvido por chaves, mesmo quando for formado por apenas uma declaração simples. Funções também pode receber nenhum parâmetro ou múltiplos parâmetros.

```js
var makeNoise = function () {
  console.log('Pling!');
};

makeNoise();

var power = function (base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
};

console.log(power(2, 10));
```

Algumas funções produzem um valor, e outras não, que produz apenas um "efeito colateral". A declaração `return` é usada para determinar o valor de retorno da função. Quando o controle de execução interpreta essa declaração, ele sai imediatamente do contexto da função atual e diponibiliza o valor retornado para o código que invocou a função. O `return` sem uma expressõa após, irá fazer com que o retorno da função seja `undefined`.

---

## 3.2 - PARÂMETROS E ESCOPOS

Os parâmetros de uma função comportam-se como variáveis regulares. Seu valor inicial é informado por qem invocou a função e não pelo código da função em si. Uma propriedade importante das funções é que variáveis definidas dentro do "corpo" da função, incluindo seus parâmetros, são `locais` à própria função. Essa característica de localidade das variáveis se aplica somente aos parâmetros e às variáveis que forem declaradas usando `var` dentro do "corpo" de uma função. Variáveis declaradas fora do contexto de alguma função são chamadas de `globais`, pois elas são visíveis em qualquer parte da aplicação. É possível acessar qualquer variável global dentro de qualquer função, a menos que não exista uma variável com mesmo nome declada dentro da função. O código a seguir demonstra esse conceito.

```js
var x = 'outside";

var f1 = function(){
  var x = 'inside f1"
}

f1();
console.log(x)

var f2 = function(){
  x = "inside f2";
}
f2()
console.log(x)
```

Esse comportamento ajuda a previnir interferências acidentais entre funções. Se todas as variáveis fossem compartilhadas por todas as aplicações, seria muito trabalhoso garantir que o mesmo nome não fosse utilizado em duas situações com o propósito diferente. Além disso, se fosse o caso de reutilizar uma variável com o mesmo nome, talvez pudesse se deparar com efeito estranhos de código que alteram o valor da sua variável.

---

## 3.3 - ESCOPO ANINHADO

Funções também podem ser criadas dentro de outras funções, criando vários níveis de "localidades".

```js
var landscape = function () {
  var result = '';
  var flat = function (size) {
    for (var count = 0; count < size; count++) {
      result += '_';
    }
    var mountain = function (size) {
      result += '/';
      for (var count = 0; count < size; count++) {
        result += '.';
      }
      result += '\\';
    };
  };
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  return result;
};

console.log(landscape());
```

A função flat e mountain pode ver a variável result porque elas estão dentro do mesmo escopo da função que as definiu. Entretanto, elas não conseguem ver a variável `count`, pois elas estão definidas em escopo diferente. Em resumo, cada escopo local pode também ver todos os escopos locais que o contêm. O conjunto de variáveis visíveis dentro de um função é determindado pelo local onde aquela função está escrita na aplicação. Todas as variáveis que estejam em blocos ao redor de definições de função, são visíveis aos corpos dessas funções e também àquela que estão no mesmo nível. Essa abordagem em relação à visibilidade de variáveis é chamada de `escopo léxico`.

```js
var something = 1;
{
  var something = 2;
}
```

Entretanto, a variável dentro do bloco faz refêrencia à mesma variável fora do bloco. Na realidade embora blocos como esse sejam permitidos, eles são uteis somente para agrupar o corpot de uma declaração condicional `if`ou laço de repetição. JavaScript vai introduziu a palavra-chave `let`, que funciona como `var`, mmas cria uma variável que é local ao bloco que a contém e não à funcão que a contém.

---

## 3.4 - FUNÇÕES COM VALORES

As variáveis de função, normalmente, atuam apenas como nomes para um pedaço específico de um programa. Tais variáveis são definidas uma vez e nunca se alteram. Isso faz com que seja fácil confundir a função com seu próprio nome. Entretanto, são duas coisas distintas. Um valor de função pode fazer todas as coisas que outros valores podem fazer. É possível armazenar um valor de função em um novo local, passa-lo como argumento para outra função e assim por diante.

```js
var launchMissiles= funtion(value){
  missileSystem.launch('now');
}

if (safeMode)
launchMissiles = function(value) {/* do nothing */};
```

---

## 3.5 - NOTAÇÃO POR DECLARAÇÃO

A palavra-chave `function` também pode ser usada no inicio da declaração.

```js
function square(x) {
  return x * x;
}
```

Isso é uma declaração de função. Ela define a variável e faz com que ela referencie a função em questão. Existe uma pequena diferença nessa maneira de definir uma função.

```js
console.log('The future says:', future());

function future() {
  return 'We STILL have no flying cars.';
}
```

Mesmo que a função seja definida após o código que a executa, o código funciona. Isso ocorre porque as declarações de função não faze parte do fluxo normal de controle, que é executado de cima para baixo. Elas são conceitualmente movidas para o topo do escopo que as contém e pode ser usadas por qualquer código no mesmo escopo. É recomendado que nunca declara uma função dentro de um bloco condicional ou em um laço de repetição. Para que o programa se comporte de forma consistente, recomendá-se o uso somente essa forma de definição de função de bloco externo de uma outra função ou programa.

```js
function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}
```

## 3.6 - A PILHA DE CHAMADAS

Será muito úti obeservar como o fluxo de controle flui por meio das execuções das funções.

```js
function greet(who) {
  console.log('Hello ' + who);
}
greet('Harry');
console.log('Bye');
```

A execução do programa funciona da seguinte forma: a chamada da função "greet" faz com que o controle pule para o início dessa função. Em seguida, é invocado o `console.log` que assume o controle, faz seu trabalho e então retorna o controle para a linha 2 novamente. O controle chega ao fim da função "greet" e retorna para o local onde a função foi invocada originalmente. Por fim, o controle exexuta uma nova chamada a `console.log`.
O fluxo de controle pode ser representado da seguinte forma:

```txt
top
  greet
    console.log
  greet
top
  console.log
top
```

Devido ao fato de que a função deve retornar ao local onde foi chamada após finalizar a sua execução, o computador precisa se lembrar do contexto no qual a função foi invocada originalmente. O local onde o computador armazena esse contexto é chamado de `call stack` (pilha de chamada). Toda vez que uma função é invocada, o contexto atual é colocado no topo dessa "pilha" de contexto. Quando a função finaliza sua execução, o contexto no topo da pilha é removido e utilizado para continuar o fluxo de execução.O armazenamento dessa pilha de contexto necesita de espaço na memória do computador. Quando a pilha começar a ficar muito grande, o computador reclamará com uma mensagem do tipo `out of stack space` ou `too much recursion`. O código abaixo demonsta esse problema fazendo uma pergunta difícil para o computador, que resulta em um ciclo infinito de chamadas entre duas funções.

```js
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + ' came first.');
```

---

## 3.7 - ARGUMENTOS OPCIONAIS

O código a seguir executa sem problemas:

```js
alert('Hello', 'Good Evening', 'How do you do?');
```

A função `alert`, oficialmente, aceita somente um argumento. No entanto, ela ignora os outros argumentos e lhe mostra o "Hello". O JavaScript é extremamente tolerante com a quantidade de argumento que são passados para uma função. Se mais argumentos que o necessário for passado, eles serão ignorados. Se menos argumentos forem passado, os parâmetros restantes terão seus valores definidos em `undefined`. A vantagem é que esse comportamento pode ser usado em funções que aceitam argumentos opcionais. Por exemplo, a versão seguinte de power pode ser chamada com um ou dois argumentos. No caso de ser invocada com apenas um argumento, ela assumirá o valor 2 para o expoente e a função se comportará com um expoente ao quadrado.

```js
function power(base, exponent) {
  if (exponent == undefined) exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
}
console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64
```

---
