# CAPÍTULO 07 - FUNÇÕES E EVENTOS

Avançando no processo de criação de funções em um programa e no uso de eventos. É possível criar funções com passagem de parâmetro, funções anônimas, fazer uma função devolver um determinado valor ou um conjunto de valores e, ainda, utilizar uma função como um módulo que contém um trecho de código que se repete e que pode ser acionado em vários pontos do programa, sem a necessidade de reescrever seus comandos.
Os eventos também podem ser mais bem explorados. Há vários outros: `change`, `blur`, `focus`, `keypress`... Podemos verificar como controlar melhor a execução de um programa ao adicionar ações associadas a esses eventos.
Os módulos servem para melhor organizar nosso código, permitir a reutilização de trechos de programa e facilitar a sua leitura e manutenção. O objetivo continua sendo resolver um problema a partir de um sistema computacional, porém com o foco em produzir códigos mais fáceis de manipular e passíveis de reaproveitamento. O acréscimo dos módulos em um programa não apresenta com uma utilidade tão clara como
no uso das `condições`, `repetições` e `vetores`. Contudo, o uso da modulação é igualmente essencial para a organização do programa.
As funções são também chamadas de métodos, procedures e módulo - com pequenas variações de definições dependendo da linguagem e do paradigma de programação utilizado.

---

## 7.1 FUNÇÕES COM PASSAGEM DE PAR METROS

Na função/método `alert()`, deve-se passar por parâmetro a mensagem a ser exibida. Ou seja, um parâmetro é uma informação enviada para uma função no momento em que realizamos a sua chamada.

```js
// chama o método alert() passando o texto "Muito Obrigado!"
alert('Muito Obrigado!');
```

O [Exemplo 7.1.a](/capitulo07/exemplos/ex7_1/ex7_1.a/) realiza uma tarefa bem simples, usando a passagem de parâmetro.Os termos parâmetros e argumentos são utilizados para denominar as variáveis passadas no momento da chamada da função. Há uma pequena diferença: Os nomes das variáveis são chamados de parâmetros, já os valores reais desses parâmetros são chamados de argumentos da função. É possível também obter o conteúdo das variáveis passadas como parâmetros, os argumentos da função utilizando a palavra reservada `arguments`. Ela funciona como um vetor que contém a lista dos valores passados na chamada da função. Dessa forma, pode-se omitir a declaração dos parâmetros no nome da função e recuperá-los utilizando `arguments`, o [Exemplo 7.1.b] mostra isso.

---

## 7.2 FUNÇÕES COM RETORNO DE VALOR

Nossas funções se tornam mais úteis se retornar um valor pois dessa forma o programa que chamou a função define o que deseja realizar com o conteúdo retornado. Para fazer uma função retornar um valor, utiliza-se o comando `return` seguido do conteúdo de retorno.

```js
function obterSituacao(nota, media) {
  var situacao = nota >= media ? 'Aprovado' : 'Reprovado';
  return situacao;
}
```

Também poderíamos utilizar o operador condicional na função. A função pode receber os parâmetros e com base neles definir o conteúdo da variável. Então, ocorre o retorno do conteúdo dessa variável. Agora é o programa principal que define o que fará com o resultado. Ele pode atribuir esse retorno a uma variável e, em seguida, exibi-la na página.

```js
var resposta = obterSituacao(prova1, 7);
outResposta.textContent = 'Situação: ' + resposta;
```

Ou, então, utilizar o próprio retorno da função como parte ou parâmetro de outro método.

```js
alert('Situação: ' + obterSituacao(prova1, 7));
```

O [Exemplo 7.2](/capitulo07/exemplos/ex7_2/) exemplifica o uso de funções com retorno de valor. Ele deve ler o modelo, ano de fabricação e preço do veículo. Em seguida, classificar o veículo como: Novo, Seminovo ou Usado. Também deve apresentar o preço de venda do veículo com um acréscimo de 8% no preço dos veículos novos ou de 10% no preço dos veículos classificados como seminovos ou usados.

![Exemplo 7.2](/.github/cap07/ex7_2.png)

Ao dividir tarefas de um programa em blocos menores, é possível obter como vantagens: facilidade de compreensão, manutenção e reutilização de código. Pensando na ideia de um sistema maior.

---

## 7.3 FUNÇÕES ANÔNIMAS

As funções anônimas permitem definir a programação de um evento sem atribuir um nome para a função. Apenas se utiliza a palavra reservada `function()` seguida do trecho de programa que queremos executar. No geral, são utilizadas para a inserção de pequenos trechos de código. Contudo, todos os recursos de programação podem ser normalmente inseridos em uma função anônima. O [Exemplo 7.3](/capitulo07/exemplos/ex7_3) é a demonstração da sintaxe de criação de uma função anônima. Ele deve ler o preço de um produto qualquer e exibir as formas de pagamento disponíveis na loja, que variam de 1x até 10x.

![Exemplo 7.3](/.github/cap07/ex7_3.png)

---

## 7.4 FUNÇÕES ATRIBUÍDAS PARA VARIÁVEIS

A linguagem JavaScript permite que uma função seja atribuída a uma variável. Esse formato é também conhecido como expressão de função. Para chamar a função, devemos informar o nome da variável e, como nos outros formatos, é possível declarar parâmetros a serem manipulados pela `function`.

```js
  var dobro = function(a){
      return a * 2
    }

    var num = Number(prompt('Numero: "));
    alert('O dobro é: ' + dobro(num))
```

---

## 7.5 EVENTOS JAVASCRIPT

Um evento é a ocorrência de uma ação, geralmente produzida por um usuário, em uma página. Adicionar programação nas páginas web associadas à ocorrência dos diversos eventos JavaScript permite criar maior interatividade com o usuário, dando maior dinamismo à página. A lista de eventos é grande. Eles podem estar relacionados com eventos de interface do usuário, eventos de mouse, eventos de teclado ou eventos de formulário. A sintaxe para definir um evento é semelhante à já utilizada nos capítulos anteriores. O [Exemplo 7.5](/capitulo07/exemplos/ex7_5) explora a programação de eventos visando dar maior interatividade a um sistema de controle de pedidos de uma pizzaria.

![Exemplo 7.3](/.github/cap07/ex7_5.a.png)
![Exemplo 7.3](/.github/cap07/ex7_5.b.png)

---

## 7.6 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [AQUI](/capitulo07/exemplos/ex7_6/)

Exercício 7.6.a
![exemplo 6.1.a](/.github/cap07/ex7_6.a.png)

Exercício 7.6.b
![exemplo 6.1.a](/.github/cap07/ex7_6.b.png)

Exercício 7.6.c
![exemplo 6.1.a](/.github/cap07/ex7_6.c.1.png)
![exemplo 6.1.a](/.github/cap07/ex7_6.c.2.png)

---

## 7.7 CONSIDERAÇÕES FINAIS DO CAPÍTULO

Dominar o processo de construção de funções com passagem de parâmetros e retorno de valor é importante para quem deseja tornar-se um profissional na área da programação de computadores. Desenvolver programas com uso de funções organiza melhor o código, facilita o entendimento e, consequentemente, a manutenção do programa, além de permitir a reutilização de módulos já desenvolvidos. Dessa forma, uma função criada e testada uma vez pode ser novamente utilizada em outra parte do programa.

Os parâmetros consistem em informações que devem ser fornecidas no momento em que realizamos a chamada da função. Utilizá-los, torna a função mais ampla.

Já os eventos, além de serem a forma usual de acionar uma função em JavaScript, constituem um recurso capaz de oportunizar diversas formas de interação com os usuários de uma página web. É possível acrescentar “ouvintes” para essas ações nos elementos da página e chamar funções no momento em que cada uma dessas ações ocorrer.
