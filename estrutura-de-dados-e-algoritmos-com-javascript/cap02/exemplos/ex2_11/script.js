let params = [3, 4, 5];
console.log(sum(...params));

console.log(sum.apply(undefined, params));

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7));

function restParamaterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7));
