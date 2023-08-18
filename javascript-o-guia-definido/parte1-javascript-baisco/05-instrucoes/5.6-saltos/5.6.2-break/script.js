// A instrução break , utilizada sozinha, faz com que o laço ou instrução switch circundante mais inter- na seja abandonada imediatamente.
// break;

for (var i = 0; i < a.length; i++) {
  if (a[i] == target) break;
}

// JavaScript também permite que a palavra-chave break seja seguida por um rótulo de instrução (ape- nas o identificador, sem os dois-pontos):
// break nomerótulo;

// A forma rotulada da instrução break é necessária quando se quer sair de uma instrução que não é o laço ou uma instrução switch circundante mais próxima.
var matrix = getData(); // Obtém um array 2D de números de algum lugar
// Agora soma todos os números da matriz.
var sum = 0,
  success = false;
// Começa com uma instrução rotulada da qual podemos sair se ocorrerem erros
compute_sum: if (matrix) {
  for (var x = 0; x < matrix.length; x++) {
    var row = matrix[x];
    if (!row) break compute_sum;

    for (var y = 0; y < row.length; y++) {
      var cell = row[y];
      if (isNaN(cell)) break compute_sum;
      sum += cell;
    }
  }
  success = true;
}
// As instruções break pulam para cá. Se chegamos aqui com success == false,
// então algo deu errado com a matriz que recebemos.
// Caso contrário, sum contém a soma de todas as células da matriz.
