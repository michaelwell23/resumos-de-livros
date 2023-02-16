# ESTRUTURA DE DADOS: OBJETOS E ARRAYS

Objetos nos permitem agrupar valores (incluíndo outros objetos) e, consequentemente, construit estruturas mais complexas. Esse capítulo irá adicionar uma compreensão básica sobre estrutura de dados. Ao final, você saberá o suficiente para começar a escrever prgramas úteis. O capítulo iŕa trabalhar com programas mais ou menos realista, introduzindo conceitos a medida em que eles se aplicam ao problema em questão. Os exemplos serão constuido em cima de funções e variáveis que foram apresentadas no início do texto.

---

## O ESQUILO-HOMEM

De vez em quando, geralmente entre oito e dez da noite, Jacques se tranforma em um pequeno roedor peludo com uma cauda espessa. Ele tem que se preocupar em não ser comido pelo gato do vizinho. Por isso resolveu trancar as portas e as janelas do seu quarto durante a noite e colocar algumas nozes no chão para manter-se ocupado.

Isso resolve o problema do gato. Mesmo assim, Jacques ainda sofre com sua condição. As ocorrências irregulares das tranformações o faz suspeitar de que talvez possa ter algua coisa que as ativam.

Mudando para uma abordagem mais cientifica, Jacques pretende começar a manter um registro diário de tudo o que faz e se ele se tranformou. Com essas informações, ele espera ser capaz de diminuit e limitar as condições que ativam as transformações. A primeira coisa ele deverá fazer é criar uma estrutura de dados para armazenar essas informações.

---

## 4.1 - CONJUNTOS DE DADOS

Para trabalhar com um pedaço de dados digitais, primeiramente precisamos encontrar uma maneira de representá-los na memória da nossa máquina. O JavaScript fornece um tipo de dado específico para armazenar uma sequência de valores. Ele é chamado de `array` e é escrito como uma lista de valores separados por vírgulas e entre colchetes.

```js
var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]); // → 3
console.log(listOfNumbers[1 - 1]); // → 2
```

A notação para acessar elementos contidos em um `array` também usa colchetes. Um par de colchetes imediatamente após uma expressão, contendo outra expressão entre colchetes, irá procurar o elemento contido na expressão à esqueda que está na posição dada pelo _índice_ determinado pela expressão entre colchetes.

### INDEXAÇÃO DE ARRAYS

O primeiro índice de uma _array_ é o número zero e não o número um. Portanto, o primeiro elemento pode ser acessado usando `listOfNumbers[0]`. A contagem baseada em zero é uma tradição de longa data no mundo da tecnologia e, desde que seja seguida constantemente, ela funciona bem.

---

## 4.2 - PROPRIEDADES
