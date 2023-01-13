function exibirVelas() {
  var inIdade = document.getElementById('inIdade');
  var idade = Number(inIdade.value);

  if (idade <= 0 || idade > 120 || isNaN(idade)) {
    alert('Informe uma idade válida... Entre 1 e 120 anos');
    inIdade.focus();
    return;
  }

  var strIdade = idade.toString();
  var divIdade = document.getElementById('divIdade');
  var img;

  for (var i = 0; i < strIdade.length; i++) {
    img = document.createElement('img');
    img.src = 'img/' + strIdade.charAt(i) + '.jpg';
    img.alt = 'Vela de ' + strIdade.charAt(i) + ' anos';
    divIdade.appendChild(img);
  }

  btExibir.disabled = true;
  btNovas.focus();
}
var btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', exibirVelas);

var btNovas = document.getElementById('btNovas');
btNovas.addEventListener('click', function () {
  location.reload();
});
