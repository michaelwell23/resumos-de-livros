// Conforme o nome lembra, o principal objetivo de bind() é vincular uma função a um objeto. Quando o método bind() é chamado em uma função f e um objeto o é passado, o método retorna uma nova função. Chamar a nova função (como função) chama a função original f como método de o . Os argumentos passados para a nova função são passados para a função original.
function f(y) {
  return this.x + y;
} // Esta função precisa ser vinculada
var o = { x: 1 }; // Um objeto no qual vincularemos
var g = f.bind(o); // Chamar g(x) chama o.f(x)
g(2); // => 3

// Retorna uma função que chama f como método de o, passando todos os seus argumentos.
function bind(f, o) {
  if (f.bind) return f.bind(o);
  // Usa o método bind, se houver um
  else
    return function () {
      // Caso contrário, vincula-o como segue
      return f.apply(o, arguments);
    };
}

// Ele também faz aplicação parcial: os argumentos passados para bind() após o primeiro são vinculados junto com o valor de this . A aplicação parcial é uma técnica comum na programação funcional e às vezes é chamada de currying.
var sum = function (x, y) {
  return x + y;
}; // Retorna a soma de 2 args
// Cria uma nova função como sum, mas com o valor de this vinculado a null
// e o 1º argumento vinculado a 1. Essa nova função espera apenas um arg.
var succ = sum.bind(null, 1);
succ(2); // => 3: x está vinculado a 1 e passamos 2 para o argumento y
function f(y, z) {
  return this.x + y + z;
}
// Outra função que soma
var g = f.bind({ x: 1 }, 2);
// Vincula this e y
g(3);
// => 6: this.x está vinculado a 1, y está vinculado a 2 e z é 3

if (!Function.prototype.bind) {
  Function.prototype.bind = function (o /*, args */) {
    // Salva os valores de this e arguments em variáveis para que possamos
    // usá-los na função aninhada a seguir.
    var self = this,
      boundArgs = arguments;
    // O valor de retorno do método bind() é uma função
    return function () {
      // Constrói uma lista de argumentos, começando com qualquer arg passado
      // para bind após o primeiro, e segundo depois desse todos os args
      // passados para essa função.
      var args = [],
        i;
      for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
      for (i = 0; i < arguments.length; i++) args.push(arguments[i]);
      // Agora chama self como método de o, com esses argumentos
      return self.apply(o, args);
    };
  };
}
