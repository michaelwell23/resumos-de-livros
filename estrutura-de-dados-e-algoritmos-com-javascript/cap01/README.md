# CAAPÍTULO 01: JAVASCRIPT – UMA VISÃO GERAL RÁPIDA

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

--

## 1.12 - FUNÇÕES
