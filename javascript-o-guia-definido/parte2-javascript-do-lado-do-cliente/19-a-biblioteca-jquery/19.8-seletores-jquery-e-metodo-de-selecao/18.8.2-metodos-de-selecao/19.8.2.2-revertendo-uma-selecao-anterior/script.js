// Localiza todos os elementos <div> e então localiza os elementos <p> dentro deles.
// Realça os elementos <p> e depois adiciona uma borda aos elementos <div>.
// Primeiramente, sem encadeamento de métodos
var divs = $('div');
var paras = divs.find('p');
paras.addClass('highlight');
divs.css('border', 'solid black 1px');
// Aqui está como poderíamos fazer isso com um encadeamento de métodos
$('div').find('p').addClass('highlight').end().css('border', 'solid black 1px');
// Ou então, podemos reordenar as operações e evitar a chamada de end()
$('div').css('border', 'solid black 1px').find('p').addClass('highlight');

var sel = $('div');
sel.pushStack(document.getElementsByTagName('p'));
sel.end();

$('div')
  .find('p')
  .andSelf()
  .addClass('highlight')
  .end()
  .end()
  .css('border', 'solid black 1px');
