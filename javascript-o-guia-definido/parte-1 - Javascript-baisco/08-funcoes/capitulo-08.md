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

---

## 8.4 - FUNÇÕES COM VALORES

---
