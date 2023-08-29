// Localiza todos os elementos <input type="file"> com um atributo data-uploadto
// e registra uma rotina de tratamento onchange para que qualquer arquivo selecionado
// seja postado (com POST) automaticamente no URL "uploadto" especificado.
// A resposta do servidor é ignorada.
whenReady(function () {
  // Executa quando o documento está pronto
  var elts = document.getElementsByTagName('input'); // Todos os elementos de entrada
  for (var i = 0; i < elts.length; i++) {
    // Itera por eles
    var input = elts[i];
    if (input.type !== 'file') continue;
    // Pula todos os elementos, menos
    // o de carregamento de arquivo
    var url = input.getAttribute('data-uploadto'); // Obtém o URL para carregamento
    if (!url) continue;
    // Pula todos sem url
    input.addEventListener(
      'change',
      function () {
        var file = this.files[0];
        if (!file) return;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(file);
      },
      false
    );
  }
});
