# CAPÍTULO 13 - JAVASCRIPT EM NAVEGADORES WEB

Este capítulo começa com uma visão geral de JavaScript do lado do cliente. Ele contém um exemplo simples e uma discussão do papel de JavaScript em documentos e em aplicativos Web. Essa primeira seção introdutória também explica o que há por vir nos capítulos da Parte II. As seções que se seguem explicam alguns detalhes importantes sobre como código JavaScript é incorporado e executado dentro de documentos HTML e, em seguida, apresentam tópicos em compatibilidade, acessibilidade e segurança.

---

## 13.1 - JAVASCRIPT DO LADO DO CLIENTE

O objeto Window é o principal ponto de entrada para todos os recursos e APIs de JavaScript do lado do cliente. Ele representa uma janela ou quadro de navegador Web e pode ser referenciado através do identificador window. O objeto Window define propriedades como location , que se refere a um objeto Location especificando o URL atualmente exibido na janela e permite que um script carregue um novo URL na janela. Em JavaScript do lado do cliente, o objeto Window também é o objeto global. Isso significa que o objeto Window está no topo do encadeamento de escopo e que suas propriedades e métodos são efetivamente variáveis globais e funções globais. O objeto Window tem uma propriedade chamada window que sempre se refere a ela mesma. Você pode usar essa propriedade se precisar se referir ao objeto janela em si, mas normalmente não é necessário usar window se quiser apenas se referir às propriedades de acesso do objeto janela global. Existem várias outras propriedades, métodos e construtoras importantes definidos pelo objeto Window. Uma das propriedades mais importante do objeto Window é document: ela se refere a um objeto Document que representa o conteúdo exibido na janela. O objeto Document tem métodos importantes, como getElementById(), que retorna um único elemento documento (representando um par de abertura/fechamento de marcações HTML e todo o conteúdo entre elas) baseado no valor de seu atributo id. O objeto Element retornado por getElementById() tem outras propriedades e métodos importantes que permitem aos scripts obterem seu conteúdo, configurar o valor de seus atributos, etc. Outro conjunto importante de propriedades em objetos Window, Document e Element são as propriedades do mecanismo de tratamento de eventos (handlers). Eles permitem que os scripts especifiquem funções que devem ser chamadas de forma assíncrona quando certos eventos ocorrem Um dos mecanismos de tratamento de evento mais importantes é o handler onload do objeto Window. Ela é disparada quando o conteúdo do documento exibido na janela está estável e pronto para ser manipulado.

### 13.1.1- JavaScript em documentos web

Um programa JavaScript pode percorrer e manipular conteúdo de documentos por meio do objeto Document e dos objetos Element que ele contém. Ele pode alterar a apresentação desse conteúdo com scripts de estilos e classes CSS. E pode definir o comportamento de elementos do documento, registrando mecanismos de tratamento de evento apropriados. A combinação de conteúdo de script, apresentação e comportamento é chamada de HTML. O uso de JavaScript em documentos Web normalmente deve ser controlado e moderado. O papel apropriado de JavaScript é melhorar a experiência de navegação do usuário, tornando mais fácil obter ou transmitir informações. A experiência do usuário não deve depender de JavaScript, mas ela pode ajudar a facilitar essa experiência, por exemplo:

- Criando animações e outros efeitos visuais para guiar um usuário sutilmente e ajudar na na-
  vegação na página
- Ordenar as colunas de uma tabela para tornar mais fácil para o usuário descobrir o que neces-
  sita
- Ocultar certo conteúdo e revelar detalhes progressivamente, à medida que o usuário “se apro-
  funda” nesse conteúdo

### 13.1.2 - JavaScript em aplição web

Os aplicativos Web utilizam todos os recursos de DHTML de JavaScript que os documentos Web utilizam, mas também vão além dessa APIs de manipulação de conteúdo, apresentação e comportamento para tirar proveito de outros serviços fundamentais fornecidos pelo ambiente do navegador Web. Para realmente entender os aplicativos Web, é importante perceber que os navegadores Web foram muito além de sua função original como ferramentas para exibir documentos e se transformaram em sistemas operacionais simples. Considere o seguinte: um sistema operacional tradicional permite organizar ícones (que representam arquivos e aplicativos) na área de trabalho e em pastas. Um navegador Web permite organizar bookmarks (que representam documentos e aplicativos Web) em uma barra de ferramentas e em pastas. Um sistema operacional executa vários aplicativos em janelas separadas; um navegador Web exibe vários documentos (ou aplicativos) em guias (ou abas) separadas. Um sistema operacional define APIs de baixo nível para conexão em rede, desenho de elementos gráficos e salvamento de arquivos. Os navegadores Web definem APIs de baixo nível para conexão em rede, salvamento de dados e desenho de elementos gráficos. Tendo em mente essa noção de navegador Web como um sistema operacional simplificado, podemos definir os aplicativos Web como páginas Web que utilizam JavaScript para acessar serviços mais avançados (como conexão em rede, elementos gráficos e armazenamento de dados) oferecidos pelos navegadores. Evidentemente, JavaScript é mais pertinente a aplicativos Web do que a documentos Web. Ela aprimora documentos Web, mas um documento bem projetado vai continuar a funcionar mesmo com JavaScript desativada. Os aplicativos Web são, por definição, programas JavaScript que utilizam serviços como os providos por um sistema operacional e que são fornecidos pelo navegador Web e não se espera que funcionem com JavaScript desativada

---

## 13.2 - INCORPORANDO JAVASCRIPT EM HTML

O código JavaScript do lado do cliente é incorporado em documentos HTML de quatro maneiras:

- Em linha, entre um par de marcações da tag script;
- A partir de um arquivo externo especificado pelo atributo src de uma marcação da tag script;
- Em um atributo de tratamento de evento HTML, como onclick ou onmouseover;
- Em um URL que use o protocolo especial javascript;

### 13.2.1 - o elemento script

O código JavaScript pode aparecer em linha dentro de um arquivo HTML, entre as marcações da tag script:

```html
<script>
  // Seu código JavaScript fica aqui
</script>
```

Em XHTML, o conteúdo de um elemento script é tratado como qualquer outro conteúdo. Se seu código JavaScript contém os caracteres < ou & , esses caracteres são interpretados como marcações XML. Por isso, é melhor colocar todo código JavaScript dentro de uma seção CDATA, caso você esteja usando XHTML:

```xhtml
<!-- XHTML -->
<script>
  <![CDATA[
    // Seu código JavaScript fica aqui
    ]]>
</script>
```

### 13.2.2 - Scripts em arquivos externos

A marcação script suporta um atributo src que especifica o URL de um arquivo contendo código JavaScript. Ela é usada como segue:

```html
<script src="../../scripts/util.js"></script>
```

Um arquivo JavaScript contém JavaScript puro, sem marcações script ou qualquer outro código HTML. Por convenção, os arquivos de código JavaScript têm nomes que terminam com .js. Uma marcação de tag script com o atributo src especificado se comporta exatamente como se o con-
teúdo do arquivo JavaScript especificado aparecesse diretamente entre as marcações da tag script. Quando o atributo src é usado, qualquer conteúdo entre as marcações da tag script de abertura e fechamento é ignorado. Se quiser, você pode usar o conteúdo da marcação script para incluir documentação ou informações de direitos de cópia do código incluído. Note, entretanto, que os validadores de HTML5 vão reclamar se qualquer texto que não seja espaço em branco ou um comentário de JavaScript aparecer entre:

```html
<script src="">
  e;
</script>
.
```

O carregamento de scripts de servidores diferentes daquele que forneceu o documento que utiliza o script tem importantes implicações na segurança. A política de segurança da mesma origem, impede que código JavaScript de um documento de um domínio interaja com o conteúdo de outro domínio.Contudo, note que a origem do script em si não importa – somente a origem do documento no qual o script está incorporado. Portanto, a política da mesma origem não se aplica nesse caso: o código JavaScript pode interagir com o documento no qual está incorporado, mesmo quando o código tem uma origem diferente da do documento. Quando você usa o atributo src para incluir um script em sua página, está dando ao autor desse script (e ao webmaster do domínio a partir do qual o script é carregado) controle completo sobre sua página Web.

### 13.2.3 - Tipos de script

JavaScript foi a linguagem de script original da Web e, por padrão, os elementos script hipoteticamente contêm ou fazem referência a código JavaScript. Se quiser usar uma linguagem de script não padrão, como VBScript da Microsoft (que é suportada somente pelo IE), o atributo type deve ser utilizado para especificar o tipo de script MIME:

```html
<script type=”text/vbscript”>
' O código VBScript fica aqui
</script>
```

O valor padrão do atributo type é “text/javascript”. Se quiser, você pode especificar esse tipo explicitamente, mas isso nunca é necessário.
Os navegadores mais antigos usavam um atributo language na marcação script, em vez do atributo type , sendo que às vezes você ainda vai ver páginas Web que incluem marcações como segue

```html
<script language="javascript">
  // código JavaScript aqui...
</script>
```

Quando um navegador Web encontra um elemento script com um atributo type cujo valor não reconhece, ele analisa o elemento, mas não tenta exibir ou executar esse conteúdo. Isso significa que você pode usar o elemento script para incorporar dados textuais arbitrários em seu documento: basta usar o atributo type para especificar um tipo não executável para seus dados.

### 13.2.4 - Rotinas de tratamento de evento em HTML

O código JavaScript em um script é executado uma vez: quando o arquivo HTML que o contém é carregado no navegador Web. Para ser interativo, um programa JavaScript precisa definir mecanismos de tratamento de eventos – funções de JavaScript registradas no navegador Web e depois chamadas por ele em resposta a eventos (como entrada de usuário). As propriedades dos mecanismos de tratamento de evento como onclick espelham atributos HTML com os mesmos nomes e também é possível definir mecanismos de tratamento de evento colocando código JavaScript em atributos HTML.

```html
<input
  type="checkbox"
  name="options"
  value="giftwrap"
  onchange="order.options.giftwrap = this.checked;"
/>
```

### 13.2.5 - JavaScript em URLS

Outra maneira de incluir código JavaScript no lado do cliente é em um URL após o especificador de protocolo javascript: . Esse tipo de protocolo especial especifica que o corpo do URL é uma string arbitrária de código JavaScript a ser executada pelo interpretador JavaScript. Ela é tratada como uma única linha de código, ou seja, as instruções devem ser separadas por pontos e vírgulas e que comentários /\* \*/ devem ser usados em lugar de comentários // . O “recurso” identificado por um URL javascript: é o valor de retorno do código executado, convertido em uma string. Um URL javascript: pode ser usado em qualquer lugar em que se usaria um URL normal: no atributo href de uma marcação da tag a , no atributo action de uma tag form , por exemplo, ou mesmo como um argumento de um método como window.open() . Um URL JavaScript em um hiperlink poderia ser como segue:

```html
<a href="javascript:new Date().toLocaleTimeString();"> What time is it? </a>
```

#### 13.2.5.1 - Bookmarklets

Em um navegador Web, um “marcador” é um URL salvo. Se você marca um URL javascript: , está salvando um pequeno script, conhecido como bookmarklet. Um bookmarklet é um mini-programa que pode ser ativado facilmente a partir dos menus ou da barra de ferramentas do navegador. O código de um bookmarklet é executado como se fosse um script na página e pode consultar e configurar conteúdo de documento, apresentação e comportamento. Desde que um bookmarklet não retorne um valor, ele pode operar em qualquer documento que esteja sendo exibido, sem substituir esse documento por novo conteúdo.

---

## 13.3 - Execução de programas JavaScript

Não existe uma definição formal de programa em JavaScript do lado do cliente. Podemos dizer que um programa JavaScript consiste em todo o código JavaScript de uma página Web (scripts em linha, rotinas de tratamento de evento HTML e URLs javascript: ), junto com o código JavaScript exter-
no referenciado com o atributo src de uma marcação script. Todos esses itens de código separados compartilham um único objeto global Window. Isso significa que todos veem o mesmo objeto Document e compartilham o mesmo conjunto de funções e variáveis globais: se um script definir uma nova variável ou função global, essa variável ou função vai ser visível para qualquer código JavaScript executado após o script. A execução de programas JavaScript ocorre em duas fases. Na primeira fase, o conteúdo do documento é carregado e o código dos elementos script (tanto scripts em linha como scripts externos) é executado. Os scripts geralmente são executados na ordem em que aparecem no documento. O código JavaScript dentro de qualquer script é executado de cima para baixo, na ordem em que aparece, sujeito, é claro, às condicionais, aos laços e a outras instruções de controle de JavaScript. Uma vez que o documento seja carregado e todos os scripts sejam executados, a execução de JavaScript entra em sua segunda fase. Essa fase é assíncrona e dirigida por eventos. Durante essa fase dirigida por eventos, o navegador Web chama funções de tratamento de evento (definidas
pelos atributos de tratamento de evento HTML, por scripts executados na primeira fase ou por rotinas de tratamento de evento chamadas anteriormente), em resposta aos eventos que ocorrem de forma assíncrona. As rotinas de tratamento de evento são mais comumente chamadas em resposta à entrada do usuário (cliques de mouse, pressionamentos de tecla, etc.), mas também podem ser disparadas por atividade da rede, tempo decorrido ou erros no código JavaScript.

### 13.3.1 - Script síncronos, assíncronos e adiados

Quando JavaScript foi adicionada pela primeira vez nos navegadores Web, não havia qualquer API para percorrer e manipular a estrutura e o conteúdo de um documento. A única maneira pela qual o código JavaScript podia afetar o conteúdo de um documento era gerando esse conteúdo dinamicamente, enquanto o documento estava sendo carregado. Isso era feito usando-se o método document. write(). Quando um script passa texto para document.write() , esse texto é adicionado no fluxo de entrada do documento e o analisador de HTML se comporta como se o elemento script fosse substituído por esse texto. A execução de script síncrona ou com bloqueio é apenas o padrão. A marcação script pode ter atributos defer e async , os quais (nos navegadores que os suportam) fazem os scripts serem executados de forma diferente. Esses atributos são booleanos – eles não têm um valor; apenas precisam estar presentes na marcação script. HTML5 diz que esses atributos só têm significado quando usados em conjunto com o atributo src, mas alguns navegadores também podem suportar scripts em linha adiados. Podemo carregar e executar scripts de forma assíncrona mesmo em navegadores que não suportam o atributo async , criando um elemento script dinamicamente e inserindo-o no documento. Usando a função loadasync() podemos carregar scripts dinamicamente – scripts que não são incluídos em linha dentro da página Web nem referenciados estaticamente a partir da página Web são carregados no documento e se tornam parte do programa JavaScript em execução.

### 13.3.2 - JavaScript dirigiida por eventos

Os eventos têm nomes, como “click”, “change”, “load”, “mouseover”, “keypress” ou “readystatechange”, que indicam o tipo geral do evento que ocorreu. Eles também têm um alvo, que é o objeto em que ocorreram. Quando falamos de um evento, devemos especificar tanto o tipo (o nome) como o alvo: um evento click em um objeto HTMLButtonElement, por exemplo, ou um evento readystatechange em um objeto XMLHttpRequest.Se queremos que nosso programa responda a um evento, escrevemos uma função conhecida como “rotina de tratamento de evento”, “ouvinte de evento” ou, às vezes, apenas “retorno de chamada” (ou callback). Então, registramos essa função para que seja ativada quando o evento ocorrer. A maneira mais simples de registrar uma rotina de tratamento de evento normalmente é atribuir uma função JavaScript a uma propriedade do objeto alvo. Observe que as propriedades da rotina de tratamento de evento têm nomes que, por convenção, começam com “on” e são seguidas pelo nome do evento. Note também que não existem chamadas de função nos códigos anteriores: estamos atribuindo as próprias funções a essas propriedades. O navegador vai fazer a chamada quando os eventos ocorrerem. A programação assíncrona com eventos frequentemente envolve funções aninhadas e não é raro acabar escrevendo código que define funções dentro de funções dentro de funções. Na maioria dos navegadores, para a maioria dos tipos de eventos, as rotinas de tratamento de evento são passadas a um objeto como um argumento e as propriedades desse objeto fornecem detalhes sobre o evento. O objeto passado para um evento click, por exemplo, teria uma propriedade especificando qual botão do mouse foi clicado.

### 13.2.3 - Modelo de threading de JavaScript do lado do cliente

JavaScript básica não contém qualquer mecanismo de threading e JavaScript do lado do cliente tradicionalmente também não tem um mecanismo definido. A HTML5 define “Web workers”, os quais servem como um tipo de thread de segundo plano (mais sobre Web workers a seguir), mas JavaScript do lado do cliente ainda se comporta como se fosse rigorosamente de thread única. Mesmo quando a execução concomitante é possível, JavaScript do lado do cliente não pode detectar o fato de que isso está ocorrendo. A execução com thread única contribui para scripts muito mais simples: pode-se escrever código com a certeza de que duas rotinas de tratamento de evento nunca será executadas ao mesmo tempo. Você pode manipular conteúdo de documento sabendo que nenhuma outra thread está tentando modificá-lo ao mesmo tempo e nunca precisa se preocupar com bloqueios, impasses ou condições de disputa ao escrever código JavaScript. A execução com thread única significa que os navegadores Web devem parar de responder à entrada
do usuário enquanto scripts e rotinas de tratamento de evento estão em execução. Isso sobrecarrega os programadores JavaScript, pois significa que os scripts e as rotinas de tratamento de evento de JavaScript não devem executar por muito tempo.

### 13.2.4 - Linha do tempo de JavaScript do lado do cliente

Os programas JavaScript começam em uma fase de execução de script e depois passam para uma fase de tratamento de eventos. Essa linha do tempo não especifica quando o documento se torna visível para o usuário ou quando o navegador Web deve começar a responder aos eventos de entrada do usuário. Esses são detalhes da implementação. Para documentos muito longos ou conexões de rede muito lentas, teoricamente é possível um navegador Web representar parte de um documento e permitir que o usuário comece a interagir com ela antes que todos os scripts tenham executado.

---

## 13.4 - COMPATIBILIDADE E INTEROPERABILIDADE

O navegador Web é o sistema operacional dos aplicativos Web, mas a Web é um ambiente heterogêneo e seus documentos e aplicativos serão vistos e executados em navegadores de épocas diferentes (desde lançamentos beta de última geração até navegadores de dez anos atrás, como o IE6), de diferentes fornecedores (Microsoft, Mozilla, Apple, Google, Opera), executando em diferentes sistemas operacionais (Windows, Mac OS, Linux, OS, Android). É um desafio escrever programas complexos em JavaScript do lado do cliente que sejam executados corretamente em uma variedade tão ampla de plataformas. A linguagem JavaScript em si é implementada considerando a interoperabilidade por todos os fornecedores de navegador e não é uma fonte de problemas de compatibilidade. Todos os navegadores têm implementações interoperáveis de ES3 e, quando este livro estava sendo escrito, todos os fornecedores estavam trabalhando na implementação de ES5. A transição entre ES3 e ES5 pode ser a fonte de problemas de compatibilidade, pois alguns navegadores suportam o modo restrito enquanto outros não, mas a expectativa é de que os fornecedores de navegador implementem ES5 de forma interoperável. Conhecer as incompatibilidades entre os navegadores é apenas o primeiro passo, evidentemente. Em seguida, é preciso decidir como se vai tratar delas. Uma estratégia é restringir-se a usar somente os recursos suportados universalmente (ou facilmente simulados) por todos os navegadores que você opte por suportar.

### 13.4.1 - Bibliotecas de compatibilidade

Uma das maneiras mais fáceis de lidar com incompatibilidades é usar bibliotecas de código que as solucionam para você. Às vezes, no entanto, não é possível implementar um recurso completamente (ou eficientemente) em navegadores que não o suportam. Conforme já mencionado, o IE é o único navegador que nãoimplementa uma API de tratamento de eventos padrão, incluindo o método addEventListener() para registrar rotinas de tratamento de evento. O IE suporta um método semelhante, chamado attachEvent() . attachEvent() não é tão poderoso quanto addEventListener() e não é viável imple-
mentar o padrão inteiro de forma transparente sobre o que o IE oferece. Em vez disso, os desenvolvedores às vezes definem um método de tratamento de eventos de meio-termo – frequentemente chamado addEvent() – que pode ser implementado de forma portável com addEventListener() ou attachEvent(). Então, eles escrevem todo seu código para usar addEvent() em lugar de addEventListener() ou attachEvent(). Na prática, atualmente muitos desenvolvedores Web utilizam estruturas JavaScript do lado do cliente, como a jQuery, em todas as suas páginas Web. Uma das funções que torna essas estruturas tão indispensáveis é que elas definem uma nova API do lado do cliente e a implementam de forma compatível para todos os navegadores.

### 13.4.2 - Graded browser support

Graded browser support é uma técnica de teste e garantia de qualidade promovida e defendida pela Yahoo! que traz algum equilíbrio à normalmente descontrolada proliferação de variantes de fornecedores/versão/sistema operacional de navegadores. Sucintamente, o graded browser support envolve escolher navegadores “grau A” que recebem suporte e teste totais e identificar navegadores “grau C” que não são suficientemente poderosos. Os navegadores grau A recebem páginas Web completas e os navegadores grau funciona versões mínimas, somente de HTML das páginas que não exigem JavaScript ou CSS. Os navegadores que não são nem grau A, nem grau C são denominados grau X: normalmente, são navegadores novos ou especialmente raros.

### 13.4.3 - Teste de recursos

Teste de recursos (às vezes chamado de teste de capacidade) é uma técnica poderosa para lidar com incompatibilidades. Se quiser usar um recurso ou uma capacidade que talvez não seja suportada por todos os navegadores, inclua em seu script um código que faça um teste para ver se esse recurso é
suportado. Se o recurso desejado não é suportado na plataforma atual, não o utilize nessa plataforma ou forneça código alternativo que funcione em todas as plataformas.

### 13.4.4 - Modo Quirks e modo Stardards

No “modo Standards” ou “modo de compatibilidade CSS”, o navegador seguiria os padrões de CSS. No “modo Quirks”, o navegador se comportaria da maneira peculiar não padronizada do IE4 e do IE5. A escolha de modos de renderização dependia da declaração DOCTYPE no início do arquivo HTML. As páginas sem DOCTYPE e as páginas que declaravam certas definições permissivas de tipo de documento, que eram comumente utilizadas na época do IE5, eram renderizadas no modo Quirks. As páginas com definições de tipo de documento restritas (ou, por compatibilidade com futuras versões, páginas com definições de tipo de documento não reconhecidas) eram renderizadas no modo Standards. As páginas com definição de tipo de documento HTML5 ( !DOCTYPE html) são renderizadas no modo Standards em todos os navegadores modernos.

### 13.4.5 - Teste de navegador

Em JavaScript do lado do cliente, isso é feito com o objeto Navigator. O código que determina o fornecedor e a versão do navegador presente é
frequentemente chamado de browser sniffer (farejador de navegador) ou client sniffer (farejador de cliente). Farejar cliente era uma técnica de programação comum nos primórdios da Web, quando as plataformas Netscape e IE eram incompatíveis e divergentes. Agora a técnica perdeu a popularidade e só deve ser usada quando absolutamente necessária. Note que o farejamento de cliente também pode ser feito no lado do servidor, com o servidor Web escolhendo o código JavaScript a ser enviado, com base em como o navegador se identifica em seu cabeçalho User-Agent.

### 13.4.6 - Comentários condicionais no Internet Explorer

Na prática, você vai ver que muitas das incompatibilidades na programação JavaScript do lado do cliente são específicas do IE. Isto é, deve-se escrever código de uma maneira para o IE e de outra para todos os outros navegadores. O IE suporta comentários condicionais (introduzidos no IE5)
completamente não padronizados, mas que podem ser muito úteis para resolver incompatibilidades.

---

## 13.5 - ACESSIBILIDADE

A Web é uma ferramenta maravilhosa para disseminar informações e os programas JavaScript podem melhorar o acesso a essas informações. No entanto, os programadores de JavaScript devem ser cuidadosos: é fácil escrever código JavaScript que inadvertidamente nega informações aos visitantes
com limitações visuais ou físicas. Os usuários cegos podem usar uma forma de “tecnologia auxiliar”, conhecida como leitor de tela, para converter palavras escritas em palavras faladas. Alguns leitores de tela são sensíveis à JavaScript e outros funcionam melhor quando JavaScript está desativada. Se você projetar um site que exige JavaScript para exibir suas informações, vai excluir os usuários desses leitores de tela. A função correta de JavaScript é melhorar a apresentação de informações e não assumir o lugar da apresentação dessas informações. Uma regra fundamental da acessibilidade com JavaScript é projetar seu código de modo que a página Web em que vai ser usado ainda funcione (pelo menos de alguma forma) com
o interpretador JavaScript desativado. Outra preocupação importante quanto à acessibilidade são os usuários que utilizam o teclado, mas não podem usar (ou optam por não usar) um dispositivo de apontamento, como o mouse. Se você escrever código JavaScript que conta com eventos específicos do mouse, vai excluir os usuários que não utilizam o mouse. Os navegadores permitem percorrer uma página Web com o teclado e ativar elementos de interface com o usuário dentro dela, e seu código JavaScript também deve permitir isso.

---

## 13.6 - SEGURANÇA

Assim como em muitos setores, a segurança de JavaScript evoluiu por meio de um processo interativo e contínuo de explorações e emendas. Nos primórdios da Web, os navegadores adicionaram recursos como a capacidade de abrir, mover e redimensionar janelas e escrever na linha de status. Quando anunciantes e fraudadores antiéticos começaram a abusar desses recursos, os fornecedores de navegador tiveram que restringir ou desabilitar essas APIs. Hoje, no processo de padronização da HTML5, os fornecedores de navegador estão suspendendo cuidadosamente (de forma aberta e colaborativa) certas restrições de segurança antigas e adicionando muito poder à JavaScript do lado do cliente, ao passo que (espera-se) não introduzem novas brechas de segurança.

### 13.6.1 - O que JavaScript não pode fazer

A primeira linha de defesa dos navegadores Web contra código mal-intencionado é simplesmente não aceitarem certos recursos. Um programa JavaScript não pode excluir dados nem disseminar vírus. Da mesma forma, JavaScript do lado do cliente não tem qualquer recurso de conexão em rede de uso geral. Um programa JavaScript do lado do cliente pode fazer script do protocolo HTTP. E outro padrão associado ao HTML5, conhecido como WebSockets, define uma API do tipo soquete para comunicação com servidores especializados. Mas nenhuma dessas APIs permite acesso sem intermediários à rede mais ampla. Os clientes e servidores de Internet de uso geral não podem ser escritos em JavaScript do lado do cliente.

### 13.6.2 - A política da mesma origem

A política da mesma origem é uma restrição de segurança que delimita o conteúdo Web com que o código JavaScript pode interagir. Normalmente, ela entra em ação quando uma página Web inclui elementos iframe ou abre outras janelas no navegador. Nesse caso, a política da mesma origem governa as interações do código JavaScript em uma janela ou quadro com o conteúdo de outras janelas e quadros. Especificamente, um script só pode ler as propriedades de janelas e documentos que tenham a mesma origem do documento que contém o script. A política da mesma origem não se aplica a todas as propriedades de todos os objetos em uma janela de origem diferente. Mas se aplica a muitas delas – em especial, se aplica a praticamente todas as
propriedades do objeto Document. A política da mesma origem é necessária para impedir que os scripts roubem informações privilegiadas. Sem essa restrição, um script mal-intencionado (carregado através de um firewall em um navegador de uma intranet corporativa segura) poderia abrir uma janela vazia, tentando enganar o usuário e fazê-lo usar essa janela para procurar arquivos na intranet. Então, o script mal-intencionado leria o conteúdo dessa janela e o enviaria para seu próprio servidor. A política da mesma origem impede esse tipo de comportamento.

#### 13.6.2.1 - Atenuando a política da mesma origem

A política da mesma origem causa problemas para sites grandes que utilizam vários subdomínios. Por exemplo, um script em um documento de home.example.com poderia querer legitimamente ler propriedades de um documento carregado de developer.example.com, ou scripts de orders.example.
com talvez precisassem ler propriedades de documentos em catalog.example.com. Para suportar sites de vários domínios desse tipo, você pode usar a propriedade domain do objeto Document. Por padrão, a propriedade domain contém o nome de host do servidor a partir do qual o documento foi
carregado. Essa propriedade pode ser configurada, mas somente em uma string que seja um sufixo de domínio válido dela mesma. Assim, se domain é originalmente a string “home.example.com”, você pode configurá-la como a string “example.com”, mas não como “home.example” ou “ample.com”.
Além disso, o valor domain deve conter pelo menos um ponto; você não pode configurá-lo como “com” ou qualquer outro domínio de nível superior. A segunda técnica para abrandar a política da mesma origem é padronizar sob o nome Cross-Origin Resource Sharing. Esse esboço de padrão estende a HTTP com um novo cabeçalho de pedido Origin: e um novo cabeçalho de resposta Access-Control-Allow-Origin .Isso permite que os servidores utilizem um cabeçalho para listar explicitamente as origens que podem solicitar um arquivo ou usar um curinga e permitir que um arquivo seja solicitado por qualquer site.

### 13.6.3 - Scripts de plug-ins e controles ActiveX

Existem implicações relacionadas à segurança na capacidade de fazer script de controles ActiveX e plug-ins. Os applets Java, por exemplo, têm acesso a recursos de conexão em rede de baixo nível. A “caixa de areia” de segurança de Java impede que os applets se comuniquem com qualquer servidor que não seja aquele a partir do qual foram carregados, de modo que isso não abre uma brecha na segurança. Mas isso expõe o problema básico: se é possível fazer scripts de plug-ins, você precisa confiar não apenas na arquitetura de segurança do navegador Web, mas também na arquitetura de segurança do plug-in. Na prática, os plug-ins Java e Flash parecem ter segurança robusta e são ativamente mantidos e atualizados quando brechas de segurança são descobertas. No entanto, os scripts de ActiveX têm um passado mais turbulento. O navegador IE tem acesso a uma variedade de controles ActiveX que podem fazer parte de scripts e que fazem parte do sistema operacional Windows, e no passado alguns desses controles continham brechas de segurança que podiam ser exploradas.

### 13.6.4 - Cross-site scripting

Cross-site scripting (ou XSS) é um termo para uma categoria de problemas de segurança nos quais um invasor injeta marcações HTML ou scripts em um site. Fazer a defesa contra ataques de XSS normalmente é uma das funções dos desenvolvedores Web no lado do servidor. Contudo, os programadores JavaScript do lado do cliente também devem conhecer e se defender do cross-site scripting. Uma página Web é vulnerável ao cross-site scripting se gera conteúdo de documento dinamicamente e baseia esse conteúdo em dados enviados pelo usuário sem primeiro “desinfetá-los”, removendo deles qualquer marcação HTML incorporadas.

### 12.6.5 - Ataques de navegação de serviço

A política da mesma origem e outras restrições de segurança descritas aqui fazem um bom trabalho de evitar que código mal-intencionado danifique seus dados ou comprometa sua privacidade. Contudo, eles não protegem contra ataques de negação de serviço tipo força bruta. Se você visita um
site mal-intencionado com JavaScript habilitada, esse site pode prender seu navegador com um laço infinito de caixas de diálogo alert() ou diminuir a velocidade de sua CPU com um laço infinito ou um cálculo sem sentido.

---

## 13.7 - ESTRUTURAS DO LADO DO CLIENTE

Muitos desenvolvedores Web acham útil construir seus aplicativos Web em cima de uma biblioteca de estruturas (ou framework) do lado do cliente. Essas bibliotecas são “estruturas” no sentido de que constroem uma nova API de nível mais alto para programação no lado do cliente, sobre as APIs
padrão e proprietárias oferecidas pelos navegadores Web: quando você adota uma estrutura, seu código precisa ser escrito de forma a usar as APIs definidas por essa estrutura. A vantagem óbvia de usar uma estrutura é que se trata de uma API de nível mais alto que permite fazer mais com menos
código. Uma estrutura bem escrita também vai tratar de muitos dos problemas de compatibilidade, segurança e acessibilidade descritos anteriormente.
