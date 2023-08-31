// Define uma sombra sutil
c.shadowColor = 'rgba(100,100,100,.4)'; // Cinza translúcido
c.shadowOffsetX = c.shadowOffsetY = 3; // Deslocamento de sombra para o lado inferior
// direito
c.shadowBlur = 5;
// Suaviza as bordas da sombra
// Desenha algum texto em uma caixa azul, usando essa sombra
c.lineWidth = 10;
c.strokeStyle = 'blue';
c.strokeRect(100, 100, 300, 200);
// Desenha um retângulo
c.font = 'Bold 36pt Helvetica';
c.fillText('Hello World', 115, 225); // Desenha algum texto
// Define uma sombra menos sutil. Um deslocamento maior faz os itens "flutuar" mais alto.
// Observe como a sombra transparente se sobrepõe à caixa azul.
c.shadowOffsetX = c.shadowOffsetY = 20;
c.shadowBlur = 10;
c.fillStyle = 'red';
// Desenha um retângulo vermelho uniforme
c.fillRect(50, 25, 200, 65);
// que flutua acima da caixa azul
