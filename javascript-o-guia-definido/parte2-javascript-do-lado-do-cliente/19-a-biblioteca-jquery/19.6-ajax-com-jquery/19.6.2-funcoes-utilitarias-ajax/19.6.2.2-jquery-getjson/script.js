// Supõe que data.json contém o texto: '{"x":1,"y":2}'
jQuery.getJSON('data.json', function (data) {
  // Agora data é o objeto {x:1, y:2}
});

$('#submit_button').click(function (event) {
  $(this.form).load(
    // Substitui o formulário carregando...
    this.form.action,
    // seu url
    $(this.form).serialize()
  ); // com os dados do formulário anexados
  event.preventDefault();
  // Não faz o envio de formulário padrão
  this.disabled = 'disabled';
  // Impede envios múltiplos
});

$.param({ a: [1, 2, 3] }); // Retorna "a[]=1&a[]=2&a[]=3"
$.param({ o: { x: 1, y: true } }); // Retorna "o[x]=1&o[y]=true"
$.param({ o: { x: { y: [1, 2] } } }); // Retorna "o[x][y][]=1&o[x][y][]=2"
