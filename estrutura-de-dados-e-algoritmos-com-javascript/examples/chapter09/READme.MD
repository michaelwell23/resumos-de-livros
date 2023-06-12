# CAPÍTULO 09 - RECURSÃO

Neste capítulo, abordaremos o seguinte:
• como entender a recursão;
• como calcular o fatorial de um número;
• a sequência de Fibonacci;
• a pilha de chamadas (call stack) de JavaScript;

---

## 9.1 - ENTENDENDO A RECURSÃO

- A recursão é um método para resolução de problemas que consiste em solucionar partes menores do mesmo problema até resolvermos o problema original, mais amplo. Em geral, ela envolve chamar a própria função;
- Um método ou função será recursivo se ele puder chamar a si mesmo diretamente;
- Uma função também é chamada de recursiva se puder chamar a si mesma indiretamente;
- Toda função recursiva deve ter um caso de base, que é uma condição para a qual nenhuma chamada recursiva será feita (um ponto de parada) a fim de evitar uma recursão infinita;

---

## 9.2 - CALCULANDO O FATORIAL DE UM NUMERO

- Em nosso primeiro exemplo de recursão, veremos como calcular o fatorial de um número;
- O fatorial de um número n é definido por n!, e é o resultado da multiplicação dos números de 1 a n;

---

## 9.3 - FATORIAL ITERATIVO

- É possível escrever uma função para calcular o fatorial de um númerousando um laço;
- Podemos iniciar o cálculo do fatorial começando com o dado number e decrementando n até que ele tenha um valor igual a 2, pois o fatorial de 1 é 1 e já estará incluso na variável total. O fatorial de zero também é 1. O fatorial de números negativos não será calculado;

---

## 9.4 - FATORIAL RECURSIVO

- Vamos agora tentar reescrever a função factorialIterative usando recursão. Antes, porém, vamos determinar todos os passos usando uma definição recursiva;

---

## 9.5 - PILHAS DE CHAMADAS

- Conhecemos a estrutura de dados de pilha no Capítulo 4, Pilhas. Vamos vê-la em ação em uma aplicação real usando recursão. Sempre que uma função é chamada por um algoritmo, ela vai para o topo da pilha de chamadas;
- Ao usar recursão, as chamadas de função serão empilhadas umas sobre as outras, por causa da possibilidade de uma chamada depender do resultado da própria chamada anterior;
- Se executarmos factorial(3), abrirmos as ferramentas do desenvolvedor no navegador, acessarmos Sources (Fontes) e adicionarmos um breakpoint
  no arquivo Factorial.js, quando n tiver um valor igual a 1, poderemos ver a Call Stack com três chamadas da função factorial. Se continuarmos a execução, veremos também que, como resultado de factorial(1) retornar, a Call Stack começará a remover as chamadas de factorial;

---

## 9.6 - LIMITAÇÃO DO TAMANHO DA PILHA DE CHAMADA EM JAVASCRIPT

- Se esquecermos de adicionar um caso de base para interromper as chamadas recursivas de uma função? Ela não será executada indefinidamente; o navegador lançará um erro, que é conhecido como erro de stack overflow (erro de transbordamento de pilha). Cada navegador tem as próprias limitações;
- Cada navegador tem as próprias limitações;
- A ECMAScript 2015 tem tail call optimization (otimização de chamadas finais ou otimização de chamadas de cauda). Se uma chamada de função
  for a última ação em uma função (em nosso exemplo, é a linha em destaque), ela será tratada com um “jump”, e não com uma “subroutine call” (chamada de sub-rotina);
- Isso significa que o nosso código pode ser executado indefinidamente na ECMAScript 2015. Por isso que é muito importante ter um caso de base para interromper a recursão;

---

## 9.7 - SEQUÊNCIA DE FIBONACCI

- A sequência de Fibonacci é outro problema que podemos resolver usando recursão;
- Essa sequência é composta de uma série de números: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 e assim por diante. O número 2 é encontrado por meio da
  soma 1 + 1. O número 3 é encontrado somando 1 + 2, 5 é encontrado somando 2 + 3, e assim sucessivamente;

---

## 9.8 - FIBONACCI ITERATIVO

- Nessa seção será implementado a função fibonacci de modo iterativo;

---

## 9.9 - FIBONACCI RECURSIVO

- No código, temos os casos de base e a lógica para calcular o Fibonacci para n > 2;
- Se tentarmos descobrir o `fibonacci(5)`, este será o resultado das chamadas efetuadas;

---

## 9.10 - FIBONACCI COM MEMOIZAÇÃO

- Há também uma terceira abordagem chamado `memoização` (memoization), que podemos usar para escrever a função fibonacci;
- A `memoização` é uma técnica de otimização em que armazenamos os valores de resultados anteriores, de modo semelhante a um cache;
- Se analisarmos as chamadas feitas para calcular `fibonacci(5)`, perceberemos que `fibonacci(3)` foi calculado duas vezes; portanto, podemos armazenar o seu resultado de modo que, quando a processarmos novamente, já teremos esse resultado;
- No código, declaramos um array memo que fará o cache de todos os resultados calculados. Se o resultado já tiver sido calculado, ele será devolvido; caso contrário, calcularemos o resultado e o adicionaremos ao cache;

---

## 9.11 - POR QUE USAR RECURSÃO? É MAIS RÁPIDO?

- Se fizermos uma comparação entre as três funções fibonacci distintas;
- A versão Iterativa é muito mais rápida que as versões Recursivas, portanto isso significa que a recursão é mais lenta;
- No entanto, observe novamente o código das três versões diferentes. A recursão é mais fácil de entender e, em geral, exige também menos código;
- Além do mais, em alguns algoritmos, a solução Iterativa pode não estar disponível, e, com a eliminação da chamada de cauda (tail call), a penalidade da recursão pode até desaparecer;
- Desse modo, em geral usamos a recursão porque é mais fácil resolver problemas com ela;

---

## RESUMO

Neste capítulo, aprendemos a escrever versões iterativas e recursivas de dois algoritmos famosos: o fatorial de um número e a sequência de
Fibonacci. Vimos que, caso um algoritmo recursivo precise calcular o mesmo resultado mais de uma vez, podemos usar uma técnica de otimização chamada memoização.

Também comparamos o desempenho das versões iterativa e recursiva do algoritmo de Fibonacci, e aprendemos que, apesar de a versão iterativa poder ser mais rápida, um algoritmo recursivo é mais legível, sendo mais fácil entender o que ele faz.

No próximo capítulo, conheceremos a estrutura de dados de árvore e criaremos a classe Tree, na qual a maioria dos métodos usa recursão.
