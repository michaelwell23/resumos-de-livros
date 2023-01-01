# CAPÍTULO 03 - CONDIÇÕES

Diversas são as situações em que um programa em que é necessário criar uma condição para indicar qual tarefa deve ser executada. Para definir uma condição em um programa, as linguagens de programação utilizam instruções próprias para essa finalidade. Os comandos utilizados para a leitura de dados, realização de operações e apresentação de mensagens são os mesmos. Podemos utilizar as estruturas condicionais nos trechos de código que realizam a entrada, o processamento ou a saída de dados do programa. Portanto, será necessário adicionar Às etapas de entrada, processamento e saída do programa estruturas que definem condições. Uma condição será definida com base no conteúdo de uma variável. Depois de definirmos condições simples, é preciso avançar um pouco e utilizar os operadores lógicos, que permitem criar condições para analisar duas ou mais comparações em uma mesma instrução. E o raciocínio lógico continua essencial para a montagem dessas estruturas.

---

## 3.1 IF... ELSE

Uma forma de melhor representar o ensino de algoritmos e lógica de programação, é utilizando `fluxogramas`. Eles são úteis para facilitar a compreensão do fluxo dos comandos em uma estrutura de controle.

![exemplo fluxograma](/.github/cap03/exe3_2.1.png)

As setas no início e no final, indicam que há comandos antes e após a estrutura condicional. Uma condição é parte de um programa. Ela pode ser criada para controlar apenas se um cálculo deve ser feito com uma fórmula ou outra.

Para criar essa estrutura pode-se utilizar os comandos `if… else`. Eles possuem algumas variações. É possível utilizar apenas o `if` para apresentar uma única condição. E também criar vários comandos `else` para verificar várias outras condições. Abaixo podemos ver a estrutura do `if… else`.

```js
// definição simples
if (condição) {
  comandos
}

// definição usando if... else
if(condição){
    comando Verdadeiro
}else {
    comando falso
}

//múltiplas condições
if( condição 1) {
    comando 1
} else if (condição 2){
    comando 2
}else {
    comando 3
}
```

---

## 3.2 OPERADORES RELACIONAIS

Para definir as condições utilizadas nas estruturas condicionais, deve-se fazer o uso dos `operadores relacionais`.

| Símbolo | Significado    |
| ------- | -------------- |
| `==`    | Igualdade      |
| `!=`    | Diferente de   |
| `>`     | Maior que      |
| `<`     | Menor que      |
| `>=`    | Maior ou igual |
| `<=`    | Menor ou igual |

Quando inseridas em um programa cada comparação deve retornar `true` ou `false`. Existe ainda os símbolos de `=== (estritamente igual)` e `!== (estritamente diferente)` que comparam o tipo do dado em análise. Assim, “5” === 5 retorna, falso e “5” !== 5 retorna verdadeiro.

Para fixar o conceito do uso das condições e operadores relacionais, o [exemplo 3.2](/capitulo03/exemplos/ex3_2/) apresenta uma página que faz a leitura do nome e das notas de um aluno, apresenando a média, onde uma menssagem em azul é exibida caso o aluno seja aprovado, e outra em vermelhor, caso o aluno seja reprovado.

![exemplo 3.2.2](/.github/cap03/exe3_2.2.png)

---

## 3.3 OPERADORES LÓGICOS

Para definir mais de uma condição em um programa, devemos utilizar os operadores lógicos. Eles podem ser comparados utilizando tabelas que indicam os valores que cada comparação pode assumir, a fim de relacionar esses operadores.

| Símbolo      | Significado           |
| ------------ | --------------------- |
| !            | Not. Indica negação   |
| &&           | And. Indica conjunção |
| &#124;&#124; | Or. Indica disjunção  |

Essas tabelas são chamadas de `tabela verdade` que contém todas possíveis combinações dos valores lógicos (verdadeiro ou falso) das proposições e dos conectivos (operadores lógicos) utilizados.

A `negação (!)` é o mais simples, ela inverte o resultado das condições.

| p   | !p  |
| --- | --- |
| v   | f   |
| f   | v   |

exemplos de condições `NOT`:

```js
if( !cor == 'azul'){ ... }
if( cor != 'azul'){ ... }
```

A conjução `&&` reflete a ideia da simultaneidade. A expressão só retorna verdadeira se todas as condições forem verdadeiras.

| p   | q   | p && q |
| --- | --- | ------ |
| v   | v   | v      |
| v   | f   | f      |
| f   | v   | f      |
| f   | f   | f      |

exemplos de condições `AND` :

```js
if (cor == "Azul" && ano == 2017) { ... }
if (cor == "Cinza" && ano < 2017) { ... }
if (ano >= 2012 && ano <= 2017) { ... }
if (cor != "Azul" && cor != "Vermelho") { ... }
```

Já a `disjunções (||)` reflete uma noção de que pelo menos uma das condições deve ser verdadeira, para que o resultado seja verdadeiro.

| p   | q   | p &#124;&#124; q |
| --- | --- | ---------------- |
| v   | v   | v                |
| v   | f   | v                |
| f   | v   | v                |
| f   | f   | f                |

exemplos de condições `OR`:

```js
if (cor == "Azul" || ano == 2017) { ... }
if (cor == "Azul" || cor == "Branco") { ... }
if ((cor == "Azul" || cor == "Branco") && ano == 2017) { ... }
if (cor == "Azul" && (ano == 2016 || ano == 2017)) { ... }
```

Para fixar o conceito do uso das condições e operadores relacionais, o [exemplo 3.3](/capitulo03/exemplos/ex3_3) é um programa que calcula o peso ideal de uma pessoa.

![exemplo 3.3](/.github/cap03/exe3_3.png);

---

## 3.4 SWITCH… CASE

Outra estrutura condicional é o `switch… case`. Ele é útil quando temos várias condições alternativas definidas a partir do conteúdo de uma variável.

```html
<script>
  var bairro = prompt('Bairro de Entrega: ');
  var taxaEntrega;
  switch (bairro) {
    case 'Centro':
      taxaEntrega = 5.0;
      break;
    case 'Fragata':
    case 'Três Vendas':
      taxaEntrega = 7.0;
      break;
    case 'Laranjal':
      taxaEntrega = 10.0;
      break;
    default:
      taxaEntrega = 8.0;
  }
  alert('Taxa R$: ' + taxaEntrega.toFixed(2));
</script>
```

O comando `switch` inicia pela definição da variável que escolhe a condição a ser executada.
Cada instrução `case`deve conter um valor de comparação. Os comandos devem ser finalizados por `break`. Caso nenhuma das condições seja atendida nas instruções `case`, o fluxo do programa direciona para a execução dos comandos inseridos na instrução `default`.

## 3.5 OPERADORES TERNÁRIOS

Existe ainda uma forma abreviada para criar as instruções `if… else` conhecidas como `operadores ternários`. Eles consistem em realizar uma atribuição para uma variável com base na análise de uma condição.

```js
var categoria = idade >= 18 ? 'Adulto' : 'Juvenil';
```

A condição deve ser inserida após o sinal de atribuição (=). O primeiro valor após a interrogação (?) é atribuído à variável caso a condição seja verdadeira. E o segundo, após os dois pontos (:), caso a condição seja falsa.

---

## 3.6 EXEMPLOS

Podemo contruir exemplos para discutir sobre a aplicação de condições em um programa.
Abaixo podemos ver a resolução de exemplos simples, que utilizam apenas o `if`, depois
com `if... else` e também `else if`.

a) [Programa de Fusio Horário](/capitulo03/exemplos/ex3_6/exe3_6.a/)
![exemplo 3.6.a](/.github/cap03/exe3_6.a.png)

b) [Programa de Fusio Horário](/capitulo03/exemplos/ex3_6/exe3_6.b/)
![exemplo 3.6.a](/.github/cap03/exe3_6.c.png)

c) [Programa de Fusio Horário](/capitulo03/exemplos/ex3_6/exe3_6.b/)
![exemplo 3.6.a](/.github/cap03/exe3_6.c.png)

---

## 3.7 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando no link abaixo:

[a) Programa Par ou Ímpar](/capitulo03/exemplos/ex3_7/exe3_7.a/)

![exercicio 3.7.a](/.github/cap03/exe3_7.a.png)

[b) Programa Verifica Velocidade]((/capitulo03/exemplos/ex3_7/exe3_7.b/))

![exercicio 3.7.b](/.github/cap03/exe3_7.b.png)

[c) Programa Parquímetro]((/capitulo03/exemplos/ex3_7/exe3_7.c/))

![exercicio 3.7.c](/.github/cap03/exe3_7.c.png)

[d) Programa Lados de um Triângulo]((/capitulo03/exemplos/ex3_7/exe3_7.d/))

![exercicio 3.7.d](/.github/cap03/exe3_7.d.png)


---

## 3.8 CONSIDERAÇÕES FINAIS

As estruturas condicionais cumprem um importante papel no processo de construção de programas. Para definir uma condição, podemos utilizar os comandos `if… else` ou `switch… case`. As condições são definidas a partir do uso dos operadores relacionais: `igual (==)`, `diferente (!=)`, `maior (>)`, `menor (<)`, `maior ou igual (>=)` e `menor ou igual (<=)`. Algumas situações nos programas exigem que várias comparações sejam definidas, nesse caso é necessário utilizar os operadores lógicos, `not (!)`, `and (&&)` e `or (||)`.
