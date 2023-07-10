// Qualquer instrução pode ser rotulada por ser precedida por um identificador e dois-pontos:
// identificador: instrução

mainloop: while (token != null) {
  // Código omitido...
  continue mainloop;
  // Pula para a próxima iteração do laço nomeado
  // Mais código omitido...
}
