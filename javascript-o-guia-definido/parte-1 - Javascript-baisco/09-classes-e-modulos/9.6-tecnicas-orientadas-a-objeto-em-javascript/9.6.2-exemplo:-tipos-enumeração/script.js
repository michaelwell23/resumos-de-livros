// Cria uma nova classe Coin com quatro valores: Coin.Penny, Coin.Nickel, etc.
var Coin = enumeration({ Penny: 1, Nickel: 5, Dime: 10, Quarter: 25 });
var c = Coin.Dime;
// Esta é uma instância da nova classe
c instanceof Coin;
// => verdadeiro: instanceof funciona
c.constructor == Coin;
// => verdadeiro: a propriedade constructor funciona
Coin.Quarter + 3 * Coin.Nickel;
// => 40: valores são convertidos em números
Coin.Dime == 10;
// => verdadeiro: mais conversão para números
Coin.Dime > Coin.Nickel;
// => verdadeiro: operadores relacionais funcionam
String(Coin.Dime) + ':' + Coin.Dime; // => "Dime:10": forçado a ser string

// Esta função cria um novo tipo enumeração. O objeto argumento especifica
// os nomes e valores de cada instância da classe. O valor de retorno
// é uma função construtora que identifica a nova classe. Note, entretanto,
// que a construtora lança uma exceção: você não pode usá-la para criar novas
// instâncias do tipo. A construtora retornada tem propriedades que
// mapeiam o nome de um valor no valor em si e também um array de valores,
// uma função iteradora foreach()
function enumeration(namesToValues) {
  // Esta é a função construtora fictícia que será o valor de retorno.
  var enumeration = function () {
    throw "Can't Instantiate Enumerations";
  };
  // Os valores enumerados herdam deste objeto.
  var proto = (enumeration.prototype = {
    constructor: enumeration,
    toString: function () {
      return this.name;
    },
    valueOf: function () {
      return this.value;
    },
    // Identifica o tipo
    // Retorna o nome
    // Retorna o valor
    toJSON: function () {
      return this.name;
    }, // Para serialização
  });
  enumeration.values = [];
  // Um array dos objetos value enumerados
  // Agora cria as instâncias desse novo tipo.
  for (name in namesToValues) {
    // Para cada valor
    var e = inherit(proto);
    // Cria um objeto para representá-lo
    e.name = name;
    // Dá um nome a ele
    e.value = namesToValues[name]; // E um valor
    enumeration[name] = e;
    // Torna-o uma propriedade da construtora
    enumeration.values.push(e);
    // E armazena no array values
  }
  // Um método de classe para iterar entre as instâncias da classe
  enumeration.foreach = function (f, c) {
    for (var i = 0; i < this.values.length; i++) f.call(c, this.values[i]);
  };
  // Retorna a construtora que identifica o novo tipo
  return enumeration;
}

// Representando cartas com tipos enumeração
// Define uma classe para representar cartas de baralho
function Card(suit, rank) {
  this.suit = suit;
  // Cada carta tem um naipe
  this.rank = rank;
  // e uma posição
}
// Esses tipos enumeração definem o naipe e os valores da posição
Card.Suit = enumeration({ Clubs: 1, Diamonds: 2, Hearts: 3, Spades: 4 });
Card.Rank = enumeration({
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
});
// Define uma representação textual para uma carta
Card.prototype.toString = function () {
  return this.rank.toString() + ' of ' + this.suit.toString();
};
// Compara o valor de duas cartas como no pôquer
Card.prototype.compareTo = function (that) {
  if (this.rank < that.rank) return -1;
  if (this.rank > that.rank) return 1;
  return 0;
};
// Uma função para ordenar as cartas como no pôquer
Card.orderByRank = function (a, b) {
  return a.compareTo(b);
};

// Uma função para ordenar as cartas como no bridge
Card.orderBySuit = function (a, b) {
  if (a.suit < b.suit) return -1;
  if (a.suit > b.suit) return 1;
  if (a.rank < b.rank) return -1;
  if (a.rank > b.rank) return 1;
  return 0;
};
// Define uma classe para representar um baralho padrão
function Deck() {
  var cards = (this.cards = []);
  // Um maço de cartas é apenas um array de cartas
  Card.Suit.foreach(function (s) {
    // Inicializa o array
    Card.Rank.foreach(function (r) {
      cards.push(new Card(s, r));
    });
  });
}
// Método shuffle: embaralha as cartas no local e retorna o maço
Deck.prototype.shuffle = function () {
  // Para cada elemento no array, troca por um elemento mais baixo escolhido
  //aleatoriamente
  var deck = this.cards,
    len = deck.length;
  for (var i = len - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1)),
      temp;
    // Número aleatório
    (temp = deck[i]), (deck[i] = deck[r]), (deck[r] = temp);
    // Troca
  }
  return this;
};
// Método deal: retorna um array de cartas
Deck.prototype.deal = function (n) {
  if (this.cards.length < n) throw 'Out of cards';
  return this.cards.splice(this.cards.length - n, n);
};
// Cria um novo maço de cartas, embaralha e distribui uma mão de bridge
var deck = new Deck().shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);
