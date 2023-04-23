# HTTP

`HyperText Transfer Protocol (HTTP)`, é o mecanismo no qual dados são requisitados e entregues na `World Wide Web (www)`. Esse capítulo descreve o protocolo com mais detalhes e explica como o JavaScript executado no navegador tem acesso a ele.

---

## 17.1 - O PROTOCOLO

Se digitarmos uma URL na barra de endereço do navegador e apertar enter, ele irá primeiramente, procurar o enderço do servidor associado ao domínio do site digitado (URL), em seguida, tenta abrir uma conexão com `TCP` com ele na porta 80, porta padrão para tráfego HTTP. Se o servidor existir e aceitar a conexão, o navegador enviará algo parecido com:

```txt
GET /17_http.html HTTP/1.1
Host: eloquentjavascript.net
User-Agent: Your browser's name
```

Então, por meio da mesma conexão, o servidor responde:

```txt
HTTP/1.1 200 OK
Content-Length: 65585
Content-Type: text/html
Last-Modified: Wed, 09 Apr 2014 10:48:09 GMT
<!doctype html>
... the rest of the document
```

O navegador participa da resposta após a linha em branco e a mostra como um documento HTML. A informação enviada pelo cliente é chamada de requisisção (request) e inicia com essa linha:

```txt
GET /17_http.html HTTP/1.1
```

A primeira palavra é o método da requisição, `GET` significa que queremos acessar o recurso em questão. Outrs métodos comuns são `DELETE` para deletar um recurso, `PUT` para alterar dados e `POST`para enviar uma informa. A parte após o nome do método é o caminho do recurso ao qual a requisição está sendo aplicada. No caso mais simples, um recurso é simplesmente um arquivo no servidor, entretanto,o protocolo não requer que o recurso seja necessariamente um arquivo. Um recurso pode ser qualquer coisa que possa ser tranferida como se fosse um arquivo. Após o caminho do recurso, a primeira linha da requisição menciona `http/1.1` para indicar a versão do protocolo HTTP que está sendo usada. A resposta do servidor irá indicar também com a versão, seguida pelo status da resposta, representado primeiramente por um código de três dígitos e, em seguid, por um texto legível.

```txt
HTTP/1.1 200 OK
```

Os status code (código de status) que indicam com o número 2 indicam que a requisição foi bem sucedida. Códigos que começam com 4, indicam que houve alguma problema com a requisição. Códigos que começam co 5 indicam que houve um erro no serviço e que a culpa não é da requisição. A primeira linha de uma requisição ou resposta pode ser seguida por qualquer quantidade de `headers` (cabeçaçho). Eles são representados por linhas na forma de "nome: valor" que especificam informações extra sobre requisição ou resposta.

```txt
Content-Length: 65585
Content-Type: text/html
Last-Modified: Wed, 09 Apr 2014 10:48:09 GMT
```

Eles nos informam o tamanho e o tipo do documento da resposta. Além disso, ele nos mostra quando foi a última vez que o documento foi modificado. Na maiorira das vezes, o cliente ou servidor decidem quais `headers` serão incluídos em uma requisição ou resposta, apesar de alguns serem obrigados. Após os `headers`, tanto a requisição quanto a resposta podem incluir uma linha em branco seguida por um corpo(body), quan contém os dados que estão sendo envidados.

---

## 17.2 - NAVEGADORES E O HTTP

Um website razoavelmente complicado pode facilmente ter algo em torno de dez a duzentos recursos. Para ser capaz de buscá-los rapidamente, ao invés de esperar pelo retorno das respostas de cada requisição feita, os navegadores fazem várias requisições simultaneamente. Tais documentos são sempre requisitados usando requisições GET. páginas HTML podem incluir formulários, que permitem ao usuário preencher e enviar informações para o servidor.

```html
<form method="GET" action="example/message.html">
  <p>Name: <input type="text" name="name" /></p>
  <p>Message:<br /><textarea name="message"></textarea></p>
  <p><button type="submit">Send</button></p>
</form>
```

O código descreve um formulário com dois campos: um campo que solicita um nome e outro que solicita que o usuário escreva uma mensagem. Ao clicar em Send, a informação contida nos campos serão convertidas em uma `query string`. Quando o método do atributo do elemento _<form>_ from GET. a query string é associada à URL contida em _action_ e o navegador executa a requisição GET para essa URL.

```txt
GET /example/message.html?name=Jean&message=Yes%3F HTTP/1.1
```

O início de uma query string é indicado por um ponto de interrogação seguido por pares de nomes e valores, correspondendo ao atributo name de cada campo do formulário e seus respectivos valores. O caractere & é usado para separar os pares. A mensagem codificada da URL anterior é "Yes?", mesmo que o ponto de interrogação tenha sido substituido por um código estranho. Esse formato utilizado é chamado de `URL Encoding` e utiliza o sinal de porcntagem seguido por dois dígitos hexadecimais que representam o código daquele caractere. Nesse caso, o 3F que significa 63 na notação decimal, código do caratere de interrogação. O JavaScript fornece o `encodeURIComponent` e `decodeURIComponent` para codificar e descodificar formulários nesse formato.

```js
console.log(encodeURIComponent('Hello & goodbye'));
// → Hello%20%26%20goodbye
console.log(decodeURIComponent('Hello%20%26%20goodbye'));
// → Hello & goodby
```

Se o método do atributo do formulário for alterado para POST, a requisição HTTP que será feita para enviar o formulário irá usar o método POST e a query string será adicionada ao corpo da requisição ao invés de ser colocada diretamente na URL.

```txt
POST /example/message.html HTTP/1.1
Content-length: 24
Content-type: application/x-www-form-urlencoded
name=Jean&message=Yes%3F
```

Por convenção, o método GET é usado para requisições que não produzem efeitos colaterais, tais como fazer uma pesquisa. Requisições que alteram alguma coisa no servidor, como criar uma nova conta ou postar uma nova mensagem, devem ser expressadas usando outros métodos, como POST.

---

## 17.3 - XMLHttpRequest

A interface pela qual o JavaScript do navegador pode fazer requisições HTTP é chamada de `XMLHttpRequest`. Ela foi desenvolvida pela Microsoft No final dos anos 90. A interface permite que você analise os documentos de resposta como XML, caso queira. Combinar dois conceitos distintos em uma única coisa é com certeza um péssimo disign. Quando a interface foi adicionada ao Internet Explore, foi permitido às pessoas fazerem coisas com JavaScript que eram bem difíceis anteriormente. O outro navegador relevante naquela época, chamado Mozilla (mais tarde Firefox), não queria ficar para trás. Para permitir que as pessoas pudessem fazer coisas similares em seu navegador, eles copiaram a interface, incluindo
o controverso nome. A próxima geração de navegadores seguiram esse exemplo e, por isso, a interface `XMLHttpRequest`
é um padrão atualmente.

---

## 17.4 - ENVIANDO UMA REQUISIÇÃO

Para fazer uma simples requisição, criamos um objetivo de requisição com o construro `XMLHttpRequest` e chamamos os seus métodos `open` e `send`.

```js
var req = new XMLHttpRequest();
req.open('GET', 'example/data.txt', false);
req.send(null);
console.log(req.responseText); // → This is the content of data.txt
```

O método `open` configura a requisição. Nesse caso, escolhemos fazer uma requisição GET. Após abrir a requisição, ṕodemos enviá-la usando o método `send`. O argumento a ser enviado é o corpo da requisição. Para requisições GET,podemos passar _null_. Se o terceiro argumento passado para `open` for false, o método `send` irá retornar apenas depois que a resposta da requisição for recebida. Podemos ler a propriedade _responseText_ do objeto da requisição para acessar o corpo da resposta. As outras informações incluidas na resposta também podem ser extraídas desse objeto. O _status code_ pode ser acessado por meio da propriedade _status_ e a versão legível em texto do status pode ser acessada por meio da propriedade _statusText_. Além disso, os cabeçalhos podem ser lidos com \_getResponseHeader.

```js
var req = new XMLHttpRequest();
req.open('GET', 'example/data.txt', false);
req.send(null);
console.log(req.status, req.statusText);
// → 200 OK
console.log(req.getResponseHeader('content-type'));
// → text/plain
```

Os noemes dos cabeçãlhos são case-insensitive. Eles são normalmente com letra maiúscula no início de cada palavra, como por exemplo "Content-Type". O navegador irá automaticamente adicionar alguns cabeçalhos da requisição, tais como _"Host"_ e outros necessários para o servidor descobrir o tamanho do corpo da requisição. Mesmo assim, você pode adicionar os
seus próprios cabeçalhos usando o método `setRequestHeader`

---

## 17.5 - REQUISIÇÕES ASSÍNCRONAS

Se passarmos _true_ como terceiro argumento para `open` no exemplo anterior, a requisição se torna assíncrona. Isso significa que quando chamar o método `send`, a única coisa que irá acontecer imediatamente é o agendamento da requisição que será enviada.O programa pode continuar a execução e o navegador irá ser responsável por enviar e receber os dados em segundo plano. Entretanto, enquanto a requisição estiver sendo executada, não podemos acessar a resposta. É necessário um mecanismo que nos envie quando os dados estiverem disponíveis. Para isso, precisamos escutar o evento `load` no objeto da requisição.

```js
var req = new XMLHttpRequest();
req.open('GET', 'example/data.txt', true);
req.addEventListener('load', function () {
  console.log('Done:', req.status);
});
req.send(null);
```

Essa situação nos obriga a usar um estilo assíncrono de programação, encapsulando as coisas que precisam ser executadas após a requisição em uma função e preparando-a para que possa ser chamada no momento apropriado.

---

## 17.6 - RECUPERANDO DADOS XML

Quando o recurso recebido pelo objeto `XMLHttpRequest` é um documento XML, a propriedade `responseXML` do objeto irá conter uma representação desse documento. O objeto contido em respondeXML corresponde ao objeto do documento. Sua propriedade `documentElement` se refere à tag mais externa do documento XML. No documento a seguir, essa propriedade seria a tag `<fruits>`.

```xml
<fruits>
<fruit name="banana" color="yellow"/>
<fruit name="lemon" color="yellow"/>
<fruit name="cherry" color="red"/>
</fruits>
```

Podemos recuperar esse arquivo da seguinte forma:

```js
var req = new XMLHttpRequest();
req.open('GET', 'example/fruit.xml', false);
req.send(null);
console.log(req.responseXML.querySelectorAll('fruit').length); // → 3
```

Documentos XML podem ser usados para trocar informações estruturadas com o servidor. Sua forma (tags dentro de outras tags) faz com que seja fácil armazenar a maioria dos tipos de dados, sendo uma alternativa melhor do que usar um simples arquivo de texto. Entretanto, extrair informações da interface DOM é um pouco trabalhoso e os documentos XML tendem a ser verbosos. Normalmente é uma ideia melhor se comunicar usando dados JSON, os quais são mais fáceis de ler e escrever tanto para programas quanto para humanos.

```js
var req = new XMLHttpRequest();
req.open('GET', 'example/fruit.json', false);
req.send(null);
console.log(JSON.parse(req.responseText));
// → {banana: "yellow", lemon: "yellow", cherry: "red"}
```

## 17.7 - HTTP SANDBOXING

Fazer requisições HTTP usando scripts em uma página web levanta preocupações em relação à segurança.É possível que websites se protejam desses tipos de ataques, porém, é preciso muito esforço e muitos websites falham ao fazê-lo. Por essa razão, os navegadores nos protegem não permitindo que scripts façam requisições HTTP para outros domínios. Isso pode ser um problema irritante quando construímos sistemas que queiram acessar diferentes domínios por razões legítimas. Felizmente, servidores podem incluir um cabeçalho como esse em sua resposta para indicar explicitamente aos navegadores que é permitido requisições que venham de outros domínios:

```txt
Access-Control-Allow-Origin: *
```

---

## 17.8 - ABSTRAINDO REQUISIÇÕES

No capítulo 10, usamos uma função hipotítica chamada `backgroundReadFile`. Ela recebia um nome de arquivo e uma função e, após o carregamento do arquivo, chavama a função com o conteúdo recuperado. Aqui está uma implementação simples dessa função.

```js
function backgroundReadFile(url, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.addEventListener('load', function () {
    if (req.status < 400) callback(req.responseText);
  });
  req.send(null);
}
```

Essa simples abstração torna fácil usar `XMLHttpRequest` para fazer simples requisições GET. O nome da função argumento (callback) é um termo frequentemente usado para descrever funções que são fornecidas para outro código de forma que possa "ser chamada" mais tarde. Não é difícil escrever uma função utilitária HTTP adaptada para o que sua aplicação está fazendo. Escrever outra variação da função para requisições POST ou uma versão genérixa que suporte vários tipos de requisições. Muitas bibliotecas JavaScript também fornecem funções _wrappers_ para `XMLHttpRequest`. O principal problema com a função wrapper anterior é que sua capacidade de lidar com falhas. Quando a requisição retorna um código de status que indica um erro, ela não faz nada. Manipular erros de código assíncrono é ainda mais trabalhos do que manipulá-los em códigos síncronos. Frequentemente, adiamos parte do nosso trabalho colocando-o em uma função _callback_ e, por isso, o escopo de um bloco `try` acaba não fazendo sentido. No código a seguir, a exceção não será capturada pois a chamada à função `backgroundReadFile` retorna imediatamente. O controle de execução então sai do bloco `try` e a função que foi fornecida não será chamada até um momento posterior.

```js
try {
  backgroundReadFile('example/data.txt', function (text) {
    if (text != 'expected') throw new Error('That was unexpected');
  });
} catch (e) {
  console.log('Hello from the catch block');
}
```

Para lidar com requisições que falharam, precisamos permitir que uma função adicional seja passada para nosso wrapper e chamá-la quando ocorrer algo errado. Alternativamente, podemos usar a convenção de que, caso a requisição falhar, um argumento adicional descrevendo o problema é passado para a chamada regular da função callback.

```js
function getURL(url, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.addEventListener('load', function () {
    if (req.status < 400) callback(req.responseText);
    else callback(null, new Error('Request failed: ' + req.statusText));
  });
  req.addEventListener('error', function () {
    callback(null, new Error('Network error'));
  });
  req.send(null);
}
```

Adicionamos um manipulador para o evento de "error" (erro), o qual será sinalizado quando a requisição falhar por completo. Também chamamos a função callb ack com um argumento de erro quando a requisição finaliza com um código de status que indica um erro. O código que utiliza
`getUrl` deve, então, verificar se um erro foi fornecido e, caso tenha sido, tratá-lo.

```js
getURL('data/nonsense.txt', function (content, error) {
  if (error != null) console.log('Failed to fetch nonsense.txt: ' + error);
  else console.log('nonsense.txt: ' + content);
});
```

Isso não funciona quando se trata de exceções. Ao encadear várias ações assíncronas, uma exceção em qualquer ponto da cadeia ainda irá (a não ser que você envolva cada função em seu próprio bloco try / catch) chegar ao topo e abortar a sequência de ações.

---

## 17.9 - PROMISES

Para projetos complicados, escrever código assíncrono usando o estilo de callb acks é difícil de ser feito corretamente. É fácil esquecer de verificar um erro ou permitir que uma exceção inesperada encerre a execução do programa. Além disso, lidar com erros quando os mesmos devem ser passados por um fluxo de múltiplas funções _callback_ e blocos _catch_ é tedioso. E para resolver esse problema usando abstrações adicionais. Uma das mais bem-sucedidas é chamada de `promises`. `Promises` encapsulam uma ação assíncrona em um objeto, que pode ser passado e instruído a fazer certas coisas quando a ação finalizar ou falhar. Essa interface está definida para ser parte da próxima versão da linguagem JavaScript, mas já pode ser usada em forma de biblioteca. Para criar um objeto `promise`, chamamos o construtor `Promise` passando uma função que inicia a ação assíncrona. O construtor chama essa função passando dois argumentos, os quais também são funções. A primeira função deve ser chamada quando a ação terminar com sucesso e a segunda quando ela falhar. Mais uma vez, segue nosso wrapper para requisições GET, dessa vez retornando uma _promise_.

```js
function get(url) {
  return new Promise(function (succeed, fail) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.addEventListener('load', function () {
      if (req.status < 400) succeed(req.responseText);
      else fail(new Error('Request failed: ' + req.statusText));
    });
    req.addEventListener('error', function () {
      fail(new Error('Network error'));
    });
    req.send(null);
  });
}
```

Podemos passa uma URL e ela retorna uma promise. Essa promise atua como um manipulador do resultado da requisição. Ela possui um método
_then_ que pode ser chamado com duas funções: uma para tratar o sucesso e outra para tratar a falha.

```js
get('example/data.txt').then(
  function (text) {
    console.log('data.txt: ' + text);
  },
  function (error) {
    console.log('Failed to fetch data.txt: ' + error);
  }
);
```

É apenas quando você precisa encadear ações que as promises fazem uma diferença significativa. Chamar o método _then_ produz uma nova promise, a qual o resultado depende do valor de retorno da primeira função fornecida ao _then_. Essa função pode retornar outra _promise_ para indicar que mais tarefas assíncronas estão sendo executadas. Nesse caso, a _promise_ retornada pelo _then_ irá esperar pela _promise_ retornada pela função manipuladora, obtendo sucesso ou falhando com o mesmo valor quando for resolvida. Quando a função manipuladora retornar uma valor que não seja uma _promise_, a _promise_ retornada pelo _then_ imediatamente retorna com sucesso usando esse valor como seu resultado. Isso significa que você pode usar _then_ para transformar o resultado de uma _promise_. Por exemplo, o código a seguir retorna uma _promise_ a qual o resultado é o conteúdo de uma dada URL representada como JSON:

```js
function getJSON(url) {
  return get(url).then(JSON.parse);
}
```

A última chamada ao _then_ não especificou um manipulador para falhas. Isso é permitido. O erro será passado para a promise retornada pelo _then_.Como um exemplo que demonstra o uso de promises, iremos construir um programa que carrega um número de arquivos JSON do servidor e, enquanto isso é feito, mostra a palavra "carregando". Queremos recuperar o nome da mãe do cônjuge de example/b ert.json e, se algo der errado, remover o texto
"carregando" e mostrar uma mensagem de erro. Segue uma forma de como isso pode ser feito usando promises:

```html
<script>
  function showMessage(msg) {
    var elt = document.createElement('div');
    elt.textContent = msg;
    return document.body.appendChild(elt);
  }
  var loading = showMessage('Loading...');
  getJSON('example/bert.json')
    .then(function (bert) {
      return getJSON(bert.spouse);
    })
    .then(function (spouse) {
      return getJSON(spouse.mother);
    })
    .then(function (mother) {
      showMessage('The name is ' + mother.name);
    })
    .catch(function (error) {
      showMessage(String(error));
    })
    .then(function () {
      document.body.removeChild(loading);
    });
</script>
```

O programa acima é relativamente compacto e legível. O método _catch_ é similar ao _then_, exceto que ele espera um manipulador de erro como argumento e passará pelo resultado sem alterá-lo em caso de sucesso. Você pode pensar na interface de promise como uma implementação de uma linguagem própria para o controle de fluxo assíncrono. As chamadas adicionais de métodos e expressões de funções fazem com que o código pareça um pouco estranho, mas não tão estranhos quanto se tivéssemos que lidar com todos os erros.

---

## 17.10 - APRECIANDO O HTTP

Quando estamos construindo um sistema que requer comunicação entre um programa executando JavaScript no navegador (client-side) e um programa em um servidor (server-side), existem várias maneiras diferentes de modelar essa comunicação. Um modelo bastante usado é o de chamadas de procedimentos remotos. Nesse modelo, a comunicação segue o padrão de chamadas normais de função, exceto pelo fato de que a função está sendo executada em outra
máquina. Essa chamada envolve fazer uma requisição ao servidor, incluindo o nome da função e seus argumentos. Outra abordagem é construir sua comunicação em torno do conceito de recursos e métodos HTTP. Ao invés de um procedimento remoto chamado _addUser_, utilizar uma requisição PUT
para _/users/larry_. Ao invés de passar as propriedades daquele usuário como argumentos da função, você define um formato de documento ou usa um
formato existente que represente um usuário. Essa segunda abordagem torna mais fácil utilizar as funcionalidades que o HTTP fornece, como suporte para cache de recursos (mantendo uma cópia no lado do cliente). Além disso, ajuda na coerência de sua interface, visto que os recursos são mais fáceis de serem compreendidos do que um monte de funções.

---

## 17.11 - SEGURANÇA HTTP

Dados que trafegam pela Internet tendem a seguir uma longa e perigosa estrada. Para chegar ao seu destino, a informação passa por vários ambientes desde redes Wi-Fi em cafeterias até redes controladas por várias empresas e estados. Em qualquer ponto dessa rota, os dados podem ser inspecionados e, até mesmo, modificados. Se for importante que algo seja secreto, como a senha da sua conta de email, ou que chegue ao destino final sem ser modificado, como o número da conta que você irá transferir dinheiro por meio do site do seu banco, usar simplesmente HTTP não é bom o suficiente. O protocolo HTTP seguro, o qual as URLs começam com `https://`, encapsula o tráfego HTTP de forma que dificulta a leitura e alteração. Todos os dados que trafegam pela conexão são criptografados de forma que assegure que eles estejam protegidos contra espionagem e violação. Quando funciona corretamente, o HTTPs previne ambas situações onde alguém finja ser o website ao qual você estava tentando se comunicar e quando alguém está vigiando sua comunicação. O protocolo não é perfeito e já houveram vários incidentes onde o HTTPs falhou por causa de certificados forjados, roubados e software corrompido. Mesmo assim, é trivial burlar o HTTP simples, enquanto que burlar o HTTPs requer um certo nível de esforço que apenas estados ou organizações criminosas sofisticadas estão dispostas a fazer.

---

## RESUMO

Vimos nesse capítulo que o HTTP é um protocolo para acessar recursos usando a Internet. O cliente envia uma requisição, a qual contém um método (normalmente GET) e um caminho que identifica o recurso. O servidor então decide o que fazer com a requisição e responde com um código de status e o corpo da resposta. Tanto requisições quanto respostas podem conter headers (cabeçalhos) que fornecem informação adicional.

Navegadores fazem requisições GET para acessar recursos necessários para mostrar uma página web. Uma página pode também conter formulários, os quais permitem que informações inseridas pelo usuário sejam enviadas juntas com a requisição quando o formulário é submetido. Você aprenderá mais sobre esse assunto no próximo capítulo.

A interface na qual o JavaScript do navegador pode fazer requisições HTTP é chamada XMLHttpRequest. Você normalmente pode ignorar o "XML" do nome (mas mesmo assim precisa digitá-lo). Existem duas formas em que a interface pode ser usada. A primeira forma é síncrona, bloqueando toda a execução até que a requisição finalize. A segunda é assíncrona, precisando usar um manipulador de eventos para avisar que a resposta chegou. Em quase todos os casos é preferível usar a forma assíncrona. Fazer uma requisição é algo parecido com o código a seguir:

```JS
var req = new XMLHttpRequest();
req.open("GET", "example/data.txt", true);
req.addEventListener("load", function() {
  console.log(req.status);
});
req.send(null);
```

Programação assíncrona é traiçoeira. Promises são interfaces que tornam a programação assíncrona um pouco mais fácil, ajudando a rotear condições de erro e exceções para os manipuladores corretos e abstraindo muitos elementos repetitivos e suscetíveis a erro presentes nesse estilo de programação.
