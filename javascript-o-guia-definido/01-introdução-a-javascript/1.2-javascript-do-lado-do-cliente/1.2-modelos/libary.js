// Exibe uma mensagem em uma seção de saída de depuração especial do documento.
// Se o documento não contém esta seção, cria uma.
function debug(msg) {
  // Localiza a seção de depuração do documento, examinando os atributos de
  // identificação HTML
  var log = document.getElementById('debuglog');

  // Se não existe elemento algum com a identificação "debuglog", cria um.
  if (!log) {
    log = document.createElement('div'); // Cria um novo elemento <div>
    log.id = 'debuglog';
    // Define o atributo de identificação HTML
    // nele
    log.innerHTML = '<h1>Debug Log</h1>'; // Define o conteúdo inicial
    document.body.appendChild(log);
    // Adiciona-o no final do documento
  }
  // Agora, coloca a mensagem em seu próprio   <pre> e a anexa no log
  var pre = document.createElement('pre'); // Cria uma marca <pre>
  var text = document.createTextNode(msg); // Coloca a msg em um nó de texto
  pre.appendChild(text); // Adiciona o texto no <pre>
  log.appendChild(pre); // Adiciona <pre> no log
}

// O evento "load" ocorre quando um documento está totalmente carregado. Normalmente,
// precisamos esperar por esse evento antes de começarmos a executar nosso código
// JavaScript.
window.onload = function () {
  // Executa esta função quando o documento for carregado
  // Localiza todas as marcas <img> no documento
  var images = document.getElementsByTagName('img');
  // Faz um laço por elas, adicionando uma rotina de tratamento para eventos "click" em
  // cada uma para que clicar na imagem a oculte.
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    if (image.addEventListener)
      // Outro modo de registrar uma rotina de
      // tratamento
      image.addEventListener('click', hide, false);
    // Para compatibilidade com o IE8 e anteriores
    else image.attachEvent('onclick', hide);
  }
  // Esta é a função de rotina para tratamento de evento registrada anteriormente
  function hide(event) {
    event.target.style.visibility = 'hidden';
  }
};
