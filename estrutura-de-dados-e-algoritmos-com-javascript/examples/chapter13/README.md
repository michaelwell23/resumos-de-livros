# CAPÍTULO 13 - ALGORITMOS DE ORDENAÇÃO E DE BUSCA

- Os algoritmos para ordenação e busca são amplamente utilizados nos problemas cotidianos que devemos resolver;
- Neste capítulo, conheceremos os algoritmos de ordenação e busca mais comumente usados como bubble sort (ordenação por flutuação), selection sort (ordenação por seleção), insertion sort (ordenação por inserção), merge sort (ordenação por intercalação ou mistura), quick sort (ordenação rápida), counting sort (ordenação por contagem), bucket sort (ordenação por balde ou recipiente) e radix sort (ordenação por raízes), assim como os algoritmos de busca sequencial, por interpolação e binária;

---

## 13.1 - ALGORITMOS DE ORDENAÇÃO

- Começaremos pelo algoritmo mais lento e então discutiremos alguns algoritmos melhores;
- Veremos que, inicialmente, devemos aprender a ordenar e então pesquisaremos uma dada informação qualquer;

---

## 13.2 - BUBBLE SORT

- O algoritmo de bubble sort (ordenação por flutuação) compara cada dois valores adjacentes e faz a sua troca (swap) se o primeiro valor for maior que o segundo. Ele tem esse nome porque os valores tendem a se mover para cima na ordem correta, como se fossem bolhas (bubbles) subindo para a superfície;

---

## 13.3 - BUBBLE SORT MELHORADO

- Se subtrairmos do laço interno o número de passagens pelo laço externo, evitaremos todas as comparações desnecessárias feitas pelo laço interno;
- Não comparamos os números que já estão nos lugares corretos. Apesar de termos feito essa pequena mudança para melhorar um pouco o algoritmo de bubble sort, esse não é um algoritmo recomendado. Sua complexidade é de O(n 2 );

---

## 13.4 - SELECTION SORT

- O algoritmo de selection sort (ordenação por seleção) é um algoritmo de ordenação por comparação in-place. A ideia geral por trás do selection sort é encontrar o valor mínimo na estrutura de dados, colocá-lo na primeira posição e então encontrar o segundo valor mínimo, colocá-lo na segunda posição, e assim sucessivamente;

---

## 13.5 - INSERTION SORT

- O algoritmo de insertion sort (ordenação por inserção) constrói o array ordenado final, um valor de cada vez. Ele pressupõe que o primeiro elemento já está ordenado. Então, uma comparação com o segundo valor é realizada:
  - Os dois primeiros valores serão ordenados; em seguida, a comparação será feita com o terceiro valor (isto é, ele deverá ser inserido na primeira, na segunda ou na terceira posição?), e assim sucessivamente;

---

## 13.6 - MERGE SORT

- O algoritmo de merge sort (ordenação por intercalação ou mistura) é o primeiro algoritmo de ordenação que pode ser usado em um cenário do mundo real;
- O merge sort é um algoritmo do tipo “dividir e conquistar”. A ideia por trás dele é dividir o array original em arrays menores até que cada array menor tenha apenas uma posição e, em seguida, combinar esses arrays menores em arrays maiores até que tenhamos um único array grande e ordenado no final;
- Por causa da abordagem de dividir e conquistar, o algoritmo de merge sort também é recursivo. Dividiremos o algoritmo em duas funções: a primeira será responsável por dividir o array em arrays menores e chamar a função auxiliar que fará a ordenação;

---

## 13.7 - QUICK SORT

- O quick sort (ordenação rápida) provavelmente é o algoritmo de ordenação mais usado. Tem complexidade igual a O(n log n), e geralmente apresenta um desempenho melhor que outros algoritmos de ordenação de mesma complexidade;
- De modo semelhante ao merge sort, esse algoritmo também utiliza a abordagem de dividir e conquistar, dividindo o array original em arrays menores (mas sem separá-los como faz o merge sort) para fazer a ordenação;
- O algoritmo de quick sort é um pouco mais complexo que os outros algoritmos vistos até agora. Vamos analisá-lo, passo a passo:
  - 1. Em primeiro lugar, devemos selecionar um valor do array chamado pivô, que será o valor no meio do array;
  - 2. Criaremos dois ponteiros (referências) – o ponteiro da esquerda apontará para o primeiro valor do array, enquanto o ponteiro da direita apontará para o último valor do array. Moveremos o ponteiro da esquerda até encontrarmos um valor que seja maior que o pivô, e moveremos também o ponteiro da direita até encontrarmos um valor que seja menor que o pivô, e faremos a troca desses valores. Repetiremos esse processo até que o ponteiro da esquerda ultrapasse o ponteiro da direita. Esse processo contribui para que tenhamos valores menores que a referência do pivô antes dele e valores maiores que o pivô depois de sua referência. Essa operação é chamada de partição;
  - 3. Em seguida, o algoritmo repete os dois passos anteriores para arrays menores (subarrays com valores menores e, então, subarrays com valores maiores), até que os arrays estejam totalmente ordenados;

---

## 13.8 - PROCESSO DE PARTIÇÃO

- Nossa primeira tarefa deve ser escolher o elemento pivô. Há algumas maneiras de fazer isso. O modo mais simples é selecionar o primeiro valor do array (o item mais à esquerda). No entanto, estudos mostram que essa não é uma boa opção caso o array esteja quase ordenado, resultando no pior comportamento possível do algoritmo;
- Outra abordagem é selecionar um valor aleatório ou o valor que estiver no meio do array;

---

## 13.10 - QUICK SORT EM AÇÃO

- Vamos ver o algoritmo de quick sort em ação, passo a passo (Figura 13.6).
- Dado o array [3, 5, 1, 6, 4, 7, 2], o diagrama anterior representa a primeira execução da operação de partição;

---

## 13.11 - COUNTING SORT

- O counting sort (ordenação por contagem) é o primeiro algoritmo de ordenação com distribuição que conheceremos neste livro;
- Algoritmos de ordenação com distribuição usam estruturas de dados auxiliares (conhecidas como buckets), que são organizadas e então combinadas, resultando no array ordenado. O counting sort usa um array temporário que armazenará quantas vezes cada elemento aparece no array original;
- Depois que todos os elementos forem contabilizados, o array temporário será ordenado e uma iteração poderá ser feita nele para construir o array ordenado resultante;

---

## 13.12 - BUCKET SORT

- O algoritmo de bucket sort (ordenação por balde ou recipiente, também conhecido como bin sort) também é um algoritmo de ordenação com distribuição, que separa os elementos em diferentes buckets (arrays menores) e então usa um algoritmo de ordenação mais simples, por exemplo o insertion sort (um bom algoritmo para arrays pequenos) para ordenar cada bucket;
- Então todos os buckets são combinados no array ordenado resultante;
- No algoritmo de bucket sort, precisamos especificar quantos buckets serão usados para ordenar os elementos;

---

## 13.13 - RADIX SORT

- O radix sort (ordenação por raízes) é também um algoritmo de ordenação por distribuição, que distribui os inteiros em buckets com base no dígito ou valor significativo de um número (a raiz – daí o nome ordenação por raízes);
- A raiz é baseada no sistema numérico dos valores dos arrays;
- Por exemplo, para os números do sistema decimal, a raiz (ou base) 10 é usada; assim, o algoritmo usará 10 buckets para distribuir os elementos, e ordenará inicialmente os números com base nos 1s, depois nos 10s, depois nos 100s, e assim por diante;

---

## 13.14 - ALGORITMOS DE BUSCA

- Vamos falar agora sobre os algoritmos de busca. Se observarmos os algoritmos que implementamos nos capítulos anteriores, por exemplo, o método search da classe BinarySearchTree (Capítulo 10, Árvores) ou o método indexOf da classe LinkedList (Capítulo 6, Listas ligadas), veremos que todos são algoritmos de busca e, é claro, cada um deles foi implementado de acordo com o comportamento de sua estrutura de dados;

---

## 13.15 - BUSCA SEQUENCIAL

- A busca sequencial (sequential search) ou busca linear (linear search) é o algoritmo de busca mais básico que existe. Ela consiste em comparar cada elemento da estrutura de dados com aquele que estamos procurando;
- É também o algoritmo mais ineficiente que há;

---

## 13.16 - BUSCA BINÁRIA

- O algoritmo de busca binária (binary search) funciona de modo semelhante ao jogo de adivinhação de números, no qual alguém diz: “Estou pensando em um número entre 1 e 100”. Começamos respondendo com um número, e a pessoa dirá “é maior”, “é menor”, ou dirá que acertamos.
- Para fazer o algoritmo funcionar, a estrutura de dados deve estar ordenada antes. Eis os passos seguidos pelo algoritmo:
  - 1. Um valor é selecionado no meio do array;
  - 2. Se o valor for aquele que estamos procurando, é sinal de que terminamos (o valor foi encontrado);
  - 3. Se o valor que estamos procurando for menor que o valor selecionado, retornaremos ao passo 1 usando o subarray à esquerda (inferior);
  - 4. Se o valor que estamos procurando for maior que o valor selecionado, retornaremos ao passo 1 usando o subarray à direita (superior);

---

## 13.17 - BUSCANDO POR INTERPOLAÇÃO

- O algoritmo de busca por interpolação (interpolation search) é uma variação melhorada da busca binária. Enquanto a busca binária sempre verifica o valor da posição do meio (mid), a busca por interpolação pode verificar lugares diferentes do array, dependendo do valor procurado.
- Para fazer o algoritmo funcionar, a estrutura de dados deve ser ordenada antes.
- Eis os passos seguidos pelo algoritmo:
  - 1. Um valor é selecionado usando a fórmula de position.
  - 2. Se o valor for aquele que estamos procurando, é sinal de que terminamos (value foi encontrado).
  - 3. Se o valor (value) que estamos procurando for menor que o valor selecionado, retornaremos ao passo 1 usando o subarray à esquerda (inferior).
  - 4. Se o valor (value) que estamos procurando for maior que o valorselecionado, retornaremos ao passo 1 usando o subarray à direita (superior).

---

## 13.18 - ALGORITMOS DE EMBARALHAMANTO

- Neste capítulo, vimos como ordenar um array para organizar todos os seus elementos, e como procurar elementos depois que o array estiver ordenado;
- Contudo, há também cenários em que precisaremos embaralhar os valores de um array. Um cenário comum na vida real é aquele em que embaralhamos as cartas de um baralho;

---

## 13.19 - ALGORITMO DE EMBARALHAMANTO DE FISHER-YATES

- Consiste em iterar pelas posições do array, começando pela última posição e trocando a posição atual por uma posição aleatória. A posição aleatória é menor que a posição atual; desse modo, o algoritmo garante que as posições já embaralhadas não serão embaralhadas novamente (quanto mais embaralhamos um jogo de baralho, pior será o embaralhamento);

---

## RESUMO

Neste capítulo, conhecemos os algoritmos de ordenação, busca e embaralhamento.

Vimos os algoritmos de bubble, selection, insertion, merge, quick, counting, bucket e radix sort, usados para ordenar estruturas de dados. Também conhecemos a busca sequencial, a busca por interpolação e a busca binária (que exigem que a estrutura de dados já esteja ordenada).

Além disso, descrevemos como embaralhar os valores em um array.

No próximo capítulo, conheceremos algumas técnicas avançadas usadas em algoritmos.
