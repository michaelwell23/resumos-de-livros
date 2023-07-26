# CAPÍTULO03: TIPOS, VALORES E VARIÁVEIS

Os tipos de valores que podem ser representados e manipulados em uma linguagem de programação são conhecidos como `tipos` e uma das caracteristicas mais fundamentais de uma linguagem de programação é o conjunto de tipos que ela aceita. Quando um programa precisa manter um valor para uso futuro, ele atribui o valor a uma `variável`. Uma variável define um nome simbólico para um valor e permite que o valor seja referido pelo nome. O funcionamento das variáveis é outra característica fundamental de qualquer linguagem de progranação. Os tipos de JavaScript podem ser divididos em duas categorias: `tipos primitivos` e `tipos de objeto`. Os tipos primitivos de JavaScript incluem números, sequências de texto (conhecidas como strings) e valores de verdade (conhecidos como booleanos)

---

## 3.1 NÚMEROS

Ao contrário de muitas linguagens, JavaScript não faz distinção entre valores inteiros e valores em ponto flutuante. Todos os números em JavaScript são representados como valores em ponto flutuante. JavaScript representa números usando o formato de ponto flutuante de 64 bits definido pelo padrão IEEE 754 1 , isso significa que pode representar números tão grandes quanto ±1,7976931348623157 × 10308 e tão pequenos quanto ±5 × 10−324 .

### 3.1.1 Literais inteiros

Em um programa JavaScript, um inteiro de base 10 é escrito como uma sequência de dígitos. Além dos literais inteiros de base 10, JavaScript reconhece valores hexadecimais (base 16). Um literal hexadecimal começa com “0x” ou “0X”, seguido por uma sequência de dígitos hexadecimais. Um dígito hexadecimal é um dos algarismos de 0 a 9 ou as letras a (ou A) até f (ou F), as quais representam valores de 10 a 15.

### 3.1.2 - Literais em ponto flutuante

Os literais em ponto flutuante podem ter um ponto decimal; eles usam a sintaxe tradicional dos números reais. Um valor real é representado como a parte inteira do número, seguida de um ponto decimal e a parte fracionária do número. Os literais em ponto flutuante também podem ser representados usando-se notação exponencial: um número real seguido da letra e (ou E), seguido por um sinal de adição ou subtração opcional, seguido por um expoente inteiro.

### 3.1.3 - Aritmética em JavaScript

Os programas JavaScript trabalham com números usando os operadores aritméticos fornecidos pela linguagem. Isso inclui + para adição, – para subtração, \* para multiplicação, / para divisão e % para módulo (resto da divisão). Além desses operadores aritméticos básicos, JavaScript aceita operações matemáticas mais complexas por meio de um conjunto de funções e constantes definidas como propriedades do objeto Math.

### 3.1.4 - Ponto flutuante binário e erros de arredondamento

Existem infinitos números reais, mas apenas uma quantidade finita deles (18437736874454810627, para ser exato) pode ser representada de forma exata pelo formato de ponto flutuante de JavaScript. Isso significa que, quando se está trabalhando com números reais em JavaScript, a representação do número frequentemente será uma aproximação dele.
Os números em JavaScript têm muita precisão e podem se aproximar bastante de 0.1 . Mas o fato de esse número não poder ser representado de forma exata pode causar problemas. Devido ao erro de arredondamento, a diferença entre as aproximações de .3 e .2 não é exatamente igual à diferença entre as aproximações de .2 e .1. É importante entender que esse problema não é específico da linguagem JavaScript: ele afeta qualquer linguagem de programação que utilize núme-
ros binários em ponto flutuante. Uma futura versão de JavaScript poderá suportar um tipo numérico decimal que evite esses problemas de arredondamento. Até então, talvez você queira efetuar cálculos financeiros importantes usando inteiros adaptados.

### 3.1.5 - Datas E horas

JavaScript básico inclui uma construtora Date() para criar objetos que representam datas e horas. Esses objetos Date têm métodos que fornecem uma API para cálculos simples de data. Os objetos Date não são um tipo fundamental como os números.

---

## 3.2 - TEXTO

Uma string é uma sequência ordenada imutável de valores de 16 bits, cada um dos quais normalmente representa um caractere Unicode – as strings são um tipo de JavaScript usado para representar texto.

### 3.2.1 - Strings literais

Para incluir uma string literalmente em um programa JavaScript, basta colocar os caracteres da string dentro de um par combinado de aspas simples ou duplas ( ' ou " ). Os caracteres de aspas duplas podem estar contidos dentro de strings delimitadas por caracteres de aspas simples e estes podem estar contidos dentro de strings delimitadas por aspas duplas.

### 3.2.2 - SEQUÊNCIA DE ESCAPE EM STRING LITERAIS

O caractere de barra invertida (\) tem um propósito especial nas strings em JavaScript. Combinado com o caractere que vem a seguir, ele representa um caractere que não pode ser representado de outra forma dentro da string. Outro exemplo, é o escape \’, que representa o caractere de aspas simples (ou apóstrofo). Essa sequência de escape é útil quando se precisa incluir um apóstrofo em uma string literal que está contida dentro de aspas simples.

### 3.2.3 - Trabalhando com strings

Um dos recursos incorporados a JavaScript é a capacidade de concatenar strings. Se o operador + é utilizado com números, ele os soma. Mas se esse operador é usado em strings, ele as une, anexando a segunda na primeira. Para determinar o comprimento de uma string – o número de valores de 16 bits que ela contém use sua propriedade `length`. Além dessa propriedade length , existem vários métodos que podem ser chamados em strings.

### 3.2.4 - Comparação de padrões

JavaScript define uma construtora RegExp() para criar objetos que representam padrões textuais. Esses padrões são descritos com expressões regulares, sendo que JavaScript adota a sintaxe da Perl para expressões regulares. Tanto as strings como os objetos RegExp têm métodos para fazer comparação de padrões e executar operações de busca e troca usando expressões regulares. Embora os objetos RegExp não sejam um dos tipos de dados fundamentais da linguagem, eles têm uma sintaxe literal e podem ser codificados diretamente nos programas JavaScript. O texto entre um par de barras normais constitui uma expressão regular literal. A segunda barra normal do par também pode ser seguida por uma ou mais letras, as quais modificam o significado do padrão. Os objetos RegExp definem vários métodos úteis e as strings também têm métodos que aceitam argumentos de RegExp.

---

## 3.3 - VALORES BOOLEANOS

Um valor booleano representa verdadeiro ou falso, ligado ou desligado, sim ou não. Só existem dois valores possíveis desse tipo. As palavras reservadas true e false são avaliadas nesses dois valores. Os valores booleanos são comumente usados em estruturas de controle em JavaScript. Por exemplo, a instrução if/else de JavaScript executa uma ação se um valor booleano é true e outra ação se o valor é false. Normalmente, uma comparação que gera um valor booleano combinada diretamente com a instrução que o utiliza.

---

## 3.4 - NULL E UNDEFINED

null é uma palavra-chave da linguagem avaliada com um valor especial, normalmente utilizado para indicar a ausência de um valor. Usar o operador typeof em null retorna a string “object”, indicando que null pode ser considerado um valor de objeto especial que significa “nenhum objeto”. Na prática, contudo, null normalmente é considerado como o único membro de seu próprio tipo e pode ser usado para indicar “nenhum valor” para números e strings, assim como para objetos. JavaScript também tem um segundo valor que indica ausência de valor. O valor indefinido representa uma ausência mais profunda. É o valor de variáveis que não foram inicializadas e o valor obtido quando se consulta o valor de uma propriedade de objeto ou elemento de array que não existe. O valor indefinido também é retornado por funções que não têm valor de retorno e o valor de parâmetros de função quando os quais nenhum argumento é fornecido. undefined é uma variável global predefinida (e não uma palavra-chave da linguagem, como null ) que é inicializada com o valor indefinido. Apesar dessas diferenças, tanto null quanto undefined indicam uma ausência de valor e muitas vezes podem ser usados indistintamente.

---

## 3.5 - O OBJETO GLOBAL
