var person1 = {};
Object.defineProperties(person1, {
  // propriedade de dados para armazenar informações
  _name: {
    value: 'Nicholas',
    enumerable: true,
    configurable: true,
    writable: true,
  },
  // propriedade de acesso
  name: {
    get: function () {
      console.log('Reading name');
      return this._name;
    },
    set: function (value) {
      console.log('Setting name to %s', value);
      this._name = value;
    },
    enumerable: true,
    configurable: true,
  },
});
