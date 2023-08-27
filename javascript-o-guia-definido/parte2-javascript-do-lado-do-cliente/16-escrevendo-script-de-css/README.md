# CAPÍTULO 16 - ESCREVENDO SCRIPT DE CSS

Cascading Style Sheets (CSS – folhas de estilo em cascata) é um padrão para especificar a apresentação visual de documentos HTML. CSS se destina a ser usada por designers gráficos: ela permite que um designer especifique precisamente as fontes, cores, margens, recuo, bordas e até a posição de elementos do documento. Mas CSS também é interessante para programadores JavaScript do lado do cliente, pois é possível fazer scripts com os estilos CSS. CSS em scripts possibilita uma variedade de efeitos visuais interessantes: é possível criar transições animadas onde o conteúdo do documento “desliza” a partir da direita, por exemplo, ou criar uma lista de tópicos que se expande e contrai, na qual o usuário pode controlar o volume de informações exibidas.

---

## 16,1 - VISÃO GERAL DE CSS

Existem muitas variáveis na exibição visual de um documento HTML: fontes, cores, espaçamento, etc. O padrão CSS enumera essas variáveis e as chama de propriedades de estilo. CSS define propriedades que especificam fontes, cores, margens, bordas, imagens de fundo, alinhamento de texto,
tamanho do elemento e posição do elemento. Para definir a aparência visual de elementos HTML, especificamos o valor das propriedades CSS.

### 16.1.1 - A cascata

O C em CSS significa “cascata”. Esse termo indica que as regras de estilo aplicadas em determinado elemento de um documento podem ser provenientes de uma “cascata” de fontes diferentes:

- A folha de estilo padrão do navegador Web
- As folhas de estilo do documento
- O atributo style de elementos HTML individuais

Os estilos do atributo style anulam os estilos das folhas de estilo. E os estilos das folhas de estilo de um documento anulam os estilos padrão do navegador, evidentemente. A apresentação visual de determinado elemento pode ser uma combinação de propriedades de estilo de todas as três fontes. Um elemento pode até corresponder a mais de um seletor dentro de uma folha de estilo, no caso em que as propriedades de estilo associadas a todos esses seletores são aplicadas ao elemento.

### 16.1.2 - História de CSS

CSS é um padrão relativamente antigo. CSS1 foi adotado em dezembro de 1996 e define propriedades para especificar cores, fontes, margens, bordas e outros estilos básicos. Navegadores antigos, como Netscape 4 e Internet Explorer 4, contêm bastante suporte a CSS1. A segunda edição do padrão, CSS2, foi adotada em maio de 1998. Ela define vários recursos mais avançados, mais notadamente o suporte para posicionamento absoluto de elementos. CSS2.1 esclarece e corrige CSS2, eliminando recursos que os fornecedores de navegador nunca implementaram. Os navegadores atuais têm suporte basicamente completo a CSS2.1, embora as versões do IE anteriores ao IE8 tenham omissões notáveis. O trabalho em CSS continua. Para a versão 3, a especificação CSS foi dividida em vários módulos especializados que estão passando pelo processo de padronização separadamente.

### 16.1.3 - Propriedade de atalho

Certas propriedades de estilo em geral utilizadas em conjunto podem ser combinadas com propriedades de atalho especiais. Por exemplo, as propriedades font-family , font-size , font-style e fon-weight podem ser configuradas todas de uma vez usando-se uma única propriedade font com um
valor composto:

```css
font: bold italic 24pt helvetica;
```

Da mesma forma, as propriedades border , margin e padding são atalhos para propriedades que especificam bordas, margens e preenchimento (o espaço entre a borda e o conteúdo do elemento) de cada um dos lados individuais de um elemento.

### 16.1.4 - Propriedade não padronizadas

Quando os fornecedores de navegador implementam propriedades CSS não padronizadas, eles prefixam os nomes das propriedades com uma string específica. O Firefox usa moz- , o Chrome usa -we-bkit- e o IE usa -ms- . Os fornecedores de navegador fazem isso mesmo ao implementarem proprie- dades que estão destinadas a uma futura padronização. Ao trabalhar com propriedades CSS que têm nomes diferentes nos diferentes navegadores, talvez
você ache útil definir uma classe para elas:

```css
.radius10 {
  border-radius: 10px; /* para navegadores atuais */
  -moz-border-radius: 10px; /* para o Firefox 3.x */
  -webkit-border-radius: 10px; /* Para o Safari 3.2 e 4 */
}
```

### 16.1.5 - Exemplo de CSS

O Exemplo 16.1.5 é um arquivo HTML que define e utiliza uma folha de estilo. Ele demonstra seletores de nome de tag, classe e baseados em identificação, tendo também um exemplo de estilo em linha definido com o atributo style.

---

## 16.2 - PROPRIEDADES CSS IMPORTANTES

Para programadores JavaScript do lado do cliente, os recursos mais importantes de CSS são as propriedades que especificam a visibilidade, o tamanho e a posição precisa dos elementos individuais de um documento. Outras propriedades CSS permitem especificar a ordem de empilhamento, transparência, região de corte, margens, preenchimento, bordas e cores. Para escrever scripts CSS, é importante entender como essas propriedades de estilo funcionam.

|       Propriedade       | Descrição                                                                                                                                                                |
| :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        position         | Especifica o tipo de posicionamento aplicado a um elemento                                                                                                               |
|        top, left        | Especificam a posição das margens superior e esquerda de um elemento                                                                                                     |
|      bottom, right      | Especificam a posição das margens inferior e direita de um elemento                                                                                                      |
|      width, height      | Especificam o tamanho de um elemento                                                                                                                                     |
|         z-index         | Especifica a “ordem de empilhamento” de um elemento em relação a qualquer elemento sobreposto; define uma terceira dimensão de posicionamento de elemento                |
|         display         | Especifica como (e se) um elemento é exibido                                                                                                                             |
|       visibility        | Especifica se um elemento é visível                                                                                                                                      |
|          clip           | Define uma “região de corte” para um elemento; somente partes do elemento dentro dessa região são exibidas                                                               |
|        overflow         | Especifica o que fazer se um elemento for maior do que o espaço designado para ele                                                                                       |
| margin, border, padding | Especificam o espaçamento e as bordas de um elemento.                                                                                                                    |
|       background        | Especifica a cor ou imagem de fundo de um elemento.                                                                                                                      |
|         opacity         | Especifica o quanto um elemento é opaco (ou translúcido). Essa é uma propriedade da CSS3 suportada por alguns navegadores. Existe uma alternativa que funciona para o IE |

### 16.2.1 - Posicionando elementos com CSS

A propriedade CSS position especifica o tipo de posicionamento aplicado a um elemento. Aqui
estão os quatro valores possíveis para essa propriedade:

- `static`: Esse é o valor padrão e especifica que o elemento é posicionado de acordo com o fluxo normal do conteúdo do documento (para a maioria dos idiomas ocidentais, da esquerda para a direita e de cima para baixo). Os elementos posicionados estaticamente não podem ser posicionados com top , left e outras propriedades. Para usar técnicas de posicionamento de CSS com um elemento do documento, você deve primeiro configurar sua propriedade position com um dos outros três valores.
- `absolute` Este valor permite especificar a posição de um elemento em relação ao elemento que o contém. Os elementos posicionados de forma absoluta são posicionados independentemente de todos os outros elementos e não fazem parte do fluxo de elementos posicionados estaticamente. Um elemento posicionado de forma absoluta é posicionado em relação ao seu ascendente posicionado mais próximo ou ao próprio documento.
- `fixed`: Este valor permite especificar a posição de um elemento com relação à janela do navegador. Elementos com posicionamento fixed são sempre visíveis e não rolam com o restante do documento. Assim como os elementos posicionados de forma absoluta, os elementos de posição fixa são independentes de todos os outros e não fazem parte do fluxo do documento. O posicionamento fixo é suportado na maioria dos navegadores modernos, mas não está disponível no IE6.
- `relative`: Quando a propriedade position é configurada como relative , um elemento é disposto de acordo com o fluxo normal e sua posição é então ajustada em relação ao fluxo normal. O espaço alocado para o elemento no fluxo normal do documento permanece alocado para ele e os elementos que estão em um de seus lados não se aproximam para preencher esse espaço e também não são “afastados” da nova posição do elemento.

#### 16.2.1.1 - A tereceira dimensão: z-index

Esse é o valor padrão e especifica que o elemento é posicionado de acordo com o fluxo normal do conteúdo do documento (para a maioria dos idiomas ocidentais, da esquerda para a direita e de cima para baixo). Os elementos posicionados estaticamente não podem ser posicionados com top , left e outras propriedades. Para usar técnicas de posicionamento de CSS com um elemento do documento, você deve primeiro configurar sua propriedade position com um dos outros três valores.

#### 16.2.1.2 - Exemplo de posicionamento de CSS: texto sobreado

A especificação CSS3 inclui uma propriedade text-shadow para produzir efeitos de sombra projetada sob o texto. Ela é suportada por vários navegadores atuais, mas é possível usar propriedades de posicionamento de CSS para obter um efeito semelhante, desde que você esteja disposto a repetir e estilizar novamente o texto para produzir uma sombra.

### 16.2.2 -Bordas, margens e preenchimento

CSS permite especificar bordas, margens e preenchimento em torno de qualquer elemento. A borda de um elemento é um retângulo (ou retângulo arredondado em CSS3) desenhado em torno (ou parcialmente em torno) dele. As propriedades CSS permitem especificar o estilo, a cor e a espessura da borda. É possível especificar a largura, o estilo e a cor da borda usando propriedades CSS individuais e também é possível especificar a borda individualmente para cada um dos lados de um elemento. Em CSS3 é possível arredondar todos os cantos de uma borda com a propriedade border-radius e arredondar cantos individuais com nomes de propriedade mais explícitos. As propriedades margin e padding especificam ambas espaço em branco em torno de um elemento. A diferença importante é que margin especifica espaço fora da borda, entre a borda e os elementos adjacentes, e padding especifica espaço dentro da borda, entre a borda e o conteúdo do elemento.
Uma margem fornece espaço visual entre um elemento (possivelmente com bordas) e seus vizinhos no fluxo normal do documento. O preenchimento mantém o conteúdo do elemento visualmente separado de sua borda. Se um elemento não tem bordas, o preenchimento em geral não é necessário. Se um elemento é posicionado dinamicamente, ele não faz parte do fluxo normal do documento e suas margens são irrelevantes. A margem e o preenchimento de um elemento podem ser especificados com as propriedades margin e padding.
Também é possível especificar margens e preenchimentos individualmente para cada um dos lados
de um elemento:

### 16.2.3 - O modelo de caixa de CSS e detalhes do posicionamento

As propriedades de estilo margin, border e padding descritas provavelmente não vão constar em scripts com muita frequência. O motivo de serem mencionadas aqui é que margens, bordas e preenchimento fazem parte do modelo de caixa de CSS e é preciso entender esse modelo para realmente compreender as propriedades de posicionamento de CSS. Um elemento posicionado de forma absoluta aninhado em um elemento contêiner posicionado. Tanto o contêiner como os elementos contidos têm bordas e preenchimento, e a figura ilustra as propriedades CSS que especificam o preenchimento e a largura da borda de cada lado do elemento contêiner. Primeiramente, width e height especificam apenas o tamanho da área de conteúdo de um elemento – não incluem qualquer espaço adicional exigido para o preenchimento ou a borda (ou margens) do elemento. Segundo, as propriedades left e top especificam a distância do interior da borda do contêiner até o exterior da borda do elemento posicionado. Essas propriedades não são medidas a partir do canto superior esquerdo da área de conteúdo do contêiner, mas do canto superior esquerdo do seu preenchimento. Da mesma forma, as propriedades right e bottom são medidas a partir do canto inferior direito do preenchimento.

#### 16.2.3.1 - O modelo border-box e propriedade box-sizing

O comportamento do IE é um erro, mas seu modelo de caixa não padronizado em geral é muito útil. Reconhecendo isso, CSS3 introduz uma propriedade box-sizing. O valor padrão é content-box, que especifica o modelo de caixa padrão descrito anteriormente. Se, em vez disso, você especificar box-sizing:border-box , o navegador vai usar o modelo de caixa do IE para esse elemento e as propriedades width e height vão incluir borda e preenchimento. O modelo border-box é especialmente útil quando se quer especificar o tamanho global de um elemento como uma porcentagem, mas também especificar o tamanho da borda e do preenchimento em pixels.

### 16.2.4 - Eibição e visibilidade de elementos

Duas propriedades CSS afetam a visibilidade de um elemento do documento: visibility e display. A propriedade visibility é simples: quando é configurada com o valor hidden, o elemento não é mostrado; quando é configurada com o valor visible, o elemento é mostrado. A propriedade display é mais geral e é utilizada para especificar o tipo de exibição que um item recebe. Ela especifica se um elemento é um elemento de bloco, um elemento em linha, um item de lista, etc. No entanto, quando display é configurada como none, o elemento afetado não é exibido ou mesmo traçado. A diferença entre as propriedades de estilo visibility e display está relacionada ao efeito sobre elementos que utilizam posicionamento estático ou relativo. Para um elemento que aparece no fluxo normal do layout, configurar visibility como hidden torna o elemento invisível mas reserva espaço
para ele no layout do documento. Tal elemento pode ser repetidamente ocultado e exibido sem alterar o layout do documento. No entanto, se a propriedade display de um elemento é configurada como none, nenhum espaço é alocado para ele no layout do documento; os elementos nos seus dois
lados dele se aproximam como se ele não estivesse lá.

### 16.2.5 - Cor, transparência e tranlucidez

A cor do texto contido em um elemento do documento pode ser especificada com a propriedade CSS color . E a cor de fundo de qualquer elemento pode ser especificada com a propriedade background-color. Vimos anteriormente que a cor da borda de um elemento pode ser especificada com border-color ou com a propriedade de atalho border. CSS3 também define sintaxes para especificar cores no espaço de cores RGBA (valores de vermelho, verde e azul, mais um valor alfa especificando a transparência da cor). RGBA é suportado por todos os navegadores modernos, exceto o IE, e espera-se que seja suportado no IE9. CSS3 também define suporte para especificações de cor HSL (matiz-saturação-valor) e HSLA. Novamente, elas são suportadas pelo Firefox, Safari e Chrome, mas não pelo IE. CSS permite especificar a posição, o tamanho, a cor de fundo e a cor da borda exatos dos elementos; isso proporciona a você uma capacidade gráfica rudimentar para desenhar retângulos e (quando a altura e a largura são reduzidas) linhas horizontais e verticais. Além da propriedade background-color, você também pode especificar as imagens a serem usadas como fundo de um elemento. A propriedade background-image especifica a imagem a ser usada e as propriedades background-attachment, background-position e background-repeat especificam mais
detalhes sobre como essa imagem é desenhada. A propriedade de atalho background permite especificar essas propriedades juntas. É importante entender que, se não for especificada uma cor ou imagem de fundo para um elemento, o fundo desse elemento normalmente é transparente. A transparência que discutimos até aqui é do tipo tudo ou nada: ou um elemento tem um fundo transparente ou um fundo opaco. Também é possível especificar que um elemento (tanto seu fundo como seu conteúdo de primeiro plano) seja translúcido.

### 16.2.6 - Visibilidade parcial: overflow e clip

A propriedade visibility permite ocultar completamente um elemento do documento. As propriedades overflow e clip permitem exibir apenas parte de um elemento. A propriedade overflow define o que acontece quando o conteúdo de um elemento ultrapassa o tamanho especificado (com as propriedades de estilo width e height , por exemplo) para o elemento.

- `visible`: O conteúdo pode transbordar e ser desenhado fora da caixa do elemento, se necessário. Esse é o padrão.
- `hidden`: O conteúdo que transborda é cortado e ocultado para que conteúdo algum seja desenhado fora da região definida pelas propriedades de tamanho e posicionamento.
- `scroll`: A caixa do elemento tem barras de rolagem horizontal e vertical permanentes. Se o conteúdo ultrapassa o tamanho da caixa, as barras de rolagem permitem ao usuário rolar para ver o conteúdo extra. Esse valor é respeitado somente quando o documento é exibido na tela do
  computador; quando o documento é impresso no papel, por exemplo, obviamente as barras de rolagem não fazem sentido.
- `auto`: As barras de rolagem são exibidas somente quando o conteúdo ultrapassa o tamanho do elemento, em vez de serem exibidas permanentemente.

### 16.2.7 - Exemplo: janelas translúcidas sobrepostas

O exemplo não contém código JavaScript nem rotina de tratamento de evento, de modo que não há modo de interagir com as janelas (a não ser rolá-las), mas essa é uma demonstração útil dos poderosos efeitos que podem ser obtidos com CSS. A principal deficiência desse exemplo é que a folha de estilo especifica um tamanho fixo para todas as janelas. Como as partes da barra de título e do conteúdo da janela devem ser posicionadas precisamente dentro da janela global, mudar o tamanho de uma janela exige alterar o valor de várias propriedades de posicionamento em todas as três regras definidas pela folha de estilo.

---

## 16.3 - SCRIPT DE ESTILO EM LINHA

O modo mais simples de escrever script de CSS é alterar o atributo style de elementos individuais do documento. Assim como a maioria dos atributos HTML, style também é uma propriedade do objeto Element e pode ser manipulada em JavaScript. No entanto, a propriedade style é incomum: seu valor não é uma string, mas um objeto CSSStyleDeclaration. As propriedades JavaScript desse objeto estilo representam as propriedades CSS especificadas pelo atributo HTML style. Para escrever o texto de um elemento e grande, em negrito e azul, por exemplo, você pode usar o código a seguir para configurar as propriedades JavaScript correspondentes às propriedades de estilo font-size font-weight e color.

### 16.3.1 - Animação com CSS

Um dos usos mais comuns dos scripts de CSS é na produção de efeitos visuais animados. Isso pode ser obtido usando-se setTimeout() ou setInterval() (consulte a Seção 14.1) para chamar repetidamente uma função que altera o estilo em linha de um elemento. O Exemplo 16-3 demonstra isso com duas funções: shake() e fadeOut(). shake() move rapidamente ou “chacoalha” um elemento de um lado para outro.

---

## 16.4 - CONSULTANDO ESTILOS COMPUTADOS

A propriedade style de um elemento é o estilo em linha desse elemento. Ela anula todas as folhas de estilo e é o lugar perfeito para configurar propriedades CSS para mudar a aparência visual de um elemento. Contudo, geralmente não serve para consultar os estilos realmente aplicados a um elemento. Para isso, você quer o estilo computado. O estilo computado de um elemento é o conjunto de valores de propriedade que o navegador demora (ou computa) do estilo em linha, mais todas as regras de estilo aplicáveis de todas as folhas de estilo vinculadas: é o conjunto de propriedades realmente usadas para exibir o elemento. Assim como os estilos em linha, os estilos computados são representados por um objeto CSSStyleDeclaration. Ao contrário dos estilos em linha, contudo, os estilos computados são somente de leitura. Não é possível configurar esses estilos, mas o objeto CSSStyleDeclaration computado de um elemento permite determinar exatamente quais valores de propriedade de estilo o navegador utilizou ao renderizar esse elemento. Obtenha o estilo computado de um elemento com o método getComputedStyle() do objeto Window. O primeiro argumento desse método é o elemento cujo estilo computado é desejado. O segundo argumento é obrigatório e normalmente é null ou a string vazia, mas também pode ser uma string que nomeia um pseudoelemento CSS, como “:before”, “:after”, “:first-line” ou “:first-letter”. O valor de retorno de getComputedStyle() é um objeto CSSStyleDeclaration que representa todos os estilos aplicados ao elemento (ou pseudoelemento) especificado.

---

## 16.5 - ESCREVENDO SCRIPTS DE CLASSES CSS

Uma alternativa ao script de estilos CSS individuais por meio da propriedade em linha style é escrever o script do valor do atributo HTML class . Alterar o atributo class de um elemento altera o conjunto de seletores de folha de estilo aplicados ao elemento e pode fazer com que várias propriedades CSS mudem ao mesmo tempo. O identificador class é uma palavra reservada em JavaScript; portanto, o atributo HTML class está
disponível para código JavaScript usando-se o nome className. Os elementos HTML podem ser membros de mais de uma classe CSS e o atributo class contém uma lista de nomes de classe separados por espaços. A propriedade className tem um nome equivocado: classNames teria sido uma escolha muito melhor.

---

## 16.6 - ESCREVENDO SCRIPT DE FOLHAS DE ESTILO

Ao se escrever o script de folhas de estilo, existem dois tipos de objetos com que talvez você precise trabalhar. O primeiro tipo são os objetos Element que representam elementos style e link que contêm ou fazem referência às suas folhas de estilo. Esses são elementos normais do documento e,
se você fornecer a eles atributos id, poderá selecioná-los com document.getElementById(). O segundo tipo é um objeto CSSStyleSheet que representa a folha de estilo em si. A propriedade document. styleSheets é um objeto semelhante a um array somente de leitura, contendo objetos CSSStyleSheet
que representam as folhas de estilo associadas ao documento. Se você configurar o atributo title do elemento style ou link que define ou faz referência à folha de estilo, esse título vai estar disponível como a propriedade title do objeto CSSStyleSheet correspondente.

### 16.6.1 Habilitando e desabilitando folhas de estilo

A técnica de script de folha de estilo mais simples também é a mais portável e robusta. Elementos style, elementos link e objetos CSSStyleSheet definem todos uma propriedade disabled que pode ser consultada e configurada em JavaScript. Conforme seu nome implica, se a propriedade
disabled (desabilitada) é true, então a folha de estilo está desabilitada e é ignorada pelo navegador. A função disableStylesheet() a seguir demonstra isso. Se for passado um número, ela o trata como um índice para o array document.styleSheets. Se for passada uma string, ela a trata como um seletor CSS, a passa para document.querySelectorAll() e, então, configura a propriedade disabled de todos os elementos retornados.

### 16.6.2 Consultando, inserindo e excluindo regras de folha de estilo

Além de desabilitar e habilitar folhas de estilo, o objeto CSSStyleSheet também define uma API para consultar, inserir e excluir as regras de estilo de uma folha de estilo. O IE8 e anteriores implementam uma API ligeiramente diferente da API padrão implementada pelos outros navegadores.
Manipular diretamente as folhas de estilo não costuma ser algo útil. Em vez de editar ou adicionar novas regras em uma folha de estilo, em geral é melhor deixar suas folhas de estilo estáticas e escrever o script da propriedade className de seus elementos. Por outro lado, se você quer permitir ao usuário controle completo sobre os estilos utilizados em suas páginas, talvez precise manipular uma folha de estilo dinamicamente.

### 16.6.3 Criando novas folhas de estilo

Por fim, é possível criar folhas de estilo inteiramente novas e adicioná-las em seu documento. Na maioria dos navegadores isso é feito com técnicas DOM padrão: basta criar um novo elemento style, inseri-lo no cabeçalho do documento e então usar sua propriedade innerHTML para configurar o conteúdo da folha de estilo.

---
