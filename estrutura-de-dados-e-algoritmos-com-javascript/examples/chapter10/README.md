# CAPÍTULO 10 - ÁRVORES

- A primeira estrutura de dados não sequencial que abordamos no livro foi a `tabela hash`;
- Neste capítulo, conheceremos outra estrutura de dados não sequencial chamada árvore (tree), muito útil para armazenar informações que devam ser encontradas facilmente;
- Neste capítulo, veremos:
  - a terminologia de árvores;
  - como criar uma árvore binária de busca;
  - como percorrer uma árvore;
  - adição e remoção de nós;
  - a árvore AVL;

---

## 10.1 - ESTRUTURA DE DADOS DE ÁRVORE

- Uma árvore é um modelo abstrato de uma estrutura hierárquica. O exemplo mais comum de uma árvore na vida real seria o de uma árvore genealógica ou o organograma de uma empresa;

---

## 10.2 - TERMINOLOGIA DE ÁRVORES

- Uma árvore é constituída de nós (ou nodos) com um relacionamento pai-filho;
- Todo nó tem um pai (exceto o primeiro nó no topo) e zero ou mais filhos;
- O nó no topo de uma árvore é chamado de raiz (11). É o nó que não tempai;
- Cada elemento da árvore é chamado de nó. Há nós internos e nós externos. Um nó interno é um nó que tem pelo menos um filho;
- Um nó que não tem filhos é chamado de nó externo ou folha;
- Um nó pode ter ancestrais e descendentes. Os ancestrais de um nó (exceto a raiz) são o pai, o avô, o bisavô, e assim sucessivamente;
- Os descendentes de um nó são os filhos (filho), os netos (neto), os bisnetos (bisneto), e assim por diante;
- Outra terminologia usada em árvores é o termo subárvore. Uma subárvore é composta de um nó e seus descendentes;
- A profundidade de um nó corresponde ao número de ancestrais;
- A altura de uma árvore corresponde à profundidade máxima dos nós. Uma árvore também pode ser dividida em níveis. A raiz está no nível 0, seus filhos estão no nível 1, e assim sucessivamente;

---

## 10.3 - ÁRVORE BINÁRIA E ARVORE BINÁRIA DE BUSCA

- Um nó em uma árvore binária tem no máximo dois filhos: um filho à esquerda e um filho à direita. Essa definição nos permite escrever algoritmos mais eficazes para inserir, pesquisar e remover nós na/da árvore;
- Uma `BST`(Binary Search Tree, ou Árvore Binária de Busca) é uma árvore binária, mas permite armazenar somente nós com valores menores do lado esquerdo e nós com valores maiores do lado direito;

---

## 10.4 - CRIANDO AS CLASSES NODE E BINARYSEARCHTREE

- Vamos começar criando a nossa classe Node que representará cada nó de nossa árvore binária de busca;
- Assim como nas listas ligadas, trabalharemos novamente com ponteiros (referências) para representar a conexão entre os nós (chamadas de arestas
  [edges] na terminologia de árvore);
- Quando trabalhamos com as listas duplamente ligadas, cada nó tinha dois ponteiros: um para indicar o próximo nó e outro para indicar o nó anterior;
- Ao trabalhar com árvores, usaremos a mesma abordagem, isto é, trabalharemos também com dois ponteiros;
- No entanto, um ponteiro referenciará o filho à esquerda,enquanto o outro apontará para o filho à direita;
- Seguiremos o mesmo padrão que usamos na classe LinkedList (do Capítulo 6, Listas ligadas);
- Isso significa que declararemos também uma variável para que possamos controlar o primeiro nó da estrutura de dados. No caso de uma árvore, em vez de declarar `head`, temos `root`;
- Na sequência, devemos implementar alguns métodos. A seguir, presentamos os métodos que criaremos em nossa classe `BinarySearchTree`:
  - `insert(key)`: esse método insere uma nova chave na árvore.
  - `search(key)`: esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir.
  - `inOrderTraverse()`: esse método visita todos os nós da árvore usando um percurso em-ordem (in-order).
  - `preOrderTraverse()`: esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order).
  - `postOrderTraverse()`: esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order).
  - `min()`: esse método devolve a chave/valor mínimo da árvore.
  - `max()`: esse método devolve a chave/valor máximo da árvore.
  - `remove(key)`: esse método remove a chave da árvore.
- Implementaremos cada um desses métodos nas próximas seções;

---

## 10.5 - INSERINDO UMA CHAVE NA BST

- Os métodos que criaremos neste capítulo são um pouco mais complexos do que aqueles implementados nos capítulos anteriores. Usaremos muita recursão em nossos métodos;
- Para inserir um novo nó (ou key) em uma árvore, há dois passos que devemos seguir:
  - O primeiro é verificar se a inserção constitui um caso especial. O caso especial para a BST é o cenário em que o nó que estamos tentando adicionar é o primeiro nó da árvore. Se for, tudo que temos a fazer é apontar root para esse novo nó criando uma instância da classe Node e atribuindo-a à propriedade root;
  - O segundo passo consiste na adição do nó em uma posição que não seja o `root`. Nesse caso, precisaremos de um método auxiliar para nos ajudar a fazer isso; A função `insertNode` nos ajudará a encontrar o lugar correto para inserir um novo nó.

---

## 10.6 - PERCORRENDO UMA ÁRVORE
