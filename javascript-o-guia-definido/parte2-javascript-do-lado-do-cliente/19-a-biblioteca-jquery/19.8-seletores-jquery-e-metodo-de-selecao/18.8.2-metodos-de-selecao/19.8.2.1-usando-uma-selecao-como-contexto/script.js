$('div').find('p'); // localiza elementos <p> dentro de <div>s. O mesmo que $("div p")

// Localiza todos os elementos <span> que são filhos diretos dos elementos com
// identificações "header" e "footer". O mesmo que $("#header>span,#footer>span")
$('#header, #footer').children('span');

$('h1').next('p'); // O mesmo que $("h1+p")
$('h1').prev(); // Elementos irmãos antes dos elementos <h1>

$('#footer').nextAll('p'); // Todos os irmãos de <p> após o elemento #footer
$('#footer').prevAll(); // Todos os irmãos antes do elemento #footer

$('li').parent(); // Pais de itens da lista, como elementos <ul> e <ol>
$('a[href]').parents('p'); // Elementos <p> que contêm links

$('a[href]').closest('div'); // <div>s mais internos que contêm links
$('a[href]').parentsUntil(':not(div)'); // Todos wrappers <div> diretamente em torno de <a>
