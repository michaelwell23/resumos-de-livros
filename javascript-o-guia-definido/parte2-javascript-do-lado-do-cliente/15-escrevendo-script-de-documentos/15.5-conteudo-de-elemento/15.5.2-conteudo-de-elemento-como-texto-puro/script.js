var para = document.getElementsByTagName('p')[0]; // Primeiro <p> no documento
var text = para.textContent; // O texto é "This is a simple document."
para.textContent = 'Hello World!'; // Altera o conteúdo do parágrafo

/**
 * Com um argumento, retorna textContent ou innerText do elemento.
 * Com dois argumentos, configura textContent ou innerText do elemento com value.
 */
function textContent(element, value) {
  var content = element.textContent; // Verifica se textContent está definida
  if (value === undefined) {
    // Nenhum valor passado; portanto, retorna o texto atual
    if (content !== undefined) return content;
    else return element.innerText;
  } else {
    // Um valor foi passado; portanto, configura o texto
    if (content !== undefined) element.textContent = value;
    else element.innerText = value;
  }
}
