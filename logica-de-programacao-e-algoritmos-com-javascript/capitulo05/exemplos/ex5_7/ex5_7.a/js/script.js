var clubes = []; // declara vetor global

function adicionarClube() {
  // referencia elementos de entrada e obtém conteúdo
  var inClube = document.getElementById("inClube");
  var nome = inClube.value;

  // verifica preenchimento do nome do clube
  if (nome == "") {
    alert("Informe o nome do clube");
    inClube.focus();
    return;
  }

  clubes.push(nome); // adiciona o nome no final do vetor

  listarClubes(); // chama function listarClubes()

  // limpa campo e posiciona cursor em inClube
  inClube.value = "";
  inClube.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function listarClubes() {
  // verifica se vetor clubes está vazio
  if (clubes.length == 0) {
    alert("Não há clubes na lista...");
    inClube.focus();
    return;
  }

  var lista = ""; // string para concatenar clubes

  // percorre os elementos do vetor
  for (i = 0; i < clubes.length; i++) {
    lista += i + 1 + ". " + clubes[i] + "\n";
  }

  // altera o conteúdo da tag outLista
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarJogos() {
  var tam = clubes.length;

  // verifica se vetor clubes está vazio ou tamanho ímpar
  if (tam == 0 || tam % 2 == 1) {
    alert("Deve haver número par de clubes");
    inClube.focus();
    return;
  }

  // string para concatenar jogos
  var jogos = "";

  var ultimo = tam - 1;

  // percorre os elementos do vetor
  for (i = 0; i < tam / 2; i++) {
    jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n";
  }

  // altera o conteúdo da tag outLista
  document.getElementById("outLista").textContent = jogos;
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarJogos);
