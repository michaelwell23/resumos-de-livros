# DESENHANDO NO CANVAS

Os Browsers permitem de várias maneiras de mostrarem gráficos. A maneira mais simples é usar um estilos para posição e cor de elementos regulares do DOM. Algumas tarefas, tais como desenhar uma linha entre pontos arbitrário são extremamente díficeis de fazer com elemento regulares em HTML. Existe duas alternativas. A primeira é baseando em DOM mas utilizar S`calable Vector Graphics (SVG)` ao invé de elemento HTML. O SVG pode ser um dialeto para desrever documentos que se concentra em formas ao invés de texto. Ele pode ser embutido em um documento HTML ou pode ser incluido através da tag _img_. A segunda alternativa é chamando de `canvas`. A tela é um único elemento DOM que encapsula uma imagem. Ele fornece uma interface de programação para desenhar formas para o espaço ocupado pelo nó. A principal diferença entre um _canvas_ e uma imagem de _SVG_, é que em _svg_ a descrição original das formas é preservada de modo que eles podem ser movidos ou redimensinados em qualquer momento. O _canvas_ por outro lado, converte as formas para pixels, logo eles são desenhados e não guardam informações do que estes pixels representam. A única maneira de mover uma forma em _canvas_ é limpar a tela e redesenhar uma forma em uma nova posição.

---

## 16.1 - SVG

O código abaixo é um documento com uma imagem SVG simples:

```html
<p>Normal HTML here.</p>
<svg xmlns="http://www.w3.org/2000/svg">
  <circle r="50" cx="50" cy="50" fill="red" />
  <rect x="120" y="5" width="90" height="90" stroke="blue" fill="none" />
</svg>
```

O atributo _xmlns_ muda um elemento a um namespace diferente de XML. Este namespace é identificado por um URL, especificando o dialeto que estamos falando no momento. As tags _cicle_ e _rent_ que não existem em HTML não tên um significa em SVG para desenhar formas usando o estilo e posição especifíca para seus atributos. Essas tags criam elementos no DOM assim como as tags em HTML. Um exemplo seria mudar a cor do elemento _cicle_ para ciano.

```js
var cicle = document.querySelector('circle');
circle.setAttribute('fill', 'cyan');
```

---

## 16.2 - O ELEMENTO CANVAS

Gráfico em canvas pode ser desenhado com a tag _canvas_. Você pode dar um elemento a largula e altura em pixel para determinar o seu tamanho. A tag _canvas_ destina-se a a apoiar os diferente estilos de desenho. Para ter acesso a uma verdadeira interface de desenho primeiro é preciso criar um contexto que é um objeto, cujo métodos fornecem a interface de desenho. Atualmente existem dois estilos de desenho amplamente suportados: "2d" para gráficos bidimensionais e "WebGL" para gráficos tridimencionais através da interface OpenGL. Um contexto é criado atráves do método _getContext_ sobre o elemento _canvas_.

```html
<p>Before canvas.</p>
<canvas width="120" height="60"></canvas>
<p>After canvas.</p>
<script>
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  context.fillStyle = 'red';
  context.fillRect(10, 10, 100, 50);
</script>
```

O exemplo desenha u rêtangulo vermelho de 100 pixels de largura e 50 pixels de altura em relação ao seu canto superior esquerdo nas coordenadas (10,10);

---

## 16.3 - PREENCHIMENTO E TRAÇADO

Na interface uma forma pode ser cheia ou seja, sua área é dada uma determinada cor padrão, ou pode ser riscada o que significa que uma linha é desenhado ao longo de sua borda. O método _fillRect_ preenche um retângulo. É preciso ter coordenadas x e y do canto superior esquerdo do retângulo, em seguida a sua largura e a sua altura. Um método semelhante _strokeRect_ desenha o contorno de um retângulo. As definições de _fillStyle_ pode alterar o jeito que as formas são preenchidas. Ele pode ser definido como uma string espefica uma cor de qualquer modo que é compreendido por CSS. A propriedade _strokeStyle_ funciona de forma semelhante, mas dermina a cor usada para uma linha. A largura da linha é determinada pela propriedade _lineWidth_ que pode conter qualquer número positivo.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.strokeStyle = 'blue';
  cx.strokeRect(5, 5, 50, 50);
  cx.lineWidth = 5;
  cx.strokeRect(135, 5, 50, 50);
</script>
```

Quando nenhuma largura ou altura é especificado como atributo, como no exemplo anterior um elemento de tela adquire uma largura padrão de 300 pixels e altura de 150 pixels.

---

## 16.4 - PATHS

Um _path_ é uma sequência de linhas. Os _paths_ não constituem valores que podem ser armazenados ou repassados. Se você deseja fazer algo com um _path_, é preciso fazer uma sequência de chamadas de método para descrever sua forma.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.beginPath();
  for (var y = 10; y < 100; y += 10) {
    cx.moveTo(10, y);
    cx.lineTo(90, y);
  }
  cx.stroke();
</script>
```

A
O exemplo cria um _path_ com um número de segmento de linha horizontal e faz traços usando o método _stroke_. Ao preencher um _path_ cada forma é preenchido separadamnete. Um _path_ pode conter várias formas, cada movimento com _moveTo_ inicia um novo. Mas o _path_ tem de ser fechado antes de ser preenchido. Se o _path_ não estiver fechado a linha é adicionada a partir de sua extrimidade para o começo da forma delimitada pelo _path_ como completado e preenchido.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.beginPath();
  cx.moveTo(50, 10);
  cx.lineTo(10, 70);
  cx.lineTo(90, 70);
  cx.fill();
</script>
```

O exemplo acima estabelece um triângulo cheio. É possível notar que apenas dois dos lados do triângulo são explicitamente desenhados. Podemos usar o método _closePath_ para fechar explicitamente um _path_ através da adição de um segmento da linha atual de volta ao início do _path_. Este segmento é desenhado traçando o _path_.

---

## 16.5 - CURVAS

Um _path_ também pode conter linhas com curvas. Estes infelizmente é um pouco mais complexo do que desenhar linhas retas. O método _quadraticCurveTo_ desenha uma curva ate um ponto considerado. Para determinar a curvatura da linha é dado no método um ponto de controle e um ponto de destino. A linha não passa pelo ponto de controle. Ao contrário disso a direção da linha nos seus pontos de início e fim fica alinhado, com a linha puxando para o ponto de controle.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.beginPath();
  cx.moveTo(10, 90);
  // control=(60,10) goal=(90,90)
  cx.quadraticCurveTo(60, 10, 90, 90);
  cx.lineTo(60, 10);
  cx.closePath();
  cx.stroke();
</script>
```

Uma coisa quadrática foi desenhada a partir da esquerda para a direita com (60, 10) no ponto de controle e depois colocadas dois segnebtis da linha passando por esse ponto de controle de volta para o início da linha. O método _bezierCurve_ desenha um tipo semelhante de uma curva. Em vez de um único ponto de controle este tem dois, um para cada um dos pontos das extremidades da linha.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.beginPath();
  cx.moveTo(10, 90);
  // control1=(10,10) control2=(90,10) goal=(50,90)
  cx.bezierCurveTo(10, 10, 90, 10, 50, 90);
  cx.lineTo(90, 10);
  cx.lineTo(10, 10);
  cx.closePath();
  cx.stroke();
</script>
```

Os dois pontos de controle especificam a direção em ambas as extremidades da curva. Quanto mais eles estão longe de seu ponto correspondente, maior a curva que vai nesse sentido. Tais curvas pode ser difícil de trabalhar, nem sempre é evidente encontrar a forma dos pontos de controle que proporcionam a forma que você está procurando. Às vezes você pode calcular, e às vezes você apenas tem que encontrar um valor apropriado por tentativa e erro. Fragmentos _arcs_ de um círculo são mais fáceis de se trabalhar. O método _arcTo_ não leva menos de cinco argumentos. Os quatro primeiros argumentos agem um pouco como os argumentos para quadraticCurveTo. Oprimeiro par fornece uma espécie de ponto de controle e o segundo par da o destino a linha. O quinto argumento fornece o raio do arco. O método vai conceitualmente projetar um canto da linha que vai para o ponto de controle e em seguida volta ao ponto de destino para que ele faça parte de um círculo com o raio dado. O método _arcTo_ chega então a uma parte arredondada bem como uma linha a partir da posição de partida ate o início de uma parte arredondada.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.beginPath();
  cx.moveTo(10, 10);
  // control=(90,10) goal=(90,90) radius=20
  cx.arcTo(90, 10, 90, 90, 20);
  cx.moveTo(10, 10);
  // control=(90,10) goal=(90,90) radius=80
  cx.arcTo(90, 10, 90, 90, 80);
  cx.stroke();
</script>
```

O método _arcTo_ não vai desenhar a linha a partir da parte final do arredondamento para a posição do objetivo, Para desenhar um círculo você poderia usar quatro chamadas para _arcTo_. Mas o método _arTo_ fornece uma maneira mais simples. É preciso um par de coordenadas para o centro do arco, um raio e em seguida um ângulo de início e fim. Esses dois últimos parâmentros tornam possível desenhar apenas uma parte do círculo.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.beginPath();
  // center=(50,50) radius=40 angle=0 to 7
  cx.arc(50, 50, 40, 0, 7);
  // center=(150,50) radius=40 angle=0 to ½π
  cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
  cx.stroke();
</script>
```

A imagem resultante contém uma linha no círculo(primeira chamada de _arc )_ a esquerda do quarto do círculo(segunda chamada). Como outros métodos estão ligados ao desenho de um path, uma linha traçada é ligado ao segmento do arco anterior por padrão. Se você quiser evitar isso teria que chamar
_moveTo_ ou iniciar um novo _path_.

---

## 16.6 - DESENHO DE UM GRÁFICO DE PIZZA

Imagina ter que desenhar um gráfico de pizza dos resultados de uma pesquisa de satisfação de cliente. A variável results contém uma matriz de objetos que representam as respostas desta pesquisa.

```js
var results = [
  { name: 'Satisfied', count: 1043, color: 'lightblue' },
  { name: 'Neutral', count: 563, color: 'lightgreen' },
  { name: 'Unsatisfied', count: 510, color: 'pink' },
  { name: 'No comment', count: 175, color: 'silver' },
];
```

Para desenhar um gráfico de pizza, temos que traçar um número de fatias, onde cada uma é composta por um arco e um par de linhas para o centro desse arco. Então, podemos calcular o âgulo ocupado por cada arco dividindo um círculo completo pelo número total de respostas, em seguida multiplicamos esse númeor pelo número de pessoas que fizeram determinadas escolhas.

```html
<canvas width="200" height="200"></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  var total = results.reduce(function (sum, choice) {
    return sum + choice.count;
  }, 0);
  // Start at the top
  var currentAngle = -0.5 * Math.PI;
  results.forEach(function (result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    // center=100,100, radius=100
    // from current angle, clockwise by slice's angle
    cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(100, 100);
    cx.fillStyle = result.color;
    cx.fill();
  });
</script>
```

Mas um gráfico que não nos diz o que significa não é útil. Nós precisamos de uma maneira para desenhar o texto na tela.

---

## 16.7 - TEXTO

Um contexto de desenho em canvas 2D fornece os métodos _filtText_ e _strokeText_. Este último pode ser útil para delinear as letras mas geralmente _fillText_ é o que vai encher o texto com a cor atual de _fillColor_.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.font = '28px Georgia';
  cx.fillStyle = 'fuchsia';
  cx.fillText('I can draw text, too!', 10, 50);
</script>
```

Você pode espeificar o tamanho, estilo e tipo de letra do texto com a propriedade _font_. Os dois últimos argumentos para _fillText_ (e strokeText) fornecem a posição em que a fonte é desenhado. Por padrão a posição do início da linha indica a base alfabética do texto, que é a linha que as letras ficam não tendo partes perduradas; em letras como j ou p que pode mudar a posição horizontal definindo a propriedade _textAlign_ para _end_ ou _center_ou posicionamento vertical definindo \_textBaseline_ para _top_, _middle_ ou _bottom_.

---

## 16.8 - IMAGENS

O método _drawImag_ nos permite desenhar dados de pixel em canvas. Este dados de pixel pode ter origem a partir de uma tag _img_ ou _canvas_, e nem todos são visíveis no documento atual. O exemplo a seguir cria um elemento _img_ e carrega um arquivo de imagem nele. Mas não é iniciado imediatamente; a elaboração desta imagem ocorre porque o browser ainda não buscou por isso. Para lidar com tal situação registramos um manipulador de eventos("load") para fazer o desenho depois que a imagem for carregada.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  var img = document.createElement('img');
  img.src = 'img/hat.png';
  img.addEventListener('load', function () {
    for (var x = 10; x < 200; x += 30) cx.drawImage(img, x, 10);
  });
</script>
```

Por padrão, _drawImage_ pode receber dois argumento adicionais para ditar largura e altura diferentes. Ele também recebe nove argumentos, que pode ser utilizado para desenhar apenas um fragmento de uma imagem. Do segundo ao quinto argumento indicam o retângulo na imagem de origem que deve ser copiado, do sexto ao nono argumentos indica o retângulo em que deve ser copiado. Isso pode ser usado para embalar várias sprites emum único arquivo de imagem, em seguida desenhar apenas a parte que é necessária. Ao alterar a pose que traçamos, podemos mostrar uma animação que simula o movimento de andar de um personagem. Para animar a imagem em uma tela o método _clearRect_ é util. Assemelha-se a _filterRect_ mas ao invés de colorir o retângulo, torna-se tranparente removendo os pixels previamente desenhados. O código a seguir carrega as imagens, e em seguida define um intervalo para desenhar os quardros seguintes:

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  var img = document.createElement('img');
  img.src = 'img/player.png';
  var spriteW = 24,
    spriteH = 30;
  img.addEventListener('load', function () {
    var cycle = 0;
    setInterval(function () {
      cx.clearRect(0, 0, spriteW, spriteH);
      cx.drawImage(
        img,
        // source rectangle
        cycle * spriteW,
        0,
        spriteW,
        spriteH,
        // destination rectangle
        0,
        0,
        spriteW,
        spriteH
      );
      cycle = (cycle + 1) % 8;
    }, 120);
  });
</script>
```

A variável _cycle_ mapeia nossa posição na animação. A cada quadro ele é incrementado e em seguida cortado de volta para o intervalo de 0 a 7 usando o operador restante. Esta variável é usada para calcular a coordenada x que o sprite tem para a pose atual da imagem.

---

## 16.9 - TRANFORMAÇÕES

Se queremos que um personagem ande para a esquerda, podemos instruir a tela para desenhar a imagem de outra maneira. O método _scale_ fará com que qualquer coisa desenhada depois possa ser escalado. Este método tem dois parâmetros, um para definir uma escala horizontal e um para definir uma escala vertical.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  cx.scale(3, 0.5);
  cx.beginPath();
  cx.arc(50, 50, 40, 0, 7);
  cx.lineWidth = 3;
  cx.stroke();
</script>
```

Para transformar uma imagem em torno não podemos simplesmente adicionar cx.scale(-1,1) antes da chamada _drawImage_ pois irá mover a imagem fora da tela onde não será possível vê-la. As coordenadas dadas a _drawImagem_ podem ser ajustadas para compensar o desenho. Outra solução é ajustar o eixo em torno do qual a escala acontece. Há vários outros métodos além de _scale_ que influencia no sistema de coordenadas para o _canvas_. Para inverter uma imagem em torno da linha vertical em uma determinada posição x podemos fazer o seguinte:

```js
function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}
```

Isto mostra o sistemas de coordenadas antes e após o espelhamento do outro lado da linha central. Agora podemos desenhar um personagem espelhado na posição (100,0) rodando o mundo em torno do centro vertical do personagem.

```html
<canvas></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  var img = document.createElement('img');
  img.src = 'img/player.png';
  var spriteW = 24,
    spriteH = 30;
  img.addEventListener('load', function () {
    flipHorizontally(cx, 100 + spriteW / 2);
    cx.drawImage(img, 0, 0, spriteW, spriteH, 100, 0, spriteW, spriteH);
  });
</script>
```

---

## 16.10 - ARMAZENAR E LIMPANDO TRANFORMAÇÕES

É possível salvar a transformação atual, fazer algum desenho e transformar e em seguida restaurar a velho transformação. Isso geralmente é a coisa certa a fazer para uma função que necessita se transformar temporariamente o sistema de coordenadas. Os salvar e o restaurar nos métodos em contexto canvas 2D realizam um tipo de gerenciamento na transformação. Eles conceitualmente mantém uma pilha de estados de transformação. Quando você chama o salvar o estado atual é colocado na pilha, e quando você chama o restaurar, o estado no topo da pilha é retirado e utilizado a transformação atual do contexto. A função de ramificação no exemplo a seguir ilustra o que você pode fazer com uma função que altera a transformação e em seguida chama outra função que continua a desenhar com a transformação dada no desenho anterior. Esta função desenha uma forma que lembra um desenho de uma árvore com linhas; movendo o sistema de coordenadas do centro para o fim da linha, e chamando ele novamente.

```html
<canvas width="600" height="300"></canvas>
<script>
  var cx = document.querySelector('canvas').getContext('2d');
  function branch(length, angle, scale) {
    cx.fillRect(0, 0, 1, length);
    if (length < 8) return;
    cx.save();
    cx.translate(0, length);
    cx.rotate(-angle);
    branch(length * scale, angle, scale);
    cx.rotate(2 * angle);
    branch(length * scale, angle, scale);
    cx.restore();
  }
  cx.translate(300, 0);
  branch(60, 0.5, 0.8);
</script>
```

Se as chamadas para salvar e restaurar não estivessem lá, a segunda chamada recursiva dos galho acabariam com a mesma posição de rotação criado pela primeira chamada. Não estariam ligados ao ramo atual, mas estaria a direita do ramo desenhado pela primeira chamada. A forma resultante também poderia ser interessante mas não é definitivamente uma árvore.

---

## 16.11 - DEVOLTA PARA O JOGO
