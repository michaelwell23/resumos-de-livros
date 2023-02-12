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
