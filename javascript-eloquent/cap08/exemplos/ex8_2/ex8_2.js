// modo estrito
function canYouSpotTheProblem() {
  'use strict';
  for (counter = 0; counter < 10; counter++) console.log('Happy happy');
}
canYouSpotTheProblem(); // → ReferenceError: counter is not defined

// chamando um construtor sem uma nova palavra-chave
function Person(name) {
  this.name = name;
}
var ferdinand = Person('Ferdinand'); // oops
console.log(name); // → Ferdinand

//Utilizando o modo estrito
('use strict');
function Person2(name) {
  this.name = name;
}
// Oops, forgot 'new'
var ferdinand = Person2('Ferdinand'); // → TypeError: Cannot set property 'name' of undefined
