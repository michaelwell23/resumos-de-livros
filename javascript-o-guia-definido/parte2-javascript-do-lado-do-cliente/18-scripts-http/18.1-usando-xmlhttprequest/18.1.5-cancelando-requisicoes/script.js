// Faz uma requisição HTTP GET solicitando o conteúdo do URL especificado.
// Se a resposta chega normalmente, passa responseText para a função callback.
// Se a resposta não chega em menos do que timeout ms, cancela a requisição.
// Os navegadores podem disparar "readystatechange" após abort() e, se foi
// recebida uma requisição parcial, a propriedade status pode ser configurada, de modo
// que precisamos ativar um flag para não chamarmos a função callback para uma
// resposta parcial que atingiu o tempo-limite. Esse problema não surge se usamos o
// evento load.
function timedGetText(url, timeout, callback) {
  var request = new XMLHttpRequest(); // Cria nova requisição.
  var timedout = false;
  // Tenhamos atingido o tempo-limite ou não.
  // Inicia um timer que vai abortar o pedido após timeout ms.
  var timer = setTimeout(function () {
    // Inicia um timer. Se disparado,
    timedout = true; // ativa um flag e, então,
    request.abort(); // cancela a requisição.
  }, timeout);
  request.open('GET', url);
  request.onreadystatechange = function () {
    if (request.readyState !== 4) return;
    if (timedout) return;
    clearTimeout(timer);
    if (request.status === 200) callback(request.responseText);
  };
  request.send(null);
}
