# CAPITULO 02 - INTEGRAÇÃI COM HTML

Para desenvolver uma página web, devemos criar um arquivo HTML que contém tags que definem o conteúdo e a semântica dos elementos que constituem a página. Os códigos de programas JavaScript são desenvolvidos para adicionar um comportamento à página.Igualmente, não é preciso compilar o programa ou outra ação adicional. O próprio navegador contém um interpretador para os programas JavaScript. Eles são inseridos nas páginas web em uma seção delimitada pelas tags `<script></script>` ou em um arquivo .js que deve ser referenciado pelo documento HTML.

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

## 2.3 INTRODUÇÃO A EVENTOS E FUNÇÕES

Muito da programação JavaScript construída em páginas web é desenvolvida desta forma: elas são acionadas a partir da ocorrência de um evento. Quando o usuário executa uma ação, o programa responde ao evento do usuário com uma ou mais ações programadas em uma função. O evento mais comum de ser programado é o clique no botão. Para criar um evento e definir qualquer função será acionada quando esses eventos ocorrerem, deve-se utilizar uma palavra reservada para indicar para qual evento a linguagem ficará “na escuta”, seguindo do nome da função a ser acionada. A palavra reservado pode ser `(on)click`, `(on)change`, `(on)submit`, `(on)blur` ou `(on)load`. Já as funções JavaScript são declaradas a partir da palavra-chave `function` seguida do nome da função e dos parênteses (). Os comando que pertence a uma função devem estar delimitados pelas chaves {}.

```js
function mostrarOla() {
  var nome = document.getElementById('nome').value
  document.getElementById('resposta').textContent = 'Olá ' + nome
}
```

Uma função contém um conjunto de comandos que realizam uma ação. Como uma função executa um conjunto de ações é uma boa prática de programação dar um nome para a função começando por um verbo. O uso de camelcase é também um padrão recomendado e facilita a compreensão da leitura do nome.

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
