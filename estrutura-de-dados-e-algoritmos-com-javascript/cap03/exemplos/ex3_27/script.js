// MÉTODO ENTRIES
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aEntries = numbers.entries(); // obtém um iterador de chave/valor
console.log(aEntries.next().value); // [0,1] - posição 0, valor 1
console.log(aEntries.next().value); // [1,2] - posição 1, valor 2
console.log(aEntries.next().value); // [2,3] - posição 2, valor 3

aEntries = numbers.entries();
for (const n of aEntries) {
  console.log(n);
}

// MÉTODO KEYS
const aKeys = numbers.keys(); // obtém um iterador de chaves
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false }

// MÉTODO VALUES
const aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }
