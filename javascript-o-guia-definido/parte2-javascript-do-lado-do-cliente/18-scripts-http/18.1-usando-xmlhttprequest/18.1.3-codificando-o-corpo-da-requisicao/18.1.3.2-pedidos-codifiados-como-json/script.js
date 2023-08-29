function postJSON(url, data, callback) {
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
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(data));
}
