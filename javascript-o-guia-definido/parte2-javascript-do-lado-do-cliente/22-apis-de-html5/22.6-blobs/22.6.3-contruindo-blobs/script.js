// Cria um novo BlobBuilder
var bb = new BlobBuilder();
// Anexa uma string no blob e marca o final da string com um caractere NUL
bb.append(
  'This blob contains this text and 10 big-endian 32 bits signed ints.'
);
bb.append('\0'); // Termina a string com NUL para marcar seu fim
// Armazena alguns dados em um ArrayBuffer
var ab = new ArrayBuffer(4 * 10);
var dv = new DataView(ab);
for (var i = 0; i < 10; i++) dv.setInt32(i * 4, i);
// Anexa o ArrayBuffer ao Blob
bb.append(ab);
// Agora obtém o blob do construtor, especificando um tipo MIME fictício
var blob = bb.getBlob('x-opcional/mime-type-here');
