var d = new Date(); // Cria um novo objeto com a construtora Date()
d instanceof Date; // É avaliado como true; d foi criado com Date()
d instanceof Object; // É avaliado como true; todos os objetos são instâncias de Object
d instanceof Number; // É avaliado como false; d não é um objeto Number
var a = [1, 2, 3]; // Cria um array com sintaxe de array literal
a instanceof Array; // É avaliado como true; a é um array
a instanceof Object; // É avaliado como true; todos os arrays são objetos
a instanceof RegExp; // É avaliado como false; os arrays não são expressões regulares
