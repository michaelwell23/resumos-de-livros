var blob = '...'; // Vamos ver posteriormente como obter um Blob
blob.size;
// Tamanho do Blob em bytes
blob.type;
// Tipo MIME do Blob ou "", se for desconhecido
var subblob = blob.slice(0, 1024, 'text/plain'); // Primeiro 1K do Blob como texto
var last = blob.slice(blob.size - 1024, 1024);
// Último 1K do Blob, não tipado
