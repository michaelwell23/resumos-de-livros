// O código a seguir demonstra como é fácil escrever funções geradoras e iterar pelos valores que elas geram:
// Define uma função geradora para iterar por um intervalo de inteiros
function range(min, max) {
  for(let i = Math.ceil(min); i <= max; i++) yield i;
}
// Chama a função geradora para obter um gerador e, então, o itera.
for (let n in range(3, 8)) console.log(n); // Imprime números 3 a 8.

// As funções geradoras nunca precisam retornar. Na verdade, um exemplo canônico é o uso de um gerador para gerar os números de Fibonacci:
// Uma função geradora que gera a sequência de Fibonacci
function fibonacci() {
  let x = 0,
    y = 1;
  while (true) {
    yield y;
    [x, y] = [y, x + y];
  }
}
// Chama a função geradora para obter um gerador.
f = fibonacci();
// Usa o gerador como iterador, imprimindo os 10 primeiros números de Fibonacci.
for (let i = 0; i < 10; i++) console.log(f.next());

//  Um pipeline de geradores
// Um gerador para gerar as linhas da string s uma por vez.
// Note que não usamos s.split(), pois isso processaria a string
// inteira de uma vez, alocando um array, e queremos ser preguiçosos.
function eachline(s) {
let p;
while((p = s.indexOf('\n')) != -1) {
yield s.substring(0,p);
s = s.substring(p+1);
}
if (s.length > 0) yield s;
}
// Uma função geradora que gera f(x) para cada elemento x da iterável i
function map(i, f) {
for(let x in i) yield f(x);
}
// Uma função geradora que gera os elementos de i para os quais f(x) é verdadeira
function select(i, f) {
for(let x in i) {
if (f(x)) yield x;
}
}
// Começa com uma string de texto a processar
let text = " #comment \n \n hello \nworld\n quit \n unreached \n";
// Agora constrói um pipeline de geradores para processá-la.
// Primeiramente, decompõe o texto em linhas
let lines = eachline(text);
// Em seguida, corta o espaço em branco do início e do fim de cada linha
let trimmed = map(lines, function(line) { return line.trim(); });
// Por fim, ignora linhas em branco e comentários
let nonblank = select(trimmed, function(line) {
return line.length > 0 && line[0] != "#"
});
// Agora extrai as linhas cortadas e filtradas do pipeline e as processa,
// parando quando vemos a linha "quit".
for (let line in nonblank) {
if (line === "quit") break;
console.log(line);
}

// Uma função geradora que conta a partir de um valor inicial.
// Usa send() no gerador para especificar um incremento.
// Usa throw("reset") no gerador para zerar o valor inicial.
// Este é apenas um exemplo; esse uso de throw() é um estilo ruim.
function counter(initial) {
  let nextValue = initial;
  // Começa com o valor inicial
  while(true) {
  try {
  let increment = yield nextValue;
  // Gera um valor e obtém o incremento
  if (increment)
  // Se enviamos um incremento...
  nextValue += increment;
  // ...então o utiliza.
  else nextValue++;
  // Caso contrário, incrementa por 1
  }
  catch (e) {
  // Chegamos aqui se alguém chama
  if (e==="reset")
  // throw() no gerador
  nextValue = initial;
  else throw e;
  }
  }
  }
  let c = counter(10);   //  Cria o gerador em 10
  console.log(c.next());   //   Imprime 10
  console.log(c.send(2));   //   Imprime 12
  console.log(c.throw("reset"));   //   Imprime 10

