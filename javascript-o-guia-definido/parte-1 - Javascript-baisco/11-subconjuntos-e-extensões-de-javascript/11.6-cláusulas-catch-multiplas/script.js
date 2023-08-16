try {
  // vários tipos de exceção podem ser lançados aqui
  throw 1;
  }
  catch(e if (e instanceof ReferenceError) {
  // Trata de erros de referência aqui
  }
  catch(e if e === "quit") {
  // Trata da string "quit" lançada
  }
  catch(e if typeof e === "string") {
  // Trata de qualquer outra string lançada aqui
  }
  catch(e) {
  // Trata de todo o resto aqui
  }
  finally {
  // A cláusula finally funciona normalmente
  }