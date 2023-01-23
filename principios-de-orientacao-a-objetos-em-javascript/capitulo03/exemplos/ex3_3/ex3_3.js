var person1 = {
  name: 'Nicholas',
};
console.log('name' in person1); // true
delete person1.name; // true (não exibe nada)
console.log('name' in person1); // false
