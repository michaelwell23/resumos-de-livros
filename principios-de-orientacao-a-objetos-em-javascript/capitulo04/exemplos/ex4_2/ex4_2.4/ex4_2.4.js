Array.prototype.sum = function () {
  return this.reduce(function (previous, current) {
    return previous + current;
  });
};

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();

console.log(result); // 21

//=========================

Array.prototype.sum = function () {
  return this.reduce(function (previous, current) {
    return previous + current;
  });
};

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();

console.log(result); // 21
