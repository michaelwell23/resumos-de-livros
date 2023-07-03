var scope = 'global'; // Declara uma variável global
function checkscope() {
  var scope = 'local'; // Declara uma variável local com o mesmo nome
  return scope; // Retorna o valor local, não o global
}
checkscope(); // => "local"

// Escopo de variável sem declarar o var
scope = 'global'; // Declara uma variável global, mesmo sem var.
function checkscope2() {
  scope = 'local'; // Opa! Simplesmente alteramos a variável global.
  myscope = 'local'; // Isso declara uma nova variável global implicitamente.
  return [scope, myscope]; // Retorna dois valores.
}
checkscope2(); // => ["local", "local"]: tem efeitos colaterais!
scope; // => "local": a variável global mudou.
myscope; // => "local": namespace global desordenado.

// Escopo alinhado
var scope = 'global scope'; // Uma variável global
function checkscope() {
  var scope = 'local scope'; // Uma variável local
  function nested() {
    var scope = 'nested scope'; // Um escopo aninhado de variáveis locais
    return scope; // Retorna o valor em scope aqui
  }
  return nested();
}
checkscope(); // => "nested scope"
