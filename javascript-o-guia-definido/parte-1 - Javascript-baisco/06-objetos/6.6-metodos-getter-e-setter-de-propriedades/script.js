// A maneira mais fácil de definir propriedades de acesso é com uma extensão da sintaxe de objeto literal:
var o = {
  // Uma propriedade de dados normal
  data_prop: value,
  // Uma propriedade de acesso definida como um par de funções
  get accessor_prop() {
    /* corpo da função aqui */
  },
  set accessor_prop(value) {
    /* corpo da função aqui */
  },
};

// considere o objeto a seguir, que representa um ponto cartesiano bidimensional. Ele tem propriedades de dados normais para representar as coordenadas X e Y do ponto e tem propriedades de acesso para as coordenadas polares equivalentes do ponto:
var p = {
  // x e y são propriedades de dados de leitura-gravação normais.
  x: 1.0,
  y: 1.0,
  // r é uma propriedade de acesso de leitura-gravação com métodos getter e setter.
  // Não se esqueça de colocar uma vírgula após os métodos de acesso.
  get r() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  set r(newvalue) {
    var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
    var ratio = newvalue / oldvalue;
    this.x *= ratio;
    this.y *= ratio;
  },
  // theta é uma propriedade de acesso somente para leitura, apenas com o método getter.
  get theta() {
    return Math.atan2(this.y, this.x);
  },
};

// O código a seguir usa propriedades de acesso para definir uma API que fornece duas representações (coordenadas cartesianas e coordenadas polares) de um único conjunto de dados.
var q = inherit(p); // Cria um novo objeto que herda métodos getter e setter
(q.x = 1), (q.y = 1); // Cria as propriedades de dados próprias de q
console.log(q.r); // E usa as propriedades de acesso herdadas
console.log(q.theta);

// Este objeto gera números seriais estritamente crescentes
var serialnum = {
  // Esta propriedade de dados contém o próximo número serial.
  // O $ no nome da propriedade sugere que se trata de uma propriedade privada.
  $n: 0,
  // Retorna o valor atual e o incrementa
  get next() {
    return this.$n++;
  },
  // Configura um novo valor de n, mas somente se for maior do que o atual
  set next(n) {
    if (n >= this.$n) this.$n = n;
    else throw 'serial number can only be set to a larger value';
  },
};

// Este objeto tem propriedades de acesso que retornam números aleatórios.
// A expressão "random.octet", por exemplo, gera um número aleatório
// entre 0 e 255 sempre que é avaliada.
var random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
  get uint16() {
    return Math.floor(Math.random() * 65536);
  },
  get int16() {
    return Math.floor(Math.random() * 65536) - 32768;
  },
};
