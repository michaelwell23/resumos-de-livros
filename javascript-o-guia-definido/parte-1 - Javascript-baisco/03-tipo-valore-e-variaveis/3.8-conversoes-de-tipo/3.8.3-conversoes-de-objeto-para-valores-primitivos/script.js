({ x: 1, y: 2 }).toString(); // => "[object Object]"

[1, 2, 3].toString(); // => "1,2,3"
(function (x) {
  false(x);
}).toString(); // => "function(x) { \n  f(x);\n}"
/\d+/g.toString(); // => /\\d+/g

var d = new Date(2010, 0, 1); // 1º de janeiro de 2010, (hora do Pacífico)
d.valueOf(); // => 1262332800000

var now = new Date(); // Cria um objeto Date
typeof (now + 1); // => "string": + converte datas em strings
typeof (now - 1); // => "number": – usa conversão de objeto para número
now == now.toString(); // => verdadeiro: conversões de string implícitas e explícitas
now > now - 1; // => verdadeiro: > converte um objeto Date em número
