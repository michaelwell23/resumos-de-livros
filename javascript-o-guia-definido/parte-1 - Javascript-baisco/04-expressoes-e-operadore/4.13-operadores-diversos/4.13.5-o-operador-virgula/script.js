(i = 0), (j = 1), (k = 2);
i = 0;
j = 1;
k = 2;

// A primeira vírgula abaixo faz parte da sintaxe da instrução var
// A segunda vírgula é o operador vírgula: ele nos permite comprimir
// duas expressões (i++ e j--) em uma instrução (o laço for) que espera uma.
for (var i = 0, j = 10; i < j; i++, j--) console.log(i + j);
