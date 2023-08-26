n.parentNode.removeChild(n);
n.parentNode.replaceChild(document.createTextNode('[ REDACTED ]'), n);

// Substitui o nó n por um novo elemento <b> e torna n um filho desse elemento.
function embolden(n) {
  // Se passamos uma string em vez de um nó, trata-a como uma identificação de elemento
  if (typeof n == 'string') n = document.getElementById(n);
  var parent = n.parentNode;
  // Obtém o pai de n
  var b = document.createElement('b');
  // Cria um elemento <b>
  parent.replaceChild(b, n);
  // Substitui pelo elemento <b>
  b.appendChild(n);
  // Torna n um filho do elemento <b>
}

// Implementa a propriedade outerHTML para navegadores que não a suportam.
// Presume que o navegador suporta innerHTML, tem um
// Element.prototype extensível e permite a definição de getters e setters.
(function () {
  // Se já temos outerHTML retorna sem fazer nada
  if (document.createElement('div').outerHTML) return;

  // Retorna a HTML externa do elemento referido por this
  function outerHTMLGetter() {
    var container = document.createElement('div');
    // Elemento fictício
    container.appendChild(this.cloneNode(true));
    // Copia this no fictício
    return container.innerHTML;
    // Retorna conteúdo fictício
  }
  // Configura a HTML externa desse elemento com o valor especificado
  function outerHTMLSetter(value) {
    // Cria um elemento fictício e configura seu conteúdo com o valor especificado
    var container = document.createElement('div');
    container.innerHTML = value;
    // Move cada um dos nós do fictício para o documento
    while (container.firstChild)
      // Itera até que container não tenha mais filhos
      this.parentNode.insertBefore(container.firstChild, this);
    // E remove o nó que foi substituído
    this.parentNode.removeChild(this);
  }

  // Agora usa estas duas funções como getters e setters para a
  // propriedade outerHTML de todos os objetos Element. Usa Object.defineProperty da ES5
  // se existe; caso contrário, recorre a __defineGetter__ e Setter__.
  if (Object.defineProperty) {
    Object.defineProperty(Element.prototype, 'outerHTML', {
      get: outerHTMLGetter,
      set: outerHTMLSetter,
      enumerable: false,
      configurable: true,
    });
  } else {
    Element.prototype.__defineGetter__('outerHTML', outerHTMLGetter);
    Element.prototype.__defineSetter__('outerHTML', outerHTMLSetter);
  }
})();
