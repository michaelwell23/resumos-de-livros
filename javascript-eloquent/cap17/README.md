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
