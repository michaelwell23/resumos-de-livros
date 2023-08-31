var loader = new Worker('utils/loader.js');

loader.postMessage('file.txt');

worker.onmessage = function (e) {
  var message = e.data;
  console.log('URL contents: ' + message);
};

worker.onerror = function (e) {
  // Registra a mensagem de erro, incluindo o nome de arquivo do worker e o número da
  // linha
  console.log('Error at ' + e.filename + ':' + e.lineno + ': ' + e.message);
};
