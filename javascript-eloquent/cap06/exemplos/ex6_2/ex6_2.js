var coelho = {};
coelho.diz = function (linha) {
  console.log("O coelho diz '" + linha + "'");
};
coelho.diz('Estou vivo.');
// → O coelho diz 'Estou vivo.'

/// ===================

function speak(line) {
  console.log('The ' + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = { type: 'white', speak: speak };
var fatRabbit = { type: 'fat', speak: speak };
whiteRabbit.speak('Oh my ears and whiskers, ' + "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//late it's getting!'
fatRabbit.speak('I could sure use a carrot right now.');
// → The fat rabbit says 'I could sure use a carrot
//right now.'

/// ===================

speak.apply(fatRabbit, ['Burp!']);
// → The fat rabbit says 'Burp!'
speak.call({ type: 'old' }, 'Oh my.');
// → The old rabbit says 'Oh my.'
