function calcularSeParOuImpar() {
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  var numero = Number(inNumero.value)

  if (numero % 2 === 0) {
    outResposta.textContent = 'Resposta: ' + numero + ' é Par'
  } else {
    outResposta.textContent = 'Resposta: ' + numero + ' é Ímpar'
  }
}

var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', calcularSeParOuImpar)
