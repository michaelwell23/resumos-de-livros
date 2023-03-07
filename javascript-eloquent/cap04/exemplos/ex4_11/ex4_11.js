// Valores imutáveis não podem ser sobre escritos por objetos
var myString = 'Fido';

myString.myProperty = 'value';
console.log(myString.myProperty); // → undefined

// Slice e indexOf
console.log('coconuts'.slice(4, 7)); // → nut
console.log('coconut'.indexOf('u')); // → 5

// indexOf em strings
console.log('one two three'.indexOf('ee')); // → 11

// utilizando método trim
console.log(' okay \n '.trim()); // → okay

// Utiliando o método charAt
var string = 'abc';
console.log(string.length); // → 3
console.log(string.charAt(0)); // → a
console.log(string[1]); // → b
