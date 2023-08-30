$('*').unbind(); // Remove todas as rotinas de tratamento de evento jQuery de todos os
// elementos!

// Desvincula todas as rotinas de tratamento de mouseover e mouseout em todos os
// elementos <a>
$('a').unbind('mouseover mouseout');

// Desvincula todas as rotinas de tratamento de mouseover e mouseout no espaço de nomes
// "myMod"
$('a').unbind('mouseover.myMod mouseout.myMod');
// Desvincula rotinas de tratamento para qualquer tipo de evento no espaço de nomes myMod
$('a').unbind('.myMod');
// Desvincula rotinas de tratamento de evento click que estão nos espaços de nomes "ns1" e
// "ns2"
$('a').unbind('click.ns1.ns2');

$('#mybutton').unbind('click', myClickHandler);

$('a').unbind({
  // Remove rotinas de tratamento de mouseover e mouseout específicas
  mouseover: mouseoverHandler,
  mouseout: mouseoutHandler,
});
