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

## 17.4 - REQUISIÇÕES ASSÍNCRONAS

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

## 17.5 - RECUPERANDO DADOS XML

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

## 17.6 - HTTP SANDBOXING

Fazer requisições HTTP usando scripts em uma página web levanta preocupações em relação à segurança.É possível que websites se protejam desses tipos de ataques, porém, é preciso muito esforço e muitos websites falham ao fazê-lo. Por essa razão, os navegadores nos protegem não permitindo que scripts façam requisições HTTP para outros domínios. Isso pode ser um problema irritante quando construímos sistemas que queiram acessar diferentes domínios por razões legítimas. Felizmente, servidores podem incluir um cabeçalho como esse em sua resposta para indicar explicitamente aos navegadores que é permitido requisições que venham de outros domínios:

```txt
Access-Control-Allow-Origin: *
```

---

## 17.7 - ABSTRAINDO REQUISIÇÕES
