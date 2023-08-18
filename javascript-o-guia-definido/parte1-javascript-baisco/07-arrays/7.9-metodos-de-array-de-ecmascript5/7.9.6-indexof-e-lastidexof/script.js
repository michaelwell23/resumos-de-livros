a = [0, 1, 2, 1, 0];
a.indexOf(1); // => 1: a[1] é 1
a.lastIndexOf(1); // => 3: a[3] é 1
a.indexOf(3); // => -1: nenhum elemento tem o valor 3

// A função a seguir pesquisa um array em busca de um valor especificado e retorna um array com todos os índices coincidentes.
// Localiza todas as ocorrências de
// de índices coincidentes
function findall(a, x) {
  var results = [], // O array de índices que vamos retornar
    len = a.length, // O comprimento do array a ser pesquisado
    pos = 0; // A posição inicial da pesquisa
  // Enquanto houver mais elementos para pesquisar...
  while (pos < len) {
    pos = a.indexOf(x, pos); // Pesquisa
    // Se nada for encontrado, terminamos.
    if (pos === -1) break;
    results.push(pos); // Caso contrário, armazena o índice no array
    pos = pos + 1; // E começa a próxima busca no próximo elemento
  }
  return results; // Retorna o array de índices
}
