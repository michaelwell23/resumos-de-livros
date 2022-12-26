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
