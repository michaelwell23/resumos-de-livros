var pacientes = [];

function adicionarPacientes() {
  var inPaciente = document.getElementById('inPacientes');
  var outLista = documen.getElementById('outLista');

  var nome = inPaciente.value;

  if (nome == '') {
    alert('informe o nome do paciente');
    inPaciente.focus();
    return;
  }

  pacientes.push(nome);

  var lista = '';

  for (i = 0; i < pacientes.length; i++) {
    lista += i + 1 + '. ' + pacientes[i] + '\n';
  }

  outLista.textContent = lista;

  inPaciente = value = '';
  inPaciente.focus();
}

var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarPacientes);
