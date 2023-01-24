var person1 = {
  _name: 'Nicholas',
  get name() {
    console.log('Reading name');
    return this._name;
  },
  set name(value) {
    console.log('Setting name to %s', value);
    this._name = value;
  },
};

// Esse código também pode ser escrito da seguinte maneira:
var person1 = {
  _name: 'Nicholas',
};
Object.defineProperty(person1, 'name', {
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
});

// === === === === === ===

var person1 = {
  _name: 'Nicholas',
};
Object.defineProperty(person1, 'name', {
  get: function () {
    console.log('Reading name');
    return this._name;
  },
});
console.log('name' in person1); // true
console.log(person1.propertyIsEnumerable('name')); // false

delete person1.name;

console.log('name' in person1); // true
person1.name = 'Greg';
console.log(person1.name); // "Nicholas"
