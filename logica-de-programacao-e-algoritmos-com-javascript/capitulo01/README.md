# LÓGICA DE PROGRAMAÇÃO E ALGORITMOS COM JAVASCRIPT

## CAPÍTULO 01: INTRODUÇÃO

Para começar a pensar como um programa funciona, podemos ilustrar as etapas e os fluxos básicos do sistema de um caixa eletrônico de um banco. Podemos observar que temos três etapas neste fluxo: entrada, processamento e saída. Ao estruturar os passos de um programa, estamos montando um algoritmo. Algoritmo é uma sequência de passos (combinados) a serem executados para a realização de uma tarefa, em um tempo finito. Organizar essa sequência de passos de forma lógica e a nossa atribuição enquanto programadores de sistemas.

---

### 1.1 LÓGICA DE PROGRAMAÇÃO

Organizar o pensamento e colocar as coisas em ordem são tarefas de lógica de que necessitamos para resolver problemas com o uso do computador. Para resolver um problema corretamente por um sistema operacional, deve-se dar atenção especial a diversos aspectos. Muitas deles diretamente relacionados com as questões de lógica. Os cuidados servem tanto para resolver exercícios, quanto para solucionar problemas maiores. Os pontos são os seguintes:

#### 1.1.1 COMPREENDER O QUE É PEDIDO

Para reforçar algo fundamental para o processo do aprendizado de algoritmos é necessário ter a compreensão do problema a ser solucionado. Portanto, perca alguns minutos na leitura dos enunciados dos exercícios que você vai resolver. Eles serão valiosos no final e talvez economizem horas de seu tempo.

#### 1.1.2 REALIZAR DEDUÇÕES NA CONSTRUÇÃO DO PROGRAMA

Na construção das soluções dos exercícios de algoritmos, faz-se necessário realizar pequenas deduções. Esse assunto é trabalhado na disciplina de Lógica Matemática e contribui para o aprendizado de Lógica de Programação. Ela também será necessária para a resolução dos exercícios, que vão avançar de forma gradativa em níveis de complexidade. Com treinamento, aperfeiçoamento a nossa lógica para raciocinar como os sistemas computacionais funcionam e realizam deduções sobre quais controles devem ser utilizados para melhor solucionar um problema.

#### 1.1.3 ENUMERAR AS ETAPAS A SEREM REALIZADAS

Algumas ações realizadas em um programa seguem uma lógica sequencial, ou seja, um comando (ação) é realizado após o outro. Algumas ações podem exigir a criação de condições e repetições.

#### 1.1.4 ANALISAR OUTRAS POSSIBILIDADES DE SOLUÇÃO

Quando deparar com um problema que você tem dificuldades para resolver de uma forma, respire um pouco… Tome uma água… Tente pensar se poderia existir outra forma de solucioná-lo.

#### 1.1.5 ENSINAR AO COPUTADOR UMA SOLUÇÃO

Na resolução de um algoritmo, é necessário ensinar ao computador quais operações devem ser realizadas para se chegar a uma solução correta para o problema. Ou seja, deve-se primeiro entender como solucionar o problema para depois passá-lo para o algoritmo. É importante salientar que na resolução de algoritmos, no geral, existem diversas formas de se chegar a um resultado satisfatório.

#### 1.1.6 PENSE EM TODOS OS DETALHES

Uma analogia geralmente realizada é a de que criar algoritmo pode ser comparado com o processo de criação de uma receita de bolo. Na montagem de uma receita, temos os ingredientes, as ações a serem realizadas sobre os ingredientes e o resultado esperado, que é o bolo em si. Esquecer algum ingrediente ou o detalhe de alguma ação certamente fará com que o bolo não fique conforme o planejado. Na construção de algoritmos vale a mesma regra.

---

### 1.2 ENTRADA, PROCESSAMENTO E SAÍDA

No processo de aprendizagem de algo novo, é importante memorizar um roteiro de etapas a serem seguidas. Em lógica de programação, o roteiro para resolver a maioria dos problemas iniciais é: `ler os dados de entrada`, `realizar o processo dos dados` e `apresentar a saída dos dados`. Em programas maiores, essas etapas vão se intercalando e outras ações serão necessárias. A etapa de entrada de dados consiste em solicitar ao usuário alguma informação, nome, idade e salário - por exemplo. Após, deve ocorrer a etapa de processamento, calcular novo salário, verificar a idade ou calcular um desconto. E, por fim, o nosso programa deve apresentar a saída de dados, que é a exibição dos dados. Para realizar cada uma dessas etapas, as linguagens de programação utilizam comandos.

---

### 1.3 JAVASCRIPT

O JavaScript possui um importante papel no processo de desenvolvimento de páginas para internet, junto com o HTML e CSS. O HTML serve para descrever o conteúdo de uma página web e definir a marcação semântica dos elementos que compõem a página. O CSS define a aparência do site – cores, bordas, espaçamentos etc. Já o JavaScript é utilizado para definir o comportamento dos elementos da página. Com JavaScript podemos interagir com os visitantes de uma página a partir de campos de formulário, acessar e modificar o conteúdo e as características de uma página, salvar informações no navegador do usuário, etc. JavaScript é utilizado principalmente para rodar scripts no lado do cliente, embora também seja crescente o número de aplicações desenvolvidas com a linguagem para rodar no lado do servidor. Ela também é uma linguagem orientada a objetos. Esse paradigma é essencial para o desenvolvimento de aplicações profissionais já há algum tempo.

---

### 1.4 EDITORES DE CÓDIGO JAVASCRIPT

Para criar programas JavaScript, podemos utilizar editores simples que já estão instalados no computador,esses editores simples como o bloco de notas, não são muito recomendados pela ausência de recursos de auxílio ao programador. Também há os editores online que contém alguns recursos extras e a vantagem de poder acessar e compartilhar os códigos na internet. Existem também os editores profissionais que contém diversos recursos que facilitam o desenvolvimento dos programas. Os editores online possibilitam testar diretamente os programas em um navegador web. Sites como w3schools.com, js.do e jsbin.com, são exemplos de classes de editores JavaScript. No caso do site da w3schools.com, há uma descrição dos recursos da linguagem e de seus comandos (em inglês). Os editores profissionais nos apresenta recursos que nos auxiliam no desenvolvimento de aplicações. Autocompletar os comandos, alertas de erros de sintaxe, formatação de código (itendação), cores diferente para comando e integração com GitHub são alguns exemplos.

---

### 1.5 SAÍDA DE DADOS COM ALERT()

O primeiro documento deve ser do tipo HTML. Depois de criar o arquivo [ex1_5.html]('./exemplos/ex1_5.html) e abrir-lo em um editor de texto, podemos escrever o seguinte comando.

```html
<script>
  alert('Bem-vindo ao Mundo JavaScript!')
</script>
```

Depois de salvar o arquivo, é necessário executá-lo. Para isso, só abrir o navegador e na barra de endereço informar o caminho onde o arquivo foi salvo. Outra opção é ir até a pasta em que a página foi salva, dar dois clicks sobre o arquivo. Ao executar o programa, a mensagem de "Bem-vindo ao Mundo JavaScript!” é exibida em uma caixa dentro da tela, conforme a imagem abaixo:

![exemplo 1.5 - prompt](/.github/cap01/exe1_5.png)

---

### 1.6 VARIÁVEIS E CONSTANTES

Uma das principais funções de um programa é interagir com os usuários, e uma das formas de fazer isso é a solicitação de informações e, a partir dessas informações, implementar ações e apresentar respostas. E para isso existem as variáveis. Variáveis são espaços alocados na memória do computador que permitem guardar informações e trabalhar com elas. Como o nome sugere, os valores armazenados em uma variável podem ser alterados durante a execução do programa. Em JavaScript, as variáveis seguem regras de nomenclatura para serem declaradas e elas não podem:

- Conter espaços
- Começar com números
- Conter caracteres especiais, como +,-,\*,/,%, (,),{,},!,@, #
- Utilizar nomes de palavras reservadas da linguagem, como function, var, new, for ou return.

Para fazer um variável receber um valor, utilizamos o conceito de atribuição. A atribuição de um valor para uma variável é feita com o sinal "=". Épossível declar uma váriavel utilizando a palavra reservada `var` e atribuir diretamento um valor com o sinal de atribuição da seguinte forma:

```js
var idade = 32
```

As novas versões do JavaScript e dos navegadores já suportam o uso de constantes. Para declar uma constante, podemos fazer da mesma forma que foi utilizada para criar uma variável, mas em vez de utilizar a palavra reservada var, utilizamos a `const`. É um padrão utilizar letras maiúsculas para nomer as constantes.

```js
const POLTRONAS = 240
```

---

### 1.7 ENTRADA DE DADOS

Podemos receber uma informação e apresentar uma mensagem utilizando a informação recebida. Para isso, vamos utilizar o conceito de variáveis. Para receber dados do usuário, uma das formas possíveis em JavaScript é utilizando o comando (método) `prompt()`, que exibe uma coisa com um input de formulário para digitação.

```js
var nome = prompt('Digite o seu nome')
alert('Olá ' + nome)
```

Esse comando realiza as tarefas de declarar uma variável e executar o método prompt(). O nome digitado pelo usuário na caixa de diálogo é atribuído à variável nome.

```js
var nome = prompt('Digite o seu nome')
```

![exemplo 1.7.1](/.github/cap01/exe1_7.1.png)

O método `alert()` contém um textmo entre aspas que é um texto fixo a ser exibido na execução do comando, o sinal mais (+) representa a concatenação com a variável nome. O fato de o nome estar sem aspas indica que naquele local deve ser apresentado o conteúdo da variável, e não um texto fixo

```js
alert('Olá ' + nome)
```

![exemplo 1.7.1](/.github/cap01/exe1_7.2.png)

---

### 1.8 COMENTÁRIOS

Um comentário é uma observação inserida pelo programador no código, com o objetivo de explicar algum detalhe do programa. Os comentários não afetam a execução do programa. Eles são ignorados pela linguagem, mas essenciais para o programador. Também é de fundamental importância adicionar comentários para salientar a função de algum comando não utilizado com frequência. Ou, então, alguma particularidade da linguagem ou sistema de desenvolvimento. Os comentários também são importantes quando estamos programando um sistema maior, que será concluído em outro momento ou após alguma outra tarefa. Dessa forma, ao retomar a implementação do programa, a leitura dos comentários vai nos auxiliar a manter a linha de raciocínio, além de facilitar a compreensão do ponto em que havíamos parado. Em JavaScript, os comentários podem ser inseridos para uma linha ou várias, utilizando os seguintes caracteres:

```js
// para comentários de uma linha

/* Para comentário de várias linhas */
```

---

### 1.9 TIPOS DE DADOS E CONVERSÕES DE TIPOS

Em JavaScript, os tipos principais de dados são Strings, Números e valores Booleanos. Saber o tipo de uma variável nos permite identificar quais operações são possíveis para essa variável. Ou, então, qual o comportamento dessa variável nas fórmulas em que elas estão inseridas. Nesse contexto, podemos apresentar uma dessas particularidades no exemplo, no qual o resultado do cálculo é exibido.

```js
var a = '20'
var b = a * 2 // b = 40
var c = a / 2 // c = 10
var d = a - 2 // d = 18
var e = a + 2 // e = 202 ???
```

No exemplo, temos uma variável do tipo String que recebe “20”. Nas operações de multiplicação, divisão e subtração, a linguagem converte esse texto em número e o valor retornado está de acordo com o esperado. Contudo, quando realizamos adição, o valor de retorno é diferente do padrão, pois a linguagem concatena (+) o texto com o número. Podemos resolver esse problema convertendo o texto em número utilizando métodos em JavaScript como Number(), parseInt() e parseDouble(), mas nesse caso o Number() será utilizado para facilitar o processo de aprendizagem.

```js
var a = '20'
var f = Number(a) // convert uma String em Numero.
var g = f + 2 // g = 22
```

Em JavaScript não é necessário definir o tipo da variável na sua declaração. Ela assume um tipo no momento da atribuição de valor. A atribuição de um conteúdo entre aspas cria uma variável do tipo String. Para variáveis numéricas, não devem utilizar aspas. As Booleanas podem conter os valores true ou false. As entradas de dados realizadas com método prompt() criam variáveis do tipo String, exceto se houver uma função de conversão de dados como Number(). Exibir uma variável que não recebeu uma atribuição (sem um valor), vai gerar uma saída `undefined`.

```js
var fruta = 'Manga'
var preco = 350.0
var maiorDeIdade = true
var novoValor
alert(fruta + ' ' + preco + ' ' + maiorDeIdade + ' ' + novoValor)
```

![exemplo 1.9](/.github/cap01/exe1_9.png)

---

### 1.10 EXEMPLOS DE ENTRADA, PROCESSAMENTO E SAÍDA

Vimos que, no geral, para elaborar um programa simples, é necessário realizar três etapas: entrada, processamento e saída. Agora podemos implementar alguns exemplos de algoritmos de programa sequencial, os quais realizam essa etapa:

a) Elaborar um programa que leia um número. Calcule e informe o dobro desse número.

```js
var num = prompt('Numero: ')
var dobro = num * 2
alert('Dobro é: ' + dobro)
```

![exemplo 1.10.1](/.github/cap01/)
![exemplo 1.10.2](/.github/cap01/)

Como a operação realizada é de multiplicação, não é necessário converter a entrada de dados realizada pelo método `prompt()`. Contudo, para calcular o dobro do número a partir de uma operação de adição, a conversão é necessária.

```js
var num = Number(prompt('Numero: '))
var dobro = num + num
alert('Dobro é: ' + dobro)
```

b) Elaborar um programa que leia dois números. Calcule e informe a soma desses números

```js
var num1 = Number(prompt('1º Número: '))
var num2 = Number(prompt('2º Número: '))
var soma = num1 + num2
alert('Soma é: ' + soma)
```

c) Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

```js
var num1 = Number(prompt('Valor do Jantar R$: '))
var garcom = jantar * 0.1
var total = jantar + garcom
alert(
  'Taxa Garçom R$: ' + garcom.toFixed(2) + '\nTotal R$: ' + total.toFixed(2)
)
```

d) Elaborar um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas.

```js
var dias = Number(prompt('Nº Dias: '))
var horas = Number(prompt('Nº Horas: '))
var total = dias * 24 + horas
alert('Total de Horas: ' + total)
```

---

### 1.11 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [Aqui](/capitulo01/exercicios1_11/)

---

### 1.12 CONSIDERAÇÕES FINAIS

Este capítulo destacou os pontos essenciais necessários para o aprendizado de lógica de programação com JavaScript, o quais são:

- Para você se tornar um programador, deve ser persistente e cuidadoso com os detalhes da codificação.
- Lógica de programação é algo que se aprende com treinamento.
- Uma boa regra a seguir para resolver os primeiros exercícios de programação é que todo o programa tem três etapas: entrada, processamento e saída.
- JavaScript é uma linguagem de destaque no cenário atual.
- Existem diversas opções de editores de código JavaScript.
- A linguagem JavaScript dispõe dos comando prompt() e alert() para realizar pequenas interações com o usuários.
- Variáveis é um conceito fundamental para a criação de programas. São as - variáveis que permitem guardar os dados de entrada, armazenar um cálculo ou outro processamento e, a partir delas, exibir dados de saída personalizados para cada interação de um usuário do sistema;

Para nos tornarmos desenvolvedores de sistemas, é preciso construir um conhecimento sólido sobre a base, assim como na construção de um grande edifício, em que o alicerce é fundamental para as demais estruturas.
