# NODE

Esse capítulo e o próximo vão introduzir brevemente você ao Node.js, um programa que permite que você aplique suas habilidades de JavaScript fora do navegador. Com isso, você pode construir desde uma ferramenta de linha de comando até servidores HTTP dinâmicos. Esses capítulos visam te ensinar conceitos importantes nos quais o Node.js foi construído, e também te dar informação suficiente para escrever alguns programas úteis. Esses capítulos não detalham completamente o funcionamento do Node.

---

## 20.1 - POR TRÁS DOS PANOS

A maneira tradicional de tratar a entrada e saída é ter uma função, como _readfile_ , que começa a ler um arquivo só retorna quando o arquivo foi totalmente lido. Isso é chamado I/O síncrono. NOde foi inicialmente concebido para o propósito de tornar a assincronicidade I/O mais fácil e conviniente. Uma interface assíncrona permite que o script continue executando enquanto ela faz seu trabalho e chama uma função de `callback` quando está finalizada. Isso é como Node faz todo seu I/O. JavaScript é ideal para um sistema como Node. É uma das poucas linguagens de programação que não tem uma maneira embutida de fazer I/O. Dessa forma, JavaScript poderia encaixar-se bastante na abordagem excêntrica do Node para o I/O sem acabar ficando com duas interfaces inconsistentes. Em 2009, quando Node foi desenhado, as pessoas já estavam fazendo I/O baseado em funções de callback no navegador, então a comunidade em volta da linguagem estava acostumada com um estilo de programação assíncrono.

--

## 20.2 - ASSINCRONIA

Em um ambiente síncrono, a maneira óbvia de realizar essa tarefa é fazer uma requisição após outra. Esse método tem a desvantagem de que a segunda requisição só será realizada após a primeira ter finalizado. A solução para esse problema, num sistema síncrono, é iniciar threads de controle. Uma segunda thread poderia iniciar a segunda requisição, e então ambas as threads vão esperar os resultados voltarem, e após a ressincronização elas vão combinar seus resultados. Em um modelo assíncrono, iniciar uma ação de I/O causa uma divisão na linha do tempo, conceitualmente falando. A thread que iniciou o I/O continua rodando, e o I/O é finalizado juntamente à ela, chamando uma função de callb ack quando é finalizada.

---

## 20.3 - O COMANDO NODE

O Node.js disponibiliza um programa chamado _node_, que é usado para executar arquivos JavaScript. Digamos que você tenha que executr o seguinte código chamado `hello.js`.a

```js
var message = 'Hello World';
console.log(message);
```

Podemos rodar node a partir da linha de comando para executar o programa

```prompt
$ node ola.js
Olá mundo
```

A variável `process`, assim como a variável console, está disponível globalmente no Node. Ela fornece várias maneiras de inspecionar e manipular o programa atual. O método `exit` finaliza o processo e pode receber um código de saída, que diz ao programa que iniciou `node` se o programa foi completado com sucesso (código zero) ou se encontrou algum erro (qualquer outro código).Para encontrar argumentos de linha de comando recebidos pelo seu script você pode ler `process.argv`, que é um array de strings. Se `showargv.js` contém somente o stratement `console.log(process.argv)`, você pode rodá-lo dessa forma:

```prompt
$ node showargv.js one --and two
["node", "/home/braziljs/showargv.js", "one", "--and", "two"]
```

Todas as variáveis JavaScript globais, como `Array`, `Math` e `JSON`, estão presentes também no ambiente do Node. Funcionalidades relacionadas ao navegador, como `document` e `alert` estão ausentes. O objeto global do escopo, que é chamado `window` no navegador, passa a ser `global` no Node, que faz muito mais sentido.

---

## 20.4 - MÓDULOS

O sistema de módulos CommonJS, é baseado na função `require`m construído em Node e é usado para carregar desde módulos integrados até bibliotecas transfedidas, ou até mesmo arquivos que fazem parte do seu próprio programa. A maneira mais comum de instalar bibliotecas é usando NPḾ. Além disso, o Node pode transforma a string recebida em um arquivo reala a ser carregado. Para ilustrar o uso do `require`, podemos configurar um projeto simples que consiste em dois arquivos. O primeiro define um script que pode ser chamado de linha de comando para alterar uma string. a

```js
var garble = require('./garble');
// O índice 2 possui o valor do primeiro parâmetro da linha de comando
var parametro = process.argv[2];
console.log(garble(parametro));
```

O outro define uma biblioteca para alterar string, que pode ser usada tanto da linha de comando quanto por outros scripts que precisam ter acesso direto a função de alterar.

```js
module.exports = function (string) {
  return string
    .split('')
    .map(function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) + 5);
    })
    .join('');
};
```

Substituir `module.exports`, ao invés de adicionar propriedades à ele, nos permite exportar um valor expecífico do módulo. A função separa a string recebida em dois caracteres únicos separando a string vazia e então substituindo cada caractere cujo código é cinco pontos maior. Finalmente, o resultado é reagrupado novamente numa string.

---

## 20.5 - INSTALANDO COM NPM

NPM, é um repositório online de módulos JavaScript, muitos deles escritos para Node. Um módulo que você encontra no NPM é o `figlet`, que pode converter texto em ASCII art-desenhos feitos de caracteres de texto. Depois de rodar `npm install`, NPM já vai ter criado um diretório chamado `node_modules`. Dentro desse diretório haverá um outro diretório chamado `figlet`, que vai conter a biblioteca. Quando rodamos `node` e chamamos `require('figlet')`, essa biblioteca é carregada, e nós podemo chamar seu método `text` para desenhar algumas letras grandes.

Existem muito mais coisas no NPM além de `npm install`. Ele pode ler arquivos `package,json`, que contém informações codificadas em JSON sobre o programa ou biblioteca, como por exemplo outras bibliotecas que depende. Rodar `npm install` em um diretório que contém um arquivo como esse vai instalar automaticamente todas as dependências, assim como as dependências das dependências. A ferramenta `npm` também é usada para publicar bibliotecas para o repositório NPM online de pacotes para que as pessoas possam encontrar, transferir e usá-los.

---

## 20.6 - O MÓDULO DE ARQUIVOS DE SISTEMA

Um dos módulos integrados mais comuns que vêm com o Node é o modulo `"fs"`, que significa _file system_. Esse módulo fornce funções para o trabalho com arquivos de diretórios.

```js
var fs = require('fs');
fs.readFile('file.txt', 'utf8', function (error, text) {
  if (error) throw error;
  console.log('The file contained:', text);
});
```

O segundo argumento passado para `readFile` indica a codificação de caracteres usaa para decodificar o arquivo em string. Se não passado uma codificaão, o Node retorna um objeto `buffer` binário, ao invés de uma string. O que por sua vez, é um objeto _array-like_ que contém números representando os bytes nos arquivos.

```js
var fs = require('fs');
fs.readFile('file.txt', function (error, buffer) {
  if (error) throw error;
  console.log(
    'The file contained',
    buffer.length,
    'bytes.',
    'The first byte is:',
    buffer[0]
  );
});
```

Uma função similar, `writeFile`, é usada para escrever um arquivo no disco.

```js
var fs = require('fs');
fs.writeFile('graffiti.txt', 'Node was here', function (err) {
  if (err) console.log('Failed to write file:', err);
  else console.log('File written.');
});
```

O módulo `"fs"` contém muitas outras funções úteis: `readdir` que vai retornar os arquivos em um diretório como um array string, `stat` busca informações sobre um arquivo, `rename`retorn um arquivo, `unlink` remove um arquivo, e assim por diante. Muitas funções em `"fs"` vêm com variantes síncronas e assíncronas. Por exemplo, existe uma versão síncroca de `readFile` chamada `readFileSync`.

```js
var fs = require('fs');
console.log(fs.readFileSync('file.txt', 'utf8'));
```

Funções síncronas requerem menos formalismo na sua utilização e podem ser úteis em alguns scripts, onde a extra velocidade oferecida pela assincronia I/O é irrelevante. Mas note que enquanto tal operação síncrona é executada, seu programa fica totalmente parado. Se nesse período ele deveria responder ao usuário ou a outras máquinas na rede, ficar preso com um I/O síncrono pode acabar produzindo atrasos inconvenientes.

---

## 20.7 - O MÓDULO HTTP

Outro principal é o `http`. Ele fornece funcionalidade para rodar servidores HTTP e realizar requisições HTTP.

```js
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(
    '<h1>Hello!</h1><p>You asked for <code>' + request.url + '</code></p>'
  );
  response.end();
});
server.listen(8000);
```

A função passada como argumento para `createServer`é chamada toda vez que um cliente tenta se conectar ao servidor. AS variáveis `request`e `response` são os objetos que representam a informação que chega a sai. Para enviar algumas coisas de volta, você chama métodos do objeto `response`. O primeiro. `writeHead`, vai escrever os cabeçalhos de resposta. Em seguida, o corpo da respota é enviado com `response.write`. Podemos chamar esse método quantas vezes for necessário para enviar a resposta peça por peça, possibilitando que a informação seja transmitida para o cliente assim que ela steja disponível. Para parar de rodar um script Node, é só apertar Ctrl+C. Um servidor real normalmente faz mais do que o que nós vimos no exemplo anterior — ele olha o método da requisição para ver que ação o cliente está tentando realizar e olha também a URL da requisição para descobrir que recurso essa ação está executando. Para agir como um cliente HTTP, nós podemos usar a função request no módulo `"http"`.

```js
var http = require('http');
var request = http.request(
  {
    hostname: 'eloquentjavascript.net',
    path: '/20_node.html',
    method: 'GET',
    headers: { Accept: 'text/html' },
  },
  function (response) {
    console.log('Server responded with status code', response.statusCode);
  }
);
request.end();
```

O primeiro parâmetro passado para `request` configura a requisição. O segundo parâmetro é a função que deverá ser chamada quando uma resposta chegar. Assim como o objeto `response` que vimos no servidor, o objeto `request` nos permite transmitir informação na requisição com o método `write` e finalizar a requisição com o método `end`. O exemplo não usa `write` porque requisições `GET` não devem conter informação no corpo da requisição. Para fazer requisições para URLs HTTP seguras (HTTPS), o Node fornece um pacote chamado `https`, que contém sua própria função `request`, parecida a `http.request`.

---

## 20.8 - STREAMS

_Streams_ são, consecutivamente, o objeto de resposta no qual o servidor pode escrever e o objetivo de requisição que foi retornado do `http.request`. É possível criar strams de gravação que apontam para um arquivo com a função `fs.createWritebleStream`. Então você pode usar o método `write` no objeto resultando para escrever o arquivo peça por peça, ao invés de escrever tudo de uma só vez com o `fs.writeFile`. _Streams_ de leitura são um pouco mais fechados. Em ambos a variável `request` que foi passada para a função de _callback_ do servidor HTTP e a variável `response` para o cliente HTTP são _streams_ de leitura. Para ler de um stream usamos manipuladores de eventos, e não métodos. Objetos que emitem eventos no Node têm um método chamado `on` que é similar ao método `addEventListener` no navegador. Você dá um nome de evento e então
uma função, e isso irá registrar uma função para ser chamada toda vez que um dado evento ocorrer. _Streams_ de leitura possuem os eventos `"data"` e `"end"`. O primeiro é acionado sempre que existe alguma informação chegando, e o segundo é chamado sempre que a _stream_ chega ao fim. Esse modelo é mais adequado para um _streamming_ de dados, que pode ser imediatamente processado, mesmo quando todo documento ainda não está disponível. Um arquivo pode ser lido como uma _stream_ de leitura usando a função `fs.createReadStream`. O seguinte código cria um servidor que lê o corpo da requisição e o devolve em caixa alta para o cliente via _stream_:

```javascript
var http = require('http');
http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    request.on('data', function (chunk) {
      response.write(chunk.toString().toUpperCase());
    });
    request.on('end', function () {
      response.end();
    });
  })
  .listen(8000);
```

O seguinte trecho de código, se rodado enquanto o servidor que transforma letras em caixa alta estiver rodando, vai enviar uma requisição para esse servidor e retornar a resposta que obtiver:

```javascript
var http = require('http');
var request = http.request(
  {
    hostname: 'localhost',
    port: 8000,
    method: 'POST',
  },
  function (response) {
    response.on('data', function (chunk) {
      process.stdout.write(chunk.toString());
    });
  }
);
request.end('Hello server');
```

O exemplo escreve no `process.stdout` (a saída padrão de processos, como uma _stream_ de escrita) ao invés de usar `console.log`. Nós não podemos usar `console.log` porque isso adicionaria uma linha extra depois de cada pedaço de texto escrito, o que é adequado no nosso exemplo.

---

## 20.9 - Um servidor de arquivos simples

Quando lidamos com arquivos de recursos HTTP, os métodos HTTP podem ser usados respectivamente, para ler, escrever e apagar arquivos. Vamo interpretar o caminho na requisição como o caminho do arquivo referido por aquela requisição. Podemos construir um programa peça por peça, usando um objeto chamado `methods` para guardar as funções que tratam os vários métodos HTTP. O script completo para o servidor está disponível [AQUI]().
A primeira requisição feita para o arquivo `file.txt` falha pois o arquivo ainda não existe. A requisição `PUT` cria o arquivo, para que então a próxima requisição consiga encontrá-lo com sucesso. Depois de deletar o arquivo com uma requisição `DELETE`, o arquivo passa a não ser encontrado novamente.

---

## 20.10 - TRATAMENTO DE ERROS

Se nós quisermos tratar todas as exceções levantadas durante o tratamento de uma requisição, para ter certeza que enviamos uma resposta, precisamos adicionar blocos de 281 `try/catch` para todos os callbacks. Outra abordagem é usar promessas, que foram introduzidas no Capítulo 17. Promessas capturam as exceções levantadas por funções de callb ack e propagam elas como falhas. É possível carregar uma biblioteca de promessa no Node e usá-la para administrar seu controle assíncrono. O excelente módulo `"promise"` do NPM contém uma função chamada `denodeify`, que converte uma função assíncrona como a `fs.readFile` para uma função de retorno de promessa.

```javascript
var Promise = require('promise');
var fs = require('fs');

var readFile = Promise.denodeify(fs.readFile);
readFile('file.txt', 'utf8').then(
  function (content) {
    console.log('The file contained: ' + content);
  },
  function (error) {
    console.log('Failed to read file: ' + error);
  }
);
```

A título de comparação, eu escrevi uma outra versão do servidor de arquivos baseado em promessas, que você pode encontrar [AQUI]()
Essa versão é um pouco mais clara pois as funções podem retornar seusresultados, ao invés de ter que chamar _callbacks_, e a rota de exceções está
implícito, ao invés de explícito. O objeto `fsp` que é usado por esse código contém estilos de promessas variáveis para determinado número de funções `fs`, envolvidas por `Promise.denodeify`. O objeto retornado, com propriedades `code` e `body`, vai se tornar o resultado final de uma cadeia de promessas, e vai ser usado para determinar que tipo de resposta vamos mandar pro cliente.

```javascript
methods.GET = function (path) {
  return inspectPath(path).then(function (stats) {
    if (!stats)
      // Does not exist
      return { code: 404, body: 'File not found' };
    else if (stats.isDirectory())
      return fsp.readdir(path).then(function (files) {
        return { code: 200, body: files.join('\n') };
      });
    else
      return {
        code: 200,
        type: require('mime').lookup(path),
        body: fs.createReadStream(path),
      };
  });
};

function inspectPath(path) {
  return fsp.stat(path).then(null, function (error) {
    if (error.code == 'ENOENT') return null;
    else throw error;
  });
}
```

A função `inspectPath` simplesmente envolve o `fs.stat`, que trata o caso de arquivo não encontrado. Nesse caso, nós vamos substituir a falha por um sucesso que representa `null`. Todos os outros erros são permitidos a propagar. Quando a promessa retornada desses manipuladores falha, o servidor HTTP responde com um status 500.

---

## Resumo

Node é um sistema bem íntegro e legal que permite rodar JavaScript em um contexto fora do navegador. Ele foi originalmente concebido para tarefas de rede para desempenhar o papel de um _nó_ na rede. Mas ele se permite a realizar todas as tarefas de script, e se escrever JavaScript é algo que você gosta, automatizar tarefas de rede com Node funciona de forma maravilhosa.

O NPM disponibiliza bibliotecas para tudo que você possa imaginar, e permite que você atualize e instale essas bibliotecas rodando um simples comando. Node também vêm com um bom número de módulos embutidos, incluindo o módulo `"fs"`, para trabalhar com sistema de arquivos e o `"http"`, para rodar servidores HTTP e fazer requisições HTTP.

Toda entrada e saída no Node é feita de forma assíncrona, a menos que você explicitamente use uma variante síncrona da função, como a `fs.readFileSync`. Você fornece as funções de _callback_ e o Node vai chamá-las no tempo certo, quando o _I/O_ que você solicitou tenha terminado.
