/*
 * A API de DnD é muito complicada e os navegadores não são totalmente capazes de operar
 * em conjunto.
 * Este exemplo tem os fundamentos certos, mas cada navegador é um pouco diferente
 * e cada um parece ter seus próprios erros. Este código não tenta
 * soluções específicas para os navegadores.
 */
whenReady(function () {
  // Executa esta função quando o documento está pronto
  // Localiza todos os elementos <ul class='dnd'> e chama a função dnd() neles
  var lists = document.getElementsByTagName('ul');
  var regexp = /\bdnd\b/;
  for (var i = 0; i < lists.length; i++)
    if (regexp.test(lists[i].className)) dnd(lists[i]);
  // Adiciona rotinas de tratamento de arrastar e soltar em um elemento da lista
  function dnd(list) {
    var original_class = list.className;
    // Lembra a classe CSS original
    var entered = 0;
    // Monitora as entradas e saídas
    // Esta rotina de tratamento é chamada quando um arrasto entra na lista pela
    // primeira vez. Ela verifica se o arrastamento contém dados em um formato que
    // possa processar e, se puder,
    // retorna false para indicar interesse em uma soltura. Nesse caso, ela também
    // realça o alvo de soltura para permitir que o usuário saiba desse interesse.
    list.ondragenter = function (e) {
      e = e || window.event; // Evento padrão ou IE
      var from = e.relatedTarget;

      // Se entramos de fora da lista ou se
      // essa é a primeira entrada, então precisamos fazer alguma coisa
      entered++;
      if ((from && !ischild(from, list)) || entered == 1) {
        // Todas as informações de DnD estão nesse objeto dataTransfer
        var dt = e.dataTransfer;

        var types = dt.types; // Em quais formatos os dados estão disponíveis

        if (
          !types || // IE
          (types.contains && types.contains('text/plain')) || //HTML5
          (types.indexOf && types.indexOf('text/plain') != -1)
        ) {
          //Webkit
          list.className = original_class + ' droppable';
          return false;
        }
        // Se não reconhecemos o tipo de dados, não queremos uma soltura
        return;
        // sem cancelamento
      }
      return false;
      // Se não é a primeira entrada, ainda estamos interessados
    };

    list.ondragover = function (e) {
      return false;
    };
    // Esta rotina de tratamento é chamada quando o arrasto parte da lista
    // ou de um de seus filhos. Se estamos realmente deixando a lista
    // (e não apenas indo de um item da lista para outro), então retira seu realce.
    list.ondragleave = function (e) {
      e = e || window.event;
      var to = e.relatedTarget;
      // Se estamos saindo para algo fora da lista ou se essa saída
      // compensa as entradas, então retira o realce da lista
      entered--;
      if ((to && !ischild(to, list)) || entered <= 0) {
        list.className = original_class;
        entered = 0;
      }
      return false;
    };

    list.ondrop = function (e) {
      e = e || window.event; // Obtém o evento
      // Obtém os dados que foram soltos em formato de texto puro.
      // "Text" é um apelido para "text/plain".
      // O IE não suporta "text/plain"; portanto, usamos "Text" aqui.
      var dt = e.dataTransfer;
      // Objeto dataTransfer
      var text = dt.getData('Text'); // Obtém os dados soltos como texto puro.
      // Se obtivemos algum texto, transformamos em um novo item no final da
      // lista.
      if (text) {
        var item = document.createElement('li'); // Cria novo <li>
        item.draggable = true;
        // Torna possível arrastá-lo
        item.appendChild(document.createTextNode(text)); // Adiciona texto
        list.appendChild(item);
        // Adiciona-o na lista
        // Restaura o estilo original da lista e zera a contagem de entered
        list.className = original_class;
        entered = 0;
        return false;
      }
    };

    // Torna possível arrastar todos os itens que estavam originalmente na lista
    var items = list.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) items[i].draggable = true;
    // E registra rotinas de tratamento de evento para arrastar itens da lista.
    // Note que colocamos essas rotinas de tratamento na lista e permitimos que os
    // eventos borbulhem para cima a partir dos itens.
    // Esta rotina de tratamento é chamada quando um arrasto é iniciado dentro da
    // lista.
    list.ondragstart = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;
      // Se borbulhou a partir de algo que não um <li>, ignora-o
      if (target.tagName !== 'LI') return false;
      // Obtém o importante objeto dataTransfer
      var dt = e.dataTransfer;
      // Informa quais dados precisamos arrastar e em que formato estão
      dt.setData('Text', target.innerText || target.textContent);
      // Informa que sabemos como permitir cópias ou movimentações dos dados
      dt.effectAllowed = 'copyMove';
    };
    // Esta rotina de tratamento é chamada depois da ocorrência de uma soltura
    // bem-sucedida
    list.ondragend = function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;

      if (e.dataTransfer.dropEffect === 'move')
        target.parentNode.removeChild(target);
    };
    // Esta é a função utilitária que usamos em ondragenter e ondragleave.
    // Retorna true se a é filho de b.
    function ischild(a, b) {
      for (; a; a = a.parentNode) if (a === b) return true;
      return false;
    }
  }
});
