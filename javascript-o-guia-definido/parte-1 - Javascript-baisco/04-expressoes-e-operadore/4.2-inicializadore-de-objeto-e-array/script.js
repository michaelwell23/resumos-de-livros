[]; // UM array vazio: nenhuma expressão dentro dos colchetes significa nenhum elemento
[1 + 2, 3 + 4]; // um array com 2 elementos. O primeiro elemento é o 3, o segundo é 7;

// arrays aninhados
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Elementos indefinidos
var sparseArray = [1, , , , , 5];

// expressões inicializadoras de objeto
var p = { x: 2.3, y: -1.2 }; // um objeto com 2 propriedades
var q = {}; // um objeto vazio sem propriedades
q.x = 2.3;
q.y = -1.2; // Agora q tem as mesmas propriedades de p

// Objetos literais aninhados
var rectagle = { upperLeft: { x: 2, y: 2 }, lowerRight: { x: 4, y: 5 } };

var side = 1;
var square = {
  upperLeft: { x: p.x, y: p.y },
  lowerRight: { x: p.x + side, y: p.y + side },
};
