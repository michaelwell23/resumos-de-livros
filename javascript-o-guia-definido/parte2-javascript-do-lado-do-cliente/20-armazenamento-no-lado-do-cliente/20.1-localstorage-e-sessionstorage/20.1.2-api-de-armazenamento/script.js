localStorage.setItem('x', 1); // Armazena um número com o nome "x"
localStorage.getItem('x'); // Recupera um valor

// Enumera todos os pares nome/valor armazenados
for (var i = 0; i < localStorage.length; i++) {
  // O comprimento fornece o nº de pares
  var name = localStorage.key(i); // Obtém o nome do par i
  var value = localStorage.getItem(name); // Obtém o valor desse par
}
localStorage.removeItem('x'); // Exclui o item "x"
localStorage.clear(); // Exclui também todos os outros itens

localStorage.o = { x: 1 }; // Armazena um objeto que tem uma propriedade x
localStorage.o.x = 2; // Tenta configurar a propriedade do objeto armazenado
localStorage.o.x; // => 1: x está intacto

localStorage.getItem('o').x = 2; // Não esperamos que isso armazene o valor 2

// Descobre que memória estou usando
var memory =
  window.localStorage ||
  (window.UserDataStorage && new UserDataStorage()) ||
  new CookieStorage();
// Em seguida, pesquisa minha memória
var username = memory.getItem('username');
