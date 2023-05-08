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
