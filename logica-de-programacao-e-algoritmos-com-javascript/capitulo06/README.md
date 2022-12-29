# CAPÍTULO 06 - STRINGS E DATAS

Para realizar operações sobre strings e datas, a linguagem dispõe de métodos próprios para esse fim. Para Strings, há métodos para obter cada uma das letras que compõem uma palavra, converter uma palavra para letras maiúsculas ou minúsculas ou, extrair partes de uma palavra. Para datas, há métodos para criar objetos do tipo Date e realizar cálculos sobre as datas, adicionando ou subtraindo dias, meses ou anos a uma data. Esse capítulo trata de apresentar alguns métodos e propriedades que podem ser utilizados para realizar algumas operações no desenvolvimento de programas JavaScript.

---

6.1 PERCORRER OS CARACTERES DE UMA STRING
Podemos utilizar o `charAt()`para a manipulação de cadeias de caracteres. Esse método retorna o caractere de uma posição das palavras. Assim como nos vetores, as strings também têm o seu índice começando do 0.
O `length` é outra propriedade que é utilizada para obter o tamanho de um vetor. Ele retorna o tamanho da string. Com esses dois métodos é possível percorrer todos os caracteres de uma string. O [Exemplo 6.1.a](/capitulo06/exemplos/ex6_1/ex6_1.a/) é um script que verifica quantas palavras contém o texto de um anúncio.

![exemplo 6.1.a](/.github/cap06/ex6_1.a.png)

Outro exemplo é o [Exemplo 6.1.b](/capitulo06/exemplos/ex6_1/ex6_1.b/), o programa ‘Qual é a Fruta’ lê uma palavra e exibe a letra inicial da fruta e as demais ocorrências dessa letra na palavra.

![exemplo 6.1.a](/.github/cap06/ex6_1.b.png)

---

6.2 CONVERTER PARA LETRAS MAIÚSCULAS OU MINÚSCULAS
Os métodos `toUpperCase()` e `toLowerCase()` são utilizados para converter uma palavra ou letra em maiúscula ou minúscula. O uso desses métodos é importante para auxiliar nas condições envolvendo palavras ou letras. Como a linguagem diferencia letras maiúsculas de minúsculas, utilizar esses métodos pode simplificar algumas condições criadas em um programa. O [Exemplo 6.2](/capitulo06/exemplos/ex6_1/ex6_2) lê uma palavra e exibe de forma invertida. Um detalhe a ser observado nesse exemplo, é qie na inversão, o primeiro caractere deve ficar em letra maiúscula e os demais, em minúsculas.

![exemplo 6.1.a](/.github/cap06/ex6_2.png)

---

6.3 CÓPIA DE CARACTERES DA STRING
O JavaScript dispõe de métodos para recuperar partes de uma string, esse método é o `substr()`, que contém dois parâmetros: posição inicial da string e número de caracteres a serem copiados. Caso apenas a posição inicial seja informada, todos os caracteres dessa posição até o final da string são copiados. 0 [Exemplo 6.3](/capitulo06/exemplos/ex6_3)
é um script que mostra a sua funcionalidade.

---

## 6.4 LOCALIZAR UM OU MAIS CARACTERES NA STRING

Os métodos `indexOf()` e `lastIndexOf()` também podem ser aplicados sobre uma string e possuem a mesma finalidade: localizar um caractere. `indexOf()` a pesquisa se dá a partir do início da string, enquanto, no `lastIndexOf()`m a pesquisa ocorre da direita para a esquerda. Caso o conteúdo não exista, o valor -1 é retornado.

```js
  var palavra = "saladas";
  var posicao1 = palavra.indeOf('a'); //retorn 1
  var posicao2 = palavra.lastIndeOf('a'); // retorna 5
  var posicao3 = palavra.indeOf('sal'); // retorna 0
  var posicao4 = palavra.indeOf('e'); // retorna -1

```

Assim como nos vetores, a pesquisa retorna a posição da primeira ocorrência do caractere pesquisado. O [Exemplo 6.4](/capitulo06/exemplos/ex6_4/) o programa “Nome no Crachá” é um bom exemplo na utilização desses métodos e também do método `substr(). A aplicação deve ler o nome completo de um participante em um evento e exibir apenas seu nome e sobrenome.

![Exemplo 6.4](/.github/cap06/ex6_4.png)

---


## 6.5 DIVIDIR A STRING EM ELEMENTOS DE VETOR

Um método a que recorremos com frequência quando se faz necessário trabalhar com string é o `split()`. Ele converte a string em elementos de vetor a cada ocorrência de um determinado caractere.

```js
var sabores = "calabresa, 4 queijos, atum, frango";
var partes = sabores.split(',')

// Retornos
partes[0] = "calabresa"
partes[1] = " 4 queijos"
partes[2] = " atum"
partes[3] = " frango"
```

Isso torna esse método útil e aplicável a uma série de operaçẽs que podem ser realizadas sobre uma cadeia de caracteres. O [Exemplo 6.5](/capitulo06/exemplos/ex6_5/) resolve o seguinte problema: Uma empresa necessita de um programa que gere um e-mail institucional para todos os seus funcionários. O email deve ser formado pelas letras iniciais do nome do funcionário e de seu sobrenome, seguindo pelo @empresa.com.br.

![Exemplo 6.4](/.github/cap06/ex6_5.png)

---

## 6.6 VALIDAR SENHAS COM MÉTODO MATCH()

O método `match()`é ótimo para implementar uma política de senhas em um sistema. Com ele é possível verificar a existência de letras maiúsculas, minúsculas,números e símbolos em uma string. Seu funcionamento utiliza o conceito de expressões regulares, que nada mais é que um conjunto de caracteres que indica um padrão a ser pesquisado. 
/[A-Z]/ é o padrão de expressão regular que se deseja encontrar na palavra. A opção g indica que a pesquisa deve retornar todas as ocorrências dos caracteres na string. O retorno é um vetor contendo os elementos encontrados ou null, caso o padrão não exista na string fornecida. 
O [Exemplo 6.6](/capitulo06/exemplos/ex6_6/) é um programa de validação de senha.Suponha que , para ser válida, uma senha deve possuir as seguintes regras de composição.

- possuir entre 8 e 15 caracteres;
- possuir, no mínimo 1 número;
- possuir, no mínimo, 1 letra minúsculas;
- possuir, no mínimo, 2 letras  maiúscula;
- possuir, no mínimo, 1 símbolo.

![Exemplo 6.4](/.github/cap06/ex6_6.a.png)

![Exemplo 6.4](/.github/cap06/ex6_6.b.png)

---

## 6.7 SUBSTITUIÇÃO DE CARACTERES

As expressões regulares também são utilizadas como parâmetro do método `replace()`, para substituir caracteres por outro em uma string. Por padrão, a substituição incide sobre a primeira ocorrência, utilizando a opção `g` das expressões regulares, a troca ocorre em toda a string.

```js
var senha = 'ABACAD'

var senha1 = senha.replace('A', 'X') // XBACAD
var senha1 = senha.replace('/A/g', 'X') // XBXCXD
```

Também podemos utilizar o método `replace()` para retirar um caractere de uma string.

```js
var app = "App Controle Financeiro";

var app2 = app.replace(" ", ""); // AppControle Financeiro
var app3 = app.replace(/ /g, ""); // AppControleFinanceiro
var app4 = app.replace(/ /g, "").toLowerCase(); //appcontrolefinanceiro
```

---

## 6.8 MANIPULAÇÃO DE DATAS

Para trabalhar com datas em JavaScript,podemos declarar um objeto que recebe uma instância do objeto Date. 

```js
var hoje = new Date(); 
```

Há diversos métodos para a manipulação de datas.Os métodos `getDate()`, 'getMonth()' e `getFullYear()` são utilizados para obter, respectivamente, o dia, o mês e o ano. Os métodos `setDate()`, `setMonth()` e `setFullYear()` permitem alterar o dia, o mês e o ano da data.  O programa  exibe a data atual e o dia seguinte a essa data:

```html
    <script>
      var hoje = new Date();
      var amanha = new Date();
      var dia = amanha.getDate();
      amanha.setDate(dia + 1);
      alert("Hoje: " + hoje + "\nAmanhã: " + amanha);
    </script>
```

![Exemplo 6.8.a](/.github/cap06/ex6_8.a.png)

Com os métodos `toDateString()` e `toTimeString()', podemos dividir a exibição completa da data em dados da data e da hora.

```html
<script>
  var hoje = new Date();
  alert("Dia: " + hoje.toDateString() + "\nHora: " +
  hoje.toTimeString());
</script>
```

![Exemplo 6.8.b](/.github/cap06/ex6_8.b.png)

Como o valor retornado pelos `getDate()`, `getMonth()` e `getFullYear()` é um número , podemos executar operações matemáticas sobre os dados extraídos de uma data.

```html
<script>
  var anoAtual = new Date().getFullYear();
  var idade = prompt("Quantos anos você comemora em " + anoAtual + "?");
  var anoNasc = anoAtual - idade;
  alert("Ah... Então você nasceu em " + anoNasc);
</script>
```

O [Exemplo 6.8.c](/capitulo06/exemplos/ex6_8/ex6_8.c/) deve ler a data de vencimento e o valor de uma conta. Caso a conta esteja em atraso,o programa deve calcular o valor da multa e dos juros a serem acrescentados ao valor total.

![Exemplo 6.8.c](/.github/cap06/ex6_8.c1.png)
![Exemplo 6.8.d](/.github/cap06/ex6_8.c2.png)

Por fim para destacar as vantagens de trabalhar com datas em JavaScript, o [Exemplo 6.8.d](/capitulo06/exemplos/ex6_8/ex6_8.d/) é um programa que solicita o número de parcelas que devem ser geradas e calcula a data de cada uma dessas parcelas, uma para cada mês. Com os métodos vistos nesta seção, é possível definir uma data, modificar partes dela e realizar operações.

![Exemplo 6.8.a](/.github/cap06/ex6_8.d.png)

---

## 6.9 EXERCÍCIOS

Os exercícios do capitulo estão no arquivo de exemplo, você pode ir até eles clicando [Aqui](/capitulo06/exemplos/ex6_9)

Exercício 6.9.a
![exemplo 6.1.a](/.github/cap06/ex6_9.a.png)
![exemplo 6.1.a2](/.github/cap06/ex6_9.a2.png)

Exercício 6.9.b
![exemplo 6.1.b](/.github/cap06/ex6_9.b.png)

Exercício 6.9.c
![exemplo 6.1.c](/.github/cap06/ex6_9.c.png)

Exercício 6.9.d
![exemplo 6.1.d](/.github/cap06/ex6_9.d.png)

---

## 6.10 CONSIDERAÇÕES FINAIS DO CAPÍTULO

A manipulação de strings e as operações envolvendo datas são tarefas importantes e frequentemente requeridas no desenvolvimento de sistemas. Neste capítulo, discutimos sobre os métodos que permite realizar operaçĩes sobre strings e datas. Para strings, as seguintes ações podem ser executadas:

- `Extrair cada um dos caracteres que compõem a string`;
- `Converter os caracteres de uma palavra para letras maiúsculas ou minúsculas`;
- `Copiar e localizar caracteres na string`;
- `Dividir a string em elementos de vetor a partir da ocorrência de um caractere`;
- `Pesquisar caracteres e substituir um ou mais caracteres na palavra`;

Já para datas existem outro conjunto particular de métodos que recuperam, respectivamente dia, mês e ano de um data, esse métodos são: `getDate()` , `getMonth()` e `getFullYear()`. Por sua vez, temos os que altera cada uma das partes que compõem uma data e permite realizar cálculos como somar ou subtrair dias, meses e anos na data, esses métodos são: `setDate()` , `setMonth()` e `setFullYear()`. E para criar um objeto do tipo Date, podemos utilizar o `new Date()`.
