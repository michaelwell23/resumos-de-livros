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

## 10.9 - REQUIRE

SE a nova função construtora, usada pelo nosso módulo de carregamento, encapsula o código em uma função de qualquer forma, nós podemos omitir a função _namespace_ encapsuladora atual dos arquivos. Nós também vamos fazer _exports_ um argumento à função módulo, então o módulo não precisará declarar isso, pois isso remove um monte de barulho supérfluo do nosso módulo de exemplo:

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
exports.name = function (number) {
  return names[number];
};
exports.number = function (name) {
  return names.indexOf(name);
};
```

Essa é uma implementação mínima de require :

```js
function require(name) {
  var code = new Function('exports', readFile(name));
  var exports = {};
  code(exports);
  return exports;
}
console.log(require('weekDay').name(1));
// → Monday
```

Quando usando este sistema, um módulo tipicamente começa com pequena declaração de variáveis que carregam os módulos que ele precisa.

```js
var weekDay = require('weekDay');
var today = require('today');
console.log(weekDay.name(today.dayNumber()));
```

A implementação de require acima tem diversos problemas. Primeiro, ela vai carregar e rodar um módulo todas as vezes que este for "require-d" (requisitado), então se diversos módulos têm a mesma dependência, ou uma chamada require é colocada dentro de uma função que vai ser chamada múltiplas vezes, tempo e energia serão desperdiçados. Isso pode ser resolvido armazenando os módulos que já tenham sido carregados em um objeto, e simplesmente retornando o valor existente se eles forem carregados novamente. O segundo problema é que não é possível para um módulo expor diretamente um valor simples. A solução tradicional para isso é fornecer outra variável, module , que é um objeto que tem a propriedade exports Essa propriedade inicialmente aponta para o objeto vazio criado por require, mas pode ser sobrescrita com outro valor para exportar algo a mais.

```js
function require(name) {
  if (name in require.cache) return require.cache[name];
  var code = new Function('exports, module', readFile(name));
  var exports = {},
    mod = { exports: exports };
  code(exports, mod);
  require.cache[name] = module.exports;
  return module.exports;
}
require.cache = Object.create(null);
```

Agora temos um sistema de módulo que usa uma simples variável global ( require ) para permitir que módulos encontrem e usem um ao outro sem ter que ir para o escopo global. Este estilo de sistema de módulos é chamado "Módulos CommonJS", após o pseudo-padrão que o implementou pela primeira vez.
Mais importante, eles tem uma forma muito mais inteligente de ir de um nome de módulo para uma parte de código real, permitindo ambos caminhos relativos e nomes de módulos registrados "globalmente".

---

## 10.10 - CARREGANDO MÓDULOS LENTAMENTE

Ler um arquivo na web é muito mais lento que ler este mesmo arquivo do seu disco rígido. JavaScript no navegador é obrigado a se comportar de tal forma que, enquanto um script esteja rodando, nada mais pode acontecer no site que ele está rodando. Existe maneiras de se trabalhar isso, por exemplo rodando outro programa em seu programa antes, que irá concatenar todas as dependências olhando todas as chamadas _require_, e colocando-as em juntas em um grande arquivo. Outra solução é encapsular os módulos numa função, carregá-los em segundo plano e apenas rodar essas funções quando todas as suas dependências forem carregadas.

```js
define(['weekDay', 'today'], function (weekDay, today) {
  console.log(weekDay.name(today.dayNumber()));
});
```

A função define é o conceito central nessa abordagem. Ela primeiro recebe um array com nomes de módulos, e então uma função que recebe um argumento para cada dependência. Ela vai carregar as dependências em segundo plano, permitindo que a página continue a trabalhar em quanto está esperando. Uma vez que todas as dependências estejam carregadas, ela vai carregar a função que foi passada, com as interfaces das dependências como argumentos. Os módulos que são carregados dessa forma devem conter uma chamada a define . O valor usado para sua interface é qualquer valor retornado pela função que é o segundo argumento passado nessa chamada.

```js
define([], function () {
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
});
```

Para mostrar uma simples implementação de define , vamos supor que também temos uma função _backgroundReadFile_ , que pega o nome do arquivo e uma função, e vai chamar a função com o conteúdo do arquivo assim que este for carregado.

```js
function define(depNames, moduleFunction) {
  var deps = [],
    myMod = define.currentModule;
  depNames.forEach(function (name) {
    if (name in define.cache) {
      var depMod = define.cache[name];
    } else {
      var depMod = { exports: null, loaded: false, onLoad: [] };
      define.cache[name] = depMod;
      backgroundReadFile(name, function (code) {
        define.currentModule = depMod;
        new Function('', code)();
      });
    }
    deps.push(depMod);
    if (!depMod.loaded) depMod.onLoad.push(runIfDepsLoaded);
  });
  function runIfDepsLoaded() {
    if (
      !deps.every(function (m) {
        return m.loaded;
      })
    )
      return;
    var args = deps.map(function (m) {
      return m.exports;
    });
    var exports = moduleFunction.apply(null, args);
    if (myMod) {
      myMod.exports = exports;
      myMod.loaded = true;
      myMod.onLoad.every(function (f) {
        f();
      });
    }
  }
  runIfDepsLoaded();
}
define.cache = Object.create(null);
```

O maior problema que este código lida é coletar os valores das interfaces das dependências do módulo. Para rastrear os módulos, e seus estados, um objeto é criado para cada módulo que é carregado por define . Este objeto armazena o valor exportado pelo módulo, um booleano indicando se o módulo já foi completamente carregado e um array de funções para ser chamado quando o módulo tiver sido carregado. Uma implementação real do AMD é, novamente, bem mais inteligente em relação a resolução dos nomes e suas URLs, e genericamente mais robusta. O projeto [RequireJS](http://requirejs.org) fornece uma implementação popular deste estilo que carregamento de módulos.

---

## 10.11 - PROJETO DE INTERFACES

A melhor forma de aprender o valor de um bom projeto de interface é usar várias interfaces, algumas boas, algumas horríveis. Experiência vai ensinar a você o que funciona e o que não funciona. Nunca assuma que uma interface dolorosa de se usar é "da forma que ela deve ser". Conserte-a, ou encapsule-a em uma nova interface de forma que funcione melhor para você.

### PREVISIBILIDADE

Quando existe outro módulo ou parte do ambiente padrão JavaScript que faz algo similar ao que você está implementando, é uma boa ideia fazer sua interface se assemelhar a interface existente. Dessa forma, as pessoas que conhecem a interface existente vão se sentir em casa. Outra área que previsibilidade é importante é no comportamento do seu código. Pode ser tentador "empilhar inteligência" com a justificativa que isso torna a interface fácil de ser utilizada. Isso pode tornar o código construído em cima da sua interface um pouco menor, mas isso vai também tornar o código muito mais difícil para as pessoas manterem um modelo mental do comportamento do módulo em suas cabeças.

### "COMPONIBILIDADE"

Em suas interfaces, tente usar as estruturas de dados mais simples que funcionem e crie funções que façam algo simples e claro - sempre que possível, crie funções puras. Não é comum para módulos fornecerem suas prórpias coleções de objetos similares a arrays, com sua própria interface para contar e extrair elementos. Tais objetos não terão os métodos _map_ e _forEach_ , e qualquer função existente que espere um array real não será capaz de trabalhar com estas coleções. Este é um exemplo de componibilidade (composab ility) ruim - o módulo não pode ser facilmente composto com outro código.Outro exemplo seria um módulo verificação ortográfica de texto, que podemos necessitar se quisermos escrever um editor de texto. Se nós definirmos a interface do verificador ortográfico para que possamos passar simples strings e retornar a possível localização do erro, juntamente com um array de correções sugeridas, nós teremos uma interface que pode ser composta com outros sistemas, porque strings e arrays estarão sempre disponíveis.

### INTERFACES EM CAMADAS

Quando projetando uma interface para uma complexa parte de funcionalidade - digo, enviar email - você geralmente se depara com um dilema. Em uma mão, você não quer sobrecarregar o usuário da sua interface com detalhes. Na outra
mão, você não quer esconder todos os detalhes - quando pessoas precisam fazer coisas complicadas com seu módulo, eles também devem ser capazes. Normalmente a solução é oferecer duas interfaces: uma de "baixo nível" detalhada para situações complexas e uma de "alto nível" simples para uso rotineiro. A segunda pode ser construída de forma simples utilizando as ferramentas fornecidas pela primeira camada.

---

## RESUMO

Módulos fornecem estrutura para programas grandes, separando o código em diferentes arquivos e namespaces.
Dando a estes módulos interfaces bem definidas os tornam fáceis de se utilizar, reusando-os em contextos
diferentes, e continuando os usando mesmo quando evoluem.

Mesmo que a linguagem JavaScript não auxilie muito quando se trata de módulos, as flexíveis funções e objetos
que ela fornece fazem que seja possível definir úteis sistemas de módulo. Escopo de função pode ser utilizado
como namespace interno para o módulo, e objetos podem ser usados para armazenar blocos de valores
exportados.

Existem duas abordagens populares para tais módulos. Uma é chamada "Módulos CommonJS", e funciona em
torno da função require que busca um módulo pelo seu nome e retorna sua interface. A outra abordagem é
chamada "AMD", e usa a função assíncrona define que recebe um array de nome de módulos e uma função, e
depois de carregar os módulos, roda a função com suas interfaces e argumentos.
