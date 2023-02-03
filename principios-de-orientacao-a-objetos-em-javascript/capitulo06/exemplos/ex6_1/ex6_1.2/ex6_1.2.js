function Person(name) {
  // define uma variável acessível somente no construtor Person
  var age = 25;
  this.name = name;
  this.getAge = function () {
    return age;
  };
  this.growOlder = function () {
    age++;
  };
}
var person = new Person('Nicholas');

console.log(person.name); // "Nicholas"
console.log(person.getAge()); // 25
person.age = 100;

console.log(person.getAge()); // 25

person.growOlder();

console.log(person.getAge()); // 26

// ============================================

var Person = (function () {
  // todos compartilham a mesma idade
  var age = 25;
  function InnerPerson(name) {
    this.name = name;
  }
  InnerPerson.prototype.getAge = function () {
    return age;
  };
  InnerPerson.prototype.growOlder = function () {
    age++;
  };
  return InnerPerson;
})();

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1.name); // "Nicholas"
console.log(person1.getAge()); // 25
console.log(person2.name); // "Greg"
console.log(person2.getAge()); // 25

person1.growOlder();

console.log(person1.getAge()); // 26
console.log(person2.getAge()); // 26
