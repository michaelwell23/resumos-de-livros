var paras = $('p');
paras.first(); // Seleciona apenas o primeiro elemento p
paras.last(); // Seleciona apenas o último p
paras.eq(1); // Seleciona o segundo p
paras.eq(-2); // Seleciona o penúltimo p
paras[1]; // O segundo elemento p

$('p').slice(2, 5); // Seleciona o 3º, 4º e 5º elementos <p>
$('div').slice(-3); // Os três últimos elementos <div>

$('div').filter('.note'); // O mesmo que $("div.note")
$('div').filter($('.note')); // O mesmo que $("div.note")
$('div').filter(function (idx) {
  return idx % 2 == 0;
}); // O mesmo que $("div:even")

$('div').not('#header, #footer'); // Todos os elementos <div> exceto dois especiais

$('p').has('a[href]'); // Parágrafos que incluem links

// Maneiras equivalentes de selecionar todos os elementos <div> e <p>
$('div, p'); // Usa um grupo de seletores
$('div').add('p'); // Passa um seletor para add()
$('div').add($('p')); // Passa um objeto jQuery para add()
var paras = document.getElementsByTagName('p'); // Um objeto semelhante a um array
$('div').add(paras); // Passa um array de elementos para add()
