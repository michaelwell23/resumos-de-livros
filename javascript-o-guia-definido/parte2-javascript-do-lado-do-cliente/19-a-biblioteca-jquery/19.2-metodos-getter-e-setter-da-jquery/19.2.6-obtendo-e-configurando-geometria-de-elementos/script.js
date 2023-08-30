var elt = $('#sprite');
var position = elt.offset();
posição.top += 100;
elt.offset(position);
// Move todos os elementos <h1> para a direita, por uma distância que depende de suas
// posições no documento
$('h1').offset(function (index, curpos) {
  return { left: curpos.left + 25 * index, top: curpos.top };
});

// código a seguir mostra quatro larguras diferentes que podem ser calculadas para um elemento:
var body = $('body');
var contentWidth = body.width();
var paddingWidth = body.innerWidth();
var borderWidth = body.outerWidth();
var marginWidth = body.outerWidth(true);
var padding = paddingWidth - contentWidth; // soma do preenchimento esquerdo e direito
var borders = borderWidth - paddingWidth; // soma das larguras de borda esquerda e direita
var margins = marginWidth - borderWidth; // soma das margens esquerda e direita

// Rola a janela por n páginas. n pode ser fracionário ou negativo
function page(n) {
  var w = $(window);
  // Empacota a janela em um objeto jQuery
  var pagesize = w.height();
  // Obtém o tamanho de uma página
  var current = w.scrollTop();
  // Obtém a posição atual da barra de rolagem
  w.scrollTop(current + n * pagesize); // Configura a nova posição da barra de rolagem
}
