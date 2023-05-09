# CAAPÍTULO 02: VISÃO GERAL SOBRE ECMASCRIPT E TYPESCRIPT

- A liguagem JavaScript evolui a cada ano;
- Desde 2015 ela lança uma nova versão a cada ano, chamada de `ECMAScript`;
- Um dos resursos que ajuda no desenvolvimento é o uso devariáveis tipadas graças ao `TypeScript` (Um superconjunto do JavaScript);
- Neste capítulo é abordado os seguintes assuntos:
  - introdução ao ECMAScript;
  - JavaScript no navegador VS no servidor;
  - introdução ao TypeScript;

---

## 2.1 = ECMAScript ou JavaScript?

- A ECMA é uma organização que padroniza informações;
- a JavaScript foi submetido à ECMA para ser padronizado;
- O resultado foi um novo padrão de linguagem que é conhecido como ECMAScript;
- O JavaScript é uma implementação dessa especificação, que é conhecida como `ActionScript`;

---

## 2.2 - ES6, ES2015, ES7, ES2016, ES8, ES2017 e ES.Next

- ECMAScript 5 se tornou um padrão em dezembro de 2009;
- A ECMAScript 2015 foi padronizada em 2015. O nome ES6 se tornou popular antes do lançamento;
- O comitê responsável pela redação das especificações tomou a decisão de adotar um modelo anual para definir novos padrões;
- A sexta edição foi renomeada para ECMAScript 2015;
- em 2016, a sétima versão foi padronizada, ela é conhecida como ECMAScript 2016;
- em 2017, a oitava versão foi padronizada, ela é conhecida como ECMAScript 2017;
- E também existe o ES.Next em alguns texto. Esse termo é uma referência à proxima versão do ECMAScript;

---

## 2.3 - TABELA DE COMPATIBILIDADE

- É importante saber que, apesar das versões ES2015 a ES2017 já terem sido lançadas, suas funcionalidade não seja aceitas por todos os navegadores;
- O recomendável é usar a versão mais recente disponível do seu navegador, para uma melhor experiência;
- Depois da ES5, a principal versão é o ES2015;
- De acordo com a tabela de compatibilidade, a maior parte dos navegadores já tem suporte aos recursos dessa da versão ES2016;
- Podemos começar a usar nova sintaxe e as novas funcionalidade;

---

## 2.4 - USANDO BABEL.JS

- O Babel é um transpilador JavaScript;
- Também é conhecido como compilado de fonte para fonte;
- Ele converte código JavaScript com recursos da linguagem ECMAScript em um código equivalente que usa recursos da linguagem da especificação ES5.
- O Babel pode ser instalado de acordo com as configurações ou pode ser usado diretamente no navegador utilizando a opção `Try it Out`

---

## 2.5 - FUNCIONALIDADE DAS VERSÕES ECMASCRIPT 2015+

- variáveis com let e const;
- templates literais;
- desestruturação (destructuring);
- operador de espalhamento (spread operator);
- funções de seta (arrow functions) usando =>;
- classes;
- módulos.

---

## 2.6 - LET E CONST NO LUGAR DE VAR

- Ter duas variáveis com o mesmo nome, pode ser perigoso e pode levar o código a gerar um resultado incorreto;
- Para resolver esse problema, no ES2015, uma nova palavra reservada chamada `let` foi introduzida;
- Agora podemos substituir a palavra `var` por `let`;
- A ES2015 também introduziu a palavra `const`, que tem o mesmo comportamento que a palavra `let`, a diferença é que constantes tem um valor somente para leitura;
- Ao trabalhar com objetos, uma constante (`const`), permite que as propriedades do objetos recebam novos valores, mas a refeência de memória da variável em si, não pode ser alterado,o que significa que ela não pode receber um novo valor;

---

## 2.7 - ESCOPO DE VARIÁVEIS COM LET E CONST

- Há dois tipos de escopo, `escopo global` e `escopo local`;
- `Escopo global` é toda variável que está sendo declarada fora de um bloco de código limitado por chaves (instruções if, funções e estrutura de repetições). Ela pode ser acessada em qualquer parte do código, inclusive dentro de um bloco de código.
- Escopo Local, são variáveis que foram declaradas dentro de um bloco de código limitado por chaves. A existencia dessa variável só existe dentro do bloco e ela não pode ser acessível fora do bloco;

---

## 2.8 - TEMPLATES LITERAIS

- Tamplates literais são um recurso que podemos criar strings sem a necessidade de concatenar os valores;
- Tamplates literais devem estar escritos com crases(`), envez de aspas simples ou duplas;
- Para interpolar um valor de variável, podemos definir um sinal de cifrão e chaves (`${}`);
- Os templates também podem ser usados para strings multilinhas, basta precionar `Enter` para gerar uma quebra de linha;

---

## 2.9 - FUNÇÕES DE SETA

- Funções de seta (arrow functions) são uma ótima maneira de simplificar a sintaxe das funções na ES2015;
- Podemos simplificar a sintaxe do código na qual podemos omitir a palavra reservada `function` usando `=>`;
- Se a função tiver uma única instrução,podemos usar uma versão mais simples, omitindo a palavra reservada `return` e as chaves;
- Se a função não recebe nenhum argumento, usamos parênteses vazios, comumente usados na ES5;

---

## 2.10 - VALORES DEFAULT PARA PARÂMETROS DE FUNÇÕES

- Com o ES2015 , podemos também definir valores default para os parãmetros das funções;
- As funções possui um objeto embutido chamado `arguments`. Esse objeto é um array dos argumentos usados quando a função é chamada.
  - Podemos acessar dinamicamente os argumento e usá-los, mesmo que saibamos o nome deles;
- Com a ES2015, podemos economizar algumas linhas de código usando a funcionalidade de valores default para parâmetros;

---

## 2.11 - DECLARANDO OS OPERADORES DE ESPALHAMENTO E REST

- O ES5 podemos transformar arrays em parâmetros usando a função `apply()`;
- No ES2015 existe um operador de espalhamento (spread operation) representado por `...`;
- O operador de espalhamento pode ser usado como um parâmetro rest em funções para substituir `arguments`;

---

## 2.12 - PROPRIEDADES MELHORADAS DE OBJETOS

- A ES6 introduiu um conceito chamado de `desestruturação de array`, é uma maneira de inicializar variáveis de uma só vez;
- A destruturação de array também pode ser usada para trocar valores de uma só vez, sem a necessidade de criar variáveis `temp`;
- Esse recurso pode ser muito utilizado em algoritmos de ordenação, pois essa troca de valores são muito comuns;
- Há também outra funcionalidade chamada de `abreviação de propriedades`, que é outra maneira de executar a desestruturação de objetos;
- Outra funcionalidade é a chamada `nomes de métodos abreviados`. Ela permite que osdesenvolvedores declarem funções dentro de objetos, como se elas fossem propriedades;

---

## 2.13 - PROGRAMAÇÃO ORIENTADA A OBJETOS COM CLASSES

- Com a ES2015, podemos simplificar a sintaxe de classes;
- podemos usar a palavra reservada `class` e declarar uma classe com uma função `constructor`;
- As classes da ES2015 são açucar sintático para a sintaxe baseada em protótipo;

---

## 2.14 - HERANÇA

- Na ES2015, há também uma sintaxe simplificada para usar herança entre classes;
- Podemos estender outra classe e herdar o seu comportamento usando a palavra reservada `extends`.
- No constructor, podemos usar a referencia `super`;
- Embora a sintaxe dessa nova forma de declarar classes seja muito parecida com outras linguagens, vale lembrar que a programação orientado a objetos em JavaScript é feita por meio de um protótipo;

---

## 2.15 - TRABALHANDO COM GETTER E SETTERS

- É possível criar fonções getters e setters para s atributos de classe com a ES2015;
- Para declarar uma função `get` e uma função `set`, basta usar a palavra get e set na frente do nome da função;
- Podemos declarar os atributos da classe com o mesmo nome, ou podemos usar um underscores na frente do atributo para transparecer que esse atributo é privado;
- Para usar as funções get e set, podemos simplismente referenciar seus nomes ocmo se fossem atributos simples;

---

## 2.16 - OPERADORES DE EXPONENCIAL

- O operador de exponecial pode ser conveniete quando trabalhamos com matemática;
- A função `Math.pow` pode ser usada para calcular a área de um círculo;
- A ES2016 introduziu o operador `**`, concebido para ser o novo operado de exponencial;
- As versões ES2015+ também tem outras funcionalidade:
  - interadores
  - arrays tipados
  - Set
  - Map
  - WeakSet
  - WeakMap
  - chamadas de cauda (tail calls)
  - for..of
  - Symbal
  - Array.prototype.includes
  - vírgulas no final
  - preenchimento de string
  - métodos estáticos de objetos

## 2.17 - MÓDULOS

- O AMD é um padrão JavaScript para módulos;
- O `RequireJS` é a implementação mais conhecida de AMD.
- Basicamente, os módulos são um código JavaScript declarado em arquivos separado;
- Podemos importar as funções, as variáveis e as classes de outros arquivos diretamente no código JavaScript;
- Os módulos nos permitem organizar melhor o código, quando trabalhados em um projeto grande ou criando bibliotecas;
- Há a opção de usar o membro exportado com um nome diferente;
- Ou podemos renomear as funções quando elas forem exportadas;
- Há algumas formas diferentes para importar as funções em um módulo distinto;
- Podemos importar o módulo todo como uma única variável e chamar os membros exportados como se fossem atributos ou métodos de uma classe;
- Também é possível adicionar a palavra reservada `export` na frente de cada função ou variável que queremos expor;

---

## 2.18 - EXECUTANDO MÓDULOS ES2015 NO NAVEGADOR E COM O NODE.JS

- Na execução do código podemos perceber que o Node.js não suporta a sintaxe `import`, por isso é necessário a utilização da palavra reservada `require`;

---

## 2.19 - USANDO IMPORTAÇÕES NATIVAS DO ES2015 NO NODE.JS

- A partir do Node 8.5 podemos usar importações da ES2015 no Node.js como uma funcionalidade experimental;
- Par isso podemos utilizar no nome da extensão `.mjs` em vez de usar `.js`;

---

## 2.20 - EXECUTANDO MÓDULOS ES2015 NO NAVEGADOR

- Há diferentes abordagens para executar um código com ES2015 no navegador;
  - A primeira é disponibilizar o bundle tradicional utilizando usando ferramentas populares, como `Browserify` e `Webpack`;
  - A segunda forma, é importar os módulos criados e adicionar `type="module"` dentro da tag `script;
  - Para manter a compatibilidade com versões anteriores de navegadores que não aceitam essa funcionalidade, podemos usar `nomodule`;

---

## 2.21 - COMPATIBILIDADE DE VERSÕES ANTERIORES A ES2015+

As versões ES2015+ são superconjuntos da linguagem JavaScript. Tudo que foi padronizado como ES5 continuará funcionando como hoje. No entanto, você pode começar a usar versões ES2015+ para tirar proveito da nova sintaxe e deixar o seu código mais simples e mais fácil de ler.

---

## 2.22 - INTRODUÇÃO AO TYPESCRIPT
