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
