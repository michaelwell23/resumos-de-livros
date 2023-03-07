var ancestry = JSON.parse(ANCESTRY_FILE);

var theSet = ['Carel Haverbeke', 'Maria van Brussel', 'Donald Duck'];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}
console.log(
  ancestry.filter(function (person) {
    return isInSet(theSet, person);
  })
);
// → [{name: "Maria van Brussel", …},
// {name: "Carel Haverbeke", …}]

console.log(ancestry.filter(isInSet.bind(null, theSet)));
// → … same result
