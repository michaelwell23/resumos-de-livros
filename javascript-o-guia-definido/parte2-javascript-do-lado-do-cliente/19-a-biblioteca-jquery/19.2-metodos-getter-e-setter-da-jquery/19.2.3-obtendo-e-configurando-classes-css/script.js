// Adicionando classes CSS
$('h1').addClass('hilite');
$('h1+p').addClass('hilite first');
$('section').addClass(function (n) {
  return 'section' + n;
});
// Removendo classes CSS

$('p').removeClass('hilite');
$('p').removeClass('hilite first');
$('section').removeClass(function (n) {
  return 'section' + n;
});
$('div').removeClass();

// Alternando classes CSS
$('tr:odd').toggleClass('oddrow');

$('h1').toggleClass('big bold');
$('h1').toggleClass(function (n) {
  return 'big bold h1-' + n;
});
$('h1').toggleClass('hilite', true);
$('h1').toggleClass('hilite', false);
// Testando a presença de classes CSS
$('p').hasClass('first');
$('#lead').is('.first');
$('#lead').is('.first.hilite');
