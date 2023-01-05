function mostrarDados() {
  var inModelo = document.getElementById('inModelo');
  var inAno = document.getElementById('inAno');
  var inPreco = document.getElementById('inPreco');
  var outClassif = document.getElementById('outClassif');
  var outPrecoVenda = document.getElementById('outPrecoVenda');

  var modelo = inModelo.value;
  var ano = Number(inAno.value);
  var preco = Number(inPreco.value);

  if (modelo == '' || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
    alert('Informe corretamente os dados do veiculo');
    inModelo.focus();
    return;
  }

  var classificacao = classificarVeiculo(ano);
  var precoVenda = calcularVenda(preco, classificacao);

  outClassif.textContent = modelo + ' - ' + classificacao;
  outPrecoVenda.textContent = 'Preço de venda R$: ' + precoVenda.toFixed(2);
}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', mostrarDados);

//Recebe o ano do veiculo como parâmetro
function classificarVeiculo(ano) {
  var anoAtual = new Date().getFullYear();
  var classif;

  if (ano === anoAtual) {
    classif = 'Novo';
  } else if (ano === anoAtual - 1 || ano == anoAtual - 2) {
    classif = 'Seminovo';
  } else {
    classif = 'Usado';
  }

  return classif;
}

// Recebe o valor e status do veículo como parâmetro
function calcularVenda(valor, status) {
  var prVenda = status == 'Novo' ? valor * 1.08 : valor * 1.1;
  return prVenda;
}
