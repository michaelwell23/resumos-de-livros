function verificarMulta() {
  var inValor = document.getElementById('inValor');
  var outTempo = document.getElementById('outTempo');
  var outTroco = document.getElementById('outTroco');

  var valor = Number(inValor.value);

  if (valor == 0 || isNaN(valor)) {
    alert('Informe um valor válido de moedas');
    inValor.focus();
    return;
  }

  if (valor < 1.0) {
    alert('Valor Insuficiente (no mínimo, R$ 1.00)');
    inValor.focus();
    return;
  }

  var tempo;
  var troco;

  if (valor >= 3.0) {
    tempo = 120;
    troco = valor - 3.0;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.0;
  }

  outTempo.textContent = 'Tempo: ' + tempo + ' min';
  if (troco > 0) {
    outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
  }
}
var btVerificar = document.getElementById('btConfirmar');
btVerificar.addEventListener('click', verificarMulta);
