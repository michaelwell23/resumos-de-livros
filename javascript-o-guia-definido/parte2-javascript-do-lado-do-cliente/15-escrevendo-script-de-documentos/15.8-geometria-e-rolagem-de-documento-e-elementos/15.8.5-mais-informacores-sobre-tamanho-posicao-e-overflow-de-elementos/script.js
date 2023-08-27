function getElementPosition(e) {
  var x = 0,
    y = 0;
  while (e != null) {
    x += e.offsetLeft;
    y += e.offsetTop;
    e = e.offsetParent;
  }
  return { x: x, y: y };
}

function getElementPos(elt) {
  var x = 0,
    y = 0;
  // Laço para somar deslocamentos
  for (var e = elt; e != null; e = e.offsetParent) {
    x += e.offsetLeft;
    y += e.offsetTop;
  }
  // Itera novamente, por todos os elementos ascendentes para subtrair deslocamentos de
  // rolagem.
  // Isso subtrai também as barras de rolagem principais e converte para coords da
  // janela de visualização.
  for (var e = elt.parentNode; e != null && e.nodeType == 1; e = e.parentNode) {
    x -= e.scrollLeft;
    y -= e.scrollTop;
  }
  return { x: x, y: y };
}
