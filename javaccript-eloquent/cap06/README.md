# A VIDA SECRETA DOS OBJETOS

Objetos são a maneira de viver, o sujeito das guerras santas, e um jargão apaixonante que ainda não perdeu o seu poder. Para um estrangeiro, isso provavelmente é um pouco confuso. Mas, podemos começar com uma rápida história dos objetos como contrutores da programação.

---

## 6.1 - HISTÓRIA

A teoria é de que a complexidade pode ser administrada separando-a em pequenos compartilhamentos isolados um do outro. Esse compartilhamento acabaram ganhando o nome de _objetos_.

Essa ideia foram trabalhadas por volta dos anos 70 e 80 e, nos anos 90, foram trazidas a tona por um enorme onda `hype-a` revolução da programação orientada a objetos. De repente, existia uma enorme tribo de pessoas declarando que objetos eram a maneira correta de programar.

Esse tipo de fanatismo produz um monte de bobagem impraticável, e desde então uma espécie de contra revolução vem acontencedo. Em alguns círculos de desenvolvedores, os objetos têm uma péssima reputação hoje em dia. Existe vários conceitos úteis que a cultura orientada a objetos tem popularizado. Esse capítulo descreve uma pegada mais excêntrica do JavaScript com foco nos objetos e na forma como eles se relacionam com algumas técnicas de orientação a objetos.

---

## 6.2 - MÉTODOS

Métodos são propriedades simples que comportam valores de funções.

```js
var coelho = {};
coelho.diz = function (linha) {
  console.log("O coelho diz '" + linha + "'");
};
coelho.diz('Estou vivo.'); // → O coelho diz 'Estou vivo.'
```

Normalmente um método precisa fazer alguma coisa com o objeto pelo qual ele foi chamado. Quando uma função é chamada como um método-visualizada com uma propriedade e imediatamente chamada, como um `objeto.metodo()` a variável especial `this` no seu contéudo vai apontar para o objeto pelo qual foi chamada.

```js
function speak(linr) {
  console.log('The ' + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = { type: 'white', speak: speak };
var fatRabbit = { type: 'fat', speak: speak };

whiteRabbit.speak('Oh my ears and whiskers, ' + "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'
fatRabbit.speak('I could sure use a carrot right now.');
// → The fat rabbit says 'I could sure use a carrot
// right now.'
```

O código acima usa a palavra `this` para dar saída do tipo de coelho que está falando. Lembrando que ambos os métodos `apply` e `bind` podem usar o primeiro argumento para simular chamada de métodos. Existe um método parecido ao `apply` chamado `call`. Ele também chama a função na qual ele é um método e aceita argumentos normalmente, ao invés de uma array. Assim como `apply` e `bind`, o `call` pode ser passado com um valor específico no `this`.

```js
speak.apply(fatRabbit, ['Burp!']);
// → The fat rabbit says 'Burp!'
speak.call({ type: 'old' }, 'Oh my.');
// → The old rabbit says 'Oh my.'
```

---

## 6.3 - PROTOTYPES

Observe com atenção:

```js
var empty = {};
console.log(empty.toString);
console.log(empty.toString());
```

Além de sua lista de propriedades, quase todos os objetos também possuem um protótipo, ou prototype. Um prototype é outro objeto que é usado como fonte de `fallback` para as propriedades. Quando um objeto recebe uma chamada em uma propriedade que ele não possui, seu prototype designado para aquela propriedade será buscado, e então o prototype daquele prototype e assim por diante.

Então quem é o prototype de um objeto vazio? É o ancestral de todos os prototypes, a entidade por trás de quase todos os objetos, `object.prototype`.

```js
console.log(Object.getPrototypeOf({}) == Object.prototype); // → true
console.log(Object.getPrototypeOf(Object.prototype)); // → null
```

A função `Object.getPrototypeOf` retorna o prototype de um objeto como o esperado. As relações dos objetos JavaScript forma uma estrutura em forma de àrvore, e na raiz dessa estrutura se encontra o `Object.prototype`. Ele fornce alguns métodos que estão presentes em todos os objetos. Muitos objtos não possuem o `Object.prototype` diretamente em seu prototype. Ao invés disso eles têm outro objeto que forneca suas propriedades padrão. Funções derivam do `Function.prototype`, e arrays derivam do `Array.prototype`.

```js
console.log(Object.getPrototypeOf(isNaN) == Function.prototype); // → true
console.log(Object.getPrototypeOf([]) == Array.prototype); // → true
```

Por diversas vezes, o prototype de um objeto também terá um prototype. A função `Object.getPrototypeOf` obviamente retornarão o prototype de um objeto. Você pode usar `Object.creat` para criar um objeto com um prototype específico.

```js
var protoCoelho = {
  fala: function (linha) {
    console.log('O coelho ' + this.tipo + " fala '" + linha + "'");
  },
};
var coelhoAssassino = Object.create(protoCoelho);
coelhoAssassino.tipo = 'assassino';
coelhoAssassino.fala('SKREEEE!'); // → O coelho assassino fala 'SKREEEE!'
```

---

## 6.4 - CONTRUTORES
