# O MODELO DE OBJETO DE DOCUMENTO (DOM)

O navegoder contrói um modelo da estrutura do documento e depois usa esse modelo para desenhar a página na tela. UM dos "brinquedos" que um programa em JavaScript possui disponível em sua caixa de ferramentas é essa representação do documento. Você pode lê-la e também alterá-la. Essa representação age como uma estrutura viva de dados: quando modificada, a página na tela é atualizada para refletir as mudanças.

---

## 13.1 - ESTRUTURA DO DOCUMENTO

Um documento HTML pode ser imaginado como um conjunto de caixas aninhadas.Tags que encapsulam outras tags, as quais, por sua vez, contêm outras tags ou texto.

```html
<html>
  <head>
    <title>Minha home page</title>
  </head>
  <body>
    <h1>Minha home page</h1>
    <p>Olá, eu sou Marijn e essa é minha home page.</p>
    <p>
      Eu também escrevi um livro! leia-o
      <a href="http://eloquentjavascript.net">aqui</a>.
    </p>
  </body>
</html>
```

Essa página tem a seguinte estrutura

![estrutura html](../.github/img/img13/img13_1.png);

Para cada caixa há um objeto, com o qual podemos interagir para descobrir coisas como: qual tag HTML ele representa e quais caixas e textos ele contém. Essa representação é chamada de `Modelo de Objeto de Documentos`, também apelidada de `DOM`. A variável global _document_ nos dá acesso à esses objetos. Sua propriedade _documentElement_ se refere ao objeto que representa a tag. Essa propriedade também nos fornece as propriedades _head_ e _body_, alocando objetos para esses elementos.

---

## 13.2 - ÁRVORES

Nós chamamos uma estrutura de dados de uma árvore quando ela possui uma estrutura de galhos, sem ciclos e possui uma única, bem definida, raiz. No caso do DOM, documente.documentElement representa a raiz. Uma árvore típica possui diferentes tipos de nós. Nós de aplicação sempre têm filhos, diferentemente das variáveis e valores, que eram folhas, ou sej, nós sem filhos. O mesmo vale para o DOM. Nós de elementos comuns, os quais representam tags HTML. determinam a estrutura do documente. Esses pode possui nós filhos. Cada objeto que é um nó do DOM tem a proriedade nodeType, a qual contém um código numérico que identifica o tipo de nó. Elementos comuns têm valor 1, o qual também é definido como a propriedade constante \_document.ELEMENT_NODE. Nós de texto, representam um intervalo de texto no documento, possuem o valo 3. Comentário têm valor 8. Sendo assim, outra maneira de visualizar a árvore do nosso documento é:

![arvore de elemento html](../.github/img/img13/img13_2.png)

Na imagem acima, as folhas são os nós de texto e as setas indicam a relação de pai e filho entre os nós.

---

## 13.3 - O PADRÃO

Padrões são, geralmente, úteis, mas nesse caso, a vantagem (consistência entre diferentes linguagens), não é tão convincente. Possuir uma interface que é corretamente integrada com a linguagem que você está usando vai fazer você economizar mais tempo do que uma interface familiar entre diferentes linguagens. Existem outros problemas que são simplesmente ocasionados por um design falho. Por exemplo: não há nenhuma maneira de criar um novo nó e imediatamente adicionar nós filhos ou atributos à ele. Ao invés disso, você precisa primeiro criá-lo, depois adicionar os filhos, um por um, e só então definir os atributos um à um usando side effects. Códigos que interagem muito com o DOM tendem à ficar muito longos, repetitivos e feios. Porém nenhuma dessas falhas é fatal, pois JavaScript nos permite criar nossas próprias abstrações. É fácil escrever algumas funções auxiliares que permitem que você expresse as operações que quer fazer de maneira
mais curta. Na verdade, muitas lib raries dedicadas à programação em browsers já vêm com essas ferramentas.

---

## 13.4 - MOVENDO-SE ATRAVÉS DE ÁRVORES

Os nós DOM contêm uma variedade de ligações para outro nós próximos.

![nós DOM](../.github/img/img13/img13_4.png)

Todo nó possui uma proprieade _parentNode_ que aponta para o nó que o contém. Dassa maneira, todo nó de um elemento possui a propriedade _childNode_ que aponta para um objeto parecido com um array, o qual contém seus nós filhos. As propriedades _firstChild_ e _lastChild_ apontam para o primeiro e último elemento filho, respectivamente, ou entõ possuem o valor null para nós sem filhos. Similarmente, _previousSibling_ e _nextSibling_ apontam para os nós adjacentes, que são nós com o mesmo pai que aparecem imediatamente antes ou depois do nó em questão. No caso de usarmos a propriedade _proviousSibling_ para um primeiro nó filho, ela irá possuir um valor nulo, o mesmo acontece se usarmos a propriedade nextSibling para o último nó filho. Quando lidamos com uma estrutura de dados aninhada como essa, funções recursivas são geralmente muito úteis. A função abaixo escaneia um documento procurando por nós de texto contendo uma determinada string e retorna _true_ quando encontrar um.

```js
function talkAbout(node, string) {
  if (node.nodeType == document.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) return true;
    }
    return false;
  } else if (node.nodeTYpe == document.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talkAbout(document.body, 'book')); // → true
```

A propriedade _nodeValue_ de um nó de texto se refere à string de texto que ele representa.

---

## 13.5 - ENCONTRANDO ELEMENTOS

Se quisermos obter atributo _hrf_ do link, seria muito melhor se pudéssemos dizer "pegue o primeiro link nesse documento". E nós podemos:

```js
var link = document.body.getElementsByTagName('a')[0];
console.log(link.href);
```

Todos os nós possuem um método, o qual coleta todos os elementos com o nome passado _getElementsByTagName_
que são descendentes (filhos diretos ou indiretos) do nó dado e retorna-os no formato de um objeto parecido com
um array. Para encontrar um nó único específico, você pode dar à ele um atributo _document.getElementById_
id e usar o método.

```html
<p>Minha avestruz Gertrude:</p>
<p><img id="getrude" src="img/orstrich.png" /></p>

<script>
  var ostrich = document.getElementById('gertrudes');
  console.log(ostrich.src);
</script>
```

Um terceiro método, similar a esse, é o _getElementsByClassName_, o qual, assim como _getElementsByTagName_, faz uma
busca entre os conteúdos de um nó elemento e retorna todos os elementos que possuem a string passada no seu atributo class.

---

## 13.6 - ALTERANDO O DOCUMENTO

Quase tudo na estrutura de dados DOM pode ser alterado. O método _removeChild_ remove um dado nó filho do documento. Para adicionar um filho, nós podemos usar o método _appendChild_, o qual coloca nó filho no fim da lista de filhos, ou até o método _insertBefore_, que insere um nó passado como primeiro argumento antes do nó passado como segundo argumento.

```html
<p>Um</p>
<p>Dois</p>
<p>Três</p>

<script>
  var paragraphs = document.body.getElementsByTagName('p');
  document.body.insertBefore(paragraphs[2], paragraphs[0]);
</script>
```

Todas as operações que inserem um nó em algum lugar irão, como efeito colateral, fazer com que ele seja removido de sua posição atual (caso ele tenha uma). O método _replaceChild_ é usado para substituir um nó filho por outro. Ele aceita como argumentos dois nós: um novo nó e o nó à ser substituído. O nó substituído deverá ser um filho do elemento com o qual o método é chamado. Note que ambos _replaceChild_ e _insertBefore_ esperam o seu novo nó como primeiro argumento.

---
