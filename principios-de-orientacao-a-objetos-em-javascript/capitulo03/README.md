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
