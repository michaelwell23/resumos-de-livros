# CAPÍTULO 03 — ENTENDENDO OS OBJETOS

A maior parte da programação em JavaScript é representada pela manipulação desses objetos, motivo pela qual entender como eles funcionam é fundamental para compreender a linguagem como um todo.

---

## DEFININDO PROPRIEDADES

Há duas formas básicas de criar objetos: usando o construtor `Object` ou usando um objeto literal.

```js
var person1 = {
  name: 'Nicholas',
};

var person2 = new Object();
person2.name = 'Nicholas';

person1.age = 'Redacted';
person2.age = 'Redacted';

person1.name = 'Greg';
person2.name = 'Michael';
```

Quando uma propriedade é adicionada pela primeira vez a um objeto, o JavaScript utiliza um método interno chamado `[[Put]]` no objeto. Esse método cria um espaço no objeto para armazenar a propriedade. Essa operação não somente especifica o valor inicial como também alguns atributos da propriedade. Quando as propriedades `name` e `age` do exemplo anterior são inicialmente definidas, o método `[[Put]]` é chamado para cada uma delas.

O resultado da chamada a `[[Put]]` é a criação de uma `propriedade própria` no objeto. Essa propriedade própria indica que a instância específica do objeto tem aquela propriedade.

Quando um novo valor é atribuído a uma propriedade, uma operação diferente chama `[[Set]]` é executada. Essa operação substitui o valor atual da propriedade pelo novo valor. Uma visão passo a passo do que acontece quando uma propriedade é alterada, podemos ver na imagem abaixo.

![Adicionando e alterando propriedades de um objeto](/.github/img/cap03/img3_1.png)

Na primeira parte, um objeto literal é usado para criar o objeto `person1`. Isso gera uma chamada implícita a `[[Put]]` para a propriedade `name`. Atribuit um valor a `person1.age` faz com que `[[Put]` seja executado para a propriedade `age`. Entretanto atribuir um novo valor a 'person.name' faz que uma operação `[[Set]]` seja executada na propriedade.name, sobrescreva o valor atual da propriedade.

---

## VERIFICANDO A EXISTÊNCIA DE PROPRIEDADES

Às vezes é necessário verificar se uma propriedade já existe em um objeto. Desenvolvedores JavaScript iniciantes muitas vezes usam padrões incorretos.

```js
// não é confiável
if (person1.age) {
  // faz algo com a idade (age)
}
```

O problema com esse padrão está no modo como as conversões de tipo afetam o resultado. A condição `if` é avaliada como `true`se o valor for `thuthy`e é avaliada como `false` se o valor for `falsy`. Uma maneira mais confiável de testar a existência de uma propriedade é por meio do operador `in`. Ele procura uma propriedade com um determinado nome em um objeto específico e retorna `true` se ela for encontrada. Com efeito, o operador `in` verifica se a chave especificada existe na tabela hash.

```js
console.log('name' in person1); // true
console.log('age' in person1); // true
console.log('title' in person1); // false
```

Tenha em mente que os métodos são apenas propriedades quereferenciam funções, portanto você pode verificar a existência de um método da mesma forma.

```js
var person1 = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};
console.log('sayName' in person1); // true
```

Na maioria dos casos, o operador `in`é a melhor forma de determinar se uma propriedade existe em um objeto. Em outros casos, podemos verificar a existência de uma propriedade somente se ela for uma propriedade própria. O operador `in`verifica tanto as propriedades próprias quanto às propriedades de protótipo, de modo que você deverá adotar uma abordagem diferente. Usar o método `hasOwnProperty()` presente em todos os objetos que retorna true somente se a propriedade dada existir e for uma propriedade própria.

```js
var person1 = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};
console.log('name' in person1); // true
console.log(person1.hasOwnProperty('name')); // true
console.log('toString' in person1); // true
console.log(person1.hasOwnProperty('toString')); // false
```

`name` é uma propriedade própria de `person1`, tanto o operador `in` quando o método`hasOwnProperty()`retornam true. O método`toString()`, entretanto, é uma propriedade do protótipo, presente em todos os objetos. O operador `in`retorna true para`toString()`, mas `hasOwnProperty()`retorna false.

## REMOVENDO PROPRIEDADES

Definir uma propriedade como `null`não remove totalmente a propriedade do objeto. Essa operação chama [[Set]] como o valor `null`, que somente substitui o valor da propriedade. Podemos utilizar o operador `delete` para remover totalmente uma propriedade de um objeto. Esse operador atua em uma única propriedade do objeto e chama uma operação interna de nome [[Delete]]. Se o operador `delete` conseguir remover a propriedade, ele retornará true.

```js
var person1 = {
  name: 'Nicholas',
};
console.log('name' in person1); // true
delete person1.name; // true (não exibe nada)
console.log('name' in person1); // false
```

No exemplo, a propriedade `name` é removida de `person1`. O operador `in`retorna `false` depois que a operação é concluída.

![Quando uma propriedade é removida](/.github/img/cap03/img3_3.png)

---

## ENUMERAÇÃO

Por padrão todas as propriedades que são adicionadas a um objeto são `enumeradas`, o que significa que podem ser iteradas por elas usando um `loop for-in`. Propriedades enumeráveis têm seu atributo interno `[[Enumerable]]` definido como true. O loop `for-in` enumera todas as propriedades enumeráveis de um objeto, atribuindo o nome da propriedade a uma variável.

```js
var property;
for (property in object) {
  console.log('Name :' + property);
  console.log('Value:' + object[property]);
}
```

A cada iteração do loop, a variável `property` é preenchida com a próxima propriedade do objeto até que todas as propriedades tenham sido usadas. Nesse ponto, o loop termina e a execução do código continua normalmente.
Se for preciso apenas de uma lista das propriedades de um objeto para usar posteriormente, o método `Object.keys()` pode ser utilizado para obter um array de nomes de propriedades enumeráveis.

```js
var properties = Object.keys(object);
// Se quiser imitar o comportamento do loop for-in
var i, len;
for (i = 0, len = properties.length; i < len; i++) {
  console.log('Name :' + properties[i]);
  console.log('Value:' + object[properties[i]]);
}
```

O exemplo usa o método `Object.keys()` para obter as propriedades enumeráveis de um objeto. Um loop `for` é então usado para iterar pelas propriedades e exibir o nome e o valor.

```text
NOTA: Há uma diferença entre as propriedades enumeráveis retornadas em um loop for-in e aquelas retornadas por Object.keys() . O loop for-in também enumera propriedades do protótipo, enquanto Object.keys() retorna somente as propriedades próprias (da instância). A diferença entre propriedades do protótipo e propriedades próprias será discutida no capítulo 4.
```

É preciso ter em mente que nem todas as propriedades são enumeráveis. A maioria dos métodos nativos dos objetos tem seu atributo `[[Enumerable]]` definido como false. Podemos verificar se a propriedade é enumerada usando o método `propertyIsEnumerable()`.

```js
var person1 = {
  name: 'Nicholas',
};

console.log('name' in person1); // true
console.log(person1.propertyIsEnumerable('name')); // true

var properties = Object.keys(person1);

console.log('length' in properties); // true
console.log(properties.propertyIsEnumerable('length')); // false
```

No caso, a propriedade `name` é enumerável, pois é uma propriedade própria em `person1`. A propriedade `length` do array `properties`, por outro lado, não é enumerável por que é uma propriedade incluída em `Array.prototype`.

---

## TIPOS DE PROPRIEDADES

As `propriedade de dados` contêm um valor. O comportamento-padrão do método [[Put]] consiste em criar uma propriedade de dados. As `propriedade de acessos` não contêm valores; em vez disso, elas definem uma função a ser chamada quando a propriedade é lida e uma função quando a propriedade é atualizada. As propriedades de acesso exigem somente `getter`ou um `setter`, embora possam existir.

```js
var person1 = {
  _name: 'Nicholas',
  get name() {
    console.log('Reading name');
    return this._name;
  },
  set name(value) {
    console.log('Setting name to %s', value);
    this._name = value;
  },
};

console.log(person1.name); // "Reading name" e em seguida "Nicholas"
person1.name = 'Greg';
console.log(person1.name); // "Setting name to Greg" e em seguida "Greg"
```

A sintaxe usada para definir o getter e o setter para `name`parece bastante com uma função. As palavras-chave especiais`get`e`set`são usadas antes do nome da propriedade de acesso, seguidas por parênteses e do corpo da função.

Embora o exemplo use`\_name` para armazenar o valor da propriedade, podemos facilmente armazenar o valor em uma variável ou até mesmo em outro objeto. Em geral, não há razão para usar propriedade de acesso se estiver apenas armazenando o valor em outra propriedade — basta usar a própria propriedade.

```text
NOTA: Não é necessário de nir tanto um setter quanto um getter; você pode escolher um deles ou ambos. Se apenas um getter for de nido, a propriedade será somente de leitura; uma tentativa de escrever nessa propriedade irá falhar silenciosamente em modo não restrito e irá causar um erro em modo restrito. Se somente um setter for de nido, a propriedade será somente de escrita, e uma tentativa de ler o valor irá falhar silenciosamente tanto em modo restrito quanto em modo não restrito.
```

---

## ATRIBUTOS DE PROPRIEDADES

O ECMAScript 5 introduziu várias maneiras de interagir diretamente com os atributos, assim como introduziu novos atributos para suportar funcionalidades adicionais. É possível criar propriedades que se comportam da mesma forma que as propriedades prontas do JavaScript.

### ATRIBUTOS COMUNS

Há dois atributos internos que são compartilhados entre as propriedades de dados e as propriedades de acesso. Um é o `[[Enumerable]]`, que determina se pode iterar pela propriedade. E o outro é `[[Configurable]]`, que determina se uma propriedade pode ser alterada. Uma propriedade configurável pode ser removida usando `delete` e pode ter seus atributos alterados a qualquer momento. Para mudar os atributos, podemos utilizar o método `Object.defineProperty()`, que aceita três argumentos: o objeto que tem a propriedade, o nome da propriedade e um objeto `descritor da propriedade` que contém os atributos a serem definidos.

```js
var person1 = {
name: "Nicholas"
};
Object.defineProperty(person1, "name", {
enumerable: false
});
console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false

var properties = Object.keys(person1);
console.log(properties.length); // 0
Object.defineProperty(person1, "name", {❹
configurable: false
});
// tenta apagar a propriedade
delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"

Object.defineProperty(person1, "name", { // Erro!
configurable: true
});
```

A propriedade name é de nida normalmente, porém é modi cada em seguida para que seu atributo [[Enumerable]] seja de nido com false. O método propertyIsEnumerable() agora retorna false porque ele faz referência ao novo valor de [[Enumerable]] . Depois disso, name é alterado para que seja não con gurável. A partir daí, tentativas de apagar name falham porque a propriedade não pode ser alterada, de modo que name continuará presente em `person1`. Chamar `Object.defineProperty()` em name mais uma vez também não resultará em mudanças na propriedade. Com efeito, name torna-se uma propriedade de nitiva de `person1`. A última parte do código tenta rede nir a propriedade name para que ela seja con gurável novamente. No entanto isso gera um erro, pois uma propriedade não con gurável não pode se tornar uma propriedade configurável novamente.

```txt
NOTA Quando o JavaScript estiver sendo executado em modo restrito, tentar apagar uma propriedade não con gurável resultará em erro. Em modo não restrito, essa operação falhará silenciosamente.
```

---

### ATRIBUTOS DE PROPRIEDADES DE DADOS

As propriedades de dados têm dois atributos adicionais que as propriedades de acesso não têm. O primeiro é o `[[Value]]`, que contém o valor da propriedade. O segundo atributo é o '[[Writable]]', que é um valor booleano para indicar se o valor da propriedade pode ser reescrito.
Com esses dois atributos adicionais, é possível definir completamente uma propriedade de dados usando `Object.defineProperty()`, mesmo que a propriedade não exista.

```js
var person1 = {
  name: 'Nicholas',
};
```

O memso resultado pode ser obtido com o código descrito dessa forma:

```js
var person1 = {};
Object.defineProperty(person1, 'name', {
  value: 'Nicholas',
  enumerable: true,
  configurable: true,
  writable: true,
});
```

Quando `Object.defineProperty()` é chamado, inicialmente ele verifica se a propriedade existe. Se não existir, uma nova propriedade será adicionada, com os atributos especificados no descritor.
Ao definir uma nova propriedade usando `Object.defineProperty()`, é importante especificar todos os atributos porque, do contrário, os atributos booleanos serão definidos automaticamente como `false` por padrão.

```js
var person1 = {};
Object.defineProperty(person1, 'name', {
  value: 'Nicholas',
});
console.log('name' in person1); // true
console.log(person1.propertyIsEnumerable('name')); //false

delete person1.name;

console.log('name' in person1); // true

person1.name = 'Greg';
console.log(person1.name); // "Nicholas"
```

O código, não é possível fazer nada com a propriedade `name`, exceto ler o seu valor, pois qualquer outra operação estará bloqueada.

```txt
NOTA Propriedades que não podem ser atualizadas lançam um erro em modo restrito se você tenta mudar o seu valor. Em modo não restrito, a operação falhará silenciosamente.
```

### ATRIBUTOS DE PROPRIEDADES DE ACESSO

As propriedades de acesso tê [[Get]] e [[Set]], que contém as funções getter e setter, respectivamente. Como na forma literal de getters e setters, é preciso definir apenas um desses atributos para criar a propriedade.

```txt
NOTA Se você tentar criar uma propriedade com atributos tanto de dados quanto de acesso, um erro será gerado.
```

A vantagem de usar atributos de propriedade de acesso em vez de utilizar a notação literal de objeto para definir as propriedades de acesso é que você pode definir essas propriedades em objetos que já existem. Como ocorrem com as propriedades de dados, você também poderá especificar se as propriedades de acesso são configuráveis ou enumeráveis.

```js
var person1 = {
  _name: 'Nicholas',
  get name() {
    console.log('Reading name');
    return this._name;
  },
  set name(value) {
    console.log('Setting name to %s', value);
    this._name = value;
  },
};
```

Esse código também pode ser escrito da seguinte maneira:

```js
var person1 = {
  _name: 'Nicholas',
};
Object.defineProperty(person1, 'name', {
  get: function () {
    console.log('Reading name');
    return this._name;
  },
  set: function (value) {
    console.log('Setting name to %s', value);
    this._name = value;
  },
  enumerable: true,
  configurable: true,
});
```

Os nomes das propriedades `get` e `set` do objeto passado para `Object.defineProperty()` são propriedades de dados que contêm uma função. O formato de objeto literal para a propriedade de acesso não pode ser usado nesse caso. Definir os atributos permite alterar o modo como a propriedade de acesso funciona.

```js
var person1 = {
  _name: 'Nicholas',
};
Object.defineProperty(person1, 'name', {
  get: function () {
    console.log('Reading name');
    return this._name;
  },
});
console.log('name' in person1); // true
console.log(person1.propertyIsEnumerable('name')); // false

delete person1.name;

console.log('name' in person1); // true

person1.name = 'Greg';
console.log(person1.name); // "Nicholas"
```

No código, o `name` é uma propriedade de acesso que tem somente um `getter`. Não há `setter` nem outros atributos explicitamente definidos como `true`, portanto o valor poderá ser lido, mas não poderá ser alterado.

### DEFININDO VÁRIAS PROPRIEDADES

Também é possível definir várias propriedades em um objeto simultaneamente utilizando `Object.defineProperties()`. O método aceita dois argumentos: o objeto que será usado e um objeto contendo todas as informações das propriedades. As chaves do segundo argumento correspondem aos nomes das propriedades de dados e os valores são objetos descritores que definem os atributos dessas propriedades.
O exemplo define `_name` como uma propriedade de dado que contém informações e `name` como propriedade de acesso. É possível definir qualquer quantidade de propriedades usando `Object.defineProperties()`; até alterar as propriedades já existentes e criar novas propriedades ao mesmo tempo.

```js
var person1 = {};
Object.defineProperties(person1, {
  // propriedade de dados para armazenar informações
  _name: {
    value: 'Nicholas',
    enumerable: true,
    configurable: true,
    writable: true,
  },
  // propriedade de acesso
  name: {
    get: function () {
      console.log('Reading name');
      return this._name;
    },
    set: function (value) {
      console.log('Setting name to %s', value);
      this._name = value;
    },
    enumerable: true,
    configurable: true,
  },
});
```

### OBTENDO ATRIBUTOS DE PROPRIEDADES

Se houver necessidade de acessar os atributos, o método ``Object.getOwnPropertyDescriptor()` pode ser usado. Ele funciona como propriedades próprias, aceitando dois argumentos: o objeto a ser manipulado e o nome da propriedade a ser acessada. Se a propriedade existir, ele retorna um objeto descrito com quatro propriedades `configurable, enumerable e os outros dois valores adequados ao tipo da propriedade. Mesmo que um atributo não tenha sido especificamente definido, o retorno será um objeto que contém o valor apropriado para esse atributo.
A chamada do `Object.getOwnPropertyDescriptor()`retorna um objeto com enumerable, configurable, writable e value, apesar de esses atributos não terem sido explicitamente definidos por meio de`Object.defineProperty()`.

```js
var person1 = { name: 'Nicholas' };
var descriptor = Object.getOwnPropertyDescriptor(person1, 'name');

console.log(descriptor.enumerable); // true
console.log(descriptor.configurable); // true
console.log(descriptor.writable); // true
console.log(descriptor.value); // "Nicholas"
```

---

## EVITANDO MODIFICAÇÕES EM OBJETOS

Os objetos, assim como as propriedades, têm atributos internos que definem seu comportamento. Um deles é o `[[Extensible]]` — um valor booleano que indica se o objeto pode ser modificado. Todos os objetos que você criar serão `extensíveis` por padrão, o que significa que novas propriedades podem ser adicionadas ao objeto a qualquer momento. Ao definir `[[Extensible]]` como false, pode-se evitar que novas propriedades sejam adicionadas a um objeto.

### EVITANDO EXTENSÕES

Uma maneira de criar objetos não extensíveis é com o método `Object.preventExtensions()`. Esse método recebe um argumento, que é o objeto. Assim que esse método for usado, você jamais poderá adicionar novas propriedades a ele novamente. O valor de [[Extensible]] pode ser verificado com o método `Object.isExtensible()`.

```js
var person1 = {
  name: 'Nicholas',
};
console.log(Object.isExtensible(person1)); // true

Object.preventExtensions(person1);
console.log(Object.isExtensible(person1)); // false

person1.sayName = function () {
  console.log(this.name);
};
console.log('sayName' in person1); // false
```

Depois de criar `person1`, o atributo [[Extensible]]`do objeto é verificado no antes de torná-lo não extensível. Depois que o objeto não for mais extensível, o método`sayName()` não poderá ser adicionado a esse objeto.

```txt
NOTA Tentar adicionar uma propriedade a um objeto não extensível irá lançar um erro em modo restrito. Em modo não restrito, a operação falhará silenciosamente. Sempre use o modo restrito com objetos não extensíveis para que você saiba quando um objeto não extensível está sendo usado incorretamente.
```

### SELANDO OBJETOS

A segunda maneira é `selar` o objeto. Um objeto selado é não extensível, e todas as suas propriedades não são configuráveis. Se um objeto estiver selado, você poderá ler e atualizar suas propriedades, mas não poderá adicionar, remover e nem mudar o tipo das propriedades. O método `Object.seal()` pode ser usado em um objeto para selá-lo. Quando isso acontece, o atributo [[Extensible]] será definido como 'false' e todas as propriedades terão seu atributo [[Configurable]] definido como `false`.

```js
var person1 = {
  name: 'Nicholas',
};

console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false

Object.seal(person1);
console.log(Object.isExtensible(person1)); // falseconsole.log(Object.isSealed(person1)); // true

person1.sayName = function () {
  console.log(this.name);
};

console.log('sayName' in person1); // false

person1.name = 'Greg';
console.log(person1.name); // "Greg"

delete person1.name;
console.log('name' in person1); // true
console.log(person1.name); // "Greg"

var descriptor = Object.getOwnPropertyDescriptor(person1, 'name');
console.log(descriptor.configurable); // false
```

Objetos selados em JavaScript representam a maneira de permitir que você tenha o mesmo grau descontrole sem usar classes.

### CONGELANDO OBJETOS

A última maneira de criar objetos não extensíveis é 'congelá-los'. Se o objeto estiver congelado, não será possível adicionar nem remover propriedades, mudar seus tipos nem atualizar qualquer propriedade de dados. Objetos congelados não podem ser “descongelados”, portanto eles permanecem no estado em que estavam quando foram congelados. Um objeto pode ser congelado por meio de `Object.freeze()`, e podemos determinar se um objeto está congelado usando `Object.isFrozen()`.

```js
var person1 = {
  name: 'Nicholas',
};

console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
console.log(Object.isFrozen(person1)); // false

Object.freeze(person1);

console.log(Object.isExtensible(person1)); // false
console.log(Object.isSealed(person1)); // true
console.log(Object.isFrozen(person1)); // true

person1.sayName = function () {
  console.log(this.name);
};
console.log('sayName' in person1); // false

person1.name = 'Greg';

console.log(person1.name); // "Nicholas"

delete person1.name;

console.log('name' in person1); // true
console.log(person1.name); // "Nicholas"

var descriptor = Object.getOwnPropertyDescriptor(person1, 'name');
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false
```

Nesse exemplo, o objeto person1 está congelado. Objetos congelados também são considerados não extensíveis e selados, de modo que Object.isExtensible() retorna false e Object.isSealed() retorna true. A propriedade "Greg" , a operação falha e veri cações subsequentes de name continuam retornando "Nicholas" .

```txt
NOTA Objetos congelados são como “fotogra as” de objetos em um determinado momento. Eles são muito limitados e raramente devem ser usados. Como ocorre com todos os objetos não extensíveis, você deve usar o modo restrito com objetos congelados.
```

---

## Sumário

Pensar em objetos JavaScript como uma tabela hash em que as propriedades são apenas pares de chaves e valores pode ajudar. As propriedades dos objetos são acessadas tanto por meio da notação de ponto quanto pela notação de colchetes com um identi cador em forma de string. Uma propriedade pode ser adicionada a qualquer momento atribuindo-lhe um valor e pode ser igualmente removida por meio do operador delete . É sempre possível verificar se uma propriedade existe usando o operador `in` com o nome de uma propriedade e um objeto. Se a propriedade em questão for uma propriedade própria, o método `hasOwnProperty()` , existente em todos os objetos, também poderá ser utilizado. Todas as propriedades que você adicionar a um objeto serão enumeráveis por padrão, o que significa que elas poderão ser usadas em um loop for-in ou ser acessadas com O`bject.key()`.

Há dois tipos de propriedade: propriedade de dados e propriedade de acesso. As propriedades de dados armazenam valores, e você pode lê-las ou sobrescrevê-las. Quando uma propriedade de dado contiver uma função, ela será considerada um método do objeto. De modo diferente das propriedades de dados, as propriedades de acesso não armazenam valores próprios: elas usam uma combinação de getters e setters para executar ações específicas. Você pode criar tanto propriedades de dados quanto propriedades de acesso usando a notação de objeto literal diretamente.

Todas as propriedades têm vários atributos associados. Esses atributos de nem o comportamento da propriedade. Tanto as propriedades de
dado quanto as propriedades de acesso têm os atributos [[Enumerable]] e [[Configurable]] . As propriedades de dados também têm os atributos
[[Writable]] e [[Value]] , enquanto as propriedades de acesso têm os atributos [[Get]] e [[Set]] . Por padrão, [[Enumerable]] e [[Configurable]] são
de nidas como true para todas as propriedades, e [[Writable]] também é de nida como true para todas as propriedades de dados. Esses atributos
podem ser alterados por meio de `Object.defineProperty()` ou `Object.defineProperties()` . Também é possível acessar esses atributos usandoObject.`getOwnPropertyDescriptor()`.

Se você quiser bloquear as propriedades de um objeto, há três maneiras de fazer isso. Se `Object.preventExtensions()` for usado, os objetos não mais permitirão que novas propriedades sejam adicionadas. Você também pode selar um objeto com o método `Object.seal()` , que torna o objeto não extensível e faz com que suas propriedades não sejam con guráveis. O método `Object.freeze()` cria um objeto congelado, que é um objeto selado com propriedades de dados que não podem ser atualizadas. Tenha cuidado com objetos não extensíveis e sempre use o modo restrito para que tentativas de acessar os objetos incorretamente lancem um erro.
