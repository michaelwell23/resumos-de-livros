// Inverte a ordem dos filhos do Node n
function reverse(n) {
  // Cria um DocumentFragment vazio como contêiner temporário
  var f = document.createDocumentFragment();
  // Agora itera para trás através dos filhos, movendo cada um para o fragmento.
  // O último filho de n se torna o primeiro filho de f e vice-versa.
  // Note que anexar um filho em f o remove automaticamente de n.
  while (n.lastChild) f.appendChild(n.lastChild);
  // Por fim, move os filhos de f, todos de uma vez, de volta para n, tudo de uma só vez.
  n.appendChild(f);
}

// Este módulo define Element.insertAdjacentHTML para navegadores que não
// a suportam e também define funções portáveis de inserção de HTML que têm
// nomes mais lógicos do que insertAdjacentHTML:
//
Insert.before(), Insert.after(), Insert.atStart(), Insert.atEnd();
var Insert = (function () {
  // Se os elementos têm uma insertAdjacentHTML nativa, a utiliza em quatro
  // funções de inserção HTML com nomes mais sensatos.
  if (document.createElement('div').insertAdjacentHTML) {
    return {
      before: function (e, h) {
        e.insertAdjacentHTML('beforebegin', h);
      },
      after: function (e, h) {
        e.insertAdjacentHTML('afterend', h);
      },
      atStart: function (e, h) {
        e.insertAdjacentHTML('afterbegin', h);
      },
      atEnd: function (e, h) {
        e.insertAdjacentHTML('beforeend', h);
      },
    };
  }
  // Caso contrário, não temos nenhuma insertAdjacentHTML nativa. Implementa as mesmas
  // quatro funções de inserção e, então, as utiliza para definir insertAdjacentHTML.
  // Primeiramente, define um método utilitário que recebe uma string HTML e retorna
  // um DocumentFragment contendo a representação analisada desse HTML.

  function fragment(html) {
    var elt = document.createElement('div');
    // Cria elemento vazio
    var frag = document.createDocumentFragment();
    // Cria fragmento vazio
    elt.innerHTML = html;
    // Configura o conteúdo do elemento
    while (elt.firstChild)
      // Move todos os nós
      frag.appendChild(elt.firstChild);
    // de elt para frag
    return frag;
    // E retorna o frag
  }

  var Insert = {
    before: function (elt, html) {
      elt.parentNode.insertBefore(fragment(html), elt);
    },
    after: function (elt, html) {
      elt.parentNode.insertBefore(fragment(html), elt.nextSibling);
    },
    atStart: function (elt, html) {
      elt.insertBefore(fragment(html), elt.firstChild);
    },
    atEnd: function (elt, html) {
      elt.appendChild(fragment(html));
    },
  };
  // Agora implementa insertAdjacentHTML com base nas funções anteriores
  Element.prototype.insertAdjacentHTML = function (pos, html) {
    switch (pos.toLowerCase()) {
      case 'beforebegin':
        return Insert.before(this, html);
      case 'afterend':
        return Insert.after(this, html);
      case 'afterbegin':
        return Insert.atStart(this, html);
      case 'beforeend':
        return Insert.atEnd(this, html);
    }
  };
  return Insert;
  // Finalmente, retorna as quatro funções de inserção
})();
