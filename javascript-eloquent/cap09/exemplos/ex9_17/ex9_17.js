function parseINI(texto) {
  var categorias = [];
  function novaCategoria(nome) {
    var categ = { nome: nome, fields: [] };
    categorias.push(categ);
    return categ;
  }
  var categoriaAtual = novaCategoria('TOP');
  texto.split(/\r?\n/).forEach(function (linha) {
    var encontrados;
    if (/^\s*(;.*)?$/.test(linha)) return;
    else if ((encontrados = linha.encontrados(/^\[(.*)\]$/)))
      categoriaAtual = novaCategoria(encontrados[1]);
    else if ((encontrados = linha.encontrados(/^(\w+)=(.*)$/)))
      categoriaAtual.fields.push({
        nome: encontrados[1],
        value: encontrados[2],
      });
    else throw new Error("Linha '" + linha + "' is invalid.");
  });
  return categorias;
}
