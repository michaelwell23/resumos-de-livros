# CAPÍTULO 06 - PADRÕES DE OBJETO

Podemos definir os próprios tipos personalizados ou os próprios objetos genéricos sempre que quisermos. A herança pode ser usada para compartilhar comportamentos entre objetos, ou outra técnicas podem ser empregadas. Podemos tirar proveito dos recursos avançados do JavaScript para evitar que a estrutura de um objeto seja modificada. Os padrões discutidos aqui, representam maneiras eficientes de criar e de manipular objetos, todos baseados em casos de uso.

---

## MEMBROS PRIVADOS E PRIVILEGIADOS

Todas as propriedades de objetos em JavaScript são públicas, e não há nenhuma maneira explícita de indicar que uma propriedade não deva ser acessível de fora de um objeto em particular. Em algum momento, porém você pode querer que os dados não sejam públicos. Uma maneira de evitar isso é usar convenções de nomenclatura. Há maneiras de ocultar dados que não dependem de convenções e, desse modo são, mais "a prova de balas" para evitar a modificação de informações privadas.

### O PADRÃO DE MÓDULO

O `padrão de módulo` é um padrão criação de objetos concebido para criar objetos únicos com dados privados. A abordagem básica consiste em usar uma IIFE (Expressão de função imediatamente invocada). Essa expresssão de função pode conter qualquer número de variáveis locais que não seja acessíveis de fora dessa função. Como o objeto retornado é definido dentro dessa função,os métodos do objeto têm acesso aos dados. Os métodos que acessam dados privados dessa maneira são chamados de métodos `privilegiados`.

```js
var yourObject = (function () {
  // variáveis referentes a dados privados
  return {
    // métodos e propriedades públicas
  };
})();
```

Uma função anônima é criada e executa imediatamente. Isso significa que a função só existe por um momento, é executada e, em seguida, é destruída. A IIFE é um padrão bem popular em JavaScript, em parte por causa de seu uso padrão de módulo. O padrão de módulo permite usar variáveis normais como propriedade de objeto que não são expostas publicamente. Isso é feito por meio da criação de funções de `closure` como métodos do objeto. As closures são simplimente funções que têm acesso a dados fora de seu escopo. Sempre que um objeto gloal é acessado em uma função, no caso o `window`, essa função está acessando uma variavel fora de seu próprio escopo. A diferença em relação às funções do padrão de módulo está no fato de que as variáveis são declaradas na IIFE, e uma função que também é declarada na IIFE acessa essa variáveis.

```js
var person = (function () {
  var age = 25;
  return {
    name: 'Nicholas',
    getAge: function () {
      return age;
    },
    growOlder: function () {
      age++;
    },
  };
})();

console.log(person.name); // "Nicholas"
console.log(person.GetAge()); // 25
person.age = 100;
console.log(person.getAge()); // 25
person.growOlder();
console.log(person.getAge()); // 26
```

Esse código cria o objeto person usando o padrão de módulo. A variável`age` atua como uma propriedade privada do objeto. Ela não pode ser acessada diretamente de fora do objeto, mas pode ser usada pelos métodos do objeto. Há dois métodos privilegiados no objeto: `getAge()`, que lê o valor da variável `age`, e `growOlder()`, que incrementa `age`. Ambos os métodos podem acessar a variável age diretamente porque ela está definida na função mais externa em relação ao local em que os métodos estão de nidos. Há uma variação do padrão de módulo chamado `revealing module pattern`, que organiza todas as variáveis e os métodps no início da IIFE e simplismente os atribui ao objeto retornado.

```js
var person = (function () {
  var age = 25;
  function getAge() {
    return age;
  }
  function growOlder() {
    age++;
  }

  return {
    name: 'Nicholas',
    getAge: getAge,
    growOlder: growOlder,
  };
})();
```

No `revealing module pattern`, age, getaAge() e growOlder() são todos definidos como locais na IIFE. Esse código é essencialmente o mesmo do exemplo anterior que usa o padrão de módulo tradicional;porém algumas pessoas preferem esse padrão porque ele mantém todas as variáveis e as declarações de funções juntas.

### MEMBROS PRIVADOS DE CONSTRUTORES

Podemos usar um padrão semelhante ao padrão de módulo para criar dados privados específicos das instâncias.

```js
function Person(name) {
  // define uma variável acessível somente no construtor Person
  var age = 25;
  this.name = name;
  this.getAge = function () {
    return age;
  };
  this.growOlder = function () {
    age++;
  };
}
var person = new Person('Nicholas');
console.log(person.name); // "Nicholas"
console.log(person.getAge()); // 25
person.age = 100;
console.log(person.getAge()); // 25
person.growOlder();
console.log(person.getAge()); // 26
```

Nesse código, construtor `Person` tem uma variável local `age`. Essa variável é usada como parte dos métodos `getAge()` e `growOlder()`. Quando uma instância de `Person` é criada, essa instância recebe sua própria variável `idade` e seus métodos `getAge()` e `growOlder()`. Em vários aspectos, isso é semelhante ao padrão de módulo, em que o construtor cria um escopo local e retorna o objeto `this`. Se quiser que dados privados sejam compartilhados entre todas as instâncias, uma abordagem híbrida que se parece com o padrão de módulo, embora use um construtor, poderá ser usada:

```js
var Person = (function () {
  // todos compartilham a mesma idade
  var age = 25;
  function InnerPerson(name) {
    this.name = name;
  }
  InnerPerson.prototype.getAge = function () {
    return age;
  };
  InnerPerson.prototype.growOlder = function () {
    age++;
  };
  return InnerPerson;
})();

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1.name); // "Nicholas"
console.log(person1.getAge()); // 25
console.log(person2.name); // "Greg"
console.log(person2.getAge()); // 25

person1.growOlder();

console.log(person1.getAge()); // 26
console.log(person2.getAge()); // 26
```

Nesse código, o contrutor `InnerPerson` é definido em uma IIFE. A variável `age` é definida fora do construtor, mas é usada em dois métodos do protótipo. O construtor `InnerPerson` então é retornado e se torna o construtor `Person` no escopo global. Todas as instâncias de Person
compartilham a variável age, portanto mudar o seu valor em uma instância automaticamente afetará a outra instância.

---

## MIXIS

Os `mixis`ocorrem quando um objeto adquire as propriedade de outro sem modificar a cadeia de protótipos. O primeiro objeto recebe as propriedades do segundo objeto ao copiar diretamenter essas propriedades.

```js
function mixin(receiver, supplier) {
  for (var property in supplier) {
    if (supplier.hasOwnProperty(property)) {
      receiver[property] = supplier[property];
    }
  }
  return receiver;
}
```

A função `mixin()` aceita dois argumentos: o receptor e o fornecedor. O objetivo da função é copiar todas as propriedades enumeráveis do fornecedor para o receptor. Isso é feito por meio do loop `for-in` que efetua a interação pels propriedades de `supplier` e atribui o valor a cada propriedade a uma propriedade de mesmo nome no `receiver`. Se uma propriedade contiver um objeto, então tanto o receptor quanto o fornecedor apontarão para o mesmo objeto. Por exemplo, um suporte a evento pode ser adicionado a um objeto por meio de um mixin em vez de usar a herança.

```js
function EventTarget() {}
EventTarget.prototype = {
  constructor: EventTarget,
  addListener: function (type, listener) {
    // cria um array se ele não existir
    if (!this.hasOwnProperty('_listeners')) {
      this._listeners = [];
    }
    if (typeof this._listeners[type] == 'undefined') {
      this._listeners[type] = [];
    }
    this._listeners[type].push(listener);
  },
  fire: function (event) {
    if (!event.target) {
      event.target = this;
    }
    if (!event.type) {
      // falsy
      throw new Error("Event object missing 'type' property");
    }
    if (this._listeners && this._listeners[event.type] instanceof Array) {
      var listeners = this._listeners[event.type];
      for (var i = 0, len = listeners.length; i < len; i++) {
        listeners[i].call(this, event);
      }
    }
  },
  removeListener: function (type, listener) {
    if (this._listeners && this._listeners[type] instanceof Array) {
      var listeners = this._listeners[type];
      for (var i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        }
      }
    }
  },
};
```

O tipo `EventTarget` oferece uma manipulação básica de eventos para qualquer objeto. Podemos adicionar ou remover listeners assim como disparar eventos diretamente no objeto. Os listeners de evento são armazenados na propriedade `_listeners`, criada somente quando `addListener()` é chamada pela primeira vez. Instâncias de `EventTarget` podem ser usadas desta maneira:

```js
var target = new EventTarget();
target.addListener('message', function (event) {
  console.log('Message is ' + event.data);
});
target.fire({
  type: 'message',
  data: 'Hello world!',
});
```

Se quisermos ter um tipo diferente de objeto que também suporte eventos, há algumas opções. A primeira é: Podemos criar uma nova instância de `EventTarget` e adicionar as propriedades desejadas:

```js
var person = new EventTarget();
person.name = 'Nicholas';
person.sayName = function () {
  console.log(this.name);
  this.fire({ type: 'namesaid', name: this.name });
};
```

O código básicamente cria uma váriavel chamada `person` como uma instância de `EventTarget` e, em seguida, as propriedade relacionadas à `person` são adicionadas. Isso faz com que `person`seja uma instância de `EventTarget` e não de Object ou de um tipo personalizado. Há também o overhead de ter de adicionar várias propriedade novas manualmente. Já a segunda maneira de resolver esse problema é usar a herança pseudoclássica:

```js
function Person(name) {
  this.name = name;
}

Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayName = function () {
  console.log(this.name);
  this.fire({ type: 'namesaid', name: this.name });
};

var person = new Person('Nicholas');

console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // true
```

Neste caso, há um novo tipo `Person` que herda de `EventTarget`. Ao usar mixin no lugar dessa solução, é possível reduzir a quantidade de código necessária para tribuir essas novas propriedades ao protótipo:

```js
function Person(name) {
  this.name = name;
}
mixin(Person.prototype, EventTarget.prototype);
mixin(Person.prototype, {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: this.name });
  },
});
var person = new Person('Nicholas');
console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // false
```

É claro que podemos decidir que, ao mesmo tempo que queremos usar as propriedades de um objeto, podemos não querer ter um construtor com herança pseudoclássica. Nesse caso, um mixin pode ser usado diretamente ao criar o novo objeto.active

```js
var person = mixin(new EventTarget(), {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: this.name });
  },
});
```

Um aspecto a se ter em mente sobre o uso de mixins dessa maneira é que as propriedades de acesso do fornecedor se tornam propriedades de dados no receptor, o que significa que se não houver cuidado, poderá sobrescrevê-las. Isso acontece porque as propriedade do receptor estão sendo criadas por atibuição e não pleo método `Object.defineProperty()`, o que significa que o valor da propriedade atual no fornecedor é lido e, em seguida, atribuido a uma propriedade de mesmo nome no receptor.

```js
var person = mixin(new EventTarget(), {
  get name() {
    return 'Nicholas';
  },
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: name });
  },
});
console.log(person.name); // "Nicholas"
person.name = 'Greg';
console.log(person.name); // "Greg"
```

Se você quiser que propriedade de acesso sejam copiadas como propriedade de acesso, será necessário ter uma função `mixin()` diferente.

```js
function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(function (property) {
    var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
    Object.defineProperty(receiver, property, descriptor);
  });

  return receiver;
}
var person = mixin(new EventTarget(), {
  get name() {
    return 'Nicholas';
  },
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: name });
  },
});
console.log(person.name); // "Nicholas"
person.name = 'Greg';
console.log(person.name); // "Nicholas"
```

É claro que essa versão de `mixin()` só funciona com as engines de JavaScript comparíveis com o ECMAScript 5. Para engines antigas é preciso combinar duas abordagens de `mixin()` em uma única função:

```js
function mixin(receiver, supplier) {
  if (Object.getOwnPropertyDescriptor) {
    Object.keys(supplier).forEach(function (property) {
      var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
      Object.defineProperty(receiver, property, descriptor);
    });
  } else {
    for (var property in supplier) {
      if (supplier.hasOwnProperty(property)) {
        receiver[property] = supplier[property];
      }
    }
  }
  return receiver;
}
```

Nesse caso, mixin() verifica se `Object.getOwnPropertyDescriptor()` existe para determinar se a engine do JavaScript suporta ECMAScript 5. Em caso afirmativo, a versão para ECMAScript 5 é utilizada. Do contrário, a versão para ECMAScript 3 é usada. Essa função é segura tanto para as engines modernas quanto para as mais antigas, pois a estratégia de mixin mais apropriada será aplicada.

```txt
NOTA: Tenha em mente que Object.Keys() retorna somente as propriedade enumeráveis. Se você quiser copiar as propriedades não enumeráveis, use `Object.getOwnPropertyNames().
```

---

## CONSTRUTORES COM ESCOPO SEGURO

Como todos os construtores são apenas funções, eles podem ser chamados sem o uso do operador `new`e, sendo assim, podem afetar o valor de `this`. Fazer isso pode levar a resultados inesperados, pois `this` acaba referenciando o objeto global em modo não restrito ou o construtor lançará um erro em modo restrito.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
var person1 = Person('Nicholas'); // nota: falta "new"

console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"
```

O código acima não está sendo executado em modo restrito, pois faria um erro ser lançado se deixarmos de usar `new`. Muitos construtores prontos, como `Array`e `RegExp`, também funcionam sem `new` porque eles foram escritos para terem `escopo seguro`. Um construtor de escopo seguro pode ser chamado com ou sem o operador `new` e retorna o mesmo tipo de objeto em qualquer caso.
Quando `new` é chamado com um função, o objeto recém-criado representado por `this` já é uma instância do tipo personalizado representado pelo construtor. Portanto `instanceof` pode ser utilizado para detenrminar se `new` foi usado na chamada da função:

```js
function Person(name) {
  if (this instanceof Person) {
    // chamado com "new"
  } else {
    // chamado sem "new"
  }
}
```

Usar um padrão como esse permite controlar o que uma função faz de acordo com o fato de ela ter sido chamada ou não com `new`. Pode ser que você queria tratar cada circunstância de modo diferente, mas normalmente, irá querer que a função se comporte da mesma maneira. Uma versão de escopo seguro de Person tem o seguinte aspecto:

```js
function Person(name) {
  if (this instanceof Person) {
    this.name = name;
  } else {
    return new Person(name);
  }
}
```

Se `new`não for usado, o contrutor será chamado recursivamente por meio de `new` para criar uma instância apropriada do objeto. Dessa maneira,ambas as opções a seguir são equivalentes:

```js
var person1 = new Person('Nicholas');
var person2 = Person('Nicholas');
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
```

Criar novos objetos sem usar o operador `new` está se tornando mais comum, como um esforço para coibir erros causados pela omissão de `new`. O próprio JavaScript tem diversos tipos de referência com construtores de escopo seguro, como `Object`, `Array`, `RegExp` e `Error`.

---

## SUMÁRIO

Há diversas maneiras de criar e compor objetos em JavaScript. Embora o JavaScript não tenha um conceito formal de propriedades privadas, você pode criar dados ou funções que sejam acessíveis somente de dentro de um objeto. Para objetos únicos (singleton), o padrão de módulo pode ser usado para ocultar os dados do mundo externo. Uma IIFE (função de expressão imediatamente invocada) pode ser usada para de nir variáveis locais e funções que sejam acessíveis somente pelo objeto recém-criado. Métodos privilegiados são métodos de um objeto que têm acesso a dados privados. Você também pode criar construtores que tenham dados privados, seja de nindo variáveis na função construtora, seja usando uma IIFE para criar dados privados que serão compartilhados por todas as instâncias.

Os mixins são uma maneira e ciente de adicionar funcionalidade a objetos ao mesmo tempo que se evita a herança. Um mixin copia propriedades de um objeto para outro, de modo que o objeto receptor obtenha as funcionalidades do fornecedor sem que haja herança. De modo diferente da herança, os mixins não permitem identi car a procedência das funcionalidades depois que o objeto for criado. Por essa razão, os mixins são mais bem empregados com propriedades de dados ou com pequenas funcionalidades. A herança continua sendo preferível quando queremos obter mais funcionalidades e conhecemos a suaprocedência.

Os construtores de escopo seguro são construtores que podem ser chamados com ou sem o operador new para criar uma nova instância de um objeto. Esse padrão tira vantagem do fato de que this é uma instância do tipo personalizado assim que o construtor começa a ser executado, o que permite alterar o comportamento do construtor de acordo com o fato de o operador new ter sido ou não utilizado.
