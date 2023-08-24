var section1 = document.getElementById('section1');

/**
 * Esta função espera qualquer número de argumentos string. Ela trata cada
 * argumento como uma identificação de elemento e chama document.getElementById() para
 * cada um Retorna um objeto que mapeia identificações no objeto Element correspondente.
 * Lança um objeto Error se qualquer uma das identificações for indefinida.
 */
function getElements(/*ids...*/) {
  var elements = {};
  // Começa com um mapa vazio
  for (var i = 0; i < arguments.length; i++) {
    // Para cada argumento
    var id = arguments[i];
    // O argumento é uma
    // identificação de elemento
    var elt = document.getElementById(id);
    // Pesquisa Element
    if (elt == null)
      // Se não estiver definido,
      throw new Error('No element with id: ' + id); // lança um erro
    elements[id] = elt;
    // Mapeia a identificação no
    // elemento
  }
  return elements; // Retorna a identificação
  // para o mapa de elementos
}
