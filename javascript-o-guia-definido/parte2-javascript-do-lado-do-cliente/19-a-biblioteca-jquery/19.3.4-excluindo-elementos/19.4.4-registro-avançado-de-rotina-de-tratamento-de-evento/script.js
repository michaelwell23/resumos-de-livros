$('p').bind('click', f);
$('a').bind('mouseenter mouseleave', f);

// Vincula f como rotina de tratamento de mouseover no espaço de nomes "myMod" a todos os
// elementos <a>
$('a').bind('mouseover.myMod', f);
// Vincula f como rotina de tratamento de mouseout nos espaços de nomes "myMod" e
// "yourMod"
$('a').bind('mouseout.myMod.yourMod', f);

$('a').bind({ mouseenter: f, mouseleave: g });
