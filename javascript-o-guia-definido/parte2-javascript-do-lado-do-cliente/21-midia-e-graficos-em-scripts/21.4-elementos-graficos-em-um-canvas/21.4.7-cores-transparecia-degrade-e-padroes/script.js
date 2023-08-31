context.strokeStyle = 'blue';
context.fillStyle = '#aaa';
// Traça linhas em azul
// Preenche áreas com cinza-claro

var colors = [
  '#f44',
  '#44ff44',
  'rgb(60, 60, 255)',
  'rgb(100%, 25%, 100%)',
  'rgba(100%, 25%, 100%, 0.5)',
  'rgba(0,0,0,0)',
  'transparent',
  'hsl(60, 100%, 50%)',
  'hsl(60, 75%, 50%)',
  'hsl(60, 100%, 75%)',
  'hsl(60, 100%, 25%)',
  'hsla(60, 100%, 50%, 0.5)',
];

var image = document.getElementById('myimage');
c.fillStyle = c.createPattern(image, 'repeat');

var offscreen = document.createElement('canvas');
offscreen.width = offscreen.height = 10;
offscreen.getContext('2d').strokeRect(0, 0, 6, 6);
var pattern = c.createPattern(offscreen, 'repeat');

// Um gradiente linear, diagonalmente no canvas (supondo nenhuma transformação)
var bgfade = c.createLinearGradient(0, 0, canvas.width, canvas.height);
bgfade.addColorStop(0.0, '#88f');
// Começa com azul-claro no lado superior esquerdo
bgfade.addColorStop(1.0, '#fff');
// Desbota para branco no lado inferior direito
// Um gradiente entre dois círculos concêntricos. Transparente no meio
// desbotando para cinza translúcido e depois de volta para transparente.
var peekhole = c.createRadialGradient(300, 300, 100, 300, 300, 300);
peekhole.addColorStop(0.0, 'transparent');
// Transparente
peekhole.addColorStop(0.7, 'rgba(100,100,100,.9)');
// Cinza translúcido
peekhole.addColorStop(1.0, 'rgba(0,0,0,0)');
// Transparente outra vez

c.fillStyle = bgfade;
c.fillRect(0, 0, 600, 600);
c.strokeStyle = pattern;
c.lineWidth = 100;
c.strokeRect(100, 100, 400, 400);
c.fillStyle = peekhole;
c.fillRect(0, 0, 600, 600);
