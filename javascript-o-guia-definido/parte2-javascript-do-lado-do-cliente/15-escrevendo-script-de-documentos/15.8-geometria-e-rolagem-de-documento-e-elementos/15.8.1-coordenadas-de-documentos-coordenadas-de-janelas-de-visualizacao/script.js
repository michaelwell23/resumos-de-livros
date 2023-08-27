// Retorna os deslocamentos atuais da barra de rolagem como propriedades x e y de um objeto
function getScrollOffsets(w) {
  // Usa a janela especificada ou a janela atual, se não houver argumento
  w = w || window;
  // Isso funciona para todos os navegadores, exceto o IE versões 8 e anteriores
  if (w.pageXOffset != null) return { x: w.pageXOffset, y: w.pageYOffset };
  // Para o IE (ou qualquer navegador) no modo Standards
  var d = w.document;
  if (document.compatMode == 'CSS1Compat')
    return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
  // Para navegadores no modo Quirks
  return { x: d.body.scrollLeft, y: d.body.scrollTop };
}

// Retorna o tamanho da janela de visualização como propriedades w e h de um objeto
function getViewportSize(w) {
  // Usa a janela do navegador especificada ou a janela atual, se não houver argumento
  w = w || window;
  // Isso funciona para todos os navegadores, exceto o IE8 e anteriores
  if (w.innerWidth != null) return { w: w.innerWidth, h: w.innerHeight };
  // Para o IE (ou qualquer navegador) no modo Standards
  var d = w.document;
  if (document.compatMode == 'CSS1Compat')
    return {
      w: d.documentElement.clientWidth,
      h: d.documentElement.clientHeight,
    };
  // Para navegadores no modo Quirks
  return { w: d.body.clientWidth, h: d.body.clientWidth };
}
