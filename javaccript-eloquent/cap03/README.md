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

## 3.8 - CLOSURE

O que acontece com variáveis locais quando a função que as criou não está mais ativa? O código a seguir define uma função `wrapValue` que cria uma variável local e retorna uma função que acessa e retorna essa variável.

```js
function wrapValue(n) {
  var localVariable = n;
  return function () {
    return localValue;
  };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

Várias instâncias de variável podem coexistir, o que é uma boa demonstração do conceito de que variáveis locais são realmente recriadas para cada nova chamada, sendo que as chamadas não interferem nas variáveis locais uma das outras. A funcionalidade capaz de referenciar uma instância específica de uma variável local após a execução de uma função é chamada de `closure`. Esse comportamento faz com que você não tenha que se preocupar com o tempo de vida das variáveis, como tabém permite uso criativo de valores de função.

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
```

Pensar em programas que funcionam dessa forma requer um pouco de prática. Um bom modelo mental é pensar que a palavra-chave `funtion` "congela" o código que está em seu corpo e o envolve em um pacote. No exemplo, `multiplier` retorna um pedaço de código "congelado" que fica armazenado na variável `twice`. A última linha do exemplo chama o valor armazenada nessa variável, fazeno com que o código "congelado" seja executado.

---

## 3.9 - RECURSÃO

Uma função que invoca a si mesma é denominada `recursiva`. A recursividade permite que as funções sejam excritas em um estilo diferente.

```js
function power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}

console.log(power(2, 3));
```

Essa é a maneira mais próxima da forma como os matemáticos definem a exponenciação. A função chama a si mesma várias vezes com diferentes argumentos para alcançar a multiplicação repetida. Entretanti, há um grave problema: A versãorecursiva é aproximadamente dez vezes mais lenta do que a variação que utiliza um laço de repetição. O dilema velocidade X elegância é basicamente interessante. Muitos programadores iniciantes focam excessivamente em eficiência até nos menores detalhes. Isso caba gerando programas maiores, mais complexos e muitas vezes menos corretos, que demoram mais tempo para serem escritos e, normalmente , executam apenas um pouco mais rapidamente do que as variaões mais simples e diretas. Porém, muitas vezes a recursão não é uma alternativa menos eficiente do que um laço de repetição. É muito mais simples resolver alguns problemas com recursão do que com laço de repetição. Considere este quebra-cabeça: Como você implementaria uma função que, dado
um número, tenta achar a sequência de adições e multiplicações que produzem esse número? Por exemplo, o
número 13 pode ser produzido multiplicando-se por 3 e adicionando-se 5 duas vezes. Já o número 15 não pode
ser produzido de nenhuma forma. Veja uma solução recursiva:

```js
function findSolution(target) {
  function find(start, history) {
    if (start == target) return history;
    else if (start > target) return null;
    else
      return (
        find(start + 5, '(' + history + ' + 5)') ||
        find(start * 3, '(' + history + ' * 3)')
      );
  }
  return find(1, '1');
}

console.log(findSolution(24)); // → (((1 * 3) + 5) * 3)
```

A função interna find é responsável pela recursão. Ela recebe dois argumentos e retorna uma string que mostra como chegar no número esperado ou null. Para fazer isso, a função executa uma entre três ações possíveis. Se o número atual é o número esperado, o histórico atual reflete uma possível sequência para alcançar o número esperado, então ele é simplesmente retornado. Se o número atual é maior que o número esperado, não faz sentido continuar explorando o histórico, já que adicionar ou multiplicar o número atual gerará um número ainda maior. Por fim, se nós tivermos um número menor do que o número esperado, a função tentará percorrer todos os caminhos possíveis que iniciam do
número atual, chamando ela mesma duas vezes, uma para cada próximo passo que seja permitido. Se a primeira chamada retornar algo que não seja null, ela é retornada. Caso contrário, a segunda chamada é retornada, independentemente se ela produzir string ou null. Para entender melhor como essa função produz o resultado que estamos esperando, vamos analisar todas as
chamadas a find que são feitas quando procuramos a solução para o número 13.

```txt
find(1, '1')
  find(6, '(1 + 5)')
    find(11, '((1 + 5) + 5)')
      find(16, '(((1 + 5) + 5) + 5)')
        too big
      find(33, '(((1 + 5) + 5) * 3)')
        too big
    find(18, '((1 + 5) * 3)')
      too big
  find(3, '(1 * 3)')
    find(8, '((1 * 3) + 5)')
      find(13, '(((1 * 3) + 5) + 5)')
        found!
```

A primeira chamada tenta achar a solução que começa com (1 + 5) e, usando recursão, percorre todas as possíveis soluções que produzam um número menor ou igual ao número esperado. Como ele não encontra uma solução para o número esperado, o valor null
é retornado até retornar para a chamada inicial. Nesse momento, o operador || faz com que a pilha de chamadas inicie o processo de exploração pelo outro caminho (1 \* 3) . Essa busca tem resultados satisfatórios, porque após duas chamadas recursivas acaba encontrando o número 13. Essa chamada recursiva mais interna retorna uma string e cada operador || nas chamadas intermediárias passa essa string adiante, retornando no final a solução esperada.

---

## 3.10 - FUNÇÕES CRESCENTES

Existem duas razões naturais para as funções serem introduzidas nos programas. A primeira delas é quando você percebe que está escrevendo o mesmo código várias vezes. A segunda é quando você precisa de uma funcionalidade que ainda não foi escrita e que merece ser encapsulada em uma função própria. Podemos escrever um programa que imprima dois números, sendo eles um numero de vacas e o outro de galinhas em uma fazenda, depois de alguns algorismos definidos por numeros de três digitos.

```js
function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3) cowString = '0' + cowString;
  console.log(cowString + ' Cows');
  var chickenString = String(chickens);
  while (chickenString.length < 3) chickenString = '0' + chickenString;
  console.log(chickenString + ' Chickens');
}

printFarmInventory(7, 11);
```

Adicionar .length após o valor de uma string nos fornecerá o tamanho daquela string. Por isso, o laço de repetição while continua adicionando zeros no início da string que representa o número até que a mesma tenha três caracteres. Podemos dizer que a missão foi concluída. Mas, o fazendeiro ligou e agora ele quer adicionar porcos.

```js
function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3) numberString = '0' + numberString;
  console.log(numberString + ' ' + label);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, 'Cows');
  printZeroPaddedWithLabel(chickens, 'Chickens');
  printZeroPaddedWithLabel(pigs, 'Pigs');
}

printFarmInventory(7, 11, 3);
```

Funcionou! Mas o nome printZeroPaddedWithLabel é um pouco estranho. Ele é uma combinação de três coisas - imprimir, adicionar zeros e adicionar a label correta - em uma única função.
Ao invés de tentarmos abstrair a parte repetida do nosso programa como um todo, vamos tentar selecionar apenas um conceito.

```js
function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width) string = '0' + string;
  return string;
}
function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + ' Cows');
  console.log(zeroPad(chickens, 3) + ' Chickens');
  console.log(zeroPad(pigs, 3) + ' Pigs');
}
printFarmInventory(7, 16, 3);
```

Ter uma função com um bom nome descritivo como zeroPad torna fácil para qualquer um ler e entender o código. Além disso, ele pode ser útil em outras situações, além desse programa específico. Você pode usá-lo, por exemplo, para imprimir números corretamente alinhados em uma tabela. Um princípio útil é não adicionar funcionalidades, a menos que você tenha certeza absoluta de que irá precisar
delas. Pode ser tentador escrever soluções genéricas para cada funcionalidade com que você se deparar. Resista a essa vontade. Você não vai ganhar nenhum valor real com isso e vai acabar escrevendo muitas linhas de código que nunca serão usadas.

---

## 3.11 - FUNÇÕES E EFEITOS COLATERAIS

Uma função "pura" é um tipo específico de função que produz valores e que não gera efeitos colaterais, como também não depende de efeitos colaterais de outros códigos. Uma função pura tem a característica de, ser sempre chamada com os mesmos argumentos, produzir o mesmo valor. Isso acaba fazendo com que seja fácil de entendermos como ela funciona. Uma chamada para tal função pode ser mentalmente substituída pelo seu resultado, sem alterar o significado do código. Funções que não são "puras" podem retornar valores diferentes baseados em vários tipos de fatores e produzem efeitos colaterais que podem fazer com que seja difícil de testar e pensar sobre elas. Mesmo assim, não há necessidade de se sentir mal ao escrever funções que não são "puras" ou começar uma "guerra santa" para eliminar códigos impuros. Efeitos colaterais são úteis em algumas situações. Não existe uma versão "pura" de console.log , por exemplo, e console.log certamente é útil. Algumas operações são também mais fáceis de se expressar de forma mais eficiente quando usamos efeitos colaterais, portanto a velocidade de computação pode ser uma boa razão para se evitar a "pureza".

---

## RESUMO

Este capítulo ensinou a você como escrever suas próprias funções. A palavra-chave function , quando usada
como uma expressão, pode criar um valor de função. Quando usada como uma declaração, pode ser usada para
declarar uma variável e dar a ela uma função como valor.

```JS
39// Create a function value f
var f = function(a) {
console.log(a + 2);
};
// Declare g to be a function
function g(a, b) {
return a * b * 3.5;
}
```

Um aspecto chave para entender funções, é entender como os escopos locais funcionam. Parâmetros e variáveis declaradas dentro de uma função são locais àquela função, recriados toda vez que a função é invocada, e não são acessíveis do contexto externo à função. Funções declaradas dentro de outras têm acesso ao escopo local das funções mais externas que as envolvem. Separar as tarefas que a sua aplicação executa em diferentes funções, é bastante útil. Você não terá que repetir o código e as funções fazem um programa mais legível, agrupando o código em pedaços conceituais, da mesma forma que os capítulos e as seções ajudam a organizar um texto.
