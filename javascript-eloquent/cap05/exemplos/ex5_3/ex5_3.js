// FUNÇÃO QUE CRIA UMA NOVA FUNÇÃO
function greaterThan(n) {
  return function (m) {
    return m > n;
  };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

// FUNÇÃO QUE ALTERA OUTRA FUNÇÃO
function noisy(f) {
  return function (arg) {
    console.log('calling with', arg);
    var val = f(arg);
    console.log('called with', arg, '- got', val);
    return val;
  };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false

// FUNÇÃO QUE FORNECE NOVOS TIPOS DE FLUXOS DE CONTROLE
function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}
repeat(3, function (n) {
  unless(n % 2, function () {
    console.log(n, 'is even');
  });
});
// → 0 is even
// → 2 is even
