# CAPÍTULO 04 - REPETIÇÕES

Estruturas de repetições permitem fazer com que um ou mais comandos em um programa sejam executados várias vezes. É importante ressaltar, que essas repetições necessitam de um ponto de interrupção, que pode ocorrer a partir de uma ação do usuário ou a partir dse uma configuração do sistema, como a indicação de um limite para a digitação de senhas incorretas. Para construir as estruturas de repetição em um programa, a linguagem JavaScript dispõe dos comandos `for`, `while` e `do… while`. Pequenas particularidades fazem com que o uso de cada um deles seja mais adequado para uma ou outra situação.

## 4.1 REPETIÇÃO COM VARIÁVEL DE CONTROLE: LAÇO FOR

A sintaxe do comando `for`é composta de três instruções, que definem: 1) o valor inicial da variável de controle; 2) a condição que determina se a repetição deve ou não continuar; c) o incremento ou decremento da variável de controle.

![exemplo 4.1](/.github/cap04/exe4_1.a.png)

Entre as chaves `{}` devem ser inseridos os comandos que serão executados repetidas vezes. O incremento `i = i + 1` pode ser abreviado por `i++`. A repetição é controlada por uma variável que inicia em 1 e aumenta até 10. Outros valores podem ser indicados como uma variável de controle inicial 10 e decrementar até 1. Nesse caso, utiliza-se `ì = i - 1`, ou `i–`

Na execução do for, quando se realiza uma volta completa, o valor da variável é incrementado e essa sequência de passos é repetida até que o valor da condição seja verdadeiro.
Para melhor fixar os conceitos do foram criados os projetos. O primeiro programa deve ler um número e apresentar a tabuada desse número. O código para este exemplo está contido [AQUI](/capitulo04/exemplos/ex4_1/ex4_1.1/).

![exemplo 4.1.a](/.github/cap04/exe4_1.b.png);

O segundo exemplo ilustra a montagem de uma estrutura de repetição decrescente, com o valor inicial informado pelo usuário. E O códipo para este exemplo você pode encontrar [AQUI](/capitulo04/exemplos/ex4_1/ex4_1.2/)

![exemplo 4.1.b](/.github/cap04/exe4_1.c.png);

O comando `for`é particularmente interessante de se utilizar quando soubermos o número de repetições que devem ocorrer no programa. O exemplo da tabuada ilustra bem essa situação. Independente do número informado pelo usuário, a exibição da tabuada vai de 1 até 10. No segundo exemplo, não sabemos previamente qual será o número informado pelo usuário, ou seja, quantas vezes a repetição vai ocorrer, mas essa informação é obtida pelo programa antes da montagem da repetição, portanto o programa dispõe da informação para montar o for.

## 4.2 REPETIÇÃO COM TESTE NO INÍCIO: LAÇO WHILE

Um laço de repetição também pode ser criado utilizando o comando `while`, que realiza um teste condicional no início para verificar se os comandos do laço serão ou não executados. A sintaxe do comando `while` é:

```js
while (condição) {
  comandos;
}
```

O while é uma estrutura de repetição que pode ser utilizada em programas que manipulam arquivos, para repetir a leitura de uma linha enquanto não atingir o final do arquivo. Elas também podem ser utilizadas em operações desenvolvidas com o `for`. Podemos utilizar o Programa Número decrescente e substituir o comando for pelo comando while:

```js
//declara e inicializa a variável i
var i = numero;

//enquanto i maior que 0
while (i > 0) {
  //acumula em resposta os números em ordem decrescente
  resposta = resposta + i + ', ';

  //substitui 1 no valor da variável i (i=i-1)
  i--;
}
```

Você pode ver o programa completo clicando [AQUI](/capitulo04/exemplos/ex4_2)

## 4.3 REPETIÇÃO COM TESTE NO FINAL: LAÇO DO. WHILE

Outra forma de criar laços de repetição é utilizando o `do… while`.

```js
do {
  comandos;
} while (condição);
```

A diferença entre o `while`e `do.. while`é que com o comando `while`, a condição é verificada no início, enquanto o comando do.. while, a condição é verificada no final. Ou seja, o do… while, fica garantindo que uma vez, no mínimo, os comandos que pertencem ao laço sejam executados. Optamos por utilizar esse `while` e `do… while` quando não sabemos previamente quantas vezes a repetição vai ocorrer. [AQUI](./exemplos/ex4_3/index.html) no exemplo o do… while é utilizado para validar uma entrada de dados do cliente.

![exemplo 4.3](/.github/cap04/exe4_3.png)

## 4.4 INTERRUPÇÕES NOS LAÇOS (BREAK E CONTINUE)

Há dois comandos especiais para serem utilizados na estrutura de repetição. O comando `break`sai do laço de repetição, enquanto o continue retorna ao início do laço. Esses dois comando auxiliam no controle de execução dos comando do loop.

![image 4.4](/.github/cap04/exe4_4.a.png)

Os comandos `break` e `continue` podem ser utilizados nas três estruturas de repetição. [AQUI](/capitulo04/exemplos/ex4_4/index.html) você pode ver o exemplo de um programa que demonstra o funcionamento dos comandos break e continue. O programa realiza a leitura de um número e, caso o número for par ele exibe o dobro do número e se for ímpar, o triplo.

![exemplo 4.4.b](/.github/cap04/exe4_4.b.png)
