// não é confiável
if (person1.age) {
  // faz algo com a idade (age)
}

// ==================

console.log('name' in person1); // true
console.log('age' in person1); // true
console.log('title' in person1); // false

// ==================

var person1 = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};
console.log('sayName' in person1); // true

// ==================

var person2 = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};
console.log('name' in person2); // true
console.log(person2.hasOwnProperty('name')); // true
console.log('toString' in person2); // true
console.log(person2.hasOwnProperty('toString')); // false
