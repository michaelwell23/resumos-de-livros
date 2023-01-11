function adicionarServico() {
  var inServico = document.getElementById('inServico');
  var servico = inServico.value;

  if (servico == '') {
    alert('Informe o serviço - veículo a ser adicionado');
    inServico.focus();
    return;
  }

  if (localStorage.getItem('herbieServico')) {
    localStorage.setItem(
      'herbieServico',
      localStorage.getItem('herbieServico') + ';' + servico
    );
  } else {
    localStorage.setItem('herbieServico', servico);
  }

  mostrarPendentes();

  inServico.value = '';
  inServico.focus();
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarServico);

function mostrarPendentes() {
  var outPendentes = document.getElementById('outPendentes');
  var numPendentes;

  if (localStorage.getItem('herbieServico')) {
    numPendentes = localStorage.getItem('herbieServico').split(';').length;
  } else {
    numPendentes = 0;
  }
  outPendentes.textContent = numPendentes;
}
mostrarPendentes();

function executarServico() {
  if (!localStorage.getItem('herbieServico')) {
    alert('Não há serviços pendentes para executar');
    return;
  }

  var outExecucao = document.getElementById('outExecucao');
  var servicos = localStorage.getItem('herbieServico').split(';');

  var emExecucao = servicos.shift();

  outExecucao.textContent = emExecucao;

  localStorage.setItem('herbieServico', servicos.join(';'));

  mostrarPendentes();
}
var btExecutar = document.getElementById('btExecutar');
btExecutar.addEventListener('click', executarServico);
