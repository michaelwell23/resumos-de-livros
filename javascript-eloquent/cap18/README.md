# FORMULÁRIOS E CAMPOS DE FORMULÁRIOS

Formulários foram projetados para uma web pré-JavaScript, atribuindo essa interação com o servidor sempre fazendo a navegação para uma nova página. Esses tornam possíveis para inspecionar e controlar os campos _inputs_ com programas JavaScript e fazem coisas como adicionar funcionalidades para um formulário tradicional ou usam formulários e campos como blocos de construção em aplicações JavaScript.

---

## 18.1 - CAMPOS

UM formulário web consiste em qualquer número de campos `inputs` agrupados em uma tag `<form>`. O HTML permite que um número de diferente estilos de campos, que vão desde simples on/off checkboxes para drop-down menus e campos de texto. Muitos tipos de campos usam a tag `input`. Essa tag é um tipo de atributo sadp para estilos do campo. Os tipos de `<input>` comumente usados são: `text`, `password`, `checkbox`, `radio` e `file`. Esses campos não podem ser apresentadaos, mas ao retornar para o input com JavaScript, muitas vezes não querem submeter canpos de qualquer maneira.

```html
<p><input type="text" value="abc" />(text)</p>
<p><input type="password" value="abc" />(password)</p>
<p><input type="checkbox" checked />(checkbox)</p>
<p>
  <input type="radio" value="A" name="choice" />
  <input type="radio" value="B" name="choice" checked />
  <input type="radio" value="C" name="choice" />(radio)
</p>
<p><input type="file" checked /> (file)</p>
```

A interface JavaScript de tais elemento se diferem com o tipo dos elementos. Campos de texto de várias linhas têm sua própria tag `<textarea>`. Essa tag requer um texto que é usado entre as duas tags `</textarea>`, ao invés de utiliar o texto no atributo value.a

```html
<textarea>
um
dois
três
</textarea>
```

Sempre que o valor de um campo de formulário é modificado, ele dispara um evento "change".

---

## 18.2 - FOCUS

Campos de formulários podem obter o foco do teclado. Quando clicado, ou ativado de alguma outra forma, eles se tornam o elemento ativo no momento, o principal destinatário de entrada do teclado. Podemos controlar focus do JavaScript com os métodos `focus` e `blur`. O primeiro modifica o foco do elemento que é chamado no DOM, e do segundo remove o focus. O valor no `document.activeElement` corresponde atualmente ao elemento focado.

```html
<input type="text" />

<script>
  document.querySelector('input').focus();
  console.log(document.activeElement.tagName);
  // → INPUT
  document.querySelector('input').blur();
  console.log(document.activeElement.tagName); // → BODY
</script>
```

JavaScript pode ser usado para ser dá um focus nesse campo quando o documento é carregado, mas o HTML também fornece o atributo `autofocus`, que faz o mesmo efeito, mas permite que o navegador saiba o que estamos tentando realizar. Isso faz com que seja possível o navegador desativar o comportamento quando não é o caso, por exemplo, quando o usuário tem focado em outra coisa.

```html
<input type="text" autofocus />
```

Navegadores tradicionais também permitem que o usuário mova o foco através do documento pressionando a tecla [Tab]. Nós podemos influenciar a ordem na qual os elementos recebem o focus com o atributo.

```html
<input type="text" tabindex="1" /> <a href=".">(help)</a>
<button onclick="console.log('ok')" tabindex="2">OK</button>
```

Por padrão, a maioria dos tipos de elementos HTML não podem ser focado. Mas você pode adicionar um atributo `tabindex` a qualquer elemento, o que tronará focalizável.

---

## 18.3 - CAMPOS DESATIVADOS

Todos os campos dos formulários podem ser desabilitados por meio do seu atributo `disable`, que também existe como uma propriedade no elemento do objeto DOM.

```html
<button>I'm all right</button> <button disabled>I'm out</button>
```

Campos desabilitados não podem ser focalizados ou alterados, e ao contrário de campos ativos, eles ficam cinza e desbotados.

---

## 18.4 - FORMULÁRIOS COM UM TODO

O elemento `<form>`, tem uma propriedade chamada _elements_ que contém uma coleção de array-like dos campos internos dentro dele. O atributo _name_ de um campo de formulário determina como seu valor será identificado quando o formulário é enviado. Além de que pode ser usado como um nome de propriedade quadno acessar _elements_ de propriedades do formulário que atua como um objeto array-like (acessível pelo número) e um map (acessível pelo nome).

```html
<form action="example/submit.html">
  Name: <input type="text" name="name" /><br />
  Password: <input type="password" name="password" /><br />
  <button type="submit">Log in</button>
</form>

<script>
  var form = document.querySelector('form');
  console.log(form.elements[1].type);
  // → password
  console.log(form.elements.password.type);
  // → password
  console.log(form.elements.name.form == form);
  // → true
</script>
```

UM botão com um atributo type do submit, quando pressionado, faz com que o formulário seja enviado. Pressionando Enter quando um campo de formulário é focado tem alguns efeitos. O envio deum formulário normalmente significa que o navegador navega para a página indicada pelo atributo `action`, utilizando uma requisição GET ou POST. Mas antes que isso aconteça, um evento "submit" é disparado. Esse evento pode ser manipulado pelo JavaScript, e o manipulador pode impedir o comportamento padrão chamado _preventDefault_ no objetio evento.

```html
<form action="example/submit.html">
  Value: <input type="text" name="value" />
  <button type="submit">Save</button>
</form>

<script>
  var form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    console.log('Saving value', form.elements.value.value);
    event.preventDefault();
  });
</script>
```

Inteceptar eventos _submit_ em JavaScript temvários usos.

---

## 18.5 - CAMPOS DE TEXTO

As selectionStart e selectionEnd de campos de texto nos dão informações sobre o curso e seleção do texto. Quando não temos nada selecionado, estas duas propriedades tem o mesmo númeor o que indica a posição do cursor. Quando uma parte do campo é selecionada as duas propriedades serão diferentes, nos dando o final e início do texto selecionado. Essas propriedades também pode ser gravadas como valores. Imagine que você precisa escrever um artigo sobre Khasekhemwy, mas tem alguns problemas para soletrar o seu nome. As seguintes linhas de código até a tag `<textarea>` com um manipulador de eventos que, quando você pressiona F12, a string "Khasekhemwy" é inserida para você.

```html
<textarea> </textarea>
```

```js
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function (event) {
  // The key code for F2 happens to be 113
  if (event.keyCode == 113) {
    replaceSelection(textarea, 'Khasekhemwy');
    event.preventDefault();
  }
});
function replaceSelection(field, word) {
  var from = field.selectionStart,
    to = field.selectionEnd;
  field.value = field.value.slice(0, from) + word + field.value.slice(to);
  // Put the cursor after the word
  field.selectionStart = field.selectionEnd = from + word.length;
}
```

A função `replaceSelection`substitui a parte selecionada de um campo de texto com a palavra dada e em seguida, move o cursor depois que a palavra de modo que o usuário pode continuar a escrever.

O exemplo a seguir mostra um campo de texto e um contador que mostra o comprimento atual do texto inserido:

```html
<input type="text" />length:<span id="length">0</span>

<script>
  var text = document.querySelector('input');
  var output = document.querySelector('#length');
  text.addEventListener('input', function () {
    output.textContent = text.value.length;
  });
</script>
```

## 18.6 - CHECKBOXES E RADIO BUTTONS

Um Checkbox é uma alternância binária simples. Seu valor pode ser extrído ou alterado por meio de sua propriedade checked, que tem um valor booleano.

```html
<input type="checkbox" id="purple" />
<label for="purple">Make this page purple</label>

<script>
  var checkbox = document.querySelector('#purple');
  checkbox.addEventListener('change', function () {
    document.body.style.background = checkbox.checked ? 'mediumpurple' : '';
  });
</script>
```

Um radio button é semelhante a um checkbox, mas está implicitamente ligado a outros radio buttons com o mesmo atributo de nome, de modo que apenas um deles pode estar ativo a qualquer momento.

```html
<input type="radio" name="color" value="mediumpurple" /> Purple
<input type="radio" name="color" value="lightgreen" /> Green
<input type="radio" name="color" value="lightblue" /> Blue

<script>
  var buttons = document.getElementsByName('color');
  function setColor(event) {
    document.body.style.background = event.target.value;
  }
  for (var i = 0; i < buttons.length; i++)
    buttons[i].addEventListener('change', setColor);
</script>
```

O médoto `document.getElementByName` nos dá todos os elementos com um determinado atributo name. O exemplo faz um loop sobre eles e resgitra um manipulador de eventos para cada elemento. Isso é muitas vezes útil para manipuladores de evento como este, que será chamado em diferentes elementos e precisa de alguma forma de acessar o target atual.

---

## 18.7 - CAMPOS SELECT

Os campos select são conceitualmente similares aos radio buttons, eles também permitem que o usuário escolha a partir de um conjunto de opções. Mas onde um botão de opção coloca a disposição das opções sob o nosso controle, a aparência de uma tag `<select>` é determinada pelo browser.
Campos select também têm uma variante que é mais parecido com uma lista de checkboxes, em vez de radio boxes.

```html
<select multiple>
  <option>Pancakes</option>
  <option>Pudding</option>
  <option>Ice cream</option>
</select>
```

O atributo size da tag `<select>` é usada para definir o número de opções que são visíveis ao mesmo tempo, o que lhe dá o controle sobre a aparência do _drop-down_.

Cada tag `<option>` tem um valor. Este valor pode ser definido com um atributo de value, mas quando isso não for dado, o texto dentro do _option_ irá contar como o valor do _option_. O valor da propriedade de um elemento `<select>` reflete a opção selecionada no momento. Para um campo _multiple_, porém, esta propriedade não significa muito, uma vez que vai possuir o valor apenas uma das opções escolhidas no momento. As tags `<option>` de um campo `<select>` pode ser acessada como um objeto de array-like através de opções propriedade do campo. Cada opção tem uma propriedade chamada selected, o que indica se essa opção for selecionada. A propriedade também pode ser escrita para marcar ou desmarcar uma opção.
O exemplo a seguir extrai os valores selecionados a partir de um campo de seleção múltiplo e as utiliza para compor um número binário de bits individuais.

```html
<select multiple>
  <option value="1">0001</option>
  <option value="2">0010</option>
  <option value="4">0100</option>
  <option value="8">1000</option>
</select>
= <span id="output">0</span>
```

```js
var select = document.querySelector('select');
var output = document.querySelector('#output');
select.addEventListener('change', function () {
  var number = 0;
  for (var i = 0; i < select.options.length; i++) {
    var option = select.options[i];
    if (option.selected) number += Number(option.value);
  }
  output.textContent = number;
});
```

---

## 18.8 - CAMPO ARQUIVO
