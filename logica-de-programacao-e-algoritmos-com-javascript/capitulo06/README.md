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