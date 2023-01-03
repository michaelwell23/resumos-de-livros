var erros = [];
var sorteado = Math.floor(Math.random() * 100) + 1;
const CHANCES = 6;

function apostaNumero() {
  var inNumero = document.getElementById('inNumero');
  var numero = Number(inNumero.value);

  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert('Informe um numero válido');
    inNumero.focus();
    return;
  }

  var outDica = document.getElementById('outDica');
  var outErros = document.getElementById('outErros');
  var outChances = document.getElementById('outChances');

  if (numero == sorteado) {
    alert('Parabéns !! Você acertou!!!');
    btAposta.disabled = true;
    btJogar.className = 'exibe';
    outDica.textContent = 'Parabéns!! Número sorteado: ' + sorteado;
  } else {
    if (erros.indexOf(numero) >= 0) {
      alert('Você já apostou o numero ' + numero + '. Tente outro...');
    } else {
      erros.push(numero);
      var numErros = erros.length;
      var numChances = CHANCES - numErros;
      outErros.textContent = numErros + ' (' + erros.join(', ') + ')';
      outChances.textContent = numChances;

      if (numChances == 0) {
        alert('Suas chances acabaram...');
        btAposta.disabled = true;
        btJogar.className = 'exibe';
        outDica.textContent = ' Game over!! Número Sorteado: ' + sorteado;
      } else {
        var dica = numero < sorteado ? 'maior' : 'menor';
        outDica.textContent =
          'Dica: Tente um numero ' + dica + ' que ' + numero;
      }
    }
  }

  inNumero.value = '';
  inNumero.focus();
}

function pageReaload() {
  return document.location.reload(true);
}

var btAposta = document.getElementById('btApostar');
btApostar.addEventListener('click', apostaNumero);

var btJogar = document.getElementById('btJogar');
btJogar.addEventListener('click', pageReaload);
