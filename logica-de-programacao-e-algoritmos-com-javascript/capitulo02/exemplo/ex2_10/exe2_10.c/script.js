// c) Um supermercado está com uma promoção – Para aumentar suas vendas no
// setor de higiene, cada etiqueta de produto deve exibir uma mensagem
// anunciando 50% de desconto (para um item) na compra de três
// unidades do produto. Elaborar um programa que leia descrição e preço
// de um produto. Após, apresente as mensagens indicando a promoção –
// conforme o exemplo ilustrado na Figura 2.13.

function calcularDesconto() {
  var inPruduto = document.getElementById('inProduto')
  var inPreco = document.getElementById('inPreco')
  var outValorPromocao = document.getElementById('outValorPromocao')
  var outValorProduto = document.getElementById('outValorProduto')

  var produto = inProduto.value
  var precoProduto = Number(inPreco.value * 2)
  var descontoProduto = Math.sqrt(Number(inPreco.value))
  var produtoMaisDesconto = precoProduto + descontoProduto

  outValorPromocao.textContent =
    produto + ' - Promoção: Leve 3 por ' + produtoMaisDesconto.toFixed(2)
  outValorProduto.textContent =
    'O 3º produto custa apenas R$:' + descontoProduto.toFixed(2)
}

var btCalcularPromocao = document.getElementById('btCalcularPromocao')
btCalcularPromocao.addEventListener('click', calcularDesconto)
