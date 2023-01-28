# CAPÍTULO 04 — CONSTRUTORES E PROTÓTIPOS

Como o JavaScript não tem classes, cabe aos construtores e aos protótipos proporcionar um comportamento semelhante aos objetos. Entretanto, só porque alguns padrões se assemelham a classes não significa que eles se comportem da mesma maneira.

---

## CONSTRUTORES

Um construtor é simplismente uma função usada com o operador new para criar objeto. A vantagem dos construtores é que os objetos criados com o mesmo construtor têm as mesmas propriedades e os mesmos métodos. Como um contrutor é somente uma função, ele deve ser definido da mesma maneira. A úncida diferença é que os nomes dos construtores devem começar com a letra maiúscula para diferenciá-los de outras funções.

```js
function Person() {
  //intercionalmente vazia
}
```

Não há nenhuma diferença entre a função acima e qualquer outra função, o que faz a função acima ser uma função construtora é a letra maiúscula. Após o contrutor ser definido, pode-se criar instâncias:

```js
var person1 = new Person();
var person2 = new Person();
```

Podemos até omitir os parênteses, quando não houver parâmetros a ser passado para o construtor. Embora o construtor `Person` não retorne nada explicitamente, tanto `person1` quanto `person2` são considerados instâncias do no tipo `Person`. O operador `new` cria automaticamente um objeto do tipo especificado e o retorna. Isso significa também que o operador `instanceof` pode ser utilizado para deduzir o tipo do objeto.

```js
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
```

Podemos verificar o tipo de uma instância usando a propriedade `constructor`. Toda instância de objeto é automaticamente criada com uma propriedade chamada `constructor` que contém uma referência à função construtora que a criou. Para objetos `genéricos` (criados por notação literal ou utilizando o contrutor Object), a propriedade `construtor` é definida como `Object`, enquanto para objetos criados com um construtor personalizado, `construtor` apontará para esse contrutor.

```js
console.log(person1.constructor Person); // true
console.log(person2.constructor Person); // true
```

Exibe `true`em ambos os casos, pois os objetos forma criado com o construtor `Person`. É aconcelhável usar `instanceof` para verificar o tipo de uma instância, pois a propriedade `constructor podeser sobrescrita, e, sendo assim, poderá não ser totalmente precisa. O propósito de um construtor é fazer com que seja fácil criar mais objetos com as mesmas propriedades e os mesmos métodos.

```js
function Person(name) {
  this.name = name;
  this.sayName = function () {
    console.log(`Olá eu me chamo ${this.name}`);
  };
}
```

O construtor Person aceita um único parêmetro nomeado e o atribui à propriedade `name` do objeto `this`. O construtor também adiciona o método `sayName()` ao objeto; O objeto `this` é automaticamente criado pelo operador `new` quando o construtor é chamado e corresponde a uma instância do tipo do construtor. Podemos usar o construtor `Person` para criar objetos com uma propriedade `name` inicializada:

```js
var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1.name); //Nicholas
console.log(person2.name); // Greg

person1.sayName(); //Olá eu me chamo Nicholas
person2.sayName(); //Olá eu me chamo Greg
```

Cada objeto tem sua própria propriedade `name`, portanto `sayName()` deve retornar um valor diferente de acordo com o objeto em que o método for usado.

```txt
NOTA Você também pode explicitamente chamar return dentro de um construtor. Se o valor retornado for um objeto, ele será retornado no lugar da nova instância do objeto recém-criado. Se o valor retornado for um valor primitivo, o objeto recém-criado será usado e o valor retornado será ignorado.
```

Os construtores permitem inicializar uma instância de um tipo de maneira consistente, efetuando todas as configurações de propriedades necessárias antes que o objeto possa ser usado.

```js
function Person(name) {
  Object.defineProperty(this, 'name', {
    get: function () {
      return name;
    },
    set: function (newName) {
      name = newName;
    },
    enumerable: true,
    configurable: true,
  });

  this.sayName = function () {
    console.log(this.name);
  };
}
```

No exemplo acima, o construtor `Person`, a propriedade `name` é uma propriedade de acesso que usa parâmetro `name` para armazenzar o nome propriamente dito. Isso é possível porque os parâmetros nomeados agem como variáveis locais. Sempre chame os contrutores com `new`, caso contrário, pode haver o risco de mudar o objetod global em vez de alterar o objeto recém-criado.

```js
var person1 = Person('Nicholas'); // nota: "new" está ausente
console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"
```

Quando `Person` é chamado como uma função, sem o operador `new`, o valor de `this` no contrutor é igual ao objeto `this` global. A variável `person1` não contém valor porque o construtor `Person` depende de `new` para fornecer um valor de retorno. Sem `new`, `Person` é somente uma função sem uma intrução de `return`. A atribuição a `this.name` cria uma variável global chamada `name`, em que o nome passado para `Person` é armazenado.

```txt
NOTA Um erro será lançado se você chamar o construtor Person em modo restrito sem usar new. Isso ocorre porque, em modo restrito, this não é atribuído ao objeto global. Em vez disso, this permanece como undefined; e um erro ocorrerá sempre que você tentar criar uma propriedade em undefined.
```

Os contrutores permitem configurar instências de objetos com as mesmas pripriedades, mas os construtores por si só não eliminam as redundâncias de código. Seria muito mais eficiente se todas as instâncias compartilhassem um método e esse método pudesse usar `this.name` para acessar o dado apropriado. É ai que os protótipos entram em cena.

---

## PROTÓTIPOS

Quase todas as funções têm uma propriedade `prototype`, que é usada durante a criação de novas instâncias. Esse protótipo é compartilhado entre todas as instâncias do objeto, e essas instâncias podem acessar as propriedades do protótipo. O método `hasOwnProperty()` é definido no protótipo de Object genérico, mas pode ser acessado a partir de qualquer objeto como se fosse uma propriedad própria.

```js
var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};

console.log('title' in book); // true
console.log(book.hasOwnProperty('title')); // true
console.log('hasOwnProperty' in book); // true
console.log(book.hasOwnProperty('hasOwnProperty')); // false
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
```

Embora não haja nenhuma definição de `hasOwnProperty()` em `book`, esse método pode ser acessado como `book.hasOwnProperty()` porque sua definição existe em `Object.prototype`.

![identificando uma propriedade de prototipo](/.github/img/cap04/img4_2.png);

### A PROPRIEDADE [[POTOTYPE]]

Uma instância mantém o controle de seu protótipo por meio de uma prorprieade interna chamada [[Prototype]]. Essa propriedade é um ponteiro pra o objeto referente ao protótipo que a intância está usando. Quando um novo objeto é criado usando `new`, a propriedade `prototype` do contrutor é atribuida à propriedade [[Prototype]] desse novo objeto. A imagem abaixo mostra como a propriedade [[Prototype]] permite que árias instâncias de um tipo de objeto se refiram ao mesmo protótipo.

![A propriede [[Prototype]]](/.github/img/cap04/img4_2.1.1.png)

O valor da propriedade [[Prototype]] pode ser lido por meio do método `Object.getPrototypeOf()`.

```js
var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(prototype === Object.prototype);
```

Quaquer objeto genérico, [[Prototype]] será sempre ua refêrencia a `Objeto.prototype`.

```txt
NOTA: Algumas engines de JavaScript também suportam uma propriedade chamada **proto** em todos os objetos. Essa propriedade permite tanto ler quanto escrever na propriedade [[Prototype]] . O Firefox, o Safari, o Chrome e o Node.js suportam essa propriedade, e **proto** está prestes a ser padronizada no ECMAScript 6.
```

Podemos utilizar o método `isPrototypeOf()` para verificar se um objeto é prototypo de outro.

```js
var object2 = {};
console.log(Object.prototype.isPrototypeOf(object));
```

Como `object` é somente um objeto genérico, seu protótipo deve ser `Object.prototype`, o que faz com que `isPrototypeOf()` retorne `true`. Quando uma propriedade é lida em um objeto, a engine da linguagem inicialmente procura uma propriedade própria com esse nome. Se a engina encontra ela retorna esse valor. Se não houver nenhuma propriedade própria com esse o nome no objeto-alvo, ele procurará no objeto [[Prototype]]. Se houver uma propriedade de protótipo, o valor será retornado, se nã houver `undefined` será retornado.

```js
var object = {};
console.log(object.toString()); // "[object Object]"

object.toString = function () {
  return '[object Custom]';
};

console.log(object.toString()); // "[object Custom]"

// apaga a propriedade própria
delete object.toString;
console.log(object.toString()); // "[object Object]"

// sem efeito, pois delete só funciona em propriedades próprias
delete object.toString;
console.log(object.toString()); // "[object Object]"
```

No exemplo, o método `toString()` é disponibilizado pelo protótipo e retorna `[object objetc]` por padrão. Se uma propriedade própria `toString()` for definida, essa propriedade será usada sempre que `toString()` for chamada no objeto novamente. A propriedade própria `encobre` a propriedade protótipo. A propriedade protótipo só será utilizado aso a propriedade própria venha ser apagada do objeto.

![Figura do exemplo anterior](/.github/img/cap04/img4_2.1.2.png)

Não se pode atribuir um valor a uma propriedade do protótipo a partir de uma instância. Atribuir um valor a `toString`faz com que uma nova propriedade própria seja criada na instância, deixando a propriedade do protótipo inalterada.

---

USANDO PROTÓTIPOS COM CONSTRUTORES

É muito mais eficiente colocar os métodos no protótipo e usar `this` para acessar a instância atual, do que fazer com que cada instância deva ter seu próprio conjunto de métodos.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"

person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"
```

O código acima, o construtor `Person`, `sayName()` está definido no protótipo, e não no construtor. AS instâncias do objeto funcionam exatamente da mesma maneira. Como `person1`e `person2` são referências de base para as chamadas a `sayName()`, o valor `this` é atribuido a `person1` e a `person2`, respectivamente. Outros tipos de dados podem ser armazenados, mas é preciso cuidado ao usar valores de refêrencia. Como esses valores são compartilhados pela instância, não espera que uma instância possa alterar os valores que outra instância irá acessar, por isso é preciso ter cuidado com o local para onde os valores de referência apontam.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

Person.prototype.favorites = [];
var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

person1.favorites.push('pizza');
person2.favorites.push('quinoa');

console.log(person1.favorites); // "pizza, quinoa"
console.log(person2.favorites); // "pizza, quinoa
```

A propriedade `favorites` é definida no portótipo, o que significa que `person1.favorites` e `person2.favorites` apontam para o mesmo array. Qualquer valor adicionado à propriedade `favorites` de qualquer pessoa será um elemento do array que está no protótipo, por isso é importante ter cuidado com o que é definido no protótipo. Por padrão, substituir o protótipo por um objeto literal é uma forma mais sucinta para se usar.

```js
function Person(name) {
  this.name = name;
}
Person.prototype = {
  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  },
};
```

O código define dois métodos no protótipo. Esse padrão se tornou popular porque elimina a necessidade de digitar `Peson.prototype` diversas vezes. Porém há um efeito colateral que é preciso estar ciente:

```js
var person1 = new Person('Nicholas');
console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // false
console.log(person1.constructor === Object); // true
```

Usar a notação de objeto literal para sobrescrever o portótipo alteraou a propriedade `constructor`, de modo que ela aponta para `Object` em vez de `Person`. Isso ocorre porue a propriedade `constructor` está no protótipo, e não na instância do objeto. Quando uma função é criada, sua propriedade `prototype` é criada com uma propriedade `constructor`igual à função. Esse padrão sobrescreve completamente o objeto referente ao protótipo, o que significa que o `constructor` será proveniente do novo objeto criado. Para evitar isso, é preciso restaurar a propriedade `constructor`para um valor adequado ao sobrescrito no protótipo.

```js
function Person(name) {
  this.name = name;
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  },
};

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // true
console.log(person1.constructor === Object); // false

console.log(person2 instanceof Person); // true
console.log(person2.constructor === Person); // true
console.log(person2.constructor === Object); // false
```

No exemplo, a propriedade `constructor` é especificamente atribuída no protótipo. O aspecto mais interessante das relações entre construtores, protótipos e instâncias estaja no fato de não haver uma ligação direta entre instância e o construtor. Mas há uma ligação direta entre a instância e o protótipo e entre o protótipo e o construtor.

![Intância e o seu construtor ligado pelo protótipo](/.github/img/cap04/img4_2.2.png)

---

### ALTERANDO PROTÓTIPOS

Como todas as instências de um tipo particular referenciam um protótipo compartilhado, é possíel estender todos esses objetos em conjunto a qualquer momento. Qualquer alteração no protótipo estará imediatemente disponǘel a qualquer instância que o referenciar, já que a propriedade [[Prototype]] contém um ponteiro para o protótipo. Isso significa que podemos literalmente adicionar novos membro a um protótipo a qualquer momento, e essas mudanças serão refletdas nas intâncias atuais.

```js
function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,

  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  },
};

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log('sayHi' in person1); // false
console.log('sayHi' in person2); // false
// adiciona um novo método

Person.prototype.sayHi = function () {
  console.log('Oi');
};

person1.sayHi(); // exibe "Hi"
person2.sayHi(); // exibe "Hi
```

O código acima, o tipo `Person` começa com apenas dois métodos: `sayName()` e `toString()`. Duas instâncias de `Person` são criadase e em, seguida, o métod `SayHi()` é adicionado ao protótipo. A partir daá, ambas as instâncias podem acessar `sayHi()`. A procura por uma propriedade nomeada ocorre sempre que a propriedade for acessada, o que proporciona fluidez ao processo.

Quando `Object.seal()` e `Object.freeze()` forem utilizado em um objeto para selar e congelar o objeto, a ação acontecerá
`somente` na instância do objeto e em suas propriedade próprias. Não é possível adicionar novas propriedades próprias nem mudar as que já existem em objetos congelados, mas, certamente, poderá continuar adicionando propriedades ao protótipo e poderá estender esses objetos.

```js
var person1 = new Person('Nicholas');
var person2 = new Person('Greg');
Object.freeze(person1);

Person.prototype.sayHi = function () {
  console.log('Hi');
};
person1.sayHi(); // exibe "Hi"
person2.sayHi(); // exibe "Hi"
```

O exempo, há duas intâncias de `Person`. A primeira está congelada, enquanto a outra é um objeto normal. Ao adicionar `sayHi()`ao protótipo, os dois objetos ganham um novo método, aparentemente contradizendo o status de congelamento. A propriedade [[Prototype]] é considerada uma propriedade própria da instância e, embora a propriedade em si esteja congelada, o valor não está.

```txt
NOTA Na prática, provavelmente você não usará protótipos dessa maneira com muita frequência quando estiver desenvolvendo em JavaScript. Entretanto é importante entender a relação que existe entre os objetos e seus protótipos, e exemplos incomuns
como esse ajudam a esclarecer os conceitos.
```

---

### PROTÓTIPOS DE OBJETO PRONTOS

Todos os objetos prontos têm construtores e, sendo assim, têm protótipos que podem ser alterados.

```js
Array.prototype.sum = function () {
  return this.reduce(function (previous, current) {
    return previous + current;
  });
};

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();

console.log(result); // 21
```

No exemplo, o método chamado `sum()`, que simplismente soma todos os itens do array e retorna o resultado, é criado em `Array.prototype`. O array number tem acesso automaticamnet a esse método por meio do protótipo. Em `sum()`, `this` se refere a `numbers`, que é uma instância de `Array`, de modo que o método é livre para usar outros métodos de array. Se o protótipo de um tipo wrapper primitivo for modificado, é possível adicionar mais funcionalidade a esses valores primitivos.

```js
Array.prototype.sum = function () {
  return this.reduce(function (previous, current) {
    return previous + current;
  });
};

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();

console.log(result); // 21
```

O código cria um novo método `capitalize()` para strings. O tipo `String` é o wrapper primitivo para string, e modificar o seu protótipo significa que todas as strings automaticamnet terão essas mudanças à disposição.

```txt
NOTA Embora possa parecer divertido e interessante modi car objetos prontos para testar novas funcionalidades, não é uma boa ideia fazer isso em ambiente de produção. Os desenvolvedores esperam que os objetos prontos se comportem de uma determinada maneira e que tenham determinados métodos. Alterar objetos prontos deliberadamente viola essas expectativas e faz com que outros desenvolvedores não tenham certeza de como os objetos devem funcionar.
```

---

## SUMÁRIO

Os construtores são apenas funções normais chamadas com o operador `new` . Você pode definir seus próprios construtores sempre que quiser ter vários objetos com as mesmas propriedades. Os objetos criados por meio de construtores podem ser identificados pelo operador `instanceof` ou pelo acesso direto à sua propriedade `constructor`.

Toda função tem uma propriedade prototype que de ne qualquer propriedade compartilhada pelos objetos criados com um determinado construtor. Métodos e propriedades com valores primitivos compartilhados normalmente são definidos nos protótipos, enquanto todas as demais propriedades são de nidas no construtor. A propriedadeestá definida no protótipo porque ela é compartilhada pelas instâncias do objeto.

O protótipo de um objeto é armazenado internamente na propriedade [[Prototype]]. Essa propriedade é uma referência, e não uma cópia. Se o protótipo for alterado em algum momento, essas mudanças ocorrerão em todas as instâncias por causa da maneira como o JavaScript procura as propriedades. Ao tentar acessar uma propriedade de um objeto, uma pesquisa é feita no objeto, em busca de qualquer propriedade própria com o nome especificado. Se uma propriedade própria não for encontrada, a procura será feita no protótipo. Esse sistema de pesquisa implica que o protótipo pode continuar a sofrer mudanças e que as instâncias dos objetos que referenciam esse protótipo irão re etir essas mudanças imediatamente.

Objetos prontos também têm protótipos que podem ser modi cados. Embora não seja recomendável fazer isso em ambiente de produção, pode ser útil para testes e provas de conceito relacionados a novas funcionalidades.
