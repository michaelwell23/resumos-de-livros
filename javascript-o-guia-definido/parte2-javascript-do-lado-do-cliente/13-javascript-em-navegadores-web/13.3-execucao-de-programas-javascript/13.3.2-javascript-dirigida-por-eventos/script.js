window.onload = function () {
  '...';
};
document.getElementById('button1').onclick = function () {
  '...';
};
function handleResponse() {
  '...';
}
request.onreadystatechange = handleResponse;

window.addEventListener(
  'load',
  function () {
    '...';
  },
  false
);
request.addEventListener(
  'readystatechange',
  function () {
    '...';
  },
  false
);

window.attachEvent('onload', function () {
  '...';
});

// Registra a função f para ser executada quando o documento terminar de carregar.
// Se o documento já foi carregado, executa de forma assíncrona ASAP.
function onLoad(f) {
  if (onLoad.loaded)
    // Se o documento já está carregado
    window.setTimeout(f, 0);
  // Enfileira f para ser executada assim que
  // possível
  else if (window.addEventListener)
    // Método de registro de evento padrão
    window.addEventListener('load', f, false);
  else if (window.attachEvent)
    // O IE8 e anteriores usam isto em seu lugar
    window.attachEvent('onload', f);
}
// Começa configurando um flag que indica se o documento ainda não está carregado.
onLoad.loaded = false;
// E registra uma função para configurar o flag quando o documento estiver carregado.
onLoad(function () {
  onLoad.loaded = true;
});
