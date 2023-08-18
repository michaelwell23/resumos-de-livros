var geval = eval; // Usar outro nome faz uma eval global
var x = 'global',
  y = 'global'; // Duas variáveis globais

function f() {
  // Define uma variável local
  var x = 'local'; // eval direta configura variável local
  eval("x += 'changed';"); // Retorna variável local alterada
  return x; // Esta função faz uma eval local
}
function g() {
  // Uma variável local
  var y = 'local'; // eval indireta configura variável global
  geval("y += 'changed';"); // Retorna variável local inalterada
  return y; // Esta função faz uma eval global
}
console.log(f(), x); // Variável local alterada: imprime "localchanged global":
console.log(g(), y); // Variável global alterada: imprime "local globalchanged":
