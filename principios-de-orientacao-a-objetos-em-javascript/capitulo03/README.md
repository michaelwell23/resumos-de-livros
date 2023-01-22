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
