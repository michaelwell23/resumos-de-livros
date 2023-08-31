// Uma função utilitária para converter ângulos de graus para radianos
function rads(x) {
  return (Math.PI * x) / 180;
}
// Desenha um círculo. Mude a escala e gire, caso queira uma elipse.
// Não há um ponto atual; portanto, desenha apenas o círculo sem uma linha reta a partir
// do ponto atual até o começo do círculo.
c.beginPath();
c.arc(
  75,
  100,
  50,
  // Centraliza em (75,100), raio 50
  0,
  rads(360),
  false
);
// Vai no sentido horário de 0 a 360 graus
// Desenha uma cunha. Os ângulos são medidos no sentido horário a partir do eixo x
// positivo.
// Note que arc() adiciona uma linha do ponto atual até o início do arco.
c.moveTo(200, 100);
// Começa no centro do círculo
c.arc(
  200,
  100,
  50,
  // Centro e raio do círculo
  rads(-60),
  rads(0),
  // começa no ângulo -60 e vai até o ângulo 0
  false
);
// false significa sentido horário
c.closePath();
// Adiciona raio de volta até o centro do círculo
// Mesma cunha, direção oposta
c.moveTo(325, 100);
c.arc(325, 100, 50, rads(-60), rads(0), true);
c.closePath();
// sentido anti-horário
// Usa arcTo() para cantos arredondados. Aqui, desenhamos um quadrado com
// o canto superior esquerdo em (400,50) e cantos de raios variados.

c.moveTo(450, 50);
// Começa no meio da borda superior.
c.arcTo(500, 50, 500, 150, 30); // Adiciona parte da borda superior e o canto superior
// direito.
c.arcTo(500, 150, 400, 150, 20); // Adiciona a borda direita e o canto inferior esquerdo.
c.arcTo(400, 150, 400, 50, 10); // Adiciona a borda inferior e o canto inferior esquerdo.
c.arcTo(400, 50, 500, 50, 0);
// Adiciona a borda esquerda e o canto superior esquerdo.
c.closePath();
// Fecha o caminho para adicionar o restante da borda superior.

// Curva Bezier quadrática: um ponto de
c.moveTo(75, 250);
c.quadraticCurveTo(100, 200, 175, 250);
c.fillRect(100 - 3, 200 - 3, 6, 6);
controle;
// Começa em (75,250)
// Curva até (175,250)
// Marca o ponto de controle (100,200)
// Curva Bezier cúbica
c.moveTo(200, 250);
c.bezierCurveTo(220, 220, 280, 280, 300, 250);
c.fillRect(220 - 3, 220 - 3, 6, 6);
c.fillRect(280 - 3, 280 - 3, 6, 6);
// Começa em (200,250)
// Curva até (300,250)
// Marca os pontos de controle
// Define alguns atributos gráficos e desenha as curvas
c.fillStyle = '#aaa'; // Preenchimentos cinza
c.lineWidth = 5;
// Linhas pretas de 5 pixels (por default)
c.fill();
// Preenche as curvas
c.stroke();
// Traça seus contornos
