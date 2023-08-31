// Desenha uma linha no lado superior esquerdo
c.moveTo(5, 5);
c.lineTo(45, 45);
c.lineWidth = 8;
c.lineCap = 'round';
c.stroke();
// Define uma transformação
c.translate(50, 100);
c.rotate((-45 * Math.PI) / 180);
c.scale(10, 10);
// Endireita a linha
// A amplia para que possamos ver os pixels individuais
// Usa drawImage para copiar a linha
c.drawImage(
  c.canvas,
  0,
  0,
  50,
  50,
  // retângulo de origem: não transformado
  0,
  0,
  50,
  50
);
// retângulo de destino: transformado

var img = document.createElement('img');
img.src = canvas.toDataURL();
document.body.appendChild(img);
