// Um método nada mais é do que uma função JavaScript armazenada em uma propriedade de um objeto. Se você tem uma função f e um objeto o , pode definir um método chamado m de o com a linha a seguir:
o.m = f;

// Tendo definido o método m() do objeto o , chame-o como segue:
o.m();

// Ou então, se m() espera dois argumentos, você pode chamá-lo como segue:
o.m(x, y);

var calculator = {
  // Um objeto literal
  operand1: 1,
  operand2: 1,
  add: function () {
    // Note o uso da palavra-chave this para se referir a esse objeto.
    this.result = this.operand1 + this.operand2;
  },
};
calculator.add();
// Uma chamada de método para calcular 1+1.
calculator.result;
// => 2

o['m'](x, y); // Outra maneira de escrever o.m(x,y).
a[0](z); // Também é uma chamada de método (supondo que a[0] seja uma função).

customer.surname.toUpperCase(); // Chama método em customer.surname
f().m(); // Chama o método m() no valor de retorno de f()

rect.setSize(width, height);
setRectSize(rect, width, height);

var o = {
  // Um objeto o.
  m: function () {
    // Método m do objeto.
    var self = this; // Salva o valor de this em uma variável.
    console.log(this === o); // Imprime "true": this é o objeto o.
    f(); // Agora chama a função auxiliar f().
    function f() {
      // Uma função aninhada f
      console.log(this === o); // "false": this é global ou undefined
      console.log(self === o); // "true": self é o valor do this externo.
    }
  },
};
o.m(); // Chama o método m no objeto o.
