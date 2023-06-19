# CAPÍTULO 11 - HEAP BINÁRIO E HEAP SORT

- Neste capítulo, veremos um tipo especial de árvore binária, que é a estrutura de dados de heap, também conhecida como heap binário;
- O heap binário é uma estrutura de dados muito famosa em ciência da computação, comumente aplicada em filas de prioridade (priority queues) por causa de sua eficiência para extrair rapidamente os valores mínimo e máximo;

---

## 11.1 - ESTRUTURA DE DADOS DO HEAP BINÁRIO

- O heap binário é uma árvore binária especial com as duas propriedades a seguir:
  - É uma árvore binária completa, o que significa que todos os níveis da árvore têm filhos à esquerda e à direita (com exceção dos filhos no último nível), e o último nível tem todos os filhos o máximo possível à esquerda. É o que chamamos de `propriedade de forma` (shape property);
  - Um heap binário é um heap mínimo (min heap) ou um heap máximo (max heap). O heap mínimo permite extrair rapidamente o valor mínimo da árvore, enquanto o heap máximo permite extrair rapidamente o valor máximo dela. Todos os nós são maiores ou iguais (heap máximo), ou menores ou iguais (heap mínimo), aos seus nós filhos. É o que chamamos de propriedade de heap (heap property);
- No heap binário, todo nó filho deve ser maior ou igual ao seu nó pai (heap mínimo) ou menor ou igual a ele (heap máximo). Em uma BST, porém, o filho à esquerda é sempre menor que o seu pai e o filho à direita tem sempre uma chave maior.

---

## 11.2 - CRIANDO A CLASSE MINHEAP

- Para começar podemos criar a estrutura básica de uma classe chamada MinHeap;
- Para comparar os valores que serão armazenados nessa estrutura de dados, usaremos compareFn, que fará uma comparação básica caso nenhuma função personalizada seja passada para o construtor da classe, como fizemos em capítulos anteriores. Para armazenar os valores, usaremos um array para representá-los;

---

## 11.3 - REPRSENTAÇÃO DA ÁRVORE BINÁRIA COM UM ARRAY

- Há duas maneiras de representar uma árvore binária:
  - A primeira é por meio de uma representação dinâmica usando ponteiros;
  - A segunda é usar um array e acessar os índices corretos a fim de obter os valores do pai e dos filhos à esquerda e à direita;
- É possível realizar três operações principais em uma estrutura de dados de heap:
  - insert(value): esse método insere um novo value no heap. Devolve true se value for inserido com sucesso, e false caso contrário;
  - extract(): esse método remove o value mínimo (heap mínimo) ou máximo (heap máximo) e devolve esse valor;
  - findMinimum(): esse método devolve o value mínimo (heap mínimo) ou máximo (heap máximo) sem removê-lo;

---

## 11.4 - INSERINDO UM VALOR NO HEAP

- A inserção de um valor no heap é feita adicionando value na folha que está na parte inferior do heap (a última posição do array), e então executando o método `siftUp`, o que significa que trocaremos value com o seu pai, até que esse seja menor que o value sendo inserido;
- A operação de `sift up` (literalmente, quer dizer peneirar para cima) também é chamada de `up head`, `percolate up`, `bubble up`, `heapify up` ou `cascade up`;

---

## 11.5 - OPERAÇÃO DE SIFT UP

- O método siftUp recebe o index do value inserido. Também precisamos obter o index de seu parent;
- Se o value inserido for menor que o seu parent (no caso do heap mínimo, ou maior que o seu parent no caso do heap máximo), trocamos o element com o seu parent;
- Repetiremos esse processo até que a raiz do heap também tenha sido processada, atualizando o index e o parent depois de cada troca;
- Para trocar dois valores em um array, precisamos de uma variável auxiliar que conterá uma cópia do primeiro elemento que queremos trocar;
- Em seguida, atribuímos o segundo elemento à posição do primeiro elemento;
- Por fim, sobrescrevemos o valor do segundo elemento com o valor do primeiro elemento atribuindo-lhe a cópia feita na linha;

---

## 11.6 - ENCONTRANDO OS VALORES MÍNIMO E MÁXIMO NO HEAP

- No heap mínimo, o valor (value) mínimo estará sempre localizado no primeiro índice do array (a raiz do heap);
- Assim, se o heap não estiver vazio, devolveremos o primeiro índice do array;
- Também podemos criar os métodos size e empty para a estrutura de dados MinHeap;

---

## 11.7 - EXTRAINDO OS VALORES MÍNIMO MÍNIMO E MÁXIMO DO HEAP

- Remover o valor (value) mínimo (heap mínimo) ou máximo (heap máximo) consiste em remover o elemento localizado no primeiro index do array (a raiz do heap). Após a remoção, movemos o último elemento do heap para a raiz e então executamos a função chamada siftDown, o que significa que faremos uma troca de elementos até que o heap esteja organizado novamente.
- A operação de sift down também é conhecida como `sink down`, `percolate down`, `bubble down`, `heapify down` ou `cascade down`;
- Se o heap estiver vazio, não haverá valor para extrair, portanto podemosdevolver `undefined`;
- Se houver apenas um valor no heap, podemos simplesmente o remover e devolvê-lo;
- Contudo, se o heap tiver mais que um valor, removeremos o valor do primeiro índice e o armazenaremos em uma variável temporária para que ele seja devolvido após a execução da operação de sift down;

---

## 11.8 - OPERAÇÃO DE SIFT DOWN

- O método siftDown recebe o index do valor removido. Fazemos uma cópia do index recebido na variável element. Também obtemos os índices dos filhos left e right;
- A operação de sift down consiste em trocar o element com o seu filho menor (heap mínimo) ou maior (heap máximo). Se element for menor que o seu filho left (e index também for válido), trocaremos element com seu filho left;
- Se element for menor que o seu filho right e index também for válido, trocaremos element com seu filho right;
- Depois de encontrar o index do filho menor, verificamos se o seu valor é igual ao índice em element (passado para o método siftDown); não
  faz sentido trocar o valor por ele mesmo! Se não for igual, nós o trocaremos com o element menor e repetiremos o mesmo processo, começando pelo element menor, até que ele seja colocado em sua posição correta;

---

## 11.9 - CRIANDO A CLASSE MAXHEAP

- O algoritmo da classe `MaxHeap` será praticamente o mesmo da classe `MinHeap`;
- A diferença estará no fato de que, sempre que houver uma comparação de > (maior que), ela será trocada pela comparação de < (menor que);
- Contudo, em vez de copiar o código e duplicá-lo, podemos estender classe MinHeap para herdar todo o código que criamos neste capítulo fazer uma comparação inversa sempre que necessário.
- Para inverter comparação, em vez de comparar a com b, podemos comparar b com;
- Podemos usar o mesmo código utilizado com MinHeap para testar `MaxHeap`. A diferença é que o valor maior estará na raiz do heap, e não o valor menor;

---

## 11.10 - ALGORITMO DE HEAP SORT

- Podemos usar a estrutura de dados do heap binário para nos ajudar a criar um algoritmo de ordenação muito famoso: o heap sort. O algoritmo de heap sort é composto de três passos:
  - 1. Crie um heap máximo usando o array a ser ordenado como o array original.
  - 2. Depois de criar o heap máximo, o maior valor estará armazenado no primeiro índice do heap. Substituiremos o primeiro valor pelo último do heap, decrementando o tamanho do heap de 1;
  - 3. Por fim, executamos heapify (sift down) na raiz do heap e repetimos o passo 2 até que o tamanho do heap seja igual a 1.Usamos o resultado do heap máximo em um array em ordem crescente (do menor para o maior). Se quisermos que o array seja ordenado em ordem decrescente, podemos usar o heap mínimo em seu lugar;
- A função de heap máximo reorganizará o array. Por causa de todas as comparações que serão feitas, só precisaremos executar a função heapify (sift down) para a segunda metade das posições do array (a primeira metade se organizará automaticamente, portanto não será necessário executar a função nas posições que já sabemos que estarão ordenadas);
- A função heapify tem o mesmo código que o método siftDown criado antes neste capítulo. A diferença é que passamos também como parâmetros o próprio heap, o seu tamanho e a função de comparação que queremos usar. Isso se deve ao fato de não estarmos utilizando diretamente a estrutura de dados de heap, mas usamos a sua lógica para desenvolver o algoritmo heapSort;

---

## RESUMO

Neste capítulo, conhecemos a estrutura de dados de heap binário e suas duas variantes: o heap mínimo (min heap) e o heap máximo (max heap).
Vimos como inserir valores, como dar uma espiada ou encontrar os valores mínimo e máximo, e como extrair um valor do heap. Também descrevemos as operações de sift up e de sift down, que ajudam a manter o heap organizado. Também aprendemos a usar a estrutura de dados de heap para criar o
algoritmo de heap sort. No próximo capítulo, estudaremos os conceitos básicos de grafos, que são estruturas de dados não lineares.
