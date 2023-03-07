// funções com argumentos em outras funções
function noisy(f) {
  return function (arg) {
    console.log('calling with', arg);
    var val = f(arg);
    console.log('called with', arg, '- got', val);
    return val;
  };
}

// utilizando o método apply
function transparentWrapping(f) {
  return function () {
    return f.apply(null, arguments);
  };
}
