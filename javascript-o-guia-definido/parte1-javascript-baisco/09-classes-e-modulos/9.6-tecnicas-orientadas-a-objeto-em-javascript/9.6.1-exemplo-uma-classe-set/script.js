function Set() {
  // Esta é a contrutura
  this.values = {}; // As propriedades do objeto this contêm o conjunto
  this.n = 0; //Quanto valores existem no conjunto
  this.add.apply(this, arguments); // Todos os argumentos são valores a adicionar
}

// Adiciona cada um dos argumentos no conjunto.
Set.prototype.add = function () {
  for (var i = 0; i < arguments.length; i++) {
    // Para cada argumento
    var val = arguments[i];
    // O valor a adicionar no conjunto
    var str = Set._v2s(val);
    // Transforma-o em uma string
    if (!this.values.hasOwnProperty(str)) {
      // Se ainda não estiver no conjunto
      this.values[str] = val;
      // Mapeia a string no valor
      this.n++;
      // Aumenta o tamanho do conjunto
    }
  }
  return this;
  // Suporta chamadas de método encadeadas
};
// Remove cada um dos argumentos do conjunto.
Set.prototype.remove = function () {
  for (var i = 0; i < arguments.length; i++) {
    var str = Set._v2s(arguments[i]);
    if (this.values.hasOwnProperty(str)) {
      delete this.values[str];
      this.n--;
    }
  }
  return this;
};

// Para cada argumento
// Mapeia em uma string
// Se estiver no conjunto
// O exclui
// Diminui o tamanho do conjunto
// Para encadeamento de métodos
// Retorna true se o conjunto contém value; caso contrário, false.
Set.prototype.contains = function (value) {
  return this.values.hasOwnProperty(Set._v2s(value));
};
// Retorna o tamanho do conjunto.
Set.prototype.size = function () {
  return this.n;
};
// Chama a função f no contexto especificado para cada elemento do conjunto.
Set.prototype.foreach = function (f, context) {
  // Para cada string no conjunto
  for (var s in this.values)
    if (this.values.hasOwnProperty(s))
      // Ignora as propriedades herdadas
      f.call(context, this.values[s]);
  // Chama f no valor
};
// Esta função interna mapeia qualquer valor de JavaScript em uma string exclusiva.
Set._v2s = function (val) {
  switch (val) {
    case undefined:
      return 'u';
    // Valores primitivos especiais
    case null:
      return 'n';
    // recebem códigos de
    case true:
      return 't';
    // uma letra.
    case false:
      return 'f';
    default:
      switch (typeof val) {
        case 'number':
          return '#' + val;
        // Números recebem o prefixo #.
        case 'string':
          return '"' + val;
        // Strings recebem o prefixo ".
        default:
          return '@' + objectId(val); // Objetos e funções recebem @
      }
  }

  // Para qualquer objeto, retorna uma string. Esta função vai retornar uma string diferente para diferentes objetos e sempre vai retornar a mesma string  se for chamada várias vezes para o mesmo objeto. Para fazer isso, ela cria uma  propriedade em o. Em ES5, a propriedade seria não enumerável e somente para leitura

  function objectId(o) {
    var prop = '|**objetid**|'; // Nome de propriedade privada para armazenar

    if (!o.hasOwnProperty(prop))
      // Se o objeto não tem identificação
      o[prop] = Set._v2s.next++; // Atribui a próxima disponível
    return o[prop];
    // Retorna a identificação
  }
};
Set._v2s.next = 100; // Começa a atribuir identificações de objeto neste valor.
