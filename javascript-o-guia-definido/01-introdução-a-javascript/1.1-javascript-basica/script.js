// Tudo que vem após barras normais duplas é um comentário em linguagem natural
// Leia os comentários atentamente: eles explicam o código JavaScript

// variável é um nome simbólico para um valor.
// As variáveis são declaras com a palavra-chave var:
var x; // Declara uma variável chamada x.

// Valores podem ser atribuidos Às variáveis com o sinal =

x = 0; // Agora a variável x tem o valor 0;
x; // => 0: Uma variável é avaliada com seu valor.

// JavaScript aceita varios tipos de valores

x = 1; // Números
x = 0.01; // Apenas um tipo Number para inteiros e reais
x = /"hello world"/; // Strings de texto entre aspas
x = 'JavaScript'; // Apóstrofos também delimitam string
x = true; // Valores booleanos.
x = false; // O outro valor booleano
x = null; // Null é um valor especial que significa "nenhum valor"
x = undefined; // Undefined é como null;

//  O tipo de dados mais importante de JavaScript é o objeto
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.

var book = {
  // Objetivos são colocados entre chaves.
  tipic: 'JavaScript', // A propriedade "topic" tem o valor "JavaScript".
  fat: true, // A propriedadade "fat" tem o valor true.
}; // A chave marca o fim do objeto;

// Acesse as propriedade de um objeto com . ou []
book.topic; // "JavaScrip"
book['fat']; // => true: outro modo de acessar valores de propriedade
book.author = 'Flanagan'; // Crie novas propriedades por meio de tribuição;
book.contents = {}; // é um objeto vazio sem qualquer propriedade;

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0];
// => 2: o primeiro elemento (índice 0) do array.
primes.lenght;
// => 4: quantidade de elementos no array.
primes[primes.lenght - 1];
// => 7: o último elemento do array.
primes[4] = 9;
// Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;
// Ou altera um elemento existente por meio de atribuição.
var empty = [];
// [] é um array vazio, sem qualquer elemento.
empty.lenght;
// => 0
// Os arrays e objetos podem conter outros arrays e objetos:
var points = [
  // Um array com 2 elementos.
  { x: 0, y: 0 },
  // Cada elemento é um objeto.
  { x: 1, y: 1 },
];
var data = {
  // Um objeto com 2 propriedades
  trial1: [
    [1, 2],
    [3, 4],
  ], // O valor de cada propriedade é um array.
  trial2: [
    [2, 3],
    [4, 5],
  ], // Os elementos dos arrays são arrays.
};

// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são os mais comuns:
3 + 2; // => 5: adição

3 - 2; // => 1: subtração
3 * 2; // => 6: multiplicação
3 / 2; // => 1.5: divisão
points[1].x - points[0].x; // => 1: operandos mais complicados também funcionam
'3' + '2'; // "32": + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count; // => 6: nomes de variáveis também são expressões.

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var x = 2,
  y = 3; // Esses sinais = são atribuições e não teste de igualdade.
x == y; // => falso: igualdade
x != y; // => verdadeiro: desigualdade
x < y; // => verdadeiro: menor que
x <= y; // => verdadeiro: menor ou igual a
x > y; // => falso: maior que
x >= y; // => falso: maior ou igual a
'two' == 'three'; // => falso: as duas strings são diferentes
'two' > 'three'; // => verdadeiro: "tw" é alfabeticamente maior do que "th"

false == x > y; // => verdadeiro: falso é igual a falso

// Os operadores lógicos combinam ou invertem valores booleanos
x == 2 && y == 3; // => verdadeiro: as duas comparações são verdadeiras. && é E

x > 3 || y < 3; // => falso: nenhuma das comparações é verdadeira. || é OU

!(x == y); // => verdadeiro: ! inverte um valor booleano

// As funções são blocos de código JavaScript parametrizados que podemos chamar.
function plus1(x) {
  // Define uma função chamada "plus1", com o parâmetro "x"
  return x + 1; // Retorna um valor uma unidade maior do que o que foi passado
} // As funções são incluídas entre chaves

plus1(y); // => 4: y é 3; portanto, essa chamada retorna 3+1
var square = function (x) {
  // As funções são valores e podem ser atribuídas a variáveis
  return x * x; // Calcula o valor da função
}; // Um ponto e vírgula marca o fim da atribuição.
square(plus(y)); // => 16: chama duas funções em uma única expressão

// Quando funções recebem as propriedades de um objeto, as
// chamamos de "métodos". Todos os objetos de JavaScript têm métodos:
var a = []; // Cria um array vazio
a.push(1, 2, 3); // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos

// Quando funções recebem as propriedades de um objeto, as
// chamamos de "métodos". Todos os objetos de JavaScript têm métodos:
var a = [];
// Cria um array vazio
a.push(1, 2, 3);
// O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao
// objeto no qual o método é definido: neste caso, o array de pontos anterior.
points.dist = function () {
  // Define um método para calcular a distância entre
  // pontos
  var p1 = this[0];
  // Primeiro elemento do array que chamamos
  var p2 = this[1];
  // Segundo elemento do objeto "this"
  var a = p2.x - p1.x;
  // Diferença em coordenadas X
  var b = p2.y - p1.y;
  // Diferença em coordenadas Y
  return Math.sqrt(
    a * a +
      // O teorema de Pitágoras
      b * b
  );
  // Math.sqrt() calcula a raiz quadrada
};
points.dist();
// => 1,414: distância entre nossos 2 pontos

// As instruções JavaScript incluem condicionais e laços que usam a sintaxe
// das linguagens C, C++, Java e outras.
function abs(x) {
  // Uma função para calcular o valor absoluto
  if (x >= 0) {
    // A instrução if...
    return x;
    // executa este código, se a comparação for
    // verdadeira.
  }
  // Este é o fim da cláusula if.
  else {
    // A cláusula opcional else executa seu código se
    return -x;
    // a comparação for falsa.
  }
  // Chaves são opcionais quando há 1 instrução por
  // cláusula.
}
// Observe as instruções return aninhadas dentro de
// if/else.
function factorial(n) {
  // Uma função para calcular fatoriais
  var product = 1; // Começa com o produto de 1
  while (n > 1) {
    // Repete as instruções que estão em {}, enquanto a expressão em () for verdadeira
    product *= n; // Atalho para product = product * n;
    n--; // Atalho para n = n – 1
  } // Fim do laço
  return product; // Retorna o produto
}
factorial(4); // => 24: 1*4*3*2

function factorial2(n) {
  // Outra versão, usando um laço diferente
  var i,
    product = 1; // Começa com 1
  for (
    i = 2;
    i <= n;
    i++ // Incrementa i automaticamente, de 2 até n
  )
    product *= i; // Faz isso a cada vez. {} não é necessário para laços de 1 linha
  return product; // Retorna o fatorial
}
factorial2(5); // => 120: 1*2*3*4*5

// Define uma função construtora para inicializar um novo objeto Point
function Point(x, y) {
  // Por convenção, as construtoras começam com letras
  // maiúsculas
  this.x = x;
  // A palavra-chave this é o novo objeto que está sendo
  // inicializado
  this.y = y;
  // Armazena os argumentos da função como propriedades do
  // objeto
}
// Nenhum return é necessário
// Usa uma função construtora com a palavra-chave "new" para criar instâncias
var p = new Point(1, 1);
// O ponto geométrico (1,1)
// Define métodos para objetos Point atribuindo-os ao objeto
// prototype associado à função construtora.
Point.prototype.r = function () {
  return Math.sqrt(
    // Retorna a raiz quadrada de x 2 + y 2
    this.x * this.x +
      // Este é o objeto Point no qual o método...
      this.y * this.y
    //...é chamado.
  );
};
// Agora o objeto Point b (e todos os futuros objetos Point) herda o método r()
p.r();
// => 1,414...
