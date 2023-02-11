# CAPÍTULO 02: ESTRUTURA DO PROGRAMA

Nesse ponto vamos expandir o domínio da linguagem JavaScript para o ponto onde poderemos realmente expressar algo mais significativo.

---

## 2.1 - EXPRESSÕES E AFIRMAÇÕES

Um fragmento de código que produz um valor é chamado de `expressão`. Todo valor que é escrito literalmente é uma expressão. Uma expressão entre parênteses é também uma expressão, e também um operador binário aplicado a duas expressões, ou um unário aplicado a uma. Se uma expressão corresponde a um fragmento de sentença, uma afirmação, no JavaScript, corresponde a uma frase complea em liguagem humana. Um programa é simplesmente uma lista de aformações. O tipo mais simples de afirmação é uma expressão com um ponto e vírgula depois dela.

```js
1;
!false;
```

Uma expressão pode ser apenas para produzir um valor, que pode então ser usado para fechar a expressão. Uma declaração vale por si só, e só equivale a alguma coisa se ela afeta em algo. Ela pode mostrar algo em tela ou pode mudar internamente o estado da máquina de uma forma que vai afetar outras declarações que irão vir. Esta mudanças são chamadas `efeitos colaterais`.

---

## 2.2 - PONTO E VÍRGULA

O JavaScript permite que você omita o ponto e vírgula no fim de uma declaração. Em outros casos ele deve estar lá ou coisas estranhas irão acontecer. As regras para quando ele pode ser seguramente omitido são um pouco complexas e propensas a erro.

---

## 2.3 - VARIÁVEIS

Para pegar e guardar valores a lingaugem fornece uma coisa chamada `variáveis`.

```js
var caught = 5 * 5;
```

E isso nos dá um segundo tipo de declaração. A palavra especial `var` indica que esta sentença vai definir uma variável. Ela é seguida pelo nome da variável e, se nós quisermos dar um valor, podemos utilizar o operdado = e uma expressão. Depois de uma variável ter sido definida, seu nome pode ser usado como uma expressão. O valor da expressão é o valor atual mantido pela variável.

```js
var ten = 10;
console.log(ten * ten);
```

Nomes de variáveis podem ser quase qualquer palavra, menos as reservadas para palavras-chaves. Não podem haver espaços inluídos. Dígitos podem ser incluidos, mas o nome não pode iniciar com eles. Nome da variável não pode incluir pontuação,exceto pelos caracteres $ e \_. Quando uma variável aponta para um valor, ela está ligado ao valor para sempre. O operador = pode ser usado a qualquer hora em variáveis existentes para desconectá-las de seu valor atual e então apontá-las para um outro:

```js
var mood = 'ligth';
console.log(mood); //light

mood = 'dark';
console.log(mood); //dark
```

Quando você define uma variável sem fornecer um valor a ela, ao perguntar sobre o seu valor, você receberá o valor `undefined`, que nada mais é um retorno para uma variável vazia. Veja um exemplo. Para lembrar da quantidade de dólares que Luigi ainda lhe deve, você cria uma variável. E então quando ele lhe paga 53 dólares, você dá a essa variável um novo valor.

```js
var luigiDebt = 140;
luigiDebt = luigiDebt - 35;
console.log(luigiDebt); //105
```

---

## 2.4 - PALAVRAS-CHAVE E PALAVRAS RESERVADAS

Palavras que tem um significado especial, como `var` podem ser usadas como nomes de variáveis. Existe também algumas palavras que são reservadas para uso em futuras versões do JavaScript. Estas também não são autorizadas a serm utilizadas como nomes de variáveis, embora alguns ambientes JavaScript permitam.

---

## 2.5 - O AMBIENTE

A coleção de variáveis e seus valores que existem em um determinado tempo é chamado de `environment` (ambiente). Quando um programa inicia, o ambiente não está vazio. Ele irá conter no mínimo o numero de variáveis que fazer parte do padrão da linguagem. E na maioria das vezes haverá um conjunto adicional de variáveis que fornecem maneiras de interagir com o sistema envolvido.

---

## 2.6 - FUNÇÕES

Muitos valores fornecido no ambinte padrão são do tipo `function`. Uma função é um pedaço de programa envolvido por um valor. Este valor pode ser aplicado a fim de executar o programa envolvido. No ambiente do navegador, podemos utilizar a função `alert` que mostra uma pequena caixa de diálogo com uma mensagem.

```js
alert('Hello World');
```

Executar uma função é denomicado invocar, chamar ou aplica uma função. Você pode chamar uma função colocando os parênteses depois da expressão que produz um valor de função. Normalmente você irá usar o nome da variável que contém uma função diretamente. Os valores entre os parênteses são passado ao programa dentro da função.

---

## 2.7 - FUNÇÃO console.log

A maioria dos sistemas JavaScript, fornece uma função `console.log` que escreve seus argumentos como texto na sáida do dispositivo. Nos navegadores, a saída fica no console JavaScript, que é oculta por padrão nos browser, mas pode ser acessada precionando F12 ao abrir o navegador. Quando rodamos os exemplos ou os nosso próprios códigos, o `console.log` vai mostrar embaixo o exemplo, ao invés de ser no console JavaScript.

```js
var x = 30;
console.log('ovalor de x é ', x);
// o valor de x é 30
```

---

## 2.8 - RETORNANDO VALORES

Muits funções são úteis por causa dos efeitos que elas produzem. É também possível para uma função produzir um valor, no caso de não ser necessário um efeito colateral. Um exemplo é a função `Math.max` que pega dois números e retorna o maior entre eles.

```js
console.log(Math.max(2, 4));
```

Quando uma função produz um valor, é dito que ela retorna um valor. Tudo que produz um valor é uma expressão, que significa que chamadas de função podem ser usadas dentro de expressões maiores. No exemplo a seguir, uma chamada para função `Math.min` que é o oposto de `Math.max` é usada como uma das entradas para o operador de soma:

```js
console.log(Math.min(2, 4) + 100);
```

---

## 2.9 - prompt e confirm

O ambiente forncecido pelos navegadores contém outras funções para mostrar janelas. Podemos perguntar a um usuário uma questão de Ok/Cancel utilizando o `confirm`. Essa função tem como retorno valores booleanos `true` ou `false`.

```js
confirm('Shall we, then?');
```

O `prompt` pode ser usado para criar uma questão "aberta". O usuário poderá fornecer uma escrita dentro da janela de diálogo, que será retornado com um valor de string. Também podemos passar argumentos dentro da função, o primeiro é a questão; o segundo é o texto inicial.

```js
prompt('Tell me everthing you know.', '...');
```

Estas duas funções não são muito utilizadas, porque não se tem controle sobre o modo que a janela vai aparecer, mas elas são úteis para experimentos.

---

### 2.10 - FLUXO DE CONTROLE

Quando o programa contém mais de uma declaração, as declarações são executadas, previsivelmente, de cima para baixo. Com um exemplo básico, o programa abaixo tem duas declarações.

```js
var theNumber = Number(prompt('Pick a number', '...'));
alert('Your number is the square root of ' + theNumber * theNumber);
```

Existe funções que fazem conversões de tipo como `String`, `Boolean`. A função `Number`, faz exatamente isso, como precisamos de um número, a função `prompt` retorna uma string, é necessário fazer essa conversão.Aqui podemos ver uma reprsentação bem trívial do fluxo de controle em linha reta.

---

## 2.11 - EXECUÇÃO CONDICIONAL

Uma outra alternativa alem da ordem linear é a execução `condicional`, onde escolhemos entre duas rotas diferentes baseando em um valor booleano. A execução condicional é escrita utilizando a palavra-chave `if`. No caso mais simples, nós queremos que algum código seja executado se, e somente se, uma certa condição existir. Utilizando o exemplo anterios, podemos mostra o dobro do número fornecendo como entra apenas se ele for realmente um número

```js
var theNumber = Number(prompt('Pick a number', ''));
if (!isNaN(theNumber))
  alert('Your number is the square root of ' + theNumber * theNumber);
```

com essa modificação, se você fornecer qualquer outro dado que não seja um número, nenhuma saída será retornada. Tal expressão é escrita entre parênteses logo após a palavra-chave e seguida por uma declaração a ser executada. A função `isNaN` retorna true apenas se o argumento fornecido for `NaN`. A função `Number` retorna `NaN` quando o valor fornecido é diferente de um número valido. A palavras-chave `else` pode ser usada, juntamente com `if`, para criar dois caminhos distintos de execução.

```js
var theNumber = Number(prompt('Pick a number', ''));
if (!isNaN(theNumber))
  alert('Your number is the square root of ' + theNumber * theNumber);
else alert("Hey. Why didn't you give me a number?");
```

Se tiver mais de dois caminhos a escolher, múltiplos pares de `if/else` podem ser encadeados.

```js
var num = Number(prompt('Pick a number', '0'));

if (num < 10) alert('Small');
else if (num < 100) alert('Medium');
else 'Large';
```

---

## 2.12 - LOOPS WHILE E DO

Considerando um programa que imprime todos os números pares de 0 a 12.

```js
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
```

Isso funciona, mas a ideia é escrever um programa é fazer com que algo seja menos trabalhoso. O que precisamos é de uma maneira de repetir os código. Para isso, é necessário utilizar um fluxo de controle, chamado de `laço de repetição` (loop). O fluxo de controle do loop permite voltar a um mesmo ponto no programa e repeti-lo no estad atual do programa.

```js
var number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

Uma declaração que inicia com a palavra-chave `while` cria um loop. Essa palavra é acompanhada por uma expressão entre parêntes e seguida pro uma declaração. O loop continua executando a declaração enquato a expressão produzir uma valor que, seja `true`. No loop, imprime-se o número atual e soma dois em sua variável. Sempre que precisamos executar múltiplas declarações dentro de um loop, nós as envolvemos com chaves. Uma sequência declarada envolvidas por chaves é chamado de `bloco`. A variável `number` demonstra uma maneira na qual variável podem verificar o progresso de um program. Toda vez que o loop se repete, `number` é incrementada por 2. No início de cada repetição, ele é comparado com número 12 para decidir se o proggra terminou de executar todo o trabalho esperado.

Como exemplo, o programa abaixo calcula e mostra o valor de 2¹⁰. Há duas variáves, uma para armazenar o resultado e outra para contar quantas vezes multiplicamos esse resultado por 2. O looptesta se a segunda variável já atingiu o valor 10 e então atualiza ambas as variáveis.

```js
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
```

O loop `do` é uma estrutura de controle similar ao `while`. A única diferença entre eles é o `do` sempre executa suas declarações ao menos uma vez e inicia o teste para verificar se deve parar ou não paenas após a primeira execução.

```js
do {
  var name = prompt('Who are you?');
} while (!name);
console.log(name);
```

O programa força o usuário a informa um nome. Ele continuará pedinto até que seja fornecidio um valor que não seja uma string vazia. Aplicar o operador ! faz com que o valor seja convertido para o tipo Booleano antes de negá-lo, e todas as strings exceto "" convertem para `true`.

---

## 2.13 - INDENTANDO CÓDIGO

Você deve ter reparado nos espaços que coloco em algumas declarações. No JavaScript, eles não são necessários e o computador irá aceitar o programa sem eles. O papel da indentação é fazer com que a estrutura do código se destaque. Com a indentação adequada, o formato visual do programa corresponde ao formato dos blocos contidos nele.

---

## 2.14 - LOOP FOR

O JavaScript fornece uma forma um pouco mais curta e compreensiva do que o loop `while`. Esse loop é chamado de loop `for`.

```js
for (var number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
```

Os parênteses após a palavra-chave devem conter dois pontos e vírgulas; A parte anterior ao primeiro ponto e virgula inicializa o loop, definindo uma variável. A segunda parte é a expressão que verifica se o loop deve continuar ou não. A parte final, atualiza o estado do loop após cada interação. Abaixo podemos ver o códido que calcula 2¹⁰ utilizando `for`.

```js
var result = 1;
for (var counter = 0; counter < 10; counter = conunter + 1) {
  result = result * 2;
}
console.log(result);
```

---

## 2.15 - QUEBRANDO A EXECUÇÃO DE UM LOOP

Ter uma condição que produza um resultado `false` não é a única maneira que um loop pode para. Existe também uma declaração especial chamada `break` que tem o efeito de parar a execução e sair do loop em questão.

```js
for (var current = 20; ; current++) {
  if (current % 7 === 0) break;
}
console.log(current);
```

Usar o operador resto é uma boa maneira de testar se um número é divisivel por outro, veficando se o resulatdo da divisão é igual a 0. A construção do `for` no exemplo não contém a parte que checa pelo fim do loop. Isso significa que o loop não vai parar de executar até que a declaração `break` contina nele seja executada. Se não incluir a declaração `break` ou acidentalmente escrevel uma condição que sempre produza um resultado `true`, o programa ficará preso em um loop infinito. Um programa preso em um loop infinito nunca vai terminar sua execução.

A palavra-chave `continue`é similar ao `break`.Quando ele está contido no corpo de um loop, o controle de execução pula para fora do corpo e continua executando a próxima iteraão do loop.

---

## 2.16 - ATUALIZANDO VARIÁVEIS SUCENTAMENTE

Um programa, quando está em um loop, muitas vezes o valor armazenado em uma variável precisa ser atualizado, baseado no valor anterior dessa mesma variável.

```js
counter = conter + 1;
```

Podemos utilizer como atalho:

```
count += 1
```

atalhos similares funcionam para outros operadores, como `*=`, `-=`. Isso permite encurtar a contagem um pouco.active

```js
for (var number = 0; number <= 12; number += 2) console.log(number);
```

Outras formar de encurtar ainda mais a contagem para operadores `+=` e `-=`, podemos utilizar `counter++` e `counter--`

---

## 2.17 - RESOLVENDOUM VALOR COM SWITCH

É comum que o código fique assim:

```js
if (variable == 'value1') action1();
else if (variable == 'value2') action2();
else if (variable == 'value3') action3();
else defaultAction();
```

Há um construto chamado `switch` que se destina a resolver o envio de valores de uma forma mais direta. Infelizmente, a sintaxe JavaScript utilziada para isso é um pouco estranha - frequentemente uma cadeia de declarações `if` continua parecendo melhor.

```js
switch (prompt('What is the weather like?')) {
  case 'rainy':
    console.log('Remember to bring an umbrella.');
    break;
  case 'sunny':
    console.log('Dress lightly.');
  case 'cloudy':
    console.log('Go outside.');
    break;
  default:
    console.log('Unknown weather type!');
    break;
}
```

Dentro do bloco aberto pelo `switch`, podems colcoar qualquer número de rótulo no `case`. O programa vai pular para o rótulo correspondente ao valor que `switch` fornece, ou para `default` se nehum valor for encontrado. ENtão ele começa a executar as declarações, e continua a passar pelo rótulos, até encontrar uma declarção `break`. Mas tenha cuidado: é fácil esquecer de um `break`, o que fará com que o programa execute códigos que você não gostaria de executar.

---

## 2.18 - CAPITALIZAÇÃO

Essas são as escolhas para escrever nome de variáveis com duas ou mais palavras:

```txt
fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle
```

Por padrão o último estimo é o mais utilizado, conhecido com Camelcase, eles capitalizam todas as palavras exceto a primeira. Não é difícil se acostumar com coisas pequenas assim, e o código com estilos de nomenclaturas mistas pode ser tornar desagradável para leitura.

## 2.19 - COMENTÁRIOS

Os comentários são para anotar alguns pensamento como parte de seu programa. O comentário é um pedaço de texto que é parte de um programa mais completamente ignorado pelo computador. No JavaScript temos duas formas de escrever os comentários. O de única linha, utilizado por duas barras (//).

```js
var accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
var report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass.
```

E a outra forma é utilizado o /\* \*/, que cria um comentário de mmultiplas linhas.

```js
/*
I first found this number scrawled on the back of one of
my notebooks a few years ago. Since then, it has
occasionally dropped by, showing up in phone numbers and
the serial numbers of products that I bought. It
obviously likes me, so I've decided to keep it.
*/
var theNumber = 11213;
```

## RESUMO

Você agora sabe que um programa é construído de declarações, que as vezes contém mais declarações. Declarações tendem a conter expressões, que podem ser feitas de pequenas expressões.

Colocar declarações uma após a outra nos dá um programa que é executado de cima para baixo. Você pode
causar transtornos no fluxo de controle usando declarações condicionais ( `ìf , else e switch` ) e loops ( `while, do e for` ).

As variáveis podem ser usadas para arquivar pedaços de dados sob um nome, e são úteis para rastrear o estado de um programa. O ambiente é um conjunto de variáveis que são definidas. O sistema JavaScript sempre coloca um número padrão de variáveis úteis dentro do seu ambiente.

Funções são valores especiais que encapsulam um pedaço do programa. Você pode invocá-las escrevendo `function Name (argument1, argument2) {}` . Essa chamada de função é uma expressão, que pode produzir um valor.
