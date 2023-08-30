$('img')
  .fadeIn(500)
  .animate({ width: '+=100' }, { queue: false, duration: 1000 })
  .fadeOut(500);

$('img').animate({ width: '+=100' }, { duration: 500, easing: 'linear' });
$('img').animate({ width: '+=100' }, 500, 'linear');

// Oculta imagens, assim como o método hide(), mas anima o tamanho delas linearmente
// enquanto a opacidade está sendo animada com a função de abrandamento padrão "swing"
// Um modo de fazer isso:
// Usar a opção specialEasing para especificar funções de abrandamento personalizadas
$('img').animate(
  { width: 'hide', height: 'hide', opacity: 'hide' },
  { specialEasing: { width: 'linear', height: 'linear' } }
);
// Outro modo de fazer isso:
// Passar arrays [target value, easing function] no primeiro argumento objeto.
$('img').animate({
  width: ['hide', 'linear'],
  height: ['hide', 'linear'],
  opacity: 'hide',
});
