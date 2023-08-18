var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function (x, y) {
  return x + y;
}, 0); // Soma de valores
var product = a.reduce(function (x, y) {
  return x * y;
}, 1); // Produto de valores
var max = a.reduce(function (x, y) {
  return x > y ? x : y;
});

// reduceRight() funciona exatamente como reduce() , exceto que processa o array do índice mais alto para o mais baixo (da direita para a esquerda), em vez do mais baixo para o mais alto. Talvez você queira fazer isso se a operação de redução tiver precedência da direita para a esquerda, por exemplo:
var a = [2, 3, 4];
// Calcula 2^(3^4). A exponenciação tem precedência da direita para a esquerda
var big = a.reduceRight(function (accumulator, value) {
  return Math.pow(value, accumulator);
});

// calcula a “união” de dois objetos e retorna um novo objeto que tem as propriedades de ambos.
var objects = [{ x: 1 }, { y: 2 }, { z: 3 }];
var merged = objects.reduce(union); // => {x:1, y:2, z:3}

// quando dois objetos têm propriedades com o mesmo nome, a função union() utiliza o valor dessa propriedade do primeiro argumento. Assim, reduce() e reduceRight() podem obter resultados diferentes quando utilizadas com union() :
var objects = [
  { x: 1, a: 1 },
  { y: 2, a: 2 },
  { z: 3, a: 3 },
];
var leftunion = objects.reduce(union);
// {x:1, y:2, z:3, a:1}
var rightunion = objects.reduceRight(union);
// {x:1, y:2, z:3, a:3}
