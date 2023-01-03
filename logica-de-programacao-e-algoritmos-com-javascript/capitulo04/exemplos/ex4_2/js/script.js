function listarNumeros() {
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');

  var numero = Number(inNumero.value); 

  if (numero == 0 || isNaN(numero)) {
    alert('Informa um numero valido!!!');
    inNumero.focus();
    return;
  }

  var resposta = 'Entre ' + numero + ' e 1: ';

var i = numero;

while(i > 0){
  resposta = resposta + i + ", ";
  i--
}

  outResposta.textContent = resposta;
}

var btDecrescer = document.getElementById('btDecrescer');
btDecrescer.addEventListener('click', listarNumeros);
