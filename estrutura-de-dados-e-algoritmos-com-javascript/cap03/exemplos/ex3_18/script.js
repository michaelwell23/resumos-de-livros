function isEven(x) {
  //devolve tru se X for multiplo de 2
  console.log(x);
  return x % 2 === 0 ? true : false;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// reescrevendo a função com arrow function
const isEven2 = (x) => x % 2 === 0;