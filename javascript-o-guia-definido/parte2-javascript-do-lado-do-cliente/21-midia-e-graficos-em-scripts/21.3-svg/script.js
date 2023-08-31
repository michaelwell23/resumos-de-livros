/**
 * Cria um elemento <svg> e desenha um gráfico de pizza nele.
 * Argumentos:
 * data: um array de números para representar no gráfico, um para cada fatia da pizza.
 * width,height: o tamanho do elemento gráfico SVG, em pixels
 * cx, cy, r: o centro e o raio da pizza
 * colors: um array de strings de cor HTML, uma para cada fatia
 * labels: um array de rótulos para aparecer na legenda, um para cada fatia
 * lx, ly: o canto superior esquerdo da legenda do gráfico
 * Retorna:
 * Um elemento <svg> contendo o gráfico de pizza.
 * O chamador deve inserir o elemento retornado no documento.
 */
function pieChart(data, width, height, cx, cy, r, colors, labels, lx, ly) {
  // Este é o espaço de nomes XML para elementos svg
  var svgns = 'http://www.w3.org/2000/svg';
  // Cria o elemento <svg> e especifica tamanho em pixels e coordenadas do usuário
  var chart = document.createElementNS(svgns, 'svg:svg');
  chart.setAttribute('width', width);
  chart.setAttribute('height', height);
  chart.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
  // Soma os valores de dados para sabermos qual é o tamanho da pizza
  var total = 0;
  for (var i = 0; i < data.length; i++) total += data[i];
  // Agora descobre qual é o tamanho de cada fatia da pizza. Ângulos em radianos.
  var angles = [];
  for (var i = 0; i < data.length; i++)
    angles[i] = (data[i] / total) * Math.PI * 2;
  // Itera por cada fatia da pizza.
  startangle = 0;
  for (var i = 0; i < data.length; i++) {
    // É aqui que a fatia termina
    var endangle = startangle + angles[i];
    // Calcula os dois pontos onde nossa fatia intercepta o círculo
    // Essas fórmulas são escolhidas de modo que um ângulo 0 seja meio-dia
    // e os ângulos positivos aumentem no sentido horário.
    var x1 = cx + r * Math.sin(startangle);
    var y1 = cy - r * Math.cos(startangle);
    var x2 = cx + r * Math.sin(endangle);
    var y2 = cy - r * Math.cos(endangle);
    // Este é um flag para ângulos maiores do que meio círculo
    // Isso é exigido pelo componente de desenho de arco da SVG
    var big = 0;
    if (endangle - startangle > Math.PI) big = 1;
    // Descrevemos uma fatia com um elemento <svg:path>
    // Observe que criamos isso com createElementNS()
    var path = document.createElementNS(svgns, 'path');
    // Esta string contém os detalhes do caminho
    var d =
      'M ' +
      cx +
      ',' +
      cy + // Começa no centro do círculo
      ' L ' +
      x1 +
      ',' +
      y1 +
      // Desenha linha até (x1,y1)
      ' A ' +
      r +
      ',' +
      r +
      // Desenha um arco de raio r
      ' 0 ' +
      big +
      ' 1 ' +
      // Detalhes do arco...
      x2 +
      ',' +
      y2 +
      // O arco vai até (x2,y2)
      ' Z';
    // Fecha o caminho voltando para (cx,cy)
    // Agora configura atributos no elemento <svg:path>
    path.setAttribute('d', d);
    // Configura esse caminho
    path.setAttribute('fill', colors[i]);
    // Configura a cor da fatia
    path.setAttribute('stroke', 'black');
    // Contorna a fatia com preto
    path.setAttribute('stroke-width', '2');
    // Espessura de 2 unidades
    chart.appendChild(path);
    // Adiciona fatia no gráfico
    // A próxima fatia começa onde esta termina
    startangle = endangle;

    // Agora desenha um pequeno quadrado correspondente para a chave
    var icon = document.createElementNS(svgns, 'rect');
    icon.setAttribute('x', lx);
    // Posiciona o quadrado
    icon.setAttribute('y', ly + 30 * i);
    icon.setAttribute('width', 20);
    // Dimensiona o quadrado
    icon.setAttribute('height', 20);
    icon.setAttribute('fill', colors[i]);
    // Mesma cor de preenchimento da fatia
    icon.setAttribute('stroke', 'black');
    // Mesmo contorno também.
    icon.setAttribute('stroke-width', '2');
    chart.appendChild(icon);
    // Adiciona no gráfico

    // E adiciona um rótulo à direita do retângulo
    var label = document.createElementNS(svgns, 'text');
    label.setAttribute('x', lx + 30);
    // Posiciona o texto
    label.setAttribute('y', ly + 30 * i + 18);
    // Os atributos de estilo de texto também poderiam ser configurados via CSS
    label.setAttribute('font-family', 'sans-serif');
    label.setAttribute('font-size', '16');
    // Adiciona um nó de texto DOM no elemento <svg:text>
    label.appendChild(document.createTextNode(labels[i]));
    chart.appendChild(label);
    // Adiciona texto no gráfico
  }
  return chart;
}
