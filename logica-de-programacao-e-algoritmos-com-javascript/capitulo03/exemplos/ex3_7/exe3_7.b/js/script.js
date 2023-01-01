function verificarMulta() {
  var inVelPermitida = document.getElementById('inVelPermitida');
  var inVelCondutor = document.getElementById('inVelCondutor');
  var outSituacao = document.getElementById('outSituacao');

  var velPermitida = Number(inVelPermitida.value);
  var velCondutor = Number(inVelCondutor.value);

  if (
    inVelPermitida.value == '' ||
    isNaN(velPermitida) ||
    inVelCondutor.value == '' ||
    isNaN(velCondutor)
  ) {
    alert('Informe as velocidades corretamente...');

    inVelPermitida.focus();
    return;
  }

  if (velCondutor <= velPermitida) {
    outSituacao.textContent = 'Situação: Sem Multa';
  } else {
    var maisVinte = velPermitida * 1.2;
    if (velCondutor <= maisVinte) {
      outSituacao.textContent = 'Situação: Multa Leve';
    } else {
      outSituacao.textContent = 'Situação: Multa Grave';
    }
  }
}

var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificarMulta);
