function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};

var person1 = Person('Nicholas'); // nota: falta "new"

console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"

// ===============  ==================
function Person(name) {
  if (this instanceof Person) {
    // chamado com "new"
  } else {
    // chamado sem "new"
  }
}

// ===============  ==================
function Person(name) {
  if (this instanceof Person) {
    // chamado com "new"
  } else {
    // chamado sem "new"
  }
}

// ===============  ==================

var person1 = new Person('Nicholas');
var person2 = Person('Nicholas');
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
