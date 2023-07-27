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

O objeto global é um objeto normal de JavaScript que tem um objetivo muito importante: as propriedades desse objeto
são os símbolos definidos globalmente que estão disponíveis para um programa JavaScript. Quando o interpretador JavaScript começa (ou quando um navegador Web carrega uma nova página), ele cria um novo objeto global e dá a ele um conjunto inicial de propriedades que define:

• propriedades globais, como undefined , Infinity e NaN
• funções globais, como isNaN() , parseInt() e eval().
• funções construtoras, como Date() , RegExp() , String() , Object() e Array()
• objetos globais, como Math e JSON

As propriedades iniciais do objeto global não são palavras reservadas, mas merecem ser tratadas como se fossem. Emm JavaScript do lado do cliente, o objeto Window serve como objeto global para todo código JavaScript contido na janela do navegador que ele representa. Esse objeto global Window tem uma propriedade de autoreferência window que pode ser usada no lugar de this para se referir ao objeto global. O objeto Window define as propriedades globais básicas, mas também define muitos outros globais que são específicos para navegadores Web e para JavaScript do lado do cliente.

---

## 3.6 - OBJETOS WRAPPER

Os objetos JavaScript são valores compostos: eles são um conjunto de propriedades ou valores nomeados. Ao usarmos a notação .(ponto) fazemos referência ao valor de uma propriedade. Quando o valor de uma propriedade é uma função, a chamamos de método. Para chamar o método m de um objeto
o , escrevemos

```js
o.m();
```

Contudo, as strings não são objetos. Então, por que elas têm propriedades? Quando você tenta se referir a uma propriedade de uma string s, JavaScript converte o valor da string em um objeto como se estivesse chamando new String(s). Esse objeto herda métodos da string e é utilizado para solucionar a referência da propriedade. Uma vez solucionada a propriedade, o objeto recentemente criado é descartado. Números e valores booleanos têm métodos pelo mesmo motivo que as strings: um objeto temporário é criado com a construtora Number() ou Boolean() e o método é solucionado por meio desse objeto temporário. Não existem objetos empacotadores (wrapper) para os valores null e undefined: qualquer tentativa de acessar uma propriedade de um desses valores causa um TypeError . Os objetos temporários criados ao se acessar uma propriedade de uma string, número ou valor booleano são conhecidos como objetos empacotadores (wrapper) e ocasionalmente pode ser necessário diferenciar um valor de string de um objeto String ou um número ou valor booleano de um objeto Number ou Boolean. Normalmente, contudo, os objetos wrapper podem ser considerados como um detalhe de implementação e não é necessário pensar neles. Basta saber que string, número e valores booleanos diferem de objetos pois suas propriedades são somente para leitura e que não é possível definir novas propriedades neles.

---

## 3.7 - VALORES PRIMITIVOS IMUTÁVEIS E REFERÊNCIAS DE OBJETO MUTÁVEIS

Em JavaScript existe uma diferença fundamental entre valores primitivos (undefined , null , booleanos, números e strings) e objetos (incluindo arrays e funções). Os valores primitivos são imutáveis: não há como alterar (ou “mudar”) um valor primitivo. No entanto, não é tão óbvio para strings. Como as strings são como arrays de caracteres, você poderia pensar que é possível alterar o caractere em qualquer índice especificado. Na verdade, JavaScript não permite isso e todos os métodos de string que parecem retornar uma string modificada estão na verdade retornando um novo valor de string. Os valores primitivos também são comparados por valor: dois valores são iguais somente se têm o mesmo valor. Isso parece recorrente para números, booleanos, null e undefined : não há outra maneira de compará-los. Novamente, contudo, não é tão óbvio para strings. Se dois valores distintos de string são comparados, JavaScript os trata como iguais se, e somente se, tiverem o mesmo comprimento e se o caractere em cada índice for o mesmo.

---

## 3.8 - CONVERSÃO DE TIPOS

Se a JavaScript quer uma string, ela converte qualquer valor fornecido em uma string. Se a JavaScript quer um número, ela tenta converter o valor fornecido para um número (ou para NaN , caso não consiga fazer uma conversão significativa).

### 3.8.1 - Conversões e igualdade

Como JavaScript pode converter valores com flexibilidade, seu operador de igualdade == também é flexível em sua noção de igualdade.

### 3.8.2 - Conversões explícitas

Embora JavaScript faça muitas conversões de tipo automaticamente, às vezes será necessário realizar uma conversão explícita ou talvez você prefira usar as conversões de forma explícita para manter o código mais claro. O modo mais simples de fazer uma conversão de tipo explícita é usar as funções Boolean(), Number(), String() ou Object(). Certos operadores de JavaScript fazem conversões de tipo implícitas e às vezes são usados para propósitos de conversão de tipo. Se um operando do operador + é uma string, ele converte o outro em uma string. O operador unário + converte seu operando em um número. E o operador unário ! converte seu operando em um valor booleano e o nega.

### 3.8.3 - Conversões e objeto para valores primitivos

As conversões de objeto para valores booleanos são simples: todos os objetos (inclusive arrays e funções) são convertidos em true. Isso vale até para objetos wrapper: new Boolean(false) é um objeto e não um valor primitivo e também é convertido em true. As conversões de objeto para string e de objeto para número são feitas chamando-se um método do objeto a ser convertido. Isso é complicado pelo fato de que os objetos em JavaScript têm dois métodos diferentes que realizam conversões e também é complicado por alguns casos especiais.

---

## 3.9 - DECLARAÇÃO DE VARIÁVEL

Antes de utilizar uma variável em um programa JavaScript, você deve declará-la. As variáveis são declaradas com a palavra-chave var. Também é possível declarar várias variáveis com a mesma palavra-chave var e pode-se combinar a declaração da variável com sua inicialização.

### 3.9.1 - Declarações repetidas e omitidas

É válido e inofensivo declarar uma variável mais de uma vez com a instrução var. Se a declaração repetida tem um inicializador, ela atua como se fosse simplesmente uma instrução de atribuição.

---

## 3.10 - ESCOPO DE VARIÁVEL

O escopo de uma variável é a região do código-fonte de seu programa em que ela está definida. Uma variável global tem escopo global; ela está definida em toda parte de seu código JavaScript. Por outro lado, as variáveis declaradas dentro de uma função estão definidas somente dentro do corpo da função. Elas são variáveis locais e têm escopo local. Os parâmetros de função também contam como variáveis locais e estão definidos somente dentro do corpo da função.

### 3.10.1 - Escopo de função e içamento

Em algumas linguagens de programação semelhantes ao C, cada bloco de código dentro de chaves tem seu escopo próprio e as variáveis não são visíveis fora do bloco em que são declaradas. Isso é chamado de escopo de bloco e JavaScript não tem esse conceito. Em vez disso, JavaScript utiliza escopo de função: as variáveis são visíveis dentro da função em que são definidas e dentro de qualquer função que esteja aninhada dentro dessa função. O escopo de função em JavaScript significa que todas as variáveis declaradas dentro de uma função são visíveis por todo o corpo da função. Curiosamente, isso significa que as variáveis são visíveis mesmo antes de serem declaradas. Essa característica de JavaScript é informalmente conhecida como içamento: o código JavaScript se comporta como se todas as declarações de variável em uma função (mas não em qualquer atribuição associada) fossem “içadas” para o topo da função.

### 3.10.2 - Variáveis como propriedade

Quando se declara uma variável global em JavaScript, o que se está fazendo realmente é definindo uma propriedade do objeto global. Se var é utilizada para declarar a variável, a propriedade criada não pode ser configurada, ou seja, não pode ser excluída com o operador delete. Já observamos que, se o modo restrito não está sendo usado e um valor é atribuído a uma variável não declarada, JavaScript cria uma variável global automaticamente. As variáveis criadas dessa maneira são propriedades normais e configuráveis do objeto global e podem ser excluídas.

### 3.10.3 - O encadeamento de escopo

JavaScript é uma linguagem com escopo léxico: o escopo de uma variável pode ser considerado como o conjunto de linhas de código-fonte para as quais a variável está definida. As variáveis globais estão definidas para todo o programa. As variáveis locais estão definidas para toda a função na qual são declaradas e também dentro de qualquer função aninhada dentro dessa função. Se pensarmos nas variáveis locais como propriedades de algum tipo de objeto definido pela implementação, então há outro modo de considerarmos o escopo das variáveis. Cada trecho de código JavaScript (código ou funções globais) tem um encadeamento de escopo associado. Esse encadeamento de escopo é uma lista ou encadeamento de objetos que define as variáveis que estão “no escopo” para esse código. Quando JavaScript precisa pesquisar o valor de uma variável x (um processo chamado solução de variável), ela começa examinando o primeiro objeto do encadeamento.
