navigator.geolocation.getCurrentPosition(function (pos) {
  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;
  alert('Your position: ' + latitude + ', ' + longitude);
});

// Retorna um elemento <img> recém-criado que vai (quando a geolocalização for bem-sucedida)
// ser configurado para exibir um mapa do Google da localização atual. Note que o
// chamador deve inserir o elemento retornado no documento para torná-lo visível. Lança
// um erro se geolocalização não é suportada no navegador
function getmap() {
  // Procura suporte para geolocalização
  if (!navigator.geolocation) throw 'Geolocation not supported';
  // Cria um novo elemento <img>, inicia o pedido de geolocalização para fazer img
  // exibir um mapa de onde estamos e, então, retorna a imagem.
  var image = document.createElement('img');
  navigator.geolocation.getCurrentPosition(setMapURL);
  return image;
  // Esta função vai ser chamada após retornarmos o objeto imagem, quando
  // (e se) o pedido de geolocalização for bem-sucedido.
  function setMapURL(pos) {
    // Obtém nossas informações de posição do objeto argumento
    var latitude = pos.coords.latitude;
    // Graus N do equador
    var longitude = pos.coords.longitude;
    // Graus E de Greenwich
    var accuracy = pos.coords.accuracy;
    // Metros
    // Constrói um URL para uma imagem estática de mapa do Google dessa localização
    var url =
      'http://maps.google.com/maps/api/staticmap' +
      '?center=' +
      latitude +
      ',' +
      longitude +
      '&size=640x640&sensor=true';
    // Configura o nível de zoom do mapa usando uma heurística aproximada
    var zoomlevel = 20;
    // Começa com zoom durante quase todo o tempo
    if (accuracy > 80)
      // Menos zoom para posições menos precisas
      zoomlevel -= Math.round(Math.log(accuracy / 50) / Math.LN2);
    url += '&zoom=' + zoomlevel;
    // Adiciona nível de zoom no URL

    // Agora exibe o mapa no objeto imagem. Obrigado, Google!
    image.src = url;
  }
}

// Uma demonstração de todos os recursos de geolocalização
// Determina minha localização de forma assíncrona e a exibe no elemento especificado.
function whereami(elt) {
  // Passa esse objeto como 3º argumento para getCurrentPosition()
  var options = {
    // Configura como true para obter uma leitura com precisão mais alta (de GPS, por
    // exemplo), se estiver disponível. Note, contudo, que isso pode afetar a vida
    // útil da bateria.
    enableHighAccuracy: false, // Pode aproximar: esse é o padrão
    // Configura essa propriedade se uma localização colocada na cache é suficiente.
    // O padrão é 0, que obriga a localização ser verificada outra vez.
    maximumAge: 300000,
    // Uma correção dos últimos 5 minutos está bem
    // Por quanto tempo você quer esperar para obter a localização?
    // O padrão é Infinity e getCurrentPosition() nunca atinge o tempo-limite
    timeout: 15000,
    // Não leva mais do que 15 segundos
  };
  if (navigator.geolocation)
    // Solicita a posição, se for suportado
    navigator.geolocation.getCurrentPosition(success, error, options);
  else elt.innerHTMl = 'Geolocation not supported in this browser';
  // Esta função será chamada se a geolocalização falhar
  function error(e) {
    // O objeto error tem um código numérico e uma mensagem de texto. Valores do
    // código:
    // 1: o usuário não deu permissão para compartilhar sua localização
    // 2: o navegador não conseguiu determinar a posição
    // 3: um tempo-limite foi atingido
    elt.innerHTML = 'Geolocation error ' + e.code + ': ' + e.message;
  }
  // Esta função será chamada se a geolocalização for bem-sucedida
  function success(pos) {
    // Esses são os campos que sempre obtemos. Note que timestamp
    // está no objeto externo e não no objeto coords interno.
    var msg =
      'At ' +
      new Date(pos.timestamp).toLocaleString() +
      ' you were within ' +
      pos.coords.accuracy +
      ' meters of latitude ' +
      pos.coords.latitude +
      ' longitude ' +
      pos.coords.longitude +
      '.';
    // Se nosso dispositivo retorna altitude, adiciona essa informação.
    if (pos.coords.altitude) {
      msg +=
        ' You are ' +
        pos.coords.altitude +
        ' + ' +
        pos.coords.altitudeAccuracy +
        'meters above sea level.';
    }
    // se nosso dispositivo retorna velocidade e direção, adiciona isso também.
    if (pos.coords.speed) {
      msg +=
        ' You are travelling at ' +
        pos.coords.speed +
        'm/s on heading ' +
        pos.coords.heading +
        '.';
    }
    elt.innerHTML = msg;
    // Exibe todas as informações de posição
  }
}
