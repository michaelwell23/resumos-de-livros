function gerarReferencia() {
  var inAutor = document.getElementById('inAutor');
  var outCitacao = document.getElementById('outCitacao');

  var autor = inAutor.value;

  if (autor == '' || autor.indexOf(' ') == -1) {
    alert('Informe o nome completo do autor');
    inAutor.focus();
    return;
  }

  var partes = autor.toUpperCase().split(' ');
  var tam = partes.length;

  var citacao = partes[tam - 1] + ', ';

  for (var i = 0; i < tam - 1; i++) {
    citacao += partes[i].charAt(0) + '. ';
  }

  outCitacao.textContent = 'Citação Bibliográfica: ' + citacao;
}

var btGerar = document.getElementById('btGerar');
btGerar.addEventListener('click', gerarReferencia);
