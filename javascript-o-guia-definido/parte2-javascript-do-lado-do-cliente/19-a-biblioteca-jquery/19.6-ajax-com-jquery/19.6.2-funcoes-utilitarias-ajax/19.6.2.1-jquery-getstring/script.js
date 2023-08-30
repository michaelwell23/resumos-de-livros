// Carrega dinamicamente um script de algum outro servidor
jQuery.getScript('http://example.com/js/widget.js');

// Carrega uma biblioteca e a utiliza quando tiver carregado
jQuery.getScript('js/jquery.my_plugin.js', function () {
  $('div').my_plugin();
  // Usa a biblioteca que carregamos
});
