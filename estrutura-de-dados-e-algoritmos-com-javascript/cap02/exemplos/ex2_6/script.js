// REATRIBUIÇÃO DE VALORES USANDO VAR
var framework = 'Angular';
var framework = 'React';
console.log(framework);

// REATRIBUIÇÃO DE VALORES USANDO LET
let language = 'JavaScript!'; //
let language = 'Ruby!'; //  lança um erro
console.log(language);

// UTILIZANDO O CONST
const PI = 3.141593;
PI = 3.0; //lança um erro
console.log(PI);

// REATRIBUINDO VALORES DE UM OBJETO CONST
const jsFramework = {
  name: 'Angular',
};

jsFramework.name = 'React';

// REATRIBUINÇÃO DE VALORES DE UMA CONST

// erro, não é possível atribuir outra referência ao objeto
jsFramework = {
  name: 'Vue',
};
