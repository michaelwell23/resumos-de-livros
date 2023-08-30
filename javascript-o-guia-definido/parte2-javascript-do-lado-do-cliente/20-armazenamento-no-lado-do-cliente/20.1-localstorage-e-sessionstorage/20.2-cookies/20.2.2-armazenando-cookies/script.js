document.cookie = 'version=' + encodeURIComponent(document.lastModified);

// Armazena o par nome/valor como cookie, codificando o valor com
// encodeURIComponent() para fazer o escape de pontos e vírgulas, vírgulas e espaços.
// Se daysToLive é um número, configura o atributo max-age de modo que o cookie
// expire após o número especificado de dias. Passe 0 para excluir um cookie.
function setCookie(name, value, daysToLive) {
  var cookie = name + '=' + encodeURIComponent(value);
  if (typeof daysToLive === 'number')
    cookie += '; max-age=' + daysToLive * 60 * 60 * 24;
  document.cookie = cookie;
}
