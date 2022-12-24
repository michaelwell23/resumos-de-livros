var carros = []; // declara vetor global

function adicionarCarros() {
  // Cria referência aos elementos contendo os dados de entrada
  var inModelo = document.getElementById("inModelo");
  var inPreco = document.getElementById("inPreco");

  var modelo = inModelo.value; // obtém conteúdo dos campos
  var preco = Number(inPreco.value);

  // verifica preenchimento dos campos
  if (modelo == "" || preco == 0 || isNaN(preco)) {
    alert("Informe corretamente os dados");
    inModelo.focus();
    return;
  }

  // adiciona dados ao vetor de objetos
  carros.push({ modelo: modelo, preco: preco });

  // limpa campos e posiciona cursor em inModelo
  inModelo.value = "";
  inPreco.value = "";
  inModelo.focus();

  listarCarros(); // chama function que lista os carros
}
// cria referência ao btAdicionar e associa function ao evento click deste botão
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function listarCarros() {
  // verifica se vetor está vazio
  if (carros.length == 0) {
    alert("Não há carros na lista");
    return;
  }

  var lista = ""; // para concatenar lista de carros

  // percorre os elementos do vetor
  for (var i = 0; i < carros.length; i++) {
    // adiciona à lista, cada objeto do vetor
    lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
  }

  // referencia elemento e altera conteúdo exibido
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);

function filtrarCarros() {
  // faz a leitura do valor máximo a partir do método prompt
  var maximo = Number(
    prompt("Qual o valor máximo que o cliente deseja pagar?")
  );

  // se não preencheu ou conteúdo inválido ...
  if (maximo == 0 || isNaN(maximo)) {
    return; // ... retorna
  }

  // para concatenar lista de carros que obedecem ao critério de pesquisa / filtro
  var lista = "";

  // percorre todos os elementos do vetor
  for (var i = 0; i < carros.length; i++) {
    // verifica se o preço é inferior (ou igual) ao máximo
    if (carros[i].preco <= maximo) {
      lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }
  }

  var outLista = document.getElementById("outLista"); // cria referência a outLista

  // se a lista esta vazia, significa que nenhum veículo foi encontrado (no for)
  if (lista == "") {
    outLista.textContent =
      "Não há carros com preço até R$ " + maximo.toFixed(2);
  } else {
    // senão, mostra os veículos obtidos
    outLista.textContent =
      "Carros até R$ " +
      maximo.toFixed(2) +
      "\n------------------------\n" +
      lista;
  }
}
var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);
