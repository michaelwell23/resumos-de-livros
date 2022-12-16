# CAPITULO 02 - INTEGRAÇÃI COM HTML

Para desenvolver uma página web, devemos criar um arquivo HTML que contém tags que definem o conteúdo e a semântica dos elementos que constituem a página. Os códigos de programas JavaScript são desenvolvidos para adicionar um comportamento à página.Igualmente, não é preciso compilar o programa ou outra ação adicional. O próprio navegador contém um interpretador para os programas JavaScript. Eles são inseridos nas páginas web em uma seção delimitada pelas tags `<script></script>` ou em um arquivo .js que deve ser referenciado pelo documento HTML.

---

## 2.1 ESTRUTURA BÁSICA DE UM DOCUMENTO HTML

Para criar um novo arquivo HTML, podemos inserir algumas tags que definem as seções e configurações básicas do documento. No Visual Studio Code, podemos iniciar um arquivo e salvá-lo com a extensão .html. Ao abrir este arquivo no editor, podemos digitar um ! para que o editor nos insira uma estrutura básica de um documento HTML. Pressionando Tab ou Enter o código da estrura básica HTML será inserido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Depois de inserir a estrutura básica, podemos trocar o “en” para “pt-BR”. Definindo corretamente o idioma do documento é importante para uma melhor pronúncia por softwares de leitura de tela, além de indicar ao browser o dicionário a ser utilizado para a correção gramatical de textos digitados em campos de formulários.

```html
<html lang="pt-BR"></html>
```

Outro detalhe importante é que as tags geralmente são declaradas aos pares. html, head e body. As tags head e body definem as seções principais da página. Na seção de cabeçalho (head), foram inseridas três metatags e o título do documento. O título define o texto que será exibido na barra superior do navegador. `<meta charset ...>` serve para definir a página de códigos do documento. A metatag `<meta name=“viewport” …>` está relacionada ao processo de criação de páginas responsivas, ou seja, que respondem adequadamente aos diversos tipos de dispositivos. Já a `<meta http-equiv…>` tem relação com os aspectos de compatibilidade entre navegadores.

---

## 2.2 CABEÇALHO, PARÁGRAFO E CAMPOS DE FORMULÁRIO

Podemos acrescentar algumas tags ao corpo do documento:

```html
<h1>Programa Olá Você!</h1>
<p>
  Nome: <input type="text" id="nome" />
  <input type="button" value="Mostrar" />
</p>
<p id="resposta"></p>
```

A tag h1 serve para destacar um texto com um conteúdo relevante no site. A tag input é a tag que cria um formulário para digitação de dados. Cada campo deve possuir um identificador (id) a ser utilizado no código JavaScript para obter o conteúdo do campo. E a tag `<input type=”button” …>`, cria um botão geralmente para acionar um programa JavaScript. Esses dois últimos comandos estão dentro de um parágrafo criado com as tags `p`. A última linha cria um novo parágrafo no documento, que será utilizado para exibir a mensagem de resposta do programa.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Programa Olá Você!</h1>
    <p>
      Nome: <input type="text" id="nome" />
      <input type="button" value="Mostrar" />
    </p>
    <p id="resposta"></p>
  </body>
</html>
```

Depois de digitar e salvar o código, podemos abrir documento HTML no navegador e o resultado é mais ou menos parecido com a imagem abaixo:

![img](/.github/cap02/exe2_1.png)

---

## 2.3 INTRODUÇÃO A EVENTOS E FUNÇÕES

Muito da programação JavaScript construída em páginas web é desenvolvida desta forma: elas são acionadas a partir da ocorrência de um evento. Quando o usuário executa uma ação, o programa responde ao evento do usuário com uma ou mais ações programadas em uma função. O evento mais comum de ser programado é o clique no botão. Para criar um evento e definir qualquer função será acionada quando esses eventos ocorrerem, deve-se utilizar uma palavra reservada para indicar para qual evento a linguagem ficará “na escuta”, seguindo do nome da função a ser acionada. A palavra reservado pode ser `(on)click`, `(on)change`, `(on)submit`, `(on)blur` ou `(on)load`. Já as funções JavaScript são declaradas a partir da palavra-chave `function` seguida do nome da função e dos parênteses (). Os comando que pertence a uma função devem estar delimitados pelas chaves {}.

```js
function mostrarOla() {
  var nome = document.getElementById('nome').value
  document.getElementById('resposta').textContent = 'Olá ' + nome
}
```

Uma função contém um conjunto de comandos que realizam uma ação. Como uma função executa um conjunto de ações é uma boa prática de programação dar um nome para a função começando por um verbo. O uso de camelcase é também um padrão recomendado e facilita a compreensão da leitura do nome.

---

## 2.4 MÉTODO getElementById()

Se quiser referenciar um elemento HTML, deve-se utilizar o método `getElementById()`, que permite referenciar qualquer elemento da página, como um campo de formulário, um parágrafo, um botão, uma imagem, entre outros. Podemos armazenar a referência a um elemento em uma variável e depois obter sua propriedade.

```js
var inputNome = document.getElementById('nome')
var nome = inputNome.value
```

Ou, então, utilizar um único comando, acessando diretamente a propriedade que queremos obter ou alterar, como a seguir.

```js
var inputNome = document.getElementById('nome').value
```

Se o programa trabalhar com o mesmo elemento mais de uma vez é recomendado armazenar a localização dele em uma variável. Caso contrário, você pode fazer uma referência em uma única linha. Neste capítulo, termos novos foram introduzidos, como objetos, métodos e propriedade, a seguir há uma forma resumida do que cada um deles representa:

- `Objeto` – representa uma instância de uma classe.
- `Método` – representa uma instrução ou um conjunto de instruções que executam uma tarefa
- `Propriedade` – representa uma característica (atributo) de um objeto.

---

## 2.5 PROPRIEDADE textContent, innerHTML e value

A propriedade `value` obtém ou altera o conteúdo de um campo de formulário HTML. Portanto, para obter o nome do usuário, é preciso utilizar essa propriedade junto com o método `getElementById()` que faz uma referência a um campo de formulário identificado no código HTML. Já a propriedade `textContent` serve para alterar ou obter o conteúdo de elementos de texto do documento identificados no código HTML. É possível, portanto, alterar o texto de qualquer parágrafo ou texto de cabeçalho em uma página web utilizando essa propriedade. Há também a propriedade innerHTML, semelhante a textContent quando aos elemento em que atua, porém renderiza os códigos HTML existentes no seu conteúdo.

---

## 2.6 FORMAS DE ADICIONAR JAVASCRIPT AO HTML

Agora podemos ver como criar um “link” entre uma página HTML básica e uma função JavaScript.

### 2.6.1 USO DE ROTINAS DE TRATAMENTO DE EVENTOS HTML

Uma das formas de indicar qual função JavaScript será executada quando um determinado evento ocorrer é invocar a chamada da função dentro do próprio elemento HTML. Assim, a tag programada deve conter a palavra-chave que indica o evento associado ao nome da função a ser executada.

```html
<input type="button" value="Mostrar" onclick="mostrarOla()" />
```

Aqui os códigos seriam inseridos no documento HTML dentro da tag `<script></script>` e da função. Essa forma de vinculação não é considerada uma boa prática visto que o HTML e JavaScript tem papel diferente no processo de construção de sites, deixando o arquivo muito grande e desorganizado.

### 2.6.2 USO DE ROTINA DE TRATAMENTO DE EVENTOS DOM

Separar o conteúdo JavaScript do HTML é um modo melhor de organizar os documentos de um site. Para vincular um arquivo externo .js à um documento HTML é necessário usar a seguinte tag:

```html
<script scr="ex2_6/ex2_6_2/script.js">
```

E adicionar um identificador para o botão que vai controlar o evento `onClick` para que ele seja referenciado.

```html
<input type="button" value="Mostrar" id="mostrar" />
```

No arquivo `.js`, as funções devem estar no início do arquivo. Em seguida, é necessário referenciar o elemento programado para adicionar o script.

```js
function mostrarOla() {
  var nome = document.getElementById('nome').value
  document.getElementById('resposta').innerHTML = 'Olá ' + nome
}
var mostrar = document.getElementById('mostrar')
mostrar.onclick = mostrarOla
```

Essa abordagem é conhecida como rotina de tratamento de eventos `DOM`. A `DOM` (Document Object Model) permite acessar cada elemento de uma página HTML como uma estrutura hierárquica, também conhecido como árvore da DOM, é semelhante à árvore genealógica de uma família.

### 2.6.3 USO DOS LISTENERS (OUVINTES) DE EVENTOS

Para criar um listener , deve-se utilizar o método `addEventListener`, cuja sintaxe é:
Após o nome da função, pode ainda ser informado um terceiro parâmetro. Ele é opcional e indica a forma de propagação do evento.

```js
// declara a função mostrarOla
function mostrarOla() {
  // obtém o conteúdo do campo (com id=) nome
  var nome = document.getElementById('nome').value
  // exibe no parágrafo (resposta): "Olá " e o nome informado
  document.getElementById('resposta').textContent = 'Olá ' + nome
}
// cria uma referência ao botão (com id=) mostrar
var mostrar = document.getElementById('mostrar')
// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener('click', mostrarOla)
```

Depois de salvar os arquivos, é importante testar o programa. Na execução do script podemos verificar se o programa está funcionando corretamente.

![exemplo 2.6.3](/.github/cap02/exe2_6.3.png)

---

## 2.7 NOMENCLATURA E ESCOPO DE VARIÁVEIS

Podemos definir nomes dos elementos HTML precedidos por letras que nos indicam o seu uso nos programas. E nos programas JavaScript, ao referenciar os elementos, podemos manter o mesmo nome. Já as variáveis que recebem o conteúdo de um campo não utilizam esses caracteres iniciais. Esse padrão visa facilitar o processo de aprendizagem. Outro detalhe importante sobre variáveis é que elas têm um `escopo` de abrangência. As variáveis declaradas dentro de uma função ou de um bloco {} são denominadas variáveis locais, isso significa que só tem validada no local onde ela é declarada. Já as variáveis declaradas fora das funções de fora de um bloco, são consideradas globais, e valem para todo o programa. Sempre que possível, de preferência por utilizar variáveis locais, pois o espaço alocado por uma variável local é liberado após a conclusão da função. Além disso, diversos outros problemas podem ser evitados, como a redefinição de valor de uma variável global já existente. Um outro coisado é com relação a declaração das variáveis, não se esqueça de utilizar a palavra `var`. Declarar uma variável sem a palavra var faz com que ela seja interpretada como global, mesmo se declarada dentro de um escopo.

---

## 2.8 OPERADORES ARITMÉTICOS FUNÇÕES MATEMÁTICAS

Além dos operadores básicos de matemática as linguagens de programação dispõe também do operador módulo (%) que é utilizado para obter o resto da divisão entre dois números.

```js
var valor1 = 5 % 2 // valor1 = 1
var valor2 = 7 % 4 // valor2 = 3
```

Na primeira expressão, a variável `valor1` recebe 1 porque 5 dividido por 2 é 2 e o resto é 1. Na segunda expressão, a variável `valor2` recebe 3 porque 7 dividido por 4 é 1 e o resto da divisão é 3.

Outros cálculos como raiz quadrada, seno, cosseno podem ser obtidos em JavaScript com o uso das funções matemáticas da classe `Math`.

| Exemplo             | Valor do exemplo                                                |
| ------------------- | --------------------------------------------------------------- |
| Math.abs(num)       | Retorna o valor absoluto de um número positivo.                 |
| Math.ceil(num)      | Aredonda o valor para cima.                                     |
| Math.floor(num)     | Arredonda o valor para baixo                                    |
| Math.pow(base, exp) | Retorna a base elevada ao expoente                              |
| Math.random()       | Retorna um número aleatóri entre 0 1, com várias casas decimais |
| Math.round(num)     | Arredonda o valor para o inteiro mais próximo.                  |
| Math.sqrt(num)      | Retorna a raiz quadrada do número                               |

Ao criar funções matemáticas, devemos ter o cuidado com a ordem de precedência dos operadores. Ao montar uma expressão matemática, fique atento à ordem hierárquica de execução dos operadores, eles podem alterar significativamente o resultado obtido.

```js
var media1 = (nota1 + nota2) / 2
var media2 = nota1 + nota2 / 2
```

No exemplo, podemos notar que o valor das variáveis não são o mesmo. Na primeira linha, a ordem de precedencia matemática executa a expressão que está dentro do parentêses e o resultado da soma será divido. Já na segunda linha, a divisão é executada e o resultado é soma com a nota1.

---

## 2.9 EXEMPLOS DE PROGRAMAS JAVASCRIPT INTEGRADOS COM HTML

Observe os exemplos de dados de entrada e saída de cada programa, que utiliza funções matemáticas e o operador módulo:

**a) Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um lme em minutos. Exiba o título do lme e converta a duração para horas e minutos.**

![exemplo 2.9.a](/.github/cap02/exe2_9.1.png)

Você pode ver os arquivos [AQUI](/capitulo02/exemplo/ex2_9/ex2_9.a/);

**b) Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.**

![exemplo 2.9.b](/.github/cap02/exe2_9.2.png)

Você pode ver os arquivos [AQUI](/capitulo02/exemplo/ex2_9/ex2_9.b/);

**c) Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago.**

![exemplo 2.9.b](/.github/cap02/exe2_9.3.png)

Você pode ver os arquivos [AQUI](/capitulo02/exemplo/ex2_9/ex2_9.c/);

---

## 2.10 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [Aqui](/capitulo02/exemplo/ex2_10/)

---

## 2.11 CONCLUSÕES FINAIS

Para rodar um programa na página, não é necessário realizar qualquer processo adicional, pois o próprio navegador possui um interpretador para os códigos JavaScript. Para criar um documento HTML, é necessário inserir algumas tags básicas que definem a estrutura da página. Compete ao HTML determinar o conteúdo e a semântica dos elementos que compõem um site.

A programação JavaScript em uma página web é geralmente acionada a partir da ocorrência de um evento. Os programas, por sua vez, devem ser criados contendo uma função. Assim, quando o evento ocorre, a função contendo um conjunto de ações a serem executadas é acionada. Para referenciar um elemento HTML da página, seja um campo de formulário ou parágrafo de texto, é necessário identificá-lo no código HTML e, em seguida, utilizar o método `getElementById()` no programa JavaScript.

A interação do arquivo JavaScript com HTML pode ocorrer de três formas:

Também foram apresentadas as principais funções matemáticas disponíveis na classe `Math`. Eles auxiliam na realização de cálculos.
