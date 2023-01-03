var clubes = [];

function adicionarClube() {
  var inClube = document.getElementById('inClube');
  var nome = inClube.value;

  if (nome == '') {
    alert('Informe o nome do clube');
    inClube.focus();
    return;
  }

  clubes.push(nome);

  listarClubes();

  inClube.value = '';
  inClube.focus();
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarClube);

function listarClubes() {
  if (clubes.length == 0) {
    alert('Não há clubes na lista...');
    inClube.focus();
    return;
  }

  var lista = '';

  for (i = 0; i < clubes.length; i++) {
    lista += i + 1 + '. ' + clubes[i] + '\n';
  }

  document.getElementById('outLista').textContent = lista;
}
var btListar = document.getElementById('btListar');
btListar.addEventListener('click', listarClubes);

function montarJogos() {
  var tam = clubes.length;

  if (tam == 0 || tam % 2 == 1) {
    alert('Deve haver número par de clubes');
    inClube.focus();
    return;
  }

  var jogos = '';

  var ultimo = tam - 1;

  for (i = 0; i < tam / 2; i++) {
    jogos += clubes[i] + ' x ' + clubes[ultimo - i] + '\n';
  }

  document.getElementById('outLista').textContent = jogos;
}
var btMontar = document.getElementById('btMontar');
btMontar.addEventListener('click', montarJogos);
