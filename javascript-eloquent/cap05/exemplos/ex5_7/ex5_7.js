var ancestry = JSON.parse(ANCESTRY_FILE);

// mapeando um array
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) mapped.push(transform(array[i]));
  return mapped;
}
var overNinety = ancestry.filter(function (person) {
  return person.died - person.born > 90;
});

// Utiliando o método map
console.log(
  map(overNinety, function (person) {
    return person.name;
  })
);
