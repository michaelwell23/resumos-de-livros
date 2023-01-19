// declaração de função

function add(num1, num2) {
  return num1 + num2;
}

// expressão de função
var add2 = function (num1, num2) {
  return num1 + num2;
};

//hoisted

var result = add3(5, 5);

function add3(num1, num2) {
  return num1 + num2;
}

// como a engine do JavaScript interpreta o código
function add4(num1, num2) {
  return num1 + num2;
}

var result2 = add4(5, 5);

// expressão de função resulta em erro com o hoisting

// var result3 = add5(5, 5);
var add5 = function (num1, num2) {
  return num1 + num2;
};

console.log(add(5, 5));
console.log(add2(5, 5));
console.log(result);
console.log(result2);
// console.log(result3);
