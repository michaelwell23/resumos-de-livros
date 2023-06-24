# CAPÍTULO 14: DESIGNS DE ALGORITMOS TÉCNICAS

- No mundo da programação, os algoritmos são muito interessantes. O aspecto mais interessante acerca deles (e da lógica de programação) é o fato de haver mais de uma abordagem para resolver um problema.
- Conforme vimos em capítulos anteriores, podemos conceber uma solução usando a abordagem iterativa ou podemos deixar o código mais legível com a recursão.
- Há também outras técnicas que podemos usar para solucionar problemas com algoritmos. Neste capítulo, conheceremos algumas técnicas diferentes e discutiremos também os próximos passos caso você esteja interessado em explorar esse mundo com mais detalhes.

---

## 14.1 - DIVIDIR E CONQUISTAR

- O algoritmo de dividir e conquistar pode ser dividido em três partes:
  - 1. `Dividir` o problema original em subproblemas menores (instâncias menores do problema original).
  - 2. `Conquistar` os subproblemas menores resolvendo-os com algoritmos recursivos que devolvem a solução dos subproblemas. O caso de base do algoritmo recursivo resolve e devolve a solução do subproblema menor.
  - 3. `Combinar` as soluções dos subproblemas na solução do problema original.
- Como já discutimos os dois algoritmos mais famosos que usam a abordagem de dividir e conquistar no Capítulo 13, Algoritmos de ordenação e de busca, veremos como implementar a busca binária usando essa abordagem.

---

## 14.2 - BUSCA NINÁRIA

- No Capítulo 13, Algoritmos de ordenação e de busca, vimos como implementar a busca binária usando uma abordagem iterativa. Se observarmos o algoritmo novamente, veremos que é possível usar a abordagem de dividir e conquistar para implementar a busca binária também. Eis a sua lógica:
  - `Dividir`: calcular mid e procurar o valor na metade inferior ou superior do array.
  - `Conquistar`: procurar o valor na metade inferior ou superior do array.
  - `Combinar`: não é aplicável, pois estamos devolvendo o índice diretamente.

---

## 14.3 - PROGRAMAÇÃO DINÂMICA

- A programação dinâmica (PD) é uma técnica de otimização usada pararesolver problemas complexos dividindo-os em subproblemas menores.
- Observe que a abordagem da programação dinâmica é diferente da abordagem de dividir e conquistar. Enquanto a abordagem de dividir e conquistar divide o problema em subproblemas independentes e então combina as soluções, a programação dinâmica divide o problema em subproblemas dependentes.
- Há três passos importantes que devemos seguir ao resolver problemas usando a PD:
  - 1. Definir os subproblemas.
  - 2. Implementar a recorrência que resolve os subproblemas (nesse passo, devemos seguir os passos para a recursão, discutidos na seção anterior).
  - 3. Reconhecer e resolver os casos de base.

---

## 14.4 - PROBLEMA DO NÚMERO MÍNIMO DE MOEDAS PARA TROCO

- O problema do número mínimo de moedas para troco é uma variação do problema do troco em moedas.
- O problema do troco em moedas consiste em descobrir de quantas maneiras podemos dar um troco para um dado número de centavos usando uma determinada quantidade de denominações definidas (d1... dn).
- O problema do número mínimo de moedas para troco consiste em descobrir o número mínimo de moedas necessário para compor determinado número de centavos usando uma dada quantidade de denominações definidas (d1...dn).
- A solução para o problema do número mínimo de moedas para troco consiste em encontrar o número mínimo de moedas para n. Porém, para isso, devemos inicialmente encontrar a solução para todo x < n.
- Então podemos compor a solução a partir das soluções aplicadas aos valores menores.

---

## 14.5 - PROBLEMA DA MOCHILA

- O problema da mochila é um problema de otimização combinatória. Ele pode ser descrito assim: dada uma mochila de tamanho fixo com capacidade para carregar um peso W e um conjunto de itens que têm um valor e um peso, encontre a melhor solução de modo a encher a mochila com os itens mais valiosos e que o peso total seja menor ou igual a W.
- Considere que a mochila tenha capacidade para carregar um peso máximo igual a 5. Nesse exemplo, podemos dizer que a melhor solução seria carregar a mochila com os itens 1 e 2 que, em conjunto, pesam 5 e têm um valor total igual a 7.

---

## 14.6 - MAIOR SUBSEQUÊNCIA COMUM

- Outro problema de PD usado com muita frequência em problemas dedesafios de programação é o LCS (Longest Common Subsequence, ou Maior Subsequência Comum). Esse problema consiste em encontrar o tamanho da maior subsequência em duas sequências de string. A maior subsequência é uma sequência que aparece na mesma ordem relativa, mas não precisa ser necessariamente contígua (não é uma substring) nas duas strings.

---

## 14.7 - MULTIPLICAÇÃO DE CADEIA DE MATRIZES

- A multiplicação de cadeia de matrizes é outro problema famoso que pode ser resolvido com programação dinâmica. O problema consiste em encontrar a melhor maneira (ordem) de multiplicar um conjunto de matrizes.

---

## 14.8 - ALGORITMOS GULOSOS

- Um algoritmo guloso (greedy algorithm) segue o método heurístico de resolução de problemas segundo o qual fazemos a escolha localmente ideal (a melhor solução na ocasião) em cada etapa, na esperança de encontrar uma solução ideal global (a melhor solução global). O quadro geral não é avaliado, como fazemos em um algoritmo de programação dinâmica.

---

## 14.9 - PROBLEMA DO NÚMERO MÍNIMO DE MOEDAS PARA TROCO

- O problema do número mínimo de moedas para troco também pode ser resolvido com um algoritmo guloso. Na maioria das vezes, o resultado também será o ideal; contudo, para algumas denominações, não será.

---

## 14.10 - PROBLEMA FRACIONÁRIO DA MOCHILA

- O algoritmo para resolver o problema fracionário da mochila é um pouco diferente da versão com programação dinâmica. Enquanto na versão 0-1 do problema da mochila podíamos usar somente o item inteiro para encher a mochila, no problema fracionário, podemos usar frações dos itens.

---

## 14.11 - ALGORITMOS DE BACTRACKING

- O backtracking é uma estratégia usada para encontrar e compor uma solução de forma incremental. Começamos com um possível movimento e tentamos resolver o problema com o movimento selecionado.
- Se não funcionar, retrocedemos (fazemos um backtracking) e então selecionamos outro movimento, e assim por diante, até termos resolvido o problema. Em razão desse comportamento, os algoritmos de backtracking tentarão todos os movimentos possíveis (ou alguns movimentos, se a solução for encontrada antes) para solucionar um problema.

---

## 14.12 - RATO EM UM LABIRINTO

- Suponha que temos uma matriz de tamanho N\*N e que cada posição da matriz seja um bloco. A posição (ou bloco) pode estar livre (valor 1) ou bloqueada (valor 0),
- A matriz é o labirinto, e o objetivo é que o “rato” comece na posição [0][0] e vá para a posição [n-1][n-1] (o destino). O rato pode se mover em duas direções: verticalmente ou horizontalmente, para qualquer posiçãoque não esteja bloqueada.

---

## 14.13 - SOLUÇÃO DE SUDOKU

- O sudoku é um jogo de quebra-cabeça muito divertido, e um dos mais populares de todos os tempos. O objetivo é preencher uma matriz 9x9 com os dígitos de 1 a 9 de modo que cada linha e coluna seja composta de todos os nove dígitos. A matriz também contém quadrados menores (matrizes 3x3) que devem igualmente conter todos os nove dígitos.
- O algoritmo de backtracking para o Solucionador de Sudoku tentará colocar cada número nas linhas e nas colunas de modo a resolver o quebra-cabeça.

---

## 14.14 - INTRODUÇÃO À PROGRAMAÇÃO FUNCIONAL

- Nesta seção, introduziremos um novo paradigma chamado programação funcional (PF). Já usamos alguns trechos de código com PF em alguns algoritmos no livro. A programação funcional é um paradigma usado especialmente em ambientes acadêmicos, e, graças às linguagens modernas como Python e Ruby, ela começou a se tornar popular também entre os desenvolvedores no mercado. Felizmente, podemos usar JavaScript na programação funcional, tirando proveito de suas funcionalidades de ES2015.

---

## 14.15 - PROGRAMAÇÃO FUNCIONAL VERSUS PROGRAMAÇÃO IMPERATIVA

- Desenvolver no paradigma funcional não é difícil; é somente uma questão de se acostumar com o modo como o paradigma funciona.
- Na programação funcional, as funções são as estrelas. Devemos nos concentrar no que deve ser descrito, e não em como fazê-lo. Vamos retornar à frase “iteramos pelo array e fizemos o log de cada um dos itens”. Assim, a primeira tarefa na qual nos concentraremos é a iteração nos dados e, em seguida, executaremos alguma ação nesses dados, que significa fazer o logging dos itens.
- Alguns pontos que você deve ter em mente são:
  - O principal objetivo é descrever os dados e a transformação que devemos aplicar nesses dados.
  - A ordem da execução do programa tem pouca importância; por outro lado, os passos e sua sequência são muito importantes na programação imperativa.
  - As funções e as coleções de dados são as estrelas na programaçãofuncional.
  - Podemos usar e abusar de funções e da recursão na programação funcional, enquanto os laços, as atribuições, as condicionais e também as funções são usados na programação imperativa.
  - Na programação funcional, devemos evitar efeitos colaterais e dados mutáveis, o que significa que não modificaremos os dados passados para a função. Se houver necessidade de devolver uma solução com base na entrada, podemos criar uma cópia e devolver a cópia modificada dos dados.

---

## 14.16 - ES2015+ E A PROGRAMAÇÃO FUNCIONAL

- Com as funcionalidades das versões ES2015+, desenvolver programas funcionais em JavaScript se tornou mais fácil ainda;
- Suponha que queremos encontrar o valor mínimo de um array. Na programação imperativa, para executar essa tarefa, basta iterar pelo array e verificar se o valor mínimo atual é maior que o valor do array;
- Para executar a mesma tarefa com uma programação funcional, podemos usar a função Math.min, passando todos os elementos do array para serem comparados. Para transformar o array em elementos únicos, podemos usar o operador de espalhamento da ES2015 (...);
- Com as funções de seta (arrow functions) da ES2015, podemos simplificar um pouco mais e reescrever o código utilizando `forEach;

---

## 14.17 - CAIXA DE FERRAMENTAS FUNCIONAIS DE JAVASCRIPT - MAP, FILTER E REDUCE

- As funções `map`, `filter` e `reduce` (que vimos no Capítulo 3, Arrays) são a base da programação funcional em JavaScript.
- Com a função `map`, podemos transformar ou mapear uma coleção de dados para outra coleção de dados.
- Com a função `filter`, podemos filtrar valores de uma coleção
- Com a função reduce, podemos reduzir uma coleção a um valor específico;
- Essas funções também podem ser combinadas com as funcionalidades da ES2015, por exemplo, com o operador de desestruturação para atribuição e as funções de seta;

---

## 14.18 - BIBLIOTECA E ESTRUTURA DE DADOS FUNCIONAIS DE JAVASCRIPT

- Há algumas bibliotecas JavaScript excelentes que oferecem suporte para o paradigma funcional, contendo funções utilitárias e estruturas de dados funcionais.

---

## RESUMO

Neste capítulo, discutimos os problemas mais famosos de programação dinâmica, como uma variação do problema do número mínimo de moedas para troco, o problema da mochila, a maior subsequência comum e a multiplicação de cadeia de matrizes. Conhecemos os algoritmos que usam a abordagem de dividir e conquistar, e vimos como eles diferem da programação dinâmica.

Vimos os algoritmos gulosos (greedy) e como desenvolver uma solução gulosa para o problema do número mínimo de moedas para troco e o problema fracionário da mochila. Também discutimos o conceito de backtracking e vimos alguns problemas famosos, como o do Rato em um Labirinto e um Solucionador de Sudoku.

Além disso, conhecemos a programação funcional e discutimos alguns exemplos de como usar as funcionalidades de JavaScript nesse paradigma. No próximo capítulo, abordaremos a notação big-O (O grande) e discutiremos o modo de calcular a complexidade de um algoritmo. Veremos também outros conceitos presentes no mundo dos algoritmos.
