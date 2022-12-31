// b) Elaborar um programa para uma lan house de um aeroporto – O programa deve
// ler o valor de cada 15 minutos de uso de um computador e o tempo de
// uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
// sabendo que as frações extras de 15 minutos devem ser cobradas de
// forma integral. A Figura 2.12 exibe um exemplo com dados do
// programa.

function calcularValorDePagamento() {
  var inValorPorMinuto = document.getElementById("inValorPorMinuto");
  var inTempoDeUso = document.getElementById("inTempoDeUso");
  var outValor = document.getElementById("outValor");

  var valorPorMinuto = Number(inValorPorMinuto.value);
  var TempoDeUso = Number(Math.ceil(inTempoDeUso.value / 15));

  var valor = valorPorMinuto * TempoDeUso;

  outValor.innerHTML = "Valor a pagar R$: " + valor.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValorDePagamento);
