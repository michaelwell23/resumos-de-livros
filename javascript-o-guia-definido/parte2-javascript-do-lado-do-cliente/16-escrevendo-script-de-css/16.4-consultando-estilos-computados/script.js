// Muda a escala do tamanho do texto do elemento e pelo fator especificado
function scale(e, factor) {
  // Usa o estilo computado para consultar o tamanho atual do texto
  var size = parseInt(window.getComputedStyle(e, '').fontSize);
  // E usa o estilo em linha para aumentar esse tamanho
  e.style.fontSize = factor * size + 'px';
}
// Altera a cor de fundo do elemento e pela quantidade especificada.
// Fatores > 1 clareiam a cor e fatores < 1 a escurecem.
function scaleColor(e, factor) {
  var color = window.getComputedStyle(e, '').backgroundColor;
  // Consulta
  var components = color.match(/[\d\.]+/g);
  // Analisa r,g,b, e componentes de a
  for (var i = 0; i < 3; i++) {
    // Itera por r, g e b
    var x = Number(components[i]) * factor;
    // Muda a escala de cada um
    x = Math.round(Math.min(Math.max(x, 0), 255)); // Arredonda e define limites
    components[i] = String(x);
  }
  if (components.length == 3)
    // Uma cor rgb()
    e.style.backgroundColor = 'rgb(' + components.join() + ')';
  // Uma cor rgba()
  else e.style.backgroundColor = 'rgba(' + components.join() + ')';
}
