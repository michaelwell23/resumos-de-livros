function mostrarPromocao() {
  var inVeiculo = document.getElementById('inVeiculo')
  var inPreco = document.getElementById('inPreco')
  var outVeiculo = document.getElementById('outVeiculo')
  var outEntrada = document.getElementById('outEntrada')
  var outParcela = document.getElementById('outParcela')

  var veiculo = inVeiculo.value
  var preco = Number(inPreco.value)

  var entrada = preco * 0.5
  var parcela = (preco * 0.5) / 12

  outVeiculo.textContent = 'Promoção: ' + veiculo
  outEntrada.textContent = 'Entrada de R$: ' + entrada.toFixed(2)
  outParcela.textContent = '+ 12x de R$: ' + parcela.toFixed(2)
}

var btVerPromocao = document.getElementById('btVerPromocao')
btVerPromocao.addEventListener('click', mostrarPromocao)
