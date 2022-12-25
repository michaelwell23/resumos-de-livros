var numeros = []; // declara vetor global

function adicionarNumero() {
  var inNum = document.getElementById("inNum");
  var outLista = document.getElementById("outLista");
  var outOrdem = document.getElementById("outOrdem");

  var num = Number(inNum.value);

  if (num == 0 || isNaN(num) || numeros.indexOf(num) >= 0) {
    alert("Informe um número válido e inexistente na lista");
    inNum.focus();
    return;
  }

  numeros.push(num);

  outLista.textContent = "Números: " + numeros.join(", ");

  outOrdem.textContent = "";

  inNum.value = "";
  inNum.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero);

function verificarOrdem() {
  if (numeros.length == 0) {
    alert("Não há números na lista...");
    inNum.focus();
    return;
  }

  var outOrdem = document.getElementById("outOrdem");

  var ordem = true;

  for (i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false;
      break;
    }
  }

  outOrdem.textContent = ordem
    ? "Ok! Números estão em ordem crescente"
    : "Atenção... Números não estão em ordem crescente";
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);
