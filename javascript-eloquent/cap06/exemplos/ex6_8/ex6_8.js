console.log(new RTextCell('A') instanceof RTextCell);
// → true
console.log(new RTextCell('A') instanceof TextCell);
// → true
console.log(new TextCell('A') instanceof RTextCell);
// → false
console.log([1] instanceof Array);
// → true
