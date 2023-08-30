var img = $('<img/>', {
  src: url,
  css: { borderWidth: 5 },
  click: handleClick,
});

jQuery(function () {
  // Chamada quando o documento tiver carregado
  // Todo código jQuery fica aqui
});

jQuery.noConflict(); // Restaura $ ao seu estado original
jQuery(function ($) {
  // Usa $ como apelido local para o objeto jQuery
  // Coloque todo seu código jQuery aqui
});

// Chama a função jQuery each() para
// chamar a função f uma vez para cada elemento do array a
$.each(a, f);
// Chama a função jQuery() para obter um objeto jQuery representando todos
// os elementos <a> do documento. Em seguida, chama o método each() desse
// objeto jQuery para chamar a função f uma vez para cada elemento selecionado.
$('a').each(f);
