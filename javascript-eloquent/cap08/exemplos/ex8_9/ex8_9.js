function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);
function assert(test, message) {
  if (!test) throw new AssertionFailed(message);
}
function lastElement(array) {
  assert(array.length > 0, 'empty array in lastElement');
  return array[array.length - 1];
}

console.log(lastElement([1, 2, 3, 4, 5]));
