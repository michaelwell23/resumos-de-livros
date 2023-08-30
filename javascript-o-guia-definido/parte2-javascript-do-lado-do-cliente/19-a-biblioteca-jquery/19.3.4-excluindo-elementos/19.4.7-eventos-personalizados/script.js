// Quando o usuário clica no botão "logoff", transmite um evento personalizado
// para qualquer observador interessado que precise salvar seu estado e então
// navegar para a página de logoff.
$('#logoff').click(function () {
  $.event.trigger('logoff');
  // Transmite um evento
  window.location = 'logoff.php'; // Navega para uma nova página
});
