# CAPÍTULO 11 - SUBCONJUNTOS E EXTENSÕES DE JAVASCRIPT

Os subconjuntos foram definidos, de modo geral, por questões de segurança: um script escrito usando apenas um subconjunto seguro da linguagem pode ser executado com segurança, mesmo que seja proveniente de uma fonte não confiável, como um servidor de anúncios. Após uma seção preliminar sobre subconjuntos da linguagem, o restante deste capítulo descreve as extensões. Como não são padronizadas, elas estão documentadas como tutoriais, com menos rigor do que os recursos da linguagem descritos em outras partes do livro.

---

## 11.1 - SUBCONJUNTO DE JAVASCRIPT

A maioria dos subconjuntos da linguagem é definida para permitir a execução segura de código não confiável. Há um interessante subconjunto definido por diferentes motivos. Vamos abordar primeiramente esse e depois vamos ver os subconjuntos seguros da linguagem.

### 11.1.1 - The Good Parts

O livro JavaScript: The Good Parts (O’Reilly), de Douglas Crockford, descreve um subconjunto de JavaScript que consiste nas partes da linguagem que ele considera úteis. O objetivo desse subconjunto é simplificar a linguagem, ocultar peculiaridades e imperfeições e, basicamente, tornar a programação mais fácil e os programas melhores. O subconjunto de Crockford não inclui as instruções with e continue nem a função eval(). Ele define funções usando apenas expressões de definição de função e não inclui a instrução de definição de função. O subconjunto exige que os corpos dos laços e condicionais sejam colocados entre chaves – ele não permite que as chaves sejam omitidas se o corpo consistir em uma única instrução. Qualquer instrução que não termine com uma chave deve ser terminada com um ponto e vírgula. O subconjunto não inclui o operador vírgula, os operadores bit a bit nem os operadores ++ e --. Também não permite == e != por causa da conversão de tipo que fazem, exigindo, em vez disso, o uso de === e !==. Como JavaScript não tem escopo de bloco, o subconjunto de Crockford restringe a instrução var, exigindo que apareça somente no nível superior de um corpo de função e que os programadores declarem todas as variáveis de uma função usando apenas uma instrução var e como a primeira de um corpo de função.

### 11.1.2 - Subconjuntos de segurança

O subconjunto The Good Parts foi projetado por razões estéticas e visando a uma maior produtividade do programador. Os subconjuntos seguros funcionam proibindo todos os recursos e APIs da linguagem que possam permitir ao código escapar de sua caixa de areia e afetar o ambiente de execução global. Cada subconjunto é acoplado a um verificador estático que analisa o código para garantir que corresponda ao subconjunto. Como os subconjuntos da linguagem que podem ser verificados estaticamente tendem a ser muito restritivos, alguns sistemas de caixa de areia definem um subconjunto maior e menos restritivo, e adicionam uma etapa de transformação de código que verifica se o código se ajusta ao subconjunto maior, o transforma para usar um subconjunto menor da linguagem e acrescenta verificações em tempo de execução quando a análise estática do código não é suficiente para garantir a segurança.

---

## 11.2 - CONSTANTES E VARIÁVEIS COM ESCOPO

Em JavaScript 1.5 e posteriores, pode-se usar a palavra-chave const para definir constantes. As constantes são como as variáveis, exceto que as atribuições a elas são ignoradas (a tentativa de alterar uma constante não causa erro) e as tentativas de redeclará-las causam erros. A palavra-chave const se comporta de forma muito parecida com a palavra-chave var: não há escopo de bloco e as constantes são içadas para o início da definição de função circundante. A falta de escopo de bloco para variáveis em JavaScript há tempos é considerada uma deficiência da linguagem, sendo que JavaScript 1.7 trata disso adicionando a palavra-chave let na linguagem. A palavra-chave let pode ser usada de quatro maneiras:

- como uma declaração de variável, como var;
- em um laço for ou for/in , como substituta para var;
- como uma instrução de bloco, para definir novas variáveis e delimitar seu escopo explicitamente; e
- para definir variáveis cujo escopo é uma única expressão.

A forma mais simples de usar let é como uma substituta informal para var . As variáveis declaradas com var são definidas por toda a função circundante. As variáveis declaradas com let são definidas somente dentro do bloco circundante mais próximo. Há uma diferença interessante entre let usada como instrução de declaração e usada como inicializadora de laço. Usada como uma declaração, as expressões inicializadoras de variável são avaliadas no escopo da variável. Mas em um laço for , a expressão inicializadora é avaliada fora do escopo da nova variável. Isso só importa quando a nova variável estiver ocultando uma nova variável de mesmo nome.

---

## 11.3 - ATRIBUIÇÃO DE DESESTRUTURAÇÃO

Em uma atribuição de desestruturação, o valor do lado direito do sinal de igualdade é um array ou objeto (um valor “estruturado”) e o lado esquerdo especifica um ou mais nomes de variável usando uma sintaxe que imita a sintaxe de array e objeto literal. Quando uma atribuição de desestruturação ocorre, um ou mais valores são extraídos (“desestruturados”) do valor da direita e armazenados nas variáveis nomeadas da esquerda. Além de seu uso com o operador de atribuição normal, a atribuição de desestruturação também pode ser usada na inicialização de variáveis recentemente declaradas com var e let. A atribuição de desestruturação é simples e poderosa ao trabalhar com arrays e é especialmente útil com funções que retornam arrays de valores. Contudo, ela pode se tornar confusa e complexa quando usada com objetos e objetos aninhados.

---

## 11.4 - ITERAÇÃO

---
