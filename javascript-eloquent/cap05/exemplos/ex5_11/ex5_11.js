var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function (person) {
  byName[person.name] = person;
});
console.log(byName['Philibert Haverbeke']);
// → {name: "Philibert Haverbeke", …}

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null) return defaultValue;
    else
      return f(
        person,
        valueFor(byName[person.mother]),
        valueFor(byName[person.father])
      );
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == 'Pauwels van Haverbeke') return 1;
  else return (fromMother + fromFather) / 2;
}
var ph = byName['Philibert Haverbeke'];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
// → 0.00049

function countAncestors(person, test) {
  function combine(current, fromMother, fromFather) {
    var thisOneCounts = current != person && test(current);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}
function longLivingPercentage(person) {
  var all = countAncestors(person, function (person) {
    return true;
  });
  var longLiving = countAncestors(person, function (person) {
    return person.died - person.born >= 70;
  });
  return longLiving / all;
}
console.log(longLivingPercentage(byName['Emile Haverbeke']));
// → 0.129
