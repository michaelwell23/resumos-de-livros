function mostrarTabuada() {
  //cria referencia aos elementos da página
  var inNumero = document.getElementById('inNumero');
  var outTabuada = document.getElementById('outTabuada');

  //converte conteúdo do campo inNumero
  var numero = Number(inNumero.value);

  //valida o numero
  if (numero == 0 || isNaN(numero)) {
    alert('Informa um numero valido!!!');
    inNumero.focus();
    return;
  }

  // cria uma variáel do tipo string, que irá concatenar a resposta
  var resposta = '';

  //cria um laço de repetição
  for (var i = 1; i <= 10; i++) {
    // a variavel resposta vai acumulando os novos conteúdos
    resposta = resposta + numero + ' x ' + i + ' = ' + numero * i + '\n';
  }

  // o conteúdo da tag pre é alterado para exibir a tabuada do num
  outTabuada.textContent = resposta;
}

// cria refêrencia da tag pre é alterado para exibir a atabuada do num
var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener('click', mostrarTabuada);
