// estrutura if
if (expressão) instrução;

if (usename == null)
  // Se username é null ou undefined
  username = 'John Doe'; // o define

// Se username é null, undefined, false, 0, "" ou NaN, fornece a ele um novo valor
if (!username) username = 'John Doe';

if (!address) {
  address = ' ';
  message = 'Please specify a mailing address.';
}

// estrutura do if else
if (expressao) instrucao1;
else instrucao2;

if (n == 1) console.log('You have 1 new message');
else console.log('You have ' + n + ' new messages.');

i = j = 1;
k = 2;
if (i == k)
  if (j == k) console.log('i equals k');
  else console.log("i doesn't equal j"); // ERRADO!!

if (i == j) {
  if (j == k) console.log('i equals k');
  else console.log("i doesn't equal j"); // OPA!
}

if (i == j) {
  if (j == k) {
    console.log('i equals k');
  }
} else {
  // Que diferença faz a posição de uma chave!
  console.log("i doesn't equal j");
}
