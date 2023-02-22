# FUNÇÕES DE ORDEM SUPERIOR

Tamanho de um programa quase sempre envolve uma complexidade e complexidade confude os programadores. Programadores confusos tende a criar erros (bugs) no programa. UM programa grande tem a possibilida de esconder bugs que são difícieis de serem encontrados.

Veja dois exemplos já vistos: O primeiro contém um total de 6 linhas.

```js
var total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
```

O segundo necessita de duas funções externas e é excrito em apenas uma linhas.

```js
console.log(sum(range(1, 10)));
```

Se medirmos o tamanho das definições de `sum` e `range` ele também será grande. Mas mesmo assim, diria que ele é mais provável a estar correto. A razão dele possivelmente ser o mais correto, é que a solução é expressa em um vocabulário que corresponde ao problema que está sendo resolvido. As definições desse vocabulário ainda assim terão que lidar com laços de repetição, contandores e outros detalhes secundários. Devido ao fato de representarem conceitos mais simples, elas acabam sendo mais fáceis de se entender.

---

## 5.1 - ABSTRAÇÃO

Abstração escondem detalhes e nos dá a habilidade de falar sobre problemas em alto nível. Quando programamos não podemos contar com todas as palavras do dicionário para expressar o que precisamos. Assim cairemos no padrão onde damos cada comando que o computador tem que realizar, um por um, ocultando os conceitos de alto nível que se expressam. Perceer quandoum conceito implora para ser abstraído em uma nova palavra é um constume que tem de virar algo natural quando programamos.

---

## 5.2 - ABSTRAINDO ARRAY TRANSVERSAL

Funções são boas maneiras para se criar abstrações. Mas algumas vezes elas ficam aquém.

```js
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}
```

Para tentar abstrair o código acima, podemos utilizar uma função. É trivial escrever uma função que passa sobre uma array e chama console.log para cada elemento.

```js
function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
```

Uma vez que "fazer alguma coisa" pode ser representado com uma função a as funções são apenas valores, podemos passar nossas ações como um valor para a função.

```js
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log);
```

Normalmente não iremos passar uma função predefinida para o `forEach`, mas ela será criada localmente dentro da função.

```js
var number = [1, 2, 3, 4, 5],
  sum = 0;
forEach(numbers, function (number) {
  sum += number;
});
console.log(sum);
```

Não precisamos definir um método `forEach`. Ele está disponível como um método padrão em `arrays`. Quando um array é fornecdio para o método agir sobre ele, o forEach espera apenas um argumento obrigatório: a função a ser executada para cada elemento.

Para ilustrar isso, podemos utilizar a função do capítulo anterior, onde continha dois arrays transversais.

```js
function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis)) phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}
```

Trabalhando com forEach faz parecer levemente menor e bem menos confuso.

```js
function gatherCorrelations(journal) {
  var phis = {};
  journal.forEach(function (entry) {
    entry.events.forEach(function (event) {
      if (!(event in phis)) phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}
```

---

## 5.3 - FUNÇÕES DE ORDEM SUPERIOR

Funções que operam em outras funções, seja ela apenas devolvendo argumento, são chamadas de funções de ordem superior. O termo vem da matemática onde a distinção entre funções e outros valores é levado mais a sério. Funções de ordem superior nos permitem abstrair as ações. Elas podem ser de diversas formas. Por exemplo, você pode ter funções que criam novas funções.

```js
function greaterThan(n) {
  return function (m) {
    return m > n;
  };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

Funções que alteram outras funções.

```js
function noisy(f) {
  return function (arg) {
    console.log('calling with', arg);
    var val = f(arg);
    console.log('called with', arg, '- got', val);
    return val;
  };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false
```

E funções que fornecem novos tipos de fluxos de controles.

```js
function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}
repeat(3, function (n) {
  unless(n % 2, function () {
    console.log(n, 'is even');
  });
});
// → 0 is even
// → 2 is even
```

No exemplo acima, a variável n é um parâmetro da função externa. Mas como as funções internas estão dentro do ambiente externo, podemos usar a variável n . Os "corpos" de tais funções internas podem acessar as variáveis que estão em torno delas. Eles podem desempenhar um papel similar aos blocos {} usados em loops e expressões condicionais. Uma diferença importante é que variáveis declaradas dentro das funções internas não podem ser acessadas fora da função.

---

## 5.4 - PASSANDO ARGUMENTOS
