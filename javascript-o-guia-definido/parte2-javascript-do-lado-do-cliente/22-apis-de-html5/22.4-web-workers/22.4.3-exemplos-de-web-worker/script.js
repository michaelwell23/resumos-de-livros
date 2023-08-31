// Substitui de forma síncrona o conteúdo da imagem por uma versão borrada.
// A utiliza como segue: <img src="testimage.jpg" onclick="smear(this)"/>
function smear(img) {
  // Cria um elemento <canvas> fora da tela, com o mesmo tamanho da imagem
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  // Copia a imagem no canvas e então extrai seus pixels
  var context = canvas.getContext('2d');
  context.drawImage(img, 0, 0);
  var pixels = context.getImageData(0, 0, img.width, img.height);
  // Envia os pixels para uma thread worker
  var worker = new Worker('SmearWorker.js');
  worker.postMessage(pixels);
  // Cria o worker
  // Copia e envia os pixels
  // Registra uma rotina de tratamento para obter a resposta do worker
  worker.onmessage = function (e) {
    var smeared_pixels = e.data;
    // Pixels do worker
    context.putImageData(smeared_pixels, 0, 0);
    // Copia-os no canvas
    img.src = canvas.toDataURL();
    // E então na img
    worker.terminate();
    // Para a thread worker
    canvas.width = canvas.height = 0;
    // Não mantém os pixels
  };
}

// Processamento de imagem em um Web Worker
// Obtém um objeto ImageData da thread principal, processa-o, envia de volta
onmessage = function (e) {
  postMessage(smear(e.data));
};
// Mancha os pixels de ImageData à direita, produzindo um motion blur.
// Para imagens grandes, essa função faz muitos cálculos e causaria problemas de resposta
// na interface com o usuário se fosse usada na thread principal.
function smear(pixels) {
  var data = pixels.data,
    width = pixels.width,
    height = pixels.height;
  var n = 10,
    m = n - 1;
  // Torna n maior para mais mancha
  for (var row = 0; row < height; row++) {
    // Para cada linha
    var i = row * width * 4 + 4;
    // Deslocamento do 2º pixel
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
  return pixels;
}

// Fazendo requisições XMLHttpRequest síncronos em um Web Worker
// Este arquivo será carregado com um novo Worker(), de modo que é executado como um
// thread independente e pode usar a API XMLHttpRequest síncrona com segurança.
// As mensagens devem ser arrays de URLs. Busca de forma síncrona o
// conteúdo de cada URL como uma string e envia de volta um array dessas strings.
onmessage = function (e) {
  var urls = e.data;
  // Nossa entrada: os URLs a serem buscados
  var contents = [];
  // Nossa saída: o conteúdo desses URLs
  for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    // Para cada URL
    var xhr = new XMLHttpRequest();
    // Inicia uma requisição HTTP
    xhr.open('GET', url, false);
    // false torna isso síncrono
    xhr.send();
    // Bloqueia até que a resposta esteja completa
    if (xhr.status !== 200)
      // Lança um erro se a requisição falhou
      throw Error(xhr.status + ' ' + xhr.statusText + ': ' + url);
    contents.push(xhr.responseText); // Caso contrário, armazena o conteúdo do URL
  }
  // Por fim, envia o array de conteúdo de URL de volta para a thread principal
  postMessage(contents);
};
