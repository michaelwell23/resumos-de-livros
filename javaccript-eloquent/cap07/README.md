# PROJETO - VIDA ELETRÔNICA

O projeto neste capítulo é contruir um ecossistema virtual, um mundo pequeno povoado com criaturas que se movem e luta pela sobrevivência.

---

## 7.1 - DEFINIÇÃO

Um mundo pode ser definido com uma matriz de _Strings_ que estabelece um _grid_ do mundo usando um personagem por metro quadrado.

```js
var plan = [
  '############################',
  '#      #    #      o      ##',
  '#                          #',
  '#          #####           #',
  '##         #   #    ##     #',
  '###           ##     #     #',
  '#           ###      #     #',
  '#   ####                   #',
  '#   ##       o             #',
  '# o  #         o       ### #',
  '#    #                     #',
  '############################',
];
```

Os caracteres "#" representam as paredes e rochas, e os personagens "O" representam os bichos. Os espaços como você já deve ter pensado é o espaço vazio. Um plano de matriz pode ser usada para criar um objeto de mundo. Tal objeto mantém o controle do tamanho e do conteúdo do mundo. Ele tem um método toString , que converte o mundo de volta para uma sequência de impressão (similar ao plano que foi baseado) para que possamos ver o que está acontecendo lá dentro. O objeto do mundo também tem um método por sua vez que permite que todos os bichos podem darem uma volta e atualizar o mundo para terem suas ações.

---

## 7.2 - REPRESENTANDO O ESPAÇO

A grid modela o mundo com uma largura e altura fixa. Os quadrados são identificados pela suas coordenadas x e y. Podemos usar um tipo simples, Vector para representar esses pares de coordenadas.

```js
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
};
```

Em seguida, temos um tipo de objeto que é o modelo da grid. A grid é uma parte do mundo, um objeto separado para manter as coisas mais simples. Para armazenar um valor a grid podemos usar um array de arrays tendo duas propriedades de acesso para chegar a um quadrado específico.

```js
var grid = [
  ['top left', 'top middle', 'top right'],
  ['bottom left', 'bottom middle', 'bottom right'],
];
console.log(grid[1][2]);
// → bottom righ
```

Ou podemos usar uma única matriz com largura x altura e decidir que o elemento (x,y), é encontrado na posição x + (y \* largura) na matriz.

```js
var grid = [
  'top left',
  'top middle',
  'top right',
  'bottom left',
  'bottom middle',
  'bottom right',
];
console.log(grid[2 + 1 * 3]);
// → bottom right
```

A segunda representação torna as coisas muito mais fácil para criar a matriz. Ao chamar o construtor de array com um único argumento, ele cria uma nova matriz vazia com o comprimento que foi passado de parâmetro. Podemo definir o objeto grid usando alguns métodos básicos:

```js
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function (vector) {
  return (
    vector.x >= 0 &&
    vector.x < this.width &&
    vector.y >= 0 &&
    vector.y < this.height
  );
};
Grid.prototype.get = function (vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function (vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};
```

Aqui está ume exemplo trivial do teste:

```js
var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1, 1)));
// → undefined
grid.set(new Vector(1, 1), 'X');
console.log(grid.get(new Vector(1, 1)));
// → X
```

---

## 7.3 - A INTERFACE DA PROGRAMAÇÃO DOS BICHOS

Devemos especificar quais os objetos bischs que estarão vivendo no mundo. Isso funciona da seguinte forma: cada bicho é um objeto e tem um método de ação que quando chamado retorna uma ação. Uma ação é um objeto com uma propriedade de tipo, que dá nome a ação que o bicho terá. A ação pode também conter informação extra de alguma direção que o bicho possa se mover.

Quando o método act é chamado o objeto de verificação permite que o bicho inspecione seus arredores. Nós vamos nomear oito quadrados vizinhos para ser as coordenadas: "n" para norte, "ne" para nordeste e assim por diante. Aqui está o objeto, vamos utilizar para mapear os nomes das direções para coordenar os offsets:

```js
var directions = {
  n: new Vector(0, -1),
  ne: new Vector(1, -1),
  e: new Vector(1, 0),
  se: new Vector(1, 1),
  s: new Vector(0, 1),
  sw: new Vector(-1, 1),
  w: new Vector(-1, 0),
  nw: new Vector(-1, -1),
};
```

Aqui é um bicho simples que segue apenas seu nariz até que ela atinja um obstáculo e depois salta para fora em uma direção aleatória:

```js
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
var directionNames = 'n ne e se s sw w nw'.split(' ');
function BouncingCritter() {
  this.direction = randomElement(directionNames);
}
BouncingCritter.prototype.act = function (view) {
  if (view.look(this.direction) != ' ') this.direction = view.find(' ') || 's';
  return { type: 'move', direction: this.direction };
};
```

A função auxiliar randomElement simplesmente pega um elemento aleatório de uma matriz usando Math.random para obter um índice aleatório. Para escolher uma direção aleatória o construtor de BouncingCritter chama randomElement em uma matriz de nomes de direção. O “|| "s"” no método de ação serve para impedir que this.direction obtenha um valor nulo para o bicho que está preso em um espaço vazio em torno dele

---

## 7.4 - O OBJETO DO MUNDO
