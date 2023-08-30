$('#my_form').submit();
// Age como se o usuário tivesse clicado no botão Submit
$('#my_form').trigger('submit');

$('button').trigger('click.ns1');
$('button').trigger('click!');

// A rotina de tratamento de onclick de button1 dispara o mesmo evento em button2
$('#button1').click(function (e) {
  $('#button2').trigger(e);
});
// Adiciona uma propriedade extra no objeto evento ao disparar um evento
$('#button1').trigger({ type: 'click', synthetic: true });
// Esta rotina de tratamento testa essa propriedade extra para distinguir real de
// synthetic
$('#button1').click(function (e) {
  if (e.synthetic) {
    `...`;
  }
});

$('#button1').trigger('click', true);
$('#button1').trigger('click', [x, y, z]);
