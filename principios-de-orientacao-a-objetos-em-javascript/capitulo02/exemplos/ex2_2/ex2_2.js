//===================== exemplo 01

function sayHi() {
  console.log('hi');
}

sayHi();

var sayHi2 = sayHi;
sayHi2();

//===================== exemplo 02

var sayHi3 = new Function("console.log('hi');");
sayHi3(); // exibe "Hi"

var sayHi4 = sayHi3;
sayHi4(); // exibe "Hi"

// ===================== exemplo 03

var numbers = [1, 5, 8, 4, 7, 10, 2, 6];

numbers.sort(function (first, second) {
  return first - second;
});
console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"

numbers.sort();
console.log(numbers); // "[1, 10, 2, 4, 5, 6, 7, 8]"
