function defineClass(
  constructor, // Uma função simples para definir classes simples
  methods, // Uma função que configura propriedades de instância
  statics // Métodos de instância: copiados para o protótipo
) {
  // Propriedades de classe: copiadas para a construtora
  if (methods) extend(constructor.prototype, methods);
  if (statics) extend(constructor, statics);
  return constructor;
}
// Esta é uma variante simples de nossa classe Range
var SimpleRange = defineClass(
  function (f, t) {
    this.f = f;
    this.t = t;
  },
  {
    includes: function (x) {
      return this.f <= x && x <= this.t;
    },
    toString: function () {
      return this.f + '...' + this.t;
    },
  },
  {
    upto: function (t) {
      return new SimpleRange(0, t);
    },
  }
);

/*

O Exemplo abaixo é uma definição de classe mais longa. Ela cria uma classe que representa números
complexos e demonstra como simular membros de classe estilo Java usando JavaScript.


 * Complex.js:
 * Este arquivo define uma classe Complex para representar números complexos.
 * Lembre-se de que um número complexo é a soma de um número real e um
 * número imaginário e de que o número imaginário i é a raiz quadrada de -1.
 */
/*
 * Esta função construtora define os campos de instância r e i em cada
 * instância que cria. Esses campos contêm as partes real e imaginária
 * do número complexo: eles são o estado do objeto.
 */
function Complex(real, imaginary) {
  if (isNaN(real) || isNaN(imaginary))
    // Certifica-se de que os dois args são números.
    throw new TypeError();
  // Lança um erro se não forem.
  this.r = real;
  // A parte real do número complexo.
  this.i = imaginary;
  // A parte imaginária do número.
}
/*
 * Os métodos de instância de uma classe são definidos como propriedades com valor de
 * funções do objeto protótipo. Os métodos definidos aqui são herdados por todas
 * as instâncias e fornecem o comportamento compartilhado da classe. Note que os
 * métodos de instância de JavaScript devem usar a palavra-chave this para acessar os
 * campos de instância.
 */
// Adiciona um número complexo em this e retorna a soma em um novo objeto.
Complex.prototype.add = function (that) {
  return new Complex(this.r + that.r, this.i + that.i);
};

// Multiplica esse número complexo por outro e retorna o produto.
Complex.prototype.mul = function (that) {
  return new Complex(
    this.r * that.r - this.i * that.i,
    this.r * that.i + this.i * that.r
  );
};

// Retorna a magnitude de um número complexo. Isso é definido
// como sua distância em relação à origem (0,0) do plano complexo.
Complex.prototype.mag = function () {
  return Math.sqrt(this.r * this.r + this.i * this.i);
};
// Retorna um número complexo que é o negativo deste.
Complex.prototype.neg = function () {
  return new Complex(-this.r, -this.i);
};
// Converte um objeto Complex em uma string de maneira útil.
Complex.prototype.toString = function () {
  return '{' + this.r + ',' + this.i + '}';
};
// Testa se esse objeto Complex tem o mesmo valor do outro.
Complex.prototype.equals = function (that) {
  return (
    that != null &&
    // deve ser definido e não nulo
    that.constructor === Complex &&
    // e deve ser uma instância de Complex
    this.r === that.r &&
    this.i === that.i
  ); // e ter os mesmos valores.
};
/*
 * Os campos de classe (como as constantes) e os métodos de classe são definidos como
 * propriedades da construtora. Note que os métodos de classe geralmente
 * não usam a palavra-chave this: eles operam somente em seus argumentos.
 */
// Aqui estão alguns campos de classe que contêm números complexos predefinidos úteis.
// Seus nomes estão em maiúsculas para indicar que são constantes.
// (Em ECMAScript 5, poderíamos tornar essas propriedades somente para leitura.)
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);
// Este método de classe analisa uma string no formato retornado pelo
// método de instância toString e retorna um objeto Complex ou lança um
// TypeError.
Complex.parse = function (s) {
  try {
    // Presume que a análise vai ser bem-sucedida
    var m = Complex._format.exec(s);
    // Mágica de expressão regular
    return new Complex(parseFloat(m[1]), parseFloat(m[2]));
  } catch (x) {
    // E dispara uma exceção se ela falha
    throw new TypeError("Can't parse '" + s + "' as a complex number.");
  }
};
// Um campo de classe "privado", usado em Complex.parse() acima.
// O sublinhado em seu nome indica que se destina a uso interno
// e não deve ser considerado parte da API pública dessa classe.
Complex._format = /^\{([^,]+),([^}]+)\}$/;

// usando a construtora, os campos de instância, os métodos de instância, os campos de classe e os métodos de classe:
var c = new Complex(2, 3); // Cria um novo objeto com a construtora
var d = new Complex(c.i, c.r); // Usa propriedades de instância de c
c.add(d).toString(); // => "{5,5}": usa métodos de instância
// Uma expressão mais complexa que usa um método e um campo de classe
Complex.parse(c.toString()) // Converte c em uma string e de volta novamente,
  .add(c.neg()) // adiciona seu negativo a ele,
  .equals(Complex.ZERO); // e ele sempre será igual a zero

Complex.prototype.toString = function () {
  with (this) {
    return '{' + r + ',' + i + '}';
  }
};
