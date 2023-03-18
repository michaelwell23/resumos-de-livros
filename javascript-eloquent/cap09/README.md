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

A função b uscaData acima irá extrair facilmente a data de um texto como "100/1/30000", um resultado pode acontecer em qualquer lugar da string fornecida, então, nesse caso, vai encontrar no segundo caractere e terminar no último Se quisermos nos assegurar que a busca seja em todo o texto, podemos adicionar os marcadores "^" e "$". O primeiro acha o início da string fornecida e o segundo o final dela. Então /^\d+$/ encontra apenas em uma string feita de um ou mais dígitos, /^!/ encontra qualquer string que começa com sinal de exclamação e /x^/ não acha nada. Se, por outro lado, queremos ter certeza que a data inicia e termina no limite da palavra, usamos o marcador \b.

```js
console.log(/cat/.test('concatenate')); // → true
console.log(/\bcat\b/.test('concatenate')); // → false
```

Note que esses marcadores de limite não cobrem nenhum caractere real, eles apenas asseguram que o padrão de busca irá achar algo na posição desejada, informada nos marcadores.

---

## 9.9 - ALTERNATIVAS

O caractere pipe ("|") indica uma opção entre o padrão à esquerda ou a direita.

```js
var contagemAnimal = /\b\d+ (porco|vaca|galinha)s?\b/;
console.log(contagemAnimal.test('15 porcos')); // → true
console.log(contagemAnimal.test('15 porcosgalinhas')); // → false
```

Parênteses podem ser usados para limitar a que parte do padrão que o pipe ("|") se aplica, e você pode colocar vários desses operadores lado a lado para expressar uma escolha entre mais de dois padrões.

---

## 9.10 - O MECANISMO DE PROCURA

Uma string corresponde à expressão se um caminho do início até o final do diagrama puder ser encontrado, com uma posição inicial e final correspondente, de modo que cada vez que passar em uma caixa, verificamos que a posição atual na sequência corresponde ao elemento descrito nela, e, para os elementos que correspondem caracteres reai, continue no fluxo das caixas. O modo como o mecanismo de expressões regulares do JavaScript trata uma busca em uma string é simples. Começa no início da string e tenta achar um resultado nela. Nesse casso, existe um limite de palavra aqui, então passamos pela primeira caixa, mas não existe um dígito, então ele falha na segunda caixa. Continua no segundo
caractere da string e tenta novamente. E assim continua, até encontrar um resultado ou alcançar o fim da string e
concluir que não encontrou nenhum resultado.

---

## 9.11 - RETROCEDENDO

A expressão regular /\b([01]+b|\d+|[\da-f]h)\b/ encontra um número binário seguido por um "b", um número decimal,
sem um caractere de sufixo, ou um número hexadecimal (de base 16, com as letras "a" a "f" para os algarismos
de 10 a 15), seguido por um "h".

![re_number](https://eloquentjavascript.net/2nd_edition/img/re_number.svg)

Ao buscar estra expressão, muitas vezes o ramo superior será percorrido, mesmo que a entrada não contenha realmente um número binário. A expressão é buscada não apensas no ramo que ese está executando. É o que acontece se a expressão retroage. Quando entra em um ramo, ela guarda em que ponto aconteceu, então ela retrocede e tenta outro ramo do diagrama se o atual não encontra nenhum resultado.Quando mais de um ramo encontra um resultado, o primeiro será considerado. Retroceder acontece também, de maneiras diferentes, quando buscamos por operadores repetidos. Se buscarmos /^.x/ em "ab cxe", a parte "." tentará achar toda a string. Depois, tentará achar apenas o que for seguido de um "x", e não existe um "x" no final da string. Então ela tentará achar desconsiderando um caractere, e outro, e outro. Quando acha o "x", sinaliza um resultado com sucesso, da posição 0 até 4. É possível escrever expressões regulares que fazem muitos retrocessos. O Problema ocorre quando um padrão encontra um pedaço da string de entrada de muitas maneiras.

![re_number](https://eloquentjavascript.net/2nd_edition/img/re_slow.svg)

Ela tentará achar séries de zeros sem um "b" após elas, depois irá percorrer o circuito interno até passar por todos os dígitos. Quando perceber que não existe nenhum "b", retorna uma posição e passa pelo caminho de fora mais uma vez, e de novo, retrocedendo até o circuito interno mais uma vez. Continuará tentando todas as rotas possíveis através destes dois loops, em todos os caracteres.

---

## 9.12 - O MÉTODO REPLACE

O método replace pode ser usado para substituir partes da string por outra string.active

```js
console.log('papa'.replace('p', 'm'));
```

O primeiro argumnto pode ser substituido por uma expressão regular, que na primeira ocorrência de correspondencia será substituída.

```js
console.log('Borobudur'.replace(/[ou]/, 'a')); // → Barobudur
console.log('Borobudur'.replace(/[ou]/g, 'a')); // → Barabadar
```

Quando a opção "g" é adicionada à expressão, todas as ocorrências serão substituidas. A verdadeira utilidade do uso de expressões regulares com o método replace é a opção de fazer referências aos grupos achados através da expressão. Se temos uma string longa com nomes de pessoas, uma por linha, no formato "Sobrenome Nome" e queremos trocar essa ordem e remover a vírgula, para obter o formato "Nome Sobrenome".

```js
console.log(
  'Hopper, Grace\nMcCarthy, John\nRitchie, Dennis'.replace(
    /([\w ]+), ([\w ]+)/g,
    '$2 $1'
  )
);
// → Grace Hopper
//John McCarthy
//Dennis Ritchie
```

Também é possível passar uma função, em vez de uma string no segundo argumento do método replace. Para
cada substituição, a função será chamada com os grupos achados (assim como o padrão) como argumentos, e
o valor retornado pela função será inserido na nova string.

```js
var s = 'the cia and fbi';
console.log(
  s.replace(/\b(fbi|cia)\b/g, function (str) {
    return str.toUpperCase();
  })
); // → the CIA and FBI
```

Outro exemplo seria:

```js
var stock = '1 lemon, 2 cabbages, and 101 eggs';
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1)
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0) amount = 'no';
  return amount + ' ' + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne)); // → no lemon, 1 cabbage, and 100 eggs
```

Ele pega a string, acha todas as ocorrências de um número seguido por uma palavra alfanumérica e retorna uma nova string onde cada achado é diminuído em um. O grupo (\d+) finaliza o argumento da função e o (\w+) limita a unidade. A função converte o valor em um número, desde que achado, \d+ faz ajustes caso exista apenas um ou zero esquerda.

---

## 9.13 - QUALIFICADOR / GREED

É simples usar o método replace para escrever uma função que remove todos os comentários de um pedaço de código JavaScript.

```js
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[\w\W]*\*\//g, '');
}
console.log(stripComments('1 + /* 2 */3')); // → 1 + 3
console.log(stripComments('x = 10;// ten!')); // → x = 10;
console.log(stripComments('1 /* a */+/* b */ 1')); // → 1 1
```

A parte [\w\W] é uma maneira (feia) de encontrar qualquer caractere. Lembre-se que um ponto não encontra um caractere de quebra de linha / linha nova. Comentários podem conter mais de uma linha, então não podemos usar um ponto aqui. Achar algo que seja ou não um caractere de palavra, irá encontrar todos os caracteres possíveis. Existem duas variações de operadores de repetição em expressões regulares ('+', '_', e '{}'). Por padrão, eles quantificam, significa que eles encontram o que podem e retrocedem a partir daí. Se você colocar uma interrogação depois deles, eles se tornam non_greedy, e começam encontrando o menor grupo possível e o
resto que não contenha o grupo menor. E é exatamente o que queremos nesse caso. Com o asterisco encontramos os grupos menores que tenham "_/"
no fechamento, encontramos um bloco de comentários e nada mais.

```js
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[\w\W]*?\*\//g, '');
}
console.log(stripComments('1 /* a */+/* b */ 1')); // → 1 + 1
```

---

## 9.14 - CRIANDO OBJETOS RegExp DINAMICAMENTE

Existem casos onde você pode não saber o padrão exato que você precisa quando escreve seu código. Digamos que você queira buscar o nome de um usuário em um pedaço de texto e colocá-lo entre caracteres "\_" para destacá-lo. O nome será fornecido apenas quando o programa estiver sendo executado Podemos construir uma string e usar o construtor RegExp para isso:

```js
var name = 'harry';
var text = 'Harry is a suspicious character.';
var regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_')); // → _Harry_ is a suspicious character.
```

Ao criar os marcos de limite "\b", usamos duas barras invetidas, porque estamos escrevendo-os em uma string normal, não uma expressão regular com barras. As opções para a expressão regular pode ser inseridas como segundo argumento para o contrutor RegExp. Para contornar isso, adicionamos contrabarras antes de qualquer caractere que não confiamos. adicionar contrabarras antes de qualquer caractere alfabético é uma má ideia, porque coisas como "\b" ou "\n" possuem significa para uma expressão regular. Mas escapar tudo que não for alfanumerico ou espaço é seguro.

```js
var name = 'dea+hl[]rd';
var text = 'This dea+hl[]rd guy is quite annoying.';
var escaped = name.replace(/[^\w\s]/g, '\\$&');
var regexp = new RegExp('\\b(' + escaped + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_')); // → This _dea+hl[]rd_ guy is quite annoying.
```

O marcador "$&" na string de substituição age como se fosse "$1", mas será substituído em dodos os resultados ao invés do grupo encontrado.

---

## 9.15 - O MÉTODO SEACH

Existe um outro método, _search_, que espera como argumento uma expressão regular, e como o indexOf, retorna o índice do primeiro resultado encontrado ou -1 se não encontra.

```js
console.log('word'.search(/\S/)); // → 2
console.log(' '.search(/\S/)); // → -1
```

Infelizmente, não existe um modo de indicar onde a busca deve começar, com um índice, o que seria muito útil.

---

## 9.16 - A PROPRIEDADE LASTINDEX

Expressões regulares possuem propriedades (como source que contém a string que originou a expressão). Uma dessas propriedades, lastIndex, controla, em algumas circunstâncias, onde a busca começará. Essas circunstâncias são que a expressão regular precisa ter a opção "global" (g) habilitada e precisa ser no método exec. Novamente, deveria ser da mesma maneira que permitir um argumento extra para o método exec, mas coesão não é uma característica que define a sintaxe de expressões regulares em JavaScript.

```js
var pattern = /y/g;
pattern.lastIndex = 3;

var match = pattern.exec('xyzzy');

console.log(match.index); // → 4
console.log(pattern.lastIndex); // → 5
```

A propriedade lastIndex é atualizada ao ser executada após encontrar algo. Quando não encontra nada, lastIndex é definida como zero, que também é o valor quando uma nova expressão é construída. Quando usada uma expressão regular global para múltiplas chamadas ao método exec, esta mudança da propriedade lastIndex pode causar problemas, sua expressão pode iniciar por acidente em um índice deixado na ultima vez que foi executada. Outro efeito interessante da opção global é que ela muda a maneira como o método match funciona em uma string. Quando chamada com uma expressão global, em vez de retornar um array semelhante ao retornado pelo exec, match encontrará todos os resultados do padrão na string e retornará um array contendo todas as strings encontradas.

```js
console.log('Banana'.match(/an/g)); // → ["an", "an"]
```

Um padrão comum é buscar todas as ocorrências de um padrão em uma string, com acesso a todos os grupos encontrados e ao índice onde foram encontrados, usando lastIndex e exec.

```js
var input = 'A text with 3 numbers in it... 42 and 88.';
var re = /\b(\d+)\b/g;
var match;
while ((match = re.exec(input)))
  console.log('Found', match[1], 'at', match.index);
// → Found 3 at 12
//Found 42 at 31
//Found 88 at 38
```

Usa-se o fato que o valor de uma expressão de definição ('=') é o valor assinalado. Então usando-se `match = re.exec(input)` como a condição no bloco while , podemos buscar no início de cada iteração.

---

## 9.17 - ANALISANDO UM ARQUIVO .INI
