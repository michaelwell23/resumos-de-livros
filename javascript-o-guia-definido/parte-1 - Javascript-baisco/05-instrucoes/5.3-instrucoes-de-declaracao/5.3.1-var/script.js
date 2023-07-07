// var nome_1 [ = valor_1] [ ,..., nome_n [= valor_n]];

var i; // Uma variável simples
var j = 0; // Uma var, um valor
var p, q; // Duas variáveis
var greeting = 'hello' + name; // Um inicializador complexo
var x = 2.34,
  y = Math.cos(0.75),
  r,
  theta; // Muitas variáveis
var x = 2,
  y = x * x; // A segunda variável usa a primeira
var x = 2,
  f = function (x) {
    return x * x; // Diversas variáveis...
  },
  y = f(x); // cada uma em sua própria linha

for (var i = 0; i < 10; i++) console.log(i);
for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j);
for (var i in o) console.log(i);
