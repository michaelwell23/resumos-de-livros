let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(5, 3);
numbers.splice(5, 0, 2, 3, 4);
numbers.splice(5, 3, 2, 3, 4);

console.log(numbers);
