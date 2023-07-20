// Inicializa a propriedade counter do objeto function.
// As declarações de função são içadas, de modo que podemos
// fazer esta atribuição antes da declaração da função.
uniqueInteger.counter = 0;
// Esta função retorna um inteiro diferente cada vez que é chamada.
// Ela usa uma propriedade dela mesma para lembrar o próximo valor a ser retornado.
function uniqueInteger() {
  return uniqueInteger.counter++; // Incrementa e retorna a propriedade counter
}

// Calcula fatoriais e coloca os resultados na cache como propriedades da própria função.
function factorial(n) {
  if (isFinite(n) && n > 0 && n == Math.round(n)) {
    // Finito, somente ints positivos
    if (!(n in factorial))
      // Se não houver resultado na cache
      factorial[n] = n * factorial(n - 1);
    // Calcula e o coloca na cache
    return factorial[n];
    // Retorna o resultado da cache
  } else return NaN;
  // Se a entrada for inválida
}
factorial[1] = 1;
// Inicializa a cache para conter esse caso básico.
