// b) Elaborar um programa que leia o nome completo de um aluno. O
// programa deve validar o preenchimento de um nome completo e exibir a
// senha inicial do aluno, a qual será o sobrenome seguido pelo número de
// vogais do nome completo dele. O programa deve conter as funções:
// • validarNome() – que receba um nome como parâmetro e retorne true
// (nome completo) ou false (nome incompleto).
// • obterSobrenome() – que receba um nome como parâmetro e retorne o
// último nome do aluno em letras minúsculas.
// • contarVogais() – que receba um nome e retorne o número de vogais

function gerarSenha() {
  var inAluno = document.getElementById('inAluno');
  var outSenha = document.getElementById('outSenha');

  var aluno = inAluno.value;

  if (aluno == '' || !validarNome(aluno)) {
    alert('Informe o nome completo do aluno');
    inAluno.focus();
    return;
  }

  outSenha.textContent =
    'Senha Inicial: ' + obterSobrenome(aluno) + contarVogais(aluno);
}
var btGerar = document.getElementById('btGerar');
btGerar.addEventListener('click', gerarSenha);

function validarNome(nome) {
  if (nome.indexOf(' ') >= 1) {
    return true;
  } else {
    return false;
  }
}

function obterSobrenome(nome) {
  var ultimoEspaco = nome.lastIndexOf(' ');
  return nome.substr(ultimoEspaco + 1).toLowerCase();
}

function contarVogais(nome) {
  var num = 0;
  var letra;
  for (var i = 0; i < nome.length; i++) {
    letra = nome.charAt(i).toUpperCase();
    if (
      letra == 'A' ||
      letra == 'E' ||
      letra == 'I' ||
      letra == 'O' ||
      letra == 'U'
    ) {
      num++;
    }
  }
  return num < 10 ? '0' + num : num;
}

function contarVogais2(nome) {
  var num = 0;
  var vogais = 'AEIOU';
  var letra;
  for (var i = 0; i < nome.length; i++) {
    letra = nome.charAt(i).toUpperCase();
    if (vogais.indexOf(letra) >= 0) {
      num++;
    }
  }
  return num < 10 ? '0' + num : num;
}
