function test(o) {
  var i = 0; // i está definida para toda a função
  if (typeof o == 'object') {
    var j = 0; //  j está definida por toda parte e não apenas no bloco
    for (var k = 0; k < 10; k++) {
      // bloco kesta definido por toda parte e não apenas no laço
      console.log(k); // imprime os numero de 0 a 9
    }
    console.log(k); // k ainda está definida: imprime 10
  }
  console.log(j); // j está definida,mas não pode ser inicializada;
}

// IÇAMENTO
var scope = 'global';
function f() {
  console.log(scope); // Imprime "undefined" e não "global"
  var scope = 'local'; // Variável inicializada aqui, mas definida por toda parte console.log(scope);
  // Imprime "local"
}

function f() {
  var scope; // A variável local é declarada no topo da função
  console.log(scope); // Ela existe aqui, mas ainda tem valor "indefinido"
  scope = 'local'; // Agora a inicializamos e fornecemos a ela um valor
  console.log(scope); // E aqui ela tem o valor que esperamos
}
