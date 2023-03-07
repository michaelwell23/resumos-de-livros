// fluxo de execução de uma função
function greet(who) {
  console.log('Hello ' + who);
}
greet('Harry');
console.log('Bye');

// ciclo infinito de chamada na call stack (Maximum call stack size exceeded)
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + ' came first.');
