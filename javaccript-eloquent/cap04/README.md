# ESTRUTURA DE DADOS: OBJETOS E ARRAYS

Objetos nos permitem agrupar valores (incluíndo outros objetos) e, consequentemente, construit estruturas mais complexas. Esse capítulo irá adicionar uma compreensão básica sobre estrutura de dados. Ao final, você saberá o suficiente para começar a escrever prgramas úteis. O capítulo iŕa trabalhar com programas mais ou menos realista, introduzindo conceitos a medida em que eles se aplicam ao problema em questão. Os exemplos serão constuido em cima de funções e variáveis que foram apresentadas no início do texto.

---

## O HOMEM-ESQUILO

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

Praticamente todos os valores no JavaScript possuem propriedades. As únicas exceções são _null_ e _undefined_. Se você tentar acessar a propriedade em algum deles, você receberá um erro.

As duas formas mais comuns de acessar propriedades no JavaScript são usando ponto e colchetes. Ambos acessam uma propriedade em `value`, mas não necessariamente a mesma propriedade. A diferença está em como _x_ é interpretado. Enquanto acessar a propriedade utilzando ponto acessa a propriedade chamada "X", utilizar colchetes tenta avaliar a expressão _x_ e, então, usa o seu resultado como o nome da propriedade. Portanto, se você sabe que a propriedade que você está interessado se chama `length`, você usa `value.length`. Se você deseja extrair a propriedade cujo nome é o valor que está armazenado na variável _i_, você usa _value[i]_. Devido ao fato de que nomes de propriedades podem ser qualquer string, se você quiser acessar as propriedades "2" ou "John Doe", você deve usar os colchetes: _value[2]_ ou _value["John Doe"]_ , pois mesmo sabendo exatamente o nome da propriedade, "2" e "John Doe" não são nomes válidos de variáveis, sendo
impossível acessá-los usando a notação com o ponto.

---

## 4.3 - MÉTODOS

Ambos os objetos `string` e `arrays` possuem além da propriedade length, um número de propriedades que se referem à valores de função.

```js
var doh = 'Doh';
console.log(typeof doh.toUppercase);
console.log(doh.toUppercase());
```

Toda `string`possui uma propriedade `toUpperCase`. Quando chamada, ela retornará uma cópia da string com todas as letras convertidas para maiúsculas. Existe a propriedade `toLowerCase`, que faz o contrário, convertendo para minúsculas. As propriedades quem contêm funções são geralmente chamadas de _métodos_ do valor a que pertencem.

```js
var mack = [];

mark.push('Mack');
mark.push('The', 'Knife');

console.log(mack);
console.log(mack.join(' '));
console.log(mack.pop());
console.log(mack);
```

O método **push** pode ser usado para adicionar valores ao final do array. O método **pop** faz o contrário, remove o valor que está no final do array. Um array de string pode ser combinado em uma única `string` com o método **join**. O argumento passado para o **join** determina o texto que será inserido entre cada elemento do array.

---

## 4.4 - OBJETOS

Voltando ao caso do home-esquilo. Valores do tipo `objeto` são coleções arbitárias de propriedades, sendo que podemos adicionar ou remover essas propriedades da forma que desejamos. Uma maneira de criar um objeto é usando a notação com chaves.

```js
var day1 = {
  squirrel: false,
  events: ['work', 'touch tree', 'pizza', 'running', 'television'],
};

console.log(day1.squirrel); // → false
console.log(day1.wolf); // → undefined
day1.wolf = false;
console.log(day1.wolf); // → false
```

Dentro das chaves, podemos informar uma lista de propriedades separadas por vírgulas. Cada propriedade é escrita com um nome seguido de dois pontos e uma expressão que fornec o valor da propriedade.

```js
var descriptions = {
  work: 'Went to work',
  'touched tree': 'Touched a tree',
};
```

Isso significa que as chaves possuem dois significado. Quando usado no inicio de uma delcaração, elas definem o começo de um bloco de declaração. Em qualquer outro caso, elas descrevem um objeto. Tentar acessar uma propriedade que não existe irá produ um valor `undefined`, o que acontece ao tertar ler a propriedade `wolf` no exemplo anterior.É possível atribuir um valor a uma propriedade usando o operador `=`. Isso irá substituir o valor de uma propriedade, caso ela exista, ou criar uma nova propriedade no objeto se ela não existir.

Operador _delete_ é um operador unário que, quando aplicado a uma propriedade, irá remover tal propriedade do objeto.

```js
var anObject = { left: 1, right: 2 };
console.log(anObject.left); // → 1

delete anObject.left;
console.log(anObject.left); //undefined

console.log('left' in anObject); // → false
console.log('right' in anObject); // → true
```

O operador binário `in`, quando aplicado a uma string ou um objeto, retorna um valor booleano que indica se aquele possui aquela propriedade. A diferença entre alterar uma propriedade para `undefined` e removê-la de fato, é que no primeiro caso, o objeto continua com a propriedade, equanto que no segundo caso, a propriedade não estará mais presente no objeto e o operador `in` retorná `false`. Os arrays são, então apenas um tipo especializado de objeto para armazenar sequência de coisas. Se você executar `typeof[1,2`], irá produzir "object". Portanto, podemos representar o diário de Jacques como um array de objetos:

```js
var journal = [
  {
    events: ['work', 'touched tree', 'pizza', 'running', 'television'],
    squirrel: false,
  },
  {
    events: [
      'work',
      'ice cream',
      'cauliflower',
      'lasagna',
      'touched tree',
      'brushed teeth',
    ],
    squirrel: false,
  },
  {
    events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
    squirrel: true,
  },
  /* and so on... */
];
```

---

## 4.5 - MUTABILIDADE

Vimos que os valores de objeto poden ser modificados. Os tipos de valores discutidos nos capítulos anteriores, são imutáveis. É possível mudar o valor já existente desses tipos. Você, a partir deles, combiná-los e criar novos valores, mas quando você analisar um valor específico de string, ele será sempre o mesmo, sendo que o seu texto não pode ser alterado. Por outro lado, no cas de objetos, o conteúdo de um valor pode ser modificado quando alteramos suas propriedades. Quando temos dois números iguais, podemos considerá-los exatamnete os mesmos números, mesmo se eles não fazem referência aos mesmos bits físicos. Entretanto, no caso de objeto há uma diferença entre ter duas referências para o mesmo objeto e ter dois objetos diferentes que possuem as mesmas propriedades.

```js
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;

console.log(object2.value); // → 15
console.log(object3.value); // → 10
```

As variáveis `object1` e `object2` estão associadas ao mesmo objeto e, por isso alterar `object1` também altera o valor de `object2`. A variável de `object3` aponta para um objeto diferente, o qual inicialmente contêm as mesmas propriedades de `object1` e sua existência é totalmente separada. Quando comparamos objetos, o operador `==` irá retornar true apenas se ambos os objetos possuem exatamente o mesmo valor. Comparar objetos diferentes irá retornar `false` mesmo se eles tiverem conteúdos idênticos.

---

## 4.6 - O LOG DA LICANTROPIA

Jacques inicia seu interpretador de JavaScript e configura o ambiente que ele precisa para manter o eu diário.

```js
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel,
  });
}
```

E então, todas as noites às dez ou as vezes na manhã seguite, ele faz o registro do dia.

```js
addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(
  [
    'work',
    'ice cream',
    'cauliflower',
    'lasagna',
    'touched tree',
    'brushed teeth',
  ],
  false
);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);
```

Uma vez que ele tem dados suficiente, ele pretente calcular a correlação entre sua transformação em esquilo e cada um dos eventos do dia e espera aprender algo útil a partir dessa correlações.

A `correlação` é uma medida de dependência entre variáveis. Ela é geralmente expressa em um coeficiente que vaira de -1 a 1. Zero correlações significa que as variáveis não são relacionadas, enquanto que a correlação de um indica que as variáveis são perfeitamente relacionadas. A correlação negativa de um também indica que as variáveis são perfeitamente relacionadas, mas são opostas.

Para variáveis booleanas, o coeficiente phi (ϕ) fornece uma boa forma de medir a correlação e é relativamente fácil de ser calculado. Para calcular ϕ, precisamos de uma tabela n que contê o número de vezes que as diversas combinações das duas variáveis foram observadas. ϕ pode ser calculado usando a seguinte fórmula, onde n se refere à tabela.

![evento comer pizza](../.github/img/img04/img4_6.png);

```txt
ϕ = (n11n00 - n10n01) / √ n1•n0•n•1n•0
[TODO: Adicionar formatação correta da fórmula após converter em asciidoc]
```

A notação n01 indica o número de ocorrências nas quais a primeira variável (transformar-se em esquilo) é falsa (0) e a segunda variável (pizza) é verdadeira (1). Nesse exemplo, n01 é igual a 9. O valor n1• se refere à soma de todas as medidas nas quais a primeira variável é verdadeira, que no caso do exemplo da tabela é 5. Da mesma forma, n•0 se refere à soma de todas as medidas nas quais a segunda variável é falsa. Portanto, para a tabela de pizza, a parte de cima da linha (o dividendo) seria 1x76 - 4x9 = 40, e a parte de baixo (o divisor) seria a raiz quadrada de 5x85x10x80, ou √340000. Esse cálculo resulta em ϕ ≈ 0.069, o que é um valor bem pequeno. Comer pizza parece não ter influência nas transformações.

---

## 4.7 - CALCULANDO A CORRELAÇÃO
