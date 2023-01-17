// forma literal Objetos
var book = {
  name: 'Princípios de Orientação a objetos em JavaScript',
  year: 2014,
};

// forma literal com propriedade string
var book2 = {
  'name ': 'Princípios de Orientação a objetos em JavaScript',
  'year ': 2014,
};

// forma de instância
var book3 = new Object();
book.name = 'Princípios de Orientação a objetos em JavaScript';
book.year = 2014;

// === forma literal Arrays ===
var colors = ['red', 'blue', 'green'];
console.log('colors[0]'); //red

// forma de instância com Arrays
var colors2 = new Array('red', 'blue', 'green');
console.log('colors[0]');
