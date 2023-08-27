# Capítulo 15 - ESCREVENDO SCRIPT DE DOCUMENTOS

JavaScript do lado do cliente existe para transformar documentos HTML estáticos em aplicativos Web interativos. Fazer scripts do conteúdo de páginas Web é o principal objetivo de JavaScript.

Este capítulo começa explicando a arquitetura básica do DOM. Em seguida, passa a explicar:

- Como consultar ou selecionar elementos individuais de um documento.
- Como percorrer um documento como uma árvore de nós e como localizar os ascendentes, irmãos e descendentes de qualquer elemento do documento.
- Como consultar e configurar os atributos dos elementos do documento.
- Como consultar, configurar e modificar o conteúdo de um documento.
- Como modificar a estrutura de um documento, criando, inserindo e excluindo nós.
- Como trabalhar com formulários HTML.

## 15.1 - VISÃO GERAL DO DOM

Document Object Model, ou DOM, é a API fundamental para representar e manipular o conteúdo de documentos HTML e XML. A API não é especialmente complicada, mas existem vários detalhes de arquitetura que precisam ser entendidos. Primeiramente, você deve entender que os elementos aninhados de um documento HTML ou XML são representados na DOM como uma árvore de objetos. A representação em árvore de um documento HTML contém nós representando marcações ou elementos HTML, como body e p , e nós representando strings de texto. Um documento HTML também pode conter nós representando comentários HTML.

O Dom é representado da seguinte forma:

![representação da dom](./img/hierarquia_dom.png)

Se você ainda não conhece as estruturas em árvore da programação de computador, é útil saber que elas emprestam a terminologia das árvores genealógicas. O nó imediatamente acima de outro é o pai desse nó. Os nós um nível imediatamente abaixo de outro nó são os filhos desse nó. Os nós no mesmo nível e com o mesmo pai são irmãos. O conjunto de nós a qualquer número de níveis abaixo de outro nó são os descendentes desse nó. E o pai, avô e todos os outros nós acima de um nó são os ascendentes desse nó.Node e seus subtipos formam a hierarquia de tipos. Observe que há uma distinção formal entre os tipos genéricos Document e Element, e os tipos HTMLDocument e HTMLElement. O tipo Document representa um documento HTML ou XML e a classe Element representa um elemento desse documento. As subclasses HTMLDocument e HTMLElement são específicas de documentos e elementos HTML.

![representação da hieraquia de classes de nós de documento](./img/herarquia_node_document.png)

---

## 15.2 - SELECIONANDO ELEMENTOS DO DOCUMENTO

Para manipular elementos do documento, eles precisam de algum modo obter ou selecionar os objetos Element que se referem a esses elementos de documento. O DOM define várias maneiras de selecionar elementos.

### 15.2.1 - Selecionando elementos pela identificação

Qualquer elemento HTML pode ter um atributo id . O valor desse atributo deve ser único dentro do documento – dois elementos no mesmo documento não podem ter a mesma identificação. Você pode selecionar um elemento com base nessa identificação exclusiva com o método getElementById() do objeto Document.

### 15.2.2 - Selecionando elementos pelo nome

O atributo HTML name se destinava originalmente a atribuir nomes a elementos de formulário e o valor desse atributo é usado quando dados de formulário são enviados para um servidor. Assim como o atributo id , name atribui um nome a um elemento. Ao contrário de id , contudo, o valor de um atributo name não precisa ser único: vários elementos podem ter o mesmo nome e isso é comum no caso de botões de seleção e caixas de seleção em formulários. Além disso, ao contrário de id , o atributo name é válido somente em alguns elementos HTML, incluindo formulários, elementos de formulário, iframe e elementos img. getElementsByName() é definido pela classe HTMLDocument (e não pela classe Document) e, assim, só está disponível para documentos HTML e não para documentos XML. Ele retorna um objeto NodeList que se comporta como um array somente para leitura de objetos Element. No IE, getElementsByName() também retorna elementos que têm um atributo id com o valor especificado.

### 15.2.3 - Selecionando elementos pelo tipo

Todos os elementos HTML ou XML de um tipo (ou nome de marcação) especificado podem ser selecionados usando-se o método getElementsByTagName() do objeto Document. Assim como getElementsByName()getElementsByTagName() retorna um objeto NodeList. (Consulte o quadro desta seção para obter mais informações sobre a classe NodeList.) Os elementos do objeto NodeList retornado estão na ordem do documento; portanto, o primeiro elemento p de um documento pode ser selecionado apartir da posição de um array.

### 15.2.4 - Selecionando elementos por classe CSS

O atributo class de uma HTML é uma lista separada de zero ou mais identificadores por espaços. Ele descreve uma maneira de definir conjuntos de elementos relacionados do documento: todos os elementos que têm o mesmo identificador em seu atributo class fazem parte do mesmo conjunto. class é uma palavra reservada de JavaScript, de modo que JavaScript do lado do cliente utiliza a propriedade className para conter o valor do atributo HTML class . O atributo class normalmente é usado em conjunto com uma folha de estilos CSS para aplicar os mesmos estilos de apresentação em todos os membros de um conjunto. Assim como getElementsByTagName() , getElementsByClassName() pode ser chamado em documentos HTML e em elementos HTML, retornando um NodeList dinâmico, contendo todos os descendentes coincidentes do documento ou elemento. getElementsByClassName() recebe um único argumento de string, mas a string pode especificar vários identificadores separados por espaços. Somente os elementos que incluem todos os identificadores especificados em seus atributos class são coincidentes.

### 15.2.5 - Selecionando elementos por seletores CSS

As folhas de estilos CSS têm uma sintaxe muito poderosa, conhecida como seletores, para descrever elementos ou conjuntos de elementos dentro de um documento. Os seletores CSS permitem que elementos sejam selecionados de todas as maneiras descritas anteriormente: pela identificação, pelo nome, pelo nome de tag e pelo nome da classe. Junto com a padronização de seletores CSS3, outro padrão da W3C, conhecido como
“API de Seletores” define métodos JavaScript para obter os elementos que coincidem com determinado seletor. O segredo dessa API é o método querySelectorAll() de Document. Ele recebe um argumento de string contendo um seletor CSS e retorna um objeto NodeList representando todos os elementos do documento que correspondem ao seletor. Ao contrário dos métodos de seleção de elemento descritos anteriormente, o objeto NodeList retornado por querySelectorAll() não é dinâmico: ele contém os elementos que correspondiam ao seletor no momento em que o método foi chamado, mas não é atualizado quando o documento muda.

### 15.2.6 - document.all[]

Antes do DOM ser padronizado, o IE4 introduziu a coleção document.all[] que representava todos os elementos (mas não nós Text) do documento. document.all[] foi substituída por métodos padrão, como getElementById() e getElementsByTagName() , e agora está obsoleta, não devendo ser usada.

---

## 15.3 - ESTRUTURA DE DOCUMENTO E COMO PERCORRÊ-LOS

Após ter selecionado um Element de um Document, às vezes você precisa encontrar partes estruturalmente relacionadas (pai, irmãos, filhos) do documento. Um Document pode ser conceituado como uma árvore de objetos Node. O tipo Node define propriedades para percorrer essa árvore. Outra API permite percorrer
documentos como árvores de objetos Element.

### 15.3.1 - Documentos como árvore de Nodes

O objeto Document, seus objetos Element e os objetos Text que representam texto no documento, são todos objetos Node. Node define as seguintes propriedades importantes:

- parentNode: O objeto Node que é o pai desse nó, ou null para nós como o objeto Document, que não têm pai.
- childNodes: Um objeto semelhante a um array somente para leitura (um NodeList) que é uma representação dinâmica dos nós filhos de um Node.
- firstChild, lastChild: O primeiro e o último nós filhos de um nó, ou null se o nó não tem filhos.
- nextSibling, previousSibling: O nó irmão próximo e anterior de um nó. Dois nós com o mesmo pai são irmãos. Sua ordem
  reflete a ordem na qual aparecem no documento. Essas propriedades conectam nós em uma lista duplamente encadeada.
- nodeType: O tipo do nó. Os nós Document têm o valor 9. Os nós Element têm o valor 1. Os nós Text têm o valor 3. Os nós Comments são 8 e os nós DocumentFragment são 11.
- nodeValue: O conteúdo textual de um nó Text ou Comment.
- nodeName: O nome da marca de um Element, convertido em letras maiúsculas.

### 15.3.2 - Documentos como árvores de Elements

Quando estamos interessados principalmente nos objetos Element de um documento, em vez do texto dentro deles (e o espaço em branco entre eles), é útil usar uma API que nos permita tratar um documento como uma árvore de objetos Element, ignorando os nós Text e Comment que também fazem parte do documento. A primeira parte dessa API é a propriedade children de objetos Element. Assim como childNodes, isso é um NodeList. Ao contrário de childNodes, contudo, a lista de children contém apenas objetos Element. A segunda parte de uma API para percorrer documentos baseada em elemento são propriedades Element análogas às propriedades filho e irmão do objeto Node.

---

## 15.4 - ATRIBUTOS

Os elementos HTML consistem em um nome de tag e um conjunto de pares nome/valor conhecidos como atributos. O elemento `a` que define um hiperlink, por exemplo, utiliza o valor de seu atributo href como destino do link. Os valores de atributo dos elementos HTML estão disponíveis como propriedades dos objetos HTMLElement que representam esses elementos. O DOM também define outras APIs para obter e configurar os valores de atributos XML e atributos HTML não padronizados.

### 15.4.1 - Atributos HTML como propriedades de Element

Os objetos HTMLElement que representam os elementos de um documento HTML definem propriedades de leitura/gravação que espelham os atributos HTML dos elementos. HTMLElement define propriedades para os atributos HTTP universais, como id, title lang e dir, e propriedades de rotina de tratamento de evento, como onclick. Os subtipos específicos dos elementos definem atributos específicos para esses elementos.

### 15.4.2 - Obtendo e configurando atribuitos que não são HTML

Conforme descrito anteriormente, HTMLElement e seus subtipos definem propriedades que correspondem aos atributos padrão de elementos HTML. O tipo Element também define métodos getAttribute() e setAttribute() que podem ser usados para consultar e configurar atributos HTML não padronizados e para consultar e configurar atributos nos elementos de um documento XML. Element também define dois métodos relacionados, hasAttribute() e removeAttribute(), o primeiro dos quais verifica a presença de um atributo nomeado e o outro remove um atributo inteiramente. Esses métodos são especialmente úteis com atributos booleanos: esses são atributos (como o atributo disabled de elementos de formulário HTML) cuja presença ou ausência em um elemento importa, mas cujo valor não é relevante.

### 15.4.3 - Atributos de conjuntos de dados

HTML5 oferece uma solução. Em um documento HTML5, qualquer atributo cujo nome apareça em letras minúsculas e comece com o prefixo “data-” é considerado válido. Esses “atributos de conjunto de dados” não vão afetar a apresentação dos elementos nos quais aparecem e definem uma maneira padronizada de anexar mais dados sem comprometer a validade do documento. HTML5 também define uma propriedade dataset em objetos Element. Essa propriedade se refere a um objeto, o qual tem propriedades que correspondem aos atributos data- com o prefixo removido. Assim, dataset.x conteria o valor do atributo data-x . Os atributos hifenizados são mapeados em nomes de propriedade com maiúsculas no meio: o atributo data-jquery-test se torna a propriedade dataset.jqueryTest.

### 15.4.4 - Atributos como nós Attr

O tipo Node define uma propriedade attributes . Essa propriedade é null para todos os nós que não são objetos Element. Para objetos Element, attributes é um objeto semelhante a um array somente para leitura que representa todos os atributos do elemento. O objeto attributes é dinâmico como os NodeLists. Ele pode ser indexado numericamente, ou seja, é possível enumerar todos os atributos de um elemento.

---

## 15. 5 - CONTEÚDO DE ELEMENTO

Analisando o exemplo 15.1, podemos nos perguntar qual o conteúdo do elemento p. Existem três maneiras de respondermos a essa questão:

- O conteúdo é a string HTML “This is a <i>simple</i> document”.
- O conteúdo é a string de texto puro “This is a simple document”.
- O conteúdo é um nó Text, um nó Element que tem um nó filho Text e outro nó Text.

Todas essas são respostas válidas e cada resposta é útil à sua própria maneira.

### 15.5.1 - Conteúdo de elemento como HTML

A leitura da propriedade innerHTML de um Element retorna o conteúdo desse elemento como uma string de marcação. Configurar essa propriedade em um elemento invoca o parser do navegador Web e substitui o conteúdo atual do elemento por uma representação analisada da nova string. A propriedade innerHTML foi introduzida no IE4. Embora seja suportada há tempos por todos os navegadores, somente com o advento de HTML5 foi padronizada. HTML5 diz que innerHTML deve funcionar em nós Document e em nós Element, mas isso ainda não é suportado universalmente. HTML5 também padroniza uma propriedade chamada outerHTML . Quando se consulta outerHTML, a string de marcação HTML ou XML retornada inclui as tags de abertura e fechamento do elemento no qual ela foi consultada. Quando se configura outerHTML em um elemento, o novo conteúdo substitui o elemento em si. outerHTML só é definida para nós Element, não para Documents. Outro recurso introduzido pelo IE e padronizado em HTML5 é o método insertAdjacentHTML(), o qual permite inserir uma string de marcação HTML arbitrária “adjacente” ao elemento especificado. A marcação é passada como segundo argumento para esse método e o significado preciso de “adjacente” depende do valor do primeiro argumento.

### 15.5.2 - Conteúdo de elemento como texto puro

Às vezes você quer consultar o conteúdo de um elemento como texto puro ou inserir texto puro em um documento (sem fazer o escape dos sinais de menor e maior e dos E comerciais utilizados na marcação HTML). O modo padrão de fazer isso é com a propriedade textContent de Node. As propriedades textContent e innerText são semelhantes o bastante para que em geral possam ser utilizadas indistintamente. Tome o cuidado, contudo, para diferenciar elementos vazios (a string “” em JavaScript é falsa) das propriedades indefinidas. A propriedade textContent é uma concatenação simples de todos os descendentes de nó Text do elemento especificado. innerText não tem um comportamento claramente especificado, mas difere de textContent de várias maneiras. innerText não retorna o conteúdo de elementos script, omite espaço em branco irrelevante e tenta preservar formatação de tabela. Além disso, innerText é tratada como uma propriedade somente para leitura em certos elementos de tabela, como table, tbody e tr.

### 15.5.3 - Cnteúdo de elemento como nós text

Outra maneira de trabalhar com o conteúdo de um elemento é como uma lista de nós filhos, cada um dos quais podendo ter seu próprio conjunto de filhos. Quando se pensa em conteúdo de elemento, normalmente são os nós Text que têm interesse. Em documentos XML, você também deve estar preparado para tratar de nós CDATASection – eles são um subtipo de Text e representam o conteúdo de seções CDATA.

---

## 15.6 - CRIANDO, INSERINDO E EXCLUINDO NÓS

Vimos como consultar e alterar conteúdo de documento usando strings HTML e de texto puro. E também vimos que podemos percorrer um objeto Document para examinar os nós Element e Text individuais de que é constituído. Também é possível alterar um documento no nível dos nós individuais. O tipo Document define métodos para criar objetos Element e Text e o tipo Node define métodos para inserir, excluir e substituir nós na árvore.

### 15.6.1 - Crindo nós

Como mostrado no código anterior, é possível criar novos nós Element com o método createElement() do objeto Document. Passe o nome da tag do elemento como argumento do método: esse nome não diferencia letras maiúsculas e minúsculas para documentos HTML e diferencia para documentos XML. Outra maneira de criar novos nós de documento é fazer cópias dos já existentes. Todo nó tem um método cloneNode() que retorna uma nova cópia do nó. Passe true para também copiar todos os descendentes recursivamente, ou false para fazer apenas uma cópia rasa.

### 15.6.2 - Inserindo nós

Uma vez que você tenha um novo nó, pode inseri-lo no documento com os métodos appendChild() ou insertBefore() de Node. appendChild() é chamado no nó Element em que você deseja inserir, sendo que ele insere o nó especificado de modo a se tornar o last Child desse nó. insertBefore() é como appendChild(), mas recebe dois argumentos. O primeiro é o nó a ser inserido. O segundo argumento é o nó antes do qual esse nó vai ser inserido. Esse método é chamado no nó que vai ser o pai do novo nó e o segundo argumento deve ser filho desse nó pai. Se você passa null como segundo argumento, insertBefore() se comporta como appendChild() e insere no final.

### 15.6.3 - Removendo e substituindo nós

O método removeChild() remove um nó da árvore de documentos. Contudo, tome cuidado: esse método não é chamado no nó a ser removido, mas (conforme implica a parte “child” – filho – de seu nome) no pai desse nó. Chame o método a partir do nó pai e passe como argumento o nó filho que deve ser removido. replaceChild() remove um nó filho e o substitui por um novo nó. Chame esse método no nó pai, passando o novo nó como primeiro argumento e o nó a ser substituído como segundo argumento.

### 15.6.4 - Usando DocumentFragments

DocumentFragment é um tipo especial de Node que serve como contêiner temporário para outros nós. Assim como um nó Document, um DocumentFragment é independente e não faz parte de nenhum outro documento. Seu parentNode é sempre null. Contudo, assim como um Element, um DocumentFragment pode ter qualquer número de filhos, os quais podem ser manipulados com appendChild() , insertBefore() , etc. O detalhe especial sobre DocumentFragment é que permite a um conjunto de nós ser tratado como um único nó: se você passa um DocumentFragment para appendChild() , insertBefore() ou
replaceChild() , são os filhos do fragmento que são inseridos no documento e não o próprio fragmento.

---

## 15.7 - EXEMPLO: GERANDO UM SUMÁRIO

O Exemplo 15-7 mostra como criar um sumário para um documento dinamicamente. Ele demonstra muitos dos conceitos de script de documento descritos nas seções anteriores: seleção de elementos, como percorrer documentos, configuração de atributos do elemento, configuração da propriedade innerHTML e criação de novos nós e sua inserção no documento.

---

## 15.8 - GEOMETRIA E ROLAGEM DE DOCUMENTOS E ELEMENTOS

Esta seção explica como você pode ir e voltar entre o modelo abstrato baseado em árvore de um documento e o modo de exibição geométrico baseado em coordenadas do documento, conforme é apresentado na janela de um navegador. As propriedades e métodos descritos nesta seção já são implementados nos navegadores há bastante tempo.

### 15.8.1 - Coordenadas de dcumento e coordenadas de janelas de visualização

A posição de um elemento é medida em pixels, com a coordenada X aumentando para a direita e a coordenada Y aumentando à medida que nos deslocamos para baixo. Contudo, existem dois pontos diferentes que podemos usar como origem do sistema de coordenadas: as coordenadas X e Y de um elemento podem ser relativas ao canto superior esquerdo do documento ou ao canto superior esquerdo da janela de visualização em que o documento é exibido. Se o documento é menor do que a janela de visualização ou se não foi rolado, seu canto superior esquerdo é o canto superior esquerdo da janela de visualização e os sistemas de coordenadas do documento e da janela de visualização são os mesmos. Em geral, contudo, para converter entre os dois sistemas de coordenadas devemos adicionar ou subtrair os deslocamentos de rolagem. As coordenadas do documento são mais fundamentais do que as coordenadas da janela de visualização e não mudam quando o usuário rola. Contudo, é muito comum utilizar coordenadas da janela de visualização em programação no lado do cliente. Porém, o modo mais simples de consultar a posição de um elemento (consulte a Seção 15.8.2) retorna a posição em coordenadas da janela de visualização. Da mesma forma, quando registramos funções de tratamento para eventos de mouse, as coordenadas do cursor do mouse se referem às coordenadas da janela de visualização.

### 15.8.2 - Consultando a geometria de um elemento

A maneira mais fácil de determinar o tamanho e a posição de um elemento é chamando seu método getBoundingClientRect(). Esse método foi introduzido no IE5 e agora é implementado por todos os navegadores atuais. Ele não espera argumento algum e retorna um objeto com propriedades left, right, top e bottom. As propriedades left e top fornecem as coordenadas X e Y do canto superior esquerdo do elemento e as propriedades right e bottom fornecem as coordenadas do canto inferior direito. Se quiser consultar os retângulos individuais de elementos em linha, chame o método getClientRects() para obter um objeto semelhante a um array somente para leitura, cujos elementos são objetos retângulo como aqueles retornados por getBoundingClientRect(). Vimos que métodos DOM como getElementsByTagName() retornam resultados “dinâmicos” que são atualizados quando o documento muda. Os objetos retângulo (e as listas de objeto retângulo) retornados por getBoundingClientRect() e getClientRects() não são dinâmicos. São instantâneos estáticos
do estado visual do documento de quando os métodos são chamados. Eles não são atualizados quando o usuário rola ou redimensiona a janela do navegador.

### 15.8.3 - Determinando o elemento em um ponto

O método getBoundingClientRect() nos permite determinar a posição atual de um elemento em uma janela de visualização. Às vezes, queremos ir na outra direção e determinar qual elemento existe em determinada posição na janela de visualização. Isso pode ser determinado com o método elementFromPoint() do objeto Document. Passe as coordenadas X e Y (usando coordenadas da janela de visualização e não coordenadas do documento) e esse método vai retornar o objeto Element que está na posição especificada. elementFromPoint() parece ser um método muito útil e o caso de uso óbvio é a passagem das coordenadas do cursor do mouse para determinar sobre qual elemento o mouse está.

### 15.8.4 - Rolagem

As propriedades scrollLeft e scrollTop utilizadas nesse exemplo podem ser configuradas para fazer o navegador rolar, mas há um modo mais fácil que é suportado desde os primórdios de JavaScript. O método scrollTo() do objeto Window (e seu sinônimo scroll() ) recebe as coordenadas X e Y de um ponto (em coordenadas do documento) e as configura como deslocamentos da barra de rolagem. O método scrollBy() do objeto Window é semelhante a scroll() e a scrollTo() , mas seus argumentos são relativos e adicionados aos deslocamentos da barra de rolagem atuais.

### 15.8.5 - Mais informações sobre tamanho, posição e overflow de elementos

Todos os elementos HTML têm propriedades offsetLeft e offsetTop que retornam as coordenadas X e Y do elemento. Para muitos elementos, esses valores são coordenadas do documento e especificam a posição do elemento diretamente. Mas para descendentes de elementos posicionados e para alguns outros elementos, como células de tabela, essas propriedades retornam coordenadas relativas a um elemento ascendente, em vez do documento. A propriedade offsetParent especifica a qual elemento as propriedades são relativas. Se offsetParent é nula, as propriedades são coordenadas do documento.

---

## 15.9 - FORMULÁRIOS HTML

Os formulários HTML são o mecanismo existente por trás da primeira geração de aplicativos Web, os quais nem mesmo exigiam JavaScript. A entrada do usuário é obtida em elementos de formulário; o envio do formulário remete essa entrada para o servidor; o servidor processa a entrada e gera uma nova página HTML (normalmente com novos elementos de formulário) para exibição pelo cliente. Os elementos de formulário HTML ainda são uma excelente maneira de obter entrada do usuário, mesmo quando os dados do formulário são inteiramente processados por JavaScript do lado do cliente e nunca são enviados para o servidor. Com programas do lado do servidor, um formulário não tem utilidade, a não ser que possua um botão Submit (Enviar). Na programação no lado do cliente, por outro lado, um botão Submit nunca é necessário (embora ainda possa ser útil). Os programas do lado
do servidor são baseados em envios de formulário – eles processam dados em trechos do tamanho do formulário – e isso limita sua interatividade. Os programas do lado do cliente são baseados em eventos – eles podem responder a eventos em elementos individuais do formulário – e isso os permite
ser muito mais responsivos. Um programa do lado do cliente poderia validar a entrada do usuário enquanto ele a digita, por exemplo. Ou então, poderia responder a um clique em uma caixa de seleção, habilitando um conjunto de opções que só têm significado quando essa caixa é marcada.

### 15.9.1 - Selecionando formulário e elementos de formulário

Os formulários e os elementos que eles contêm podem ser selecionados em um documento usando-se métodos padrão, como getElementById() e getElementsByTagName(). Nos navegadores que suportam querySelectorAll(), você poderia selecionar todos os botões de opção ou todos os elementos com o mesmo nome de um formulário com código. O atributo id é a maneira geralmente preferida para nomear elementos específicos do documento. Entretanto, o atributo name tem um propósito especial para envio de formulários HTML e é muito mais usado com formulários do que com outros elementos. É comum para grupos de caixas de seleção relacionadas e obrigatório para grupos de caixas de seleção mutuamente exclusivos compartilhar
um valor do atributo name.

### 15.9.2 - Propriedades de formulário e elemento

O array elements[] descrito anteriormente é a propriedade mais interessante de um objeto Form. As propriedades restantes do objeto Form têm menos importância. As propriedades action, encoding, method e target correspondem diretamente aos atributos action , encoding , method e target do elemento form. Todas essas propriedades e atributos são utilizados para controlar como os dados do formulário são enviados para o servidor Web e onde os resultados são exibidos. JavaScript do lado do cliente pode configurar o valor dessas propriedades, mas elas só são úteis quando o formulário é realmente enviado para um programa do lado do servidor. O objeto Form de JavaScript suporta dois métodos, submit() e reset(), que têm o mesmo objetivo. Chamar o método submit() de um objeto Form envia o formulário e chamar reset() redefine os elementos do formulário. Todos (ou a maioria) os elementos de formulário têm as seguintes propriedades em comum. Alguns elementos têm outras propriedades de propósito especial que são descritas posteriormente, quando vários tipos de elementos de formulário são considerados individualmente.

### 15.9.3 - Rotinas de tratamento de eventos de formulário e elemento

Cada elemento Form tem uma rotina de tratamento de evento onsubmit para detectar o envio de formulário e uma rotina de tratamento de evento onreset para detectar redefinições de formulário. A rotina de tratamento onsubmit é chamada imediatamente antes que o formulário seja enviado; ela pode cancelar o envio retornando false. Isso oferece uma oportunidade para um programa JavaScript verificar se existem erros na entrada do usuário, a fim de evitar o envio de dados incompletos ou inválidos pela rede, para um programa do lado do servidor. A rotina de tratamento de evento onreset é semelhante à rotina de tratamento onsubmit. Ela é chamada imediatamente antes que o formulário seja redefinido e, retornando false , pode impedir que os elementos do formulário sejam redefinidos. Os elementos de formulário normalmente disparam um evento click ou change quando o usuário
interage com eles, sendo que você pode tratar desses eventos definindo uma rotina de tratamento de evento onclick ou onchange. Outros elementos de formulário disparam um evento change quando o usuário muda o valor representado pelo elemento. Isso acontece quando o usuário insere texto em um campo de texto ou seleciona uma opção em uma lista suspensa. Note que esse evento não é disparado sempre que o usuário digita uma tecla em um campo de texto. Ele só é disparado quando o usuário altera o valor de um elemento e então move o foco de entrada para algum outro elemento do formulário. Isto é, a chamada dessa rotina de tratamento de evento indica uma alteração concluída.

### 15.9.4 - Botões de pressão

Os botões são um dos elementos de formulário mais comumente usados, pois fornecem uma maneira visual clara de permitir que o usuário dispare alguma ação com script. Um elemento botão não tem um comportamento padrão próprio e não tem utilidade a não ser que possua uma rotina de tratamento de evento onclick . Os botões definidos como elementos input exibem o texto puro do atributo value . Os botões definidos como elementos button exibem o conteúdo do elemento. Os elementos de envio e redefinição são exatamente como os elementos botão, mas têm ações padrão (enviar e redefinir um formulário) associadas. Se a rotina de tratamento de evento onclick retorna false , a ação padrão desses botões não é executada. A rotina de tratamento onclick de um elemento de envio pode ser usada para realizar validação de formulário, mas é mais comum fazer isso com a rotina de tratamento onsubmit do próprio objeto Form.

### 15.9.5 - Botões de alternância

Os elementos “botão de ação” e “caixa de seleção” são “botões de alternância”, ou botões que têm dois estados visualmente distintos: eles podem estar marcados ou desmarcados. O usuário pode mudar o estado de um botão de alternância clicando nele. Os elementos botão de ação são projetados
para serem usados em grupos de elementos relacionados, todos os quais com o mesmo valor para o atributo HTML name . Os elementos botão de ação criados dessa maneira são mutuamente exclusivos: quando um é marcado, o que estava marcado anteriormente se torna desmarcado. As caixas de seleção também são frequentemente utilizadas em grupos que compartilham um atributo name e, quando você seleciona esses elementos usando o nome como uma propriedade do formulário, deve lembrar que obtém um objeto semelhante a um array, em vez de um único elemento. Os elementos botão de ação e caixa de seleção definem ambos uma propriedade checked. Esse valor booleano de leitura/gravação especifica se o elemento está atualmente marcado. A propriedade defaultChecked é um booleano que tem o valor do atributo HTML checked ; ela especifica se o elemento está marcado quando a página é carregada pela primeira vez.

### 15.9.6 - Campos de texto

Os campos de entrada de texto provavelmente representam o elemento mais usado em formulários HTML e programas JavaScript. Eles permitem que o usuário insira uma string de texto curta, de uma linha. A propriedade value representa o texto digitado pelo usuário. Você pode configurar essa
propriedade de forma a especificar explicitamente o texto que deve ser exibido no campo. A rotina de tratamento de evento onchange de um campo de texto é disparada quando o usuário digita novo texto ou edita texto existente e então indica que terminou de editar retirando o foco de entrada do campo de texto. O elemento Textarea é como um elemento campo de entrada de texto, exceto que permite ao usuário inserir (e aos seus programas JavaScript exibir) texto de várias linhas. Os elementos Textarea são criados com uma tag textarea, usando uma sintaxe significativamente diferente da tag input que cria um campo de texto. Um elemento `<input type="password">` é um campo de entrada modificado que exibe asteriscos quando o usuário digita nele. Conforme o nome indica, isso é útil para permitir que um usuário digite senhas sem se preocupar com o fato de outras pessoas lerem por cima de seus ombros. Note que o elemento Password protege a entrada do usuário contra curiosos, mas quando o formulário é enviado, essa entrada não é criptografada (a não ser que seja enviada por meio de uma conexão HTTPS segura) e pode ficar visível ao ser transmitida pela rede. Por fim, um elemento `<input type="file">` permite ao usuário digitar o nome de um arquivo a ser carregado no servidor Web. Ele é um campo de texto combinado com um botão que abre uma caixa de diálogo de escolha de arquivo. Esse elemento de seleção de arquivo tem uma rotina de tratamento
de evento onchange , como um campo de entrada normal.

### 15.9.7 - Elementos Select e Options

O elemento Select representa um conjunto de opções (representadas por elementos Option) que o usuário pode selecionar. Os navegadores normalmente renderizam elementos Select em menus suspensos (ou drop-down), mas se você especificar um atributo size com um valor maior do que 1, eles vão exibir as opções em uma lista (possivelmente com rolagem). O elemento Select pode operar de duas maneiras muito distintas e o valor da propriedade type depende de como é configurado. Se o elemento select tem o atributo multiple , o usuário pode selecionar várias opções e a propriedade type do objeto Select é “select-multiple”. Caso contrário, se o atributo multiple não está presente, apenas um item pode ser selecionado e a propriedade type é “select-one”. De certa forma, um elemento select-multiple é como um conjunto de elementos caixa de seleção e um elemento select-one é como um conjunto de elementos botão de ação. Quando o usuário seleciona ou anula a seleção de uma opção, o elemento Select dispara sua rotina de tratamento de evento onchange . Para elementos Select select-one, a propriedade de leitura/gravação selectedIndex especifica qual das opções está selecionada. Para elementos select-multiple, a propriedade selectedIndex única não é suficiente para representar o conjunto completo de opções selecionadas.

---

## 15.10 - OUTROS RECURSOS DE DOCUMENT

Este capítulo começou com a afirmação de que é um dos mais importantes do livro. Por necessidade, ele também é um dos mais longos. Esta última seção conclui o capítulo, abordando diversos outros recursos do objeto Document.

### 15.10.1- Propriedades de document

Os documentos também definem algumas outras propriedades interessantes:
`cookie`: Uma propriedade especial que permite aos programas JavaScript ler e gravar cookies HTTP. Essa propriedade é abordada no Capítulo 20.
`domain`: Uma propriedade que permite a servidores Web mutuamente confiáveis dentro do mesmo domínio Internet abrandar colaborativamente as restrições de segurança da política da mesma origem em interações entre suas páginas Web.
`lastModified`: Uma string contendo a data de modificação do documento.
`location`: Esta propriedade se refere ao mesmo objeto Location que a propriedade location do objeto Window.
`referrer`: O URL do documento contendo o link, se houver, que levou o navegador ao documento atual. Essa propriedade tem o mesmo conteúdo do cabeçalho HTTP Referer, mas é grafada com duplo r.
`title`; O texto entre as marcações title e title desse documento.
`URL`: O URL do documento como uma String somente de leitura e não como um objeto Location. O valor dessa propriedade é igual ao valor inicial de location.href, mas não é dinâmico como o objeto Location. Se o usuário navegar para um novo identificador de fragmento dentro do documento, por exemplo, location.href vai mudar, mas document.URL, não.

### 15.10.2- O método document.write()

document.write() concatena seus argumentos de string e insere a string resultante no documento, no local do elemento script que o chamou. Quando o script acaba de executar, o navegador analisa a saída gerada e a exibe. É importante entender que é possível usar o método write() para gerar saída HTML no documento corrente somente enquanto esse documento está sendo analisado. Isto é, você pode chamar document.write() dentro de código de nível superior em elementos script somente porque esses scripts são executados como parte do processo de análise do documento. Se você colocar uma chamada de document.write() dentro de uma definição de função e então chamar essa função a partir de uma rotina de tratamento de evento, ela não vai funcionar conforme o esperado – na verdade, ela vai apagar o documento atual e os scripts que ele contém! (Você vai ver por que em breve.)

### 15.10.3- Consultando texto selecionado

Às vezes é útil determinar o texto selecionado pelo usuário dentro de um documento. O método window.getSelection() padrão retorna um objeto Selection que descreve a seleção atual como uma sequência de um ou mais objetos Range. Selection e Range definem uma API bastante complexa que não costuma ser usada e não está documentada neste livro. A característica mais importante e amplamente implementada (exceto no IE) do objeto Selection é que ele tem um método toString() que retorna o conteúdo de texto puro da seleção.

### 15.10.4- Conteúdo editável

Existem duas maneiras de habilitar essa funcionalidade de edição. Configurar o atributo HTML contenteditable de qualquer tag ou configurar a propriedade JavaScript contenteditable no objeto Element correspondente para tornar possível editar o conteúdo desse elemento. Quando o usuário
clicar no conteúdo dentro desse elemento, vai aparecer um cursor de inserção e os toques de tecla serão inseridos. Também é possível fazer com que um documento inteiro possa ser editado, configurando a propriedade designMode do objeto Document com a string “on”. (Configure-a como “off ” a fim de reverter para um documento somente de leitura.) A propriedade designMode não tem um atributo HTML correspondente.
