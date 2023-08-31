/**
* rollover.js: trocas não obstrusivas de imagens discretas.
*
* Para criar trocas de imagens, inclua este módulo em seu arquivo HTML e
* use o atributo data-rollover em qualquer elemento <img> para especificar o URL da
* imagem de troca. Por exemplo:
*
*
<img src="normal_image.png" data-rollover="rollover_image.png">
*
* Note que esse módulo exige onLoad.js
*/
onLoad(function () {
  // Tudo em uma única função anônima: nenhum símbolo definido
  // Itera por todas as imagens, procurando o atributo data-rollover
  for (var i = 0; i < document.images.length; i++) {
    var img = document.images[i];
    var rollover = img.getAttribute('data-rollover');
    if (!rollover) continue;
    // Pula as imagens sem data-rollover
    // Garante que a imagem de troca esteja na cache
    new Image().src = rollover;
    // Define um atributo para lembrar o URL da imagem padrão
    img.setAttribute('data-rollout', img.src);
    // Registra as rotinas de tratamento de evento que criam o efeito de troca
    img.onmouseover = function () {
      this.src = this.getAttribute('data-rollover');
    };
    img.onmouseout = function () {
      this.src = this.getAttribute('data-rollout');
    };
  }
});
