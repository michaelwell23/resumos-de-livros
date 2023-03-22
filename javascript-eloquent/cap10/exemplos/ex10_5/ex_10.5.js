var names = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
function dayName(number) {
  return names[number];
}
console.log(dayName(1));
// → Monday

var dayName = (function () {
  var names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return function (number) {
    return names[number];
  };
})();
console.log(dayName(3));
// → Wednesday

(function () {
  function square(x) {
    return x * x;
  }
  var hundred = 100;
  console.log(square(hundred));
})();
// → 10000
