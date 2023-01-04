function calcularDataLimite() {
  var inData = document.getElementById('inData');
  var inValor = document.getElementById('inValor');
  var outDataLimite = document.getElementById('outDataLimite');
  var outComDesconto = document.getElementById('outComDesconto');

  var data = inData.value;
  var valor = Number(inValor.value);

  if (data == '' || valor == 0 || isNaN(valor)) {
    alert('Informe os dados da multa');
    inData.focus();
    return;
  }

  var dataLimite = new Date();

  var partes = data.split('-');

  dataLimite.setDate(Number(partes[2]));
  dataLimite.setMonth(Number(partes[1]) - 1);
  dataLimite.setFullYear(Number(partes[0]));

  var dia = dataLimite.getDate();

  dataLimite.setDate(dia + 90);

  var dia = dataLimite.getDate();
  var mes = dataLimite.getMonth() + 1;
  var ano = dataLimite.getFullYear();

  var comDesconto = valor * 0.8;

  outDataLimite.textContent =
    'Data Limite para Pagto com Desconto: ' +
    (dia < 10 ? '0' + dia : dia) +
    '/' +
    (mes < 10 ? '0' + mes : mes) +
    '/' +
    ano;
  outComDesconto.textContent =
    'Valor com Desconto R$: ' + comDesconto.toFixed(2);
}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularDataLimite);
