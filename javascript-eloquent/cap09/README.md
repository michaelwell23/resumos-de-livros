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

Em expressão regulares, colocar um conjunto de caracteres entre conchetes faz com que a expressão ache qualquer dos caracteres dentro dos colchetes.

```js
console.log(/[0123456789]/.test('ano 1992')); // → true
console.log(/[0-9]/.test('ano 1992')); // → true
```

Dentro de colchetes, um hífen entre dois caracteres pode ser usado para indicar um conjunto entre dois caracteres. Existe alguns grupos de caracteres de uso comum, que já possuem incluídos na sintaxe de expressões regulares.

```txt
- \dcaracteres numéricos
- \wcaracteres alfanuméricos ("letras")
- \sespaços em branco (espaço, tabs, quebras de linha e similares)
- \Dcaracteres que não são dígitos
- \Wcaracteres não alfanuméricos
- \Scaracteres que não representam espaços
- . (ponto)
todos os caracteres, exceto espaços
```

Para cada um dos atalhos de conjunto de caracteres, existe uma variação em letra maiúscula que significa o exato oposto. ENtão você pode registrar um formato de data e hora como "30/01/2003 15:20" com a seguinte expressão:

```js
var dataHora = /\d\d\/\d\d\/\d\d\d\d \d\d:\d\d/;
console.log(dataHora.test('30/01/2003 15:20')); // → true
console.log(dataHora.test('30/jan/2003 15:20')); // → false
```

Muitas barras invertidas, sujam a expressão, que dificultam compreende qual o pardão procurado. Mas é assim mesmo o trabalho com expressões regulares. Estes marcadores de categoria também podem ser usados dentro de colchetes, então [\d.] significa qualquer dígito ou ponto.
Para "inverter" um conjunto de caracteres, buscar tudo menos o que você escreveu no padrão, um cento circunflexo ("^") é colocado no início do colchete de abertura.

```js
var naoBinario = /[^01]/;
console.log(naoBinario.test('01101')); // → false
console.log(naoBinario.test('01201')); // → true
```

---

## 9.4 - PARTES REPETIDAS EM UM PADRÃO

Quando se coloca um sinal de mais depois de algo em uma expressão regular, indicamos que pode existir mais de um. ENtão /\d+/ encontra um ou mais dígitos.

```js
console.log(/'\d+'/.test("'123'")); // → true
console.log(/'\d+'/.test("''")); // → false
console.log(/'\d*'/.test("'123'")); // → true
console.log(/'\d*'/.test("''")); // → true
```

O asterisco tem um significado similar, mas também permite não encontrar o padrão. Então, algo com um asterisco depois não impede um padrão de ser achado, apenas retornando zero resultados. Uma interrogação define uma parte do padrão de busca como "opcional", o que significa que ele pode ocorrr zero ou mais vezes.

```js
var neighbor = /neighbou?r/;
console.log(neighbor.test('neighbour')); // → true
console.log(neighbor.test('neighbor')); // → true
```

Para permitir que um padrão ocorra um número definido de vezes, chaves ("{}") são usadas. Colocando {4} depois de um elemento do padrão, mostra que ele deve ocorrer 4 vezes, exatamente. Da mesma maneira, {2,4} é utilizado para definir que ele deve aparecer no mínimo 2 vezes e no máximo 4.

```js
var dataHora = /\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2}/;
console.log(dataHora.test('30/1/2003 8:45')); // → true
```

Também é possível deixar em aberto o número mínimo ou máximo de ocorrências, omitindo o número correspondente. Então {,5} significa que deve ocorrer de 0 até 5 vezes e {5,} significa que deve ocorrer cinco ou mais vezes.

---

## 9.5 - AGRUPANDO SUBEXPRESSÕES

Para usar um operador como "\*" ou "+" em mais de um caractere de de uma vez, é necessário o uso de parênteses. Um pedaço de uma expressão regular que é delimitado por parênteses conta como uma única unidade, assim como os operadores aplicados a esse pedaço delimitado.

```js
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test('Boohoooohoohooo')); // → true
```

O terceiro "+" se aplica a todo grupo (hoo+), encontrando uma ou mais sequências como essa. O "i" no final da expressão do exemplo acima faz com que a expressão regular seja case-insensitive, permitindo-a encontrar a letra maiúscula "B" na \_string_dada, mesmo que a descrição do padrão tenha sido feita em letras minúsculas.

---

## 9.6 - RESULTADOS E GRUPOS

Expressões regulare possuem o método exec que retorna null quando nenhum resultado for encontrado, e se encontrar retorna um objeto.

```js
var match = /\d+/.exec('one two 100');
console.log(match); // → ["100"]
console.log(match.index); // → 8
```

Valores string possuem um método que se comporta de maneira semelhante.

```js
console.log('one two 100'.match(/\d+/)); // → ["100", index: 8, input: "one two 100"]
```

Um objeto retornado pelo método exec ou match possui um index de propriedade que informa aonde na string o resultado encontrado se inicia. Além disso, o objeto se parece um array de strings, onde o primeiro elemento é a string que foi achada. Quando uma expressão regular contém expressões agrupadas entre parênteses, o texto que correspond a esses grupos também aparece no array,onde o primeiro elemento sempre é todo o resultado, seguido pelo resultado do primeiro grupo entre parênteses, depois o segundo grupo e assim em diante.

```js
var textoCitado = /'([^']*)'/;
console.log(textoCitado.exec("'ela disse adeus'")); // → ["'ela disse adeus'", "ela disse adeus", index: 0, input: "'ela disse adeus'"]
```

Quando um grupo não termina sendo achado, o resultado do array é undefined. QUando achado várias vezes, somente o ultimo resultado encontrado é exibido no array.

```js
console.log(/bad(ly)?/.exec('bad')); // → ["bad", undefined]
console.log(/(\d)+/.exec('123')); // → ["123", "3"]
```

Grupos podem ser muito úteis para extrair partes de uma string. Se adicionarmos parênteses em volta do padrão de dígitos, poderemos selecionar a data no resultado da função exec.

---

## 9.7 - O TIPO DATA

O objeto `Date` é um obejto em JavaScript para representar as datas. Se utilizarmos o `new`, podemo obter a data e hora atual.

```js
console.log(new Date());
```

Também é possível criar um objeto para uma hora específica.

```js
console.log(new Date(2014, 6, 29)); // → Tue Jul 29 2014 00:00:00 GMT-0300 (BRT)
console.log(new Date(1981, 6, 29, 18, 30, 50)); // → Wed Jul 29 1981 18:30:50 GMT-0300 (BRT)
```

O JavaScript utiliz uma converção onde a numeração dos meses se inicia em zero,mas os dias iniciam-se em um. É bem confuso. Internamente, objestos do tipo data são armazenados como número de milissegundos desde o inicio de 1970. Usar o método getTime em uma data retorna esse numero, que é bem grande.

```js
console.log(new Date(2014, 2, 21).getTime()); // → 1395370800000
console.log(new Date(1395370800000)); // → Fri Mar 21 2014 00:00:00 GMT-0300 (BRT)
```

Objetos Date possuem métodos como getFullYea getMonth, getDate, getHours, getMinutes e getSeconds para extrair os componentes da data.
Então agora, ao colocar parênteses em volta das partes que nos interessam, podemos facilmente extrair uma data de uma string.

```js
function buscaData(string) {
  var dateTime = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]), Number(match[2]), Number(match[1]));
}
console.log(buscaData('21/1/2014')); // → Fri Feb 21 2014 00:00:00 GMT-0300 (BRT)
```

---

## 9.8 - LIMITES DE PALAVRA E STRING
