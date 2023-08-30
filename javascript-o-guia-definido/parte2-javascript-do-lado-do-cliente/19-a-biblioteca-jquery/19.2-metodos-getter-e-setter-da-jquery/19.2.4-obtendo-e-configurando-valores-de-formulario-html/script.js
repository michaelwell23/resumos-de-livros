$('#surname').val(); // Obtém o valor do campo de texto surname
$('#usstate').val(); // Obtém o valor único de <select>
$('select#extras').val(); // Obtém array de valores de <select multiple>

$('input:radio[name=ship]:checked').val(); // Obtém o val do botão de opção checked
$('#email').val('Invalid email address'); // Configura o valor de um campo de texto
$('input:checkbox').val(['opt1', 'opt2']); // Marca qualquer caixa de seleção
// com esses nomes ou valores
$('input:text').val(function () {
  // Redefine todos os campos de texto com seus padrões
  return this.defaultValue;
});
