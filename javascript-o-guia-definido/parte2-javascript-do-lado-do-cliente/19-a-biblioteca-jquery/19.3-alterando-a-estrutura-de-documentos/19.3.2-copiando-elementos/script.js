// Anexa um novo div, com identificação "linklist", no final do documento
$(document.body).append("<div id='linklist'><h1>List of Links</h1></div>");
// Copia todos os links que estão no documento e os insere nesse novo div
$('a').clone().appendTo('#linklist');
// Insere elementos <br/> após cada link para que eles apareçam em linhas separadas
$('#linklist > a').after('<br/>');
