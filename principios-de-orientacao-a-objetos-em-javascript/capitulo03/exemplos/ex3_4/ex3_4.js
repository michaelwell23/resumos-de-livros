var property;
for (property in object) {
  console.log('Name :' + property);
  console.log('Value:' + object[property]);
}

// ======================

var properties = Object.keys(object);
// Se quiser imitar o comportamento do loop for-in
var i, len;
for (i = 0, len = properties.length; i < len; i++) {
  console.log('Name :' + properties[i]);
  console.log('Value:' + object[properties[i]]);
}

// ======================
var person1 = {
  name: 'Nicholas',
};

console.log('name' in person1); // true
console.log(person1.propertyIsEnumerable('name')); // true

var properties = Object.keys(person1);

console.log('length' in properties); // true
console.log(properties.propertyIsEnumerable('length')); // false

// ======================
