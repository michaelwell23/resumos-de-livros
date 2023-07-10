// O código a seguir ilustra a sintaxe e o objetivo da instrução try/catch/finally :
try {
  // Normalmente, este código é executado do início ao fim do bloco
  // sem problemas. Mas às vezes pode disparar uma exceção
  // diretamente, com uma instrução throw, ou indiretamente, pela
  // chamada de um método que lança uma exceção.
} catch (e) {
  // As instruções deste bloco são executadas se, e somente se, o bloco
  // try dispara uma exceção. Essas instruções podem usar a variável local
  // e se referir ao objeto Error ou a outro valor que foi lançado.
  // Este bloco pode tratar da exceção de algum modo, pode ignorá-la
  // não fazendo nada ou pode lançar a exceção novamente com throw.
} finally {
  // Este bloco contém instruções que são sempre executadas, independente
  // do que aconteça no bloco try. Elas são executadas se o bloco
  // try terminar:
  // 1) normalmente, após chegar ao final do bloco
  // 2) por causa de uma instrução break, continue ou return
  // 3) com uma exceção que é tratada por uma cláusula catch anterior
  // 4) com uma exceção não capturada que ainda está se propagando
}

// Aqui está um exemplo realista da instrução try/catch . Ele usa o método factorial() definido na seção anterior e os métodos JavaScript do lado do cliente prompt() e alert() para entrada e saída
try {
  // Pede para o usuário inserir um número
  var n = Number(prompt('Please enter a positive integer', ''));
  // Calcula o fatorial do número, supondo que a entrada seja válida
  var f = factorial(n);
  // Mostra o resultado
  alert(n + '! = ' + f);
} catch (ex) {
  // Se a entrada do usuário não foi válida, terminamos aqui
  alert(ex);
  // Informa ao usuário qual é o erro
}

// Se adicionamos uma instrução try/finally , podemos escrever um loop while que funciona como um laço for e que trata instruções continue corretamente:
// Simula o corpo de for( inicialização ; teste ; incremento );
inicialização;
while (teste) {
  try {
    corpo;
  } finally {
    incremento;
  }
}
