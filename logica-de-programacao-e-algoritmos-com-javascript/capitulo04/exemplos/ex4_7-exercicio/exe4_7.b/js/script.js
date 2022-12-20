/*
    b) Digamos que o número de chinchilas de uma fazenda triplica a cada
    ano, após o primeiro ano. Elaborar um programa que leia o número 
    inicial de chinchilas e anos e informe ano a ano o número médio 
    previsto de chinchilas da fazenda. Validar a entrada para que o 
    número inicial de chinchilas seja maior ou igual a 2 (um casal).
*/

function previsaoDeChinchilas() {
  var inChin = document.getElementById('inChinchilas');
  var inAnos = document.getElementById('inAno');
  var outExibir = document.getElementById('outExibir');

  var chin = Number(inChin.value);
  var anos = Number(inAnos.value);

  if (chin == 0 || isNaN(chin)) {
    alert('Número Inválido...');
    inNumero.focus();
    return;
  }

  var resposta = '';
  var total = chin;

  for (i = 1; i <= anos; i++) {
    resposta = resposta + i + 'º Ano: ' + total + ' Chinchilas\n';
    total = total * 3;
  }

  outExibir.textContent = resposta;
}

var btPrevisao = document.getElementById('btPrevisao');
btPrevisao.addEventListener('click', previsaoDeChinchilas);
