// Cria um novo objeto Option
var zaire = new Option(
  'Zaire', // A propriedade text
  'zaire', // A propriedade value
  false, // A propriedade defaultSelected
  false // A propriedade selected
);

// Exibe em um elemento Select anexando-o no array options:
var countries = document.address.country; // Obtém o objeto Select
countries.options[countries.options.length] = zaire;
