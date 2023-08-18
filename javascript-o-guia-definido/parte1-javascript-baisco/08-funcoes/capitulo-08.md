# CAPÍTULO 08 - FUNÇÕES

Uma função é um bloco de código JavaScript definido uma vez, mas que pode ser executado (ou chamado) qualquer número de vezes. As funções em JavaScript são parametrizadas: uma definição de função pode incluir uma lista de identificadores, conhecidos como parâmetros, que funcionam como variáveis locais para o corpo da função. As chamadas de função fornecem valores (ou argumentos) para os parâmetros da função. Frequentemente, as funções utilizam seus valores de argumento para calcular um valor de retorno, que se torna o valor da expressão da chamada de função.

Em JavaScript, as funções são objetos e podem ser manipuladas pelos programas. JavaScript pode atribuir funções a variáveis e passá-las para outras funções, por exemplo. Como as funções são objetos, é possível definir propriedades e até mesmo chamar métodos a partir delas.

As definições de função JavaScript podem ser aninhadas dentro de outras funções e têm acesso a qualquer variável que esteja no escopo onde são definidas. Isso significa que as funções em JavaScript são fechadas em relação às suas variáveis e isso possibilita o uso de técnicas de programação importantes e poderosas.

---

## 8.1 - DEFINIÇÕES E FUNÇÕES

As funções são definidas com palavra-chave `function`, que pode sr usada em uma expressão de definição de função ou em uma instrução de declaração de função. Em uma ou outra forma, as definições de função começam com a palavra-chave function, segida dos seguintes components:

- Um identificado que dá nome a função.
- Um par de parênteses em tono de uma lsta de zero ou mais identificadores separados com vírgula. Esses identificadores são nomes de parâmetros da função e se comportam como variáveis locais dentro do corpo da função.
- Um par de chaves contendo zero ou mais intruções JavaScript.

A instrução de declaração de função na verdade declara uma variável e atribui a ela um objeto função. Uma expressão de definição de função, por outro lado, não declara uma variável. É permitido um nome para funções (como na função de fatorial anterior) que precisem fazer referência a si mesmas. Se uma expressão de definição de função inclui um nome, o escopo de função local dessa função vai incluir um vínculo desse nome com o objeto função.

### 8.1.1 - Funções aninhadas

Em JavaScript, as funções podem ser aninhadas dentro de outra funções. O interessante a respeito das funções aninhadas são suas regras de escopo de variável: elas podem acessar os parâmetros e as variáveis da função dentro das quais estão alinhadas. As intruções de declaração de função não são instruções verdadeiras e a especificação ECMAScript só as permite como instruções de nível superior. Elas podem aparecer em cóigo grabal ou dentro de outras funções, mas não podem aparecer dentro de laços, consicionais ou intruções try/catch/finally ou with.

---

## 8.2 - CHAMADA DE FUNÇÕES

O código JavaScript que constitui o corpo de uma função não é executado quando a função é definida, mas quando ela é chamada. Em JavaScript as funções podem ser chamadas de quatro maneiras:

- como funções,
- como métodos,
- como construtoras e
- indiretamente, por meio de seus métodos call() e apply() .

### 8.2.1 - chamada de função

As funções são chamadas como funções ou como métodos com uma expressão de invocação. Uma expressão de invocação consiste em uma expressão de função que é avaliada como um objeto função, seguida por um parêntese de abertura, uma lista de zero ou mais expressões de argumento separada com vírgulas e um parêntese de fechamento. Se a expressão de função é uma expressão de acesso à propriedade – se a função é a propriedade de um objeto ou um elemento de um array –, então ela é uma expressão de invocação de método. Em uma chamada, cada expressão de argumento (aquelas entre os parênteses) é avaliada e os valores resultantes se tornam os argumentos da função. Esses valores são atribuídos aos parâmetros nomeados na definição da função. No corpo da função, uma referência a um parâmetro é avaliada com o valor do argumento correspondente. Para uma chamada de função normal, o valor de retorno da função torna-se o valor da expressão de invocação. Se a função retorna porque o interpretador chega no final, o valor de retorno é undefined. Se a função retorna porque o interpretador executa uma instrução return , o valor de retorno é o valor da expressão que vem após a instrução return ou undefined , caso a instrução return não tenha valor algum.

### 8.2.2 - Chamada de método

Um método nada mais é do que uma função JavaScript armazenada em uma propriedade de um objeto. As chamadas de método diferem das chamadas de função de uma maneira importante: o contexto da chamada. As expressões de acesso à propriedade consistem em duas partes: um objeto (neste caso, o ) e um nome de propriedade ( m ). Em uma expressão de invocação de método como essa, o objeto o se torna o contexto da chamada e o corpo da função pode se referir a esse objeto usando a palavra-chave this. A maioria das chamadas de método usa a notação de ponto para acesso à propriedade, mas as ex-
pressões de acesso à propriedade que utilizam colchetes também causam chamadas de método. Os métodos e a palavra-chave this são fundamentais para o paradigma da programação orientada a objetos. Qualquer função que seja utilizada como método recebe um argumento implícito – o objeto por meio do qual ela é chamada. Normalmente, um método efetua algum tipo de operação nesse objeto e a sintaxe de chamada de método é uma maneira elegante de expressar o fato de que uma função está operando em um objeto.

### 8.2.3 - Chamada de construtora

Se uma chamada de função ou de método é precedida pela palavra-chave new , então ela é uma chamada de construtora. As chamadas de construtora diferem das chamadas de função e de método normais na forma como tratam os argumentos, o contexto da chamada e o valor de retorno. Se uma chamada de construtora inclui uma lista de argumentos entre parênteses, essas expressões de argumento são avaliadas e passadas para a função da mesma maneira como seriam para chamadas de função e de método. Mas se uma construtora não tem parâmetros, então a sintaxe de chamada de construtora de JavaScript permite que a lista de argumentos e os parênteses sejam inteiramente omitidos. Uma chamada de construtora cria um novo objeto vazio que herda da propriedade prototype da construtora. Funções construtoras se destinam a inicializar objetos, sendo que o objeto recém-criado é utilizado como contexto da chamada, de modo que a função construtora pode se referir a ela com a palavra-chave this.

### 8.2.4 - Chamada indireta

Em JavaScript as funções são objetos e como todos os objetos em JavaScript, elas têm métodos. Dois desses métodos, call() e apply() , chamam a função indiretamente. Os dois métodos permitem especificar explicitamente o valor de this para a chamada, ou seja, é possível chamar qualquer função
como método de qualquer objeto, mesmo que não seja realmente um método desse objeto.

---

## 8.3 - ARGUMENTO E PARÂMETROS DE FFUNÇÃO

As subseções a seguir descrevem o que acontece quando uma função é chamada com menos argumentos do que parâmetros declarados ou com mais argumentos do que parâmetros declarados. Elas também demonstram como é possível testar explicitamente o tipo dos argumentos da função, caso seja necessário garantir que uma função não seja chamada com argumentos incompatíveis.

### 8.3.1 - Parâmetros Opcionais

Quando uma função é chamada com menos argumentos do que parâmetros declarados, os parâmetros adicionais são configurados com o valor undefined . Frequentemente é útil escrever funções de modo que alguns argumentos sejam opcionais e possam ser omitidos na chamada da função. Para fazer isso, deve-se atribuir um valor padrão razoável aos parâmetros omitidos.

### 8.3.2 - Listas de argumentos de comprimento variável: o objeto Arguments

O objeto Arguments é um objeto semelhante a um array que permite aos valores de argumento passados para a função serem recuperados por número, em vez de por nome. Suponha que você defina uma função f que espera receber um único argumento, x. Se essa função for chamada com dois argumentos, o primeiro argumento vai estar acessível dentro da função pelo nome de parâmetro x ou como arguments[0]. O segundo argumento vai estar acessível somente como arguments[1]. Além disso, assim como os arrays reais, arguments tem uma propriedade length que especifica o número de elementos que ele contém. Um uso importante do objeto Arguments é na escrita de funções que operam sobre qualquer número de argumentos.

#### 8.3.2.1 - As propriedades callee e caller

Além de seus elementos de array, o objeto Arguments define as propriedades callee e caller. No modo restrito de ECMAScript 5, é garantido que essas propriedades lançam um TypeError se você tenta lê-las ou gravá-las. No entanto, fora do modo restrito, o padrão ECMAScript diz que a propriedade callee se refere à função que está sendo executada no momento. caller é uma propriedade não padronizada, mas comumente implementada, que se refere à função que chamou àquela.

### 8.3.3 - Usando propriedade de objeto como argumentos

Para que o programador não precise consultar a documentação cada vez que utilizar a função, pode ser apropriado permitir que os argumentos sejam passados como pares nome/valor em qualquer ordem. Para implementar esse estilo de chamada de método, defina sua função de modo a esperar um único objeto como argumento e faça os usuários da função passarem um objeto que defina os pares nome/valor exigidos.

### 8.3.4 - Tipos de argumentos

Os parâmetros de método em JavaScript não têm tipos declarados e não é feita verificação de tipo nos valores passados para uma função. Você pode ajudar a autodocumenta seu código escolhendo nomes descritivos para argumentos de função e incluindo os tipos de argumento nos comentários. Para argumentos opcionais, você pode incluir a palavra “opcional” no comentário. E quando um método pode aceitar qualquer número de argumentos, você pode usar reticências. JavaScript faz conversão de tipo de forma livre, quando necessário. Assim, se você escreve uma função que espera um argumento de string e então chama essa função com um valor de algum outro tipo, o valor passado é simplesmente convertido em string quando a função tenta utilizá-lo como string. Contudo, isso nem sempre é verdade. A não ser que você esteja escrevendo uma função “descartável” que vai ser chamada apenas uma ou duas vezes, pode ser interessante adicionar código para verificar os tipos dos argumentos. É melhor que uma função falhe imediata e previsivelmente quando são passados valores incompatíveis do que comece a executar e falhe com uma mensagem de erro que provavelmente não será clara.

---

## 8.4 - FUNÇÕES COM VALORES

As características mais importantes das funções são que elas podem ser definidas e chamadas. Definição e chamada de função são recursos sintáticos de JavaScript e na maioria das outras linguagens de programação. Em JavaScript, no entanto, as funções não são apenas sintaxe, mas também valores,ou seja, podem ser atribuídas a variáveis, armazenadas nas propriedades de objetos ou nos elementos de arrays, passadas como argumentos para funções, etc. Quando uma funçãi é definida, um novo objeto função é criado e atrbuido à variável. O nome de uma função é irrelevante; é simplismente o nome de uma variável que se refere ao objeto função. Essa função pode ser atribuida a outra variável e ainda funcionar da mesma maneira. As funções também podem ser atribuídas a propriedades de objeto, em vez de a variáveis. As funções nem mesmo exigem nomes, assim como quando são atribuídas a elementos de array.

### 8.4.1 - Definindo suas próprias propriedade de função

Em JavaScript funções não são valores primitivos, mas sim um tipo de objeto especializado, ou seja, elas podem ter propriedades. Quando uma função precisa de uma variável “estática” cujo valor persiste entre as chamadas, muitas vezes é conveniente utilizar uma propriedade da função, em vez de
congestionar o espaço de nomes definindo uma variável global. A função nunca deve retornar o mesmo valor duas vezes. Para conseguir isso, a função precisa monitorar os valores que já retornou e essa informação deve persistir entre as chamadas de função. Você poderia armazenar essa informação em uma variável global, mas isso é desnecessário, pois a informação é usada apenas pela própria função. É melhor armazená-la em uma propriedade do objeto Function.

---

## 8.5 - FUNÇÕES COM ESPAÇO DE NOMES

JavaScript tem escopo de função: as variáveis declaradas dentro de uma função são visíveis por toda a função (inclusive dentro de funções aninhadas), mas não existem fora da função. As variáveis declaradas fora de uma função são variáveis globais e são visíveis por todo o seu programa JavaScript. JavaScript não define maneira alguma de declarar variáveis que são ocultas dentro de um único bloco de código e, por esse motivo, às vezes é útil definir uma função para agir simplesmente como espaço de nomes temporário, no qual é possível definir variáveis sem poluir o espaço de nomes global.

---

## 8.6 - CLOUSURES

Para implementar escopo léxico, o estado interno de um objeto função em JavaScript deve incluir não apenas o código da função, mas também uma referência ao encadeamento de escopo corrente. Essa combinação de objeto função e um escopo (um conjunto de vínculos de variável) no qual as variáveis da função são solucionadas, é chamado de closure na literatura da ciência da computação. Tecnicamente, em JavaScript todas funções são closures: elas são objetos e têm um encadeamento de escopo associado. A maioria das funções é chamada usando o mesmo encadeamento de escopo que estava em vigor quando a função foi definida e não importa que exista uma closure envolvida. As closures se tornam interessantes quando são chamadas em um encadeamento de escopo diferente do que estava em vigor quando foram definidas. Lembre-se da regra fundamental do escopo léxico: em JavaScript as funções são executadas usando o encadeamento de escopo que estava em vigor quando foram definidas.

---

## 8.7 - PROPRIEDADES DE FUNÇÃO, MÉTODOS E CONTRUTORA

Vimos que nos programas JavaScript as funções são valores. O operador typeof retorna a string “function” quando aplicado a uma função, mas na verdade as funções são um tipo especializado de objeto em JavaScript. Como as funções são objetos, podem ter propriedades e métodos, exatamente
como qualquer outro objeto.

### 8.7.1 - A propriedade length

Dentro do corpo de uma função, arguments.length especifica o número de argumentos que foram passados para a função. Contudo, a propriedade length de uma função em si tem um significado diferente. Essa propriedade somente de leitura retorna a aridade da função – o número de parâmetros que ela declara em sua lista de parâmetros, que normalmente é o número de argumentos esperados pela função.

### 8.7.2 - A propriedade prototype

Toda função tem uma propriedade prototype que se refere a um objeto conhecido como objeto protótipo. Cada função tem um objeto protótipo diferente. Quando uma função é usada como construtora, o objeto recém-criado herda propriedades do objeto protótipo.

### 8.7.3 - Os métodos call() e apply()

call() e apply() permitem chamar uma função indiretamente como se fosse um método de algum outro objeto. O primeiro argumento de call() e de apply() é o objeto em que a função vai ser chamada; esse argumento é o contexto da chamada e se torna o valor da palavra-chave this dentro do corpo da função. Qualquer argumento para call() , após o primeiro argumento de contexto da chamada, é o valor passado para a função chamada. O método apply() é como o método call() , exceto que os argumentos a serem passados para a função são especificados como um array. Se uma função é definida para aceitar um número de argumentos arbitrário, o método apply() permite chamar essa função no conteúdo de um array de comprimento arbitrário.

### 8.7.4 - O método bind()

O método bind() foi adicionado em ECMAScript 5, mas é fácil simulá-lo em ECMAScript 3. Conforme o nome lembra, o principal objetivo de bind() é vincular uma função a um objeto. Quando o método bind() é chamado em uma função f e um objeto o é passado, o método retorna uma nova função. Chamar a nova função (como função) chama a função original f como método de o. Os argumentos passados para a nova função são passados para a função original. O método bind() de ECMAScript 5 faz mais do que apenas vincular uma função a um objeto. Ele também faz aplicação parcial: os argumentos passados para bind() após o primeiro são vinculados junto com o valor de this . A aplicação parcial é uma técnica comum na programação funcional e
às vezes é chamada de currying.

### 8.7.5 - O método toString()

Em JavaScript assim como todos os objetos, as funções têm um método toString(). A especificação ECMAScript exige que esse método retorne uma string que siga a sintaxe da instrução de declara- ção de função. Na prática, a maioria (mas não todas) das implementações desse método toString()retorna o código-fonte completo da função.

### 8.7.6 - A construtora Function()

As funções normalmente são definidas com a palavra-chave function, ou na forma de uma instrução de definição de função ou de uma expressão de função literal. Mas as funções também podem ser definidas com a construtora Function(). A construtora Function() espera qualquer número de argumentos de string. O último argumento é o texto do corpo da função; ele pode conter instruções arbitrárias em JavaScript, separadas umas das
outras por pontos e vírgulas. Todos os outros argumentos da construtora são strings que especificam os nomes de parâmetros da função. Se estiver definindo uma função que não recebe argumentos, basta passar uma única string – o corpo da função – para a construtora.

### 8.7.7 - Objetos que podem ser chamados

Um objeto que pode ser chamado é qualquer objeto que possa ser chamado em uma expressão de invocação de função. Todas as funções podem ser chamadas, mas nem todos os objetos que podem ser chamados são funções. Os objetos que podem ser chamados e que não são funções são encontrados em duas situações nas implementações atuais de JavaScript. Primeiramente, o navegador Web IE (versão 8 e anteriores) implementa métodos do lado do cliente, como Window.alert() e Document.getElementsById(), usando objetos hospedeiros que podem ser chamados, em vez de objetos Function nativos. Esses métodos funcionam da mesma maneira no IE e em outros navegadores, mas não são realmente objetos Function. A outra forma comum de objetos que podem ser chamados são os objetos RegExp – em muitos navegadores, pode-se chamar um objeto RegExp diretamente como um atalho para chamar seu método exec(). Esse é um recurso completamente não padronizado de JavaScript que foi introduzido pela Netscape e copiado por outros fornecedores por questão de compatibilidade.

---

## 8.8 - PROGRAMAÇÃO FUNCIONAL

JavaScript não é uma linguagem de programação funcional como Lisp ou Haskell, mas o fato de ela poder manipular funções como objetos significa que podemos usar técnicas de programação funcional em JavaScript. Os métodos de array de ECMAScript 5, como map() e reduce() , são especialmente adequados para um estilo de programação funcional.

### 8.8.1 - Processando arrays com funções

Suponha que temos um array de números e queremos calcular a média e o desvio padrão desses valores. Podemos efetuar esses cálculos no estilo funcional conciso, usando os métodos de array map() e reduce(). E se estivéssemos usando ECMAScript 3 e não tivéssemos acesso a esses métodos de array podemos definir nossas próprias funções map() e reduce() que utilizam os métodos internos, caso eles existam.

### 8.8.2 - Funções de alta ordem

Uma função de alta ordem é um função que opera sobre funções, recebendo uma ou mais funções como argumento e retornando uma nova função.

### 8.8.3 - Aplicação parcial de função

O método bind() aplica parcialmente os argumentos da esquerda – isto é, os argumentos passados para bind() são colocados no início da
lista de argumentos passada para a função original. Mas também é possível aplicar parcialmente os argumentos da direita. A aplicação parcial se torna ainda mais interessante quando a combinamos com outras funções de mais alta ordem.

### 8.8.4 - Memoização

Na Seção 8.4.1, definimos uma função de fatorial que colocava na cache os resultados calculados anteriormente. Na programação funcional, esse tipo de uso de cache é denominado memoização. A função memoize() cria um novo objeto para usar como cache e atribui esse objeto a uma variável local, de modo que é privado (na closure da) da função retornada. A função retornada converte seu array de argumentos em uma string e usa essa string como nome de propriedade do objeto cache. Se um valor existe na cache, ela o retorna diretamente.
