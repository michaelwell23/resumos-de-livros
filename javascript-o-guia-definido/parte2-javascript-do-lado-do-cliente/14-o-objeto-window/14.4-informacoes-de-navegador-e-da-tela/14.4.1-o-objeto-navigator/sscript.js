// Define browser.name e browser.version para farejamento de cliente, usando código
// extraído da jQuery 1.4.1. Tanto o nome como o número são strings e ambos
// podem diferir do nome e versão públicos do navegador. Os nomes detectados são:
//
// "webkit": Safari ou Chrome; a versão é o número da construção do WebKit
// "opera": o navegador Opera; a versão é o número da versão pública
// "mozilla": Firefox ou outros navegadores baseados em gecko; a versão é Gecko
// "msie": IE; a versão é o número da versão pública
//
// Firefox 3.6, por exemplo, retorna: { name: "mozilla", version: "1.9.2" }.
var browser = (function () {
  var s = navigator.userAgent.toLowerCase();
  var match =
    /(webkit)[ \/]([\w.]+)/.exec(s) ||
    /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(s) ||
    /(msie) ([\w.]+)/.exec(s) ||
    (!/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s)) ||
    [];
  return { name: match[1] || '', version: match[2] || '0' };
})();
