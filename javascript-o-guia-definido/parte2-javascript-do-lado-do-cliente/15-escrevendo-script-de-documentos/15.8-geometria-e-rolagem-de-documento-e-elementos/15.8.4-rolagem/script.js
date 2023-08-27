// Obtém a altura do documento e da janela de visualização. offsetHeight está explicado a
// seguir.
var documentHeight = document.documentElement.offsetHeight;
var viewportHeight = window.innerHeight; // Ou usa getViewportSize() anterior
// E rola de modo que a última "página" apareça na janela de visualização
window.scrollTo(0, documentHeight - viewportHeight);

// Rola 10 pixels para baixo a cada 200 ms. Note que não há maneira alguma de desativar
// isso!
javascript: void setInterval(function () {
  scrollBy(0, 10);
}, 200);
