# CAPÍTULO 05: VETORES

Os vetores ou arrays são estruturas que permitem armazenar uma lista de dados na memória principal do computador. Com os vetores é possível recuperar todos os itens inseridos na lista. Um índice numérico identifica o elemento da lista.

| Índice | Valores |
| ------ | ------- |
| 0      | Arroz   |
| 1      | Feijão  |
| 2      | Iorgute |
| 3      | Leite   |
| 4      | Suco    |
| 5      | Pão     |

Um vetor pode ser referenciado através do seu nome, seguido por um número entre colchetes que aponta para o seu índice. Um índice de um vetor inicia-se pelo 0. Para obter o primeiro valor de um vetor de produtos, devemos utilizar: `produtos[0]`. Para alterar um produto da lista, podemos atribuir um conteúdo a um elemento do vetor.

```js
produtos[4] = 'Requeijão'
```

A declaração de um vetor pode ser da seguinte forma:

```js
var produtos = [];
var produtos2 = new array()
```

Também é possível declarar um vetor com algum conteúdo inicial.

```js
var produtos = ['Arroz', 'Feijão', 'Iorgute'];
```

É possível exibir os dados informados pelo usuário em um programa concatenando os conteúdos a serem exibidos em uma string. Mas, não é possível gerenciar esses dados.

- Uma variável armazena um valor por vez, quando recebe uma nova atribuição, o valor anterior é perdido.

```js
var idade;

idade = 18;
idade = 19;
```

- Já os vetores permitem armazenar um conjunto de dados e acessar todos os seus elementos pela referência ao índice que identifica cada um deles.

```js
var idade = [];

idade[0] = 18;
idade[1] = 19;
```

---

## 5.1 INCLUSÃO E EXCLUSÃO DE ITENS

Podemos gerenciar a lista com a inclusão e a exclusão de itens a esse veto. Os principais métodos JavaScript que executam essas tarefas são:

|           |                                         |
| --------- | --------------------------------------- |
| push()    | Adiciona um elemento ao final do vetor  |
| unshift() | Adiciona um elemento ao início do vetor |
| pop()     | Remove o último elemento do vetor       |
| shift()   | Remove o primeiro elemento do vetor     |

Os exemplos abaixo são uma demonstração do que acontece com o conteúdo do vetor  utilizando cada um dos métodos acima.

```html
<script>
    // declara e define conteúdo inicial do vetor
    var cidade = ['Pelotas'];

    cidades[0] = 'Pelotas';

    // adiciona cidade ao final do vetor
    cidades.push('São Lourenço')

    cidades[0] = 'Pelotas';
    cidades[1] = 'São Lourenço';

    // adiciona ao inicio e desloca as demais
    cidades.unshift('Porto Alegre');

    cidades[0] = 'Porto Alegre';
    cidades[1] = 'Pelotas';
    cidades[2] = 'São Lourenço';

    // remove a útima cidade do vetor
    cidades.pop()

    cidades[0] = 'Porto Alegre';
    cidades[1] = 'Pelotas';

    // remove a primeira e "sobre" as demais
    cidades.shift()

     cidades[1] = 'Pelotas';
</script>

```

---

## 5.2 TAMANHO DO VETOR E EXIBIÇÃO DOS ITENS

Uma propriedade importante utilizada na manipulação de vetores é a propriedade `length`, que retorna o número de elementos do vetor. Para percorrer e exibir os elementos do vetor cidade, podemos utilizar o `for`, indicando que a variável de controle i se inicia em 0, e repita o laço quando i for menor que quantidade de elementos no vetor `cidades.length`.

```html
<script>
    var cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre']

    for(var i;i < cidades.length; i++){
        alert(cidades[i])
    }
</script>

```

Outra forma de exibir o conteúdo do vetor é usando métodos `toString()` e `join()`. Eles convertem o conteúdo do vetor em uma string, sendo que o método `toString()` uma vírgula é inserida entre os elementos, o join() podemos indicar qual caractere vai separar os itens.

```html
<script>
    var cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre']

    for(var i;i < cidades.length; i++){
        alert(cidades.toString() + "\n\n" + cidades.join(" - "))
    }
</script>

```

Resultado

![exemplo 5.2.a](/.github/cap05/exe5_2.b.png)

Para ilustrar a aplicação dos métodos de inclusão e exclusão de elemento no vetor, o  [Consultório Odontológico](/capitulo05/exemplos/ex5_2/ex5_2.c/) é um controlador de atendimento de pacientes de um consultório – como se fosse um painel em exposição em uma TV  de consultório.

![exemplo 5.2.c](/.github/cap05/exe5_2.c.png)

---