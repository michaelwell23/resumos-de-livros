// Faz uma requisição HTTP GET solicitando o conteúdo do URL especificado.
// Quando a resposta chega com sucesso, verifica se é texto puro
// e, se for, a passa para a função callback especificada
function getText(url, callback) {
  var request = new XMLHttpRequest();
  // Cria nova requisição
  request.open('GET', url);
  // Especifica o URL a ser buscado
  request.onreadystatechange = function () {
    // Define receptor de evento
    // Se a requisição está completa e foi bem-sucedida
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader('Content-Type');
      if (type.match(/^text/))
        // Certifica-se de que a resposta seja texto
        callback(request.responseText); // A passa para callback
    }
  };
  request.send(null);
  // Envia a requisição agora
}
