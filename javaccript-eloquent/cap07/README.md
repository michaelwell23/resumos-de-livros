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

Agora podemos começar a fazer o objeto mundo. O contrutor tem umplano e uma legenda como argumentos. A legenda pe um objeto que nos diz o que cada personagem significa no mapa. Ela contém um contrutor para cara personagem, exceto o caractere de espaço que sempre se refere como null sendo este o valor que usaremos para representar o espaço vazio.

```js
function elementFromChar(legend, ch) {
  if (ch == ' ') return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}
function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;
  map.forEach(function (line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
  });
}
```

Em `elementFromChar` criamos uma instância do tipo correto, observando o contrutor do caráter aplicando um novo para ele. Em seguida, é adicionado uma propriedade `originChar` tornando mais fácil de descobrir em qual personagem o elemento foi originalmente criado. Precisamos da propriedade `oiriginChar` quando implementamos o método `toString` no mundo. Este método constrói uma sequência de mapeamento de estado atual do mundo através da ralização de um ciclo de duas dimensões sobre os quadrados na `grid`.

```js
function charFromElement(element) {
  if (element == null) return ' ';
  else return element.originChar;
}
World.prototype.toString = function () {
  var output = '';
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += '\n';
  }
  return output;
};
```

A parede é um objeto simples que é usado apenas para ocupar espaço e não tem nenhum método de ação.

```js
function wall() {}
```

Vamos criar um objeto Mundo com base no plano passado no início do capítulo, em seguida iremos chamar
toString sobre ele.

```js
var world = new World(plan, { '#': Wall, o: BouncingCritter });
// console.log(world.toString());
//→ ############################
//  #      #    #      o      ##
//  #                          #
//  #          #####           #
//  ##         #   #    ##     #
//  ###           ##     #     #
//  #           ###      #     #
//  #   ####                   #
//  #   ##       o             #
//  # o  #         o       ### #
//  #    #                     #
//  ############################
```

---

## 7.5 - this E SEU ESCOPO

O construtor do mundo contém uma chamada de forEach. Cada chamada de função recebe o seu próprio escopo de modo que o escopo presente na função interna não se refere ao objeto externo recém-construido. Quando a função não é chamada como um método isso refere ao objeto global. Podemos criar uma variável local na função exterior da grid, onde a função interna tera acesso a ela. Isso é um erro de design no JavaScript. Enquanto isso existe soluções alternativas, uma delas é usar o método de _bind_ que nos permite oferecer uma chamada explícita para o objeto.

```js
var test = {
  prop: 10,
  addPropTo: function (array) {
    return array.map(
      function (elt) {
        return this.prop + elt;
      }.bind(this)
    );
  },
};
console.log(test.addPropTo([5])); // → [15]
```

A função mapeia um array e retorna o valor do prop que esta dentro do objeto test somado ao resultado do valor de um elemento do array. A maioria dos métodos que mapeiam matrizes tais como `forEach` e `map`, tê um segundo argumento opcional que pode ser usado para fornecer um escopo para dentro do bloco de interação.

```js
var test = {
  prop: 10,
  addPropTo: function (array) {
    return array.map(function (elt) {
      return this.prop + elt;
    }, this); // ← no bind
  },
};
console.log(test.addPropTo([5])); // → [15]
```

Em nossas próprias funções de interações podemos apoiar tal parâmetro de contexto enviando um segundo argumento no bloco. Por exemplo, aqui no método forEach para o nosso tipo de grid , chamaremos uma determinada função para cada elemento da grid que não seja nulo ou indefinido:

```js
Grid.prototype.forEach = function (f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null) f.call(context, value, new Vector(x, y));
    }
  }
};
```

---

## 7.6 - DANDO VIDA

O próximo passo é escrver um método para o objeto mundo que dá aos bixõs a chance de movimento. Ele vai passar por cima da grid usando o método `forEach` que acabamos de definir a procura de objetos com um método `act`. Quando ele encontra um ele chama o método para obter uma ação e realiza a ação quando ela for válida. O problema com essa abordagem é que se deixarmos as criaturas se mover livremente, eles podem se mover para um quadrado que não existe, e nós vamos permitir que eles se mova novamente quando estiver dentro do quadrado vazio. Assim mantemos uma variedade de criaturas que já sumiram ao invés de apenas ignorarmos.

```js
World.prototype.turn = function () {
  var acted = [];
  this.grid.forEach(function (critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this);
};
```

Podemos usar o contexto como segundo parâmentro no método `forEach` para se a referência da _grid_ para conseguirmos acessar corretamente as funções internas.

```js
World.prototype.letAct = function (critter, vector) {
  var action = critter.act(new View(this, vector));
  if (action && action.type == 'move') {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};
World.prototype.checkDestination = function (action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest)) return dest;
  }
};
```

Em primeiro lugar, nós simplesmente pedimos para o bicho se mover, passando um objeto de exibição que tem informações sobre o mundo e a posição atual do bicho naquele mundo. O método retorna alguma tipo de ação. Se o tipo de ação não é um "move" ele será ignorado. Se é "move" ele terá uma propriedade de direção que se refere a um sentido válido caso o quadrado na direção referida estiver vazio. Estes dois métodos não fazem a parte da interface externa de um objeto do mundo. Eles são um detalhe interno. Algumas línguas fornece maneiras de declarar explicitamente certos métodos e propriedades privadas e sinalizar um erro quando você tenta usá-los de fora do objeto. JavaScript não faz isso então você vai ter que confiar em
alguma outra forma de comunicação para descrever o que faz ou não parte da interface de um objeto. Às vezes ele pode ajudar a usar um esquema de nomes para distinguir entre as propriedades externas e internas, por exemplo, prefixando todas as propriedades internas com um caractere sublinhado( \_ ). Isso fará com que os usos acidentais de propriedades que não fazem parte da interface de um objeto fique mais fácil de detectar.

```js
function View(world, vector) {
  this.world = world;
  this.vector = vector;
}
View.prototype.look = function (dir) {
  var target = this.vector.plus(directions[dir]);
  if (this.world.grid.isInside(target))
    return charFromElement(this.world.grid.get(target));
  else return '#';
};
View.prototype.findAll = function (ch) {
  var found = [];
  for (var dir in directions) if (this.look(dir) == ch) found.push(dir);
  return found;
};
View.prototype.find = function (ch) {
  var found = this.findAll(ch);
  if (found.length == 0) return null;
  return randomElement(found);
};
```

O método observa e descobre se as coordenadas que estamos visitando está dentro da grid e se o personagem correspondente ao elemento.

---

## 7.7 - O MOVIMENTO

Nós instanciamos o objeto mundo antes. Agora que nós adicionamos todos os métodos necessários, devemos
fazer os movimentos dos elementos no mundo.

```js
for (var i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}
// → … five turns of moving critters
```

Imprimir várias cópias do mundo é uma forma bastante desagradável para movimentar um mundo. É por isso que podemo utilizar a função [animateWorld](./exemplo-projeto/animateWorld.js) que executa uma animação, movendo o mundo com três voltas por segundo até que você aperte o botão de stop.

```js
animateWorld(world); // → … life!
```

A implementação do _animateWorld_ parece algo misterioso agora, mas depois que você ler os capítulos deste livro que discutem a integração JavaScript em navegadores web, ele não sera tão mágico.

---

## 7.8 - MAIS FORMAS DE VIDA

Precisamos ser capazes de calcular as direções com a bússola. As direções são modelados por um conjunto de String , precisamos definir nossa própria operação( dirPlus ) para calcular as direções relativas. Então _dirPlus("n", 1)_ significa 45 graus no sentido horário para norte quando retornar "ne". Da mesma forma _dirPlus("s", -2)_ significa 90 graus para a esquerda ao sul retornando leste.

```js
function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

function WallFollower() {
  this.dir = 's';
}
WallFollower.prototype.act = function (view) {
  var start = this.dir;
  if (view.look(dirPlus(this.dir, -3)) != ' ')
    start = this.dir = dirPlus(this.dir, -2);
  while (view.look(this.dir) != ' ') {
    this.dir = dirPlus(this.dir, 1);
    if (this.dir == start) break;
  }
  return { type: 'move', direction: this.dir };
};
```

O que complica é que um bicho pode acabar no meio de um espaço vazio, quer como a sua posição de partida ou como um resultado de caminhar em torno de um outro bicho. Se aplicarmos a abordagem que acabei de descrever no espaço vazio o bicho vai apenas virar à esquerda a cada passo correndo em círculos. Portanto, há uma verificação extra(instrução if ) no inicio da digitalização para a esquerda para analisar se o bicho acaba de passar algum tipo de obstáculo, no caso, se o espaço atrás e à esquerda do bicho não estiver vazio. Caso contrário, o bicho começa a digitalizar diretamente à frente de modo que ele vai andar em linha reta ate um espaço vazio. E finalmente há um teste comparando this.dir para começar após cada passagem do laço para se certificar de que o circuito não vai correr para sempre quando o bicho está no muro ou quando o mundo esta lotados de outros bichos não podendo achar quadrados vazios. Este pequeno mundo demonstra as criaturas na parede:

```js
animateWorld(
  new World(
    [
      '############',
      '#     #    #',
      '#   ~    ~ #',
      '#  ##      #',
      '#  ##   o###',
      '#          #',
      '############',
    ],
    { '#': Wall, '~': WallFollower, o: BouncingCritter }
  )
);
```

---

## 7.9 - UMA SITUAÇÃO MAIS REALISTA

Para tornar a vida em nosso mundo mais interessante vamos adicionar os conceitos de alimentação e reprodução. Cada coisa viva no mundo ganha uma nova propriedade, a energia, a qual é reduzida por realizar ações e aumenta comendo alguma coisas. Quando o bicho tem energia suficiente ele pode se reproduzir, gerando um novo bicho da mesma espécie. Para manter as coisas simples; os bichos em nosso mundo se reproduzem assexuadamente ou seja por si so.

Se bichos só se movimentar e comer uns aos outros o mundo em breve ira se sucumbir na lei da entropia crescente, ficando sem energia e tornando um deserto sem vida. Para evitar que isso aconteça(muito rapidamente pelo menos) adicionaremos plantas para o mundo. As plantas não se movem

Para fazer este trabalho vamos precisar de um mundo com um método diferente de letAct

Uma solução é usar herança. Criamos um novo construtor, LifelikeWorld , cujo seu protótipo é baseado no protótipo global, mas que substitui o método letAct . O novo método letAct delega o trabalho do que realmente deve executar uma ação para várias funções armazenados no objeto actionTypes.

```js
function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);
var actionTypes = Object.create(null);
LifelikeWorld.prototype.letAct = function (critter, vector) {
  var action = critter.act(new View(this, vector));
  var handled =
    action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, critter, vector, action);
  if (!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0) this.grid.set(vector, null);
  }
};
```

O novo método letAct verifica primeiro se uma ação foi devolvido, então se a função manipuladora para este tipo de ação existir, o resultado deste manipulador sera true , indicando que ele tratou com sucesso a ação.

Se a ação não funcionou por algum motivo a ação padrão é que a criatura simplesmente espere. Perde um quinto de sua energia e se o seu nível de energia chega a zero ou abaixo a criatura morre e é removido da grid.

---

## 7.10 - MANIPULADORES DE AÇÕES
