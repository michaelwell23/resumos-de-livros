// Retorna o conteúdo de texto puro do elemento e, usando recursividade para os elementos
// filhos.
// Este método funciona como a propriedade textContent
function textContent(e) {
  var child,
    type,
    s = '';
  // s contém o texto de todos os filhos
  for (child = e.firstChild; child != null; child = child.nextSibling) {
    type = child.nodeType;
    if (type === 3 || type === 4)
      // Nós Text e CDATASection
      s += child.nodeValue;
    else if (type === 1)
      // Recursividade para nós Element
      s += textContent(child);
  }
  return s;
}

// Converte recursivamente todos os descendentes do nó Text de n para maiúsculas.
function upcase(n) {
  if (n.nodeType == 3 || n.nodeTyep == 4)
    // Se n é Text ou CDATA
    n.data = n.data.toUpperCase();
  // ...converte o conteúdo para
  // maiúsculas.
  // Caso contrário, usa recursividade nos
  // nós filhos
  else for (var i = 0; i < n.childNodes.length; i++) upcase(n.childNodes[i]);
}
