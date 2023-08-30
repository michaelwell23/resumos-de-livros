$('#log').append('<br/>' + message); // Adiciona conteúdo no final do elemento #log
$('h1').prepend(' '); // Adiciona símbolo de seção no início de cada <h1>
$('h1').before('<hr/>'); // Insere uma regra antes de cada <h1>
$('h1').after('<hr/>'); // E também depois
$('hr').replaceWith('<br/>'); // Substitui elementos <hr/> por <br/>
$('h2').each(function () {
  // Substitui <h2> por <h1>, mantendo o conteúdo
  var h2 = $(this);
  h2.replaceWith('<h1>' + h2.html() + '</h1>');
});
// after() e before() também podem ser chamados em nós de texto
// Esta é outra maneira de adicionar um símbolo de seção no início de cada <h1>
$('h1')
  .map(function () {
    return this.firstChild;
  })
  .before(' ');

$('<br/>+message').appendTo('#log');
// Anexa html em #log
$(document.createTextNode(' ')).prependTo('h1'); // Anexa nó de texto nos <h1>s
$('<hr/>').insertBefore('h1');
$('<hr/>').insertAfter('h1');
$('<br/>').replaceAll('hr');
