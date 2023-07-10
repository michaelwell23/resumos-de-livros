// A instrução with é usada para ampliar o encadeamento de escopo temporariamente. Ela tem a seguinte sintaxe:
with (objeto) instrução;

// Em JavaScript do lado do cliente, por exemplo, talvez seja necessário digitar expressões como a seguinte para acessar elementos de um formulário HTML:
document.forms[0].address.value;

// Caso precise escrever expressões como essa várias vezes, você pode usar a instrução with para adicionar o objeto formulário no encadeamento de escopo:
with (document.forms[0]) {
  // Acessa elementos do formulário diretamente aqui. Por exemplo:
  name.value = '';
  address.value = '';
  email.value = '';
}

var f = document.forms[0];
f.name.value = '';
f.address.value = '';
f.email.value = '';

with (o) x = 1;
