// Converte o elemento e para posicionamento relativo e o "chacoalha" para a esquerda e
// para a direita.
// O primeiro argumento pode ser um objeto elemento ou a identificação de um elemento.
// Se uma função for passada como segundo argumento, ela será chamada
// com e como argumento quando a animação terminar.
// O 3º argumento especifica quanto e vai ser chacoalhado. O padrão é 5 pixels.
// O 4º argumento especifica por quanto tempo se vai chacoalhar. O padrão é 500 ms.

function shake(e, oncomplete, distance, time) {
  // Manipula argumentos
  if (typeof e === 'string') e = document.getElementById(e);
  if (!time) time = 500;
  if (!distance) distance = 5;

  // Esta função verifica o tempo decorrido e atualiza a posição de e.
  // Se a animação está terminada, restaura e ao seu estado original.
  // Caso contrário, atualiza a posição de e e agenda a si mesma para executar novamente.
  function animate() {
    var now = new Date().getTime();
    // Obtém a hora atual
    var elapsed = now - start;
    // Por quanto tempo desde que começamos
    var fraction = elapsed / time;
    // Que fração do tempo total?
    if (fraction < 1) {
      // Se a animação ainda não está terminada
      // Calcula a posição x de e como uma função da fração
      // da conclusão da animação. Usamos uma função senoidal e multiplicamos
      // a fração da conclusão por 4pi, de modo que chacoalhe para trás e
      // para frente duas vezes.
      var x = distance * Math.sin(fraction * 4 * Math.PI);
      e.style.left = x + 'px';
      // Tenta executar novamente em 25ms ou no final do tempo total.
      // Temos como objetivo uma animação suave de 40 quadros/segundo.
      setTimeout(animate, Math.min(25, time - elapsed));
    } else {
      e.style.cssText = originalStyle;
      if (oncomplete) oncomplete(e);
    }
  }
}
// Faz e desaparecer gradualmente, desde totalmente opaco até totalmente transparente, no
// decorrer de time milissegundos.
// Supõe que e é totalmente opaco quando esta função é chamada.
// oncomplete é uma função opcional que vai ser chamada com e como
// argumento quando a animação terminar. Se time for omitido, usa 500ms.
// Esta função não funciona no IE, mas poderia ser modificada para animar
// a propriedade filter não padronizada do IE, além de opacity.
function fadeOut(e, oncomplete, time) {
  if (typeof e === 'string') e = document.getElementById(e);
  if (!time) time = 500;
  // Usamos Math.sqrt como uma "função de abrandamento" simples para tornar a animação
  // sutilmente não linear: ela faz desaparecer gradualmente de forma rápida no início
  // e depois se torna um pouco mais lenta.
  var ease = Math.sqrt;
  var start = new Date().getTime();
  // Note o tempo de início da animação
  var originalStyle = e.style.cssText;
  e.style.position = 'relative';
  var start = new Date().getTime();
  animate();
  animate();
  // E começa a animar
  function animate() {
    var elapsed = new Date().getTime() - start; // tempo decorrido
    var fraction = elapsed / time;
    // Como uma fração do total
    if (fraction < 1) {
      // Se a animação ainda não terminou
      var opacity = 1 - ease(fraction);
      // Calcula a opacidade do elemento
      e.style.opacity = String(opacity);
      // A configura em e
      setTimeout(
        animate,
        // Agenda outro quadro
        Math.min(25, time - elapsed)
      );
    } else {
      // Caso contrário, terminamos
      e.style.opacity = '0';
      // Torna e totalmente transparente
      if (oncomplete) oncomplete(e);
      // Ativa callback na conclusão
    }
  }
}
