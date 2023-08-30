// As imagens se tornam opacas quando o mouse fica sobre elas.
// Cuidado para não ficarmos enfileirando animações em eventos de mouse!
$('img').bind({
  mouseover: function () {
    $(this).stop().fadeTo(300, 1.0);
  },
  mouseout: function () {
    $(this).stop().fadeTo(300, 0.5);
  },
});

// Desaparece gradual e rapidamente até a metade, espera, em seguida desliza para cima
$('img').fadeTo(100, 0.5).delay(200).slideUp();

$('img').bind({
  mouseover: function () {
    $(this).stop(true).delay(100).fadeTo(300, 1.0);
  },
  mouseout: function () {
    $(this).stop(true).fadeTo(300, 0.5);
  },
});

// Faz um elemento aparecer gradualmente, espera, configura algum texto nele e anima sua
// borda
$('#message')
  .fadeIn()
  .delay(200)
  .queue(function (next) {
    $(this).text('Hello World');
    // Exibe algum texto
    next();
    // Executa o próximo item da fila
  })
  .animate({ borderWidth: '+=10px;' });
// Aumenta sua borda

$(this).dequeue();
// Em vez de next()

$(e).queue(f); // Cria um objeto jQuery contendo e, e chama o método queue
jQuery.queue(e, f); // Apenas chama a função utilitária jQuery.queue()
