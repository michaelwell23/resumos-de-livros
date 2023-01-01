function calcularPeso() {
  var inNome = document.getElementById('inNome');
  var rbMasculino = document.getElementById('rbMasculino');
  var rbFeminino = document.getElementById('rbFeminino');
  var inAltura = document.getElementById('inAltura');
  var outResposta = document.getElementById('outResposta');

  var nome = inNome.value;
  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var altura = Number(inAltura.value);

  if (nome == '' || (masculino == false && feminino == false)) {
    alert('Por favor, informe o nome e selecione o sexo...');
    inNome.focus();
    inNome;
    return;
  }

  if (altura == 0 || isNaN(altura)) {
    alert('Por favor, informe a altura corretamente...');
    inAltura.focus();
    return;
  }

  if (masculino) {
    var peso = 22 * Math.pow(altura, 2);
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  outResposta.textContent =
    nome + ': Seu peso ideal é ' + peso.toFixed(3) + ' kg';
}

var btResultado = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularPeso);
