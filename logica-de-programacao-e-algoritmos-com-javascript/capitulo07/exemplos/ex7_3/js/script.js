var btExibir = document.getElementById('btExibir');

btExibir.addEventListener('click', function () {
  var inPreco = document.getElementById('inPreco');
  var outParcelas = document.getElementById('outParcelas');

  var preco = Number(inPreco.value);

  var lista = '';

  for (var i = 1; i <= 10; i++) {
    lista += i + 'X de R$: ' + (preco / i).toFixed(2) + '\n';
  }

  outParcelas.textContent = 'Opções de Pagamento\n\n' + lista;
});
