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
