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

A maneira de criar objetos que herdam algum prototype compartilhado é usando construtores. Chamar uma função precedida pela palavra-chave _new_ vai fazer com que ela seja tratada como um construtor. O contrutor terá sua variável `this` atrelada a um objeto novo, e a menos que ele explicite o retorno do valor de outro objeto, esse novo objeto será retornado a partir da chamada. Um objeto criado com _new_ é chamado de `instância` do construtor.

Abaixo a um construtor simples para coelho. É fundamental iniciar o nome de um contrutor com letra maiúscula para que seja fácil destinguií-los das outrsa funçẽos.

```js
function Coelho(tipo) {
  this.tipo = tipo;
}

var coelhoAssassino = new Coelho('assassino');
var coelhoPreto = new Coelho('preto');

console.log(coelhoPreto.tipo); // → preto
```

Contrutores pegam automaticamente uma prorpriedade chamada `prototype`, que por padrão possui um objeto vazio que deriva do `Object.prototype`. Toda instância criada com esse construtor terá esse objeto assim como seu _prototype_. Então, para adicionar um método podemos fazer isso:

```js
Coelho.prototype.fala = function (linha) {
  console.log('O coelho ' + this.tipo + " fala '" + linha + "'");
};

coelhoPreto.fala('Doom...'); // → O coelho preto fala 'Doom...'
```

É importante notar a disntinção entre a amenria que um prototype é associado a um construtor e a maneira que objetos tê um prototype. O prototype propriamente dito de um construtor é `Function.prototype`, visto que os construtores são funções. Sua propriedade `prototype` será o prototype de instância criadas através dele mas não será seu próprio prototype.

---

## 6.5 - DEFININDO UMA TABELA

O projeto é este: nós vamos escrever um programa que, dado um array de arrays de células de uma tabela, cria uma string que contém uma tabela bem formatada. Algo dessa forma.

```txt
name          height   country
------------  ------   -------------
Kilimanjaro     5895   Tanzania
Everest         8848   Nepal
Mount Fuji      3776   Japan
Mont Blanc      4808   Italy/France
Vaalserberg      323   Netherlands
Denali          6168   United States
Popocatepetl    5465   Mexico
```

A foma que o sistema de construir tabelas vai funciona é que a função construtora vai perguntar para cada célula quanto de altura e largura ela vai querr ter e então usar essa informação para determinar a largura das colunas e a altura das linhas. O prograa de layout vai comunicar com os objetos células através de uma interface bem definida. Dessa forma os tipos de células que o prograa suporta não está definida antecipadamente. Nós podemos adicionar novas células de estilo depois e se eles suportarem nossa interface, isso vai simplismente, funcionar, sem exigir alterações no layout do programa. Esta é a interface:

- `minHeight()` retorna um número indicando a altura mínima que esta célula necessita (em linhas).
- `minWidth()` retorna um número indicando a largura mínima da célula (em caracteres).
- `draw(width, height)` retorna um array de tamanho _height_ , que contém uma série de strings que contém _width_ caracteres de tamanho. Isso representa o conteúdo da célula.

Será feito um forte uso dos métodos de ordem superior de arrays neste exemplo uma vez que isso é apropriado para essa abordagem. A primeia parte do programa calcula matrizes de largura e altura mínima para uma grade de células.

```js
function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}
function colWidths(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}
```

A função `rowHeights` não deve ser tão difícil de ser seguida. ELla usa o metodo reduce para computar a altura máxima de um array de células e envolve isso em um map para fazer isso em todas as linhas no array rows.

As coisas são um pouco mais difíceis na função `colWidths` porque o array externo é uma array de linhas, não e colunas. Essa função construi um array com um elemento para cada índice da colula. A chamada à reduce roda sobre o array `rows` exterior para cada índice e pega a largura da célula mais larga nesse índice.

```js
function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);
  function drawLine(blocks, lineNo) {
    return blocks
      .map(function (block) {
        return block[lineNo];
      })
      .join(' ');
  }
  function drawRow(row, rowNum) {
    var blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0]
      .map(function (_, lineNo) {
        return drawLine(blocks, lineNo);
      })
      .join('\n');
  }
  return rows.map(drawRow).join('\n');
}
```

A função `drawTable` usa função interna `drawRow` para desenhar todas as linhas e então as junta com carateres newline. A função `drawRow` primeiro converte os objetos célula na linha em bloco, que são arrays representando o conteúdo das células, divididos por linha.

Os blocos para uma linha, que devem todos ter a mesma largura, devem aparecer próximos uma ao outro na saída final. A segunda chamada a map em `drawRow` constrói essa saída linha por linha mapeando sobre as linhas do bloco mais à esquerda e, para cada uma delas , coletando uma linha que expande a tabela para sua largura máxima.

A função `drawLine` extrai linhas que devem aparecer próximas uma a outra a partir de um array de blocos e as juntas com um caracter espaço para criar o espaço de um caracter entre as colunas da tabela.

O construtor divide a linha em um array de linhas usando o método string split , que corta uma string em cada ocorrência do seu argumento e retorna um array com as partes. O método minWidth encontra a linha com maior largura nesse array.

```js
function repeat(string, times) {
  var result = '';
  for (var i = 0; i < times; i++) result += string;
  return result;
}
function TextCell(text) {
  this.text = text.split('\n');
}
TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function () {
  return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};
```

O código usa uma função auxiliar chamada repeat , que constrói uma linha na qual o valor é um argumento string repetido times número de vezes. O método draw usa isso e adiciona "preenchimento" para as linhas assim todas vão ter o tamanho requerido. Podemos testar criando um tabuleiro de damas 5 x 5.

```js
var rows = [];
for (var i = 0; i < 5; i++) {
  var row = [];
  for (var j = 0; j < 5; j++) {
    if ((j + i) % 2 == 0) row.push(new TextCell('##'));
    else row.push(new TextCell(' '));
  }
  rows.push(row);
}
console.log(drawTable(rows));
```

Os dados fonte para a tabela de montanhas que estamos tentando construir estão disponíveis na variável [MOUNTAINS](). Vamos querer destacar a linha do topo, que contém o nome das colunas, sublinhando as células com uma série de caracteres traço.

```js
function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function () {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1).concat([repeat('-', width)]);
};
```

Uma célula sublinhada contém outra célula. Ela reporta seu tamanho mínimo sendo o mesmo que da sua célula interna (chamando os métodos minWidth e minHeight desta célula) mas adicionando um à largura para contar o espaço usado pelo sublinhado.

Desenhar essa célula é bem simples - nós pegamos o conteúdo da célula interna e concatenamos uma simples linha preenchida com traços a ela.

Tendo um mecanismo de sublinhamento, nós podemos agora escrever uma função que constrói uma grade de células a partir do conjunto de dados.

```js
function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function (name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function (row) {
    return keys.map(function (name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}
console.log(drawTable(dataTable(MOUNTAINS)));
```

A função padrão Object.keys retorna um array com nomes de propriedades de um objeto. A linha do topo da tabela deve conter células sublinhadas que dão os nomes das colunas. Abaixo disso, os valores de todos os objetos no conjunto de dados aparecem como células normais. A tabela resultante se assemelha ao exemplo mostrado anteriormente, exceto que ela não alinha os números à direita na coluna height.

---

## 6.6 - GETTERS E SETTTERS

Podemosn específicar propriedades que, do lado de fora, parecem propriedades normais mais secretamente tem métodos associados a elas.

```js
var pile = {
  elements: ['eggshell', 'orange peel', 'worm'],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log('Ignoring attemp to set height to', value);
  },
};
console.log(pile.height); // → 3
pile.height = 100; // → Ignoring attempt to set height to 100
```

Em um objeto literal, a notação `get` e `set` para propriedade permite que você especifique uma função a ser exercutada quando a propriedade for lida ou escrita. Você também adicionar tal propriedade em um objeto existente.

```js
Object.defineProperty(TextCell.prototype, 'heightProp', {
  get: function () {
    return this.text.length;
  },
});
var cell = new TextCell('no\nway');
console.log(cell.heightProp); // → 2
cell.heightProp = 100;
console.log(cell.heightProp); // → 2
```

Você pode usar a propriedade similar set , no objeto passado à defineProperty , para especificar um método setter. Quando um getter é definido mas um setter não, escrever nessa propriedade é algo simplesmente ignorado.

---

## 6.7 - HERANÇA

Podemos simplismente construit um novo construtor com todos os três métodos em seu protótipo. Mas protótipos podem ter eus próprios protótipos, e isso nos permite fazer algo inteligente.

```js
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(repeat(' ', width - line.length) + line);
  }
  return result;
};
```

Nós reusamos o contrutor e os métodos `minHeight` e `minWidth` de `TextCell`. Um `RTextCell` é agora basicamente equivalente a `TextCell`, exceto que seu método `draw` contém um função diferente. Este padrão é chamado _herança_. Isso nos permite construir tipos de dados levemnete diferentes a partir de tipos de dados existentes com relativamente pouco esforço.

Agora, se nós ajustarmos sutilmente a função `dataTable`para usar `RTextCell` para as célular cujo valor é um número, vamos obter a tabela que estávamos buscando.

```js
function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function (name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function (row) {
    return keys.map(function (name) {
      var value = row[name];
      // This was changed:
      if (typeof value == 'number') return new RTextCell(String(value));
      else return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}
console.log(drawTable(dataTable(MOUNTAINS)));
// → … beautifully aligned table
```

Herança é uma parte fundamental da orientação a objetos tradiconal, ao lado de encapsulamento e polimorfismo. A principal razão para isso é que este tópico é geralmente confundido com polimorfismo, vendido como uma ferramenta mais poderosa do que realmente é, e subsequentemente usado em excesso de diversas horríveis formas. Onde encapsulamento e polimorfismo podem ser usados para separar pedaços de código de cada um, reduzindo o emaranhamento de todo o programa, herança fundamentalmente vincula os tipos, criando mais emaranhados.

Você pode ter polimorfismo sem herança. Mas você deve vê-la como um leve truque desonesto que vai ajudá-lo a definir novos tipos com menos código, não como um grande princípio de organização de código.

---

## 6.8 - O OPERADOR INSTANCEOF

Ocasionalmente é útil saber se um objeto foi derivado de um construtor em específico. Para isso, o JavaScript fornece um operador binário chamado instaceof.

```js
console.log(new RTextCell('A') instanceof RTextCell); // → true
console.log(new RTextCell('A') instanceof TextCell); // → true
console.log(new TextCell('A') instanceof RTextCell); // → false
console.log([1] instanceof Array); // → true
```

O operador vai olhar através dos tipos herdados. Um RTextCell é uma instância de TextCell porque _RTextCell.prototype_ deriva de _TextCell.prototype_ . O operador pode ser aplicado a construtores padrão como Array . Praticamente todos os objetos são uma instância de Object.

---

## RESUMO

Então objetos são mais complicados do que inicialmente eu os retratei. Eles tem protótipos, que são outros bjetos, e vão agir como se tivessem propriedades que eles não tem caso seu protótipo tenha essa propriedade. Objetos simples tem Object.prototype como seus protótipos.

Construtores, que são funções cujos nomes usualmente iniciam com uma letra maiúscula, podem ser usador com o operador new para criar objetos. O protótipo do novo objeto será o objeto encontrado na propriedade prototype da função construtora. Você pode fazer bom uso disso adicionando propriedades que todos os valores de um tipo compartilham em seus protótipos. O operador instanceof pode, dado um objeto e um construtor, dizer se o objeto é uma instância deste construtor.

Algo útil a se fazer com objetos é especificar uma interface para eles e dizer para todos quer irão supostamente conversar com seu objeto a fazer isso somente por essa interface. O resto dos detalhes que constroem seu objeto estão agora encapsulados, escondidos atrás da interface.

Uma vez que você esteja conversando em termos de interfaces, quem diz que apenas um tipo de objeto pode implementar essa interface? Ter diferentes objetos expondo a mesma interface é chamado de polimorfismo. Isso é muito útil.

Quando implementando vários tipos que diferem apenas em alguns detalhes, pode ser útil simplesmente criar o protótipo do seu novo tipo derivando do protótipo do seu antigo tipo e ter seu novo construtor chamando o antigo. Isso lhe dá um tipo similar de objeto ao antigo mas que permite que você adicione ou sobrescreva propriedades quando necessário.
