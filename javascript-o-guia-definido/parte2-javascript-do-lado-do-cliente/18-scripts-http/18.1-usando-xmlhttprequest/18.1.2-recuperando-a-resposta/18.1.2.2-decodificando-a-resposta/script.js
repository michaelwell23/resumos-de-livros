// Faz uma requisição HTTP GET solicitando o conteúdo do URL especificado.
// Quando a resposta chega, a passa para a função callback como um
// objeto Document XML analisado, um objeto analisado com JSON ou uma string.
function get(url, callback) {
  var request = new XMLHttpRequest();
  // Cria nova requisição
  request.open('GET', url);
  // Especifica o URL a ser buscado
  request.onreadystatechange = function () {
    // Define o ouvinte de evento
    // Se a requisição está completo e foi bem-sucedido
    if (request.readyState === 4 && request.status === 200) {
      // Obtém o tipo da resposta
      var type = request.getResponseHeader('Content-Type');
      // Verifica o tipo para que não obtenhamos documentos HTML no futuro
      if (type.indexOf('xml') !== -1 && request.responseXML)
        callback(request.responseXML);
      // Resposta Document
      else if (type === 'application/json')
        callback(JSON.parse(request.responseText)); // Resposta JSON
      else callback(request.responseText);
      // Resposta string
    }
  };
  request.send(null);
  // Envia a requisição agora
}

// Não processa a resposta como um documento XML
request.overrideMimeType('text/plain; charset=utf-8');
