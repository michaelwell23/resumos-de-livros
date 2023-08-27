var ss = document.styleSheets[0];
var rules = ss.cssRules ? ss.cssRules : ss.rules;
// Obtém a primeira folha de estilo
// Obtém as regras da folha de estilo
for (var i = 0; i < rules.length; i++) {
  // Itera por essas regras
  var rule = rules[i];
  if (!rule.selectorText) continue; // Pula @import e outras regras que não são de estilo
  var selector = rule.selectorText; // O seletor
  var ruleText = rule.style.cssText; // Os estilos, em forma de texto
  // Se a regra se aplica a elementos h1, a aplica em elementos h2 também
  // Note que isso só funciona se o seletor é literalmente "h1"
  if (selector == 'h1') {
    if (ss.insertRule) ss.insertRule('h2 {' + ruleText + '}', rules.length);
    else if (ss.addRule) ss.addRule('h2', ruleText, rules.length);
  }
  // Se a regra configura a propriedade text-decoration, a exclui.
  if (rule.style.textDecoration) {
    if (ss.deleteRule) ss.deleteRule(i);
    else if (ss.removeRule) ss.removeRule(i);
    i--;
    // Ajusta o índice do laço, pois a regra i+1 anterior agora é a regra i
  }
}
