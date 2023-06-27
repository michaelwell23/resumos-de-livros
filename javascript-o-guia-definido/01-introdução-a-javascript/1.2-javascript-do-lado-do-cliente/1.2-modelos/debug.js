// Destaca e, definindo uma classe CSS
function highlight(e) {
  // Basta definir ou anexar no atributo da classe HTML.
  // Isso presume que uma folha de estilos CSS já define a classe "hilite"
  if (!e.className) e.className = 'hilite';
  else e.className += ' hilite';
}
