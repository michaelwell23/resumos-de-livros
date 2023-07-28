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
