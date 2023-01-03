function mostrarTabuada() 
  var inNumero = document.getElementById('inN	umero');
  var outTabuada = document.getElementById('outTabuada');

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert('Informa um numero valido!!!');
    inNumero.focus();
    return;
  }

  var resposta = '';

  for (var i = 1; i <= 10; i++) {
    resposta = resposta + numero + ' x ' + i + ' = ' + numero * i + '\n';
  }

  outTabuada.textContent = resposta;
}

var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener('click', mostrarTabuada);
