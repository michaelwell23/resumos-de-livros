// O Exemplo abaixo mostra como poderíamos alterar a classe range do Exemplo 9-1 para usar uma função construtora em vez de uma função fábrica

// range2.js: Outra classe representando um intervalo de valores.

// Esta é a função construtora que inicializa novos objetos Range.
// Note que ela não cria nem retorna o objeto. Ela apenas inicializa this.
function Range(from, to) {
  // Armazena os pontos inicial e final (estado) desse novo objeto range.
  // Essas são propriedades não herdadas exclusivas desse objeto.
  this.from = from;
  this.to = to;
}

// Todos os objetos Range herdam desse objeto.
// Note que o nome de propriedade deve ser "prototype" para que isso funcione.
Range.prototype = {
  // Retorna true se x está no intervalo; caso contrário, false
  // Este método funciona tanto para intervalos textuais e Date como para numéricos.
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  // Chama f uma vez para cada inteiro no intervalo.
  // Este método só funciona para intervalos numéricos.
  foreach: function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  // Retorna uma representação de string do intervalo
  toString: function () {
    return '(' + this.from + '...' + this.to + ')';
  },
};

// Aqui estão exemplos de uso de um objeto range
var r = new Range(1, 3); // cria um objeto Range
r.includes(2); // =>  verdadeiro: 2 está no intervalo
r.foreach(console.log); // Imprime 1 2 3
console.log(r); // Imprime (1...3)
