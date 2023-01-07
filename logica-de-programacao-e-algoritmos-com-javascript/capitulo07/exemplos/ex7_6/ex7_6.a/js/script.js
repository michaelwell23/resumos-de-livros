// a) Elaborar um programa que leia o nome e a idade de um atleta de umclube de natação.
// O programa deve exibir o nome com “-” abaixo das letras do nome e a categoria do atleta,
// que pode ser “Infantil” (até 12 anos), “Juvenil” (entre 13 e 18 anos) ou
// “Adulto” (acima de 18 anos). O programa deve conter as funções:
// • retornarTracos() – que receba um nome como parâmetro e retorne
// uma linha com “-” para as letras do nome (nos espaços, manter os
// espaços).
// • categorizarAluno() – que receba um número como parâmetro e
// retorne a categoria do aluno, conforme indicação no enunciado do
// exercício

function categorizarAtleta() {
  var inAtleta = document.getElementById('inAtleta');
  var inIdade = document.getElementById('inIdade');
  var outResposta = document.getElementById('outResposta');

  var atleta = inAtleta.value;
  var idade = Number(inIdade.value);

  if (atleta == '' || idade == 0 || isNaN(idade)) {
    alert('Informe os dados corretamente');
    inAtleta.focus();
    return;
  }

  var sublinhado = gerarTracos(atleta);
  var categoria = verCategoria(idade);

  outResposta.textContent =
    atleta + '\n' + sublinhado + '\nCategoria: ' + categoria;
}
var btCategorizar = document.getElementById('btCategorizar');
btCategorizar.addEventListener('click', categorizarAtleta);

function gerarTracos(nome) {
  var tam = nome.length;
  var tracos = '';

  for (var i = 0; i < tam; i++) {
    if (nome.charAt(i) != ' ') {
      tracos += '-';
    } else {
      tracos += ' ';
    }
  }

  return tracos;
}

function verCategoria(idade) {
  var cat;
  if (idade <= 12) {
    cat = 'Infantil';
  } else if (idade <= 18) {
    cat = 'Juvenil';
  } else {
    cat = 'Adulto';
  }
  return cat;
}
