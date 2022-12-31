// a) Uma farmácia está com uma promoção – Na compra de duas unidades de um
// mesmo medicamento, o cliente recebe como desconto os centavos do
// valor total. Elaborar um programa que leia descrição e preço de um
// medicamento. Informe o valor do produto na promoção.

function calcularPromocaoDeMedicamentos() {
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outMedicamento = document.getElementById("outMedicamento");
  var outPromocao = document.getElementById("outPromocao");

  var medicamento = inMedicamento.value;
  var preco = Math.floor(inPreco.value * 2);

  console.log(inPreco);

  outMedicamento.innerHTML = "Promoção de " + medicamento;
  outPromocao.innerHTML = "Leve 2 por apenas R$ " + preco;
}

var btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", calcularPromocaoDeMedicamentos);
