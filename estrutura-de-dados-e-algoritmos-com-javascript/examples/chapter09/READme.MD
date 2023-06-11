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
