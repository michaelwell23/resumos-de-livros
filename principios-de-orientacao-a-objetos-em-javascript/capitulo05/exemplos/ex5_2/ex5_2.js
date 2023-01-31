var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};

// é o mesmo que:
var book = Object.create(Object.prototype, {
  title: {
    configurable: true,
    enumerable: true,
    value: 'Princípios de orientação a objetos em JavaScript',
    writable: true,
  },
});

// HERANÇA DE OUTRO OBJETO
var person1 = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};

var person2 = Object.create(person1, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Greg',
    writable: true,
  },
});

person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"

console.log(person1.hasOwnProperty('sayName')); // true
console.log(person1.isPrototypeOf(person2)); // true
console.log(person2.hasOwnProperty('sayName')); // false
