// Este arquivo de código JS insere o Gadget de Pesquisa no Twitter no documento
// e adiciona uma rotina de tratamento de evento em todos os links do documento para que,
// quando o usuário colocar o mouse sobre eles, o gadget pesquise o URL do link.
// Isso permite ao usuário ver o que as pessoas estão tuitando sobre o destino do link,
// antes de clicar nele.
window.addEventListener(
  'load',
  function () {
    // Não funciona no IE < 9
    var origin = 'http://davidflanagan.com';
    // Origem do gadget
    var gadget = '/demos/TwitterSearch.html';
    // Caminho do gadget
    var iframe = document.createElement('iframe');
    // Cria o iframe

    iframe.src = origin + gadget;
    iframe.width = '250';
    iframe.height = '100%';
    iframe.style.cssFloat = 'right';

    // Insere o iframe no início do documento
    document.body.insertBefore(iframe, document.body.firstChild);

    // Agora localiza todos os links e os conecta ao gadget
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      // addEventListener não funciona no IE8 e anteriores
      links[i].addEventListener(
        'mouseover',
        function () {
          // Envia o url como termo de busca e só o envia se o
          // iframe ainda está exibindo um documento de davidflanagan.com
          iframe.contentWindow.postMessage(this.href, origin);
        },
        false
      );
    }
  },
  false
);
