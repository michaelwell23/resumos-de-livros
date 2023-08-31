/*
 * Isto é código JavaScript do lado do servidor para ser executado com NodeJS.
 * Ele executa um servidor WebSocket em cima de um servidor HTTP, usando uma biblioteca
 * websocket externa do endereço https://github.com/miksago/node-websocket-server/
 * Se recebe uma requisição HTTP para "/", retorna o rquivo HTML do cliente de chat.
 * Qualquer outra requisição HTTP retorna 404. As mensagens recebidas via
 * protocolo WebSocket são simplesmente transmitidas para todas as conexões ativas.
 */
var http = require('http');
// Usa a API de servidor HTTP de Node
var ws = require('websocket-server');
// Usa uma biblioteca WebSocket externa
// Lê a origem do cliente de chat na inicialização. Usado a seguir.
var clientui = require('fs').readFileSync('wschatclient.html');
// Cria um servidor HTTP
var httpserver = new http.Server();
// Quando o servidor HTTP recebe uma nova requisição, executa esta função
httpserver.on('request', function (request, response) {
  // Se a requisição foi por "/", envia a interface com o usuário de chat do lado
  // do cliente.
  if (request.url === '/') {
    // Um pedido para a interface com o usuário de chat
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(clientui);
    response.end();
  } else {
    // Para qualquer outra requisição, envia um código 404 "Not Found"
    response.writeHead(404);
    response.end();
  }
});
// Agora empacota um servidor WebSocket em torno do servidor HTTP
var wsserver = ws.createServer({ server: httpserver });
// Chama esta função quando recebemos uma nova requisição de conexão
wsserver.on('connection', function (socket) {
  socket.send('Welcome to the chat room.');
  // Cumprimenta o novo cliente
  socket.on('message', function (msg) {
    // Capta msgs do cliente
    wsserver.broadcast(msg);
    // E as transmite para todos
  });
});
// Executa o servidor na porta 8000. Iniciar o servidor WebSocket inicia também o
// servidor HTTP. Conecte http://localhost:8000/ para usá-lo.
wsserver.listen(8000);
