# CAPÍTULO 07 - ARRAYS

Um array é um conjunto ordenado de valores. Cada valor é chamado de elemento e cada elemento tem uma posição numérica no array, conhecida como índice. Os arrays em JavaScript são não tipados: um elemento do array pode ser de qualquer tipo e diferentes elementos do mesmo array podem ser de tipos diferentes. Os elementos podem ser até objetos ou outros arrays, o que permite a criação de estruturas de dados complexas, como arrays de objetos e arrays de arrays. Arrays em JavaScript são uma forma especializada de objeto e os índices de array são na verdade pouco mais do que nomes de propriedade que por acaso são inteiros. Os arrays herdam propriedades de Array.prototype, que efine um conjunto rio de métodos de manipuação de array.A maioria desses métodos é genérica, ou seja, funcionam corretamente não apenas para verdadeiros arrays, mas para qualquer “objeto semelhante a um array”.

---

## 7.1 - CRIANDO ARRAYS

A maneira mais fácil de criar um array é com um array literal, que é simplesmente uma lista de elementos de array separados com vírgulas dentro de colchetes. Se um array contém várias vírgulas seguidas sem qualquer valor entre elas, o array é esparso. Os elementos de array para os quais os valores são omitidos não existem, mas aparecem comoundefined se forem consultados.

---

## 7.2 - LENDO E GRAVANDO ELEMENTOS DE ARRAY

Um elemento de um array pode ser acessado com o operador [] . Uma referência ao array deve aparecer à esquerda dos colchetes. Uma expressão arbitrária que tenha um valor inteiro não negativo deve ficar dentro dos colchetes. Essa sintaxe pode ser usada tanto para ler como para gravar o valor de um elemento de um array. Como os arrays são objetos, eles podem herdar elementos de seus protótipos. Em ECMAScript 5, eles podem até ter elementos definidos por métodos getter e setter.

---

## 7.3 - ARRAYS ESPARSOS

Um array esparso é aquele no qual os elementos não têm índices contíguos começando em 0. Normalmente, a propriedade length de um array especifica o número de elementos no array. Se o array é esparso, o valor da propriedade length é maior do que o número de elementos. Os arrays esparsos podem ser criados com a construtora Array() ou simplesmente pela atribuição de um índice de array maior do que a propriedade length atual do array. Arrays suficientemente esparsos em geral são implementados de uma maneira mais lenta e usam a memória de modo mais eficiente do que os arrays densos, sendo que buscar elementos em um array assim levará praticamente o mesmo tempo que uma busca de propriedade de objeto normal. Entender os arrays esparsos é importante para compreender a verdadeira natureza dos arrays em JavaScript. Na prática, contudo, em sua maioria, os arrays em JavaScript com que você vai trabalhar não serão esparsos. E, caso você tenha que trabalhar com um array esparso, seu código provavelmente vai tratá-lo como trataria um array não esparso com elementos undefined.

---

## 7.4 - COMPRIMENTO DO ARRAY

Todo array tem uma propriedade length e é essa propriedade que torna os arrays diferentes dos objetos normais de JavaScript. Para arrays densos (isto é, não esparsos), a propriedade length especifica o número de elementos no array. Quando um array é esparso, a propriedade length é maior do que o número de elementos e podemos dizer a respeito dele que garantidamente length é maior do que o índice de qualquer elemento do array. Ou então, falando de outro modo, um array (esparso ou não) nunca vai ter um elemento cujo índice é maior ou igual à sua propriedade length. Para manter isso invariável, os arrays têm dois comportamentos especiais. O primeiro foi descrito anteriormente: se você atribui um valor para um elemento do array cujo índice i é maior ou igual à propriedade length atual do array, o valor da propriedade length é definido como i+1. O segundo comportamento especial que os arrays implementam para manter o comprimento invariável é que, se você configura a propriedade length com um inteiro não negativo n menor do que seu valor atual, todos os elementos do array cujo índice é maior ou igual a n são excluídos do array.

---

## 7.5 - ADICIONANDO E EXCLUINDO ELEMENTOS DE ARRAY

O modo mais simples de adicionar elementos em um array: basta atribuir valores a novos índices. O método push() também pode ser usado para adicionar um ou mais valores no final de um array. Os elementos de um array podem ser excluídos com o operador delete , exatamente como se exclui
propriedades de objeto. Usar delete em um elemento de array não altera a propriedade length e não desloca para baixo os elementos com índices mais altos, a fim de preencher a lacuna deixada pela propriedade excluída. Se um elemento de um array é excluído, o array se torna esparso. Os arrays têm um método pop() (ele funciona com push() ) que reduz o comprimento de um array de 1, mas também retorna o valor do elemento excluído. Existe ainda um método shift() (que faz par com unshift() ) para remover um elemento do início de um array. Ao contrário de delete , o método shift() desloca todos os elementos para um índice uma unidade menor do que seu índice atual. Por fim, splice() é o método de uso geral para inserir, excluir ou substituir elementos de um array. Ele altera a propriedade length e desloca os elementos do array para índices mais altos ou mais bai-
xos, conforme for necessário.

---

## 7.6 - ITERAÇÃO EM ARRAYS

A maneira mais comum de iterar através dos elementos de um array é com um laço for.

---
