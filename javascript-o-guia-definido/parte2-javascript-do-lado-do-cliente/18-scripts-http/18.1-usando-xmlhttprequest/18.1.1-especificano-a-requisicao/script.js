request.open(
  'GET',
  // Começa com uma requisição HTTP GET
  'data.csv'
); // Para o conteúdo desse URL

// POSTando (com POST) texto puro em um servidor
function postMessage(msg) {
  var request = new XMLHttpRequest(); // Novo pedido
  request.open('POST', '/log.php'); // POST para um script no lado do servidor
  // Envia a mensagem, em texto puro, como corpo do pedido
  request.setRequestHeader(
    'Content-Type',
    // O corpo do pedido vai ser texto puro
    'text/plain;charset=UTF-8'
  );
  request.send(msg);
  // Envia msg como corpo do pedido
  // O pedido está pronto. Ignoramos qualquer resposta ou qualquer erro.
}
