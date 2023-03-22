var weekDay = (function () {
  var names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return {
    name: function (number) {
      return names[number];
    },
    number: function (name) {
      return names.indexOf(name);
    },
  };
})();
console.log(weekDay.name(weekDay.number('Sunday')));
// → Sunday

(function (exports) {
  var names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  exports.name = function (number) {
    return names[number];
  };
  exports.number = function (name) {
    return names.indexOf(name);
  };
})((window.weekDay = {}));
console.log(weekDay.name(weekDay.number('Saturday')));
// → Saturday
