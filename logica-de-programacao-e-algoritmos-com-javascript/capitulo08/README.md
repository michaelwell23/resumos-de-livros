# CAPÍTULO 08 - PERSISTÊNCIA DE DADOS COM LOCALSTORAGE

Nos exemplos e exercícios dos capítulos anteriores, foi possível perceber que as informações digitadas eram perdidas a cada atualização de página. Neste capítulo, veremos como fazer com que informações se tornem persistentes, ou seja, permaneçam salvas no navegador do usuário. Uma das formas de fazer isso no HTML5 é utilizando o `localStorage`. Com ele é possível salvar dados. Com as informações salvas no navegador, quando ele retornar ao site, é possível obter essas informações e personalizar a página de acordo com as escolhas anteriores feitas por ele. Também poderíamos utilizar o localStorage para salvar a lista com os itens de um carrinho de compras do cliente, permitindo que ele conclua o processo em um outro momento.

Além do `localStorage`, há outras formas de salvar dados no navegador do usuário em JavaScript, como a partir do uso de `cookies`, `sessionStorage`, `indexedDB`, `Web SQL`. A escolha pelo `localStorage` é por ser ele uma nova implementação do HTML5, pela capacidade de armazenar uma quantidade maior de dados e também pela facilidade de uso. Os métodos do `localStorage` têm as mesmas funcionalidades se aplicados aos `sessionStorage`. Eles pertencem a Web Storage API do HTML5, sendo que no localStorage os dados se mantêm persistentes até serem excluídos pelo usuário, enquanto no SessionStorage os dados se mantêm apenas por uma sessão.

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
