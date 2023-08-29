/**
 * Codifica as propriedades de um objeto como se fossem pares nome/valor de
 * um formulário HTML, usando o formato application/x-www-form-urlencoded
 */
function encodeFormData(data) {
  if (!data) return '';
  // Sempre retorna uma string
  var pairs = []; // Para conter pares nome=valor
  for (var name in data) {
    // Para cada nome
    if (!data.hasOwnProperty(name)) continue;
    // Pula herdadas
    if (typeof data[name] === 'function') continue;
    // Pula métodos
    var value = data[name].toString();
    // Valor como string
    name = encodeURIComponent(name).replace('%20', '+');
    // Codifica name
    value = encodeURIComponent(value).replace('%20', '+'); // Codifica value
    pairs.push(name + '=' + value);
    // Lembra o par name=value
  }
  return pairs.join('&');
  // Retorna pares unidos, separados com &
}

function postData(url, data, callback) {
  var request = new XMLHttpRequest();
  request.open('POST', url);
  // Posta (com POST) no url especificado
  request.onreadystatechange = function () {
    // Rotina de tratamento de evento simples
    if (request.readyState === 4 && callback)
      // Quando a resposta está completa
      callback(request);
    // chama a função callback.
  };
  request.setRequestHeader(
    'Content-Type',
    // Configura Content-Type
    'application/x-www-form-urlencoded'
  );
  request.send(encodeFormData(data));
  // Envia dados codificados como formulário
}

function getData(url, data, callback) {
  var request = new XMLHttpRequest();
  request.open(
    'GET',
    url + // Obtém (com GET) o url especificado
      '?' +
      encodeFormData(data)
  );
  // com os dados codificados adicionados
  request.onreadystatechange = function () {
    // Rotina de tratamento de evento simples
    if (request.readyState === 4 && callback) callback(request);
  };
  request.send(null);
  // Envia a requisição
}
