c.beginPath();
c.moveTo(100, 100);
c.lineTo(200, 200);
c.lineTo(100, 200);

c.fill();
c.stroke();

c.moveTo(300, 100);
c.lineTo(300, 200);

// Define um polígono regular com n lados, centralizado em (x,y), com raio r.
// Os vértices são igualmente espaçados ao longo da circunferência de um círculo.
// Coloca o primeiro vértice reto ou no ângulo especificado.
// Gira no sentido horário, a não ser que o último argumento seja true.
function polygon(c, n, x, y, r, angle, counterclockwise) {
  angle = angle || 0;
  counterclockwise = counterclockwise || false;
  c.moveTo(
    x + r * Math.sin(angle), // Inicia um novo subcaminho no primeiro vértice
    y - r * Math.cos(angle)
  );
  // Usa trigonometria para calcular a posição
  var delta = (2 * Math.PI) / n;
  // Distância angular entre os vértices
  for (var i = 1; i < n; i++) {
    // Para cada um dos vértices restantes
    angle += counterclockwise ? -delta : delta; // Ajusta o ângulo
    c.lineTo(
      x + r * Math.sin(angle),
      // Adiciona linha no próximo vértice
      y - r * Math.cos(angle)
    );
  }
  c.closePath();
  // Conecta o último vértice ao primeiro
}
// Inicia um novo caminho e adiciona subcaminhos
c.beginPath();
polygon(c, 3, 50, 70, 50);
polygon(c, 4, 150, 60, 50, Math.PI / 4);
polygon(c, 5, 255, 55, 50);
polygon(c, 6, 365, 53, 50, Math.PI / 6);
polygon(c, 4, 365, 53, 20, Math.PI / 4, true);

// Configura algumas propriedades que controlam a aparência do elemento gráfico
c.fillStyle = '#ccc';
// Interiores cinza-claro
c.strokeStyle = '#008';
// contornados com linhas azul-escuro
c.lineWidth = 5;
// com cinco pixels de largura.
// Agora desenha todos os polígonos (cada um em seu próprio subcaminho) com estas
// chamadas
c.fill();
// Preenche as formas
c.stroke();
// E traça seus contornos
