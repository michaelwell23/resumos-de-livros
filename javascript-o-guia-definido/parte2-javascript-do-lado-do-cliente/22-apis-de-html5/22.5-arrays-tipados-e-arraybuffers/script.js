var bytes = new Uint8Array(1024);
for (var i = 0; i < bytes.length; i++) bytes[i] = i & 0xff;
var copy = new Uint8Array(bytes);
var ints = new Int32Array([0, 1, 2, 3]);

// Retorna o maior número primo menor do que n, usando o crivo de Eratóstenes
function sieve(n) {
  var a = new Int8Array(n + 1);
  // a[x] será 1 se x for composto
  var max = Math.floor(Math.sqrt(n));
  // Não faz fatores mais altos do que isso
  var p = 2;
  // 2 é o primeiro primo
  while (p <= max) {
    // Para primos menores do que max
    for (
      var i = 2 * p;
      i <= n;
      i += p // Marca múltiplos de p como compostos
    )
      a[i] = 1;
    while (a[++p] /* vazio */);
    // O próximo índice não marcado é primo
  }
  while (a[n]) n--;
  // Itera para trás para encontrar o último
  // primo
  return n;
  // E o retorna
}

var matrix = new Float64Array(9);
// var 3dPoint = new Int16Array(3);
var rgba = new Uint8Array(4);
var sudoku = new Uint8Array(81);

var bytes = new Uint8Array(1024);
// Um buffer de 1K
var pattern = new Uint8Array([0, 1, 2, 3]); // Um array de 4 bytes
bytes.set(pattern);
// Copia-os no início de outro array de bytes
bytes.set(pattern, 4);
// Copia-os novamente, em um deslocamento diferente
bytes.set([0, 1, 2, 3], 8);
// Ou apenas copia valores direto de um array normal

var ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
var last3 = ints.subaarray(ints.length - 3, ints.length);
last3[0];
// => 7: isso é o mesmo que ints[7]

ints[9] = -1;
last3[2];

last3.buffer;
last3.buffer == ints.buffer;
last3.byteOffset;
last3.byteLength;

last3.byteLength;
last3.buffer.byteLength;

var bytes = new Uint8Array(8);
bytes[0] = 1;
bytes.buffer[0];
bytes.buffer[1] = 255;
bytes.buffer[1];
bytes[1];

var buf = new ArrayBuffer(1024 * 1024);
var asbytes = new Uint8Array(buf);
var asints = new Int32Array(buf);
var lastK = new Uint8Array(buf, 1023 * 1024);
var ints2 = new Int32Array(buf, 1024, 256);

// Se o inteiro 0x00000001 é organizado na memória como 01 00 00 00, então
// estamos em uma plataforma little-endian. Em uma plataforma big-endian, obteríamos
// os bytes 00 00 00 01.
var little_endian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;

var data;
var view = DataView(data);
var int = view.getInt32(0);
int = view.getInt32(4, false);
int = view.getInt32(8, true);
view.setInt32(8, int, false);
