// MÉTODO SEARCH
'JavaScript'.search(/script/i);

//  Independente de como seja composta, substitui pela composição correta de letras
//maiúsculas e minúsculas
text.replace(/javascript/gi, 'JavaScript');

// Uma citação é composta de aspas, seguidas de qualquer número de
// caracteres que não são aspas (os quais lembramos), seguidos
// de outras aspas.
var quote = /"([^"]*)"/g;
// Substitui aspas normais por aspas inglesas,
// deixando o texto da citação (armazenado em $1) intacto.
text.replace(quote, '"$1"');

'1 plus 2 equals 3'.match(/\d+/g);
// retorna ["1", "2", "3"]

var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = 'Visit my blog at http://www.example.com/~david';
var result = text.match(url);
if (result != null) {
  var fullurl = result[0];
  // Contém "http://www.example.com/~david"
  var protocol = result[1]; // Contém "http"
  var host = result[2];
  // Contém "www.example.com"
  var path = result[3];
  // Contém "~david"
}

'123,456,789'.split(',');
// Retorna ["123","456","789"]

'1, 2, 3, 4, 5'.split(/\s*,\s*/);
// Retorna ["1","2","3","4","5"]
