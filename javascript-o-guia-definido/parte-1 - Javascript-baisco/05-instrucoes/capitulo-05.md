# CAPÍTULO 5 - INTRUÇÕES

Instruções são sentenças ou comandos em JavaScript. Assim como as sentenças nos idiomas humanos são terminadas e separadas por pontos-finais, as instruções em JavaScript são terminadas com ponto e vírgula. As expressões são avaliadas para produzir um valor, mas as instruções são executadas para fazer algo acontecer. Uma maneira de “fazer algo acontecer” é avaliar uma expressão que tenha efeitos colaterais. As expressões com efeitos colaterais, como as atribuições e as chamadas de função, podem aparecer sozinhas como instruções e, quando utilizadas dessa maneira, são conhecidas como instruções de expressão. Uma categoria similar de instruções são as instruções de declaração, que declaram novas variáveis e definem novas funções. Os programas JavaScript nada mais são do que uma sequência de instruções a serem executadas. Por padrão, o interpretador JavaScript executa essas instruções uma após a outra, na ordem em que são escritas. Outro modo de “fazer algo acontecer” é alterar essa ordem de execução padrão, sendo que JavaScript tem várias instruções ou estruturas de controle que fazem justamente isso:
• As condicionais são instruções como if e switch que fazem o interpretador JavaScript executar ou pular outras instruções, dependendo do valor de uma expressão.
• Laços são instruções como while e for que executam outras instruções repetidas vezes.
• Saltos são instruções como break , return e throw que fazem o interpretador pular para outra parte do programa.

---

## 5.1 - INSTRUÇÕES DE EXPRESSÃO

Os tipos simples de isntruções em JavaScript são as expressões que tên efeito colaterias. As intruções de atribuição são uma categoria importante de intruções de expressão. Os operadores de incremento (++) e decremento (--), são relacionados às intruções de atribuição. Eles tem efeito colateral de alterar o valor de uma variável, exatamente como se fosse feita uma atribuição. O operador delete tem o importante efeito colateral de excluir uma propriedade de um objeto. As chamadas de função são outra categoria importante de instrução de expressão. Essas chamadas de função no lado do cliente são expressões, mas tê efeito colaterais que afetam o navegador Web e são utilizadas aqui como instruções. Se uma função não tem qualquer efeito colateral, não tem sentido chamá-la, a não ser que faça parte de uma expressão maior ou de uma instrução de atribuição.

---

## 5.2 - INSTRUÇÕES COMPOSTAS E VAZIAS

Um bloco de instruções combina várias instruções em uma única instrução composta. Um bloco de instruções é simplesmente uma sequência de instruções colocadas dentro de chaves. Assim, as linhas a seguir atuam como uma única instrução e podem ser usadas em qualquer lugar em que JavaScript espere uma única instrução. Combinar instruções em blocos de instrução maiores é extremamente comum na programação JavaScript. Assim como as expressões frequentemente contêm subexpressões, muitas instruções JavaScript contêm subinstruções. Formalmente, a sintaxe de JavaScript em geral permite uma única subinstrução. Uma instrução composta permite utilizar várias instruções onde a sintaxe de JavaScript espera uma única instrução. A instrução vazia é o oposto: ela permite não colocar nenhuma instrução onde uma é esperada. O interpretador JavaScript não faz nada ao executar uma instrução vazia. Ocasionalmente, a instrução vazia é útil quando se quer criar um laço com corpo vazio.

---

## 5.3 - INSTRUÇÕES DE DECLARAÇÃO

var e function são instruções de declaração – elas declaram ou definem variáveis e funções. Essas instruções definem identificadores (nomes de variável e função) que podem ser usados em qualquer parte de seu programa e atribuem valores a esses identificadores. As instruções de declaração sozinhas não fazem muita coisa, mas criando variáveis e funções, o que é importante, elas definem o significado das outras instruções de seu programa.

### 5.3.1 - var

A instrução `var` declara uma (ou mais) variável. A palavra-chave var é seguida por uma lista separada com vírgula de variáveis a declarar; opcionalmenete, cada variável da lista pode ter uma expressão inicializadora especificando seu valor inicial. Se uma instrução var aparece dentro do corpo de uma função, ela define locais com escopo nessa função. Quando var é usada em código de nível superior, ela declara variáveis globais, visíveis em todo o programa JavaScript. Se nenhum inicialidor é especificado para uma variável com a sintrução var, o valor inicial da variável é `undefined`. As varíáveis são definidas por todo o script ou função na qual são declaradas – suas declarações são “içadas” para o início do script ou função. No entanto, a inicialização ocorre no local da instrução var e o valor da variável é undefined antes desse ponto no código.

### 5.3.2 - function

A palavra-chave function é usada para definir funções. Toda função precisa de um identificador após a palavra-chave `function`, esse identificador é o nome da função que está sendo declarada. O nome da função é seguido por uma lista separada com vírgulas de nomes de parâmetro entre parênteses. Esses identificadores podem ser usados dentro do corpo da função para se referir aos valores de argumento passados quando a função é chamada. O corpo da função é composto de qualquer número de instruções JavaScript, contidas entre chaves. Essas instruções não são executadas quando a função é definida. Em vez disso, elas são associadas ao novo objeto função, para execução quando a função for chamada. As chaves são uma parte obrigatória da instrução function . Ao contrário dos blocos de instrução utilizados com laços while e outras instruções, o corpo de uma função exige chaves, mesmo que consista em apenas uma instrução.

---

## 5.4 - CONDICIONAIS

As instruções condicionais executam ou pulam outras instruções, dependendo do valor de uma expressão especificada. Essas instruções são os pontos de decisão de seu código e às vezes também são conhecidas como “ramificações”. Se você imaginar um interpretador JavaScript seguindo um caminho através de seu código, as instruções condicionais são os lugares onde o código se ramifica em dois ou mais caminhos e o interpretador deve escolher qual caminho seguir.

### 5.4.1 - if

A instrução if é a instrução de controle fundamental que permite à linguagem JavaScript tomar decisões ou, mais precisamente, executar instruções condicionalmente. A primeira forma do if a expressão é avaliada, se o valor resultante é verdadeiro, a instrução é executada. Se a expressão é falasa, a instrução não é executada e nada é exibido no console.

```js
if (expressão) instrução;
```

A segunda forma da instrução if introduz uma cláusula else , que é executada outro bloco de código quando a expressão é false.

```js
if (expressão) instrução1;
else instrução2;
```

### 5.4.2 - else if

A instrução if/else avalia uma expressão e executa um código ou outro, dependendo do resultado. Um modo de executar vários códigos de instrução é utilizando else if. else if não é realmente uma isntrução JavaScript, mas apenas um idioma de programação frequentimente utilizado que resulta da repetição de instruções if/else:

```js
if (expressão) {
  instrução1;
} else if (expressão) {
  instrução2;
} else if (expressão) {
  instrução3;
} else {
  instrução4;
}
```

A instrução else if trata-se apenas de uma série de instruções if , onde cada if sucessivo faz parte da cláusula else da instrução anterior. Usar o idioma else if é preferível e mais legível do que escrever essas instruções em sua forma totalmente aninhada e sintaticamente equivalente.

### 5.4.3 - switch

Uma instrução if causa uma ramificação no fluxo de execução de um programa e é possível usar o idioma else if para fazer uma ramificação de vários caminhos. Contudo, essa não é a melhor solução quando todas as ramificações dependem do valor da mesma expressão. Nesse caso, é um desperdício
avaliar essa expressão repetidamente em várias instruções if. A instrução switch trata exatamente dessa situação. A palavra-chave switch é seguida de uma expressão entre parênteses e de um bloco de código entre chaves:

```js
switch(expressão) {
instruções
}
```

Contudo, a sintaxe completa de uma instrução switch é mais complexa do que isso. Vários locais no bloco de código são rotulados com a palavra-chave case , seguida de uma expressão e dois-pontos. case é como uma instrução rotulada, exceto que, em vez de dar um nome à instrução rotulada, ela associa uma expressão à instrução. Quando uma instrução switch é executada, ela calcula o valor da expressão e, então, procura um rótulo case cuja expressão seja avaliada com o mesmo valor (onde a semelhança é determinada pelo operador === ). Se encontra um, ela começa a executar o bloco de
código da instrução rotulada por case . Se não encontra um case com um valor correspondente, ela procura uma instrução rotulada com default: . Se não houver um rótulo default: , a instrução switch pula o bloco de código completamente.

---

## 5.5 - LAÇOS

As instruções de laço são àquelas que desviam esse caminho para si mesmas a fim de repetir partes de seu código. JavaScript tem quatro instruções de laço: while , do/while , for e for/in . As subseções a seguir explicam cada uma delas, uma por vez. Um uso comum para laços é na iteração pelos elementos de um array.

### 5.5.1 - while

a instrução while é o laço básico da linguagem. Ela tem a seguinte sintaxe:

```js
while (expressão) instrução;
```

Para executar uma instrução while , o interpretador primeiramente avalia a expressão . Se o valor da expressão é falso, o interpretador pula a instrução que serve de corpo do laço e vai para a instrução seguinte no programa. Se, por outro lado, a expressão é verdadeira, o interpretador
executa a instrução e repete, pulando de volta para o início do laço e avaliando a expressão novamente . Outra maneira de dizer isso é que o interpretador executa a instrução repetidamente enquanto a expressão é verdadeira.

### 5.5.2 - do/while

O laço do/while é como um laço while , exceto que a expressão do laço é testada no final e não no início do laço. Isso significa que o corpo do laço sempre é executado pelo menos uma vez. A sintaxe é:

```js
do instrução;
while (expressão);
```

O laço do/while é menos comumente usado do que seu primo while – na prática, é um tanto incomum ter certeza de que se quer executar um laço pelo menos uma vez. Existem duas diferenças sintáticas entre o laço do/while e o laço while normal. Primeiramente, o laço do exige a palavra-chave do (para marcar o início do laço) e a palavra-chave while (para marcar o fim e introduzir a condição do laço). Além disso, o laço do sempre deve ser terminado com um ponto e vírgula. O laço while não precisa de ponto e vírgula se o corpo do laço estiver colocado entre chaves.

### 5.5.3 - for

A instrução for fornece uma construção de laço frequentemente mais conveniente do que a instrução while . A instrução for simplifica os laços que seguem um padrão comum. A maioria dos laços tem uma variável contadora de algum tipo. Essa variável é inicializada antes que o laço comece e é testada antes de cada iteração do laço. Por fim, a variável contadora é incrementada ou atualizada de algum modo no final do corpo do laço, imediatamente antes que a variável seja novamente testada. A instrução for codifica cada uma dessas três manipulações como uma expressão e torna essas expressões uma parte explícita da sintaxe do laço:

```js
for (inicialização; teste; incremento) instrução;
```

inicialização , teste e incremento são três expressões (separadas com pontos e vírgulas) que são responsáveis por inicializar, testar e incrementar a variável de laço. Colocar todas elas na primeira linha do laço facilita entender o que um laço for está fazendo e evita erros, como esquecer de inicializar ou incrementar a variável de laço.

### 5,5,4 - for/in

A instrução for/in utiliza a palavra-chave for , mas é um tipo de laço completamente diferente do laço for normal. Um laço for/in é como segue:

```js
for (variável in objeto) instrução;
```

variável normalmente nomeia uma variável, mas pode ser qualquer expressão que seja avaliada como lvalue ou uma instrução var que declare uma única variável – deve ser algo apropriado para o lado esquerdo de uma expressão de atribuição. objeto é uma expressão avaliada como um objeto. Como sempre, instrução é a instrução ou bloco de instruções que serve como corpo do laço. Para executar uma instrução for/in, o interpretador JavaScript primeiramente avalia a expressão objeto. Se for avaliada como null ou undefined, o interpretador pula o laço e passa para a instrução seguinte 3. Se a expressão é avaliada como um valor primitivo, esse valor é convertido em seu objeto empacotador equivalente. Caso contrário, a expressão já é um objeto. Agora o interpretador executa o corpo do laço, uma vez para cada propriedade enumerável do objeto. Contudo, antes de cada iteração, o interpretador avalia a expressão variável e atribui o nome da propriedade (um valor de string) a ela.

#### 5.5.4.1 - Ordem de enumeração de propriedades

A especificação ECMAScript não define a ordem na qual o laço for/in enumera as propriedades de um objeto. Na prática, contudo, as implementações de JavaScript de todos os principais fornecedores de navegador enumeram as propriedades de objetos simples de acordo como foram definidas, com as propriedades mais antigas enumeradas primeiro. Se um objeto foi criado como objeto literal, sua ordem de enumeração é a mesma das propriedades que aparecem no literal. A ordem de enumeração se torna dependente da implementação (e não serve indistintamente) se:
• o objeto herda propriedades enumeráveis;
• o objeto tem propriedades que são índices inteiros de array;
• delete foi usado para excluir propriedades existentes do objeto; ou
• Object.defineProperty() ou métodos semelhantes foram usados para alterar atributos da propriedade do objeto.

---

## 5.6 - SALTOS

Outra categoria de instruções de JavaScript são as instruções de salto. Conforme o nome lembra, elas fazem o interpretador JavaScript saltar para um novo local no código-fonte. A instrução break faz o interpretador saltar para o final de um laço ou para outra instrução. continue faz o interpretador pular o restante do corpo de um laço e voltar ao início de um laço para começar uma nova iteração. A instrução return faz o interpretador saltar de uma chamada de função de volta para o código que a chamou e também fornece o valor para a chamada. A instrução throw provoca (ou “lança”) uma exceção e foi projetada para trabalhar com a instrução try/catch/finally , a qual estabelece um bloco de código de tratamento de exceção. Esse é um tipo complicado de instrução de salto: quando uma exceção é lançada, o interpretador pula para a rotina de tratamento de exceção circundante mais próxima, a qual pode estar na mesma função ou acima na pilha de chamada, em uma função invocadora.

### 5.6.1 - Instruções rotuladas

Qualquer instrução pode ser rotulada por ser precedida por um identificador e dois-pontos:

```js
identificador: instrução;
```

Rotulando uma instrução, você dá a ela um nome que pode ser usado para se referir a ela em qualquer parte de seu programa. É possível rotular qualquer instrução, embora só seja útil rotular instruções que tenham corpos, como laços e condicionais. Dando um nome a um laço, você pode usar
instruções break e continue dentro do corpo do laço para sair dele ou para pular diretamente para o seu início, a fim de começar a próxima iteração. break e continue são as únicas instruções em JavaScript que utilizam rótulos;O identificador utilizado para rotular uma instrução pode ser qualquer identificador JavaScript válido, que não seja uma palavra reservada. O espaço de nomes para rótulos é diferente do espaço de nomes para variáveis e funções; portanto, pode-se usar o mesmo identificador como rótulo de instrução e como nome de variável ou função. Os rótulos de instrução são definidos somente dentro da instrução na qual são aplicados (e dentro de suas subinstruções, evidentemente). Uma instrução pode não ter o mesmo rótulo de uma instrução que a contém, mas duas instruções podem ter o mesmo rótulo, desde que nenhuma delas esteja aninhada dentro da outra.

### 5.6.2 - break

A instrução break , utilizada sozinha, faz com que o laço ou instrução switch circundante mais interna seja abandonada imediatamente. Como ela é usada para sair de um laço ou switch para sair, essa forma da instrução break é válida apenas dentro de uma dessas instruções. Em laços, ela é normalmente utilizada para sair prematuramente, quando, por qualquer motivo, não há mais qualquer necessidade de completar o laço. Quando um laço tem condições de término complexas, frequentemente é mais fácil implementar algumas dessas condições com instruções break do que tentar expressar todas elas em uma única expressão de laço.

### 5.6.3 - continue

A instrução continue é semelhante à instrução break . No entanto, em vez de sair de um laço, continue reinicia um laço na próxima iteração. A instrução continue , tanto em sua forma rotulada como na não rotulada, só pode ser usada dentro do corpo de um laço. Utilizá-la em qualquer outro lugar causa erro de sintaxe. Quando a instrução continue é executada, a iteração atual do laço circundante é terminada e a próxima iteração começa.

### 5.6.4 - return

Lembre-se de que as chamadas de função são expressões e de que todas as expressões têm valores. Uma instrução return dentro de uma função especifica o valor das chamadas dessa função. A instrução return só pode aparecer dentro do corpo de uma função. É erro de sintaxe ela aparecer
em qualquer outro lugar. Quando a instrução return é executada, a função que a contém retorna o valor de expressão para sua chamadora. Sem uma instrução return , uma chamada de função simplesmente executa cada uma das instruções do corpo da função até chegar ao fim da função e, então, retorna para sua chamadora. Nesse caso, a expressão de invocação é avaliada como undefined. A instrução return aparece frequentemente como a última instrução de uma função, mas não precisa ser a última: uma função retorna para sua chamadora quando uma instrução return é executada, mesmo que ainda restem outras instruções no corpo da função.

### 5.6.5 - thow

Uma exceção é um sinal indicando que ocorreu algum tipo de condição excepcional ou erro. Disparar uma exceção é sinalizar tal erro ou condição excepcional.JavaScript, as exceções são lançadas quando ocorre um erro em tempo de execução e quando o programa lança uma explicitamente, usando a instrução throw. Expressão pode ser avaliada com um valor de qualquer tipo. Pode-se lançar um número representando um código de erro ou uma string contendo uma mensagem de erro legível para seres humanos. A classe Error e suas subclasses são usadas quando o próprio interpretador JavaScript lança um erro, e você também pode usá-las. Um objeto Error tem uma propriedade name que especifica o tipo de erro e uma propriedade message que contém a string passada para a função construtora (consulte a classe Error na seção de referência).

### 5.6.6 - try/catch/finally

A instrução try/catch/finally é o mecanismo de tratamento de exceção de JavaScript. A cláusula try dessa instrução simplesmente define o bloco de código cujas exceções devem ser tratadas. O bloco try é seguido de uma cláusula catch , a qual é um bloco de instruções que são chamadas quan-
do ocorre uma exceção em qualquer lugar dentro do bloco try . A cláusula catch é seguida por um bloco finally contendo o código de limpeza que é garantidamente executado, independente do que aconteça no bloco try . Os blocos catch e finally são opcionais, mas um bloco try deve estar acompanhado de pelo menos um desses blocos.

---

## 5.7 - INSTRUÇÕES DIVERSAS

Esta seção descreve as três instruções restantes de JavaScript – with , debugger e use strict.

### 5.7.1 - with

A instrução with é usada para ampliar o encadeamento de escopo temporariamente. Ela tem a seguinte sintaxe:

```js
with (objeto) instrução;
```

Essa instrução adiciona objeto na frente do encadeamento de escopo, executa instrução e, então, restaura o encadeamento de escopo ao seu estado original. A instrução with é proibida no modo restrito e deve ser considerada desa- provada no modo não restrito: evite usá-la, quando possível. Um código JavaScript que utiliza with é difícil de otimizar e é provável que seja executado mais lentamente do que um código equivalente escrito sem a instrução with.

### 5.7.2 - debugger

A instrução debugger normalmente não faz nada. No entanto, se um programa depurador estiver disponível e em execução, então uma implementação pode (mas não é obrigada a) executar algum tipo de ação de depuração. Na prática, essa instrução atua como um ponto de interrupção: a execução do código JavaScript para e você pode usar o depurador para imprimir valores de variáveis, examinar a pilha de chamada, etc.

### 5.7.3 - "use strict"

"use strict" é uma diretiva introduzida em ECMAScript 5. As diretivas não são instruções (mas são parecidas o suficiente para que "use strict" seja documentada aqui). Existem duas diferenças importantes entre a diretiva "use strict" e as instruções normais:
• Ela não inclui qualquer palavra-chave da linguagem: a diretiva é apenas uma instrução de expressão que consiste em uma string literal especial (entre aspas simples ou duplas).
• Ela só pode aparecer no início de um script ou no início do corpo de uma função, antes que qualquer instrução real tenha aparecido.
O objetivo de uma diretiva "use strict" é indicar que o código seguinte (no script ou função) é código restrito. O código de nível superior (não função) de um script é código restrito se o script tem uma diretiva "use strict" . O corpo de uma função é código restrito se está definido dentro de código restrito ou se tem uma diretiva "use strict".

---

## 5.8 - RESUMO DAS INTRUÇÕES JAVASCRIPT

Este capítulo apresentou cada uma das instruções da linguagem JavaScript. A Tabela 5-1 as resume,
listando a sintaxe e o objetivo de cada uma.

| Intrução | Sintaxe                                                                                              | Objetivo                                                               |
| -------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| break    | break [rótulo];                                                                                      | Sai do laço ou switch mais interno ou da instrução circundante nomeada |
| case     | case expressão:                                                                                      | Rotula uma instrução dentro de um switch                               |
| continue | continue [rótulo];                                                                                   | Começa a próxima iteração do laço mais interno ou do laço nomeado      |
| debugger | debugger;                                                                                            | Ponto de interrupção de depurador                                      |
| default  | default:                                                                                             | Rotula a instrução padrão dentro de um switch                          |
| do/while | do instrução while (expressão);                                                                      | Uma alternativa para o laço while                                      |
| empty    | ;                                                                                                    | Não faz nada                                                           |
| for      | for(inic; teste; incr) instrução                                                                     | Um laço fácil de usar                                                  |
| for/in   | for (var in objeto) instrução                                                                        | Enumera as propriedades de objeto                                      |
| function | function nome([parâm[,...]]) { corpo }                                                               | Declara uma função chamada nome                                        |
| if/else  | if (expr) instrução1 [else instrução2]                                                               | Executa instrução1 ou instrução2                                       |
| label    | rótulo: instrução                                                                                    | Dá à instrução o nome rótulo                                           |
| return   | return [expressão];                                                                                  | Retorna um valor de uma função                                         |
| switch   | switch (expressão) { instruções }                                                                    | Ramificação de múltiplos caminhos para rótulos case ou default:        |
| throw    | throw expressão;                                                                                     | Lança uma exceção                                                      |
| try      | try { instruções } [catch { instruções de rotina de tratamento }] [finally { instruções de limpeza}] | Trata exceções                                                         |
| use      | strict "use strict";                                                                                 | Aplica restrições do modo restrito em um script ou função              |
| var      | var nome [ = expr] [ ,... ];                                                                         | Declara e inicializa uma ou mais variáveis                             |
| while    | while (expressão) instrução                                                                          | Uma construção de laço básica                                          |
| with     | with (objeto) instrução                                                                              | Amplia o encadeamento de escopo (proibida no modo restrito)            |
