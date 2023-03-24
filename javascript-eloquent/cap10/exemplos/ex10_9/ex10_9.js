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

// ========

function require(name) {
  var code = new Function('exports', readFile(name));
  var exports = {};
  code(exports);
  return exports;
}
console.log(require('weekDay').name(1));
// → Monday

// ========

var weekDay = require('weekDay');
var today = require('today');
console.log(weekDay.name(today.dayNumber()));

// ========

function require(name) {
  if (name in require.cache) return require.cache[name];
  var code = new Function('exports, module', readFile(name));
  var exports = {},
    mod = { exports: exports };
  code(exports, mod);
  require.cache[name] = module.exports;
  return module.exports;
}
require.cache = Object.create(null);
