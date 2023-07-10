// for(inicialização ; teste ; incremento)
// instrução

// inicialização;
// while (teste) {
//   instrução;
//   incremento;
// }

for (var count = 0; count < 10; count++) {
  console.log(count);
}

var i, j;
for (i = 0, j = 10; i < 10; i++, j--) sum += i * j;

// Retorna a cauda da lista encadeada o
function tail(o) {
  for (; o.next; o = o.next /* vazio */) return o; // Percorre enquanto o.next é verdadeiro
}
