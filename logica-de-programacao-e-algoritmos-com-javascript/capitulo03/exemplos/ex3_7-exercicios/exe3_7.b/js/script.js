function verificarMulta() {
  // cria uma referência aos elementos da página
  var inVelPermitida = document.getElementById('inVelPermitida')
  var inVelCondutor = document.getElementById('inVelCondutor')
  var outSituacao = document.getElementById('outSituacao')

  // obtém e converte conteúdo dos campos de Velocidade
  var velPermitida = Number(inVelPermitida.value)
  var velCondutor = Number(inVelCondutor.value)

  // se não preencheu ou Not-a-Number (NaN)a
  if (
    inVelPermitida.value == '' ||
    isNaN(velPermitida) ||
    inVelCondutor.value == '' ||
    isNaN(velCondutor)
  ) {
    // exibe mensagem de advertência
    alert('Informe as velocidades corretamente...')
    // posiciona no campo de edição inVelPermitida
    inVelPermitida.focus()
    return
  }

  // cria as condições para verificar situação do condutor
  if (velCondutor <= velPermitida) {
    outSituacao.textContent = 'Situação: Sem Multa'
  } else {
    var maisVinte = velPermitida * 1.2
    if (velCondutor <= maisVinte) {
      outSituacao.textContent = 'Situação: Multa Leve'
    } else {
      outSituacao.textContent = 'Situação: Multa Grave'
    }
  }
}
// cria uma referência ao elemento btExibir (botão)
var btVerificar = document.getElementById('btVerificar')
// registra um evento associado ao botão, para carregar verificarMulta
btVerificar.addEventListener('click', verificarMulta)
