# CAPÍTULO 04 - EXPRESSÕES E OPERADORES

Uma expressão é uma frase de código JavaScript que um interpretador JavaScript pode avaliar para produzir um valor. Uma constante literalmente incorporada em seu programa é um tipo de expressão muito simples. Um nome de variável também é uma expressão simples, avaliada com o valor atribuído a essa variável. Expressões complexas são formadas a partir de expressões mais simples. A maneira mais comum de construir uma expressão complexa a partir de expressões mais simples é com um operador. Um operador combina os valores de seus operandos (normalmente, dois deles) de algum modo e é avaliada como um novo valor. O operador de multiplicação `*` é um exemplo simples. A expressão `x * y` é avaliada como o produto dos valores das expressões x e y. Por simplicidade, às vezes dizemos que um operador retorna um valor, em vez de “é avaliado como” um valor.

---

## 4.1 EXPRESSÕES PRIMÁRIAS

Em JavaScript, as expressões primárias são valores constantes ou literais, certas palavras-chaves de linguagem e referências a variáveis. Os literais são valores constantes incorporados diretamente em seu programa. JavaScritp posui algumas palavras reservadas que são expressões primárias como `true`, `false` e `null`. Ao contrário das outras palavras-chave, this não é uma constante – ela é avaliada como diferentes valores em diferentes lugares no programa. A palavra-chave this é utilizada na programação orientada a objetos. Dentro do corpo de um método, this é avaliada como o objeto no qual o método foi chamado. E por fim, temos as referencias à variável simples como expressão primária. Quando qualquer identificador aparece sozinho em um programa, JavaScript presume que se trata de uma variável e procura seu valor. Se não existe variável alguma com esse nome, a expressão é avaliada com o valor undefined.

---

## 4.2 - INICIALIZANDORES DE OBJETO E ARRAY

Os inicializadores de objeto e array são expressões cujo valor é um objeto ou array recém-criado. Essas expressões inicializadoras às vezes são chamadas de “objetos literais” e “array literais.” Contudo, ao contrário dos verdadeiros literais, elas não são expressões primárias, pois incluem várias subexpressões que especificam valores de propriedade e elemento. Um inicializador de array é uma lista de expressões separadas com vírgulas e contidas em colchetes. O valor de um inicializador de array é um array recém-criado. Os elementos desse novo array são inicializados com os valores das expressões separadas com vírgulas.

---

## 4.3 - EXPRESSÕES DE DEFINIÇÃO DE FUNÇÃO

Uma expressão de definição de função define uma função JavaScript e o valor de tal expressão é a função recém-definida. De certo modo, uma expressão de definição de função é uma “função literal”, da mesma maneira que um inicializador de objeto é um “objeto literal”. Normalmente, uma
expressão de definição de função consiste na palavra-chave function seguida de uma lista separada com vírgulas de zero ou mais identificadores (os nomes de parâmetro) entre parênteses e um bloco de código JavaScript (o corpo da função) entre chaves.

---

## 4.6 EXPRESSÕES DE ACESSO À PROPRIEDADE

Uma expressão de acesso à propriedade é avaliada com o valor de uma propriedade de objeto ou de um elemento de array. JavaScript define duas sintaxes para acesso à propriedade:

```js
expressão.identificador;
expressão[expressão];
```

O primeiro estilo de acesso à propriedade é uma expressão seguida de um ponto-final e um identificador. A expressão especifica o objeto e o identificador especifica o nome da propriedade desejada. O segundo estilo de acesso à propriedade tem outra expressão entre colchetes após a primeira (o objeto ou array). Essa segunda expressão especifica o nome da propriedade desejada ou o índice do elemento do array desejado.

---

## 4.5 - EXPRESSÕES DE INVOCAÇÃO

Uma expressão de invocação é uma sintaxe de JavaScript para chamar (ou executar) uma função ou um método. Ela começa com uma expressão de função que identifica a função a ser chamada. A expressão de função é seguida por um parêntese de abertura, uma lista separada com vírgulas de zero
ou mais expressões de argumento e um parêntese de fechamento. Quando uma expressão de invocação é avaliada, a expressão de função é avaliada primeiro e depois as expressões de argumento são avaliadas para produzir uma lista de valores de argumento. Se o valor da expressão de função não é um objeto que possa ser chamado, é lançado um TypeError. Toda expressão de invocação contém um par de parênteses e uma expressão antes do parêntese de abertura. Se essa expressão é uma expressão de acesso à propriedade, então a chamada é conhecida como invocação de método. Nas invocações de método, o objeto ou array sujeito ao acesso à propriedade se torna o valor do parâmetro this enquanto o corpo da função está sendo executado.

---

## 4.6 - EXPRESSÕES DE CRIAÇÃO DE OBJETO

Uma expressão de criação de objeto gera um novo objeto e chama uma função (denominada construtora) para inicializar as propriedades desse objeto. As expressões de criação de objeto são como as expressões de chamada, exceto que são prefixadas com a palavra-chave new:

```js
new Object();
new Point(2, 3);
```

Quando uma expressão de criação de objeto é avaliada, JavaScript cria primeiro um novo objeto vazio, exatamente como aquele criado pelo inicializador de objetos {}. Em seguida, ela chama a função especificada com os argumentos especificados, passando o novo objeto como valor da palavra-chave this. Então, a função pode usar this para inicializar as propriedades do objeto recém-criado.

---

## 4.7 - VISÃO GERAL DOS OPERADORES

Os operadores são utilizados em JavaScript para expressões aritméticas, expressões de comparação, expressões lógicas, expressões de atribuição e muito mais. A maioria dos operadores é representada por caracteres de pontuação, como + e = . Alguns, entretanto, são representados por palavras-chave como delete e instanceof . Os operadores de palavra-chave são operadores regulares, assim como aqueles expressos com pontuação; eles apenas têm uma sintaxe menos sucinta.

### 4.7.1 - Número de operadores

Os operadores podem ser classificados de acordo com o número de operandos que esperam (sua aridade). A maioria dos operadores JavaScript, como o operador de multiplicação \* , é de operadores binários, que combinam duas expressões em uma mais complexa. Isto é, eles esperam dois operandos.
JavaScript também aceita diversos operadores unários, os quais convertem uma expressão em uma outra mais complexa.

### 4.7.2 - Tipo de operando e de resultado

Alguns operadores trabalham com valores de qualquer tipo, mas a maioria espera que seus operandos sejam de um tipo específico. E a maioria retorna (ou é avaliada como) um valor de um tipo específico. Os operadores JavaScript normalmente convertem o tipo de seus operandos conforme o necessário. O operador de multiplicação `*` espera operandos numéricos, mas a expressão "3" \* "5" é válida, pois JavaScript pode converter os operandos em números. Alguns operadores se comportam de formas diferentes, dependendo do tipo dos operandos utiliza-
dos. Mais notadamente, o operador + soma operandos numéricos, mas concatena operandos string. Da mesma forma, os operadores de comparação, como < , fazem a comparação em ordem numérica ou alfabética, dependendo do tipo dos operandos.

### 4.7.3 - Lvalues

Lvalue é um termo histórico que significa “uma expressão que pode aparecer de forma válida no lado esquerdo de uma expressão de atribuição”. Em JavaScript, variáveis, propriedades de objetos e elementos de arrays são lvalues. A especificação ECMAScript permite que funções internas retornem lvalues, mas não define qualquer função que se comporte dessa maneira.

### 4.7.4 - Efitos colcaterais do operadores

Algumas expressões têm efeitos colaterais e sua avaliação pode afetar o resultado de futuras avaliações. Os operadores de atribuição são o exemplo mais evidente: se você atribui um valor a uma variável ou propriedade, isso altera o valor de qualquer expressão que utilize essa variável ou propriedade. Os operadores ++ e -- de incremento e decremento são semelhantes, pois realizam uma atribuição implícita. O operador delete também tem efeitos colaterais: excluir uma propriedade é como (mas não o mesmo que) atribuir undefined à propriedade.

### 4.7.5 - Precedência dos operadores

Os operadores com precedência mais alta são executados antes daqueles com precedência mais baixa. O operador de multiplicação \* tem precedência mais alta do que o operador de adição + ; portanto a multiplicação é efetuada antes da adição. Além disso, o operador de atribuição = tem a precedência mais baixa; portanto, a atribuição é realizada depois que todas as operações no lado direito são concluídas. A precedência dos operadores pode ser anulada com o uso explícito de parênteses. Embora typeof seja um dos operadores de prioridade mais alta, a operação typeof é efetuada no resultado dos dois acessos à propriedade e na chamada de função. Na prática, se você não tiver certeza da precedência de seus operadores, o mais simples a fazer é utilizar parênteses para tornar a ordem de avaliação explícita. As regras importantes para se conhecer são
estas: multiplicação e divisão são efetuadas antes de adição e subtração e a atribuição tem precedência muito baixa, sendo quase sempre realizada por último.

### 4.7.6 - Associatividade de operadores

A associatividade de um operador define a ordem em que operações de mesma precedência são efetuadas. Associatividade da esquerda para a direita significa que as operações são efetuadas nessa ordem.

### 6.7.7 - Ordem de avaliação

A precedência e a associatividade dos operadores especificam a ordem em que as operações são efetuadas em uma expressão complexa, mas não especificam a ordem em que as subexpressões são avaliadas. JavaScript sempre avalia expressões rigorosamente na ordem da esquerda para a direita. A ordem de avaliação só faz diferença se uma das expressões que estão sendo avaliadas tem efeitos colaterais que afetam o valor de outra expressão. Se a expressão x incrementa uma variável utilizada pela expressão z , então o fato de x ser avaliada antes de z é importante.

---

## 4.8 - EXPRESSÕES ARITMÉTICAS

Os operadores aritméticos básicos são \* (multiplicação), / (divisão), % (módulo: resto de uma divisão), + (adição) e – (subtração). Conforme observado, vamos discutir o operador + em uma seção exclusiva. Os outros quatro operadores básicos simplesmente avaliam seus operandos, convertem os valores em números, se necessário, e então calculam o produto, quociente, resto ou a diferença entre os valores. Operandos não numéricos que não podem ser convertidos em números são convertidos no valor NaN . Se um dos operandos é (ou é convertido em) NaN , o resultado da operação também é NaN. O operador / divide seu primeiro operando pelo segundo. O operador % calcula o primeiro operando módulo segundo operando. Em outras palavras, ele retorna o resto após a divisão de número inteiro do primeiro operando pelo segundo operando.

### 4.8.1 - O operador+

Tecnicamente, o operador + se comporta como segue:
• Se um de seus valores de operando é um objeto, ele o converte em um valor primitivo utilizando o algoritmo de objeto para valor primitivo descrito na Seção 3.8.3: os objetos Date são convertidos por meio de seus métodos toString() e todos os outros objetos são convertidos via
valueOf() , caso esse método retorne um valor primitivo. Contudo, a maioria dos objetos não tem um método valueOf() útil; portanto, também são convertidos via toString().
• Após a conversão de objeto para valor primitivo, se um ou outro operando é uma string, o outro é convertido em uma string e é feita a concatenação.
• Caso contrário, os dois operandos são convertidos em números (ou em NaN) e é efetuada a adição.

### 4.8.2 - Operadores aritméticos unários

Os operadores unários modificam o valor de um único operando para produzir um novo valor. Em JavaScript, todos os operadores unários têm precedência alta e todos são associativos à direita. Todos operadores aritméticos unários descritos nesta seção ( + , - , ++ e -- ) convertem seu único operando em um número, se necessário. Os operadores aritméticos unários são os seguinte: Mais unário (+), Menos unário (-), Incremento (++) e Decremento(--)

### 4.8.3 - Operadores bit a bit

Os operadores bit a bit fazem manipulação de baixo nível dos bits na representação binária de números. Embora não efetuem operações aritméticas tradicionais, eles são classificados como operadores aritméticos aqui porque atuam sobre operandos numéricos e retornam um valor numérico. Os operadores bit a bit esperam operandos inteiros e se comportam como se esses valores fossem representados como inteiros de 32 bits, em vez de valores em ponto flutuante de 64 bits. Esses operadores convertem seus operandos em números, se necessário, e então forçam os valores numéricos a ser inteiros de 32 bits, eliminando qualquer parte fracionária e quaisquer bits além do 32º. Os operadores bit a bit são: E(%), OU(|), XOR(^) NOT(~), Deslocamento à esquerda(<<), Deslocamento à direita com sinal (>>), Deslocamento à direita de zero (>>>).output

---

## 4.9 EXPRESSÕES RELACIONAIS
