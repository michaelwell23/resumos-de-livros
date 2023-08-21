if (element.addEventListener) {
  // Testa esse método W3C antes de usá-lo
  element.addEventListener('keydown', handler, false);
  element.addEventListener('keypress', handler, false);
} else if (element.attachEvent) {
  // Testa esse método IE antes de usá-lo
  element.attachEvent('onkeydown', handler);
  element.attachEvent('onkeypress', handler);
} else {
  // Caso contrário, recorre a uma técnica suportada universalmente
  element.onkeydown = element.onkeypress = handler;
}
