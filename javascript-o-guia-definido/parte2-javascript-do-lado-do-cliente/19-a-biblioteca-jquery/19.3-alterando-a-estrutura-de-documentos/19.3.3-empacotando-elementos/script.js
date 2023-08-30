// Empacota todos os elementos <h1> com elementos <i>
$('h1').wrap(document.createElement('i'));
// Produz <i><h1>...</h1></i>
// Empacota o conteúdo de todos os elementos <h1>. Usar um argumento de string é mais
// fácil.
$('h1').wrapInner('<i/>');
// Produz <h1><i>...</i></h1>
// Empacota o primeiro parágrafo em uma âncora e div
$('body>p:first').wrap("<a name='lead'><div class='first'></div></a>");
// Empacota todos os outros parágrafos em outro div
$('body>p:not(:first)').wrapAll("<div class='rest'></div>");
