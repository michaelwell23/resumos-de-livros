// Retorna os cookies do documento como um objeto de pares nome/valor.
// Presume que os valores de cookie são codificados com encodeURIComponent().
function getCookies() {
  var cookies = {};
  var all = document.cookie;
  if (all === '') return cookies;
  var list = all.split('; ');
  for (var i = 0; i < list.length; i++) {
    var cookie = list[i];
    var p = cookie.indexOf('=');
    var name = cookie.substring(0, p);
    var value = cookie.substring(p + 1);
    value = decodeURIComponent(value);
    cookies[name] = value;
  }
  return cookies;
}
