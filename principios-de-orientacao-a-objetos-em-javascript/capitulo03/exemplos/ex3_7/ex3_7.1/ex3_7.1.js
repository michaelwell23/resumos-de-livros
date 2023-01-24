var person1 = {
  name: 'Nicholas',
};
console.log(Object.isExtensible(person1)); // true

Object.preventExtensions(person1);
console.log(Object.isExtensible(person1)); // false

person1.sayName = function () {
  console.log(this.name);
};
console.log('sayName' in person1); // false
