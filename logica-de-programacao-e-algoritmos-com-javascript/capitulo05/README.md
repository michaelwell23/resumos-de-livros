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
produtos[4] = 'Requeijão';
```

A declaração de um vetor pode ser da seguinte forma:

```js
var produtos = [];
var produtos2 = new array();
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

Os exemplos abaixo são uma demonstração do que acontece com o conteúdo do vetor utilizando cada um dos métodos acima.

```html
<script>
  // declara e define conteúdo inicial do vetor
  var cidade = ['Pelotas'];

  cidades[0] = 'Pelotas';

  // adiciona cidade ao final do vetor
  cidades.push('São Lourenço');

  cidades[0] = 'Pelotas';
  cidades[1] = 'São Lourenço';

  // adiciona ao inicio e desloca as demais
  cidades.unshift('Porto Alegre');

  cidades[0] = 'Porto Alegre';
  cidades[1] = 'Pelotas';
  cidades[2] = 'São Lourenço';

  // remove a útima cidade do vetor
  cidades.pop();

  cidades[0] = 'Porto Alegre';
  cidades[1] = 'Pelotas';

  // remove a primeira e "sobre" as demais
  cidades.shift();

  cidades[1] = 'Pelotas';
</script>
```

---

## 5.2 TAMANHO DO VETOR E EXIBIÇÃO DOS ITENS

Uma propriedade importante utilizada na manipulação de vetores é a propriedade `length`, que retorna o número de elementos do vetor. Para percorrer e exibir os elementos do vetor cidade, podemos utilizar o `for`, indicando que a variável de controle i se inicia em 0, e repita o laço quando i for menor que quantidade de elementos no vetor `cidades.length`.

```html
<script>
  var cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre'];

  for (var i; i < cidades.length; i++) {
    alert(cidades[i]);
  }
</script>
```

Outra forma de exibir o conteúdo do vetor é usando métodos `toString()` e `join()`. Eles convertem o conteúdo do vetor em uma string, sendo que o método `toString()` uma vírgula é inserida entre os elementos, o join() podemos indicar qual caractere vai separar os itens.

```html
<script>
  var cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre'];

  for (var i; i < cidades.length; i++) {
    alert(
      'toString(): ',
      cidades.toString() + '\n\n Join(): ' + cidades.join(' - ')
    );
  }
</script>
```

Resultado

![exemplo 5.2.b](/.github/cap05/exe5_2.b.png)

Para ilustrar a aplicação dos métodos de inclusão e exclusão de elemento no vetor, o [Exemplo 5.2.c](/capitulo05/exemplos/ex5_2/ex5_2.c/) é um controlador de atendimento de pacientes de um consultório – como se fosse um painel em exposição em uma TV de consultório.

![exemplo 5.2.c](/.github/cap05/exe5_2.c.png)

---

## 5.3 LOCALIZAR CONTEÚDO

Linguagens de programação dispõem de alguns métodos para auxiliar no controle de seu conteúdo. Um desses controles refere-se à verificação da existência ou não de um conteúdo do vetor. Os métodos `indexOf()` e `lastIndexOf()` cumprem esse papel. No `indexOf()`, a busca ocorre a partir do início do vetor. Já no `lastIndexOf()`, a busca é do final para o início. Caso o conteúdo exista, o número do índice da primeira ocorrência do conteúdo será retornado. Caso não exista no vetor, o retorno será o valor -1.

```html
<script>
  var cidades = [5, 6, 8, 3, 6, 9];

  alert('indexOf - ' + idade.indexOf(6), '\n');
  alert('lastIndexOf - ' + idade.lastIndexOf(6), '\n');
  alert('indexOf - ' + idade.indexOf(7), '\n');
</script>
```

No exemplo acima o `indexOf()` exibido no `alert()` verifica a existência do número 6, retornando a posição a posição 1 da ocorrência desse conteúdo. Já no método `lastIndexOf()` age da mesma forma, retornando a posição 4. Na última busca, um valor inexistente é passado, assim o valor -1 é retornado pelo método. Um segundo exemplo que pode ser utilizado para fixar o aprendizado do `indexOf()` e `lastIndexOf()`, trata-se do[Exemplo 5.3.b](/capitulo05/exemplos/ex5_3/ex5_3.b/), é um programa em que o usuário tem que adivinhar o número sorteado entre 1 e 100.

![Exemplo 5.2.b](/.github/cap05/exe5_3.b.png)

---

## 5.4 VETORES DE OBJETOS

Definir um vetor de objetos nos permite realizar operações sobre esse vetor, como classificar os elementos por um dos seus atributos. Um vetor de objetos é declarado da mesma forma que um vetor simples. Na inserção de itens no vetor, contudo, devem-se indicar os atributos que os compõem.

```html
<script>
    var carros = []

    carros.push({ modelo: "Supra", preco: 250000});
    carros.push({ modelo: "Silvia", preco: 350000});

    for( var i = 0; i < carros.length; i++){
        alert(carros[i].modelo+ ' - R$: ' + carros[i].preco)
    }
<script>
```

No script [exemplo 5.4](/capitulo05/exemplos/ex5_4/index.html) , o vetor é inicialmente declarado. Em seguida, são realizadas duas inclusões de veículos. Na sequência, o comando `for` é utilizado para percorrer os elementos do vetor e apresentar o conteúdo de cada um dos seus atributos.

---

## 5.5 PESQUISAR E FILTRAR DADOS

Podemos explorar como percorrer os elementos do vetor para extrair algumas informações sobre o seu conteúdo. É muito importante ter um cuidado extra de informar ao usuário quando uma pesquisa não encontrou um resultado. O código [exemplo 5.5.a](/capitulo05/exemplos/ex5_5/ex5_5.a/) apresenta as idades que possuem valor maior ou igual a 18 armazenadas em um vetor. A solução para apresentar uma mensagem que indica que não há idades maiores que 18 na lista, é utilizar uma variável de controle. Essa variável recebe um valor inicial antes da repetição. Caso a condição dentro do laço seja verdadeira, então, modifica-se o valor da variável. Após o laço, deve-se verificar, então, se a variável mantém o valor inicial. Isso significa que a condição testada no laço não ocorreu e que, portanto, a mensagem indicativa deve ser exibida.

O código do exemplo [5.5.b](/capitulo05/exemplos/ex5_5/ex5_5.b/) explora um recurso de filtragem de dados em uma lista, o programa ‘Revenda Herbie’,armazena um valor de objetos, o modelo e o preço dos carros disponíveis na revenda.

![Exemplo 5.5.b](/.github/cap05/exe5_5.b.png)

---

## 5.6 CLASSIFICAR OS ITENS DO VETOR

Javascript dispões do método `sort()` para classificar os itens de um vetor em ordem alfabética crescente. Ao exibir os dados de uma lista em ordem, conseguimos facilmente localizar algum de seus elementos. Caso seja necessário manter a lista na ordem original e apresentar em uma função os dados ordenados, é possível fazer uma cópia a partir do método `slice()`, ele obtém uma cópia com todos os elementos do vetor original quando é usado sem parâmetros. Caso necessário classificar os dados em ordem decrescente, podemos utilizar em conjunto os métodos `sort()` e `reverse()`. O método reverse() inverte a ordem dos elementos de um vetor.

Ordenar os dados de uma lista, além de ser útil para exibir os dados de uma forma organizada, também auxilia no processo de obtenção de algumas respostas em um programa. O exemplo 5.6.b [Programa Brinquedoteca](/capitulo05/exe5_6) é um programa que lê o nome e a idade de uma criança e exibe o número e o percentual de crianças em cada idade, a fim de que os brinquedos sejam comprados de acordo com a faixa etária delas.

![Exemplo 5.2.a](/.github/cap05/exe5_6.a.png)

---

## 5.7 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [Aqui](/capitulo05/exemplos/ex5_7/)

![Exercício a](/.github/cap05/exe5_7.a.png)
![Exercício b](/.github/cap05/exe5_7.b.png)
![Exercício c](/.github/cap05/exe5_7.c.png)
![Exercício d](/.github/cap05/exe5_7.d.png)

---

## 5.8 CONSIDERAÇÕES FINAIS DO CAPÍTULO

Os vetores armazem listas de dados em um programa. Cada vetor contém um nome e um índice que se inicia na posição zero. O JavaScript dispõe de diversos métodos para trabalhar com vetores, dentre os principais ações realizadas, destaca-se:

- Inserir e remover elementos no inicio e no final do vetor
- Exbir o conteúdo do vetor
- Localizar um item no vetor
- Manipular um vetor de objetos, com diferentes atributos
- Filtrar os dados da lista
- Classificar os elementos do vetor
