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
