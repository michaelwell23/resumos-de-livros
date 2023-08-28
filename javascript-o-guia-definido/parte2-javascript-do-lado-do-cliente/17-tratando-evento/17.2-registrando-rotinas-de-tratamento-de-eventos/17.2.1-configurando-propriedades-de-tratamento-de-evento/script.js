// Configura a propriedade onload do objeto Window em uma função.
// A função é a rotina de tratamento de evento: ela é chamada quando o documento é
// carregado.
window.onload = function () {
  // Pesquisa um elemento <form>
  var elt = document.getElementById('shipping_address');
  // Registra uma função de tratamento de evento que vai ser chamada
  // imediatamente antes do envio do formulário.
  elt.onsubmit = function () {
    return validate(this);
  };
};
