function adicionarClube() {
  var inClube = document.getElementById('inClube');
  var clube = inClube.value;

  if (clube == '') {
    alert('Informe o nome do clube');
    inClube.focus();
    return;
  }

  var divJogos = document.getElementById('divJogos');
  var novoH5 = document.createElement('h5');
  novoH5.className = 'aDireita'; // pode-se indicar o estilo do elemento (do arquivo estilos.css)...
  novoH5.style.fontStyle = 'italic'; // ... ou aplicar um estilo a partir da propriedade .style

  var texto = document.createTextNode(clube);

  novoH5.appendChild(texto);
  divJogos.appendChild(novoH5);

  inClube.value = '';
  inClube.focus();
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarClube);

function montarTabela() {
  var divJogos = document.getElementById('divJogos');
  var h5 = divJogos.getElementsByTagName('h5');

  if (h5.length == 0 || h5.length % 2 == 1) {
    alert('O número de clubes inseridos deve ser par');
    return;
  }

  var novoH3 = document.createElement('h3');
  var texto = document.createTextNode('Tabela de Jogos');
  novoH3.appendChild(texto);
  divJogos.appendChild(novoH3);

  var novaTable = document.createElement('table');
  novaTable.className = 'table table-striped';
  divJogos.appendChild(novaTable);

  for (var i = 0; i < h5.length; i++) {
    if (i % 2 == 0) {
      var linha = novaTable.insertRow(-1);
      var col1 = linha.insertCell(0);
      col1.textContent = h5[i].textContent;
    } else {
      var col2 = linha.insertCell(1);
      col2.textContent = h5[i].textContent;
    }
  }

  btAdicionar.disabled = true;
  btMontar.disabled = true;
  btNovos.focus();
}
var btMontar = document.getElementById('btMontar');
btMontar.addEventListener('click', montarTabela);

var btNovos = document.getElementById('btNovos');
btNovos.addEventListener('click', function () {
  location.reload();
});
