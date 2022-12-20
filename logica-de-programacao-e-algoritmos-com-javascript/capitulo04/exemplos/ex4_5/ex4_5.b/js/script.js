function verificarNumeroPrimo() {
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');

  var num = Number(inNumero.value);

  if (num == 0 || isNaN(num)) {
    alert('Número inválido...');
    inNumero.focus();
    return;
  }

  var numDivisores = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      numDivisores++;
    }
  }

  if (numDivisores == 2) {
    outResposta.textContent = num + ' É primo';
  } else {
    outResposta.textContent = num + ' Não é primo';
  }
}

var btVerificarPrimo = document.getElementById('btVerificarPrimo');
btVerificarPrimo.addEventListener('click', verificarNumeroPrimo);
