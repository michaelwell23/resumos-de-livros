$('body').length; // => 1: os documentos têm apenas um elemento body
$('body')[0]; // Isto é o mesmo que document.body

// Localiza todos os elementos <script> no corpo do documento
var bodyscripts = $('script', document.body);
bodyscripts.selector; // => "script"
bodyscripts.context; // => document.body
bodyscripts.jquery;
// => "1.4.2"

// Numera os divs do documento, até e incluindo div#last
$('div').each(function (idx) {
  // localiza todos os <div>s e itera por eles
  $(this).prepend(idx + ': ');
  // Insere índice no início de cada um
  if (this.id === 'last') return false; // Para no elemento #last
});

// Localiza todos os cabeçalhos, mapeia em suas identificações, converte em um array
// verdadeiro e classifica-o.
$(':header')
  .map(function () {
    return this.id;
  })
  .toArray()
  .sort();

$('div').each(function () {
  // Para cada elemento <div>
  if ($(this).is(':hidden')) return; // Pula elementos ocultos
  // Faz algo com os visíveis aqui
});
