var person1 = {
  name: 'Nicholas',
};

Object.defineProperty(person1, 'name', {
  enumerable: false,
});

console.log('name' in person1); // true
console.log(person1.propertyIsEnumerable('name')); // false

var properties = Object.keys(person1);
console.log(properties.length); // 0

Object.defineProperty(person1, 'name', {
  configurable: false,
});

// tenta apagar a propriedade
delete person1.name;

console.log('name' in person1); // true
console.log(person1.name); // "Nicholas"

Object.defineProperty(person1, 'name', {
  // Erro!
  configurable: true,
});
