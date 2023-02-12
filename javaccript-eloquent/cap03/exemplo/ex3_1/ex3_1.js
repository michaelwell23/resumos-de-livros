// DEFININDO FUNÇÕES
var square = function (x) {
  return x * x;
};

// FUNÇÕES COM E SEM PARÂMETRO
console.log(square(12));

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
