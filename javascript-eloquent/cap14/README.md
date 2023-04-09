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
