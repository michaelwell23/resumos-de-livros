const ANCESTRY_FILE = require('./ancestry');

// utilizand JSON.stringify e JSON.parse
var string = JSON.stringify({ name: 'X', born: 1980 });
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980

// vendo a quantidade de pessoas no array ancestry.js
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);
// → 39
