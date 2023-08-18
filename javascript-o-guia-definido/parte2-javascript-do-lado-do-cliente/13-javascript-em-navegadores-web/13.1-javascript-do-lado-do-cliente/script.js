// Configura a propriedade location para navegar para uma nova página Web
window.location = 'http://www.oreilly.com/';

// Espera 2 segundos e depois diz olá
setTimeout(function () {
  alert('hello world');
}, 2000);

// Localiza o elemento com id="timestamp"
var timestamp = document.getElementById('timestamp');

// Se o elemento estiver vazio, insere a data e hora atuais nele
if (timestamp.firstChild == null)
  timestamp.appendChild(document.createTextNode(new Date().toString()));

// Altera explicitamente a apresentação do elemento cabeçalho
timestamp.style.backgroundColor = 'yellow';
// Ou apenas muda a classe e deixa a folha de estilo especificar os detalhes:
timestamp.className = 'highlight';

// Atualiza o conteúdo do elemento timestamp quando o usuário clica nele
timestamp.onclick = function () {
  this.innerHTML = new Date().toString();
};
