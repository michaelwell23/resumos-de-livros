function Coelho(tipo) {
  this.tipo = tipo;
}
var coelhoAssassino = new Coelho('assassino');
var coelhoPreto = new Coelho('preto');
console.log(coelhoPreto.tipo);

// adicionando um método
Coelho.prototype.fala = function (linha) {
  console.log('O coelho ' + this.tipo + " fala '" + linha + "'");
};
coelhoPreto.fala('Doom...');
