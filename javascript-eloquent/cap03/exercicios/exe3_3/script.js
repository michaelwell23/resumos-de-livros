/**
  Você pode acessar o N-ésimo caractere, ou letra, de uma string escrevendo "string".charAt(N) , similar a como você acessa seu tamanho com "s".length . O valor retornado será uma string contendo somente um caractere (por exemplo, "b" ). O primeiro caractere está na posição zero, o que faz com que o último seja encontrado na posição string.length -1 . Em outras palavras, uma string com dois caracteres possui tamanho ( length ) dois, e suas respectivas posições são 0 e 1 .

  Escreva uma função countBs que receba uma string como único argumento e retorna o número que indica quantos caracteres "B", em maiúsculo, estão presentes na string .

  Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com countBs , exceto que ela recebe um segundo argumento que indica o caractere que será contado (ao invés de contar somente o caractere "B" em maiúsculo). Reescreva countBs para fazer essa nova funcionalidade.

  Dica: Um laço de repetição em sua função fará com que todos os caracteres na string sejam verificados se usarmos um índice de zero até uma unidade abaixo que seu tamanho ( < string.length ). Se o caractere na posição atual for o mesmo que a função está procurando, ele incrementará uma unidade na variável de contagem ( counter ). Quando o laço chegar ao seu fim, a variável counter deverá ser retornada. Certifique-se de usar e criar variáveis locais à função, utilizando a palavra-chave var .
*/

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
