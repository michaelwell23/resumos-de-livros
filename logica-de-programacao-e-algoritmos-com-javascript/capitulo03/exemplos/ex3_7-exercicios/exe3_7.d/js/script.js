function verificarTriangulo() {
  // obtém elementos da página
  var inLadoA = document.getElementById('inLadoA')
  var inLadoB = document.getElementById('inLadoB')
  var inLadoC = document.getElementById('inLadoC')
  var outSimNao = document.getElementById('outSimNao')
  var outTipo = document.getElementById('outTipo')

  // converte dados de entrada
  ladoA = Number(inLadoA.value)
  ladoB = Number(inLadoB.value)
  ladoC = Number(inLadoC.value)

  // valida os dados de entrada
  if (
    ladoA == 0 ||
    ladoB == 0 ||
    ladoC == 0 ||
    isNaN(ladoA) ||
    isNaN(ladoB) ||
    isNaN(ladoC)
  ) {
    alert('Informe lados válidos para o triângulo')
    inLadoA.focus()
    return
  }
  //open.spotify.com/track/2iWTHXaFtRSMhd5OLpYD7f
  // cria as condições para exibir a resposta
  https: if (
    ladoA > ladoB + ladoC ||
    ladoB > ladoA + ladoC ||
    ladoC > ladoA + ladoB
  ) {
    outSimNao.textContent = 'Lados não podem formar um triângulo'
  } else {
    outSimNao.textContent = 'Lados podem formar um triângulo'
    if (ladoA == ladoB && ladoA == ladoC) {
      outTipo.textContent = 'Tipo: Equilátero'
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipo.textContent = 'Tipo: Isósceles'
    } else {
      outTipo.textContent = 'Tipo: Escaleno'
    }
  }
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarTriangulo)
