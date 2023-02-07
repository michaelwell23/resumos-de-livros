# CAPÍTULO 02: ESTRUTURA DO PROGRAMA

Nesse ponto vamos expandir o domínio da linguagem JavaScript para o ponto onde poderemos realmente expressar algo mais significativo.

---

## 2.1 EXPRESSÕES E AFIRMAÇÕES

Um fragmento de código que produz um valor é chamado de `expressão`. Todo valor que é escrito literalmente é uma expressão. Uma expressão entre parênteses é também uma expressão, e também um operador binário aplicado a duas expressões, ou um unário aplicado a uma. Se uma expressão corresponde a um fragmento de sentença, uma afirmação, no JavaScript, corresponde a uma frase complea em liguagem humana. Um programa é simplesmente uma lista de aformações. O tipo mais simples de afirmação é uma expressão com um ponto e vírgula depois dela.

```js
1;
!false;
```

Uma expressão pode ser apenas para produzir um valor, que pode então ser usado para fechar a expressão. Uma declaração vale por si só, e só equivale a alguma coisa se ela afeta em algo. Ela pode mostrar algo em tela ou pode mudar internamente o estado da máquina de uma forma que vai afetar outras declarações que irão vir. Esta mudanças são chamadas `efeitos colaterais`.

---

## 2.2 PONTO E VÍRGULA

O JavaScript permite que você omita o ponto e vírgula no fim de uma declaração. Em outros casos ele deve estar lá ou coisas estranhas irão acontecer. As regras para quando ele pode ser seguramente omitido são um pouco complexas e propensas a erro.

---

## 2.3 VARIÁVEIS

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

## 2.4 PALAVRAS-CHAVE E PALAVRAS RESERVADAS

Palavras que tem um significado especial, como `var` podem ser usadas como nomes de variáveis. Existe também algumas palavras que são reservadas para uso em futuras versões do JavaScript. Estas também não são autorizadas a serm utilizadas como nomes de variáveis, embora alguns ambientes JavaScript permitam.

---

## 2.5 O AMBIENTE

A coleção de variáveis e seus valores que existem em um determinado tempo é chamado de `environment` (ambiente). Quando um programa inicia, o ambiente não está vazio. Ele irá conter no mínimo o numero de variáveis que fazer parte do padrão da linguagem. E na maioria das vezes haverá um conjunto adicional de variáveis que fornecem maneiras de interagir com o sistema envolvido.

---
