var candidatos = [];

function adicionarCandidato() {
  var inNome = document.getElementById("inNome");
  var inAcertos = document.getElementById("inAcertos");

  var nome = inNome.value;
  var acertos = Number(inAcertos.value);

  if (nome == "" || inAcertos.value == "" || isNaN(acertos)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }

  candidatos.push({ nome: nome, acertos: acertos });

  inNome.value = "";
  inAcertos.value = "";
  inNome.focus();

  listarCandidatos();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidato);

function listarCandidatos() {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  var lista = "";
  for (var i = 0; i < candidatos.length; i++) {
    lista += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
  }

  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCandidatos);

function exibirAprovados() {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  var corte = Number(prompt("Número de Acertos para Aprovação? "));

  if (corte == 0 || isNaN(corte)) {
    alert("Número inválido");
    return;
  }

  var copia = candidatos.slice();

  copia.sort(function (a, b) {
    return a.acertos - b.acertos;
  });

  copia.reverse();

  var aprovados = "";

  for (var i = 0; i < copia.length; i++) {
    if (copia[i].acertos >= corte) {
      aprovados += copia[i].nome + " - " + copia[i].acertos + " acertos\n";
    }
  }

  var outLista = document.getElementById("outLista");

  if (aprovados == "") {
    outLista.textContent = "Não há candidatos aprovados...";
  } else {
    outLista.textContent = aprovados;
  }
}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", exibirAprovados);
