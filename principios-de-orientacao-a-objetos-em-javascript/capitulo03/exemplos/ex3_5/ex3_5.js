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

console.log(person1.name); // "Reading name" e em seguida "Nicholas"
person1.name = 'Greg';
console.log(person1.name); // "Setting name to Greg" e em seguida "Greg"
