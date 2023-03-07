// LOOP
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

// ABSTRAINDO UTILIZANDO UMA FUNÇÃO
function logEach(array) {
  for (var i = 0; i < array.length; i++) console.log(array[i]);
}

//FUNÇÃO COM NOSSAS PRÓPRIAS AÇÕES COMO UM VALOR
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) action(array[i]);
}
forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log);

// futilizando forEach
var numbers = [1, 2, 3, 4, 5],
  sum = 0;
forEach(numbers, function (number) {
  sum += number;
});
console.log(sum);

// FUNÇÃO COM ARRAYS TRANSVERSAIS
function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis)) phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

// FUNÇÃO COM ARRAYS TRANSVERSAIS UTILIZANDO FOREACH
function gatherCorrelations2(journal) {
  var phis = {};
  journal.forEach(function (entry) {
    entry.events.forEach(function (event) {
      if (!(event in phis)) phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}
