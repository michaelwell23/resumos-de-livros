// Codifica what, where e radius em um documento XML e os posta no
// url especificado, chamando callback quando a resposta é recebida
function postQuery(url, what, where, radius, callback) {
  var request = new XMLHttpRequest();
  request.open('POST', url);
  // Posta (com POST) no url especificado
  request.onreadystatechange = function () {
    // Rotina de tratamento de evento simples
    if (request.readyState === 4 && callback) callback(request);
  };
  // Cria um documento XML com elemento-raiz <query>
  var doc = document.implementação.createDocument('', 'query', null);
  var query = doc.documentElement;
  // O elemento <query>
  var find = doc.createElement('find');
  // Cria um elemento <find>
  query.appendChild(find);
  // E o adiciona em <query>
  find.setAttribute('zipcode', where);
  // Configura atributos em <find>
  find.setAttribute('radius', radius);
  find.appendChild(doc.createTextNode(what)); // E configura o conteúdo de <find>
  // Agora envia os dados codificados como XML para o servidor.
  // Note que Content-Type será configurado automaticamente.
  request.send(doc);
}
