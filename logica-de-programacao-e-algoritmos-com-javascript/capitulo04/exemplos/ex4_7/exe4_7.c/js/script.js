/*
  c) Elaborar um programa que leia um número e verifique se ele 
  é ou não perfeito. Um número dito perfeito é aquele que é igual 
  à soma dos seus divisores inteiros (exceto o próprio número). 
  O programa deve exibir os divisores do número e a soma deles.
*/

function numeroPerfeito() {
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');
  var outDivisores = document.getElementById('outDivisores');

  var num = Number(inNumero.value);

  var soma = 0;
  var divisores = 'Divisores do ' + num;

  if (num == 0 || isNaN(num)) {
    alert('Número Inválido...');
    inNumero.focus();
    return;
  }

  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      soma = soma + i;
      divisores = divisores + ', ' + i;
    }
  }

  outDivisores.textContent = divisores + ' (soma:' + soma + ')';

  if (soma === num) {
    outResposta.textContent = num + ' É um numero Perfeito';
  } else {
    outResposta.textContent = num + ' Não é um numero Perfeito';
  }
}

var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', numeroPerfeito);
