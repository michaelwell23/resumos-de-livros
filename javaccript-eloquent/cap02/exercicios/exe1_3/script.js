/**
Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os
caracteres. A cada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um
tabuleiro de xadrez.

Passando esta string para o console.log deve mostrar algo como isto:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

Quando você tiver o programa que gere este padrão, defina a variável size = 8 e altere programa para que ele
funcione para qualquer size , a saída da grade de largura e altura.

Dica: A sequência pode ser construída iniciando vazia ("") e repetidamente adicionando caracateres. O caracter para uma nova linha é escrito assim \n .

Utilize console.log para visualizar a saída do seu programa.

Para trabalhar com duas dimensões, você irá precisar de um loop dentro de outro loop. Coloque entre chaves os
"corpos" dos loops para se tornar mais fácil de visualizar quando inicia e quando termina. Tente recuar
adequadamente esses "corpos". A ordem dos loops deve seguir a ordem que usamos para construir a string
(linha por linha, esquerda para direita, cima para baixo). Então o loop mais externo manipula as linhas e o loop
interno manipula os caracteres por linha.

*/

let size = 8;
let board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
