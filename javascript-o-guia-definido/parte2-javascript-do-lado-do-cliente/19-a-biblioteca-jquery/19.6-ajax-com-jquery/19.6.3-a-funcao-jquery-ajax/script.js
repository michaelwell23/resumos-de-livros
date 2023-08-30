jQuery.ajax({
  type: 'GET', // O método da requisição HTTP.
  url: url, // O URL dos dados a buscar.
  data: null, // Não adiciona quaisquer dados no URL.
  dataType: 'script', // Executa a resposta como um script quando o obtivermos.
  success: callback, // Chama esta função ao terminar.
});

jQuery.ajaxSetup({
  timeout: 2000, // Cancela todos as requisições Ajax após 2 segundos
  cache: false, // Desmonta a cache do navegador, adicionando um timestamp no URL
});
