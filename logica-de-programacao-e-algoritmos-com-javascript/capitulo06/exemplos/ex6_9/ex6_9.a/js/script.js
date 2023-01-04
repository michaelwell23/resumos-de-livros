// a) Você deve desenvolver um programa de criptogra a para transmitir
// mensagens entre amigos. O programa deve ler uma mensagem e, em seguida,
// exibi-la criptografada. A criptogra a consiste em: a) exibir todas as letras das
// posições pares da mensagem; b) exibir todas as letras das posições ímpares da
// mensagem.

function criptografarMensagem() {
  var inMensagem = document.getElementById('inMensagem');
  var mensagem = inMensagem.value;

  if (mensagem == '') {
    alert('Informe a mensagem...');
    inMensagem.focus();
    return;
  }

  var resposta = '';
  var tam = mensagem.length;

  for (var i = 1; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  for (var i = 0; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  document.getElementById('outResposta').textContent = resposta;
}

var btCripto = document.getElementById('btCripo');
btCripto.addEventListener('click', criptografarMensagem);

function decriptografarMensagem() {
  var inMensagem = document.getElementById('inMensagem');
  var mensagem = inMensagem.value;

  if (mensagem == '') {
    alert('Informe a mensagem...');
    inMensagem.focus();
    return;
  }

  var tam = mensagem.length;
  var metade = Math.floor(tam / 2);
  var resposta = '';

  if (tam % 2 == 0) {
    for (var i = metade; i < tam; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
  } else {
    for (var i = metade; i < tam - 1; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
    resposta += mensagem.charAt(i);
  }

  document.getElementById('outResposta').textContent = resposta;
}

var btDecripto = document.getElementById('btDecripo');
btDecripto.addEventListener('click', decriptografarMensagem);
