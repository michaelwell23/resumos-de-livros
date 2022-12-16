function calculoPreco() {
  var inQuilo = document.getElementById('inQuilo')
  var inConsumo = document.getElementById('inConsumo')
  var outValor = document.getElementById('outValor')

  var quilo = Number(inQuilo.value)
  var cosumo = Number(inConsumo.value)

  var valor = (quilo / 1000) * cosumo
  outValor.textContent = 'Valor a pagr R$: ' + valor.toFixed(2)
}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calculoPreco)
