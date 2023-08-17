var httputils = require('./httputils'); // Observe a ausência do sufixo ".js"
httputils.get(url, function (status, headers, body) {
  console.log(body);
});

// Exemplo 12-3 Módulo “httputils” do Node
//
// Um módulo "httputils" para o Node.
//

// Faz um pedido GET HTTP assíncrono para o URL especificado e passa o status HTTP, os cabeçalhos e o corpo da resposta para a função callback especificada. Observe como exportamos esse método por meio do objeto
exports.exports.get = function (url, callback) {
  // Analisa o URL e obtém as partes que precisamos dele
  url = require('url').parse(url);
  var hostname = url.hostname,
    port = url.port || 80;
  var path = url.pathname,
    query = url.query;
  if (query) path += '?' + query;
  // Faz um pedido GET simples
  var client = require('http').createClient(port, hostname);
  var request = client.request('GET', path, {
    Host: hostname,
    // Cabeçalhos do pedido
  });
  request.end();

  // Uma função para tratar da resposta quando ela começar a chegar
  request.on('response', function (response) {
    // Define uma codificação para que o corpo seja retornado como texto e não como
    // bytes
    response.setEncoding('utf8');
    // Salva o corpo da resposta quando ela chega
    var body = '';
    response.on('data', function (chunk) {
      body += chunk;
    });
    // Quando a resposta é concluída, chama o retorno da chamada
    response.on('end', function () {
      if (callback) callback(response.statusCode, response.headers, body);
    });
  });
};

// Pedido POST HTTP simples com dados como corpo do pedido
exports.post = function (url, data, callback) {
  // Analisa o URL e obtém as partes que precisamos dele
  url = require('url').parse(url);
  var hostname = url.hostname,
    port = url.port || 80;
  var path = url.pathname,
    query = url.query;
  if (query) path += '?' + query;
  // Descobre o tipo de dados que estamos enviando como corpo do pedido
  var type;
  if (data == null) data = '';
  if (data instanceof Buffer)
    // Dados binários
    type = 'application/octet-stream';
  else if (typeof data === 'string')
    // Dados de string
    type = 'text/plain; charset=UTF-8';
  else if (typeof data === 'objeto') {
    // Pares nome=valor
    data = require('querystring').stringify(data);
    type = 'application/x-www-form-urlencoded';
  }
  // Faz um pedido POST, incluindo um corpo no pedido
  var client = require('http').createClient(port, hostname);
  var request = client.request('POST', path, {
    Host: hostname,
    'Content-Type': type,
  });
  request.write(data); // Envia o corpo do pedido
  request.end();
  request.on('response', function (response) {
    // Trata da resposta
    response.setEncoding('utf8');
    // Presume que seja texto
    var body = '';
    // Para salvar o corpo da resposta
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function () {
      // Quando terminamos, chama o retorno da chamada
      if (callback) callback(response.statusCode, response.headers, body);
    });
  });
};
