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
