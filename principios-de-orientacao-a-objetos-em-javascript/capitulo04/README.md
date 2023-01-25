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
