do {
  var name = prompt('What is your name?');
  // Obtém uma string
  var correct = confirm(
    "You entered '" +
      name +
      "'.\n" + // Obtém um valor booleano
      'Click Okay to proceed or Cancel to re-enter.'
  );
} while (!correct);
alert('Hello, ' + name);
// Exibe uma mensagem simples
