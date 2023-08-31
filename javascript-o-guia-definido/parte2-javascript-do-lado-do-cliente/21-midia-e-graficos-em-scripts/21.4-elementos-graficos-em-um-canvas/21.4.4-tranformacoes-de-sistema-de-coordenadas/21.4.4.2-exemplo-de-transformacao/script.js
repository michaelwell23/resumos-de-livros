var deg = Math.PI / 180;
// Para converter graus em radianos
// Desenha um fractal de floco de neve de Koch de nível n no contexto canvas c,
// com o canto inferior esquerdo em (x,y) e comprimento lateral len.
function snowflake(c, n, x, y, len) {
  c.save();
  // Salva a transformação corrente
  c.translate(x, y);
  // Translada a origem para o ponto de partida
  c.moveTo(0, 0);
  // Inicia um novo subcaminho na nova origem
  leg(n);
  // Desenha o primeiro trecho do floco de neve
  c.rotate(-120 * deg);
  // Agora gira 120 graus no sentido anti-horário
  leg(n);
  // Desenha o segundo trecho
  c.rotate(-120 * deg);
  // Gira novamente
  leg(n);
  // Desenha o último trecho
  c.closePath();
  // Fecha o subcaminho
  c.restore();
  // E restaura a transformação original

  // Desenha um trecho de um floco de neve de Koch de nível n.
  // Esta função deixa o ponto atual na extremidade do trecho que
  // desenhou e translada o sistema de coordenadas de modo que o ponto atual seja
  // (0,0).
  // Isso significa que você pode chamar rotate() facilmente após desenhar um trecho.
  function leg(n) {
    c.save();
    // Salva a transformação atual
    if (n == 0) {
      // Caso não recursivo:
      c.lineTo(len, 0); // Desenha apenas uma linha horizontal
    } else {
      // Caso recursivo: desenha 4 subtrechos como: \/
      c.scale(1 / 3, 1 / 3);
      // Os subtrechos têm 1/3 do tamanho deste trecho
      leg(n - 1);
      // Recursividade para o primeiro subtrecho
      c.rotate(60 * deg);
      // Gira 60 graus no sentido horário
      leg(n - 1);
      // Segundo subtrecho
      c.rotate(-120 * deg);
      // Gira 120 graus para trás
      leg(n - 1);
      // Terceiro subtrecho
      c.rotate(60 * deg);
      // Gira de volta para a nossa direção original
      leg(n - 1);
      // Subtrecho final
    }
    c.restore();
    // Restaura a transformação
    c.translate(len, 0);
    // Mas translada para fazer o final do trecho (0,0)
  }
}
snowflake(c, 0, 5, 115, 125);
snowflake(c, 1, 145, 115, 125);
snowflake(c, 2, 285, 115, 125);
snowflake(c, 3, 425, 115, 125);
snowflake(c, 4, 565, 115, 125);
c.stroke();
// Um floco de neve de nível 0 é um triângulo equilátero
// Um floco de neve de nível 1 é uma estrela de 6 lados,
// etc.
// Um floco de neve de nível 4 parece um floco de neve!
// Traça esse caminho muito complicado
