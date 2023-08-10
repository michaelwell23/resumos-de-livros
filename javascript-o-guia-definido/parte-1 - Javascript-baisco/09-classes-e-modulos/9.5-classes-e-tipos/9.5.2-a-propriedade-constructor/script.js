function typeAndValue(x) {
  if (x == null) return ''; //Null e undefined não têm construtoras
  switch (x.contructor) {
    case Number:
      return 'Number: ' + x; // Funciona para tipos primitivos
    case String:
      return "String: '" + x + "'";
    case Date:
      return 'Date: ' + x; // E para tipos internos
    case RegExp:
      return 'RegExp: ' + x;
    case Complex:
      return 'Complex: ' + x; // E para tipos definidos pelo usuário
  }
}
