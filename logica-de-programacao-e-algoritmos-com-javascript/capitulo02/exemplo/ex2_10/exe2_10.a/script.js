// a) Uma farmácia está com uma promoção – Na compra de duas unidades de um
// mesmo medicamento, o cliente recebe como desconto os centavos do
// valor total. Elaborar um programa que leia descrição e preço de um
// medicamento. Informe o valor do produto na promoção.

function calcularPromocaoDeRemedio() {
  var inMedicamento = document.getElementById('inMedicamento')
  var inPreco = document.getElementById('inPreco')
  var outMedimento = document.getElementById('outMedicamento')
  var outPromocao = document.getElementById('outPromocao')

  var medicamento = inMedicamento.value
  var preco = Number(inPreco.value) * 2
  var valor = Math.floor(preco)

  outMedimento.textContent = 'Promoçao de ' + medicamento
  outPromocao.textContent = 'Leve 2 por apena R$: ' + valor + '.00'
}

var btMostrarPromocao = document.getElementById('btMostrarPromocao')
btMostrarPromocao.addEventListener('click', calcularPromocao)
