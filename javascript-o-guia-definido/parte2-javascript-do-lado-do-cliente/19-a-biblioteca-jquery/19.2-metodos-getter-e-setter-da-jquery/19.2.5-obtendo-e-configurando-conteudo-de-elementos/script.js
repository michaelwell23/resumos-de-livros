var title = $('head title').text(); // Obtém o título do documento
var headline = $('h1').html();
// Obtém a html do primeiro elemento <h1>
$('h1').text(function (n, current) {
  // Fornece a cada cabeçalho um número de seção
  return '§' + (n + 1) + ': ' + current;
});
