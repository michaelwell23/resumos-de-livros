// Retorna a número complexo que é o conjugado complexo deste.
Complex.prototype.conj = function () {
  return new Complex(this.r, -this.i);
};

if (!Function.prototype.bind) {
  Function.prototype.bind = function (o /*, args */) {
    // O código do método bind fica aqui...
  };
}

// Chama a função f muitas vezes, passando o número da iteração
// Por exemplo, para imprimir "hello" 3 vezes:
//
var n = 3;
//
n.times(function (n) {
  console.log(n + ' hello');
});
Number.prototype.times = function (f, context) {
  var n = Number(this);
  for (var i = 0; i < n; i++) f.call(context, i);
};
// Define o método String.trim() de ES5 se ainda não existir nenhum.
// Este método retorna uma string com espaço em branco removido do início e do fim.
String.prototype.trim =
  String.prototype.trim ||
  function () {
    if (!this) return this;
    // Não altera a string vazia
    return this.replace(/^\s+|\s+$/g, '');
    // Mágica de expressão regular
  };
// Retorna o nome de uma função. Se ela tem uma propriedade name (não padronizado), a
//utiliza. Caso contrário, converte a função em uma string e extrai o nome desta string.
// Retorna uma string vazia para funções não nomeadas como ela mesma.
Function.prototype.getName = function () {
  return this.name || this.toString().match(/function\s*([^(]*)\(/)[1];
};
