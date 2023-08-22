// Exibe mensagens de erro em uma caixa de diálogo, mas nunca mais do que 3
window.onerror = function (msg, url, line) {
  if (onerror.num++ < onerror.max) {
    alert('ERROR: ' + msg + '\n' + url + ':' + line);
    return true;
  }
};
onerror.max = 3;
onerror.num = 0;
