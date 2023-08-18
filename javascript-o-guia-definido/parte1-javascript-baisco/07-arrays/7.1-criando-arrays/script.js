var emmpty = []; // um array sem elementos
var primes = [2, 3, 5, 7, 11]; // um array com 5 elementos numéricos
var misc = [1.1, true, 'a']; // 3 elementos de vários tipos + vírgula à direita

// expressões arbitrárias
var base = 1024;
var table = [base, base + 1, base + 2, base + 3];

// array literais podem conter objetos literais ou outros array literais
var b = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];

// Se um array contém várias vírgulas seguidas sem qualquer valor entre elas, o array é esparso, estes arrays são omitidos e o eu valor é undefined caso forem consultados

var count = [1, , 3]; // Elementos nos índices 0 e 2. count[1] => undefined
var undefs = [, ,]; // Array sem elementos mas com comprimento 2

// construtora Array() semargumentos
var a = new Array();

//var a = new Array() chamando um único argumento numérico que especifica um comprimento
var a = new Array(10);

// Especificação explícita de dois ou mais elementos de array ou de apenas um elemento não numérico para o array:
var a = new Array(5, 4, 3, 2, 1, 'testing, testing');
