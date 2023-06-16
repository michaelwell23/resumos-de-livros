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

- Percorrer uma árvore (ou caminhar por ela) é o processo de visitar todos os seus nós e executar uma operação em cada um deles;
- Há três abordagens distintas que podem ser usadas para visitar todos os nós de uma árvore: em-ordem (in-order), pré-ordem (pre-order) e pós-ordem (post-order);

---

## 10.7 - PERCURSO EM-ORDEM

- Um percurso em-ordem (in-order) visita todos os nós de uma BST em ordem crescente, o que significa que todos os nós serão visitados, do menor para o maior;
- Uma aplicação do percurso em-ordem seria ordenar uma árvore;
- O método `inOrderTraverse` recebe uma função callback como parâmetro, a qual pode ser usada para executar a ação desejada quando visitamos o nó;

---

## 10.8 - PERCURSO PRÉ-ORDEM

- Um percurso pré-ordem (pre-order) visita o nó antes de visitar seus descendentes;
- Uma aplicação do percurso pré-ordem seria exibir um documento estruturado;
- A diferença entre os percursos `em-ordem` e `pré-ordem` é que o percurso `pré-ordem` visita o nó raiz antes, depois o nó à esquerda e, por
  fim, o nó à direita, enquanto o percurso `em-ordem` executa as linhas na seguinte ordem: da esquerda para a direita;

---

## 10.9 - PERCURSO PÓS-ORDEM

- Um percurso pós-ordem (post-order) visita o nó depois de visitar os seus descendentes;
- Uma aplicação do percurso pós-ordem poderia ser calcular o espaço usado por um arquivo em um diretório e em seus subdiretórios;
- Nesse caso, o percurso pós-ordem visitará o nó à esquerda, depois o nó à direita e, por último, o nó raiz;
- Os algoritmos para as abordagens em-ordem, pré-ordem e pós-ordem são muito parecidos; a única diferença está na ordem em que as linhas {1}, {2}
  e {3} são executadas em cada método;

---

## 10.10 - PESQUISANDO VALORES EM UMA ÁRVORE

- Há três tipos de pesquisa geralmente executados em árvores:
  - pesquisa de valores mínimos;
  - pesquisa de valores máximos;
  - pesquisa de um valor específico;

---

## 10.11 - PESQUISANDO VALORES MÍNIMOS E MÁXIMOS

- Se observar o nó mais à esquerda no último nível da árvore, você verá o valor 3, que é a menor chave nessa árvore; se observar o nó mais distante à direita (também no último nível da árvore), encontrará o valor 25, que é a maior chave nessa árvore;
- Essa informação nos ajuda muito na implementação de métodos que encontrarão os nós mínimo e máximo da árvore;
- O método `minNode` nos permite encontrar a chave mínima, a partir de qualquer nó da árvore. Podemos usá-lo para encontrar a chave mínima de uma subárvore ou da própria árvore;
- A lógica usada no método minNode é muito semelhante ao código que usamos para iterar até o último nó de uma _lista ligada no Capítulo 6_; A diferença, nesse caso, é que estamos iterando até encontrar o nó mais à esquerda da árvore;
- De modo semelhante, também temos o método `max`;
- Para encontrar a chave máxima, percorremos a aresta direita da árvore até encontrar o último nó na extremidade direita dela. Assim, para o valor mínimo, sempre percorreremos o lado esquerdo da árvore; para o valor máximo, sempre navegaremos para o lado direito dela;

---

## 10.12 - PESQUISANDO UM VALOR ESPECÍFICO

- Nos capítulos anteriores, implementamos também os métodos find, search e get para encontrar um valor específico na estrutura de dados;
- Implementaremos o método search para a BST também;
- Nossa primeira tarefa deve ser declarar o método search. Seguindo o padrão dos demais métodos declarados para a BST, usaremos um método auxiliar para nos ajudar na lógica de recursão;
- O método searchNode pode ser usado para encontrar uma chave específica na árvore ou em qualquer uma de suas subárvores. Esse é o motivo pelo qual chamaremos esse método na linha {1} passando o nó root da árvore como parâmetro;
- Se o nó não for null, devemos continuar a pesquisa. Se a key que estamos procurando for menor que o nó atual, continuaremos a pesquisa usando a subárvore do filho à esquerda. Se o valor que estamos procurando for maior que o nó atual, continuaremos a pesquisa a partir do filho à direita do nó atual. Caso contrário, significa que a chave que estamos procurando é igual à chave do nó atual, e devolveremos true para informar que ela foi encontrada

---

## 10.13 - REMOVENDO UM NÓ

- O próximo e último método que implementaremos para a nossa BST é o método remove. Esse é o método mais complexo que implementaremos;
- Vamos começar pelo método que estará disponível para ser chamado a partir da instância de uma árvore;
- Esse método recebe a key que desejamos remover, e chama também removeNode, passando `root` e a `key` a ser removida como parâmetros;
- A complexidade do método removeNode se deve aos diferentes cenários com os quais devemos lidar, além do fato de o método ser recursivo;

---

## 10.14 - REMOVENDO UMA FOLHA

- O primeiro cenário é aquele em que o nó é uma folha, sem filhos à esquerda nem à direita;
- Nesse caso, tudo que temos a fazer é remover o nó atribuindo-lhe o valor `null`;
- sabemos que atribuir `null` ao nó não é suficiente, e devemos cuidar também das referências (ponteiros). Nesse caso, o nó não tem nenhum filho, mas tem um nó pai. Devemos atribuir `null` em seu nó pai, e isso pode ser feito devolvendo `null`;
- Como o nó já tem o valor null, a referência do pai ao nó receberá null também, e esse é o motivo pelo qual estamos devolvendo o valor de node
  no método removeNode. O nó pai sempre receberá o valor devolvido pelo método. Uma alternativa a essa abordagem seria passar o pai e o node como parâmetros do método;

---

## 10.15 - REMOVENDO UM NÓ COM UM FILHO À ESQUERDA OU À DIREITA

- Vamos agora analisar o segundo cenário, aquele em que um nó tem um filho à esquerda ou à direita. Nesse caso, devemos pular esse nó e fazer o
  ponteiro do pai apontar para o nó filho;
- Se o nó não tiver um filho à esquerda, significa que ele tem um filho à direita, portanto modificaremos a referência do nó para o seu filho à
  direita e devolveremos o nó atualizado;
- Faremos o mesmo se o nó não tiver o filho à direita; atualizaremos a referência do nó para o seu filho à esquerda e devolveremos o valor atualizado;

---

## 10.16 - REMOVENDO UM NÓ COM DOIS FILHOS

- Agora chegamos ao terceiro cenário, o mais complexo: aquele em que o nó que estamos tentando remover tem dois filhos: um à direita e outro à esquerda;
- Para remover um nó com dois filhos, há quatro passos que devem ser executados;
  - 1. Depois que o nó que queremos remover for encontrado, precisamos encontrar o nó mínimo da subárvore da aresta à sua direita;
  - 2. Em seguida, atualizamos o valor do nó com a chave do nó mínimo de sua subárvore à direita. Com essa ação, estamos substituindo chave do nó, o que significa que ele foi removido.
  - 3. No entanto, agora temos dois nós na árvore com a mesma chave, e isso não pode ocorrer. O que devemos fazer agora é remover o nó mínimo da subárvore à direita, pois ele foi transferido para o local em que estava o nó removido;
  - 4. Por fim, devolvemos a referência ao nó atualizado para o seu pai;

---

## 10.17 - ÁRVORES AUTOBALANCEADAS

- A BST tem um problema: conforme a quantidade de nós que você adicionar, uma das arestas da árvore poderá ser muito profunda, o que significa que um galho da árvore poderá ter um nível alto, enquanto outro galho poderá ter um nível baixo;
- Isso pode causar problemas de desempenho na adição, na remoção e na pesquisa de um nó em uma aresta em particular da árvore. Por esse motivo, há uma árvore chamada `AVL` (Árvore de Adelson-Velskii e Landi);
- A árvore `AVL` é uma BST autobalanceada, o que significa que a altura das subárvores à esquerda e à direita de qualquer nó difere no máximo em 1;

---

## 10.18 - ÁRVORE D ADLSON-VELSKII E LANDI (ÁRVORE AVL)

- A árvore AVL é uma árvore autobalanceada, isto é, uma árvore que tenta se autobalancear sempre que um nó é adicionado ou removido. As alturas das
  subárvores à esquerda ou à direita de qualquer nó (e em qualquer nível) diferem no máximo em 1;
- Isso quer dizer que a árvore tentará ser completa sempre que for possível quando adicionar ou remover um nó;
- Como a árvore AVL é uma BST, podemos estender a classe BST que criamos e somente sobrescrever os métodos necessários para manter o balanceamento da árvore AVL;
- Inserir e remover nós de uma árvore AVL funciona do mesmo modo que em uma BST. No entanto, a diferença na árvore AVL é que precisaremos verificar o seu fator de balanceamento (ou fator de balanço) e, se for necessário, aplicaremos a lógica para autobalancear a árvore;

---

## 10.19 - ALTURA DE UM NÓ E O FATOR DE BALANCEAMENTO

- Conforme vimos no início deste capítulo, a altura de um nó é definida como o número máximo de arestas, do nó para qualquer uma de suas folhas;
- Em uma árvore AVL, sempre que um nó for inserido ou removido da árvore, devemos calcular a diferença entre a altura da subárvore do lado direito (hr) e da subárvore do lado esquerdo (hl). O resultado de hr – hl deve ser 0, 1 ou -1;
- Se o resultado for diferente desses valores, é sinal de que a árvore precisa ser balanceada. Esse conceito se chama fator de balanceamento;

---

## 10.20 - OPERAÇÕES DE BALANCEAMENTO - ROTAÇÃO NA ÁRVORE AVL

- Depois de inserir ou remover nós de uma árvore AVL, calcularemos a altura dos nós e verificaremos se a árvore precisa ser balanceada. Há dois
  processos de balanceamento que podem ser usados: rotação simples ou rotação dupla.
- Entre a rotação simples e a rotação dupla, há quatro cenários:
  - `LL` (Left-Left, ou Esquerda-Esquerda): é uma rotação simples à direita;
  - `RR` (Right-Right, ou Direita-Direita): é uma rotação simples à esquerda;
  - `LR` (Left-Right, ou Esquerda-Direita): é uma rotação dupla à direita (rotação à esquerda e depois à direita);
  - `RL` (Right-Left, ou Direita-Esquerda): é uma rotação dupla à esquerda (rotação à direita e depois à esquerda);

---

## 10.21 - ROTAÇÃO ESQUERDA-ESQUERDA: ROTAÇÃO SIMPLES A DIREITA
