function postFormData(url, data, callback) {
  if (typeof FormData === 'undefined')
    throw new Error('FormData is not implemented');
  var request = new XMLHttpRequest();
  // Nova requisição HTTP
  request.open('POST', url);
  // Posta (com POST) no url especificado
  request.onreadystatechange = function () {
    // Uma rotina de tratamento de evento simples.
    if (request.readyState === 4 && callback)
      // Quando a resposta está completa
      callback(request);
    // ...chama a função callback.
  };
  var formdata = new FormData();
  for (var name in data) {
    if (!data.hasOwnProperty(name)) continue;
    // Pula propriedades herdadas
    var value = data[name];
    if (typeof value === 'function') continue;
    // Pula métodos
    // Cada propriedade se torna uma "parte" da requisição.
    // Objetos File são permitidos aqui
    formdata.append(name, value); // Adiciona nome/valor como uma parte
  }
  // Envia os pares nome/valor no corpo de uma requisição multipart/form-data. Cada
  // par é uma parte da requisição. Note que o envio configura o
  // cabeçalho Content-Type automaticamente, quando você o passa para um objeto FormData
  request.send(formdata);
}
