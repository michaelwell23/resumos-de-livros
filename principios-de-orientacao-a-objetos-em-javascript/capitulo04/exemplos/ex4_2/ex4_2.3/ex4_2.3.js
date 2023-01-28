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

console.log('sayHi' in person1); // false
console.log('sayHi' in person2); // false

// adiciona um novo método
Person.prototype.sayHi = function () {
  console.log('Oi');
};

person1.sayHi(); // exibe "Hi"
person2.sayHi(); // exibe "Hi

//========================//

var person3 = new Person('Nicholas');
var person4 = new Person('Greg');
Object.freeze(person1);

Person.prototype.sayHi = function () {
  console.log('Hi');
};

person1.sayHi(); // exibe "Hi"
person2.sayHi(); // exibe "Hi"
