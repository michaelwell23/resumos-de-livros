$(document).delegate('a', 'mouseover', linkHandler);

// Rotinas de tratamento de evento estáticas para links estáticos
$('a').bind('mouseover', linkHandler);

// Rotinas de tratamento de evento dinâmicas para as partes do documento que são
// atualizadas dinamicamente
$('.dynamic').delegate('a', 'mouseover', linkHandler);

$('a').live('mouseover', linkHandler);
$('a', $('.dynamic')).live('mouseover', linkHandler);

x.live(type, handler);
$(x.context).delegate(x.selector, type, handler);

$('a').die('mouseover');
$('a').die('mouseover', linkHandler);

$(document).undelegate('a');
$(document).undelegate('a', 'mouseover');
$(document).undelegate('a', 'mouseover', linkHandler);
