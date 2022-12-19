function listarNumeros() {
  //cria referencia aos elementos da página
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');

  var numero = Number(inNumero.value); //converte conteúdo do campo inNumero

  // verifica validade do numero
  if (numero == 0 || isNaN(numero)) {
    alert('Informa um numero valido!!!');
    inNumero.focus();
    return;
  }

  // inicializa variável resposta
  var resposta = 'Entre ' + numero + ' e 1: ';

  // cria um for decrescente
  for (var i = numero; i > 0; i = i - 1) {
    //resposta vai acumulando números ( e virgulas)
    resposta = resposta + i + ', ';
  }

  // altera o conteúdo de outResposta
  outResposta.textContent = resposta;
}

// cria refêrencia da tag pre é alterado para exibir a atabuada do num
var btDecrescer = document.getElementById('btDecrescer');
btDecrescer.addEventListener('click', listarNumeros);
