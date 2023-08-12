var sets = {};
sets.SingletonSet = sets.AbstractEnumerableSet.extend('...');

var collections;
// Declara (ou re-declara) a única variável global
if (!collections)
  // Se ela ainda não existe
  collections = {}; // Cria um objeto namespace de nível superior
collections.sets = {}; // E cria o namespace sets dentro dele.
// Agora começa a definição de nossas classes set dentro de collections.sets
collections.sets.AbstractSet = function () {
  '...';
};

var s = new sets.SingletonSet(1);

var Set = sets.Set; // Importa Set para o espaço de nomes global
var s = new Set(1, 2, 3); // Agora podemos usá-la sem o prefixo sets.

var sets = com.davidflanagan.collections.sets;
