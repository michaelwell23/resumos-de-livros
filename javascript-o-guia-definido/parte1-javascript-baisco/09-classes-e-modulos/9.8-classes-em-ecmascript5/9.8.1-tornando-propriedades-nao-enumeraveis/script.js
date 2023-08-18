// Definindo propriedades não enumeráveis
// Encerra nosso código em uma função para que possamos definir variáveis no escopo da
// função
(function () {
  // Define objectId como uma propriedade não enumerável herdada por todos os objetos.
  // Quando essa propriedade é lida, a função getter é chamada.
  // Ela não tem setter; portanto, é somente para leitura.
  // Ela não é configurável; portanto, não pode ser excluída.
  Object.defineProperty(Object.prototype, 'objectId', {
    get: idGetter,
    // Método para obter value
    enumerable: false,
    // Não enumerável
    configurable: false,
    // Não pode excluí-la
  });
  // Esta é a função getter chamada quando objectId é lida
  function idGetter() {
    // Uma função getter para retornar a identificação
    if (!(idprop in this)) {
      // Se o objeto ainda não tem uma identificação
      if (!Object.isExtensible(this))
        // E se podemos adicionar uma propriedade
        throw Error("Can't define id for nonextensible objects");
      Object.defineProperty(this, idprop, {
        // Fornece uma a ele agora.
        value: nextid++,
        // Este é o valor
        writable: false,
        // Somente para leitura
        enumerable: false,
        // Não enumerável
        configurable: false, // Não pode ser excluída
      });
    }
    return this[idprop];
    // Agora retorna o valor já existente ou o novo
  }
  // Essas variáveis são usadas por idGetter() e são privativas dessa função
  var idprop = '|**objectId**|'; // Presume que essa propriedade não está em uso
  var nextid = 1;
  // Começa a atribuir identificações neste nº
})();
// Chama a função empacotadora para executar o código imediatamente
