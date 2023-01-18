var name = 'Nicholas';
var firstChar = name.charAt(0);
console.log(firstChar); // "N"

// O que a engine do JavaScript faz
var name = 'Nicholas';
var temp = new String(name);
var firstChar = temp.charAt(0);
temp = null;
console.log(firstChar); // "N"

var name2 = 'Nicholas';
name2.last = 'Zakas';
console.log(name2.last); // undefined

// O que a engine do JavaScript faz
var name3 = 'Nicholas';
var temp = new String(name3);
temp.last = 'Zakas';
temp = null; // objeto temporário é destruído
var temp = new String(name3);
console.log(temp.last); // undefined
temp = null;

var name = 'Nicholas';
var count = 10;
var found = false;
console.log(name instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false

var name = new String('Nicholas');
var count = new Number(10);
var found = new Boolean(false);
console.log(typeof name); // "object"
console.log(typeof count); // "object"
console.log(typeof found); // "object"

var found = new Boolean(false);
if (found) {
  console.log('Found'); // isso é executado
}
