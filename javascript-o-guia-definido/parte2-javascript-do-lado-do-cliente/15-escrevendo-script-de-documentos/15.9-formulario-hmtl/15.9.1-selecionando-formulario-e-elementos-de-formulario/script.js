var fields = document.getElementById('address').getElementsByTagName('input');

// Todos os botões de opção do formulário com identificação "shipping"
document.querySelectorAll('#shipping input[type="radio"]');
// Todos os botões de opção com o nome "method" no formulário, com identificação
// "shipping"
document.querySelectorAll('#shipping input[type="radio"][name="method"]');

window.address; // Frágil: não use
document.address; // Só funciona para formulários com atributo name
document.forms.address; // Acesso explícito a um formulário com nome ou identificação
document.forms[n]; // Frágil: n é a posição numérica do formulário

document.forms.address[0];
document.forms.address.street;
document.address.street;
// somente para name="address" e não id="address"

document.forms.address.elements[0];
document.forms.address.elements.street;

var methods = document.forms.shipping.elements.method;

var shipping_method;
for (var i = 0; i < methods.length; i++)
  if (methods[i].checked) shipping_method = methods[i].value;
