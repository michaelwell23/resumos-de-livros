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

## 13.3.1 - Script síncronos, assíncronos e adiados

Quando JavaScript foi adicionada pela primeira vez nos navegadores Web, não havia qualquer API para percorrer e manipular a estrutura e o conteúdo de um documento. A única maneira pela qual o código JavaScript podia afetar o conteúdo de um documento era gerando esse conteúdo dinamicamente, enquanto o documento estava sendo carregado. Isso era feito usando-se o método document. write(). Quando um script passa texto para document.write() , esse texto é adicionado no fluxo de entrada do documento e o analisador de HTML se comporta como se o elemento script fosse substituído por esse texto. A execução de script síncrona ou com bloqueio é apenas o padrão. A marcação script pode ter atributos defer e async , os quais (nos navegadores que os suportam) fazem os scripts serem executados de forma diferente. Esses atributos são booleanos – eles não têm um valor; apenas precisam estar presentes na marcação script. HTML5 diz que esses atributos só têm significado quando usados em conjunto com o atributo src, mas alguns navegadores também podem suportar scripts em linha adiados. Podemo carregar e executar scripts de forma assíncrona mesmo em navegadores que não suportam o atributo async , criando um elemento script dinamicamente e inserindo-o no documento. Usando a função loadasync() podemos carregar scripts dinamicamente – scripts que não são incluídos em linha dentro da página Web nem referenciados estaticamente a partir da página Web são carregados no documento e se tornam parte do programa JavaScript em execução.

## 13.3.2 - JavaScript dirigiida por eventos
