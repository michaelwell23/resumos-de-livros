# MANIPULANDO EVENTOS

Alguns programas funcionam com entradas direta do usuário, tais como a interação de mouse e teclado. O tempo e a ordem de tal entrada não pode ser previsto com antecendência. Isso requer uma abordagem direferente para controlar o fluxo do que foi utilizado até agora.

---

## 14.1 - OS MANIPULADORES DE EVENTOS

O melhor mecanismo para o sistema subjacente é dar ao código a chance de reagir a eventos que ocorrerem. Os browsers podem fazer isso por que nos permite registrar funções como manipuladores para eventos específicos.

```html
<p>Click this document to activate the handler.</p>

<script>
  addEventListener('click', function () {
    console.log('You clicked!');
  });
</script>
```

A função _addEventListener_ registra seu segundo argumento sempre que o evento descrito por seu primeiro argumento é chamado.

---

## 14.2 - EVENTOS E NÓS DO DOM

Quando o _addEventListener_ é chamado um método método em todo o _window_ também é chamado no navegador onde o escopo global é quivalente ao objeto _window_. Cada elemento DOM tem seu próprio método _addEventListener_ que permite ouvir eventos especificamente para cada elemento.

```html
<button>Click me</button>
<p>No handler here.</p>

<script>
  var button = document.querySelector('button');
  button.addEventListener('click', function () {
    console.log('Button clicked');
  });
</script>
```

Um atributo _onclick_ tem efeitos similar. Mas um nó tem apenas um atributo _onclick_ para que possamos registrar apenas um manipulador por nó para que um manipulador já registrado, não seja substituido acidentamente. O método _addEventListener_ permite que seja adicionado vários manipuladores. O método _removeEventListener_ quando chamado com argumentos é semelhante ao _addEventListener_, mas ele remove o manipulador que foi registrado.

```html
<button>Act-once button</button>

<script>
  var button = document.querySelector('button');
  function once() {
    console.log('Done.');
    button.removeEventListener('click', once);
  }
  button.addEventListener('click', onde);
</script>
```

Ele é capaz de cancelar um registro de manipulador de uma função, precisamos dar-lhe um nome para que possamos utilizar tanto para _addEventListener_ quanto para _removeEventListener_.

---

## 14.3 - OS OBJETOS DE EVENTO

As funções manipuladoras de eventos são passados via argumento e chamamos de objeto de evento. Este objeto nos dá informações adicionais sobre o evento. Se queremos saber qual o botão do mouse que foi pressionado podemos observar as propriedades do objeto de evento.

```html
<button>Click me any way you want</button>

<script>
  var button = document.queryselector('button');
  button.addeventListener('mousedown', function (event) {
    if (event.which == 1) console.log('left button');
    else if (event.which == 2) console.log('Middle button');
    else if (event == 3) console.log('Right button');
  });
</script>
```

As informações armazenadas em um objeto de evento são diferene dependendo do tipo de evento. Propriedade de tipo do objeto sempre detém uma cadeia que identifica o evento.

---

## 14.4 - PROPAGAÇÃO

Os manipuladores de evento registrados em nós também receberão alguns eventos que ocorrem nos filhos. A qualquer momento um manipulador de eventos pode chamar o método _stopPropagation_ para evitar que os manipuladores mais acima possam receber o evento. Isso pode ser útil quando por exemplo, se você tem um botão dentro de outro elemento clicável e você não quer o clique no botão aconteça se houver algum comportamento de clique no elemento exterior. O exemplo a seguir registra manipuladores `"mousedown"` em ambos no botão e no paragráfo e me torno dele. Quando clicado com o botão direito do mouse o manipulador do botão chama _stopPropagation_, o que impedirá o manipulador no parágrafro de executar. Quando o botão é clicado com o outro botã do mouseo dois manipuladores são executados.

```html
<p>A paragraph with a <button>button</button>.</p>

<script>
  var para = document.querySelector('p');
  var button = document.querySelector('button');
  para.addEventListener('mousedown', function () {
    console.log('Handler for paragraph.');
  });
  button.addEventListener('mousedown', function (event) {
    console.log('Handler for button.');
    if (event.which == 3) event.stopPropagation();
  });
</script>
```

A maioria dos objetivos de evento tem uma propriedade de destino que se refere ao nó onde eles se originaram. Você usar essa propriedade para garantir que você não está lidando com algo que acidentalmente propagou a partir de um nó que você não queira lidar. Também é possível usar uma propriedade de destino para lançar uma ampla rede para um tipo específico de evento.

```html
<button>A</button>
<button>B</button>
<button>C</button>

<script>
  document.body.addEventListener('click', function (event) {
    if (event.target.nodeName == 'BUTTON')
      console.log('Clicked', event.target.textContent);
  });
</script>
```

---

## 14.5 - AÇÕES PADRÃO

Para a maioria dos tipos de eventos, os manipuladores de eventos de JavaScript são chamados antes do comportamento padrão. Se o condutor não quer que o comportamento normal aconteça pode simplismente chamar o método _preventDEfault_ no objeto de evento. Isso pode ser usado para implementar seus próprios atalhos de teclado ou menus. Eles também pode ser utilizados para interferir como um comportamento desagradavelmente que os utilizadores não esperam.

```html
<a href="https://developer.mozilla.org/">MDN</a>

<script>
  var link = document.querySelector('a');
  link.addEventListener('click', function (event) {
    console.log('Nope.');
    event.preventDefault();
  });
</script>
```

Tente não fazer tais coisas, a menos que você tem boa razão para isso. Para as pessoas que usam sua página isso pode ser desagradável quando o comportamento que eles esperam são quebrados. Dependendo do navegador alguns eventos não podem ser inteceptados.

---

## 14.6 - EVENTO DE TECLA

Quando uma teclado teclado é pressionado, o seu browser dispara um evento _"keydown"_ quando ele é liberado um evento de _"keyup"_ é emitido.

```html
<p>This page turns violet when you hold the V key.</p>

<script>
  addEventListener('keydown', function (event) {
    if (event.keyCode == 86) document.body.style.background = 'violet';
  });
  addEventListener('keyup', function (event) {
    if (event.keyCode == 86) document.body.style.background = '';
  });
</script>
```

O evento _"keydown"_ é acionado não só quando fisicamente é empurrada para baixo. Quando uma tecla é pressionada e mantida o evento é disparado novamente toda vez que se repete a tecla. O exemplo anterior nos atentou para a propriedade _keyCode_ do objeto de evento. Isto é como você pode identificar qual tecla está sendo pressionada ou solta. Infelizmente não é sempre óbvio traduzir o código numérico para uma tecla. O método _charCodeAt_ que pertecence a propriedade String nos dá uma maneira de encontrar este código.

```js
console.log('Violet'.charCodeAt(0)); // → 86
console.log('1'.charCodeAt(0)); // → 49
```

A melhor maneira de encontrar os códigos que precisa é gerelmente experimentar o registro de uma manipulação de eventos de tecla que resgistra os códigos de chave que ela recebe quando pressionando a tecla de interesse. Teclas modificadoras como Shift, Ctrl, Alt e Command(do Mac) geram eventos de teclas apenas como teclas normais. Mas quando se olha para as combinações de teclas, você também pode descobrir se essas teclas são pressionadas verificando as propriedades de eventos _shiftKey_, _ctrlKey_, _altKey_ e _metakey_ tanto para teclado quanto para mouse.

```html
<p>Press Ctrl-Space to continue.</p>

<script>
  addEventListener('keydown', function (event) {
    if (event.keyCode == 32 && event.ctrlKey) console.log('Continuing!');
  });
</script>
```

O evento de _keyDown_ e _keyUp_ dão informações sobre a tecla física que está sendo precionado. Para conseguir o texto a partir de códigos de tecla é estranho. Existe outro evento _keypress_ que é acionado logo após _keydown_ mas apenas para as teclas que produzem entradas de caracteres. A propriedade _charCode_ no objeto do evento contém um código que pode ser interpretado como um código de caracteres unicode. POdemos usar a função _String.fromCharCode_ para transformar esse código em uma verdadeira cadeia de caracteres simples.

```html
<p>Focus this page and type something.</p>

<script>
  addEventListener('keypress', function (event) {
    console.log(String.fromCharCode(event.charCode));
  });
</script>
```

O nó DOM onde um evento de tecla se origina dependen do elemento que tem o foco quando a tecla for precionada. Nós normais não podem ter foco, o foco ocorre normalmente para os nós links, botões e campos de formulário.a

---

## 14.7 - EVENTO DE MOUSE

Pressionar o botão do mouse também provoca uma série de eventos para ser emitido. O _mousedown_ e o _mouseup_ são acionados quando o botão é precionado e liberdado. Eles irão acontecer no DOM que estão abaixo do ponteiro do mouse quando o evento ocorrer. Após o evento de _mouseup_ um evento "click" é acionado no nó mais específico que continha tanto ao pressionar e liberar o botão. Se dois cliques acontece juntos um evento de _dbclick_ é emitido também após o segundo evento de clique. Para obter informações precisas sobre o local onde aconteceu um evento do mouse você pode olhar para as suas propriedades _pageX_ e pageY, que contêm as coordenadas do evento(em pixels) em relação ao canto superior esquerdo do documento. A seguir veja a implementação de um programa de desenho primitivo. Toda vez que o documento é clicado ele acrescenta um ponto sob o ponteiro do mouse.

```html
<style>
  body {
    height: 200px;
    background: beige;
  }
  .dot {
    height: 8px;
    width: 8px;
    border-radius: 4px; /* rounds corners */
    background: blue;
    position: absolute;
  }
</style>
<script>
  addEventListener('click', function (event) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = event.pageX - 4 + 'px';
    dot.style.top = event.pageY - 4 + 'px';
    document.body.appendChild(dot);
  });
</script>
```

As propriedades _clientX_ e _clienteY_ podem ser úteis quando se compara a coordenada do mouse com as coordenadas retornados por _getBoundingClientReact_ que também retorna coordenadas relativas da _viewport_.

---

## 14.8 - MOVIMENTO DO MOUSE

Toda vez que o ponteiro do mouse se move, um evento de \_mousemove é disparado. Este evento pode ser usado para controlar a posição do mouse. O exemplo a seguir exibe um programa com uma barra e configura os manipuladores de evento para que ao arrastar para a esquerda ou direita a barra se torna mais estreita ou mais ampla:

```html
<p>Drag the bar to change its width:</p>
<div style="background: orange; width: 60px; height: 20px"></div>

<script>
  var lastX; // Tracks the last observed mouse X position
  var rect = document.querySelector('div');
  rect.addEventListener('mousedown', function (event) {
    if (event.which == 1) {
      lastX = event.pageX;
      addEventListener('mousemove', moved);
      event.preventDefault(); // Prevent selection
    }
  });
  function moved(event) {
    if (event.which != 1) {
      removeEventListener('mousemove', moved);
    } else {
      var dist = event.pageX - lastX;
      var newWidth = Math.max(10, rect.offsetWidth + dist);
      rect.style.width = newWidth + 'px';
      lastX = event.pageX;
    }
  }
</script>
```

O controlador _mousemove_ é registrado no _window_. Mesmo que o mouse vai para fora da barra durante o redimesionamento ainda queremos atualizar o tamanho e parar de arrastar somente o mouse é seja liberado. Sempre que o ponteiro do mouse entra ou sai de um nó um evento _mouseover_ ou _mouseout_ é disparado. Esses dois eventos podem ser usados entre outras coisas, para criar efeitos de foco, mostrando um denominado algo quando o mouse está sobre um determinado elemento. A propriedade _relatedTarget_ dos objetos de eventos criados garante que o caso de _mouseover_ o elemento que o ponteiro do mouse passou antes e no caso do _mouseout_ o elemento que o ponteiro do mouse ira passar. Para mudar o evento _hover_ representa um cruzamento de fora para dentro do nó.

```html
<p>Hover over this <strong>paragraph</strong>.</p>

<script>
  var para = document.querySelector('p');
  function isInside(node, target) {
    for (; node != null; node = node.parentNode)
      if (node == target) return true;
  }
  para.addEventListener('mouseover', function (event) {
    if (!isInside(event.relatedTarget, para)) para.style.color = 'red';
  });
  para.addEventListener('mouseout', function (event) {
    if (!isInside(event.relatedTarget, para)) para.style.color = '';
  });
</script>
```

A função _isInside_ percorre os links pai do nó ate ele atingir o topo do documento ou enontrar o pai que está procurando.
Devo acrescentar que um efeito hover como isso pode ser muito mais facilmente alcançado utilizando o pseudo selector em CSS
_:hover_ como o exemplo a seguir mostra. Mas quando o seu efeito hover envolve fazer algo mais complexo do que apenas mudar um estilo no nó de destino, você deve usar o truque com os eventos de "mouseover" e "mouseout".

```html
<style>
  p:hover {
    color: red;
  }
</style>
<p>Hover over this <strong>paragraph</strong>.</p>
```
