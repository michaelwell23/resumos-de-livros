# LINGUAGEM DE PROGRAMAÇÃO

Neste capítulo iremos construir uma linguagem de programação chamada Egg. Vai ser uma pequena e simples linguagem mas poderosa o suficiente para expressar qualquer computação que você possa imaginar. Ela também permite
abstração simples baseadas em funções.

## PARSING

Um analisador é um programa que lê um pedaço de texto e produz uma estrutura de dados que refletem a estrutura do programa contida nesse texto. Se o texto não faz um programa válido o analisador deve reclamar e apontar o erro. Tudo em Egg é uma expressão. Uma expressão pode ser uma variável, um Number, uma String, ou uma aplicação.

As aplicações são usados para chamadas de função, mas também para construções como if ou while. Para manter o analisador simples, `String` em **Egg** não suportam qualquer coisa como escapes e uma sequência simplesmente de caracteres que não são aspas duplas envolvidas em aspas duplas.

```js
do(define(x, 10),
   if(>(x, 5)),
      print("large"),
      print("small"))
```

Expressões do tipo «value» representam Strings, literais ou Numbers. O valor da propriedade contém o valor da cadeia ou o número que ele representa. Expressões do tipo «word» são usados para identificadores. Esses objetos têm uma propriedade que contém o nome do identificador de uma String.

Por fim as expressões «apply» representam algo que é uma aplicação. Eles têm uma propriedade de operador que se refere à expressão que são aplicavéis e têm uma propriedade de args que refere-se a um conjunto de expressões de argumento.

A parte `>(x, 5)` do programa anterior seria representado assim:

```js
{
  type: "apply",
  operator: {type: "word", name: ">"},
  args: [
    {type: "word", name: "x"},
    {type: "value", value: 5}
  ]
}

```

Essa estrutura de dados é chamado de árvore de sintaxe. Se você imaginar os objetos como pontos de ligações entre eles e com linhas entre esses pontos, ele tem uma forma treelike. O fato de que as expressões contem outras expressões que por sua vez pode conter mais expressões é semelhante à maneira como dividir ramos e dividir novamente.

![Syntax three](https://raw.githubusercontent.com/braziljs/eloquente-javascript/master/img/syntax_tree.png)

Compare isso com o analisador que escrevemos para o formato de arquivo de configuração no capítulo 9 que tinha uma estrutura simples: dividir a entrada em linhas e tratar essas linhas uma de cada vez. Havia apenas algumas formas simples de mostrar que uma linha foi permitida.

Aqui temos de encontrar uma abordagem diferente. As expressões não são separados em linhas e elas têm uma estrutura recursiva. Expressões aplicadas contêm outras expressões.

Felizmente, este problema pode ser resolvido com elegância escrevendo uma função analisadora que é recursiva de uma forma que reflete a natureza recursiva da linguagem.

Nós definimos uma função `parseExpression` que recebe uma string como entrada e retorna um objeto que contém a estrutura de dados para a expressão no início da cadeia, depois é feito a junção com a parte da cadeia da esquerda para analisar esta expressão. Ao analisar essa `subexpressions`(o argumento para um aplicativo, por exemplo) esta função pode ser chamado novamente dando origem a expressão argumento bem como o texto nos mostra. Este texto pode por sua vez contêm mais argumentos ou pode ser o parêntese de fechamento, que da termino a lista de argumentos.

Esta é a primeira parte do analisador:

```javascript
function parseExpression(program) {
  program = skipSpace(program);
  var match, expr;
  if ((match = /^"([^"]*)"/.exec(program)))
    expr = { type: 'value', value: match[1] };
  else if ((match = /^\d+\b/.exec(program)))
    expr = { type: 'value', value: Number(match[0]) };
  else if ((match = /^[^\s(),"]+/.exec(program)))
    expr = { type: 'word', name: match[0] };
  else throw new SyntaxError('Unexpected syntax: ' + program);

  return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
  var first = string.search(/\S/);
  if (first == -1) return '';
  return string.slice(first);
}
```

Temos que remover os espaços em brancos repetidos no início de qualquer seqüência do programa pois o **Egg** permite qualquer quantidade de espaço em branco entre os seus elementos inseridos. Quem tem essa funcionalidade é a da funcão `skipSpace`.

Depois de pular qualquer espaço à esquerda `parseExpression` usa três expressões regulares para detectar os três elementos simples(atômicas) que **Egg** suporta: `String`, `Number` e `words`. O analisador constrói um tipo diferente de estrutura de dados dependendo de sua correspondencia. Se a entrada não coincide com uma destas três formas não será considerado uma expressão válida e o analisador gerara um erro. `SyntaxError` é um tipo de erro padrão de objeto que é gerado quando é feita uma tentativa de executar um programa em JavaScript inválido.

Podemos cortar algumas partes que nós comparamos a partir da seqüência e passar isso juntamente com o objeto para a expressão do `parseApply` que ira verificar se a expressão é uma aplicação. Se assim for ele analisa uma lista de argumentos entre parênteses.

```javascript
function parseApply(expr, program) {
  program = skipSpace(program);
  if (program[0] != "()"
    return {expr: expr, rest: program};

  program = skipSpace(program.slice(1));
  expr = {type: "apply", operator: expr, args: []};
  while (program[0] != ")") {
    var arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.rest);
    if (program[0] == ",")
      program = skipSpace(program.slice(1));
    else if (program[0] != ")")
      throw new SyntaxError("Expected ',' or ')'");
  }
  return parseApply(expr, program.slice(1));
}
```

Se o próximo caracter no programa não é um parêntese de abertura, este não é aplicável, e `parseApply` simplesmente retorna que a expressão foi proferida.

Caso contrário ele ignora o parêntese de abertura e cria o objeto na árvore de sintaxe para essa expressão aplicável. Em seguida ele chama recursivamente `parseExpression` para analisar cada argumento até o parêntese de fechamento ser encontrado. A recursividade é indireta através da função `parseApply` e `parseExpression` chamando uns aos outros.

Uma expressão de aplicação pode ser aplicado em si própria(como em `multiplier(2)(1)`); `parseApply` deve analisar um pedido depois chamar-se novamente para verificar se existe outro par de parênteses.

Isso é tudo que precisamos para o analisador do **Egg**. Nós vamos envolvê-lo em uma função de análise conveniente que verifica se ele chegou ao fim da cadeia de entrada após o análise da expressão(um programa de **Egg** é uma única expressão) e que nos dá estrutura de dados do programa.

```javascript
function parse(program) {
  var result = parseExpression(program);
  if (skipSpace(result.rest).length > 0)
    throw new SyntaxError('Unexpected text after program');
  return result.expr;
}

console.log(parse('+(a, 10)'));
// → {type: "apply",
//    operator: {type: "word", name: "+"},
//    args: [{type: "word", name: "a"},
//           {type: "value", value: 10}]}
```

Funcionou! Ele não nos dá informação muito útil quando há falhas e não armazena a linha e coluna na qual cada expressão começa, o que pode ser útil ao relatar erros mais tarde mas é bom o suficiente para nossos propósitos.

---

## O AVALIADOR

O que podemos fazer com uma árvore de sintaxe de um programa, é executá-lo. É isso que o avaliador faz. Você entrega uma árvore de sintaxe de um objeto _environment_ que associa nomes com valores, e ele irá avalaiar a expressão que a árvore representa e retornar o valor que esta produz.

```js
function evaluate(expr, env) {
  switch (expr.type) {
    case 'value':
      return expr.value;
    case 'word':
      if (expr.name in env) return env[expr.name];
      else throw new ReferenceError('Undefined variable: ' + expr.name);
    case 'apply':
      if (expr.operator.type == 'word' && expr.operator.name in specialForms)
        return specialForms[expr.operator.name](expr.args, env);
      var op = evaluate(expr.operator, env);
      if (typeof op != 'function')
        throw new TypeError('Applying a non-function.');
      return op.apply(
        null,
        expr.args.map(function (arg) {
          return evaluate(arg, env);
        })
      );
  }
}
var specialForms = Object.create(null);
```

O avaliador possui código para cada um dos tipos de expressão. A expressão de valor literal simplesmenete produz o seu valor. Para uma variável é preciso verficar se ele está realmente definido no _environment atua_, e estiver, busca o valor da variável. Iremos usar os valores de uma função simples em JavaScript para representar os valores de função em Egg. A estrutura recursiva de um avaliador se assemelha à estrutura de um analisador. Ambos espelham a estrutura da própria linguagem. Além, disso, seria possível integrar o analisador com o avaliador e avaliar durante a análise mais dividindo-se desta forma torna o programa mais legível. Isso é tudo que precisamos para interpretar Egg.É simples assim. Mas sem definir algumas formas especiais e adicionar alguns valores úteis para o environment
você não pode fazer nada com essa linguagem ainda.

---

## FORMAS ESPECIAIS

O objecto _specialForms_ é utilziado para definir sintaxe especial em Egg. Ele associa palavras com funções que avaliam essas formas especiais.

```js
specialForms['if'] = function (args, env) {
  if (args.length != 3) throw new SyntaxError('Bad number of args to if');
  if (evaluate(args[0], env) !== false) return evaluate(args[1], env);
  else return evaluate(args[2], env);
};
```

**Egg** - _if_ espera exatamente três argumentos. Ele avalia o primeiro, se o resultado for falso ele irá avaliar o segundo. Caso contrário a terceira fica avaliada. Isso é uma expressão e não uma indicação que produz um valor, ou seja, o resultado do segundo ou terceiro argumento. **Egg** diferente de JavaScript na forma de como ele lida com o valor de uma condição com o valor de if. Ele não vai tratar as coisas como zero ou cadeia vazia como falsa, somente valores precisos são falsos. A razão especial é que nós precisamos representar o _if_ como uma forma especial, ao invés de uma função regular onde todos os argumentos para funções são avaliados antes que a função seja chamada, ao passo que se deve avaliar apenas seu segundo ou terceito argumento, dependendo do valor do primeiro.

A forma do _while_ é semelhante:

```js
specialForms['while'] = function (args, env) {
  if (args.length != 2) throw new SyntaxError('Bad number of args to while');
  while (evaluate(args[0], env) !== false) evaluate(args[1], env);
  // Since undefined does not exist in Egg, we return false,
  // for lack of a meaningful result.
  return false;
};
```

Outro bloco na construção básico é fazer que executa todos os seus argumentos de cima para baixo. O seu valor
é o valor produzido pelo último argumento.

```js
specialForms['do'] = function (args, env) {
  var value = false;
  args.forEach(function (arg) {
    value = evaluate(arg, env);
  });
  return value;
};
```

Para ser capaz de criar variáveis e dar-lhes novos valores, vamos criar um _specialForms_ chamado _define_. Ele
espera uma palavra como primeiro argumento de uma expressão que produz o valor a ser atribuído a essa palavra que sera seu segundo argumento. Vamos definir sendo tudo uma expressão e ela deve retornar um valor.

```js
specialForms['define'] = function (args, env) {
  if (args.length != 2 || args[0].type != 'word')
    throw new SyntaxError('Bad use of define');
  var value = evaluate(args[1], env);
  env[args[0].name] = value;
  return value;
};
```

---

## AMBIENTE

Para ser capaz de usar _if_ que acabamos de definir teremos de ter acesso aos valores _booleanos_ . Uma vez que existem apenas dois valores, nós não precisamos de sintaxe especial para eles. Nós vaos ligar duas variáveis em _topEnv_ para valores verdadeiros e falsos e dai então usá-los.

```js
var topEnv = Object.create(null);

topEnv['true'] = true;
topEnv['false'] = false;
```

Agora podemos avaliar uma expressão simples que nega um valor booleano.

```js
var prog = parse('if(true, false, true)');
console.log(evaluate(prog, topEnv)); // → false
```

Para suprir os operadores aritméticos e comparações básicas vamos adicionar alguns valores para função de _environment_.

```js
['+', '-', '*', '/', '==', '<', '>'].forEach(function (op) {
  topEnv[op] = new Function('a, b', 'return a ' + op + ' b;');
});
```

É muito útil fazer uma maneira para que valores de saída sejam vizualidos, por isso vamos colocar alguns
console.log na função e executa-lo para imprimir.

```js
topEnv['print'] = function (value) {
  console.log(value);
  return value;
};
```

Isso ja nos proporcionou uma ferramenta elementar e suficiente para escrever programas simples. A seguinte
função run fornece uma maneira conveniente de escrever e executá-los. Ele cria um analisa e avalia as String
enviroment em tempo real, que damos como um programa único.

```js
function run() {
  var env = Object.create(topEnv);
  var program = Array.prototype.slice.call(arguments, 0).join('\n');
  return evaluate(parse(program), env);
}
```

O uso de _Array.prototype.slice.call_ é um truque para transformar um objeto de matriz como argumentos em uma
matriz real; de modo que podemos chamar e juntar cada pedaço.

```js
run(
  'do(define(total, 0),',
  '   define(count, 1),',
  '   while(<(count, 11),',
  '     do(define(total, +(total, count)),',
  '        define(count, +(count, 1)))),',
  '   print(total))'
);
// → 55
```

Este é o programa que já vimos várias vezes antes que calcula a soma dos números de 1 a 10 escrito em Egg.

---

## FUNÇÕES

Não é difícil para adicionar _fun_ a nossa lingaugem, que vai tratar todos os argumentos antes do último como nomes de argumentos da função e seu último argumento como corpo da função.

```js
specialForms['fun'] = function (args, env) {
  if (!args.length) throw new SyntaxError('Functions need a body');
  function name(expr) {
    if (expr.type != 'word') throw new SyntaxError('Arg names must be words');
    return expr.name;
  }
  var argNames = args.slice(0, args.length - 1).map(name);
  var body = args[args.length - 1];
  return function () {
    if (arguments.length != argNames.length)
      throw new TypeError('Wrong number of arguments');
    var localEnv = Object.create(env);
    for (var i = 0; i < arguments.length; i++)
      localEnv[argNames[i]] = arguments[i];
    return evaluate(body, localEnv);
  };
};
```

Funções em Egg tem seu próprio _enviroment_ local assim como JavaScript. Usamos Object.create para fazer um novo objeto que tem acesso às variáveus do ambiente externo mas que também pode conter novas variáveis sem modificar esse escopo externo. A função criada pela _especialForm fun_ cria em ambito local e adiciona as variáveis de argumento para isso, avaliando o corpo da função neste ambiente e retorna o resultado.

```js
run('do(define(plusOne, fun(a, +(a, 1))),', ' print(plusOne(10)))'); // → 11

run(
  'do(define(pow, fun(base, exp,',
  '  if(==(exp, 0),',
  '    1,',
  '   *(base, pow(base, -(exp, 1)))))),',
  ' print(pow(2, 10)))'
); // → 1024
```

---

## COMPILAÇÃO

A compilação é o processo de adicionar mais um passo entre a análise e a execução de um programa; que transforma o programa em algo que possa ser avaliado de forma mais eficiente fazendo o trabalho tanto quanto possível com anteedência. Tradicionalmente, compilação envolve a conversão do programa para código de márquina no formato _raw_ que o processaor de um computador pode executar. Qualquer processo que converte um programa de uma representação diferente pode ser encarado como compilação. Seria possível escrever uma estratégia de avaliação para Egg, aquele que primeiro converte o programa para um programa JavaScript utilziando a nova função para chamar o compilador JavaScript, e em seguida executar o resultado.

---

## CHEATING

E quando se trata de conseguir fazer algo, o cheating é o jeito mais eficaz de fazer tudo sozinho. Embora a linguagem que brincamos neste capítulo não faz nada de melhor que o JavaScript possui, existem situações em que a escrever pequenas línguas ajuda no entendimento verdadeiro do trabalho. Essa língua não possui semelhanças com uma linguagem típica de programação. Se o JavaScript não vêm equipado com expressões regulares você pode escrever seu próprio analisador e avaliador para tal sub linguagem. Ou imagine que você está construindo um dinossauro robótico gigante e precisa programar o seu comportamento. JavaScript pode não ser a forma mais eficaz de fazer isso. Você pode optar por uma linguagem que se parece com isso:

```txt
behavior walk
  perform when
    destination ahead
  actions
    move left-foot
    move right-foot

behavior attack
  perform when
    Godzilla in-view
  actions
    fire laser-eyes
    launch arm-rockets
```

Isto é o que geralmente é chamado de linguagem de domínio específica, uma linguagem adaptada para expressar um estreito conhecimento de um domínio. Essa linguagem pode ser mais expressiva do que uma linguagem de um propósito geral. Isto porque ela é projetada para expressar exatamente as coisas que precisam serem expressadas no seu domínio e nada mais.
