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

---

## 14.9 - EVENTOS DE ROLAGEM

Sempre que um elemento é rolado um evento de _scroll_ é disparado sobre ele. O exemplo a seguir desenha uma barra de progresso no canto superior direito do documento e atualiza enchendo quando é rolada para baixo:

```html
<style>
  .progress {
    border: 1px solid blue;
    width: 100px;
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .progress > div {
    height: 12px;
    background: blue;
    width: 0%;
  }
  body {
    height: 2000px;
  }
</style>
<div class="progress"><div></div></div>
<p>Scroll me...</p>
<script>
  var bar = document.querySelector('.progress div');
  addEventListener('scroll', function () {
    var max = document.body.scrollHeight - innerHeight;
    var percent = (pageYOffset / max) * 100;
    bar.style.width = percent + '%';
  });
</script>
```

A variável _innerHeigtht_ nos dá a altura de window, devemos subtrair o total de sua rolagem para não ter rolagem quando você chegar no final do documento. Ao dividir _pageYOffset_ a posição de rolagem atual menos posição de deslocamento máximo multiplicando por 100 obtemos o percentual da barra de progresso. Chando _preventDefault_ em um evento de rolagem não impede a rolagem de acontecer. Na verdade o manipulador de eventos é chamdo apenas após a rolagem ocorre.

---

## 14.10 - EVENTO DE FOCO

Quando um elemento entra em foco o navegador dispara um evento de _focus_ nele. Quando se perde o foco um eventos de _blur_ é disparado. Esses dois eventos não se propagam. Um manipulador em um elemento pai não é notificado quando um filho ganha ou perde o foco do elemento. O exemplo a seguir exibe um texto de ajuda para o campo de texto que possui o foco no momento:

```html
<p>Name: <input type="text" data-help="Your full name" /></p>
<p>Age: <input type="text" data-help="Age in years" /></p>
<p id="help"></p>

<script>
  var help = document.querySelector('#help');
  var fields = document.querySelectorAll('input');
  for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener('focus', function (event) {
      var text = event.target.getAttribute('data-help');
      help.textContent = text;
    });
    fields[i].addEventListener('blur', function (event) {
      help.textContent = '';
    });
  }
</script>
```

O objeto _window_ recebe os eventos de _focus_ e _blur_ quando o usuário move-se para outra aba ou janela de navegadores a qual o documento esta sendo mostrado.

---

## 14.11 - EVENTO DE LOAD

Quando uma página termina de carregar o evento _load_ é disparado no _window_ e no objeto body da pagina. Isso é muitas vees usado para propagar ações de inicialização que exige que todo o documento tenha sido construído. Elementos como imagens e tags carregam arquivos e tem um evento de _load_ para indicar que os arquivos que eles fezem referência foram carregados. Eles são como os eventos de _focus_ e não se propagam. Quando a página é fechada ou navegador é colocado em segundo plano um evento de _beforeunload_ é acionado. O uso principal deste evento é para evitar que o usuário perca o trabalho acidentalmente por fechar um documento. Previnir que a página seja fechada não é feito com o método _preventDEfault_. Ele é feito através do envio de uma string a partir do manipulador.

---

## 14.12 - CRONOGRAMA DO SCRIPT DE EXECUÇÃO

Há várias coisas que podem causar a inicialização da execução de um script. A leitura de uma tag script é um exemplo disto. Um disparo de eventos é outra. É importante entender que disparo de eventos podem ocorrr a qualquer momento, quando há dois scripts em um único documento eles nunca iram ocorrer no memsmo tempo. Se um script já está em execução os manipuladores de evento e o pedaço de cósigo programado em outras formas terão que esperar por sua vez. Alguns ambientes de programação permite que múltiplas _threads_ de execução se propaguem ao mesmo tempo. O fato de que os programas de JavaScript fazem apenas uma coisa de cada vez torna a nossa vida mais fácil. Para os casos em que você precisar realmente fazer várias coisas ao muito tempo sem o congelamento da página, os navegadores fornecem algo chamado de _web workers_. Um _web workers_ é um ambiente isolado do JavaScript que funciona ao lado do principal programa de um documento e pode ser comunicar com ele apenas por envio e recebimento de mensagens. Suponha que existao seguinte cósigo em um arquivo:

```js
addEventListener('message', function (event) {
  postMessage(event.data * event.data);
});
```

Imagine que esta multiplicação de números seja pesado e com uma computação de longa duração e queremos performance então colocamos em uma _thread_ em segundo plano. Este código gera um worker que envia algumas mensagens e produz respostas.

```js
var squareWorker = new Worker('code/squareworker.js');
squareWorker.addEventListener('message', function (event) {
  console.log('The worker responded:', event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24);
```

A função _postMessage_ envia uma mensagem o que causa um evento de "message" disparado ao receptor. O roteiro que criou o _worker_ enevia e recebe mensagens através do objeto _worker_, ao passo que as conversações de _worker_ para o script que o criou é envidado e ouvido diretamente sobre o seu âmbito global não compartilhada do mesmo roteiro original.

---

## 14.13 - DEFININDO TEMPORIZADORES

A função _requestAnimationFrame_ é similar à _setTimeout_. Ele agenda outra função a ser chamado mais tarde. Mas em vez de chamar a função na próxima redesenho ele espera por uma determinada quantidade de milissegundos.a

```html
<script>
  document.body.style.background = 'blue';
  setTimeout(function () {
    document.body.style.background = 'yellow';
  }, 2000);
</script>
```

Às vezes você precisa cancelar uma função que você programou. Isto é feito através do armazenamento do valor devolvido por stTimeout e logo em seguida chamando _clearTimout_.

```js
var bombTimer = setTimeout(function () {
  console.log('BOOM!');
}, 500);
if (Math.random() < 0.5) {
  // 50% chance
  console.log('Defused.');
  clearTimeout(bombTimer);
}
```

A função _cancelAnimationsFrame_ funciona da mesma forma que _clearTimeout_ chamando um valor retornado pelo _requestAnimationFrame_ que irá cancelar esse frame. Um conjunto de funções semelhante são _setInteval_ e _clearINterval_ são usados para definir timers que devem repetir a cada X milisegundos.

```js
var ticks = 0;
var clock = setInterval(function () {
  console.log('tick', ticks++);
  if (ticks == 10) {
    clearInterval(clock);
    console.log('stop.');
  }
}, 200);
```

---

## 14.14 - DEBOUNCING

Se você precisa fazer algo não trivial em tal manipulador você pode usar _setTimeout_ para se certificar de que você não esteja fazendo isso com muita freqüência. Isto é geralmente chamado de _debouncing_ de evento. No primeiro exemplo, queremos fazer algo quando o usuário digitar alguma coisa mas não quero imediatamente, para todos os eventos de tecla. Quando ele esta digitando rapidamente nós só queremos esperar até que uma pausa é feita. Em vez de realizar uma ação imediatamente no manipulador de eventos vamos definir um tempo limite em seu lugar.

```html
<textarea>Type something here...</textarea>
<script>
  var textarea = document.querySelector('textarea');
  var timeout;
  textarea.addEventListener('keydown', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      console.log('You stopped typing.');
    }, 500);
  });
</script>
```

Podemos usar um padrão ligeiramente diferente se quisermos de respostas no espaço de modo que eles fiquem separados por pelo menos um determinado período de tempo, mas quero remove-los durante uma série de eventos e não depois. Por exemplo, podemos querer responder a eventos de "mousemove", mostrando as coordenadas atuais do mouse, mas apenas a cada 250 milisegundos.

```html
<script>
  function displayCoords(event) {
    document.body.textContent = 'Mouse at ' + event.pageX + ', ' + event.pageY;
  }
  var scheduled = false,
    lastEvent;
  addEventListener('mousemove', function (event) {
    lastEvent = event;
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        displayCoords(lastEvent);
      }, 250);
    }
  });
</script>
```

---

## Sumário

Os manipuladores de eventos tornam possível detectar e reagir sobre eventos que não têm controle direto. O método `addEventListener` é usado para registrar esse manipulador.

Cada evento tem um tipo(`"keydown"`, `"focus"`, e assim por diante) que o identifica. A maioria dos eventos são chamados em um elementos DOM específicos e então propagam aos ancestrais desse elemento, permitindo que manipuladores associados a esses elementos possam lidar com eles.

Quando um manipulador de eventos é chamado, é passado um objeto de evento com informações adicionais sobre o mesmo. Este objeto também tem métodos que nos permitem parar a propagação(`stopPropagation`) ou evitar a manipulação padrão do navegador do evento(`preventDefault`).

Pressionando uma tecla, eventos de `"keydown"`, `"keypress"` e `"keyup"` são disparados. Pressionar um botão do mouse, eventos de `"mousedown"`, `"mouseup"` e `"click"` são disparados. Movendo o mouse, eventos de `"mousemove"`, `"mouseenter"` e `"mouseout"` são disparados.

A rolagem pode ser detectado com o evento de `"scroll"`, e quando a mudança de foco este eventos podem ser detectadas com o `"focus"` e `"blur"`. Quando o documento termina de carregar, um evento de `"load"` é disparado no `window`.

Apenas um pedaço de programa JavaScript pode ser executado por vez. Manipuladores de eventos e outros scripts programados tem que esperar até outros scripts terminarem antes de chegar a sua vez.
