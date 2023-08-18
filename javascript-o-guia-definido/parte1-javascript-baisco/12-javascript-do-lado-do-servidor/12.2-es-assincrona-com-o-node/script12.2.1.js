// Exemplo 12-2 Um servidor de HTTP em Node
// Este é um servidor de HTTP NodeJS simples que pode servir arquivos do
// diretório corrente e que também implementa duas URLs especiais para teste.
// Conecta no servidor em http://localhost:8000 ou http://127.0.0.1:8000
// Primeiramente, carrega os módulos que vamos usar

var http = require('http'); // API do servidor de HTTP
var fs = require('fs'); // Para trabalhar com arquivos locais

var server = new http.Server(); // Cria um novo servidor de HTTP
server.listen(8000); // Executa-o na porta 8000.

// O Node usa o método "on()" para registrar rotinas de tratamento de evento.
// Quando o servidor recebe um novo pedido, executa esta função para tratar dele.
server.on('request', function (request, response) {
  // Analisa o URL solicitado
  var url = require('url').parse(request.url);
  // Um URL especial que apenas faz o servidor esperar antes de enviar a
  // resposta. Isso pode ser útil para simular uma conexão de rede lenta.
  if (url.pathname === '/test/delay') {
    // Usa string de consulta para quantidade de atraso, ou 2000 milissegundos
    var delay = parseInt(url.query) || 2000;
    // Configura o código de status da resposta e cabeçalhos
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
    // Começa a gravar o corpo da resposta imediatamente
    response.write('Sleeping for ' + delay + ' milliseconds...');
    // E então termina em outra função chamada posteriormente.
    setTimeout(function () {
      response.write('done.');
      response.end();
    }, delay);
  }
  // Se o pedido foi por "/test/mirror", envia o pedido de volta literalmente
  // Útil quando é preciso ver os cabeçalhos e o corpo do pedido.
  else if (url.pathname === '/test/mirror') {
    // Status e cabeçalhos da resposta
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
    // Inicia o corpo da resposta com o pedido
    response.write(
      request.method +
        ' ' +
        request.url +
        ' HTTP/' +
        request.httpVersion +
        '\r\n'
    );
    // E os cabeçalhos do pedido
    for (var h in request.headers) {
      response.write(h + ': ' + request.headers[h] + '\r\n');
    }
    response.write('\r\n'); // Finaliza os cabeçalhos com uma linha em branco extra
    // Completamos a resposta nestas funções de tratamento de evento:
    // Quando for um trecho do corpo da resposta, adiciona-o na resposta.
    request.on('data', function (chunk) {
      response.write(chunk);
    });
    // Quando o pedido termina, a resposta também terminou.
    request.on('end', function (chunk) {
      response.end();
    });
  }
  // Caso contrário, serve um arquivo do diretório local.
  else {
    // Obtém nome de arquivo local e supõe seu tipo de conteúdo com base na extensão.
    var filename = url.pathname.substring(1);
    // corta o início /
    var type;
    switch (filename.substring(filename.lastIndexOf('.') + 1)) {
      // extensão
      case 'html':
      case 'htm':
        type = 'text/html; charset=UTF-8';
        break;
      case 'js':
        type = 'application/javascript; charset=UTF-8';
        break;
      case 'css':
        type = 'text/css; charset=UTF-8';
        break;
      case 'txt':
        type = 'text/plain; charset=UTF-8';
        break;
      case 'manifest':
        type = 'text/cache-manifest; charset=UTF-8';
        break;
      default:
        type = 'application/octet-stream';
        break;
    }

    // Lê o arquivo de forma assíncrona e passa o conteúdo como um único
    // trecho para a função callback. Para arquivos realmente grandes,
    // usar a API de streaming com fs.createReadStream() seria melhor.
    fs.readFile(filename, function (err, content) {
      if (err) {
        // Se não pudermos ler o arquivo por algum motivo
        response.writeHead(404, {
          // Envia o status 404 Not Found
          'Content-Type': 'text/plain; charset=UTF-8',
        });
        response.write(err.message);
        // Corpo da mensagem de erro simples
        response.end();
        // Terminou
      } else {
        // Caso contrário, se o arquivo foi lido com sucesso.
        response.writeHead(
          200, // Configura o código de status e o tipo MIME
          { 'Content-Type': type }
        );
        response.write(content); // Envia o conteúdo do arquivo como corpo da
        // resposta
        response.end();
        // E terminamos
      }
    });
  }
});
