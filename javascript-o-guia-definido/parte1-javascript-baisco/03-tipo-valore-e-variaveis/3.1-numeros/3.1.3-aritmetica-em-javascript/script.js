Math.pow(2, 53); // => 9007199254740992: 2 elevado à potência 53
Math.round(0.6); // => 1.0: arredonda para o inteiro mais próximo
Math.ceil(0.6); // => 1.0: arredonda para cima para um inteiro
Math.floor(0.6); // => 0.0: arredonda para baixo para um inteiro
Math.abs(-5); // => 5: valor absoluto
Math.max(x, y, z); // Retorna o maior argumento
Math.min(x, y, z); // Retorna o menor argumento
Math.random(); // Número pseudoaleatório x, onde 0 <= x < 1.0
Math.PI; // π: circunferência de um círculo / diâmetro
Math.E; // e: A base do logaritmo natural
Math.sqrt(3); // A raiz quadrada de 3
Math.pow(3, 1 / 3); // A raiz cúbica de 3
Math.sin(0); // Trigonometria: também Math.cos, Math.atan, etc.
Math.log(10); // Logaritmo natural de 10
Math.log(100) / Math.LN10; // Logaritmo de base 10 de 100
Math.log(512) / Math.LN2; // Logaritmo de base 2 de 512
Math.exp(3); // Math.E ao cubo

// Divisões em JavaScript
Infinity; // Uma variável de leitura/gravação inicializada como Infinity.
Number.POSITIVE_INFINITY; // O mesmo valor, somente para leitura.
1 / 0; // Este também é o mesmo valor.
Number.MAX_VALUE + 1; // Isso também é avaliado como Infinity.

Number.NEGATIVE_INFINITY - // Essas expressões são infinito negativo.
  Infinity -
  1 / 0 -
  Number.MAX_VALUE -
  1;

NaN; // Uma variável de leitura/gravação inicializada como NaN.
Number.NaN; // Uma propriedade somente para leitura contendo o mesmo valor.

0 / 0; // Avaliado como NaN.
Number.MIN_VALUE / 2; // Estouro negativo: avaliado como 0
-Number.MIN_VALUE / 2; // Zero negativo
-1 / Infinity - 0; // Também 0 negativo

// comparações

var zero = 0; // zero normal
var negz = -0; // zero negativo
zero === negz; // => verdadeiro: zero e zero ngativos são iguais
1 / zero === 1 / negz; // => false: infinito e - infinito não são iguais
