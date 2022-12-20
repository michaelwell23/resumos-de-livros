/*
  a) Elaborar um programa que leia o nome de uma fruta e um número. 
  O programa deve repetir a exibição do nome da fruta, de acordo com o 
  número informado. Utilize o “\*” para separar os nomes.
*/

function repetirFruta() {
  var inFruta = document.getElementById('inFruta');
  var inNumero = document.getElementById('inNumero');
  var outRepete = document.getElementById('outRepete');

  var fruta = inFruta.value;
  var num = Number(inNumero.value);

  if (num == 0 || isNaN(num)) {
    alert('Número Inválido...');
    inNumero.focus();
    return;
  }

  var repeteFruta = '';

  for (var i = 1; i <= num; i++) {
    repeteFruta = repeteFruta + fruta + ' *';
  }

  outRepete.textContent = repeteFruta;
}

var btRepetir = document.getElementById('btRepetir');
btRepetir.addEventListener('click', repetirFruta);
