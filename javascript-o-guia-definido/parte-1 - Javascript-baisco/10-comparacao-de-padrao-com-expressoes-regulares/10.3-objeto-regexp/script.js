// Encontra todos os números de cinco dígitos em uma string. Observe o duplo \\ nesse caso.
var zipcode = new RegExp('\\d{5}', 'g');

// 10.3.2 - método de REGEXP
var pattern = /Java/g;
var text = 'JavaScript is more fun than Java!';
var result;
while ((result = pattern.exec(text)) != null) {
  alert(
    "Matched '" +
      result[0] +
      "'" +
      ' at position ' +
      result.index +
      '; next search begins at ' +
      pattern.lastIndex
  );
}
