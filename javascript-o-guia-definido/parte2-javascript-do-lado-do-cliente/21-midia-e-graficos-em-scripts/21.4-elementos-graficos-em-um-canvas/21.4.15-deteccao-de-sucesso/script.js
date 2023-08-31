// Retorna true se o evento de mouse especificado ocorreu sobre o caminho atual,
// no objeto CanvasRenderingContext2D especificado.
function hitpath(context, event) {
  // Obtém o elemento <canvas> do objeto contexto
  var canvas = context.canvas;
  // Obtém o tamanho e a posição do canvas
  var bb = canvas.getBoundingClientRect();
  // Translada e muda a escala das coordenadas do evento de mouse em coordenadas do canvas
  var x = (event.clientX - bb.left) * (canvas.width / bb.width);
  var y = (event.clientY - bb.top) * (canvas.height / bb.height);
  // Chama isPointInPath com essas coordenadas transformadas
  return context.isPointInPath(x, y);
}

canvas.onclick = function (event) {
  if (hitpath(this.getContext('2d'), event)) {
    alert('Hit!');
    // Clique sobre o caminho atual
  }
};

// Testando se um evento de mouse ocorreu sobre um pixel pintado
// Retorna true se o evento de mouse especificado ocorreu sobre um pixel não transparente.
function hitpaint(context, event) {
  // Translada e muda a escala das coordenadas do evento de mouse em coordenadas do canvas
  var canvas = context.canvas;
  var bb = canvas.getBoundingClientRect();
  var x = (event.clientX - bb.left) * (canvas.width / bb.width);
  var y = (event.clientY - bb.top) * (canvas.height / bb.height);
  // Obtém o pixel (ou pixels, se vários pixels do dispositivo são mapeados em 1 pixel CSS)
  var pixels = c.getImageData(x, y, 1, 1);
  // Se quaisquer pixels tiverem um valor de alfa diferente de zero, retorna true
  // (sucesso)
  for (var i = 3; i < pixels.data.length; i += 4) {
    if (pixels.data[i] !== 0) return true;
  }
  // Caso contrário, foi um erro de alvo.
  return false;
}
