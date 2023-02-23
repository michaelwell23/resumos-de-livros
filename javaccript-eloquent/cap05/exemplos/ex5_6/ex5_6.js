const ancestry = require('./ancestry');

//  filtrado pessoas jovens no anos de 1924 do array acenstry.js
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) passed.push(array[i]);
  }
  return passed;
}
console.log(
  filter(ancestry, function (person) {
    return person.born > 1900 && person.born < 1925;
  })
);

// utilizando o método filter
console.log(
  ancestry.filter(function (person) {
    return person.father == 'Carel Haverbeke';
  })
);
