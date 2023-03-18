var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec('xyzzy');
console.log(match.index); // → 4
console.log(pattern.lastIndex); // → 5

console.log('Banana'.match(/an/g)); // → ["an", "an"]

var input = 'A text with 3 numbers in it... 42 and 88.';
var re = /\b(\d+)\b/g;
var match;
while ((match = re.exec(input)))
  console.log('Found', match[1], 'at', match.index);
// → Found 3 at 12
//Found 42 at 31
//Found 88 at 38
