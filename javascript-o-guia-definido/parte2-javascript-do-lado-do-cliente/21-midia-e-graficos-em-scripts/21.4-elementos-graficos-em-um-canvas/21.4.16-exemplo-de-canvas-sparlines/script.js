/*
 * Localiza todos os elementos da classe CSS "sparkline", analisa seu conteúdo como
 * uma série de números e substitui por uma representação gráfica.
 * Define sparklines com marcação como segue:
 * <span class="sparkline">3 5 7 6 6 9 11 15</span>
 *
 * Estiliza os sparklines com CSS, como segue:
 * .sparkline { background-color: #ddd; color: red; }
 *
 * – A cor do sparkline vem do estilo calculado a partir da propriedade CSS color.
 * – Os sparklines são transparentes, de modo que a cor de fundo normal aparece.
 * – A altura do sparkline vem do atributo data-height, se estiver definido; caso
 * contrário, do estilo calculado do atributo font-size.
 * – A largura do sparkline vem do atributo data-width, se estiver definido,
 * ou do número de pontos de dados vezes data-dx, se isso estiver definido, ou
 * do número de pontos de dados vezes a altura dividida por 6
 * – Os valores mínimo e máximo do eixo y são extraídos dos atributos data-ymin
 * e data-ymax, caso estejam definidos; caso contrário, vêm dos
 * valores mínimo e máximo dos dados.
 */

onLoad(function () {
  // Quando o documento é carregado pela primeira vez
  // Localiza todos os elementos de classe "sparkline"
  var elts = document.getElementsByClassName('sparkline');
  main: for (var e = 0; e < elts.length; e++) {
    // Para cada elemento
    var elt = elts[e];
    // Obtém o conteúdo do elemento e converte em um
    // Se a conversão falha, pula esse elemento.
    var content = elt.textContent || elt.innerText;
    var content = content.replace(/^\s+|\s+$/g, '');
    var text = content.replace(/#.*$/gm, '');
    text = text.replace(/[\n\r\t\v\f]/g, ' ');
    var data = text.split(/\s+|\s*,\s*/);
    for (var i = 0; i < data.length; i++) {
      data[i] = Number(data[i]);
      if (isNaN(data[i])) continue main;
    }
    // Agora calcula a cor, largura, altura e limites do eixo y do
    // sparkline a partir dos dados, dos atributos data- do elemento
    // e do estilo calculado do elemento.
    var style = getComputedStyle(elt, null);
    var color = style.color;
    var height =
      parseInt(elt.getAttribute('data-height')) ||
      parseInt(style.fontSize) ||
      20;
    var width =
      parseInt(elt.getAttribute('data-width')) ||
      data.length * (parseInt(elt.getAttribute('data-dx')) || height / 6);
    var ymin =
      parseInt(elt.getAttribute('data-ymin')) || Math.min.apply(Math, data);
    var ymax =
      parseInt(elt.getAttribute('data-ymax')) || Math.max.apply(Math, data);
    if (ymin >= ymax) ymax = ymin + 1;
    // Cria o elemento canvas.
    var canvas = document.createElement('canvas');
    canvas.width = width; // Configura as dimensões do canvas
    canvas.height = height;
    canvas.title = content; // Usa o conteúdo do elemento como dica de ferramenta
    elt.innerHTML = '';
    elt.appendChild(canvas);
    // Agora representa os pontos (i,data[i]) graficamente, transformando em
    // coordenadas do canvas.
    var context = canvas.getContext('2d');
    for (var i = 0; i < data.length; i++) {
      // Para cada ponto de dados
      var x = (width * i) / data.length;
      // Muda a escala de i
      var y = ((ymax - data[i]) * height) / (ymax - ymin);
      // Muda a escala de data[i]
      context.lineTo(x, y);
      // O primeiro lineTo() faz um moveTo() em seu lugar
    }
    context.strokeStyle = color;
    // Especifica a cor do sparkline
    context.stroke();
  }
});
