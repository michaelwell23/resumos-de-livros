# JAVASCRIPT E O NAVEGADOR

Sem os navegadores, não existiria JavaScript. E mesmo se existise, ninguém daria atenção a ele. A tecnologia web, desde de o início, é descentralizada não apenas tecnicamente mas também na maneira que se evolui. Vários fornecedores de navegador tem adicionado funcionalidade _ad-hoc_ e muita das vezes tem sido de maneira mal pensadas, que acabam sendo adotadas por outros e finalmente viram um padrão. A forma casual que a Web foi desenvolvida signifia que o sistema resultante não é exatamente um brilhante exemplo interno de consistência. De fato, algumas partes são completamente bagunçadas e confusas.

---

## 12.1 - REDES E A INTERNET

Redes de computadores existem desde 1950. Se você colocar cabos entre dois ou mais computadores e permitir que eles enviem dados um para o outro por estes cabos, você pode fazer todo tipo de coisas maravilhosas. A tecnologia para começar a implementação desta visão foi desenvolvida em meados de 1980, e a rede resultante é chamada de _internet_. Ela tem vivido desde a sua promessa. Um computador pode usar essa rede para enviar bits para outro computador. Para qualquer comunicação efetiva nascida desse envio de bits, os computadores em ambas as pontas devem conhecer qual a representação de cada bit. Um protocolo de rede descreve um estilo de comunicação em uma rede. A maioria dos protocolos são feitos em cima de outros protocolos. Um protocolo de chat considera a rede como um tipo de dispositivo de _stream_, no qual pode enviar bits e recebê-los com destino correto e na ordem correta. Assegurar essas coisas atualmente é um problema técnico bastante difícil. O TCP (Protocolo de Controle de Transmissão) é um protocolo que resolve este problema, pois a maioria da comunicação é feita através dele. Uma conexão TCP funciona da seguinte maneira: um computador deve estar esperando, ou ouvindo, outros computadores que irão começar a falar com ele. Para ser capar de escutar por diferente tipos de comunicação ao mesmo tempo em uma única máquina, cada ouvinte tem um número chamado de **porta** associado a ele.A maioria dos protocolos especificam qual porta deve ser usada por padrão. Outro computador pode então estabelecer uma conexão com a máquina alvo usando o número correto da porta. Uma conexão atua como um encanamento de via dupla pelo qual bits pode ser transitados às máquinas nas duas extremidades contendo dados. O computador ouvinte é chamado de _servidor_, e o computador que está se conectando é chamado de _cliente_. Uma vez que os bits tenham sido transmitidos com sucesso, eles podem ser lidos novamente pela máquina do outro lado. Isso é um modelo conveniente. Você pode dizer que o TCP fornece uma abstração de uma rede.

---

## 12.2 - A WEB

A _World Wide Web_ é um conjunto e protocolos e formatos que nos permite visitar páginas web em um navegador. A parte "Web" no nome se refere ao fato destas páginas serem facilmente ligadas umas nas outras. Para adicionar conteúdo na Web, é necessário conectar uma máquina a internet, e deixá-la escutando na porta 80, usando o _HTTP (Hypertext Transfert Protocol HTTP)_. Este protocoloc permite outros computadores requisitarem documentos na rede. Cada documento na Web é nomeado por uma _URL (Universal Resource Locator)_.

```txt
http://eloquentjavascript.net/12_browser.html
|    |                       |               |
protocolo      servidor        caminho (path)
```

A primeira parte nos diz que esta URL usa o protocolo HTTP. Então vem a parte que identifica qual servidor esta sendo requisitado o documento. Por último temos a string de caminho que identifica o documento específico de interesse. Cada máquina conectada com a Internet recebe um endereço IP único. Podemos usar isso deretamente como parte da URL, mas essa lista de números são difíceis de se lembrar e estranho de se digitar, então ao invés diso podemos registrar um nome de domínio único para apontar para uma máquina específica ou conjunto de máquinas. Se digitarmos uma URL na barra de enedrço do navegador, ela vai tentar retornar e mostrar o documento dessa URL. Primeiro, o navegador tem que encontrar o endereço. ENtão, usando o protocolo HTTP, ele faz a conexão ao servidor neste endereço e pergunta pelo documento.

---

## 12.3 - HTML

HTML, que sginifica Hypertext Markup Language (LInguagem de marcação de hipertexto), é o formato de documento usado para as páginas web. UM documento HTML contém texto, bem como tags que fornecem estrutura para esse texto, descreveno como links, parágrafos e cabeçalhos.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>
      I also wrote a book! Read it
      <a href="http://eloquentjavascript.net">here</a>.
    </p>
  </body>
</html>
```

As tags, definidas entre os sinais de menor e maior que `(< e >)`, fornecem informações sobre a estrutura do documento. O conteúdo restante é apenas texto puro. O documento começa com `<!DOCTYPE html>`, que diz ao navegador para interpretá-lo como HTML moderno. Documentos HTML possuem um _head_ (cabeça), e um _body_ (corpo). O head contém informações osbre o documento, o _body_ contém o documento em si.

Tags aparecem em diversas forma. Um elemento, como o `<body>`, um parágrafo ou um link, começa com uma tag de abertura como em `<p>` e termina com uma tag de fechamento como em `</p>`. Algumas tags de abertura como aquela para links (`<a>`), contém informações na forma de pares _nome="valor"_. Estes são chamados de atributos. No caso da tag link é indicado atributo `href=""`, que significa referência de hipertexto. Alguns tipos de tags não englobam conteúdo e assim necessitam de uma tag de fechamento. Um exemplo seria `<img src="http://example.com/image.jpg">`, que irá mostrar a imagem encontrada na URL informada no atributo _src_.

O HTML é interpretado de uma forma notavel tolerante a erros. Se uma tag é omitida, o navegador ira inseri-la. A forma com que isso é feito foi pradonizada, você confiar em todos os navegadore modernos para realizar tal tarefa.

```html
<!doctype html>
<title>My home page</title>
<h1>My home page</h1>
<p>Hello, I am Marijn and this is my home page.
<p>I also wrote a book! Read it
<a href=http://eloquentjavascript.net>here</a>.
```

---

## 12.4 - HTML E JAVASCRIPT

A tag mais importante do HTML é `<script>`. Essa tag nos permite incluir trechos de JavaScript em um documento.

```html
<h1>Testing alert</h1>
<script>
  alert('hello!');
</script>
```

Esse script executando assim que a tag `<script>` for encontrada enquanto o navegador interpreta o HTML. Incluir programas grande diretamente no documento HTML é impraticável. A tag script pode receber um atributo src a fim de buscar um arquivo de script a partir de uma URL.

```html
<h1>Testing alert</h1>
<script src="hello.js"></script>
```

Quando uma página HTML referencia outra URLs como parte de si, os navegadores irão buscá-los imediatamente e incluí-los na página. Uma tag de script deve sempre ser fechada com a tag /script, mesmo quando fizer referência para um arquivo externo e não contenha nenhum código.

Alguns atributos podem conter um programa JavaScript. A tag button possui um atributo _onclick_, cujo conteúdo será executado sempre que o botão for clicado.

```html
<button onclick="alert('Boom!');">DO NOT PRESS</button>
```

Pareceba que é preciso utilizar aspas simples para a string do atributo porque aspas duplas já estão sendo usadas para envolver o valor do atributo.

---

## 12.5 - NA CAIXA DE AREIA
