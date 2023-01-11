function adicionarProduto() {
  var inProduto = document.getElementById('inProduto');

  var produto = inProduto.value;

  if (produto == '') {
    alert('informe o produto');
    inProduto.focus();
    return;
  }

  if (localStorage.getItem('comprasProduto')) {
    produtos = localStorage.getItem('comprasProduto').split(';');

    produtos.push(produto);

    produtos.sort();

    localStorage.setItem('comprasProduto', produtos.join(';'));
  } else {
    localStorage.setItem('comprasProduto', produtos);
  }

  listarProdutos();

  inProduto.value = '';
  inProduto.focus();
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarProduto);

function listarProdutos() {
  var outCompras = document.getElementById('outCompras');

  if (!localStorage.getItem('comprasProduto')) {
    outCompras.textContent = '';
    return;
  }

  produtos = localStorage.getItem('comprasProduto').split(';');

  outCompras.textContent =
    'Produtos Adicionados\n-----------------------\n' + produtos.join('\n');
}
listarProdutos();

function limparLista() {
  if (localStorage.getItem('comprasProduto')) {
    if (confirm('Deseja realmente excluir todos os itens da lista?')) {
      localStorage.removeItem('comprasProduto');
      listarProdutos();
    }
  } else {
    alert('Lista está vazia...');
  }
}
var btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limparLista);
