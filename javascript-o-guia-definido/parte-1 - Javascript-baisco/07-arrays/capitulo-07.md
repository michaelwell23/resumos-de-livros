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

## 7.7 - ARRAYS MULTIDIMENSIONAIS

JavaScript não suporta arrays multidimensionais de verdade, mas é possível ter algo parecido, com arrays de arrays. Para acessar um valor em um array de arrays, basta usar o operador [] duas vezes. Por exemplo, suponha que a variável matrix seja um array de arrays de números. Todo elemento em matrix[x] é um array de números. Para acessar um número específico dentro desse array, você escreveria matrix[x][y].

---

## 7.8 - MÉTODOS DE ARRAY

ECMAScript 5 acrescenta novos métodos de iteração em arrays; Essas métodos são abordados nessa sessão:

### 7.8.1 - join()

O método Array.join() converte todos os elementos de um array em strings e as concatena, retornando a string resultante. Pode-se especificar uma string opcional para separar os elementos na string resultante. Se não for especificada qualquer string separadora, uma vírgula é usada.

### 7.8.2 - reverse()

O método Array.reverse() inverte a ordem dos elementos de um array e retorna o array invertido. Ele faz isso no local; em outras palavras, ele não cria um novo array com os elementos reorganizados, mas em vez disso os reorganiza no array já existente.

### 7.8.3 - sort()

Array.sort() classifica os elementos de um array no local e retorna o array classificado. Quando sort() é chamado sem argumentos, ele classifica os elementos do array em ordem alfabética. Se um array contém elementos indefinidos, eles são classificados no final do array. Para classificar um array em alguma ordem diferente da alfabética, deve-se passar uma função de comparação como argumento para sort() . Essa função decide qual de seus dois argumentos deve aparecer primeiro no array classificado. Se o primeiro argumento deve aparecer antes do segundo, a função de comparação deve retornar um número menor do que zero.

### 7.8.4 - concat()

Se um array contém elementos indefinidos, eles são classificados no final do array. Para classificar um array em alguma ordem diferente da alfabética, deve-se passar uma função de comparação como argumento para sort() . Essa função decide qual de seus dois argumentos deve aparecer primeiro no array classificado. Se o primeiro argumento deve aparecer antes do segundo, a função de comparação deve retornar um número menor do que zero.

### 7.8.5 - slice()

O método Array.slice() retorna um pedaço (ou subarray) do array especificado. Seus dois argumentos especificam o início e o fim do trecho a ser retornado. O array retornado contém o elemento especificado pelo primeiro argumento e todos os elementos subsequentes, até (mas não incluindo) o elemento especificado pelo segundo argumento. Se apenas um argumento é especificado, o array retornado contém todos os elementos desde a posição inicial até o fim do array.

### 7.8.6 - splice()

splice() pode excluir elementos de um array, inserir novos elementos em um array ou efetuar as duas operações ao mesmo tempo. Os elementos do array que vêm após o ponto de inserção ou exclusão têm seus índices aumentados ou diminuídos, conforme o necessário, para que permaneçam contíguos ao restante do array. O primeiro argumento de splice() especifica a posição do array em que a inserção e/ou exclusão deve começar. O segundo argumento especifica o número de elementos que devem ser excluídos (removidos) do array. Se esse segundo argumento é omitido, todos os elementos do array, do elemento inicial até o fim do array, são removidos.

### 7.8.7 - push() e pop()

Os métodos push() e pop() permitem trabalhar com arrays como se fossem pilhas. O método push() anexa um ou mais novos elementos no final de um array e retorna o novo comprimento do array. O método pop() faz o inverso: ele exclui o último elemento de um array, decrementa o comprimento do array e retorna o valor que removeu. Os dois métodos modificam o array original.

### 7.8.8 - unshift() e shift()

Os métodos unshift() e shift() se comportam quase como push() e pop() , exceto que inserem e removem elementos do início de um array e não do final. unshift() adiciona um ou mais elementos no início do array, desloca os elementos existentes no array para cima, para índices mais altos, a fim de dar espaço, e retorna o novo comprimento do array. shift() remove e retorna o primeiro elemento do array, deslocando todos os elementos subsequentes uma casa para baixo, para ocuparem o espaço recentemente vago no início do array.

### 7.8.9 - toString e toLocaleString()

Um array, assim como qualquer objeto de JavaScript, tem um método toString() . Para um array, esse método converte cada um de seus elementos em uma string (chamando os métodos toString() de seus elementos, se necessário) e produz na saída uma lista separada com vírgulas dessas strings. toLocaleString() é a versão localizada de toString(). Ele converte cada elemento do array em uma string chamando o método toLocaleString() do elemento e, então, concatena as strings resultantes usando uma string separadora específica para a localidade (e definida pela implementação).

---

## 7.9 - MÉTODOS DE ARRAY DE ECMASCRIPT5

ECMAScript 5 define nove novos métodos de array para iterar, mapear, filtrar, testar, reduzir e pesquisar arrays. As subseções a seguir descrevem esses métodos. Entretanto, antes de abordarmos os detalhes, é interessante fazermos algumas generalizações a respeito desses métodos de array de ECMAScript 5. Primeiramente, a maioria dos métodos aceita uma função como primeiro argumento e chama essa função uma vez para cada elemento (ou para alguns elementos) do array. Se o array é esparso, a função passada não é chamada para os elementos inexistentes. Na maioria dos casos, a função fornecida é chamada com três argumentos: o valor do elemento do array, o índice do elemento e o array em si. Frequentemente, apenas o primeiro desses valores de argumento é necessário e o segundo e terceiro valores podem ser ignorados.

### 7.9.1 - forEach()

O método forEach() itera por um array, chamando uma função especificada para cada elemento. Conforme descrito, a função é passada como primeiro argumento para forEach() . Então, forEach() chama a função com três argumentos: o valor do elemento do array, o índice do elemento e o array em si. Se você só tem interesse no valor do elemento do array, pode escrever uma função com apenas um parâmetro.

### 7.9.2 - map()

O método map() passa cada elemento do array em que é chamado para a função especificada e retorna um array contendo os valores retornados por essa função. A função passada para map() é chamada da mesma maneira que uma função passada para forEach(). Contudo, para o método map() a função passada deve retornar um valor. Note que map() retorna um novo array: ele não modifica o array em que é chamado.

### 7.9.4 - filter()

O método filter() retorna um array contendo um subconjunto dos elementos do array em que é chamado. A função passada para ele deve ser um predicado: uma função que retorna true ou false. O predicado é chamado exatamente como para forEach() e map() . Se o valor de retorno é true ou um valor que se converte em true , então o elemento passado para o predicado é membro do subconjunto e é adicionado no array que se tornará o valor de retorno.

### 7.9.4 - every() e some()

Os métodos every() e some() são predicados de array: eles aplicam uma função de predicado especificada nos elementos do array e, então, retornam true ou false. O método every() é como o quantificador matemático “para todo” ∀: ele retorna true se, e somente se, sua função de predicado retorna true para todos os elementos do array. O método some() é como o quantificador matemático “existe” ∃: ele retorna true se existe pelo menos um elemento no array para o qual o predicado retorna true , e retorna false se, e somente se, o predicado retorna false para todos os elementos do array.

### 7.9.5 - reduce(), reduceRight()

Os métodos reduce() e reduceRight() combinam os elementos de um array usando a função especificada para produzir um valor único. Essa é uma operação comum na programação funcional e também é conhecida pelos nomes “injetar” e “dobrar”. reduce() recebe dois argumentos. O primeiro é a função que efetua a operação de redução. A tarefa dessa função de redução é combinar de algum modo ou reduzir dois valores a um único e retornar esse valor reduzido. reduceRight() funciona exatamente como reduce() , exceto que processa o array do índice mais alto para o mais baixo (da direita para a esquerda), em vez do mais baixo para o mais alto. Talvez você queira fazer isso se a operação de redução tiver precedência da direita para a esquerda.

### 7.9.6 - indexOf() e lastIndexOf()

indexOf() e lastIndexOf() procuram um elemento com um valor especificado em um array e retornam o índice do primeiro elemento encontrado com esse valor ou –1, se nenhum for encontrado. indexOf() pesquisa o array do início ao fim e lastIndexOf() pesquisa do fim para o início. Ao contrário dos outros métodos descritos nesta seção, indexOf() e lastIndexOf() não recebem um argumento de função. O primeiro argumento é o valor a ser pesquisado. O segundo argumento é opcional: ele especifica o índice do array em que a pesquisa deve começar. Se esse argumento é omitido, indexOf() começa no início e lastIndexOf() começa no fim.

---

## 7.10 TIPOS DE ARRAY

Dado um objeto desconhecido, frequentemente a capacidade de determinar se ele é um array ou não é útil. Em ECMAScript 5, isso pode ser feito com a função Array.isArray(). Dado um objeto desconhecido, frequentemente a capacidade de determinar se ele é um array ou não é útil. Em ECMAScript 5, isso pode ser feito com a função Array.isArray().

---

## 7.11 - OBJETOS SEMELHANTES A UM ARRAY

Os arrays em JavaScript têm algumas características especiais inexistentes em outros objetos:
• A propriedade length é atualizada automaticamente quando novos elementos são adicionados na lista.
• Configurar length com um valor menor trunca o array.
• Os arrays herdam métodos úteis de Array.prototype .
• Os arrays têm um atributo classe de “Array”.

Essas são as características que tornam os arrays de JavaScript diferentes dos objetos normais. Mas não são estas as características fundamentais que definem um array. Muitas vezes é perfeitamente razoável tratar qualquer objeto com uma propriedade length numérica e propriedades de inteiro não negativo correspondentes como um tipo de array.

---

## 7.12 - STRING COMO ARRAYS

Em ECMAScript 5 (e em muitas implementações recentes de navegadores – incluindo o IE8 – antes de ECMAScript 5), as strings se comportam como arrays somente para leitura. Em vez de acessar caracteres individuais com o método charAt(), pode-se usar colchetes. O operador typeof ainda retorna “string” para strings, é claro, e o método Array.isArray() retorna false se uma string é passada para ele. A principal vantagem das strings que podem ser indexadas é simplesmente que podemos substituir chamadas para charAt() por colchetes, que são mais concisos, legíveis e possivelmente mais eficientes. Contudo, o fato de strings se comportarem como arrays também significa que podemos aplicar nelas métodos genéricos de array.
