// Object.create()
var o1 = Object.create({ x: 1, y: 2 }); // o1 herda as propriedades x e y.

// Pode-se passar null para criar um novo objeto que não tem protótipo, mas se você fizer isso, o objeto recém-criado não vai herdar nada, nem mesmo métodos básicos, como toString()
var o2 = Object.create(null); // o2 não herda propriedades nem métodos.

// Se quiser criar um objeto vazio normal (como o objeto retornado por {} ou por new Object() ), passe Object.prototype :
var o3 = Object.create(Object.prototype); // o3 é como {} ou new Object().

/* Criando um novo objeto que herda de um protótipo */
// inherit() retorna um objeto recém-criado que herda propriedades do
// objeto protótipo p. Ele usa a função ECMAScript 5 Object.create() se
// estiver definida e, caso contrário, retrocede para uma técnica mais antiga.
function inherit(p) {
  if (p == null) throw TypeError(); // p deve ser um objeto não null
  if (Object.create)
    // Se Object.create() está definida...
    return Object.create(p);
  // então basta usá-la.
  var t = typeof p;
  // Caso contrário, faz mais alguma verificação de
  // tipo
  if (t !== 'object' && t !== 'function') throw TypeError();
  function f() {}
  // Define uma função construtora fictícia.
  f.prototype = p;
  // Configura sua propriedade prototype como p.
  return new f();
  // Usa f() para criar um "herdeiro" de p.
}

var o = { x: "don't change this value" };
library_function(inherit(o));
// Precavê contra modificações acidentais de o
