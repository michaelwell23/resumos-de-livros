applicationCache.onupdateready = function () {
  var reload = confirm(
    'A new version of this application is available\n' +
      'and will be used the next time you reload.\n' +
      'Do you want to reload now?'
  );
  if (reload) location.reload();
};

// Exemplo 20-4 Tratando de eventos da cache de aplicativo
// Todas as rotinas de tratamento de evento a seguir utilizam esta função para exibir
// mensagens de status.
// Como todas as rotinas de tratamento exibem mensagens de status dessa maneira, elas
// retornam false
// para cancelar o evento e impedir que o navegador exiba seu próprio status.
function status(msg) {
  // Exibe a mensagem no elemento do documento com identificação "statusline"
  document.getElementById('statusline').innerHTML = msg;
  console.log(msg); // E também na console de depuração
}
// Sempre que o aplicativo é carregado, ele verifica seu arquivo de manifesto.
// O evento checking é sempre disparado primeiro, quando esse processo começa.
window.applicationCache.onchecking = function () {
  status('Checking for a new version.');
  return false;
};
// Se o arquivo de manifesto não mudou e o aplicativo já está na cache,

// o evento noupdate é disparado e o processo termina.
window.applicationCache.onnoupdate = function () {
  status('This version is up-to-date.');
  return false;
};

// Se o aplicativo ainda não está na cache ou se o manifesto mudou,
// o navegador baixa e coloca na cache tudo que estiver listado no manifesto.
// O evento downloading sinaliza o início desse processo de download.
window.applicationCache.ondownloading = function () {
  status('Downloading new version');
  window.progresscount = 0; // Usado na rotina de tratamento de progress a seguir
  return false;
};
// Os eventos progress são disparados periodicamente durante o processo de download,
// normalmente uma vez para cada arquivo baixado.
window.applicationCache.onprogress = function (e) {
  // O objeto evento deve ser um evento progress (como aqueles usados pela XHR2)
  // que nos permita calcular uma porcentagem de conclusão, mas se não for,
  // mantemos a contagem de quantas vezes fomos chamados.
  var progress = '';
  if (e && e.lengthComputable)
    // Evento progress: calcula a porcentagem
    progress = ' ' + Math.round((100 * e.loaded) / e.total) + '%';
  // Caso contrário, relata o nº de vezes que foi chamado
  else progress = ' (' + ++progresscount + ')';
  status('Downloading new version' + progress);
  return false;
};
// Na primeira vez que um aplicativo é baixado na cache, o navegador
// dispara o evento cached quando o download tiver terminado.
window.applicationCache.oncached = function () {
  status('This application is now cached locally');
  return false;
};
// Quando um aplicativo que já está na cache é atualizado e o download está concluído,
// o navegador dispara "updateready". Note que o usuário ainda vai ver
// a versão antiga do aplicativo quando este evento chegar.
window.applicationCache.onupdateready = function () {
  status('A new version has been downloaded. Reload to run it');
  return false;
};
// Se o navegador está off-line e o manifesto não pode ser verificado, um evento "error"
// é disparado. Isso também acontece se um aplicativo que não está na cache faz
// referência a um arquivo de manifesto que não existe
window.applicationCache.onerror = function () {
  status("Couldn't load manifest or cache application");
  return false;
};
// Se um aplicativo colocado na cache faz referência a um arquivo de manifesto que não
// existe, um evento obsolete é disparado e o aplicativo é removido da cache.
// Os carregamentos subsequentes são feitos a partir da rede, em vez da cache.
window.applicationCache.onobsolete = function () {
  status(
    'This application is no longer cached. ' +
      'Reload to get the latest version from the network.'
  );
  return false;
};
