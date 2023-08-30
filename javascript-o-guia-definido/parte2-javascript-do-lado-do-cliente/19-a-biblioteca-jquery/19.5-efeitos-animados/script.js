jQuery.fx.speeds['medium-fast'] = 300;
jQuery.fx.speeds['medium-slow'] = 500;

$('#message').fadeIn(); // Faz um elemento aparecer gradualmente durante 400ms
$('#message').fadeOut('fast'); // O faz desaparecer gradualmente durante 200ms

$('.stopmoving').click(function () {
  jQuery.fx.off = true;
});

// Faz um elemento aparecer gradualmente de forma rápida e, quando estiver visível, exibe
// algum texto nele.
$('#message').fadeIn('fast', function () {
  $(this).text('Hello World');
});

$('#blinker').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn();

// Passa a duração e o retorno de chamada como propriedades de objeto, em vez de argumentos
$('#message').fadeIn({
  duration: 'fast',
  complete: function () {
    $(this).text('Hello World');
  },
});
