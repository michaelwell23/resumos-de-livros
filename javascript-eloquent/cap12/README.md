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
