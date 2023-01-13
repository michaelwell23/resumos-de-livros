# CAPÍTULO 09 - INSERIR ELEMENTOS HTML VIA JAVASCRIPT

Para ampliar a interação com o usuário, veremos como inserir elementos HTML na página, modificar suas propriedades, estilos, bem como remover esses elementos. Depois de o usuário interagir com os dados da página, é possível enviar esses dados para Web Services ou uma API. O processo de utilizar um código JavaScript para auxiliar na composição do layout de uma página HTML pode conter outros inúmeros exemplos. Para “mergulhar” nesse contexto, é necessário entender a forma utilizada pela linguagem HTML para organizar a estrutura dos elementos (tags) que compõem uma página.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Lógica de Programação e Algoritmos com JavaScript</title>
  </head>
  <body>
    <h1>Capítulo 9</h1>
    <p>Inserir Elementos HTML via JavaScript</p>
    <div id="quadro1" style="display: inline-block">
      <img src="img/fig1.jpg" alt="Paisagem 1" />
      <p>Detalhes da Figura 1</p>
    </div>
    <div id="quadro2" style="display: inline-block">
      <img src="img/fig2.jpg" alt="Paisagem 2" />
      <p>Detalhes da Figura 2</p>
    </div>
  </body>
</html>
```

Os elementos HTML que compões uma página são organizados pelo navegador na memória principal da máquina como uma estrutura hierárquica semelhante a uma árvore genealógica de uma família. A convenção HTML utilizada para representar os componentes de uma página é chamada de DOM ou modelo de objeto do documento.

Se observarmos, a tag HTML se comporta como “pai” das tags `head` e `body`, por sua vez, tem como "filhas" as tags h1 , p e as divs. Cada div tem duas tags filhas, img e p. Em JavaScript, para inserir uma nova tag HTML na página, deve-se criar uma referência ao elemento pai, e adicionar a ele um filho.

![EX9_0](/.github/cap09/ex9_0.png);

---

## 9.1 iNSERIR E MANIPULAR ELEMENTOS DE TEXTO

Para inserir novos elementos de texto em uma página web via programação JavaScript, podem ser utilizados os métodos `createElement()`, `createTextNode()` e `appendChild()`. O método `createElement()` é responsável por criar um novo elemento a ser adicionado na página. No caso dos elementos de texto, é necessário utilizar o método `createTextNode()` com o texto a ser inserido. Já o método `appendChild()` tem a tarefa de indicar a relação “pai” e “filho” entre os elementos que compõem a árvore DOM. A partir dele, é possível definir o local da página onde o elemento será posicionado. O [Exemplo 9.1](/capitulo09/exemplos/ex9_1/) é um programa que tem como objetivo adicionar itens em uma lista.

![ex_9_1.a](/.github/cap09/ex9_1.png)

![ex_9_1.b](/.github/cap09/ex9_1.b.png)

![ex_9_1.c](/.github/cap09/ex9_1.c.png)

---

## 9.2 INSERIR IMAGENS

Para inserir uma imagem, bem como qualquer outro elemento na página, é necessário seguir os mesmos passos já discutidos na seção inserida:

- identificar na árvore DOM o local onde a imagem será inserida;
- criar uma referência ao elemento pai dessa imagem;
- criar a imagem;
- modificar seus atributos;
- indicar a relação de pai e filho entre os objetos;

Caso o pai do elemento a ser inserido na página seja o próprio documento HTML, pode-se criar uma referência ao elemento `body`. O [Exemplo 9.2](/capitulo09/exemplos/ex9_2/) é um programa que faz a inserção de imagens na página. A cada execução, o programa deve gerar um novo número de moedas e a criança deve informar a soma e conferir se o cálculo que fez está correto.

![ex_9_2.a](/.github/cap09/ex9_2.a.png)

A exibição da mensagem de resposta correta ou incorreta é feita utilizando uma caixa estilizada pelo Bootstrap e criada no programa com o método `createElement()`.

![ex_9_2.b](/.github/cap09/ex9_2.b.png)

---

## 9.3 MANIPULANDO TABELAS HTML

As tags básicas para criar uma tabela são: `table`para definir a tabela, `tr` para criar uma nova linha e `td` para criar uma nova coluna em uma linha. Também há a tag `th`que define uma célula de cabeçalho na tabela. Para definir uma nova tabela via programação JavaScript, é possível utilizar os mesmo comandos das seções anteriores e indicar que um texto deve ser filho de `td`, `td` filho de `tr` e `tr` filho de `table`. Para facilitar a manipulação, existem métodos `insertRow(num)` e insertCell(num), que inserem, respectivamente, uma linha e uma coluna na tabela. Os parâmetros referem-se à posição da linha ou coluna a ser inserida na tabela. Também é possível remover uma linha da tabela a partir do método `deleteRow(num)`. O parâmetro indica o número da linha a ser removida.

Outro importante recurso para a manipulação de tabelas é ter acesso ao conteúdo de uma célula da tabela,o que pode ser feito com a criação de referência aos índices que apontam para uma linha e coluna da tabela. Utilizar `table.rows[0.cells[0] recupera o conteúdo da primeira célula da tabela. O [Exemplo 9.3](/capitulo09/exemplos/ex9_3/) explora esses métodos e propriedades manipulando tabelas. Esse programa deve cadastrar filmes na localStorage e exibir uma tabela contendo título, gênero e uma coluna que permite ao usuário selecionar o filme para exclusão.

![ex_9_3.a](/.github/cap09/ex9_3.png)
![ex_9_3.b](/.github/cap09/ex9_3.b.png)

## 9.4 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [AQUI](/capitulo09/exemplos/ex9_4/)

![ex_9_3.a](/.github/cap09/ex9_4.a.png)
![ex_9_3.b](/.github/cap09/ex9_4.b.png)
![ex_9_3.c](/.github/cap09/ex9_4.c.png)

---

## 9.5 CONSIDERAÇÕES FINAIS DO CAPÍTULO

O capítulo procurou explorar a inserção de elementos HTML na página via JavaScript a fim de tornar mais rica as interações com o usuário. Os métodos JavaScript `createElement()` e `appendChild()` são os responsáveis para criar uma nova tag no documento e acrescentar um “filho” a um determinado elemento HTML da página, respectivamente. Para tags de texto, como parágrafos ou linhas de cabeçalho, é preciso utilizar o método `createTextNode()` com o conteúdo a ser inserido no documento. Já as tabelas HTML contêm métodos especiais que simplificam o processo. São eles: processo. `insertRow()`, `insertCell()` e `deleteRow()`. Além da possibilidade de inserir novos elementos na página. entender a organização do modelo da árvore DOM também nos facilita na tarefa de percorrer os elementos da página a fim de recuperar ou alterar o seu conteúdo.
