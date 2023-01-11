# CAPÍTULO 08 - PERSISTÊNCIA DE DADOS COM LOCALSTORAGE

Nos exemplos e exercícios dos capítulos anteriores, foi possível perceber que as informações digitadas eram perdidas a cada atualização de página. Neste capítulo, veremos como fazer com que informações se tornem persistentes, ou seja, permaneçam salvas no navegador do usuário. Uma das formas de fazer isso no HTML5 é utilizando o `localStorage`. Com ele é possível salvar dados. Com as informações salvas no navegador, quando ele retornar ao site, é possível obter essas informações e personalizar a página de acordo com as escolhas anteriores feitas por ele. Também poderíamos utilizar o localStorage para salvar a lista com os itens de um carrinho de compras do cliente, permitindo que ele conclua o processo em um outro momento.

Além do `localStorage`, há outras formas de salvar dados no navegador do usuário em JavaScript, como a partir do uso de `cookies`, `sessionStorage`, `indexedDB`, `Web SQL`. A escolha pelo `localStorage` é por ser ele uma nova implementação do HTML5, pela capacidade de armazenar uma quantidade maior de dados e também pela facilidade de uso. Os métodos do `localStorage` têm as mesmas funcionalidades se aplicados aos `sessionStorage`. Eles pertencem a Web Storage API do HTML5, sendo que no localStorage os dados se mantêm persistentes até serem excluídos pelo usuário, enquanto no SessionStorage os dados se mantêm apenas por uma sessão.

---

## 8.1 SALVAR E RECUPERAR DADOS

Para salvar uma informação no navegador do usuário com o localStorage, devemos utilizar o método `setItem()`. Esse método contém dois parâmetros: nome da variável e o valor.

```html
<script>
  localStorage.setItem('idade', 17);
</script>
```

Os dados serão salvos no navegador; eles ficam armazenados até que uma ação do usuário ocorra no sentido de excluir ou alterar o seu conteúdo. Uma das formas de visualizar, alterar ou excluir esse dado é acessando o menu ‘Ferramentas do Desenvolvedor no Browser`.

![Exemplo 8.1](/.github/cap08/ex8_1.png)

Um detalhe importante sobre esse processo é que os dados salvos pertencem ao navegador e ao domínio que armazenou os dados. Outro detalhe importante é que o usuário pode remover acidentalmente os dados se limpar o histórico de navegação.

Para recuperar ou verificar a existência de um dado armazenado no navegador, podemos utilizar o método `getItem()` com o nome da chave utilizada. Os dados são salvos como strings. Portanto, cuidado com a execução de cálculos, principalmente de adição, sobre os dados que estão armazenados no localStorage.

```js
var idade = localStorage.getItem('idade');
```

Para resolver o problema podemos utilizar a função `Number()` para realizar a conversão.

```js
var idade = Number(localStorage.getItem('idade'));
```

---

## 8.2 UMA “PITADA” DE BOOTSTRAP

Podemos melhorar a aparência dos exemplos utilizando uma biblioteca ou framework de estilos CSS. Essa biblioteca de componentes front-end é o `BOOTSTRAP`. Ele é basicamente um arquivo que contém um conjunto de estilos CSS prontos para serem aplicados nas páginas. Para utilizá-lo, basta criar uma referência ao arquivo de estilos da biblioteca e indicar o nome da classe de cada elemento HTML a ser utilizado. Os arquivos podem ser baixados no site da biblioteca ou então referenciar um CDN, um site onde os arquivos do framework estão disponíveis. Após baixar os arquivos, só copiar o arquivo `bootstrap.min.css` e colá-lo para a pasta do CSS.

O bootstrap permite organizar o layout de uma página em grids. Cada grid é criada com um elemento `div`, uma espécie de container , como uma `caixa` na qual diversos elementos da página podem ser inseridos. Essas `caixas` devem ficar dentro de um container e podem ainda conter novas subdivisões. O [Exemplo 8.2]() é a criação de uma página de uma loja de esportes. O cliente pode selecionar o clube pelo qual ele torce e essa seleção deve ficar salva no navegador. Conforme o clube, as cores da página e o símbolo do clube são alterados. Abaixo podemos ver a página da loja sem apresentar a imagem do clube do cliente.

![ex8_2.a](/.github/cap08/ex8_2.a.png)

Ao trocar de clube vemos a modificação do estilo dos elementos da `div`, que ocupa a parte superior da página.

![ex8_2.b](/.github/cap08/ex8_2.b.png)

---

## 8.3 REMOVENDO DADOS DO LOCALSTORAGE

É importante adicionar em nossos programas uma opção que permita ao usuário remover os dados salvos no localStorage. Para realizar essa tarefa, a linguagem JavaScript dispõe dos métodos `removeItem()` e `clear()`. O método removeItem() é utilizado para remover o conteúdo de uma variável salva no domínio da página que o criou. Já o método clear() , por sua vez, remove todas as variáveis pertencentes a um domínio e armazenadas em seu navegador. Se quisermos remover a idade salva no script inicial podemos digitar o código abaixo e observar que a variável desapareceu após a execução do comando.

```js
localStorage.removeItem('idade');
```

De volta o exemplo anterior, podemos acrescentar a opção `Nenhum` para caso o cliente queira retornar às cores iniciais exibidas pela página. O [Exemplo 8.3](/capitulo08/exemplos/ex8_3/) mostra essa modificação.

---

## 8.4 USO DO "GETELEMENTSBYTAGNAME()"

Existem outros métodos que também podem ser utilizados e qe, em alguns casos, se tornam mais práticos em termos de organização de código. Um deles é o método `getElementsByTagName()`. Como o nome sugere, esse método captura os elementos da página com uma determinada `TagName`. Os elementos são obtidos como itens de um vetor.

```html
<p>Exemplo</p>
<p>Capítulo 8</p>

<script>
  var p = document.getElementsByTagName('p');
  p[0].style.color = 'blue';
  p[1].style.color = 'red';
</script>
```

Também é possível limitar a busca dos `TagNames` pela referência ao contêiner “pai” dos elementos que se pretende obter.
A captura dos elementos, bem como a associação do evento change à função `trocaClube`, pod ser feita da seguinte forma:

```js
var divResposta = document.getElementById('divResposta');
var p = divResposta.getElementsByTagName('p');
```

A captura dos elementos e a associação do evento `change` à função `trocarClube` pode ser feita da seguinte forma:

```js
// captura as tags input da página
var inputsRadio = document.getElementsByTagName('input');
// percorre os elementos para associar function ao evento change
for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener('change', trocarClube);
}
```

O [Exemplo 8.4](/capitulo08/exemplos/ex8_4/) demonstra outra forma de realizar a troca do nome dos clubes e do estilo `divTitulo`e para explicar o método `removeItem()` da LocalStorage. A `function verificarClube`, também foi ajustada para alterar o item selecionado de acordo com o nome dado ao vetor que contém os elementos `input typr=”radio”` da página.

---

## 8.5 MANIPULAR LISTAS NO LOCALSTORAGE

O carácter “;” pode servir como delimitador dos itens inseridos. Assim, o conteúdo inicial atribuído à variável frutas, por exemplo, na `localStorage` pode ser:

Afim de aplicar essa ideia, o [Exemplo 8.5](/capitulo08/exemplos/ex8_5/) é um programa que replica a brincadeira “Qual é o peso da melancia?”. As respostas são geralmente armazenadas e não pode haver o mesmo número. O ganhador é a pessoa que acertou o peso ou quem chegou mais perto do número correto.

## 8.6 EXECÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [AQUI](/capitulo08/exemplos/ex8_6/)

Exercício 7.6.b
![exemplo 6.1.a](/.github/cap08/ex8_6.b.png)

Exercício 7.6.c
![exemplo 6.1.a](/.github/cap08/ex8_6.c.png)

---

## 8.7 CONSIDERAÇÕES FINAIS DO CAPÍTULO

A linguagem JavaScript dispõe dos métodos `localStorage.setItem("chave", valor)` para gravar um conteúdo no Local
Storage e `localStorage.getItem("chave")` para recuperar esse conteúdo. Também é possível excluir os dados salvos pelo cliente em seu navegador, a partir dos métodos `localStorage.removeItem("chave")` e `localStorage.clear()`, que excluem uma variável ou todas as variáveis salvas em um domínio, respectivamente. A capacidade de armazenamento dos dados salvos no local Storage por domínio é, no geral, de 5 MB. Com isso, é possível manipular pequenas listas de dados explorando as técnicas de programação discutidas nos capítulos que abordam o tratamento de strings e vetores.

No entanto, além dos aspectos relacionados à pratica das técnicas de programação como persistência de dados, importantes para o processo de aprendizado, salvar dados no navegador do usuário é um recurso igualmente impornates na construção de sistemas web.
