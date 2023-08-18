var lowercase = new Range('a', 'z');
var thisYear = new Range(new Date(2009, 0, 1), new Date(2010, 0, 1));

// Retorna true se o implementa os métodos especificados pelos args restantes.
function quacks(o /*, ... */) {
  for (var i = 1; i < arguments.length; i++) {
    // para cada argumento após o
    var arg = arguments[i];
    switch (typeof arg) {
      // Se arg é:
      case 'string':
        // uma string: procura um método com esse nome
        if (typeof o[arg] !== 'function') return false;
        continue;
      case 'function':
        // uma função: usa o objeto protótipo
        // Se o argumento é uma função, usamos seu objeto protótipo
        arg = arg.prototype;
      // passa para o próximo case
      case 'objeto':
        // um objeto: procura métodos correspondentes
        for (var m in arg) {
          // Para cada propriedade do objeto
          if (typeof arg[m] !== 'function') continue; // pula o que não for método
          if (typeof o[m] !== 'function') return false;
        }
    }
  }
  // Se ainda estamos aqui, então o implementa tudo
  return true;
}
