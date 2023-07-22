// Na programação funcional, esse tipo de uso de cache é denominado memoização. O código a seguir mostra uma função de ordem mais alta, memoize() , que aceita uma função como argumento e retorna uma versão memoizada da função:
// Retorna uma versão memoizada de f.
// Só funciona se todos os argumentos de f têm representações de string distintas.
function memoize(f) {
  var cache = {}; // Cache de valores armazenada na closure.
  return function () {
    // Cria uma versão de string dos argumentos para usar como chave de cache.
    var key = arguments.length + Array.prototype.join.call(arguments, ',');
    if (key in cache) return cache[key];
    else return (cache[key] = f.apply(this, arguments));
  };
}

// A função memoize() cria um novo objeto para usar como cache e atribui esse objeto a uma variável local, de modo que é privado (na closure da) da função retornada. A função retornada converte seu array de argumentos em uma string e usa essa string como nome de propriedade do objeto cache. Se um valor existe na cache, ela o retorna diretamente. Caso contrário, ela chama a função especificada para calcular o valor para esses argumentos, coloca esse valor na cache e o retorna. Aqui está como podemos usar memoize() :
// Retorna o máximo divisor comum de dois inteiros, usando o algoritmo
// euclidiano: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a, b) {
  // A verificação de tipo para a e b foi omitida
  var t;
  // Variável temporária para troca de valores
  if (a < b) (t = b), (b = a), (a = t);
  // Garante que a >= b
  while (b != 0) (t = b), (b = a % b), (a = t); // Este é o algoritmo de Euclides para MDC
  return a;
}
var gcdmemo = memoize(gcd);
gcdmemo(85, 187); // => 17
// Note que, quando escrevemos uma função recursiva que vai ser memoizada,
// normalmente queremos aplicar recursividade na versão memoizada e não na original.
var factorial = memoize(function (n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});
factorial(5);
// => 120. Também coloca na cache os valores para 4, 3, 2 e 1.
