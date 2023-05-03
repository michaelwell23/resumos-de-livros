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
