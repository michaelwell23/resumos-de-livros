console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

// WHILE
var number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}

//Exemplo prático de WHILE
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//DO WHILE
do {
  var name = prompt('Who are you?');
} while (!name);
console.log(name);
