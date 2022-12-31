// c) Um supermercado está com uma promoção – Para aumentar suas vendas no
// setor de higiene, cada etiqueta de produto deve exibir uma mensagem
// anunciando 50% de desconto (para um item) na compra de três
// unidades do produto. Elaborar um programa que leia descrição e preço
// de um produto. Após, apresente as mensagens indicando a promoção –
// conforme o exemplo ilustrado na Figura 2.13.

function calcularPromocao() {
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outValorDaPromocao = document.getElementById("outValorDaPromocao");
  var outValorDoProduto = document.getElementById("outValorDoProduto");

  var produto = inProduto.value;
  var preco = Number(inPreco.value * 2);
  var descontoNoTerceiroproduto = Math.sqrt(Number(inPreco.value));
  var valordDosTresProdutos = (preco + descontoNoTerceiroproduto).toFixed(2);

  outValorDaPromocao.textContent =
    produto + " - Promoção: Leve 3 por R$: " + valordDosTresProdutos;
  outValorDoProduto.textContent =
    "O 3º produto custa apenas R$: " + descontoNoTerceiroproduto.toFixed(2);
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularPromocao);
