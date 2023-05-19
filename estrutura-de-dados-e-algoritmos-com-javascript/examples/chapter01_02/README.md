# CAPÍTULO 01: JAVASCRIPT – UMA VISÃO GERAL RÁPIDA

- JavaScript é extremamente eficaz;
- É utilizado no frontend e também no backend, utiliando o NodeJS;
- Pode ser utilizado para desenvolvimento de dispositivos móveis;
- Pode ser utilizado para escrever aplicações desktop compatíveis com Linix, Mac OS e Windows;
- Também pode ser utilizado para dispositivos embarcados e dispositivos para IoT;

---

## 1.1 - ESTRUTURA DE DADOS E ALGORIMOS EM JAVASCRIPT

Conhercer as estruturas de dados e os algoritmos é muito importante, por dois motivos:

- Estrutura de dados e os algoritmos são capazes de resolver os problemas mais comuns de modo eficiente
  - Diferença na qualidade código;
  - Escolher estrutura de dados ou algoritmo incorreto, poderá gerar alguns problemas de desempenho;
- Outro ponto é que os algoritmos são estudados de uma maneira introdutória. É preciso ter um conhecimnto mais afundo sobre esses assuntos, principalmente se a pessoa deseja trabalhar para uma grande empresa;

---

## 1.2 - CONFIGURANDO O AMBIENTE

Para executar os exemplos dos livros, é necessário ter instalado no computador:

- Um navegador, como Google Chrome ou Firefox;
- Um editor de texto, como VS Code ou Atom;
- E um servidor web, essa parte é opsional;

---

## 1.3 - BÁSICO SOBRE JAVASCRIPT

Para começar, precisamos criar um arquivo HTML para escrever os códigos, podemos inserir os códigos dentro da tag `script` do HTML ou criar um arquivo separado com a extensão .js e referenciar o nosso arquivo, dentro HTML utilizando a tag `<script src="">`, utilizando um caminho relativo até o local do arquivo JavaScript.

---

## 1.4 - VARIÁVEIS

- Variáveis armazenam dados que pode ser definidos, atualizado e recuperados sempre que necessário;
- Os tipos de dados disponíveis em JavaScript são: `number`, `string`, `boolean`, `function` e `object`, `undefined` e `null` junto com arrays, datas e expressões regulares;
  - Um valor `null` quer dizer sem valor;
  - Um valor undefined significa que a variável foi declarada, mas que ainda não tem um valor atribuido a ela;
- A linguagem JavaScript não é fortemente tipada, pois não podemos definir o tipo da variável em sua declaração;
- Para declara uma variável usamos a palavra reservada `var`;
- Para definir os tipos das variáveis podemos utilizar o `TypeScript`;
- Se para exibir os valores das variáveis declaradas podemos utilizar o `console.log(NOME_DA_VARIÁVEL)`;

---

## 1.5 - ESCOPO DASVARIÁVEIS

- Escopo se refere ao local em que podemos acessar a variável no algoritmo;
- As variáveis pode ser loais ou globais;
- Variáveis globais em JavaScript são prejudiciais;
- A qualidade do código-fonte JavaScript é avaliada de acordo com o número de variáveis e funções globais;
- Sempre que possível, é bom evitar as variáveis globais.

---

## 1.6 - OPERADORES

- Operadores são utilizados para realizar qualquer operação em uma linguagem de programação;
- Os tipois de operadores são:
  - aritméticos;
    - `+` : adição
    - `-` : subtração
    - `*` : multiplicação
    - `/` : divisão
    - `%` : módulo (resto de uma operação de divisão)
    - `++` : incremento
    - `--` : decremento
  - atribuição;
    - `=`: atribuição
    - `+=`: atribuição de soma
    - `-=`: atribuição de subtração
    - `*=`: atribuição de multiplicação
    - `/=`: atribuição de divisão
    - `%=`: atribuição de resto
  - comparação;
    - `==`: igual a
    - `===`: igual extrito (tanto o valor quanto o tipo do objeto)
    - `!=`: diferente de
    - `>`: maior que
    - `>=`: maior ou igual a
    - `<=`: menor que
    - `<=`: menor ou igual a
  - lógicos;
    - `&&`: E
    - `||`: Ou
    - `!`: Negação
  - bit a bit;
    - `&`: E
    - `|`: Ou
    - `~`: Negação
    - `^`: Ou exclusivo (xor)
    - `<<`: Deslocamento para a esquerda
    - `>>`: Deslocamento para a direita
  - unários;
- operador `typeof` devolve o tipo de variável ou expressão;
- há dois tipos de dados em JavaScript:
  - tipos primitivos;
    - null (nulo), undefined (indefinido), string,number (número), boolean (booleano) e symbol (símbolo);
  - tipos de dados derivados/objetos;
    - objetos JavaScript, incluindo funções, arrays e expressões regulares;
- a linguagem JavaScript também aceita o operador `delete`, que apaga uma propriedade de um objeto;

---

## 1.7 - VERDADEIRO OU FALSO

- Em JavaScript `true` e `false` são um pouco complicados;
- Uma string é valida como true;

---

## 1.8 - FUNÇÕES DOS OPERADORES DE IGUALDADE

- Quando `==` é usado, os valore poderão ser considerados iguais mesmo se forem de tipos diferentes.

|     TYPE(X)      | TYPE(Y)          | RESULTADO           |
| :--------------: | :--------------- | ------------------- |
|       null       | undefined        | true                |
|    undefined     | null             | true                |
|      Number      | String           | x == toNumber(y)    |
|      String      | Number           | toNumber(x) == y    |
|     Boolean      | Any              | toNumber(x) == y    |
|       Any        | Boolean          | x == toNUmber(y)    |
| String ou Number | Object           | x == toPrimitive(y) |
|      Object      | String ou Number | toPrimitive(x) == y |

- Se x e y forem do mesmo tipo, então JavaScript usará o método `equals` para comparar os dois valores ou objetos;
- Qualquer outra combinação não listada, resultará em `false`;
- Quanto ao operador `===`, é muito mais simples.
- Se estivermos comparando dois valores de tipos diferentes, o resultado será sempre `false`.

| TYPE(X) | VALORES                                   | RESULTADO |
| :-----: | :---------------------------------------- | --------- |
| Number  | x tem o mesmo valor que y (mas não é NaN) | true      |
|  Strig  | x e y tê caracteres idênticos             | true      |
| Boolean | x e y são ambos true ou são ambos false   | true      |
| Object  | x e y referenciam o mesmo objeto          | true      |

---

## 1.9 - ESTRUTURA DE CONTROLE

- Instruções condicionais são tratadas com `if...else` e `switch`;
- Laços são tratados com as construções `while`, `do...while` e `for`;

---

## 1.10 - INSTRUÇÕES CONDICIONAIS

- Temos a instrução condicional `if..else`;
  - Podemos usar a instrução `if` se quisermos executar um bloco de código somente se a condição for `true`;
  - Podemos usar a instrução `if...else` se quisermos executar um bloco de código e a condição for true,ou outro quando caso a condição for `false`;
  - Intruções `if...else` também pode ser representadas por um operador ternário (`? = if`, `: = else`);
  - Se tivermos várias expreções, podemos usar `if...else` diversas vezes para executar blocos de código diferente de acordo com condições distintas;
- Também temos a condicional `switch`;
  - `Switch` utiliza das palavras reservadas `case` e `break`;
    - a `case` determina se o valor `switch` é igual ao valor da cláusula;
    - a instrução `break`impede que a instrução `switch` execute o restante da instrução;
  - Também temos o `default`, que executa por padrão caso nenhuma condição das intruções `case`seja `true`;

---

## 1.11 - LAÇOS

- Os laços são usados com frequência quando trabalhamos com arrays;
  - O laço `for` é constituido de um contador de laço que recebe um valor numérico; em seguida, a variável é comparada com outro valor. E por fim, o valor numérico é incrementado ou decrementado;
  - No laço `while`, o bloco dentro do código será executado enquanto a condição for verdadeira;
  - Já no laço `do...while`, é muito parecido com o laço `while`, a diferença é que no `while` a condição é avaliada antes da execução do bloco, enquanto no laço `do...while`, ela é avaliada depois do bloco ter sido executado;
    - Além disso, o laço `do...while` garante que o bloco seja executado pelo menos uma vez;

---

## 1.12 - FUNÇÕES

- Funções são muito importantes quando trabalhamos com JavaScript. Podemos definir uma função da seguinte forma:

```js
function sayHello() {
  console.log('Hello');
}

sayHello(); //execução da função
```

- Podemos passar argumentos para a função. Argumento são variáveis com as quais se supõe que a função fará algo.

```js
function output(text) {
  console.log(text);
}

output('Hello'); //execução da função
```

- Uma função também pode devolver um valor, por exemplo: calcular a soma de dois numero espeficados e devolver o resultado. E podemos usá-la dessa forma:

```js
function sum(num1, num2) {
  return num1 + num2;
}

var result = sum(23, 56);
output(result);
```

---

## 1.13 - PROGRAMAÇÃO ORIENTADA A OBJETOS EM JAVASCRIPT

- Objetos JavaScript são coleções bem símples de pares nome-valor. Há duas maneiras de criar um objeto simples em JavaScript:

```js
var obj = new Object(); //primeira forma
var ob = {}; // segunda forma

// objeto completo
obj = {
  name: {
    first: 'Gandalf',
    last: 'the Gray'
  },
  address: 'Middle Earth';
}
```

- Para declarar um objeto , pares [chave, valor], são usados, no quais a chave pode ser considerada um atributo do objeto, e o valor é o valor da propriedade.

- Em POO (Programaçãi Orientada a Objetos), um objeto é uma instência de uma classe. Uma classse define as características do objeto.

- Podemos declarar uma clase (construtor), além de instaciá-lo e por fim, acessar as suas propriedades e atualizá-la deste modo:

```js
function Book(title, page, isbn) {
  this.title = title;
  this.page = page;
  this.isbn = isbn;
}

// instanciando classes
var book = new Book('title', 'pag', 'isbn');

// acessando e atualizando propriedades
console.log(book.title); // exibe o titulo do livro
book.title = 'new title'; // atualizado o valor do título do livro
console.log(book.title); // exibe o valor atualizado
```

- Uma classe também pode contr funções (chamado de `métodos`). Podemos declarar e usar uma função/método conforme mostra o código e declarar funções diretamente na definição da classe a seguir:

```js
Book.prototype.printTitle = function () {
  console.log(this.title);
};

// funções declaradas diretamente na definição da classe
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}
book.printIsbn();
```

---

## 1.14 - DEPURAÇÃO E FERRAMENTAS

- A deupração é muito útil para ajudar a encontar bugs em um código, mas também pode ajudar a executar o código mais lentamente, a fim de que seja possível ver tudo que está acontecendo;
- Firefox, Safari, Edge e Chrome têm suporta para deupração;
- Podemos usar qualquer editor de textos, há outras ferramentes ótimas que podem ser utilizadas e ajudá-lo a ser mais produtivo quando trabalhar com JavaScript. São elas: `WebStorm`, `Sblime Text`, `Atom` e `Visual Studio Code`.

---

## 1.15 - DEPURAÇÃO COM O VSCODE

1. No editor, abra o arquivo JavaScript que você quer depurar, passe o ponteiro do mouse próximo aos números das linhas e clique na linha para adicionar um breakpoint (conforme mostrado pelo 1 na imagem de tela anterior). É nesse local que o depurador vai parar para que possamos analisar o código.

2. Depois que o Web Server estiver pronto e executando, clique na view de Debug (2), selecione Chrome (3) e clique no ícone Play (Executar) para iniciar o processo de depuração.

3. O Chrome será aberto automaticamente. Navegue para o exemplo
   desejado a fim de evocar o código que queremos depurar. Depois que alinha na qual adicionamos o breakpoint for alcançada pelo depurador, o processo será interrompido e o editor receberá o foco.

4. Podemos controlar como o código é depurado usando a barra de
   ferramentas superior (4). É possível retomar o processo, ir para uma chamada de método ou para a próxima linha, reiniciar e parar o processo. É o mesmo comportamento que temos no depurador do Chrome e em outros navegadores.

5. A vantagem de usar essa funcionalidade de depuração embutida é que podemos fazer tudo a partir do editor (escrever código, depurar e testar). Além disso, temos as variáveis declaradas e a pilha de chamadas (call stack), podemos observar variáveis e expressões (5), passar o mouse sobre uma variável para ver o seu valor atual (6) e observar a saída do console (7).

---

## RESUMO

Neste capítulo, aprendemos a configurar o ambiente de desenvolvimento para que possamos criar ou executar os exemplos deste livro. Também vimos o básico sobre a linguagem JavaScript, necessário para dar início ao desenvolvimento dos algoritmos e das estruturas de dados incluídos neste livro.
No próximo capítulo, conheceremos as novas funcionalidades introduzidas no JavaScript a partir de 2015, e veremos como tirar proveito da tipagem
estática e da verificação de erros usando TypeScript.

---

[CAPÍTULO 02]()
