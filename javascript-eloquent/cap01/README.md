# CAPÍTULO 01: VALORES, TIPOS E OPERADORES

No mundo do computador , há somente dados. Todos os dados são armazenados em longas sequências de bits e são fundamentalmente, parecidos. Bits pode ser qualquer tipo de coisas de coisa representada por dois numero, nominalmente descritos como zeros e uns. Qualquer pedaço de informação pode ser reduzido a uma sequência de zeros e uns e, então, representados por bits.

---

## 1.1 VALORES

Para trabalhar com quantidades de bits sem ficar perdido, é preciso separá-los em partes que, que em JavaScript é chamado de `valores`. Essas partes representam pedaços de infomação. Embora todos os valores sejam compostos por bits, cada valor exerce um papel diferente e todo valor possui um tipo que determina seu papel. Existem seis tipos básico de valores na linguagem: `números`, `strings`, `Booleanos`, `objetos`, `funções` e `valores indefinidos`. Para criar esses valores, é preciso invocar o seu nome. Só é preciso chamar por um valor e pronto. Todo valor precisa estar armazenado em algum lugar, caso queria trabalhar com quantidades enormes de dados ao mesmo tempo, você pode acabar ficando sem bit, se for utilizar esses dados simultaneamente. A medida que não se utiliza um valor, ele será dissipado, fazendo com que os bits sejam reciclados, disponibilizando-os para serem usados na construção de outros valores.

---

## 1.2 NÚMEROS

Valores númericos podem ser descitos dessa forma:

```js
13;
```

Escrevendo isso em um programa fára com que padrões de bits referentes ao número 13 sejam criados e passe a existir dentro da memória do computador. O JavaScript utiliza um número fixo de bits, para armazenar um único valor numérico. Os numeros fracionários sõa escritos usando um ponto.

```js
9.81;
```

Para números muito grandes ou pequenos, você pode usar a notação científica adicionando um "e" (de expoente) seguido do valor do expoente:

```js
2.99e8; // 299800000
```

### 1.2.1 ARITMÉTICA

A principal coisa para se fazer com números são calculos aritméticos. As operações como adição ou multiplicação recebem dois valores numéricos e produzem um novo número a partid deles.active

```js
100 + 4 * 11;
```

O símbolos `+` e `*` são chamados de operadores. Colocar um operador entre dois valores irá aplicaá-lo a esses valres e produzirá um novo valor. No exemplo acima, a multiplicação acontece primeiro. Para mudar o comportamento do calculo acima, podemos envolver a adição com parênteses.

```js
(100 + 4) * 11;
```

Para subtrair existe o operador `-` e para divisão usa-se o operador `/`. Quando os operadores aparecem juntos sem parênteses, a orderm que eles serão aplicados é determinado pela precedência deles ((), \*, /, +, -). Existe mais um operador aritmético. O símbolo `%` é usado para representar a operação de resto.

```js
20 % 3; // retorna 2
```

A precedência do operador resto é mesma da multiplicação e divisão. Esse operador é chamado também de módulo mas, tecnicamente, resto é o termo mais preciso.

### 1.2.2 NÚMEROS ESPECIAIS

Existe três valores especiais em JavaScript que são considerados números, mas não se comportam como números normais. Os dois primeiros são `Infinity` e `-Infinity`, que são usados para representar os infinitos positivo e negativo. Entretanto calculos baseados no valor infinito não são valores matemáticamente sólidos. O terceiro é o `NaN`. Esse valor é a abreviação de `Not a Number`, mesmo sabendo que ele é um valor do tipo número, ele é o resultado de quaisquer operação numérica que não resulte em um valor númerico preciso e significativo, um exemplo é calcular 0 / 0.

---

## 1.3 STRINGS

`Strings` são usadas para representar textos, e são escritas delimitando o seu conteúdo entre aspas.

```js
'Patch my boat with chewinf gum';
'Mokeys wave goodbye';
```

Ambas as aspas simples e duplas pode ser usadas para respresentar `strings`, contanto que as aspas abertas sejam no início e no final. Quase tudo pode ser colocado entre aspas, o JavaScript criará um valor do tipo `string como o que quer que seja. Mas alguns caracteres são mais difíceis, como colocar aspas dentro de aspas. Alem disso, quebra de linhas não podem ser colocadas entre aspas e as strings deve permanecer em uma única linha.

Para que seja possível inserir tais caracteres a notação de `\` pode ser utilizada: quando ele for inserido dentro de um texto entre aspas, ele indicará que o caractere seguinte possui um significado especial (chamado de escape). Uma aspa que se encontra logo após uma barra invertida não representará o fim da string, mas será considerado como parte dela. Quando inserimos um `n` após a barra invertida ele será interpretado como uma quebra de linha. Semelhantemente a letra `t` que significa tabulação.

```js
'This is first line\nAnd this is the second';
```

Quando quisermos considerar uma barra invertida como uma barra invertida, podemos utilizar duas barras invertidas, elas se anulam e apenas uma será deixada no valo de estring resultante.active

```js
'A newlin character is writter like \"\\n\"."
```

Não podemos fazer operações de divisão, multiplição ou subtração com strings. Mas o operador `+` pode ser usado para concatenar, ou seja juntar duas strings e forma uma única string.

```js
'con' + 'cat' + 'e' + 'nate';
```

---

## 1.4 OPERADORES UNÁRIOS

Nem todos os operadores são símbolos. Um exemplo é o operador `typeof`, que produz um valor do tipo `string` contendo o nome do tipo do valor que está sendo vereficado.

```js
console.log(typeof 4.5); // -> number
console.log(typeof 'x'); // -> string
```

O `console.log` é utilizado para ver o resultado da avaliação de algo. Quando executado, o vaor produzido é mostrado em tela, mas isso depende muito do ambiente em que o código está sendo executado.

O `typeof` espera um único valor por isso ele é chamado de operádor unário. Já operadores operam 2 valores são chamados de binários. O operador `-` pode ser usado tanto como binário quanto como unário.

```js
console.log(-(10 - 2)); //-8
```

---

## 1.5 VALORES BOOLEANOS

Os tipos booleanos tem apenas dois valores: verdadeiro ou falso, que são escritos como `true`ou `false` respectivamente.

### Comparações

Essa é uma maneira que produz valores booleanos:

```js
console.log(3 > 2); // true
console.log(2 < 3); // false
```

Os sinais de > e < são símbolo que representam "maior que" e "menor que". Ele são operadores binários, e o resultado da aplicação deles é um valor Booleano que indica se eles são verdadeiros nesse caso.

As strings também podem ser comparadas:

```js
console.log('Aerdvark' < 'Zoroaster');
```

A forma de comparação de string é mais a ordenação alfabética. Letras maiusculas serão sempre "menores" que as minúsculas. A comparação é baseada no padrão unicode que atribui um número para todos os caracteres. Quando comparamos strings, o JavaScript da esquerda para a direita, compara os códigos numéricos dos caracteres um por um. Outros operadores parecids são >=(maior ou igual a), <= (menor ou igual), == (igual a) e != (não igual).

```js
console.log('Itchy' != 'Scratchy');
```

Somente o valor `NaN` não é igual a ele mesmo quando são comparados.

```js
console.log(NaN == NaN);
```

NaN é supostamente usado para indicar o resultado de alguma operação que não tenha sentido e, por isso, ele não será igual ao resultado de quaisquer outras operações sem sentido.active

---

## OPERADORES LÓGICOS

Operadores lógicos: `and`, `or` e `not` podem ser usados para "pensar" de forma lógica sobre Booleanos. O operador `&&` representa o valor and é um operador binário, e seu resultado é apenas verdadeiro se ambos os valores dados à ele forem verdadeiros.

```js
console.log(true && false); //false
console.log(true && true); //true
```

O operador `||` indica o valor lógico Or. Ele produz um valor verdadeiro se qualquer um dos valores dados à ele for verdadeiro.

```js
console.log(false || true); // true
console.log(false || false); // false
```

Not é escrito utilizando um ponto de exclamação (!). Ele é um operador unário que inverte o valor que é dado à ele. !true produz false e !false produz true.

Quando misturamos esses operadores Booleanos com operadores aritméticos e outros tipos de operadores nem sempre é óbvio quando devemos usar ou não os parênteses. Ná prática, não teremos problemas sabendo que, os operadors que vimos até agora, || possui a menor precedência, depois vêm o operador &&, eme seguida os operadores de comparação e, por último, quaisquer outro operador.

```js
1 + 1 == 2 && 10 * 10 > 50;
```

O utimo operador lógico a ser discutido é o `ternário. Ele é escrito usando ponto de interrogação e dois pontos.active

```js
console.log(true ? 1 : 2); // → 1
console.log(false ? 1 : 2); // → 2
```

Esse operador é chamado de operador condicional. O valor presente à esqueda do ponto de interrogação "seleciona" qual dos outros dois valores será retornado. Quando ele for verdadeio, o valor do meio é escolhido e, quando for falso, o valor à direita é retornado.

---

## 1.6 VALORES INDEFINIDOS

Existe dois valores especiais, `null` e `undefined`, que são valores usados para identificar a ausência de um valor com significado. Muitas operações não produzem um valor com significado retornarão `undefined` simplismente porque eles precisam retorna algum valor. A diferença entre `undefined`e `null` é um acidente que foi criado no design do JavaScript, e não faz muita difença na maioria das vezes. Nos casos em que nos preocupamos com esse valores, podemos tratá-los como valores idênticos.

---

## 1.7 CONVERSÃO AUTOMÁTICA DE TIPO

O JavaScript tenta fazer o seu melhor para aceitar quase todos os programar que você fornecer, inclusive aqueles que fazem coisas bem estranhas.

```js
console.log(8 * null);
console.log('5' - 1);
console.log('5' + 1);
console.log('five' * 2);
console.log('false' == 0);
```

Quando um operador é aplicado a um tipo de valor "errado", a linguagem converterá o valor para uo tipo que ela deseja de forma inesperada. Portanto, na primeira expressão `null` se torna 0. Na segunda, a string "5" se torna o número 5. Já a terceira expressão, o operador + tenta efetuar uma concatenação de string antes de tentar executar adição numérica e, por isso o número 1 é converido para a string "1".

Quando algo que não pode ser mapeado como um número de forma óbvia é convertido para um número, o valor `NaN` é produzido. Quaisquer outra operação aritmética realizada com `NaN`resulta em `NaN`.

Quando comparamos valore do mesmo tipo usando operador ==, o resultado é fácil de se prever. Mas quando os tipos forem diferentes, o JavaScript usa um conjunto de regras complicadas e confusas para determinar o que fazer, sendo que, na maioria dos casos, ele tenta apenas converter um dos valores para o mesmo tipo do outro valor.

```js
console.log(null == undefined); // → true
console.log(null == 0); // → false
```

As regras de conversão de strings e número para valores booleanos afimar que 0, NaN e empty strings contam com `false`, enquanto todos os outros valors contam como `true`. Por causa disso, expressões como 0 == false e "" == false retornam true. Para casos assim, onde você não quer qualquer conversão automática de tipos, existem dois tipos de operadores: `===` e `!==`. O primeiro testa se o valor é precisamente igual ao outro, e o egundo testa se ele não é precisamente igual. Usar os operadore de comparação de trê caracteres previne inesperadas conversões de tipo. Mas quando já se tem certeza de que os tipos de ambos os lados serão iguais, ou que eles vão ser ambos null/undefined, não há problema em usar os operadores curtos.

---

## 1.8 O CURTO-CIRCUITO DE && E ||

Os operadores lógicos && e || tem uma maneira peculiar de lidar com valores de tipos diferentes. Eles vão converter o valor à sua esquerda para o tipo booleano a fim de decidir o que fazer, mas então, dependendo do operador e do resultado da conversão, eles ou retornam o valor à esquerda original, ou o valor à direita. O operador || vai retornar o valor à sua esquerda quando ele puder ser convertido em true , ou valor à sua direita caso contrário. Ele faz a coisa certa para valoresbooleanos, e vai fazer algo análogo para valores de outros tipos. Isso é muito útil, pois permite que o operador seja usado para voltar um determinado valor predefinido.

```js
console.log(null || 'user'); // → user
console.log('Karl' || 'user'); // → Karl
```

O operador && trabalha similarmente, mas ao contrário. Quando o valor à sua esquerda é algo que se torne
false , ele retorna o valor, e caso contrário ele retorna o valor à sua direita. Outro importante propriedade destes 2 operadores é que a expressão a sua direita é avaliada somente quando necessário. No caso de true || X , não importa o que X é - pode ser uma expressão que faça algo terrível - o resultado vai ser verdadeiro, e X nunca é avaliado. O mesmo acontece para false && X , que é falso, e vai ignorar X.

---

## RESUMO

Nós vimos 4 tipos de valores do JavaScript neste capítulo. Números, strings, booleanos e valores indefinidos. Alguns valores são criados digitando seu nome ( true , null ) ou valores (13, "abc" ). Eles podem ser combinados e transformados com operadores. Nós vimos operadores binários para aritmética ( + , - , \* , / , e % ), um para concatenação de string ( + ), comparação ( == , != , === , !== , < , > , <= , >= ) e lógica( && , || ), como também vários operadores unários ( - para negativar um número, ! para negar uma lógica, e typeof para encontrar o tipo do valor). Isto lhe dá informação suficiente para usar o JavaScript como uma calculadora de bolso, mas não muito mais. O próximo capítulo vai começar a amarrar essas operações básicas conjuntamente dentro de programas básicos.
