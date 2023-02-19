const JOURNAL = require('./journal');

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
var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

//===================================================

for (var event in correlations) console.log(event + ': ' + correlations[event]);
// → carrot:
0.0140970969;
// → exercise: 0.0685994341
// → weekend:0.1371988681
// → bread:-0.0757554019
// → pudding: -0.0648203724
// and so on...

//===================================================

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ': ' + correlation);
}
// → weekend:
0.1371988681;
// → brushed teeth: -0.3805211953
// → candy:0.1296407447
// → work:-0.1371988681
// → spaghetti:0.2425356250
// → reading:0.1106828054
// → peanuts:0.5902679812

//===================================================
for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent('peanuts', entry) && !hasEvent('brushed teeth', entry))
    entry.events.push('peanut teeth');
}
console.log(phi(tableFor('peanut teeth', JOURNAL)));
// → 1
