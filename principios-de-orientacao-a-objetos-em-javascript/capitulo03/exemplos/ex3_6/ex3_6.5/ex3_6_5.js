var person1 = { name: 'Nicholas' };
var descriptor = Object.getOwnPropertyDescriptor(person1, 'name');

console.log(descriptor.enumerable); // true
console.log(descriptor.configurable); // true
console.log(descriptor.writable); // true
console.log(descriptor.value); // "Nicholas"
