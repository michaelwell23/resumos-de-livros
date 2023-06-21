# CAPÍTULO 12: GRAFOS

- Neste capítulo, conheceremos outra estrutura de dados não linear chamada grafo (graph). Será a última estrutura de dados que discutiremos antes de mergulhar de cabeça nos algoritmos de ordenação e de pesquisa;
- Este capítulo incluirá uma parte considerável das maravilhosas aplicações dos grafos;

---

## 12.1 - TERMINOLOGIA DOS GRAFOS

- Um grafo é um modelo abstrato de uma estrutura de rede;
- Um grafo é um conjunto de nós (ou vértices) conectados por arestas (edges).
- Conhecer os grafos é importante porque qualquer relacionamento binário pode ser representado por um grafo;
- Qualquer rede social pode ser representada por grafos. Também podemos usar grafos para representar estradas, voos e comunicações;
- Um grafo G = (V, E) é composto de:
  - V: um conjunto de vértices;
  - E: um conjunto de arestas (edges) que conectam os vértices em V;
- Apresentaremos a terminologia associada aos grafos antes de começar a implementar qualquer algoritmo;
- Os vértices conectados por uma aresta são chamados de vértices adjacentes;
- O grau de um vértice corresponde ao número de vértices adjacentes;
- Um grafo é acíclico se não tiver ciclos. Um grafo será conectado (ou conexo) se houver um caminho entre todos os pares de vértices;

---

## 12.2 - GRAFOS DIRECIONADOS E NÃO DIRECIONADOS

- Os grafos podem ser `não direcionados` (as arestas não têm uma direção) ou `direcionados` (digrafo), em que as arestas têm uma direção;
- Um grafo será fortemente conectado se houver um caminho em ambas as direções entre todos os pares de vértices;
- Os grafos também podem ser sem peso (como vimos até agora) ou com peso (nos quais as arestas têm pesos – ou valores);
- Podemos resolver muitos problemas no mundo da ciência da computação usando grafos;

---

## 12.3 - REPRESENTANDO UM GRAFO

- Não há uma única forma correta de representar um grafo entre as possibilidades existentes. Isso dependerá do tipo de problema que você terá de resolver e também do tipo de grafo;

---

## 12.4 - A MATRIZ DE ADJACÊNCIAS

- A implementação mais comum usa uma matriz de adjacências. Cada nó é associado a um inteiro, que é o índice do array;
- Os grafos que não são fortemente conectados (grafos esparsos) serão representados por uma matriz com muitas entradas iguais a zero na matriz de adjacências. Isso significa que desperdiçaríamos espaço na memória do computador para representar arestas inexistentes;
- Outro motivo pelo qual essa talvez não seja uma boa representação é que o número de vértices no grafo pode mudar, e um array bidimensional não é flexível;

---

## 12.5 - LISTA DE ADJACÊNCIAS

- Podemos usar também uma estrutura de dados dinâmica, chamada lista de adjacências, para representar os grafos;
- Essa estrutura é composta de uma lista de vértices adjacentes para cada vértice do grafo;
- Para representar a lista de vértices adjacentes, podemos usar uma lista (array), uma lista ligada ou até mesmo um mapa hash ou um dicionário;
- As duas representações são muito úteis e têm propriedades distintas, embora as listas de adjacências provavelmente sejam melhores para a maioria dos problemas;

---

## 12.6 - MATRIZ DE INCIDÊNCIAS

- Também podemos representar um grafo usando uma matriz de incidências;
- Em uma matriz de incidências, cada linha da matriz representa um vértice e cada coluna representa uma aresta;
- Uma matriz de incidências geralmente é usada para economizar espaço e memória quando temos mais arestas do que vértices;

---

## 12.7 - CRIANDO A CLASSE GRAPH

- Como sempre, começamos com uma estrutura básica de classe chamada `Graph`;
- O construtor de Graph pode receber um parâmetro para informar se o grafo é direcionado ou não e, por padrão, ele não será direcionado.
- Usaremos um array para armazenar os nomes de todos os vértices do grafo, e um dicionário (implementado no Capítulo 8, Dicionários e hashes) para armazenar a lista de adjacências.
- O dicionário utilizará o nome do vértice como chave e a lista de vértices adjacentes como valor. Em seguida, implementaremos dois métodos: um para adicionar um novo vértice no grafo (porque, quando instanciamos o grafo, um grafo vazio, sem vértices, será criado) e outro para adicionar arestas entre os vértices;

---

## 12.8 - PERCORRENDO GRAFOS

- De modo semelhante à estrutura de dados de árvores, podemos igualmente visitar todos os nós de um grafo. Há dois algoritmos que podem ser usados para percorrer um grafo, chamados BFS (Breadth-First Search, ou Busca em Largura) e DFS (Depth-First Search, ou Busca em Profundidade).
- Podemos percorrer um grafo para encontrar um vértice específico ou um caminho entre dois vértices, verificar se o grafo é conectado ou se contém ciclos, e assim por diante;
- A ideia dos algoritmos para percorrer grafos é que devemos registrar cada vértice quando o visitamos inicialmente e controlar quais vértices ainda não foram totalmente explorados. Nos dois algoritmos para percorrer grafos, devemos especificar qual será o primeiro vértice a ser visitado;
- Para explorar totalmente um vértice, devemos ver todas as arestas desse vértice. Para cada aresta conectada a um vértice que não tenha sido visitado ainda, nós marcaremos esse vértice como descoberto e oadicionaremos à lista de vértices a ser visitada;

---

## 12.9 - BUSCA EM LARGURA (BFS)

- O algoritmo BFS (Breadth-First Search, ou Busca em Largura) começa percorrendo o grafo a partir do primeiro vértice especificado e visita todos os seus vizinhos (vértices adjacentes) antes, uma camada do grafo a cada vez;
- Em outras palavras, ele visita os vértices na largura antes, e depois em profundidade;

---

## 12.10 - ENCONTRANDO OS CAMINHOS MAIS CURTOS USANDO BFS

- Até agora, apenas demonstramos como o algoritmo BFS funciona. Podemos usá-lo para outras tarefas que não apenas exibir a ordem dos vértices visitados;
- Dado um grafo G e o vértice de origem v, encontre a distância (em número de arestas) de v até cada vértice u ∈ G com o caminho mais curto entre v e u;
- Dado um vértice v, o algoritmo BFS visita todos os vértices com distância 1, depois com distância 2, e assim sucessivamente. Portanto, podemos usar o algoritmo BFS para resolver esse problema;

---

## 12.11 - ESTUDOS ADICIONAIS SOBRE ALGORITMOS DE CAMINHOS MAIS CURTOS

- Se quiséssemos calcular o caminho mais curto em grafos com pesos (por exemplo, qual é o caminho mais curto entre a cidade A e a cidade B – um algoritmo usado em GPS e no Google Maps), o BFS não seria um algoritmoapropriado;
- Temos, por exemplo, o algoritmo de Dijkstra, que resolve o problema do caminho mais curto com uma única origem. O algoritmo de `Bellman-Ford` resolve o problema da origem única se os pesos das arestas forem negativos. O `algoritmo de busca A*` apresenta o caminho mais curto para um único par de vértices usando métodos heurísticos para tentar agilizar a pesquisa;
- O algoritmo de Floyd-Warshall apresenta o caminho mais curto para todos os pares de vértices;

---

## 12.12 - BUSCANDO EM PROFUNDIDADE (DFS)

- O algoritmo DFS começará percorrendo o grafo a partir do primeiro vértice especificado, seguirá um caminho até que o seu último vértice tenha sido visitado;
- Em seguida, um backtracking (retrocesso) será feito no caminho e o próximo caminho será seguido. Em outras palavras, o algoritmo visita os vértices em profundidade antes, e depois em largura;
- Os passos do DFS são recursivos, o que significa que o algoritmo DFS utiliza uma pilha para armazenar as chamadas (uma pilha criada pelas chamadas recursivas);

---

## 12.13 - EXPLORANDO O ALGORITMO DFS

- Até agora, simplesmente demonstramos como o algoritmo DFS funciona.
- Podemos usá-lo para outras tarefas que não sejam apenas exibir a ordem dos vértices visitados;
- Dado um grafo G, o algoritmo DFS percorre todos os vértices de G e constrói uma floresta (uma coleção de árvores com raiz), junto com um conjunto de vértices de origem (raízes), e exibe dois arrays com: o instante da descoberta e o instante do término da exploração. Podemos modificar a função `depthFirstSearch` para que ela devolva algumas informações para nós, por exemplo:
  - o instante da descoberta d[u] de u;- o instante final f[u] quando u é marcado com preto;
  - os antecessores (predecessors) p[u] -de u.

---

## 12.14 - ORDENAÇÃO TOPLÓGICA USANDO DFS

- Quando houver necessidade de especificar a ordem com que algumas tarefas ou passos devem ser executados, chamamos a isso de `ordenação topológica`;
- A ordenação topológica só pode ser aplicada em DAGs;

---

## 12.15 - ALGORITMOS DE CAMINHO MAIS CURTO

- Dado um mapa de ruas, suponha que você queira sair do ponto A e chegar ao ponto B usando o caminho mais curto possível;
- Podemos usar grafos para resolver esse problema para nós, e o algoritmo é chamado de algoritmo do caminho mais curto. Há dois algoritmos muito famosos, o algoritmo de Dijkstra e o algoritmo de Floyd-Warshall, que serão discutidos nas próximas seções;

---

## 12.16 - ALGORITMO DE DIJKSTRA

- O algoritmo de Dijkstra é um algoritmo guloso para calcular o caminho mais curto entre uma única origem e todos os demais vértices, o que significa que podemos usá-lo para calcular o caminho mais curto do vértice de um grafo para todos os outros;
- Para calcular a `minDistance`, procuraremos o valor mínimo no array dist, como vemos a seguir, e devolveremos o índice do array que contém esse valor;
- Também é possível modificar o algoritmo para que ele devolva o valor do caminho mais curto, além do próprio caminho;

---

## 12.17 - ALGORITMO DE FLOYD-WARSHALL

- O algoritmo de Floyd-Warshall é um algoritmo de `programação dinâmica` para calcular todos os caminhos mais curtos em um grafo. Com esse algoritmo, podemos encontrar o caminho mais curto a partir de todas as origens para todos os vértices;
- A seguir, apresentamos a descrição do funcionamento do algoritmo:
  - Em primeiro lugar, inicializamos o array de distâncias com o valor do peso entre cada vértice, pois a distância mínima possível entre i e j é opeso desses vértices . A distância do vértice para si mesmo é zero;
  - Caso não haja nenhuma aresta entre dois vértices, isso será representado com Infinity.
  - Usando os vértices 0...k como pontos intermediários, o caminho mais curto entre i e j é dado por k. A fórmula usada para calcular o caminho mais curto entre i e j pelo vértice k é dada na linha;
  - Se um novo valor para o caminho mais curto for encontrado, nós o usaremos e ele será armazenado ({7}). A fórmula na linha {6} é o coração do algoritmo de Floyd-Warshall.

---

## 12.18 - ÁRVORE DE EXTENSÃO MÍNIMA (MST)

- O problema da MST (Minimum Spanning Tree, ou Árvore de Extensão Mínima/Árvore Geradora Mínima) é muito comum no design de redes;
- Há dois algoritmos principais para encontrar as MSTs: o `algoritmo de Prim` e o `algoritmo de Kruskal`, que veremos nas próximas seções;

---

## 12.19 - ALGORITMO DE PRIM

- O algoritmo de Prim é um algoritmo guloso (greedy), que resolve um problema de MST para um grafo conectado não direcionado com peso. Ele encontra um subconjunto das arestas que formam uma árvore, incluindo todos os vértices, em que o peso total de todas as arestas da árvore é minimizado;

---

## 12.20 - ALGORITMO DE KRUSKAL

- De modo semelhante ao algoritmo de Prim, o algoritmo de Kruskal também é um algoritmo guloso, que encontra a MST para um grafo conectado, não direcionado com peso;
- Há algumas variações desse algoritmo que podem ser desenvolvidas. Isso dependerá da estrutura de dados usada para ordenar os pesos dos valores das arestas (como em uma fila de prioridades), e também de como o grafo é representado;

---

## RESUMO

Neste capítulo, vimos os conceitos básicos associados aos grafos. Conhecemos as diferentes maneiras com as quais podemos representar essa estrutura de dados e implementamos uma classe para representar um grafo usando uma lista de adjacências. Também aprendemos a percorrer um grafo usando as abordagens BFS e DFS. Este capítulo também incluiu duas aplicações de BFS e DFS para encontrar o caminho mais curto usando BFS e a ordenação topológica com DFS.

O capítulo também abordou alguns dos algoritmos famosos, como o de Dijkstra e o de Floyd-Warshall para calcular o caminho mais curto. Além disso, discutimos o algoritmo de Prim e o algoritmo de Kruskal para calcular a MST (Minimum Spanning Tree, ou Árvore de Extensão Mínima)
de um grafo.

No próximo capítulo, veremos os algoritmos mais comuns de ordenação usados em ciência da computação;
