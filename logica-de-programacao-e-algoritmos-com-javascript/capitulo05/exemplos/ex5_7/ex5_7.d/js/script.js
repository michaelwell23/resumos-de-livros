var noticias = [];

function adicionarNoticia() {
  var inNoticia = document.getElementById("inNoticia");
  var outNum = document.getElementById("outNum");

  var noticia = inNoticia.value;

  if (noticia == "") {
    alert("Informe a notícia a ser incluída");
    inNoticia.focus();
    return;
  }

  noticias.push(noticia);

  outNum.textContent = noticias.length;

  inNoticia.value = "";
  inNoticia.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticia);

function listarUltimas() {
  var quant = Number(prompt("Quantas notícias você deseja listar?"));

  var total = noticias.length;

  if (quant == 0 || isNaN(quant) || quant > total) {
    alert("Número inválido");
    return;
  }

  var ultimas =
    quant +
    " Últimas Notícias\n-------------------------------------------------\n";

  for (var i = total - 1; i >= total - quant; i--) {
    ultimas += i + 1 + "º) " + noticias[i] + "\n";
  }

  document.getElementById("outLista").textContent = ultimas;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarUltimas);
