var contagemAnimal = /\b\d+ (porco|vaca|galinha)s?\b/;
console.log(contagemAnimal.test('15 porcos')); // → true
console.log(contagemAnimal.test('15 porcosgalinhas')); // → false
