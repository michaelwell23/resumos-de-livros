var ancestry = JSON.parse(ANCESTRY_FILE);

//  filtrado pessoas jovens no anos de 1924 do array acenstry.js
function filter2(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) passed.push(array[i]);
  }
  return passed;
}
console.log(
  filter2(ancestry, function (person) {
    return person.born > 1900 && person.born < 1925;
  })
);

// utilizando o método filter
console.log(
  'Usando Filter',
  ancestry.filter(function (person) {
    return person.father == 'Carel Haverbeke';
  })
);
