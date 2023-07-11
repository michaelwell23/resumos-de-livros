// Um valor de propriedade é qualquer expressão JavaScript; o valor da expressão (pode ser um valor primitivo ou um valor de objeto) se torna o valor da propriedade. Aqui estão alguns exemplos:

var empty = {}; // Um objeto sem propriedades
var point = { x: 0, y: 0 }; // Duas propriedades
var point2 = { x: point.x, y: point.y + 1 }; // Valores mais complexos

var book = {
  'main title': 'JavaScript',
  'sub-title': 'The Definitive Guide',
  for: 'all audiences', // Os nomes de propriedade incluem espaços, e hifens; portanto, usam strings literais for é uma palavra reservada; portanto, usa aspas

  author: {
    // O valor dessa propriedade é ele próprio um objeto. Note que esses nomes de propriedade não têm aspas.
    firstname: 'David',
    surname: 'Flanagan',
  },
};
