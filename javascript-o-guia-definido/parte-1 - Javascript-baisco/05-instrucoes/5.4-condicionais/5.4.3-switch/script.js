switch (
  expressão
  // instrucoes;
) {
}

switch (n) {
  case 1:
    // Começa aqui se n === 1
    // Executa o bloco de código #1.
    break;
  // Para aqui
  case 2:
    // Começa aqui se n === 2
    // Executa o bloco de código #2.
    break;
  // Para aqui
  case 3:
    // Começa aqui se n === 3
    // Executa o bloco de código #3.
    break;
  // Para aqui
  default:
    // Se tudo falhar...
    // Executa o bloco de código #4.
    break;
  // Para aqui
}

function convert(x) {
  switch (typeof x) {
    case 'number':
      // Converte o número para um inteiro hexadecimal
      return x.toString(16);
    case 'string':
      // Retorna a string colocada entre apóstrofos
      return '"' + x + '"';
    default:
      // Converte qualquer outro tipo da maneira usual
      return String(x);
  }
}
