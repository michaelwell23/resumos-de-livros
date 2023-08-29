// Faz um pedido HTTP GET síncrono solicitando o conteúdo do URL especificado.
// Retorna o texto da resposta ou dispara um erro, caso o pedido não seja bem-sucedido
// ou se a resposta não era texto.
function getTextSync(url) {
  var request = new XMLHttpRequest(); // Cria nova requisição
  request.open('GET', url, false);
  // Passa false para síncrono

  request.send(null);

  // Dispara um erro se o pedido não era 200 OK
  if (request.status !== 200) throw new Error(request.statusText);

  // Dispara um erro se o tipo era errado
  var type = request.getResponseHeader('Content-Type');
  if (!type.match(/^text/))
    throw new Error('Expected textual response; got: ' + type);
  return request.responseText;
}
