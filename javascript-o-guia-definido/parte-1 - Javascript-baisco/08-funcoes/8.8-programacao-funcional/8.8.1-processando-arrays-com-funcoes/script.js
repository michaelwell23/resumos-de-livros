// Suponha que temos um array de números e queremos calcular a média e o desvio padrão desses valores. Poderíamos fazer isso no estilo não funcional, como segue:
var data = [1, 1, 3, 5, 5];
// Este é nosso array de números
// A média é a soma dos elementos dividida pelo número de elementos
var total = 0;
for (var i = 0; i < data.length; i++) total += data[i];
var mean = total / data.length;
// A média de nossos dados é 3
// Para calcularmos o desvio padrão, primeiramente somamos os quadrados do
// desvio de cada elemento em relação à média.
total = 0;
for (var i = 0; i < data.length; i++) {
  var deviation = data[i] - mean;
  total += deviation * deviation;
}
var stddev = Math.sqrt(total / (data.length - 1)); // O desvio padrão é 2

// Podemos efetuar esses mesmos cálculos no estilo funcional conciso, usando os métodos de array map() e reduce() , como segue (consulte a Seção 7.9 para rever esses métodos):
// Primeiramente, define duas funções simples
var sum = function (x, y) {
  return x + y;
};
var square = function (x) {
  return x * x;
};
// Então, usa essas funções com os métodos Array para calcular a média e o desvio padrão
var data = [1, 1, 3, 5, 5];
var mean = data.reduce(sum) / data.length;
var deviations = data.map(function (x) {
  return x - mean;
});
var stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));

// Chama a função f para cada elemento do array a e retorna
// um array dos resultados. Usa Array.prototype.map se estiver definido.
var map = Array.prototype.map
  ? function (a, f) {
      return a.map(f);
    }
  : // Use o método map se existir
    function (a, f) {
      // Caso contrário, implementa o nosso
      //próprio
      var results = [];
      for (var i = 0, len = a.length; i < len; i++) {
        if (i in a) results[i] = f.call(null, a[i], i, a);
      }
      return results;
    };
// Reduz o array a a um único valor usando a função f e
// o valor inicial opcional. Usa Array.prototype.reduce se estiver definido.
var reduce = Array.prototype.reduce
  ? function (a, f, initial) {
      // Se o método reduce() existe.
      if (arguments.length > 2) return a.reduce(f, initial);
      // Se foi passado um valor inicial.
      else return a.reduce(f);
      // Caso contrário, nenhum valor inicial.
    }
  : function (a, f, initial) {
      // Algoritmo da especificação ES5
      var i = 0,
        len = a.length,
        accumulator;
      // Começa com o valor inicial especificado ou com o primeiro valor em a
      if (arguments.length > 2) accumulator = initial;
      else {
        // Encontra o primeiro índice definido no array
        if (len == 0) throw TypeError();
        while (i < len) {
          if (i in a) {
            accumulator = a[i++];
            break;
          } else i++;
        }
        if (i == len) throw TypeError();
      }
      // Agora chama f para cada elemento restante no array
      while (i < len) {
        if (i in a) accumulator = f.call(undefined, accumulator, a[i], i, a);
        i++;
      }
      return accumulator;
    };

var data = [1, 1, 3, 5, 5];
var sum = function (x, y) {
  return x + y;
};
var square = function (x) {
  return x * x;
};
var mean = reduce(data, sum) / data.length;
var deviations = map(data, function (x) {
  return x - mean;
});
var stddev = Math.sqrt(
  reduce(map(deviations, square), sum) / (data.length - 1)
);
