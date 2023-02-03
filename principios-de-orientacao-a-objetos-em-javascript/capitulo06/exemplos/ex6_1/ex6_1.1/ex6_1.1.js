var yourObject = (function () {
  // variáveis referentes a dados privados
  return {
    // métodos e propriedades públicas
  };
})();

var person = (function () {
  var age = 25;
  return {
    name: 'Nicholas',
    getAge: function () {
      return age;
    },
    growOlder: function () {
      age++;
    },
  };
})();

console.log(person.name); // "Nicholas"
console.log(person.GetAge()); // 25
person.age = 100;
console.log(person.getAge()); // 25
person.growOlder();
console.log(person.getAge()); // 26

var person = (function () {
  var age = 25;
  function getAge() {
    return age;
  }
  function growOlder() {
    age++;
  }

  return {
    name: 'Nicholas',
    getAge: getAge,
    growOlder: growOlder,
  };
})();
