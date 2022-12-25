/*
  d) Elaborar um programa que leia um número e exiba estrelas na página, 
  em linhas diferentes. A cada nova linha, o número de estrelas deve ser 
  incrementado. Observação: caso você informe um valor alto, as linhas 
  podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda 
  da página. Para evitar que isso ocorra, crie uma nova classe no arquivo
  estilos.css, que de na uma atuação à direita para essa imagem.
*/

function criadorDeEstrelas() {
  var inNumeroDeLinhas = document.getElementById('inNumeroDeLinhas');
  var outResposta = document.getElementById('outResposta');

  var linhas = Number(inNumeroDeLinhas.value);
  var estrelas = '';

  if (linhas == 0 || isNaN(linhas)) {
    alert('Número Inválido...');
    inNumero.focus();
    return;
  }

  for (var i = 1; i <= linhas; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + '*';
    }
    estrelas = estrelas + '\n';
  }

  outResposta.textContent = estrelas;
}

var btCriar = document.getElementById('btCriar');
btCriar.addEventListener('click', criadorDeEstrelas);
