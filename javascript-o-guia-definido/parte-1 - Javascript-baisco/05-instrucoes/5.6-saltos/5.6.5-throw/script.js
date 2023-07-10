// A instrução throw tem a seguinte sintaxe:
// throw expressão;

function factorial(x) {
  // Se o argumento de entrada é inválido, dispara uma exceção!
  if (x < 0) throw new Error('x must not be negative');
  // Caso contrário, calcula um valor e retorna normalmente
  for (var f = 1; x > 1; f *= x, x-- /* vazio */);
  return f;
}
