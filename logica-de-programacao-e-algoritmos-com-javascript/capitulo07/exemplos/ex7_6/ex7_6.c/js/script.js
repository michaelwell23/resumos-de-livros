// c) Elaborar um programa para uma veterinária, o qual leia o preço de uma
// vacina e se o cliente possui ou não convênio. Caso possua algum convênio,
// exibir uma caixa de seleção com os convênios “Amigo dos Animais” e “Saúde
// Animal”. O programa deve exibir o valor do desconto (10% sem convênio;
// 20% para “Amigo dos Animais”; 50% para “Saúde Animal”) e o valor a ser
// pago. Criar a função:
// • calcularDesconto() – que receba os parâmetros valor e taxa de
// desconto. Retornar o valor do desconto.

function calcularVacina() {
  var inValor = document.getElementById('inValor');
  var selConvenio = document.getElementById('selConvenio');
  var outDesconto = document.getElementById('outDesconto');
  var outPagar = document.getElementById('outPagar');

  var valor = Number(inValor.value);

  if (valor == 0 || isNaN(valor)) {
    alert('Informe o valor corretamente');
    inValor.focus();
    return;
  }

  var desconto;

  if (rbSim.checked) {
    if (selConvenio.value == 'amigo') {
      desconto = calcularDesconto(valor, 20);
    } else {
      desconto = calcularDesconto(valor, 50);
    }
  } else {
    desconto = calcularDesconto(valor, 10);
  }

  outDesconto.textContent = 'Desconto R$: ' + desconto.toFixed(2);
  outPagar.textContent = 'A Pagar R$: ' + (valor - desconto).toFixed(2);
}
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularVacina);

function calcularDesconto(valor, taxa) {
  return valor * (taxa / 100);
}

var rbSim = document.getElementById('rbSim');
rbSim.addEventListener('change', function () {
  var pConvenio = document.getElementById('pConvenio');
  pConvenio.className = 'exibeLinha'; // exibe o parágrafo em uma linha (display: block)
});

var rbNao = document.getElementById('rbNao');
rbNao.addEventListener('change', function () {
  var pConvenio = document.getElementById('pConvenio');
  pConvenio.className = 'oculta';
});
