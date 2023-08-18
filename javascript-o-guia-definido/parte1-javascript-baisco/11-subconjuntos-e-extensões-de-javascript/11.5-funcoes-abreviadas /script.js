let succ = function (x) {
    x + 1;
  },
  yes = function () {
    true;
  },
  no = function () {
    false;
  };

// Classifica um array em ordem numérica inversa
data.sort(function (a, b) {
  b - a;
});
// Define uma função que retorna a soma dos quadrados de um array de dados
let sumOfSquares = function (data) {
  Array.reduce(
    Array.map(data, function (x) {
      x * x;
    }),
    function (x, y) {
      x + y;
    }
  );
};
