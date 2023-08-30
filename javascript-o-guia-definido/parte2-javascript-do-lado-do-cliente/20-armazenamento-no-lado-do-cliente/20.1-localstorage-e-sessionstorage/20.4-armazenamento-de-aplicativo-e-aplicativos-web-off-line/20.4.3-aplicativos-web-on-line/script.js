// Algumas variáveis que precisaremos
var editor, statusline, savebutton, idletimer;
// A primeira vez que o aplicativo carrega
window.onload = function () {
  // Inicializa o armazenamento local se essa é a primeira vez
  if (localStorage.note == null) localStorage.note = '';
  if (localStorage.lastModified == null) localStorage.lastModified = 0;
  if (localStorage.lastSaved == null) localStorage.lastSaved = 0;
  // Localiza os elementos que são a interface com o usuário do editor. Inicializa
  // variáveis globais.
  editor = document.getElementById('editor');
  statusline = document.getElementById('statusline');
  savebutton = document.getElementById('savebutton');
  editor.value = localStorage.note;
  editor.disabled = true;
  // Inicializa o editor com anotação salva
  // Mas não permite editar até que sincronizemos
  // Quando há entrada em textarea
  editor.addEventListener(
    'input',
    function (e) {
      // Salva o novo valor em localStorage
      localStorage.note = editor.value;
      localStorage.lastModified = Date.now();
      // Zera o timer de ociosidade
      if (idletimer) clearTimeout(idletimer);
      idletimer = setTimeout(save, 5000);
      // Habilita o botão salvar
      savebutton.disabled = false;
    },
    false
  );
  // Sempre que o aplicativo é carregado, tenta sincronizar com o servidor
  sync();
};
// Salva no servidor antes de sair da página
window.onbeforeunload = function () {
  if (localStorage.lastModified > localStorage.lastSaved) save();
};
// Se ficamos off-line, permite que o usuário saiba
window.onoffline = function () {
  status('Offline');
};
// Quando voltamos a estar online novamente, sincroniza.
window.ononline = function () {
  sync();
};

// Notifica o usuário se existir uma nova versão desse aplicativo disponível.
// Também poderíamos forçar uma recarga aqui, com location.reload()
window.applicationCache.onupdateready = function () {
  status('A new version of this application is available. Reload to run it');
};

// Além disso, permite que o usuário saiba que não há uma nova versão disponível.
window.applicationCache.onnoupdate = function () {
  status('You are running the latest version of the application.');
};

// Uma função para exibir uma mensagem de status na linha de status
function status(msg) {
  statusline.innerHTML = msg;
}
// Carrega o texto da anotação no servidor (se estivermos online).
// Será chamado automaticamente após 5 segundos de inatividade, quando
// a anotação for modificada.
function save() {
  if (idletimer) clearTimeout(idletimer);
  idletimer = null;
  if (navigator.onLine) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', '/note');
    xhr.send(editor.value);
    xhr.onload = function () {
      localStorage.lastSaved = Date.now();
      savebutton.disabled = true;
    };
  }
}
// Procura uma nova versão da anotação no servidor. Se não for encontrada
// uma versão mais recente, salva a versão atual no servidor.
function sync() {
  if (navigator.onLine) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/note');
    xhr.send();
    xhr.onload = function () {
      var remoteModTime = 0;
      if (xhr.status == 200) {
        var remoteModTime = xhr.getResponseHeader('Last-Modified');
        remoteModTime = new Date(remoteModTime).getTime();
      }
      if (remoteModTime > localStorage.lastModified) {
        status('Newer note found on server.');
        var useit = confirm(
          'There is a newer version of the note\n' +
            'on the server. Click Ok to use that version\n' +
            'or click Cancel to continue editing this\n' +
            'version and overwrite the server'
        );
        var now = Date.now();
        if (useit) {
          editor.value = localStorage.note = xhr.responseText;

          localStorage.lastSaved = now;
          status('Newest version downloaded.');
        } else status('Ignoring newer version of the note.');
        localStorage.lastModified = now;
      } else status('You are editing the current version of the note.');
      if (localStorage.lastModified > localStorage.lastSaved) {
        save();
      }
      editor.disabled = false;
      editor.focus();
      // Habilita o editor novamente
      // E coloca o cursor nele
    };
  } else {
    // Se estamos off-line, não podemos sincronizar
    status("Can't sync while offline");
    editor.disabled = false;
    editor.focus();
  }
}
