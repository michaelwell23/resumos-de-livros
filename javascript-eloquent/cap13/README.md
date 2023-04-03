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

## MOVENDO-SE ATRAVÉS DE ÁRVORES
