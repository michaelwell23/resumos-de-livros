jQuery.fn.println = function () {
  // Une todos os argumentos separados com espaços em uma string
  var msg = Array.prototype.join.call(arguments, ' ');
  // Itera por cada elemento do objeto jQuery
  this.each(function () {
    // Para cada um, anexa a string como texto puro e depois anexa um <br/>.
    jQuery(this).append(document.createTextNode(msg)).append('<br/>');
  });
  // Retorna o objeto jQuery intacto para o encadeamento de métodos
  return this;
};

$('#debug').println('x = ', x, '; y = ', y);

(function ($) {
  // Uma função anônima com um único parâmetro chamado $
  // Coloque o código de seu plugin aqui
})(jQuery);
// Chama a função com o objeto jQuery como argumento

// Este método imprime seus argumentos (usando o método de plugin println())
// no elemento com identificação "debug". Se esse elemento não existe, ele é criado
// e adicionado no documento.
jQuery.debug = function () {
  var elt = jQuery('#debug');
  // Localiza o elemento #debug
  if (elt.length == 0) {
    // O cria, caso não exista
    elt = jQuery("<div id='debug'><h1>Debugging Output</h1></div>");
    jQuery(document.body).append(elt);
  }
  elt.println.apply(elt, arguments); // Gera a saída dos argumentos nele
};

jQuery.expr[':'].draggable = function (e) {
  return e.draggable === true;
};

jQuery.expr[':'].data = function (element, index, match, array) {
  // Nota: o IE7 e anteriores não implementam hasAttribute()
  return element.hasAttribute('data-' + match[3]);
};
