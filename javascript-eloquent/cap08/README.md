# BUGS E MANIPULAÇÃO DE ERROS

Programas são pensamentos "cristalizados". Algumas vezes, esses pensamentos são confusos e erros podem ser inseridos quando convertemos pensamentos em códigos, resultando em um programa com falhas. Falhas em programas podem ser chamados de _bugs_, e podem ser causadoas por erros inseridos pelo programador ou problemas em outros sistemas que a aplicação interage. ALguns _bugs_ são imediatamente aparentes, outros são sutis e podem ficar escondidos em um sistema por anos. Muitas vezes os problemas aparecem quando um programa executa de uma forma que o programador não considerou. As vezes, tais situações são inevitáveis. Tais situações devem ser antecipadas e tratadas de alguma maneira.

---

## 8.1 - ERROS DO PROGRAMADOR

O nosso objetivo é simples quando se trata de erros do programador. Devemos encontrá-los e corrigi-los. Tais
erros podem variar entre erros simples que faz o computador reclamar assim que ele tenta executar o programa ou erros sutis causado por uma compreensão errada da lógica do programa levando a resultados incorretos,podendo ser constante ou em apenas algumas condições específicas. Esse último tipo de erros pode levar semanas para ter um diagnostico correto. O nível de ajuda que as linguagens oferece para encontrar os erro variam bastante. Isso não é nenhuma surpresa pois o JavaScript está no "quase não ajuda em nada" no final dessa escala. JavaScript considera os tipos somente na execução do programa e mesmo assim ele permite que você faça algumas coisas visivelmente absurdas sem dar nenhum tipo de aviso como por exemplo: `x = true "macaco" *`. Há algumas coisas que o JavaScript não se queixam. Mas escrever um programa que é sintaticamente incorreto faz com que ele nem execute e dispare um erro imediatamente. . Encontrar a fonte de tais problemas são considerados difíceis. O processo de encontrar erros (bugs) nos programas é chamado de depuração.

---

## 8.2 - MODO ESTRITO

JavaScript pode ser feito de uma forma mais rigorosa, permitindo que o modo seja estrito. Para obter esse modo
basta inserir uma string "use strict" na parte superior de um arquivo ou no corpo de uma função.

```js
function canYouSpotTheProblem() {
  'use strict';
  for (counter = 0; counter < 10; counter++) {
    console.log('Happy happy');
  }
}
canYouSpotTheProblem;
```

Normalmente, quando você esquece de colocar var na frente de sua variável como acontece no exemplo, o JavaScript cria uma variável global para utiliza-la, no entanto no modo estrito um erro é relatado. Outra mudança no modo estrito é que esta ligação tem o valor undefined para funções que não são chamadas como métodos. Ao fazer tal chamada fora do modo estrito a referencia do objeto é do escopo global. Então se você acidentalmente chamar um método ou um construtor incorretamente no modo estrito o JavaScript produzirá um erro assim que ele tentar ler algo com isso ao invés de seguir trabalhando normalmente com a criação e leitura de variáveis globais no objeto global. Por exemplo, considere o seguinte código que chama um construtor sem a nova palavra-chave, na qual seu objeto não vai se referir a um objeto recém-construído:

```js
function Person(name) {
  this.name = name;
}
var ferdinand = Person('Ferdinand'); // oops
console.log(name);
// → Ferdinand
```

Assim, a falsa chamada para Person foi bem sucedida, mas retornou um valor indefinido e criou uma variável global. No modo estrito, o resultado é diferente.

```js
'use strict';
function Person(name) {
  this.name = name;
}
// Oops, forgot 'new'
var ferdinand = Person('Ferdinand');
// → TypeError: Cannot set property 'name' of undefined
```

Somos imediatamente informados de que algo está errado. Em suma, colocando um "use strict" no topo do seu programa não irá causar frustrações mas vai ajudar a detectar problemas.

---

## 8.3 - TESTANDO

Fazer sempre testes manualmente é uma maneira insana de conduzir-se. Felizmente é possível muitas das vezes escrever um segundo programa que automatiza o teste do seu programa atual. Como por exemplo, vamos construir um objeto Vector:

```js
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
};
```

Vamos escrever um programa para verificar se a nossa implementação do objeto Vector funciona como o esperado. Então cada vez que mudarmos a implementação o programa de teste é executado, de modo que fiquemos razoavelmente confiantes de que nós não quebramos nada. Quando adicionarmos uma funcionalidade extra (por exemplo, um novo método) no objeto Vector , também devemos adicionar testes para o novo recurso.

```js
function testVector() {
  var p1 = new Vector(10, 20);
  var p2 = new Vector(-10, 5);
  var p3 = p1.plus(p2);
  if (p1.x !== 10) return 'fail: x property';
  if (p1.y !== 20) return 'fail: y property';
  if (p2.x !== -10) return 'fail: negative x property';
  if (p3.x !== 0) return 'fail: x from plus';
  if (p3.y !== 25) return 'fail: y from plus';
  return 'everything ok';
}
console.log(testVector());
// → everything ok
```

Escrevendo testes como este tende a parecer um pouco repetitivo e um código estranho. Felizmente existem opções de software que ajudam a construir e executar coleções de testes (suites de teste), fornecendo uma linguagem (na forma de funções e métodos) adequada para expressar os testes e emitir informações informativas de quando um teste falhou. Isto é chamados de estruturas de teste

---

## 8.4 - DEPURAÇÃO

A mensagem de erro aponta para a linha especifica; e se você olhar para a descrição do erro e para linha de código muitas vezes podrá endender o problema. Mas nem sempre é assim. Ás vezes a linha que desencadeeou o problema é simplismente o primeiro lugar onde um valor falso foi produzido e que em outros lugares foi usado de uma forma incorreta ou as vezes não há nenhuma mensagem de erro, apenas um resultado inválido. O exemplo seguinte tenta converter um numero inteiro para uma cadeia em qualquer base, para se livrar do último digito escolhemos o último digito repetidamente e em seguida dividimos. Mas a saída produzida sugere que ele tem um bug.

```js
function numberToString(n, base) {
  var result = '',
    sign = '';
  if (n < 0) {
    sign = '-';
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10)); // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…
```

ESta é a hora onde você deve resistir à tentação de começar a fazer mudanças aleatórias no código. Em vez disso pense, analise o que está acontecendo e chegue a uma teoria de por que isso pode estar acontecendo. Então faça observações adicionais para testar esta teoria ou se você ainda não tem uma teoria, faça observações adicionais que podem ajudálo. Colocar algumas chamadas console.log estratégicas no programa é uma boa maneira de obter informações adicionais sobre o que o programa está fazendo. Neste caso queremos tomar os n valores de 13, 1 até 0.

```txt
13
1.3
0.13
0.013
…
1.5e-323
```

Uma alternativa para o uso do console.log é usar os recursos de depuração do seu browser. Navegadores modernos vêm com a capacidade de definir um ponto de interrupção em uma linha específica de seu código. Isso fará com que a execução do programa faz uma pausa a cada vez que a linha com o ponto de interrupção é atingido. Isso permite que você inspecione os valores das variáveis nesse ponto. Outra maneira de definir um ponto de interrupção é incluir uma declaração no depurador em seu programa. Se as ferramentas de desenvolvimento do seu navegador estão ativos, o programa fará uma pausa sempre que atingir esta declaração e você será capaz de inspecionar o seu estado.

---

## 8.5 - PROPAGAÇÃO DE ERROS

Programas simples ou progrmas que são executados somente sob a sua supervisão pode ser dar ao luxo de simplismente desistir quando esse problemas ocorrer. Você vai olhar para o problema e tentar novamente. Aplicações "reais" por outro lado esperam que nunca falhe. Ás vezes a maneira correta é tirar a má entrada rapidamente para que o programa continue funcionando. Em outros casos é melhor informar ao usuário o que deu de errado para depois desistir. Mas em qualquer situação o programa tem de fazer algo rapidamente em resposta ao problema. Uma opção é fazê-lo retornar um valor especial. Escolhas comuns são valores nulos e indefinido.

```js
function promptNumber(question) {
  var result = Number(prompt(question, ''));
  if (isNaN(result)) return null;
  else return result;
}
console.log(promptNumber('How many trees do you see?'));
```

Isto é uma boa estratégia. Agora qualquer código que chamar a função promptNumber deve verificar se um número real foi lido, e na falha deve de alguma forma recuperar preenchendo um valor padrão ou retornando um valor especial para o seu chamador indicando que ele não conseguiu fazer o que foi solicitado. Em muitas situações, principalmente quando os erros são comuns e o chamador deve explicitamente tê-las em conta, retornaremos um valor especial, é uma forma perfeita para indicar um erro. Mas essa maneira no entanto tem suas desvantagens. Em primeiro lugar, como a função pode retornar todos os tipos possíveis de valores? Para tal função é difícil encontrar um valor especial que pode ser distinguido a partir de um resultado válido. O segundo problema é com o retorno de valores especiais, isso pode levar a um código muito confuso.

---

## 8.6 - EXCEÇÕES

As exceções são um mecanismo que torna possível parar o código que é executado com problema disparando (ou lançar) uma exceção que nada mais é que um simples valor. Levantando uma exceção lembra um pouco um retorno super carregado a partir de uma função: ele salta para fora não apenas da função atual mas também fora de todo o caminho de seus interlocutores para a primeira chamada que iniciou a execução atual. Isto é chamado de desenrolamento do stack. Uma exceção é exibida no stack indicando todos os contextos de chamadas que ele encontrou. Se as exceções tivessem um stack de uma forma ampliada não seria muito útil. Eles apenas fornecem uma nova maneira de explodir o seu programa. Seu poder reside no fato de que você pode definir "obstáculos" ao longo do seu stack para capturar a exceção. Depois você pode fazer alguma coisa com ele no ponto em que a
exceção foi pega para que o programa continua em execução.

```js
function promptDirection(question) {
  var result = prompt(question, '');
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new Error('Invalid direction: ' + result);
}
function look() {
  if (promptDirection('Which way?') == 'L') return 'a house';
  else return 'two angry bears';
}
try {
  console.log('You see', look());
} catch (error) {
  console.log('Something went wrong: ' + error);
}
```

A palavra-chave throw é usada para gerar uma exceção. Para tratar uma excessão basta envolver um pedaço de código em um bloco try , seguido pela palavra-chave catch . Quando o código no bloco try causa uma exceção a ser lançada o bloco catch é chamado. Se olharmos para função promptDirection podemos ignoramos completamente a possibilidade de que ela pode conter erros. Esta é a grande vantagem do tratamento de erros - manipulação de erro no código é necessário apenas no ponto em que o erro ocorre e no ponto onde ele é tratado. Essas funções no meio pode perder tudo sobre ela.

---
