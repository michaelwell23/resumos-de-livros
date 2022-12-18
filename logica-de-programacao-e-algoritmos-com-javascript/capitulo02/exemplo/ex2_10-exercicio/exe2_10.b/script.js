// b) Elaborar um programa para uma lan house de um aeroporto – O programa deve
// ler o valor de cada 15 minutos de uso de um computador e o tempo de
// uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
// sabendo que as frações extras de 15 minutos devem ser cobradas de
// forma integral. A Figura 2.12 exibe um exemplo com dados do
// programa.

function calculaValorAPagar() {
  var inValorPorMinuto = document.getElementById('inValorPorMinuto').value
  var inTempoDeUso = document.getElementById('inTempoDeUso').value
  var outValor = document.getElementById('outValor')

  var calcularTempo = Number(Math.ceil(inTempoDeUso / 15))
  var valor = Number(inValorPorMinuto)

  var valorTotal = valor * calcularTempo

  outValor.textContent = 'Valor a Pagar: R$' + valorTotal.toFixed(2)
}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularValorAPagar)
