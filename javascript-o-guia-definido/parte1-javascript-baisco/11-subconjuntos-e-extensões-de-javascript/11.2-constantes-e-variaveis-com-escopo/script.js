const pi = 3.14; // Define uma constante e fornece a ela um valor.
pi = 4; // Qualquer atribuição futura a ela é ignorada silenciosamente.
const pi = 4; // É erro redeclarar uma constante.
var pi = 4; // Isto também é erro.

function oddsums(n) {
  let total = 0,
    result = [];
  // Definida por toda a função
  for (let x = 1; x <= n; x++) {
    // x é definida apenas no laço
    let odd = 2 * x - 1;
    // odd definida apenas neste laço
    total += odd;
    result.push(total);
  }
  // Usar x ou odd aqui causaria um ReferenceError
  return result;
}
oddsums(5); // Retorna [1,4,9,16,25]

o = { x: 1, y: 2 };
for (let p in o) console.log(p); // Imprime x e y
for (let v in o) console.log(v); // Imprime 1 e 2
console.log(p); // ReferenceError: p não está definida

let x = 1;
for (let x = x + 1; x < 5; x++) console.log(x); // Imprime 2,3,4
{
  let x = x + 1;
  console.log(x);
  // Inicia um bloco para criar um novo escopo de variável
  // x está indefinido; portanto, x+1 é NaN
  // Imprime NaN
}

let a=1, b=2; // Note que estamos ocultando variáveis
let (a = a + 1,b = a + 2); {
 console.log(a+b); // Imprime 5
};
console.log(a+b); // Imprime 3

let c=1, d=2;
console.log(let (c=c+1,d=c+2) c+d); // Imprime 5