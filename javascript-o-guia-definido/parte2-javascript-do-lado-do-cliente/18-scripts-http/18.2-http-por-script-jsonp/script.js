// Faz um pedido JSONP para o URL especificado e passa os dados
// analisados da resposta para a função callback especificada. Adiciona um parâmetro de
// consulta chamado "jsonp" no URL, para especificar o nome da função callback para a
// requisição.
function getJSONP(url, callback) {
  // Cria um nome de callback exclusivo apenas para essa requisição
  var cbnum = 'cb' + getJSONP.counter++;
  // Incrementa counter a cada vez
  var cbname = 'getJSONP.' + cbnum;
  if (url.indexOf('?') === -1)
    // O URL ainda não tem uma seção de consulta
    url += '?jsonp=' + cbname; // adiciona o parâmetro como seção de consulta
  // Caso contrário,
  else url += '&jsonp=' + cbname; // adiciona-o como um novo parâmetro.

  // Cria o elemento script que vai enviar essa requisição
  var script = document.createElement('script');
  // Define a função callback que será chamada pelo script
  getJSONP[cbnum] = function (response) {
    try {
      callback(response); // Manipula os dados da resposta
    } finally {
      // Mesmo que callback ou response tenham lançado um erro
      delete getJSONP[cbnum];
      // Exclui essa função
      script.parentNode.removeChild(script);
      // Remove o script
    }
  };
  // Agora dispara a requisição HTTP
  script.src = url;
  // Configura o url do script
  document.body.appendChild(script); // Adiciona-o no documento
}
getJSONP.counter = 0; // Um contador que usamos para criar nomes de callback exclusivos
