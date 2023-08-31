// Obtém (com GET) o conteúdo do url como um Blob e passa-o para a função callback
// especificada.
// Este código não está testado: nenhum navegador suportava essa API quando ele foi
// escrito.
function getBlob(url, callback) {
  var xhr = new XMLHttpRequest(); // Cria novo objeto XHR
  xhr.open('GET', url);
  // Especifica o URL a ser buscado
  xhr.responseType = 'blob';
  // Gostaríamos de um Blob, por favor
  xhr.onload = function () {
    // onload é mais fácil do que onreadystatechange
    callback(xhr.response);
    // Passa o blob para nossa função callback
  };
  // Note .response e não .responseText
  xhr.send(null);
  // Envia o pedido agora
}
