// Função que define um objeto protótipo para uma classe que representa um intervalo de valores e também define uma função "fábrica", que cria e incializa uma nova instância de classe.

// range.js: Um classe representando um intervalo de valores (range).

// Está é uma função fábrica que retorna um novo objeto range.
function range(from, to) {
  // Usa a função inherit() para criar um objeto que herda do objeto protótipo definido a seguir. O objeto protótipo é armazenado como uma propriedade dessa função e define os métodos compartilhados (comportamento) de todo os objetos range.
  var r = inherit(range.methods);

  // Armazena os pontos inicial e final (estado) desse novo objeto range.
  // Essas são propriedades não herdadas exclusivas desse objeto.
  r.from = from;
  r.to = to;

  //Finalmente retorna o novo objeto
  return r;
}

// Este objeto protótipo define métodos herdados por todos os objetos range.
range.methods = {
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

// Aqui estão exemplos de uso de um objeto range.
var r = range(1, 3); // Cria um objeto range
r.includes(2); // => verdadeiro: 2 está no intervalo
r.foreach(console.log); // Imprime 1 2 3
console.log(r); // Imprime (1...3)
