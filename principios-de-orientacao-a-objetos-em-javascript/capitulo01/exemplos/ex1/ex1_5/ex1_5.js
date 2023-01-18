function reflect(value) {
  return value;
}

console.log(typeof reflect);

// ====================================

var items = [];
var object = {};

console.log(items instanceof Array);
console.log(object instanceof Object);
console.log(reflect instanceof Function);

// =====================================

console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(objects instanceof Object); // true
console.log(object instanceof Array); // false
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true
