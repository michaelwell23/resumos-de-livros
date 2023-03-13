# EXPRESSÕES REGULARES

Expressões regulares são um modo de descrever padrões em um conjunto de caracteres. Eles formam uma pequena linguagem à parte, que é incluída no JavaScript. Expressões regulares são ao mesmo tempo, extremamente úteis e estranhas. Conhecê-las apropriadamente facilitará muito vários tipos de processamento de texto. Mas a sintaxe utilizada para descrevê-las é rediculamente enigmática. Além disso, a interface do JavaScript elas é um tanto quanto desajeitada.

---

## 9.1 - NOTAÇÃO

Uma expressão regular é um objeto. Ele pode ser constuído com o construtor RegExp ou escrito como um valor literal, encapsulado ao padão com um caractere barra ('/')

```js
var expReg1 = new RegExp('abc');
var expReg2 = /abc/;
```

Ao usar o construtor RegExp, o padrão é escrito como um texto normal, de modo que as regras normais se aplicam para barras invertidas. Na segunda notação é usado barras para delimitar o padrão. Alguns sinais como de interrogação e de soma, são usados como marcadores especiais em expressões regulares, e precisam ser precedidos por uma barra invertida, para representarem o caractere original e não o comando de expressões regular.

```js
var umMaisUm = /1 \+ 1/;
```

Saber exatamente quais caracteres devem ser escapados com uma barra invertida em uma expressão regular exige que você saiba todos os caracteres especiais e seus significados na sintaxe de expressões regulares.

---

## 9.2 - TESTANDO POR CORRESPONDÊNCIAS

Expressões regulares possuem vários métodos. O mais simples é test, onde dado um determinado texto, ele retorna um booleano que informa se o padrão fornecido na expressão foi encontrado nesse texto.

```js
console.log(/abc/.test('abcde')); // → true
console.log(/abc/.test('12345')); // → false
```

Uma expressão regular que contenha apenas caracteres simples, representa essa mesma sequência de caracteres. Se "abc" existe em qualquer lugar (não apenas no início) do texto testado, o resultado será verdadeiro.

---

## 9.3 - ENCONTRANDO UM CONJUNTO DE CARACTERES
