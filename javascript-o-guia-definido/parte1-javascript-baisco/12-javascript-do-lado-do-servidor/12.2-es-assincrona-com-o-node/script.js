// Começamos a explicação do Rhino com suas funções print() e load() . O Node tem recursos semelhantes, com nomes diferentes:
// O Node define console.log() para saída de depuração como fazem os navegadores.
console.log('Hello Node');
// Saída de depuração na console
// Usa require(), em vez de load(). Ele carrega e executa (somente uma vez) o
// módulo nomeado, retornando um objeto que contém seus símbolos exportados.
var fs = require('fs');
// Carrega o módulo "fs" e retorna seu objeto API

// Diz olá em um segundo a partir de agora.
setTimeout(function () {
  console.log('Hello World');
}, 1000);

// O Node define outras globais importantes sob o espaço de nomes process . Estas são algumas das propriedades desse objeto:
process.version; // String de versão do Node
process.argv; // Args de linha de comando como um array argv[0] é "node"
process.env; // Variáveis de ambiente como um objeto. por exemplo: process.env.PATH
process.pid; // Identificação de processo
process.getuid(); // Retorna a identificação do usuário
process.cwd(); // Retorna o diretório corrente de trabalho
process.chdir(); // Muda de diretório
process.exit(); // Sai (após executar ganchos de desligamento)

emitter.on(name, f); // Registra f para tratar de eventos name de emitter
emitter.addListener(name, f); // Idem: addListener() é sinônimo de on()
emitter.once(name, f); // Apenas uma vez; em seguida, f é removida automaticamente
emitter.listeners(name); // Retorna um array de funções de rotina de tratamento
emitter.removeListener(name, f); // Anula o registro da rotina de tratamento de evento f
emitter.removeAllListeners(name); // Remove todas as rotinas de tratamento de eventos name

// O evento "exit" é enviado antes que o Node saia.
process.on('exit', function () {
  console.log('Goodbye');
});
// Exceções não capturadas geram eventos, se qualquer rotina de tratamento estiver
// registrada.
// Caso contrário, a exceção apenas faz o Node imprimir um erro e sair.
process.on('uncaughtException', function (e) {
  console.log(Exception, e);
});
// Sinais POSIX, como SIGINT, SIGHUP e SIGTERM, geram eventos
process.on('SIGINT', function () {
  console.log('Ignored Ctrl-C');
});

// Fluxo de entrada s:
s.on('data', f); // Quando os dados estão disponíveis, passa-os como argumento para f()
s.on('end', f); // Evento "end" ativado em EOF quando não vão chegar mais dados
s.on('error', f); // Se algo der errado, passa a exceção para f()
s.readable;
// => verdadeiro se é um que ainda está aberto fluxo que pode ser lido
s.pause();
// Pausa em eventos "data". Para controlar o fluxo de uploads, por exemplo
s.resume();
// Retoma novamente
// Especifique uma codificação se quiser passar strings para a rotina de tratamento de
//evento "data"
s.setEncoding(enc); // Como decodificar bytes: "utf8", "ascii" ou "base64"

// Fluxo de saída s:
s.write(buffer); // Grava dados binários
s.write(string, encoding); // Grava dados de string. A codificação tem como padrão "utf-8"
s.end(); // Fecha o fluxo.
s.end(buffer); // Grava o trecho final dos dados binários e fecha.
s.end(str, encoding); // Grava a string final e fecha tudo em um só
s.writeable; // verdadeiro se o fluxo ainda está aberto e pode ser gravado
s.on('drain', f); // Chama f() quando o buffer interno esvazia

var bytes = new Buffer(256); // Cria um novo buffer de 256 bytes
for (var i = 0; i < bytes.length; i++); // Itera pelos índices
bytes[i] = i; // Configura cada elemento do buffer
var end = bytes.slice(240, 256); // Cria uma nova visualização do buffer;
end[0]; // => 240: end[0] é bytes[240]
end[0] = 0; // Modifica um elemento da fatia
bytes[240]; // => 0: o buffer adjacente também é modificado

var more = new Buffer(8); // Cria um novo buffer separado
end.copy(more, 0, 8, 16); // Copia os elementos 8-15 de end[] em more[]
more[0]; // => 248

// Os buffers também fazem conversão binário <=> texto
// Codificações válidas: "utf8", "ascii" e "base64". "utf8" é o padrão.
var buf = new Buffer('2πr', 'utf8'); // Codifica texto em bytes usando UTF-8
buf.length; // => 3 caracteres ocupam 4 bytes
buf.toString(); // => "2πr": volta para texto
buf = new Buffer(10); // Começa com um novo buffer de comprimento fixo
var len = buf.write('πr2', 4); // Grava texto nele, começando no byte 4
buf.toString('utf8', 4, 4 + len); // => "πr2": decodifica um intervalo de bytes

var fs = require('fs'); // Carrega a API de sistema de arquivos

// Lê um arquivo de forma síncrona. Passa uma codificação para obter texto, em vez de
// bytes.
var text = fs.readFileSync('config.json', 'utf8');
// Lê um arquivo binário de forma assíncrona. Passa uma função para obter os dados
fs.readFile('image.png', function (err, buffer) {
  if (err) throw err;
  // Se tudo deu errado
  process(buffer);
  // O conteúdo do arquivo está no buffer
});

fs.writeFile('config.json', JSON.stringify(userprefs));

// Cópia de arquivo com API de streaming.
// Passe um retorno de chamada se você quer saber quando está terminado
function fileCopy(filename1, filename2, done) {
  var input = fs.createReadStream(filename1);
  // Fluxo de entrada
  var output = fs.createWriteStream(filename2);
  // Fluxo de saída
  input.on('data', function (d) {
    output.write(d);
  }); // Copia in em out
  input.on('error', function (err) {
    throw err;
  });
  // Lança erros
  input.on('end', function () {
    // Quando a entrada termina
    output.end();
    // fecha a saída
    if (done) done();
    // E notifica o retorno de chamada
  });
}

// #! /usr/local/bin/node
var fs = require('fs'),
  path = require('path'); // Carrega os módulos necessários
var dir = process.cwd(); // Diretório corrente
if (process.argv.length > 2) dir = process.argv[2]; // Ou a partir da linha de comando
var files = fs.readdirSync(dir); // Lê o conteúdo do diretório
process.stdout.write('Name\tSize\tDate\n'); // Saída de um cabeçalho
files.forEach(function (filename) {
  // Para cada nome de arquivo
  var fullname = path.join(dir, filename); // Une dir e nome
  var stats = fs.statSync(fullname); // Obtém atributos do arquivo
  if (stats.isDirectory()) filename += '/'; // Marca subdiretórios
  process.stdout.write(
    filename +
      '\t' + // Saída do nome de arquivo mais
      stats.size +
      '\t' + // tamanho do arquivo mais
      stats.mtime +
      '\n'
  ); // hora da modificação
});

// Um servidor de eco TCP simples em Node: recebe conexões na porta 2000
// e ecoa os dados do cliente de volta para ele.
var net = require('net');
var server = net.createServer();
server.listen(2000, function () {
  console.log('Listening on port 2000');
});
server.on('connection', function (stream) {
  console.log('Accepting connection from', stream.remoteAddress);
  stream.on('data', function (data) {
    stream.write(data);
  });
  stream.on('end', function (data) {
    console.log('Connection closed');
  });
});
