// UTILIZANDO MÉTODO BIND()

function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}
var person1 = {
  name: 'Nicholas',
};
var person2 = {
  name: 'Greg',
};

// cria uma função somente para person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1('person1'); // exibe "person1:Nicholas"

// cria uma função somente para person2
var sayNameForPerson2 = sayNameForAll.bind(person2, 'person2');
sayNameForPerson2(); // exibe "person2:Greg"

// associar um método a um objeto não altera 'this'
person2.sayName = sayNameForPerson1;
person2.sayName('person2'); // exibe "person2:Nicholas"
