$('h1').css('font-weight');
// Obtém a espessura da fonte do primeiro <h1>
$('h1').css('fontWeight');
// Letras maiúsculas no meio também funcionam
$('h1').css('font');
// Erro: não pode consultar estilos compostos
$('h1').css(
  'font-variant',
  // Configura um estilo em todos os elementos <h1>
  'smallcaps'
);
$('div.note').css(
  'border',
  // Pode configurar estilos compostos
  'solid black 2px'
);
$('h1').css({
  backgroundColor: 'black', // Configura vários estilos simultaneamente
  textColor: 'white',
  // Nomes com maiúsculas no meio funcionam melhor
  fontVariant: 'small-caps', // como propriedades de objeto
  padding: '10px 2px 4px 20px',
  border: 'dotted black 4px',
});
// Aumenta em 25% todos os tamanhos de fonte de <h1>
$('h1').css('font-size', function (i, curval) {
  return Math.round(1.25 * parseInt(curval));
});
