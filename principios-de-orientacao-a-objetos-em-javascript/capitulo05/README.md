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
