function sayMessage(message) {
  console.log(message);
}
function sayMessage() {
  console.log('Default message');
}
sayMessage('Hello!'); // exibe "Default message"

// EXEMPLO ACIMA UTILIZANDO OBJETO
var sayMessage2 = new Function('message', 'console.log(message);');
sayMessage2 = new Function('console.log("Default message");');
sayMessage2('Hello!'); // exibe "Default message"

// EEMPLO 03
function sayMessage3(message) {
  if (arguments.length === 0) {
    message = 'Default message';
  }
  console.log(message);
}
sayMessage3('Hello!'); // exibe "Hello!"
