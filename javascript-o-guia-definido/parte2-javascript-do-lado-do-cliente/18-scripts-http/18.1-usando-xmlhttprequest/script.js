var request = new XMLHttpRequest();

// XMLHttpRequest no IE6
// Simula a construtora XMLHttpRequest() no IE5 e IE6
if (window.XMLHttpRequest === undefined) {
  window.XMLHttpRequest = function () {
    try {
      // Usa a versão mais recente do objeto ActiveX, se estiver disponível
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e1) {
      try {
        // Caso contrário, recorre a uma versão mais antiga
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e2) {
        // Caso contrário, lança um erro
        throw new Error('XMLHttpRequest is not supported');
      }
    }
  };
}
