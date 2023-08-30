// Reduz a 0 a altura de todas as imagens
$('img').animate({ height: 0 });

$('#sprite').animate(
  {
    opacity: 0.25,
    fontSize: 10,
  },
  {
    duration: 500,
    complete: function () {
      this.text('Goodbye');
    },
  }
);
