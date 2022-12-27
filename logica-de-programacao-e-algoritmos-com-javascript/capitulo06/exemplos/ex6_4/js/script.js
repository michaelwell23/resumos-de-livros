function gerarCracha() {
  var inNome = document.getElementById("inNome");
  var outCracha = document.getElementById("outCracha");

  var nome = inNome.value;

  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Informe o nome completo do participante...");
    inNome.focus();
    return;
  }

  var priEspaco = nome.indexOf(" ");
  var ultEspaco = nome.lastIndexOf(" ");

  var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  outCracha.textContent = "Crachá: " + cracha;
}

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);
