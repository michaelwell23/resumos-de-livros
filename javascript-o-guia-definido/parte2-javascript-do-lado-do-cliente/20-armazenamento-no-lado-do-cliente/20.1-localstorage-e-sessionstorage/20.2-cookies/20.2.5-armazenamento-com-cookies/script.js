/*
 * CookieStorage.js
 * Esta classe implementa a API Storage que localStorage e sessionStorage
 * implementam, mas faz isso em cima de cookies HTTP.
 */
function CookieStorage(maxage, path) {
  // Os argumentos especificam vida útil e escopo
  // Obtém um objeto que contém todos os cookies
  var cookies = (function () {
    // A função getCookies() mostrada anteriormente
    var cookies = {};
    // O objeto que vamos retornar
    var all = document.cookie; // Obtém todos os cookies em uma única string enorme
    if (all === '')
      // Se a propriedade é a string vazia
      return cookies;
    // retorna um objeto vazio
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
  })();
  // Reúne os nomes de cookie em um array
  var keys = [];
  for (var key in cookies) keys.push(key);
  // Agora define as propriedades e métodos públicos da API Storage
  // O número de cookies armazenados
  this.length = keys.length;
  // Retorna o nome do n-ésimo cookie ou null, caso n esteja fora do intervalo
  this.key = function (n) {
    if (n < 0 || n >= keys.length) return null;
    return keys[n];
  };
  // Retorna o valor do cookie nomeado ou null.
  this.getItem = function (name) {
    return cookies[name] || null;
  };
  // Armazena um valor
  this.setItem = function (key, value) {
    if (!(key in cookies)) {
      // Se não existe nenhum cookie com esse nome
      keys.push(key);
      // Adiciona key no array de keys
      this.length++;
      // E incrementa o comprimento
    }
    // Armazena esse par nome/valor no conjunto de cookies.
    cookies[key] = value;
    // Agora configura realmente o cookie.
    // Primeiramente, codifica o valor e cria uma string nome=valor-codificado
    var cookie = key + '=' + encodeURIComponent(value);
    // Adiciona atributos de cookie nessa string
    if (maxage) cookie += '; max-age=' + maxage;
    if (path) cookie += '; path=' + path;
    // Configura o cookie por meio da propriedade mágica document.cookie
    document.cookie = cookie;
  };
  // Remove o cookie especificado
  this.removeItem = function (key) {
    if (!(key in cookies)) return; // Se ele não existe, não faz nada
    // Exclui o cookie de nosso conjunto interno de cookies
    delete cookies[key];
    // E remove a chave do array de nomes também.
    // Isso seria mais fácil com o método de array ES5 indexOf().
    for (var i = 0; i < keys.length; i++) {
      // Itera por todas as chaves
      if (keys[i] === key) {
        // Quando encontrarmos a que queremos
        keys.splice(i, 1);
        // Removemos do array.
        break;
      }
    }
    this.length--;

    // Por fim, exclui realmente o cookie, fornecendo a ele um valor vazio
    // e uma data de expiração imediata.
    document.cookie = key + '=; max-age=0';
  };
  // Remove todos os cookies
  this.clear = function () {
    // Itera pelas chaves, removendo os cookies
    for (var i = 0; i < keys.length; i++)
      document.cookie = keys[i] + '=; max-age=0';
    // Redefine nosso estado interno
    cookies = {};
    keys = [];
    this.length = 0;
  };
}
