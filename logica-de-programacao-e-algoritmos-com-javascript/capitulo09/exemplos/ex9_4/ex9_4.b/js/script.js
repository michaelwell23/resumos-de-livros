function exibirNomes() {
  var inNome = document.getElementById('inNome');
  var nome = inNome.value;
  var partes = nome.split(' ');

  if (nome == '' || partes.length == 1) {
    alert('Informe o nome completo');
    inNome.focus();
    return;
  }

  var divNome = document.getElementById('divNome');

  // para retirar os h3 já existentes (se clicou uma segunda vez no botão)
  var listaH3 = document.getElementsByTagName('h3');
  for (var i = listaH3.length - 1; i >= 0; i--) {
    divNome.removeChild(listaH3[i]);
  }

  var cores = [
    'blue',
    'red',
    'yellow',
    'green',
    'orange',
    'chocolate',
    'deeppink',
    'purple',
    'violet',
    'aquamarine',
  ];
  var corSorteada;

  for (i = 0; i < partes.length; i++) {
    h3 = document.createElement('h3');
    texto = document.createTextNode(partes[i]);
    h3.appendChild(texto);
    corSorteada = Math.floor(Math.random() * 10);
    h3.style.color = cores[corSorteada];
    divNome.appendChild(h3);
  }
}
var btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', exibirNomes);
