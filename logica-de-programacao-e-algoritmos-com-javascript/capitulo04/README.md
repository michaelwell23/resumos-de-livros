# CAPÍTULO 04 - REPETIÇÕES

Estruturas de repetições permitem fazer com que um ou mais comandos em um programa sejam executados várias vezes. É importante ressaltar, que essas repetições necessitam de um ponto de interrupção, que pode ocorrer a partir de uma ação do usuário ou a partir dse uma configuração do sistema, como a indicação de um limite para a digitação de senhas incorretas. Para construir as estruturas de repetição em um programa, a linguagem JavaScript dispõe dos comandos `for`, `while` e `do… while`. Pequenas particularidades fazem com que o uso de cada um deles seja mais adequado para uma ou outra situação.

---

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

---

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

---

## 4.3 REPETIÇÃO COM TESTE NO FINAL: LAÇO DO. WHILE

Outra forma de criar laços de repetição é utilizando o `do… while`.

```js
do {
  comandos;
} while (condição);
```

A diferença entre o `while`e `do.. while`é que com o comando `while`, a condição é verificada no início, enquanto o comando do.. while, a condição é verificada no final. Ou seja, o do… while, fica garantindo que uma vez, no mínimo, os comandos que pertencem ao laço sejam executados. Optamos por utilizar esse `while` e `do… while` quando não sabemos previamente quantas vezes a repetição vai ocorrer. [AQUI](./exemplos/ex4_3/index.html) no exemplo o do… while é utilizado para validar uma entrada de dados do cliente.

![exemplo 4.3](/.github/cap04/exe4_3.png)

---

## 4.4 INTERRUPÇÕES NOS LAÇOS (BREAK E CONTINUE)

Há dois comandos especiais para serem utilizados na estrutura de repetição. O comando `break`sai do laço de repetição, enquanto o continue retorna ao início do laço. Esses dois comando auxiliam no controle de execução dos comando do loop.

![image 4.4](/.github/cap04/exe4_4.a.png)

Os comandos `break` e `continue` podem ser utilizados nas três estruturas de repetição. [AQUI](/capitulo04/exemplos/ex4_4/index.html) você pode ver o exemplo de um programa que demonstra o funcionamento dos comandos break e continue. O programa realiza a leitura de um número e, caso o número for par ele exibe o dobro do número e se for ímpar, o triplo.

![exemplo 4.4.b](/.github/cap04/exe4_4.b.png)

---

## 4.5 CONTADORES E ACUMULADORES

O uso de contadores e acumuladores em um programa permite a exibição de contagens e totalizações. Os contadores e acumuladores possuem duas características principais:

- A variável contadora ou acumuladora deve receber uma atribuição inicial;
- A variável contadores ou acumuladora deve receber ela mesma mais algo de valor;

A diferença entre os contadores e os acumuladores é que o contador recebe ele mesmo mais 1, enquanto o acumulador recebe ele mesmo mais uma variável. O programa [Contas do Mês - Exemplo 4.5.a](/capitulo04/exemplos/ex4_5/ex4_5.a) apresenta um exemplo de uso dos contadores e acumuladores. Ele faz a leitura de contas que devem ser pagas por um usuário. As contas são exibidas e no final da listagem o número de contas e a soma dos valores são destacados.

![Exemplo 4.5](/.github/cap04/exe4_5.a.png)

Podemos também utilizar os contadores e acumuladores para auxiliar na exibição de uma resposta. O [Programa de números primos - Exemplo 4.5.b](/capitulo04/exemplos/ex4_5/ex4_5.b) recebe um número e informa se ele é primo ou não. Nele, o uso de uma variável contadora é utilizada para obter a quantidade de divisores do número informado pelo usuário.

![Exemplo 4.5](/.github/cap04/exe4_5.b.png)

---

## 4.6 DEPURAR PROGRAMAS (DETECTAR ERROS)

Em programação, depuração de programas é o nome dado ao processo de detectar e remover erros no código. Existem dois tipos principais de erros em um programa: erros de sintaxe e erros lógicos. Os erros de sintaxe impedem o programa de ser executado e refere-se à digitação incorreta de algum comando ou nome de variável. Os recursos de depuração dos browsers permitem identificar tanto erros de sintaxe quanto erros lógicos. Para analisar o recurso de depuração de programas JavaScript, o programa [Fábrica de estrelas - exemplo 4.6](/capitulo04/exemplos/) deve ler um número que corresponde à quantidade de símbolos que devem ser preenchidos.

![Exemplo 4.5](/.github/cap04/exe4_6.a.png)

Para acessar o depurador, podemos carregar a página e, no menu superior direito, selecionar `Mais Ferramentas/ Ferramentas de Desenvolvedor` e em seguida `Sources`. Para verificar um erro, foi adicionado um erro, assim ao selecionar o arquivo JavaScript e pressionar F5, podemos ver a exibição de uma mensagem indicando o erro, que no caso é a variável `estrelas` que não foi definida.

![Exemplo 4.5](/.github/cap04/exe4_6.b.png)

Os erros lógicos, são mais difíceis de serem detectados. Nesse caso, o programa é executado normalmente, mas não apresenta resultados. Para isso, podemos utilizar os `Breakpoints` e a `janela Watch`. Um `Breakpoint` define um ponto de parada em uma linha do programa. O programa executa até aquela linha e, então, pode-se verificar o valor das variáveis até aquele ponto. Vários pontos de parada podem ser adicionados, para que o programa seja executado e assim analisar detalhadamente o funcionamento. Para criar um Breakpoint basta clicar na margem esquerda do código, sobre o número da linha. Informar um número no campo de formulário da página HTML e clicar no botão para executar o programa JS novamente, assim, a execução vai até a linha onde foi adicionado o breakpoint. F8 pode ser pressionado para prosseguir e utilizar a `janela Watch` para indicar as variáveis que se deseja observar na execução do programa. Para inserir uma variável para análise, é só clicar no “+” ao lado do Watch.
Existem vários outros recursos que podem ser investigados no depurador de programas, como o uso do `console.log()`. Contudo, a maioria dos problemas podem ser detectados a partir do uso dos breakpoints e pela observação do conteúdo que as variáveis vão assumir no decorrer do programa. O depurador é um importante aliado dos programadores, portanto, explore-o com frequência.

![Exemplo 4.5](/.github/cap04/exe4_6.c.png)

---

## 4.7 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [Aqui](/capitulo04/exemplos/ex4_7-exercicio/)

![Exercício a](/.github/cap04/exe4_7.a.png)
![Exercício b](/.github/cap04/exe4_7.b.png)
![Exercício c](/.github/cap04/exe4_7.c.png)
![Exercício d](/.github/cap04/exe4_7.d.png)

---

## 4.8 CONSIDERAÇÕES FINAIS

Os laços de repetição permitem fazer com que alguns comandos sejam executados várias vezes em um programa. O comando for contém uma variável de controle e sua sintaxe inclui três instruções: O valor inicial, a condição a ser verificada para que a repetição continue e o incremento ou decremento da variável a cada volta. Ele é geralmente utilizado quando se sabe o início de sua composição e o número de vezes em que o laço será executado.
Os comandos while e do.. while também permitem criar estrutura de repetições. A diferença entre eles é que no while a condição é testada no início do laço, enquanto no do… while a condição é testada no final. Essas estruturas, por sua vez, são geralmente utilizadas quando não sabemos previamente quantas vezes o comando da estrutura será executado.
Existem dois comandos especiais que podem ser utilizados nos laços de repetição: Break e Continue. O Break executa o comando após o laço, se houver. Já o Continue gera um incremento ou decremento da variável de controle no comando for. Esses comandos confere ao programador maior controle do fluxo de execução dos comandos na repetição.
Podemos utilizar os contadores e acumuladores,para realizar a contagem ou a soma de valores manipulados na estrutura de repetição. Eles possuem duas características: devem ser inicializados geralmente em 0 e recebem na atribuição deles mesmo mais algum valor. Nos contadores, o incremento é constante e nos acumuladores, uma variável.
Um importante auxílio aos programadores é o uso do debug. Ele permite identificar erros de sintaxe e de lógica em um programa. Para isso, o processo de depuração dispõe de recursos como o uso dos breakpoints e da janela watch para análise e identificação dos problemas.
