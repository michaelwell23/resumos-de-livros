// Adiciona uma folha de estilo no documento e a preenche com os estilos especificados.
// O argumento styles pode ser uma string ou um objeto. Se for uma string, ela
// é tratada como o texto da folha de estilo. Se for um objeto, então cada
// propriedade define uma regra de estilo a ser adicionada na folha de estilo. Os nomes
// de propriedade são seletores e seus valores são os estilos correspondentes
function addStyles(styles) {
  // Primeiramente, cria uma nova folha de estilo
  var styleElt, styleSheet;
  if (document.createStyleSheet) {
    // Se a API do IE estiver definida, a utiliza
    styleSheet = document.createStyleSheet();
  } else {
    var head = document.getElementsByTagName('head')[0];
    styleElt = document.createElement('style');
    // Novo elemento <style>
    head.appendChild(styleElt);
    // O insere em <head>
    // Agora a nova folha de estilo deve ser a última
    styleSheet = document.styleSheets[document.styleSheets.length - 1];
  }
  // Agora insere os estilos nela
  if (typeof styles === 'string') {
    // O argumento é o texto da folha de estilo
    if (styleElt) styleElt.innerHTML = styles;
    else styleSheet.cssText = styles;
    // A API do IE
  } else {
    // O argumento é um objeto de regras individuais para inserir
    var i = 0;
    for (selector in styles) {
      if (styleSheet.insertRule) {
        var rule = selector + ' {' + styles[selector] + '}';
        styleSheet.insertRule(rule, i++);
      } else {
        styleSheet.addRule(selector, styles[selector], i++);
      }
    }
  }
}
