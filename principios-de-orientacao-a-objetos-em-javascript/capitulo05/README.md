# HERANÇA

Nas linguagens orientadas a objetos tradicionais as classes herdam propriedades de outra classes. Em JavaScript, a herança pode ocorrer entre objetos que não tenham uma estrutura semelhante a classes que define a sua relação. O sistema usado na herança é feito por meio dos prorótipos.

---

## CADEIA DE PROTÓTIPOS E Object.prototype

A abordagem que o JavaScript usa para lidar com heranças chama-se `cadeia de protótipos` ou `herança prototípica`. Como o protótipo também é um objeto, ele tem seu próprio protótipo e herda suas propriedades. Essa é a cadeia de protótipos: Um objeto herda de seu protótipo, enquanto esse protótipo, por usa vez, herda de seu protótipo, e assim por diante. Todos os objetos, incluindo aqueles que são definidos automaticamente herdam de `Object`. Mais especificamente, todos os objetos herdam de `Object.prototype`

```js
var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};

var prototype = Object.getPrototypeOf(book);
console.log(prototype === Object.prototype); // true
```

No caso acima, `book` tem um protótipo igual a `Object.prototype. Nenhum código adicional é necessário para que isso aconteça, pois esse é o comportamento-padrão quando novos objetos são criados.

### MÉTODOS HERDADOS DE Object.prototype

Muitos métodos estão definidos em `Object.prototype` e, portanto, são herdados por todoso os demais objetos. Esses métodos são:

- `hasOwnProperty()`: Determina se uma propriedade própria com o nome especificado existe.
- `propertyIsEnumerable()`: Determina se uma propriedade própria é enumerável.
- `isPrototypeOf())`: Determina se o objeto é protótipo de outro.
- `valueOf()`: Retorna a representaão do valor do objeto.
- `toString()`: Retorna uma representação do objeto em forma de string.

Esses cinco métodos estão presentes em todos os objetos por meio de herança. Os dois ultimos são importante quando quiser que os objetos funcionem de forma consistente.

#### valueOf()

O método é chamado sempre que um operador é usado em um objeto. Por padrão, `valueOf()` restorna a instância do objeto. Os tipos wrapper primitivo sobrescrevem `valueOf()` que uma string retornado para `String`, um booleando retornado para `Boolean` e um número é retornado para `Number`. Da mesma meneira, método valueOf do objeto `Date` retorna o instante no tempo em milissegundos, permitindo a comparação entre datas.

```js
var now = new Date();
var earlier = new Date(2010, 1, 1);
console.log(now > earlier); //true
```

No exemplo, quando o operador maior é usado, o método `valueOf()` é chamado em ambos os objetos antes de a comparação ser executada. Será sempre possível definir o seu próprio método `valueOf()` se seus objetos tiverem o propśito de ser usados com operadores. Se um método for definido, tenha em mente que não irá alterar o modo como os operadores funcionam, mas apenas o valor a ser usado com o comportamento-padrão do operador.

#### toString()

O método `toString()` é chamado como fallback sempre que o `valueOf()` retorna um valor de referência no lugar de um valor primitivo. Ele também será chamado implicitamente em valores primitivos sempre que o JavaScript estiver esperando uma string. Quando uma string for usada como um operando da operação de adição, o outro operando será automaticamente convertido em uma string. Se o outro operando for um valor primitivo, ele será convertido para sua representação em forma de string, mas se ele for um valor de referência, `valueOf()`será chamado. Se o `valueOf()` retornar um valore de referência, `toString()` será chamado e o valor retornado será usado.

```js
var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};
var message = 'Book = ' + book;
console.log(message); // "Book = [object Object]"
```

Como `book` é um objeto, seu método `toString()` é chamado. Esse método é herdado de `Object.prototype` e retorna o valor-padrão "[object Object] na maioria das engines de JavaScript. Se você estiver satisfeito com esse valor, não haverá necessidade de alterar o métod `toString()` de seu objeto. Ás vezes, é útil definir o método `toString()` para que as conversões retorne um valor que ofereça mais informações.

```js
var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
  toString: function () {
    return '[Book ' + this.title + ']';
  },
};
var message = 'Book = ' + book;
// "Book = [Book Princípios de orientação a objetos em JavaScript]"
console.log(message);
```

O código acima, define o método de forma personalizado para book, que tem como retorno um valor mais útil que a versão herdada. Não é preciso se preocupar com a definição de um método `toString()` personalizado, mas é bom saber que isso é possível quando necessário.

### MODIFICANDO Object.prototype

Todos os objetos herdam de `Object.prototype` por padrão, portanto mudanças em `Object.prototype` afetam todos so objetos. Assim como foi recomendado no capítulo 4 a não modificar os protótipos de objetos prontos, esse conselho é reforçado para os `Object.prototype`.

```js
Object.prototype.add = function (value) {
  return this + value;
};
var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};
console.log(book.add(5)); // "[object Object]5"
console.log('title'.add('end')); // "titleend"// em um web browser
console.log(document.add(true)); // "[object HTMLDocument]true"
console.log(window.add(5)); // "[object Window]5
```

Adicionar `Object.prototype.add()` faz com que todos os objetos tenham um método `add()`, não importa se isso faz sentido ou não. Outro aspecto desse problema envolve a adição de propriedades enumeráveis em `Object.prototype`.

```js
var empty = {};
for (var property in empty) {
  console.log(property);
}
```

No caso, um objeto vazio irá exibir "add" como propriedade porque ela existe no protótipo e é enumerável. COnsiderando a frequência com que a estrutura `for-in` é usada em JavaScript, modificar `Object.prototype` com propriedades enumeráveis tem o potencial de afetar muito código, o recomendado é sempre usar `hasOwnProperty()` em loops `for-in`.

```js
var empty = {};
for (var property in empty) {
  if (empty.hasOwnProperty(property)) {
    console.log(property);
  }
}
```

Se, por um lado, essa abordagem é e ciente contra possíveis propriedades indesejadas dos protótipos, por outro, ela também limita o uso do loop for-in apenas às propriedades próprias, que pode ou não ser o que você
quer. Sua melhor aposta para ter o máximo de exibilidade é não modificar Object.prototype.

---

## HERANÇA ENTRE OBJETOS

O timpo mais simples de herança é a herança entre objetos. Só é preciso especificar que objeto de ser o [[Prototype]] do novo objeto. Inicialmente os objetos literais têm seu [[Prototype]] definidos como `Object.prototype`, mas [[Prototype]] também pode ser explicitamente espeficado no método `Object.create()`. O `Object.create()` aceita dois argumentos: O primeiro é o objeto que corresponderá ao [[Prototype]] do novo objeto. E o segundo opcional é um objeto contendo descritores de propriedade no mesmo formato usado por `Object.definePropoerties()`.

```js
var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};

// é o mesmo que:
var book2 = Object.create(Object.prototype, {
  title: {
    configurable: true,
    enumerable: true,
    value: 'Princípios de orientação a objetos em JavaScript',
    writable: true,
  },
});
```

As duas declaraçõs nesse código são exatamente iguais. A primeira declaração utiliza da forma literal para definir um objeto. Esse objeto herda automaticamente de `Object.prototype`, e a propriedade é definida como configurável, enumeravel e pode ser escrita por padrão. A segunda declaração executa o mesmo passo, mas faz isso explicitamente usando `Object.create()`.

Provavelmente nunca escreveremos código que herde de `Object.prototype` diretamente, pois isso já é padrão. Herdar de outros objetos é muito mais interessante:

```js
var person1 = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};
var person2 = Object.create(person1, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Greg',
    writable: true,
  },
});

person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"

console.log(person1.hasOwnProperty('sayName')); // true
console.log(person1.isPrototypeOf(person2)); // true
console.log(person2.hasOwnProperty('sayName')); // false
```

No código acima, o objeto `person1` é criado com uma propriedade `name` e um método `sayName()`. O objeto `person2` herda de `person1` a propriedade e o método. Mas, o objeto `person2` é definido por meio do `Object.create()`, que também define as duas propriedade. Essa propriedade própria enconbre a propriedade de mesmo no do protótipo e é usada em seu lugar. A cadeia de herança é maior para `person2` do que para `person1`. O objeto `person2` herda do objeto `person1`, e `person1` herda de `Object.prototype`.

![Cadeia de protótipos](/.github/img/cap05/img5_2.png)

Quando uma propriedade é acessada em um objeto, a engine do JavaScript executa um processo de pesquisa. Se a propriedade for encontrada na instância (ou seja, se for uma propriedade própria), o valor dessa propriedade será usado. Se a propriedade não for encontrada na instância, a procura continuará no [[Prototype]] desse objeto, e assim por diante até o m da cadeia ser alcançado. Essa cadeia normalmente termina com Object.prototype, cujo [[Prototype]] é de nido com null.

Também é possível criar objetos com um [[Prototype]] igual a null por meio de `Object.create()`:

```js
var nakedObject = Object.create(null);
console.log('toString' in nakedObject); // false
console.log('valueOf' in nakedObject); // false
```

O objeto acima criado no exemplo é um objeto sem cadeia de protótipos. Isso significa que métodos como `toString()` e `valueOf()`, não estão presente no objeto. Esse objeto, é um quadro em branco, sem propriedade predefinidas, o que o torna perfeito para a criação de uma tabela de pesquisa has sem que você tenha de se preocupar com colisões de nomes com as propriedades herdadas. Não há muitos usos diferentes para um objeto como esse, e você não pode usá-lo como se ele herdasse de `Object.prototype`.

---

## HERANÇA DE CONSTRUTORES

Herança de objetos em JavaScript também é a base de herança de contrutores. Vimos que quase toda função tem uma propriedade `prototype` que pode ser modificada ou substituída. Esse `prototype` é automaticamnete definida para conter um novo objeto genérico que herda de `Object.prototype` e que tem uam única propriedade própria chamada `constructor`.

```js
// Você escreve isto:
function YourConstrutor() {
  // inicialização
}

// A engine do JavaScript faz isto internamente
YourConstrutor.prototype = Object.create(Object.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: YourConstrutor,
    writable: true,
  },
});
```

O código acima define uma propriedade `prototype` do contrutor com um objeto que herda de `Object.prototype`, o que significa que qualquer instância de `YourContructor` também herdará de `Object.prototype. YourConstrutor`é um `sibtipo` de `Object.prototype` , e `Object.prototype` é um `subtipo` de `YourContructor`.

Como a propriedade `prototype`pode ser atualizada, a cadeia de protótipos pode ser alterada ao ser sobrescrita.

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};
Rectangle.prototype.toString = function () {
  return '[Rectangle ' + this.length + 'x' + this.width + ']';
};
// herda de Rectangle
function Square(size) {
  this.length = length;
  this.width = size;
}

Square.prototype = new Rectangle();
Square.prototype.constructor = Square;
Square.prototype.toString = function () {
  return '[Square ' + this.length + 'x' + this.width + ']';
};

var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.getArea()); // 50
console.log(square.getArea()); // 36
console.log(rect.toString()); // "[Rectangle 5x10]"
console.log(square.toString()); // "[Square 6x6]"
console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Object); // true
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(square instanceof Object); // true
```

No código acima, há dois construtores `Rectangle` e `Square`. O construtor `Square`tem sua propriedade `prototype` sobrescrita com uma instância de `Retangle`. Nenhum argumento é passado para `Rectangle` nesse ponto porque eles não precisam ser usados, e se fossem, todas as instâncias de `Square`compartilham as mesmas dimensões. Para mudar a cadeia de protótipos, é preciso garantir que o construtor não irá lançar um eror se os argumentos não forem fornecidos e que o contrutor não alterará nenhum tipo de estado global.

Depois disso `rect` é criado como uma instância de `Rectangle` , e square é criado como uma instância de `Square`. Ambos têm o método `getArea()` herdado de `Rectangle.prototype`.A variável square é considerada uma instância de Square bem como de Rectangle e de Object porque instanceof usa a cadeia de protótipos para determinar o tipo do objeto.

![A cadeia de protótipos](/.github/img/cap05/img5_3.png)

A única parte relevante é que Square.prototype, de alguma maneira, deve se ligar a Rectangle.prototype para que a herança aconteça. Isso significa que você pode simpli car esse exemplo usando `Object.create()` novamente:

```js
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true,
  },
});

Square.prototype.toString = function () {
  return '[Square ' + this.length + 'x' + this.width + ']';
};
```

Nesse novo código, `Squera.prototype` é sobrescrito por um novo objeto que herda de `Rectangle.prototype`, e o construtor `Rectangle` jamais é chamado. Isso significa que podemos não precisar mais se preocupar em causar um erro ao chamar o construtor sem argumento. O código se comporta exatamente da maneira que o código anterior.

```txt
NOTA Sempre garanta que você irá sobrescrever prototype antes de adicionar propriedades a ele; do contrário, você perderá todos os métodos adicionados quando a sobrescrita ocorrer.
```

---

## FURTO DE CONSTRUTOR

Se quiser chamar o construtor do supertipo a partir do construtor subtipo, é preciso tirar vantagem do modo como as função em JavaScript funcioname. A maneira como o `furto de construtor`funciona é muito simples. Basta chamar o construtor do supertipo a partir do construtor do subtipo usando `call()` ou `apply()` para passar o objeto recém-criado.

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};
Rectangle.prototype.toString = function () {
  return '[Rectangle ' + this.length + 'x' + this.width + ']';
};
// herda de Rectangle
function Square(size) {
  Rectangle.call(this, size, size);
  // opcional: adiciona novas propriedades ou sobrescreve as
  // propriedades existentes aqui
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true,
  },
});
Square.prototype.toString = function () {
  return '[Square ' + this.length + 'x' + this.width + ']';
};
var square = new Square(6);
console.log(square.length); // 6
console.log(square.width); // 6
console.log(square.getArea()); // 36
```

O construtor `Square` chama o construtor `Rectangle`, passa `this` e também `size` duas vezes. Fazer isso cria as propriedades `lenght` e `width` no novo objeto e faz cada uma delas ser igual a `size`. Esse processo de duas etapas é útil quando queremos implementar a herança entre tipos personalizados. Você sempre deverá modificar o protótipo de um construtor, e poderá precisar chamar o construtor do supertipo a partir do construtor do subtipo. Geralmente, você irá modificar o protótipo para a herança de métodos e usará o furto de construtor para as propriedades. Essa abordagem normalmente é conhecida como herança pseudoclássica porque ela imita a herança clássica das linguagens baseadas em classe.

---

## ACESSANDO OS MÉTODOS DO SUPERTIPO

Para constinuar acessando p método do supertipo é preciso acessar diretamente o método do protótipo referente ao supertipo e suar tanto `call()` quanto `apply()` para executar o método no objeto referente ao subtipo.

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};
Rectangle.prototype.toString = function () {
  return '[Rectangle ' + this.length + 'x' + this.width + ']';
};
// herda de Rectangle
function Square(size) {
  Rectangle.call(this, size, size);
}
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true,
  },
});
// chama o método do supertipo
Square.prototype.toString = function () {
  var text = Rectangle.prototype.toString.call(this);
  return text.replace('Rectangle', 'Square');
};
```

O método só precisa substituir `Rectagle` por `Square` antes de retornar o texto resultante. Essa abordagem pode parcer um pouco extensa para uma operação simples como essa, mas é a única maneira de acessar um método do supertipo.

---

## SUMÁRIO

O JavaScript suporta a herança por meio de cadeia de protótipos. Uma cadeia de protótipos é criada entre os objetos quando o [[Prototype]] de um objeto é definido como o outro objeto. Todos os objetos genéricos herdam automaticamente de `Object.prototype`. Se você deseja criar um objeto que herde de outro objeto, `Object.create()` poderá ser usado para especificar o valor de [[Prototype]] do novo objeto.

A herança é implementada entre tipos personalizados por meio da criação de uma cadeia de protótipos no construtor. Ao definir a propriedade prototype do construtor com outro valor, a herança é implementada entre as instâncias do tipo personalizado e o protótipo desse outro valor. Todas as instâncias desse construtor compartilham o mesmo protótipo, portanto todas herdam do mesmo objeto. Essa técnica funciona bem para a herança de métodos de outros objetos, mas não se podem herdar propriedades próprias usando protótipos.

Para herdar propriedades próprias corretamente, o furto de construtor (constructor stealing) pode ser usado, o que consiste simplesmente em chamar uma função construtora com `call()` ou `apply()` para que qualquer inicialização seja feita no objeto referente ao subtipo. Combinar furto de construtor com cadeia de protótipos é a maneira mais comum de implementar a herança entre tipos personalizados em JavaScript. Essa combinação é frequentemente chamada de herança pseudoclássica devido a sua semelhança com a herança em linguagens baseadas em classes.

Você pode acessar os métodos de um supertipo ao acessar diretamente o seu protótipo. Para isso, use `call()` ou `apply()` para que qualquer inicialização seja feita no objeto referente ao subtipo. Combinar furto de construtor com cadeia de protótipos é a maneira mais comum de implementar a herança entre tipos personalizados em JavaScript. Essa combinação é frequentemente chamada de herança pseudoclássica devido a sua semelhança com a herança em linguagens baseadas em classes. Você pode acessar os métodos de um supertipo ao acessar diretamente o
seu protótipo. Para isso, use `call()` ou `apply()` para executar o método do
supertipo no objeto referente ao subtipo.
