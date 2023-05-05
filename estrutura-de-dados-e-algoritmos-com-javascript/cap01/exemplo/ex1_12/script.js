// declaração de função
function sayHello() {
  console.log('Hello!');
}

sayHello();

// funções com argumentos
function output(text) {
  console.log(text);
}

output('Hello!');
output('Hello!', 'Other text'); // passando diversos argumentos na chamada, só o primeiro será executado

// returno de valores na função
function sum(num1, num2) {
  return num1 + num2;
}

var result = sum(1, 2); // armaenando valor em uma variável
output(result); // a saída é 3
