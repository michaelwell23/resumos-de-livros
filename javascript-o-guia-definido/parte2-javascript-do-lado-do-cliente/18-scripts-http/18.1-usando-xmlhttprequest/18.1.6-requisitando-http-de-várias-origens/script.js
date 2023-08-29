/**
 * linkdetails.js
 *
 * Este módulo não obstrusivo de JavaScript localiza todos os elementos <a> que tenham
 * um atributo href, mas nenhum atributo title, e adiciona uma rotina de tratamento de
 * evento onmouseover neles. A rotina de tratamento de evento faz um pedido HEAD do
 * objeto XMLHttpRequest para buscar detalhes sobre o recurso vinculado e, então,
 * configura esses detalhes no atributo title do link para que sejam exibidos como uma
 * dica de ferramenta.
 */
whenReady(function () {
  // Há alguma chance de que requisições com várias origens sejam bem-sucedidos?
  var supportsCORS = new XMLHttpRequest().withCredentials !== undefined;
  // Itera por todos os links do documento
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (!link.href) continue;
    // Pula âncoras que não são hiperlinks
    if (link.title) continue;
    // Pula links que já têm dicas de ferramenta
    // Se esse é um link de várias origens
    if (link.host !== location.host || link.protocol !== location.protocol) {
      link.title = 'Off-site link'; // Presume que não podemos obter mais
      // informações
      if (!supportsCORS) continue; // Sai agora, se não existir suporte para CORS
      // Caso contrário, podemos saber mais sobre o link
      // Portanto, vai em frente e registra as rotinas de tratamento de evento
      // para que possamos tentar.
    }
    // Registra rotina de tratamento de evento para baixar detalhes do link em
    // mouseover
    if (link.addEventListener)
      link.addEventListener('mouseover', mouseoverHandler, false);
    else link.attachEvent('onmouseover', mouseoverHandler);
  }
  function mouseoverHandler(e) {
    var link = e.target || e.srcElement;
    var url = link.href;
    var req = new XMLHttpRequest();
    req.open('HEAD', url);
    req.onreadystatechange = function () {
      if (req.readyState !== 4) return;

      if (req.status === 200) {
        // Se for bem-sucedida
        var type = req.getResponseHeader('Content-Type');
        // Obtém
        var size = req.getResponseHeader('Content-Length');
        // detalhes
        var date = req.getResponseHeader('Last-Modified');
        // do link
        // Exibe os detalhes em uma dica de ferramenta.
        link.title =
          'Type: ' + type + ' \n' + 'Size: ' + size + ' \n' + 'Date: ' + date;
      } else {
        // Se a requisição falhou e o link ainda não tem uma
        // dica de ferramenta "Off-site link", então exibe o erro.
        if (!link.title)
          link.title =
            "Couldn't fetch details: \n" + req.status + ' ' + req.statusText;
      }
    };
    req.send(null);
    // Remove a rotina de tratamento: queremos buscar esses cabeçalhos apenas uma vez.
    if (link.removeEventListener)
      link.removeEventListener('mouseover', mouseoverHandler, false);
    else link.detachEvent('onmouseover', mouseoverHandler);
  }
});
