define(['weekDay', 'today'], function (weekDay, today) {
  console.log(weekDay.name(today.dayNumber()));
});

define([], function () {
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
});

function define(depNames, moduleFunction) {
  var deps = [],
    myMod = define.currentModule;
  depNames.forEach(function (name) {
    if (name in define.cache) {
      var depMod = define.cache[name];
    } else {
      var depMod = { exports: null, loaded: false, onLoad: [] };
      define.cache[name] = depMod;
      backgroundReadFile(name, function (code) {
        define.currentModule = depMod;
        new Function('', code)();
      });
    }
    deps.push(depMod);
    if (!depMod.loaded) depMod.onLoad.push(runIfDepsLoaded);
  });
  function runIfDepsLoaded() {
    if (
      !deps.every(function (m) {
        return m.loaded;
      })
    )
      return;
    var args = deps.map(function (m) {
      return m.exports;
    });
    var exports = moduleFunction.apply(null, args);
    if (myMod) {
      myMod.exports = exports;
      myMod.loaded = true;
      myMod.onLoad.every(function (f) {
        f();
      });
    }
  }
  runIfDepsLoaded();
}
define.cache = Object.create(null);
