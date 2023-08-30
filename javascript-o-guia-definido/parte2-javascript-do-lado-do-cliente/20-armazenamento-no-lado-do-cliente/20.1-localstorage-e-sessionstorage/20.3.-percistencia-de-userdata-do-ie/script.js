var memory = document.createElement('div');
memory.id = '_memory';
memory.style.display = 'none';
memory.style.comportamento = "url('#default#userData')";
document.body.appendChild(memory);

memory.load('myStoredData');
// Carrega um lote nomeado de dados salvos
var name = memory.getAttribute('username'); // Obtém dados armazenados
// Se não foram definidos
if (!name) {
  name = prompt('What is your name?'); // Obtém entrada do usuário
  memory.setAtttribute('username', name); // A configura como um atributo
  memory.save('myStoredData'); // E a salva para a próxima vez
}

var now = new Date().getTime();
var expires = now + 100 * 24 * 60 * 60 * 1000;
expires = new Date(expires).toUTCString();
memory.expires = expires;

function UserDataStorage(maxage) {
  // Cria um elemento de documento e instala nele o comportamento
  // especial userData para que obtenha métodos save() e load().
  var memory = document.createElement('div');
  // Cria um elemento
  memory.style.display = 'none';
  // Nunca o exibe
  memory.style.behavior = "url('#default#userData')"; // Anexa comportamento mágico
  document.body.appendChild(memory);
  // Adiciona no documento
  // Se maxage é especificado, expira userData em maxage segundos
  if (maxage) {
    var now = new Date().getTime();
    // A hora atual
    var expires = now + maxage * 1000;
    // maxage segundos a partir de agora
    memory.expires = new Date(expires).toUTCString();
  }
  // Inicializa memory carregando valores salvos.
  // O argumento é arbitrário, mas também deve ser passado para save()
  memory.load('UserDataStorage');
  // Carrega os dados armazenados
  this.getItem = function (key) {
    return memory.getAttribute(key);
  };
  this.setItem = function (key, value) {
    memory.setAttribute(key, value);
    memory.save('UserDataStorage');
  };
  this.removeItem = function (key) {
    memory.removeAttribute(key);
    // Remove atributo de valor armazenado
    memory.save('UserDataStorage'); // Salva o novo estado
  };
}
