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
