function Person() {
  //intercionalmente vazia
}

var person1 = new Person();
var person2 = new Person();

// ===== EXEMPLO 2 =====

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

// ===== EXEMPLO 3 =====

console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true

// ===== EXEMPLO 4 =====

function Person2(name) {
  this.name = name;
  this.sayName = function () {
    console.log(`Olá eu me chamo ${this.name}`);
  };
}

// ===== EXEMPLO 5 =====

var person1 = new Person2('Nicholas');
var person2 = new Person2('Greg');

console.log(person1.name); //Nicholas
console.log(person2.name); // Greg

person1.sayName(); //Olá eu me chamo Nicholas
person2.sayName(); //Olá eu me chamo Greg

// ===== EXEMPLO 6 =====

function Person3(name) {
  Object.defineProperty(this, 'name', {
    get: function () {
      return name;
    },
    set: function (newName) {
      name = newName;
    },
    enumerable: true,
    configurable: true,
  });

  this.sayName = function () {
    console.log(this.name);
  };
}

// ===== EXEMPLO 7 =====

var person1 = Person3('Nicholas'); // nota: "new" está ausente

console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"
