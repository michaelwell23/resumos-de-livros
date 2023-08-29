var ticker = new EventSource('stockprices.php');
ticker.onmessage = function (e) {
  var type = e.type;
  var data = e.data;
  // Agora processa o tipo de evento e as strings de dados do evento.
};

// Simula a API EventSource para navegadores que não a suportam.
// Exige um objeto XMLHttpRequest que envie eventos readystatechange quando
// há novos dados escritos em uma conexão HTTP de longa duração. Note que
// esta não é uma implementação completa da API: ela não suporta a
// propriedade readyState, o método close() nem os eventos open e error.
// Além disso, o registro de evento para eventos message é feito apenas por meio da
// propriedade onmessage -- esta versão não define um método addEventListener.
if (window.EventSource === undefined) {
  // Se EventSource não estiver definido,
  window.EventSource = function (url) {
    // simula-o deste modo.
    var xhr;
    // Nossa conexão HTTP...
    var evtsrc = this;
    // Usado nas rotinas de tratamento de evento.
    var charsReceived = 0;
    // Para que possamos identificar o que é novo.
    var type = null;
    // Para verificar o tipo de resposta da propriedade.
    var data = '';
    // Contém dados da mensagem
    var eventName = 'message'; // O campo de tipo de nossos objetos evento
    var lastEventId = '';
    // Para sincronizar novamente com o servidor
    var retrydelay = 1000;
    // Atraso entre tentativas de conexão
    var aborted = false;
    // Configura como true para abandonar a conexão
    // Cria um objeto XHR
    xhr = new XMLHttpRequest();
    // Define uma rotina de tratamento de evento para ele
    xhr.onreadystatechange = function () {
      switch (xhr.readyState) {
        case 3:
          processData();
          break;
        // Quando um trecho de dados chega
        case 4:
          reconnect();
          break;
        // Quando a requisição fecha
      }
    };

    // E estabelece uma conexão de longa duração por meio dele
    connect();

    // Se a conexão se fecha normalmente,
    function reconnect() {
      if (aborted) return;
      if (xhr.status >= 300) return;
      setTimeout(connect, retrydelay);
    }

    // É assim que estabelecemos uma conexão
    function connect() {
      charsReceived = 0;
      type = null;
      xhr.open('GET', url);
      xhr.setRequestHeader('Cache-Control', 'no-cache');
      if (lastEventId) xhr.setRequestHeader('Last-Event-ID', lastEventId);
      xhr.send();
    }
    // Cada vez que dados chegam, processa-os e dispara a rotina de tratamento de
    // onmessage
    // Esta função trata dos detalhes do protocolo Server-Sent Events
    function processData() {
      if (!type) {
        // Verifica o tipo de resposta, se ainda não verificamos
        type = xhr.getResponseHeader('Content-Type');
        if (type !== 'text/event-stream') {
          aborted = true;
          xhr.abort();
          return;
        }
      }
      // Monitora o quanto recebemos e obtém apenas a
      // parte da resposta que ainda não processamos.
      var chunk = xhr.responseText.substring(charsReceived);
      charsReceived = xhr.responseText.length;
      // Decompõe o trecho de texto em linhas e itera por elas.
      var lines = chunk.replace(/(\r\n|\r|\n)$/, '').split(/\r\n|\r|\n/);
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i],
          pos = line.indexOf(':'),
          name,
          value = '';
        if (pos == 0) continue; // Ignora comentários
        if (pos > 0) {
          // campo nome:valor
          name = line.substring(0, pos);
          value = line.substring(pos + 1);
          if (value.charAt(0) == ' ') value = value.substring(1);
        } else name = line;
        // somente nome de campo
        switch (name) {
          case 'event':
            eventName = value;
            break;
          case 'data':
            data += value + '\n';
            break;
          case 'id':
            lastEventId = value;
            break;
          case 'retry':
            retrydelay = parseInt(value) || 1000;
            break;
          default:
            break; // Ignora qualquer outra linha
        }
        if (line === '') {
          // Uma linha em branco significa enviar o evento
          if (evtsrc.onmessage && data !== '') {
            // Corta nova linha à direita, se houver uma
            if (data.charAt(data.length - 1) == '\n')
              data = data.substring(0, data.length - 1);
            evtsrc.onmessage({
              // Este é um objeto Event falsificado
              type: eventName,
              // tipo do evento
              data: data,
              // dados do evento
              origin: url,
              // a origem dos dados
            });
          }
          data = '';
          continue;
        }
      }
    }
  };
}

// Um servidor de chat dos eventos Server-Sent personalizado
// Isto é JavaScript do lado do servidor para execução com NodeJS.
// Implementa uma sala de chat muito simples e completamente anônima.
// Posta (com POST) novas mensagens em /chat ou obtém (com GET) um fluxo de texto/eventos
// de mensagens
// do mesmo URL. Fazer uma requisição GET para / retorna um arquivo HTML simples
// contendo a interface com o usuário de chat do lado do cliente.
var http = require('http');
// API de servidor HTTP NodeJS
// O arquivo HTML para o cliente de chat. Usado a seguir.
var clientui = require('fs').readFileSync('chatclient.html');
var emulation = require('fs').readFileSync('EventSourceEmulation.js');
// Um array de objetos ServerResponse para o qual vamos enviar eventos
var clients = [];
// Envia um comentário para os clientes a cada 20 segundos para que eles não
// fechem a conexão e depois a restabeleçam
setInterval(function () {
  clients.forEach(function (client) {
    client.write(':ping\n');
  });
}, 20000);
// Cria um novo servidor
var server = new http.Server();

// Quando o servidor recebe uma nova requisição, executa esta função
server.on('request', function (request, response) {
  // Analisa o URL solicitado
  var url = require('url').parse(request.url);
  // Se o pedido foi para "/", envia a interface com o usuário de chat do lado do
  // cliente.
  if (url.pathname === '/') {
    // Um pedido para a interface com o usuário de chat
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<script>' + emulation + '</script>');
    response.write(clientui);
    response.end();
    return;
  }
  // Envia 404 para qualquer requisição que não seja "/chat"
  else if (url.pathname !== '/chat') {
    response.writeHead(404);
    response.end();
    return;
  }
  // Se a requisição foi uma postagem, então um cliente está postando uma nova mensagem
  if (request.method === 'POST') {
    request.setEncoding('utf8');
    var body = '';
    // Quando obtemos um trecho de dados, adiciona-o no corpo
    request.on('data', function (chunk) {
      body += chunk;
    });
    // Quando a requisição está pronta, envia uma resposta vazia
    // e transmite a mensagem para todos os clientes que estiverem recebendo.
    request.on('end', function () {
      response.writeHead(200); // Responde à requisição
      response.end();
      // Formata a mensagem no formato fluxo de texto/eventos
      // Certifica-se de que cada linha seja prefixada com "data:" e que seja
      // terminada com duas novas linhas.
      message = 'data: ' + body.replace('\n', '\ndata: ') + '\r\n\r\n';
      // Agora envia essa mensagem para todos os clientes que estiverem recebendo
      clients.forEach(function (client) {
        client.write(message);
      });
    });
  }
  // Caso contrário, um cliente está solicitando um fluxo de mensagens
  else {
    // Configura o tipo de conteúdo e envia um evento message inicial
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    response.write('data: Connected\n\n');
    // Se o cliente fecha a conexão, remove o objeto
    // resposta correspondente do array de clientes ativos
    request.connection.on('end', function () {
      clients.splice(clients.indexOf(response), 1);
      response.end();
    });
    // Lembra o objeto resposta para que possamos enviar futuras mensagens para ele
    clients.push(response);
  }
});
// Executa o servidor na porta 8000. Conecta-se em http://localhost:8000/ para usá-lo.
server.listen(8000);
