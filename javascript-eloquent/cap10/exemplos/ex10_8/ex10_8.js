function evalAndReturnX(code) {
  eval(code);
  return x;
}
console.log(evalAndReturnX('var x = 2'));
// → 2

var plusOne = new Function('n', 'return n + 1;');
console.log(plusOne(4));
// → 5
