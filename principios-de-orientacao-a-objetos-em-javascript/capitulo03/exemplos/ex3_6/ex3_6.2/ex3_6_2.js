var person1 = {};
Object.defineProperty(person1, 'name', {
  value: 'Nicholas',
  enumerable: true,
  configurable: true,
  writable: true,
});

//========================

var person1 = {};
Object.defineProperty(person1, 'name', {
  value: 'Nicholas',
});
console.log('name' in person1); // true
console.log(person1.propertyIsEnumerable('name')); //false

delete person1.name;

console.log('name' in person1); // true
person1.name = 'Greg';
console.log(person1.name); // "Nicholas"
