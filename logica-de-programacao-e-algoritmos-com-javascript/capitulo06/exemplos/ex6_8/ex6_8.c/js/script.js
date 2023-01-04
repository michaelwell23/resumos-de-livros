const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

function calcularMultaJuros() {
  var inDataVenc = document.getElementById('inDataVenc');
  var inValor = document.getElementById('inValor');
  var outMulta = document.getElementById('outMulta');
  var outJuros = document.getElementById('outJuros');
  var outTotal = document.getElementById('outTotal');

  var dataVenc = inDataVenc.value;
  var valor = Number(inValor.value);

  if (dataVenc == '' || valor == 0 || isNaN(valor)) {
    alert('Informe corretamente os dados da conta...');
    inData.focus();
    return;
  }

  var hoje = new Date();
  var vencto = new Date();

  var partes = dataVenc.split('-');
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  var atraso = hoje - vencto;

  var multa = 0;
  var juros = 0;

  if (atraso > 0) {
    var dias = Math.round(atraso / 86400000);

    multa = valor * TAXA_MULTA;
    juros = valor * TAXA_JUROS * dias;
    I;
  }

  var total = valor + multa + juros;

  outMulta.value = multa.toFixed(2);
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularMultaJuros);
