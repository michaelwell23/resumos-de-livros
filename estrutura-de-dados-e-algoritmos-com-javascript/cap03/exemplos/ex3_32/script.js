let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.reverse());
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}

console.log(numbers.sort(compare));
