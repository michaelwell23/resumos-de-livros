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

Envolver argumentos de uma função em outra função pode gerar uma grave deficiência.

```js
function noisy(f) {
  return function (arg) {
    console.log('calling with', arg);
    var val = f(arg);
    console.log('called with', arg, '- got', val);
    return val;
  };
}
```

Para resolver o problema de parâmetros, poderíamos acrescentar vários argumentos para a função interna e passar elas para f, mas mesmo assim isso não deixaria explícito quantos seriam suficientes. Essa solução limita algumas informações de f com o `arguments.length`. Passaremos sempre a mesma quantidade de argumentos, mas nunca saberemos a quantidade exata de argumentos que foi passada.

Para esse tipo de situação, podemos utilizar o método `apply`. Podemos passar um array como argumento, e ele chama a função com estes argumentos.

```js
function transparentWrapping(f) {
  return function () {
    return f.apply(null, arguments);
  };
}
```

A função é inútil,mas nos mostra o padrão que estamos interessados, a função passa todos os argumentos dados para f e retorna, apenas estes argumentos, para f. Ela faz isso passando seus próprios argumentos para o objeto `apply`.

---

## 5.5 - JSON

Observe o seguinte arquivos:

```js
[
  {
    "name": "Emma de Milliano", "sex": "f",
    "born": 1876, "died": 1956,
    "father": "Petrus de Milliano",
    "mother": "Sophia van Damme"
  },
  {
      "name": "Carolus Haverbeke", "sex": "m",
    "born": 1832, "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Maria van Brussel"
  },
  … and so on
]
```

Este formato é chamado de JSON que significa JavaScript Object Notation. JSON é amplamente utilizado como armazenamento de dados e formato de comunicação na Web. JSON se escreve semelhantemente como arrays e objetos em JavaScript, mas com alguamas restrições. Todos os nomes das propriedades devem ficar entre aspas duplas e apenas expressões de dados simples são permitidos, não é permitido chamadas de funções, variáveis ou qualquer coisa que envolva cálculo real. JavaScript nos fornece duas funções `JSON.stringfy` e `JSON.parse`, que convertem dados para este formato. O primeiro recebe um valor em JavaScript e retorna uma strign codificada em JSON. A seguinda obtém uma string e converte-a para o valor que ele codifica.

```js
var string = JSON.stringify({ name: 'X', born: 1980 });
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980
```

Podemos utilizar o array contido no arquivo [ANCESTRY_FILE](./exemplos/ex5_5/ancestry.js) e decodificá-lo para ver quantas pessoas contém no array.

```js
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);
// → 39
```

---

## 5.6 - FILTRANDO UM ARRAY

Para encontrar as pessoas no conjunto de dados dos ancestrais que eram jovens em 1924, a seguinte função pode ser útil e nos ajudar a filtrar os elementos em uma matriz que não passa pelo teste.

```js
function filter(array, test){
  var passed = [];
  for (var i = 0; i <  array.legth; i++){
    if(test(array[i])){
      passed.push(array[i]);
    }
  }
    return passed;
}

console.log(filter(ancestry, function(person){
  return person.born : 1900 && person.born < 1925;
}))
```

A função test é chamada para cada elemento, e o seu valor de retorno determina se um elemento é incluido no array retornado. Podemos observar como a função filter, em vez de excluir os elementos do array, contrói um novo com apenas os elementos que passaram no teste. Assim como forEach, `filter` é um método padrão de array, e pode ser utiizado da seguinte forma:

```js
console.log(
  ancestry.filter(function (person) {
    return person.father == 'Carel Haverbeke';
  })
);
// → [{name: "Carolus Haverbeke", …}]
```

---

## 5.7 - TRANSFORMANDO COM MAP

O método `map` trabsforma um array aplicando uma função para todos os elementos e contrói um novo array a partir dos valores retomados. O novo array terá o mesmo tamanho do array enviado, mas seus conteúdo é mapeado para um novo formato através da função.

```js
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]));
    return mapped;
  }
}
var overNinety = ancestry.filter(function (person) {
  return person.died - person.born > 90;
});
console.log(
  map(overNinety, function (person) {
    return person.name;
  })
);
```

curiosamente, as pessoas que viveram pelo menos 90 anos de idade são as maesmas três que vimos antes, as pessoas que eram jovem em 1920, passam a ser a geração mais recente no conjunto de dados. O `map`também é um método padrão de arrays.

---

## 5.8 - RESUMINDO COM REDUCE

Outro padrão na computação em arrays é calcula todos elementos e tranformá-los em apenas um. Uma operação de ordem superior que representa este padrão é chamado de `reduce`. dois. Os parâmetros para a função `reduce` são, além do array, uma função para combinação e um valor inicial. Esta função é menos simples do que o `filter` e `map` por isso observe com muita atenção.

```js
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < arrary.legth; i++) {
    current = combine(current, array[i]);
    return current;
  }
}
console.log(
  reduce(
    [1, 2, 3, 4],
    function (a, b) {
      return a + b;
    },
    0
  )
);
```

---

O array padrão do método `reduce` que corresponde a esta função tem uma maior comodidade. Se o arra contém apenas um elemento, você não precisa avisar um valor inicial. O método irá pegar o primeiro elemento do array com valor inicila, começando a redução a partir dos segundos. Para usar o reduce e encontrar o mais antigo ancestral, o código ficaria parecido com isso:

```js
console.log(
  ancestry.reduce(function (min, cur) {
    if (cur.born < min.born) return cur;
    else return min;
  })
);
// → {name: "Pauwels van Haverbeke", born: 1535, …}
```

---

## 5.9 - COMPONIBILIDADE

A escrita do código anterior sem utilizar funções de ordem superior ficaria assim:

```js
var min = ancestry[0];
for (var i = 1; i < ancestry.length; i++) {
  var cur = ancestry[i];
  if (cur.born < min.born) min = cur;
}
console.log(min);
// → {name: "Pauwels van Haverbeke", born: 1535, ...}
```

Existe mais variáveis, e o programa está com duas linhas a mais, mas ainda sim continua bem fácil de entender. Funções de ordem superior são úteis quando você precisa compor funções.

```js
function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}
function age(p) {
  return p.died - p.born;
}
function male(p) {
  return p.sex == 'm';
}
function female(p) {
  return p.sex == 'f';
}
console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56
```

Ao invés de juntar toda a lógica em um loop gigante, ele está bem composto nos conceitos que interessamos. Podemos aplicá-las uma de cada vez para obtermos o resultado que estamos procurando.

---

## 5.10 - O CUSTO

Um programa que processa um array é mais elegante expresso em uma sequência separada onde cada passa pode fazer algo com o array e produzir um novo array. Mas a construção de todos esses arrays intermediários 'um pouco custoso. Passar uma função para `forEach` e deixar que o método cuide da interação para os nós é conveniente e fácil de ler. Mas chamada de funções são custosas comparadas com os simples bloco e repetição.

E assim existe várias técnicas que ajudam a melhorar a clareza de um programa. Abstraçĩes adiciona uma camada a mais entre as coisas cruas que o computador faz e o conceito que estamos trabalhando, sendo assim a máquina realizada mais trabalho.

Existem várias técnicas que ajudam a esclarecer o código. Elas adicionam camadas entre as coisas cruas que o computador está fazendo com os conceitos que estamos trabalhando e faz com que a máquina trabalhe mais rápido.

Felizmenre muitos computadores são extremamente rápidos. Se você estiver processando uma modesta coleção de dados ou fazendo alguma coisa que tem de acontecer apenas em uma escala de tempo humano, enttão não importa se você escreveu aquela solução maravilhosa que leva meio milisegundos ou uma super solução otimizada que leva um décimo de um milissegundo. É útil quanto tempo mais ou menos leva um trecho de código para executar. Se existe um loop dentro de um looop o código dentro do loop interno acaba rodando NxM vezes, onde N é o número de vezes que o loop de fora se repete e M é o número de vezes que o loop interno se repete dentro de cada interação do loop externo. Quando um programa é lento o problema muitas vezes pode estar atribuída a apenas uma pequena parte do códgio que fica dentro de um loop interno.

---

## 5.11 - O PAI DO PAI DO PAI DO PAI

Para ser capaz de fazer uma busca pelo nome de um pai para um objeto real que representa uma pessoa, primeiramente precisamos construir um objeto que associa os nomes com as pessoas.

```js
var byName = {};
ancestry.forEach(function (person) {
  byName[person.name] = person;
});
console.log(byName['Philibert Haverbeke']);
// → {name: "Philibert Haverbeke", …}
```

Neste caso queremos condensar a estrutura de dados par um único aloe mas de uma forma que segue a linhas da família. O formato dos dados é a de uma árvore genealógica em vez de uma lista plana. A maneira que podemos reduzir esta forma é calculando um valor para um determinada pessoa, combinando com os valors de seus ancestrais. Isso pode ser feito de forma recursiva. Podemos permir um valor padrão para a função de redução, que será utilizada para pessoas que não estão em nossos dados. No caso, esse valor é simplesmente zero, pressupondo de que as pessoas que não estão na lista nã compartilham do mesmo DNA do ancestral que estamos olhando. Dado uma pessoa, a função combina os valores a partir de dois pais de uma determinada pessoa, e o valor padrão, reduceAncestors condensa o valor a partir de uma árvore genealógica.

```js
function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null) return defaultValue;
    else
      return f(
        person,
        valueFor(byName[person.mother]),
        valueFor(byName[person.father])
      );
  }
  return valueFor(person);
}
```

Podemos então usar isso para calcular a quantidade de DNA do avô compartilhado com Pauwels van Haverbeke e depois dividir por quatro.

```js
function sharedDNA(person, fromMother, fromFather) {
  if (person.name == 'Pauwels van Haverbeke') return 1;
  else return (fromMother + fromFather) / 2;
}
var ph = byName['Philibert Haverbeke'];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
// → 0.00049
```

A pessoa com o nome Pauwels van Haverbeke obviamente compartilhada 100 por cento de seu DNA com Pauwels van Haverbeke, então a função retorna 1 para ele. Todas as outras pessoas compartilham a média do montante que os seus pais compartilham. Assim estatisticamente falando, eu compartilho cerca de 0,05 por cento do DNA de uma pessoa do século 16.
Deve-se notar que este é só uma aproximação estatística e, não uma quantidade exata. Este é um número bastante pequeno mas dada a quantidade de material genético que carregamos, provavelmente ainda há algum aspecto na máquina biológica que se originou de Pauwels. Nós também podemos calcular esse número sem depender de reduceAncestors . Mas separando a abordagem geral a partir do caso específico podemos melhorar a clareza do código permitindo reutilizar a parte abstrata do programa para outros casos. Em exemplo podemos encontrar a porentagem de antepassados conhecidos para uma determinada pessoa que vivveu mais de 70 anos.

```js
function countAncestors(person, test) {
  function combine(current, fromMother, fromFather) {
    var thisOneCounts = current != person && test(current);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}
function longLivingPercentage(person) {
  var all = countAncestors(person, function (person) {
    return true;
  });
  var longLiving = countAncestors(person, function (person) {
    return person.died - person.born >= 70;
  });
  return longLiving / all;
}
console.log(longLivingPercentage(byName['Emile Haverbeke']));
// → 0.129
```

Tais números não são levados muito a sério, uma vez que o nosso conjunto de dados contém uma coleção bastante arbitrária de pessoas. Mas o código ilustra o fato de que reduceAncestors dá-nos uma peça útil para trabalhar com o vocabulário da estrutura de dados de uma árvore genealógica.

---

## 5.12 - BINDING

O método `bind`, está presente em todas as funções, ele cria uma nova função que chama a função original mais com alguns argumento já fixado. O código a seguir mostra um exemplo de uso do `bind`.

```js
var theSet = ['Carel Haverbeke', 'Maria van Brussel', 'Donald Duck'];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}
console.log(
  ancestry.filter(function (person) {
    return isInSet(theSet, person);
  })
);
// → [{name: "Maria van Brussel", …},
// {name: "Carel Haverbeke", …}]
console.log(ancestry.filter(isInSet.bind(null, theSet)));
// → … same result
```

A chamada usando `bind` retorna uma função que chama `isInset` com `theset` sendo o primeiro argumento, seguido por todos os demais argumento indicados pela função vinculada. O primeiro argumento onde o exemplo passa `null`, é utilziando para as chamadas de método, semelhantemento ao primeriro argumento do apply.

---

## RESUMO

A possibilidade de passar funções como argumento para outras funções não é apenas um artifício mas sim um aspecto muito útil em JavaScript. Ela nos permite escrever cálculos com intervalos como funções, e chamar estas funções para preencher estes intervalos, fornecendo os valores para função que descrevem os cálculos que faltam.

_Arrays_ fornece uma grande quantidade de funções de ordem superior - _forEach_ faz algo com cada elemento de um array,_filter_ para construir um novo _array_ com valores filtrados, _map_ para construir um novo array onde cada elemento é colocado através de uma função e _reduce_ para combinar todos os elementos de um _array_ em um valor único.

Funções têm o método _apply_ que pode ser usado para chamar um _array_ especificando seus argumentos. Elas também possuem um método _bind_ que é usado para criar uma versão parcial da função que foi aplicada.
