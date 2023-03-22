# MÓDULOS

Módulos dividem programas em blocos de código, que por alguma critério pertecem a ama mesma unidade. Podemos explora alguns dos benefícios que estes agrupamentos forneceme mostrar algumas técnicas para construção de módulos em JavaScript.

---

## 10.1 - ORGANIZAÇÃO

O benefício de dividir um programa em vários arquivos ou módulos, ajudam as pessoas que não estão familarizadas com o código a achar o que elas buscam, e ajudam o programador a colocar coisas semelhantes juntas. Alguns progrmas são organizados seguindo o modelo de um texto tradicional, com uma ordem bem definida que encoraja o leitor a percorrer, e muito falatório fornecendo uma descrição coerente do código. Como regra geral, organização tem um custo, e é nos estágios iniciais do projeto, quando não sabemos com certeza aonde vamos e que tipo de módulos o programas precisará. Apenas coloque tudo em um simples arquivo até que o código esteja estabilizado. Dessa maneira, você não estará se sobrecarregando pensando em organização enquanto tem pouca informação, não perderá tempo fazendo e desfazendo coisas, e não irá acidentalmente travar-se em uma estrutura que não serve realmente para seu programa.

---

## 10.2 - NAMESPACES

Embora JavaScript não possua a criação de módulos nativamente, objetos podem ser usados para criar subnamespaces publicamente acessíveis, e funções podem ser usadas para criar um namespaces privado dentr de um módulo. Podemos ver tecnicas que permite construir módulos namespace isolados bem convinientes.

---

## 10.3 - REUSO

Uma vez que você tenha muitos pedaços de código compartilhadose duplicados. Você vai se encontrar perdendp uma grande quantidade de tempo e energia organizá-los e mantê-los atualizados. Quando partes de funcionálidade que são imdependentes são colocadas em arquivos e módulos separados, elas podem ser rastreadas mais facilmente, atualizadas quando uma nova versão for criada, ou até mesmo comparilhadas, tendo várias partes do código que desejam usá-las carregando o mesmo arquivo. Essa ideia fica ainda mais poderosa quando as relações entre os módulos são explicitamente especificados. Você pod então automatizar o processo de instalação e atualização de módulos externos. Imagine um serviçõ online que rastreia e distribui centenas de milhares de módulos, permitindo buscar pela funcionalidade desejada, permitindo a configuração em seu projeto para ser baixada automaticamente. Esse serviço existe, é chamado de `NPM`. Ele consiste em um banco de dados online de módulos, e uma ferramenta para download e atualização dos módulos que seu programa depende. Ele cresceu com o Node.js o ambiente _JavaScript browser-less_, mas também pode ser usado quando programando para o navegador.

---

## 10.4 - DESACOPLANDO

Outro importante papel dos módulos é os de isolar partes de código um do outro, da mesma forma que as interfaces dos objetos no capítulo 6 fazem. Um módulo bem desenvolvido fornece uma interface para uso de códigos externos, e mesmo que o módulo continue sendo trabalhado a interface existente permanece estável, assim outro módulos podem usar uma nova e melhorada versão sem qualquer alteração neles mesmos. Uma interface estável não significa que novos elementos não são adicionados. Isso apenas significa que elementos existentes não serão removidos ou seus significados não serão alterados. Construir a interface de um módulo que permite que este cresça sem quebras na antiga interface significa
encontrar um balanço entre expor a menor quantidade de conceitos internos ao mundo exterior quanto possível, e
ainda assim criar uma "linguagem" exposta pela interface que seja poderosa e flexível o suficiente para ser
aplicada em uma vasta variedade de situações.

--

## 10.5 - FUNÇÕES COMO NAMESPACES

Funções são p único construtor em JavaScript que criam um novo escopo. Então se nós desejamos que nossos módulos tenham um escopo próprio, teremos que colocá-los em funções de alguma forma. Considerando um módulo trivial que associa nomes com o número dos dias da semana retornado pelo metodo _getDay_ de um objeto date.

```js
var names = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
function dayName(number) {
  return names[number];
}
console.log(dayName(1));
// → Monday
```

A função _dayName_ é parte desta interface, mas a variável _names_ não. Nós preferimos não deixaá-la no escopo. grobal. Podemos fazer isso:

```js
var dayName = (function () {
  var names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return function (number) {
    return names[number];
  };
})();
console.log(dayName(3));
// → Wednesday
```

Agora names é uma variável local dentro de uma função (anônima). Esta função é criada e chamada imediatamente, e seu valor retornado (a função dayName ) é armazenada em uma variável. Elas são todas internas ao módulo, visivel ao próprio módulo, mas não visível a códigos externos. Um padrão similar é usado para isolar inteiramente código do mundo exterior. O módulo abaixo tem algum efeito mas não fornece qualquer valor para outros módulos usarem.

```js
(function () {
  function square(x) {
    return x * x;
  }
  var hundred = 100;
  console.log(square(hundred));
})();
// → 10000
```

Se uma expressão começa com a palavra-chave function , ela é uma expressão de função. Entretanto, se uma declaração inicia com esta palavra-chave, será uma declaração de função, que requer um nome e não pode ser chamada imediatamente. Mesmo que uma declaração comece com uma expressão, a
segunda regra tem precedência, e se os parênteses extras foram esquecidos no exemplo acima, isso irá produzir um erro de sintaxe.

---

## 10.6 - OBJETOS COMO NAMESPACES

Imagine que o módulo dia-da-semana precise fornecer não uma, mas duas funções. Nõs podemos, simplismente retornar a função, mas devemos encapsular as duas funções em um objeto.

```js
var weekDay = (function () {
  var names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return {
    name: function (number) {
      return names[number];
    },
    number: function (name) {
      return names.indexOf(name);
    },
  };
})();
console.log(weekDay.name(weekDay.number('Sunday')));
// → Sunday
```

Isso pode ser melhorado declarando um objeto, usualmente nomeado exports , e adicionando propriedades a este objeto sempre que nós definirmos algo que precise ser exportado. Este objeto pode então ser retornado, ou aceito como um parâmetro armazenado em algum lugar pelo código exterior ao módulo.

```js
(function (exports) {
  var names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  exports.name = function (number) {
    return names[number];
  };
  exports.number = function (name) {
    return names.indexOf(name);
  };
})((window.weekDay = {}));
console.log(weekDay.name(weekDay.number('Saturday')));
// → Saturday
```

---

## 10.7 - REMOVENDO DO ESCOPO GLOBAL

O padrão acima é usado normalmente em módulos JavaScript criados para o navegador. Eles requerem um simples e conhecido nome global, e encapsular seu código em uma função para ter seu namespace privado próprio.

Ainda existe um problema quando múltiplos módulos reivindicam o mesmo nome, ou quando você quer, por qualquer motivo, carregar duas versões do mesmo módulo de forma conjunta.

Com um pequeno encanamento, nós podemos criar um sistema que permite que aos módulos requererem diretamente por interfaces de objetos de outros módulos que eles precisem de acessar, sem precisarmos usar o escopo global. Isso resolve os problemas mencionados acima e tem um benefício adicional de ser explícito sobre suas dependências, tornando difícil usar acidentalmente algum módulo sem declarar que você precisa dele.

Nosso objetivo é uma função 'require' que, quando dado o nome de um módulo, vai carregar esse arquivo (do disco ou da web, dependendo da plataforma que estivermos rodando), e retornar o valor apropriado da interface.

Para isso nós precisamos de pelo menos duas coisas. Primeiramente, nós vamos imaginar que temos uma função readFile (que não está presente por padrão no JavaScript), que retorna o conteúdo do arquivo com um nome fornecido. Existem formas de acessar a web com JavaScript no navegador, e acessar o disco rígido com outras plataformas JavaScript, mas elas são mais envolvidas. Por agora, nós apenas pretendemos desta simples função.

Em segundo lugar, nós precisamos de ser capazes, quando tivermos uma string contendo o código (lida do arquivo), de realmente executar o código como um programa JavaScript.

---

## 10.8 - AVALIANDO DADOS COMO CÓDIGO

Existe várias formas de se pegar dados e rodá-los no contexto do programa atual. A mais obvia maneira é o operador padrão especial _eval_, que vai executar a string de código no escopo atual. Isso usualmente é uma ideia muito ruim, porque quebra algumas propriedades que escopos normamente tem.

```js
function evalAndReturnX(code) {
  eval(code);
  return x;
}
console.log(evalAndReturnX('var x = 2'));
// → 2
```

A melhor forma de converter dados dentro do programa é usar uma função construtora. Ela recebe como argumentos uma lista de nomes de argumentos separados por vírgula, e então uma string contendo o corpo da função.

```js
var plusOne = new Function('n', 'return n + 1;');
console.log(plusOne(4));
// → 5
```

Podemos encapsular o código para um módulo em uma função.

---

## 10.8 - REQUIRE
