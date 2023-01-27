// USANDO THIS PARA ACESSAR A INSTÂNCIA ATUAL
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"

person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"

// QUANDO UMA INSTÂNCIA NÃO ALTER OS VALORE QUE OUTRA INSTÂNCIA IRÁ ACESSAR
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

Person.prototype.favorites = [];
var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

person1.favorites.push('pizza');
person2.favorites.push('quinoa');

console.log(person1.favorites); // "pizza, quinoa"
console.log(person2.favorites); // "pizza, quinoa

// SUBSTITUINDO O PROTÓTIPO POR UM OBJETO LITERAL
function Person(name) {
  this.name = name;
}
Person.prototype = {
  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  },
};

// SOBRESCREVENDO O PROTÓTIPO
var person1 = new Person('Nicholas');
console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // false
console.log(person1.constructor === Object); // true

function Person(name) {
  this.name = name;
}
Person.prototype = {
  constructor: Person,

  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  },
};

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // true
console.log(person1.constructor === Object); // false

console.log(person2 instanceof Person); // true
console.log(person2.constructor === Person); // true
console.log(person2.constructor === Object); // false
