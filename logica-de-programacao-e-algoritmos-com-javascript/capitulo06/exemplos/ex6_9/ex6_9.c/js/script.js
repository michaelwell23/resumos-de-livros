function verificarPalindromo() {
  var inFrase = document.getElementById("inFrase");
  var outResposta = document.getElementById("outResposta");

  var frase = inFrase.value.toUpperCase();

  if (frase == "" || frase.indexOf(" ") == -1) {
    alert("Informe, por favor, uma frase");
    inFrase.focus();
    return;
  }

  var frase2 = frase.replace(/ /g, "");
  var tam = frase2.length;

  var iguais = true;

  for (var i = 0; i < tam / 2; i++) {
    if (frase2[i] != frase2[tam - 1 - i]) {
      iguais = false;
      break;
    }
  }

  if (iguais) {
    outResposta.textContent = frase + " é um Palíndromo";
  } else {
    outResposta.textContent = frase + " Não é um Palíndromo";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPalindromo);
