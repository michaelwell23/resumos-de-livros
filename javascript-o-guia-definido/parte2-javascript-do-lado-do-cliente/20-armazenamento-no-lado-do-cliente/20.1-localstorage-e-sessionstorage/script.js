var name = localStorage.username; // Consulta um valor armazenado.
name = localStorage['username']; // Notação de array equivalente
if (!name) {
  name = prompt('What is your name?'); // Faz uma pergunta ao usuário.
  localStorage.username = name; // Armazena a resposta do usuário.
}
// Itera por todos os pares nome/valor armazenados
for (var name in localStorage) {
  // Itera por todos os nomes armazenados
  var value = localStorage[name]; // Pesquisa o valor de cada um
}

// Se você armazena um número, ele é convertido automaticamente em uma string.
// Não se esqueça de analisá-lo, ao recuperá-lo do armazenamento.
localStorage.x = 10;

var x = parseInt(localStorage.x);
// Converte um objeto Date em uma string ao configurar e analisa-o, ao obter
localStorage.lastRead = new Date().toUTCString();
var lastRead = new Date(Date.parse(localStorage.lastRead));
// JSON tende a resultar em uma codificação conveniente para qualquer estrutura primitiva
// ou de dados
localStorage.data = JSON.stringify(data);
// Codifica e armazena
var data = JSON.parse(localStorage.data);
// Recupera e decodifica.
