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
