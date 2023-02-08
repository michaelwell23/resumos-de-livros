# CAPÍTULO 02: ESTRUTURA DO PROGRAMA

Nesse ponto vamos expandir o domínio da linguagem JavaScript para o ponto onde poderemos realmente expressar algo mais significativo.

---

## 2.1 - EXPRESSÕES E AFIRMAÇÕES

Um fragmento de código que produz um valor é chamado de `expressão`. Todo valor que é escrito literalmente é uma expressão. Uma expressão entre parênteses é também uma expressão, e também um operador binário aplicado a duas expressões, ou um unário aplicado a uma. Se uma expressão corresponde a um fragmento de sentença, uma afirmação, no JavaScript, corresponde a uma frase complea em liguagem humana. Um programa é simplesmente uma lista de aformações. O tipo mais simples de afirmação é uma expressão com um ponto e vírgula depois dela.

```js
1;
!false;
```

Uma expressão pode ser apenas para produzir um valor, que pode então ser usado para fechar a expressão. Uma declaração vale por si só, e só equivale a alguma coisa se ela afeta em algo. Ela pode mostrar algo em tela ou pode mudar internamente o estado da máquina de uma forma que vai afetar outras declarações que irão vir. Esta mudanças são chamadas `efeitos colaterais`.

---

## 2.2 - PONTO E VÍRGULA

O JavaScript permite que você omita o ponto e vírgula no fim de uma declaração. Em outros casos ele deve estar lá ou coisas estranhas irão acontecer. As regras para quando ele pode ser seguramente omitido são um pouco complexas e propensas a erro.

---

## 2.3 - VARIÁVEIS

Para pegar e guardar valores a lingaugem fornece uma coisa chamada `variáveis`.

```js
var caught = 5 * 5;
```

E isso nos dá um segundo tipo de declaração. A palavra especial `var` indica que esta sentença vai definir uma variável. Ela é seguida pelo nome da variável e, se nós quisermos dar um valor, podemos utilizar o operdado = e uma expressão. Depois de uma variável ter sido definida, seu nome pode ser usado como uma expressão. O valor da expressão é o valor atual mantido pela variável.

```js
var ten = 10;
console.log(ten * ten);
```

Nomes de variáveis podem ser quase qualquer palavra, menos as reservadas para palavras-chaves. Não podem haver espaços inluídos. Dígitos podem ser incluidos, mas o nome não pode iniciar com eles. Nome da variável não pode incluir pontuação,exceto pelos caracteres $ e \_. Quando uma variável aponta para um valor, ela está ligado ao valor para sempre. O operador = pode ser usado a qualquer hora em variáveis existentes para desconectá-las de seu valor atual e então apontá-las para um outro:

```js
var mood = 'ligth';
console.log(mood); //light

mood = 'dark';
console.log(mood); //dark
```

Quando você define uma variável sem fornecer um valor a ela, ao perguntar sobre o seu valor, você receberá o valor `undefined`, que nada mais é um retorno para uma variável vazia. Veja um exemplo. Para lembrar da quantidade de dólares que Luigi ainda lhe deve, você cria uma variável. E então quando ele lhe paga 53 dólares, você dá a essa variável um novo valor.

```js
var luigiDebt = 140;
luigiDebt = luigiDebt - 35;
console.log(luigiDebt); //105
```

---

## 2.4 - PALAVRAS-CHAVE E PALAVRAS RESERVADAS

Palavras que tem um significado especial, como `var` podem ser usadas como nomes de variáveis. Existe também algumas palavras que são reservadas para uso em futuras versões do JavaScript. Estas também não são autorizadas a serm utilizadas como nomes de variáveis, embora alguns ambientes JavaScript permitam.

---

## 2.5 - O AMBIENTE

A coleção de variáveis e seus valores que existem em um determinado tempo é chamado de `environment` (ambiente). Quando um programa inicia, o ambiente não está vazio. Ele irá conter no mínimo o numero de variáveis que fazer parte do padrão da linguagem. E na maioria das vezes haverá um conjunto adicional de variáveis que fornecem maneiras de interagir com o sistema envolvido.

---

## 2.6 - FUNÇÕES

Muitos valores fornecido no ambinte padrão são do tipo `function`. Uma função é um pedaço de programa envolvido por um valor. Este valor pode ser aplicado a fim de executar o programa envolvido. No ambiente do navegador, podemos utilizar a função `alert` que mostra uma pequena caixa de diálogo com uma mensagem.

```js
alert('Hello World');
```

Executar uma função é denomicado invocar, chamar ou aplica uma função. Você pode chamar uma função colocando os parênteses depois da expressão que produz um valor de função. Normalmente você irá usar o nome da variável que contém uma função diretamente. Os valores entre os parênteses são passado ao programa dentro da função.

---

## 2.7 - FUNÇÃO console.log

A maioria dos sistemas JavaScript, fornece uma função `console.log` que escreve seus argumentos como texto na sáida do dispositivo. Nos navegadores, a saída fica no console JavaScript, que é oculta por padrão nos browser, mas pode ser acessada precionando F12 ao abrir o navegador. Quando rodamos os exemplos ou os nosso próprios códigos, o `console.log` vai mostrar embaixo o exemplo, ao invés de ser no console JavaScript.

```js
var x = 30;
console.log('ovalor de x é ', x);
// o valor de x é 30
```

---

## 2.8 - RETORNANDO VALORES

Muits funções são úteis por causa dos efeitos que elas produzem. É também possível para uma função produzir um valor, no caso de não ser necessário um efeito colateral. Um exemplo é a função `Math.max` que pega dois números e retorna o maior entre eles.

```js
console.log(Math.max(2, 4));
```

Quando uma função produz um valor, é dito que ela retorna um valor. Tudo que produz um valor é uma expressão, que significa que chamadas de função podem ser usadas dentro de expressões maiores. No exemplo a seguir, uma chamada para função `Math.min` que é o oposto de `Math.max` é usada como uma das entradas para o operador de soma:

```js
console.log(Math.min(2, 4) + 100);
```

---

## 2.9 - prompt e confirm

O ambiente forncecido pelos navegadores contém outras funções para mostrar janelas. Podemos perguntar a um usuário uma questão de Ok/Cancel utilizando o `confirm`. Essa função tem como retorno valores booleanos `true` ou `false`.

```js
confirm('Shall we, then?');
```

O `prompt` pode ser usado para criar uma questão "aberta". O usuário poderá fornecer uma escrita dentro da janela de diálogo, que será retornado com um valor de string. Também podemos passar argumentos dentro da função, o primeiro é a questão; o segundo é o texto inicial.

```js
prompt('Tell me everthing you know.', '...');
```

Estas duas funções não são muito utilizadas, porque não se tem controle sobre o modo que a janela vai aparecer, mas elas são úteis para experimentos.

---

### 2.10 - FLUXO DE CONTROLE

Quando o programa contém mais de uma declaração, as declarações são executadas, previsivelmente, de cima para baixo. Com um exemplo básico, o programa abaixo tem duas declarações.

```js
var theNumber = Number(prompt('Pick a number', '...'));
alert('Your number is the square root of ' + theNumber * theNumber);
```

Existe funções que fazem conversões de tipo como `String`, `Boolean`. A função `Number`, faz exatamente isso, como precisamos de um número, a função `prompt` retorna uma string, é necessário fazer essa conversão.Aqui podemos ver uma reprsentação bem trívial do fluxo de controle em linha reta.

---
