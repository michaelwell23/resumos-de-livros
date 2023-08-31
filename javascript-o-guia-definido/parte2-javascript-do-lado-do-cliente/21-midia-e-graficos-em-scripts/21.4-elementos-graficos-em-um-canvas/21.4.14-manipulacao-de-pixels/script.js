// Borra os pixels do retângulo à direita, produzindo um
// tipo de motion blur, como se os objetos estivessem indo da direita para a esquerda.
// n deve ser 2 ou mais. Valores maiores produzem borrões maiores.
// O retângulo é especificado no sistema de coordenadas padrão.
function smear(c, n, x, y, w, h) {
  // Obtém o objeto ImageData que representa o retângulo de pixels a borrar
  var pixels = c.getImageData(x, y, w, h);
  var output_pixels = c.createImageData(pixels);
  // Essas dimensões podem ser diferentes dos argumentos w e h: pode haver
  // mais de um pixel de dispositivo por pixel CSS.
  var width = pixels.width,
    height = pixels.height;
  // Este é o array de bytes que contém os dados de pixel brutos, da esquerda para a
  // direita e de cima para baixo. Cada pixel ocupa 4 bytes consecutivos na ordem
  // R,G,B,A.
  var data = pixels.data;

  // Cada pixel após o primeiro em cada linha é borrado por ser substituído por
  // 1/n-ésimo de seu próprio valor, mais m/n-ésimos do valor do pixel anterior
  var m = n - 1;
  for (var row = 0; row < height; row++) {
    // Para cada linha
    var i = row * width * 4 + 4;
    // O deslocamento do segundo pixel da linha
    for (var col = 1; col < width; col++, i += 4) {
      // Para cada coluna
      data[i] = (data[i] + data[i - 4] * m) / n;
      // Componente de pixel vermelho
      data[i + 1] = (data[i + 1] + data[i - 3] * m) / n;
      // Verde
      data[i + 2] = (data[i + 2] + data[i - 2] * m) / n;
      // Azul
      data[i + 3] = (data[i + 3] + data[i - 1] * m) / n;
      // Componente alfa
    }
  }
  // Agora copia os dados da imagem borrada de volta na mesma posição na tela de desenho
  c.putImageData(pixels, x, y);
}
