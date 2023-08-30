// Clicar em qualquer <p> fornece a ele um fundo cinza
$('p').click(function () {
  $(this).css('background-color', 'gray');
});

// Estes são os métodos de registro de rotina de tratamento de evento simples definidos pela jQuery:
blur();
change();
click();
dblclick();
error();
focus();
focusin();
focusout();
keydown();
keypress();
keyup();
load();
mousedown();
mouseenter();
mouseleave();
mousemove();
mouseout();
mouseover();
mouseup();
resize();
scroll();
select();
submit();
unload();

$('<img/>', {
  src: image_url,
  alt: image_description,
  className: 'translucent_image',
  click: function () {
    $(this).css('opacity', '50%');
  },
});
