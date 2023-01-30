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
