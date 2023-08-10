// Uma função type() para determinar o tipo de um valor

/**
 * Retorna o tipo de o como uma string:
 * -Se o é null, retorna "null", se o é NaN, retorna "nan".
 * -Se typeof retorna um valor diferente de "object", retorna esse valor.
 * (Note que algumas implementações identificam regexps como funções.)
 * -Se a classe de o é qualquer coisa diferente de "Object", retorna isso.
 * -Se o tem uma construtora e essa construtora tem um nome, retorna-o.
 *
 **/
function type(o) {
  var t, c, n; // tipo, classe, nome

  // Caso especial para o valor null:
  if (o === null) return 'null';

  // Outro caso especial: NaN é o único valor que não é igual a si mesmo:
  if (o !== o) return 'nan';

  // Usa typeof para qualquer valor diferente de "object".
  // Isso identifica qualquer valor primitivo e também funções.
  if ((t = typeof o) !== 'object') return t;

  // Retorna a classe do objeto, a não ser que seja "Object".
  // Isso vai identificar a maioria dos objetos nativos.
  if ((c = classof(o)) !== 'Object') return c;

  // Retorna o nome da construtora do objeto, se ele tiver uma
  if (
    o.constructor &&
    typeof o.constructor === 'function' &&
    (n = o.constructor.getName())
  )
    return n;
  // Não podemos determinar um tipo mais específico; portanto, retorna "Object"
  return 'Object';
}

// Retorna a classe de um objeto.
function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}
// Retorna o nome de uma função (pode ser "") ou null para o que não for função
Function.prototype.getName = function () {
  if ('name' in this) return this.name;
  return (this.name = this.toString().match(/function\s*([^(]*)\(/)[1]);
};

// Definindo uma expressão de função não nomeada, onde o método getName() retorna uma string vazia.
// Esta construtora não tem nome
var Complex = function (x, y) {
  this.r = x;
  this.i = y;
};
// Esta construtora tem nome
var Range = function Range(f, t) {
  this.from = f;
  this.to = t;
};
