/*
* Esta função analisa pares de argumento nome=valor separados da string de consulta do URL
* por um E comercial. Ela armazena os pares nome=valor em
* propriedades de um objeto e retorna esse objeto. Utilize-a como segue:
*
* var args = urlArgs();
// Analisa args do URL
* var q = args.q || "";
// Usa o argumento, se definido, ou um valor padrão
* var n = args.n ? parseInt(args.n) : 10;
*/
function urlArgs() {
  var args = {};
  // Começa com um objeto vazio
  var query = location.search.substring(1);
  // Obtém a string de consulta, menos '?'
  var pairs = query.split('&');
  // Divide nos E comerciais
  for (var i = 0; i < pairs.length; i++) {
    // Para cada fragmento
    var pos = pairs[i].indexOf('=');
    // Procura "nome=valor"
    if (pos == -1) continue;
    // Se não for encontrado, pula
    var name = pairs[i].substring(0, pos);
    // Extrai o nome
    var value = pairs[i].substring(pos + 1); // Extrai o valor
    value = decodeURIComponent(value);
    // Decodifica o valor
    args[name] = value;
    // Armazena como uma propriedade
  }
  return args; // Retorna os argumentos analisados
}
