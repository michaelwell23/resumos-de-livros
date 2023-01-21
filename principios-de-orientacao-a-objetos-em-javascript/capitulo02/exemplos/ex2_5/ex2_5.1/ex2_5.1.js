var person = {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
  },
};
person.sayName(); // exibe "Nicholas"

//REFERENCIANDO THIS
function sayNameForAll() {
  console.log(this.name);
}
var person1 = {
  name: 'Nicholas',
  sayName: sayNameForAll,
};
var person2 = {
  name: 'Greg',
  sayName: sayNameForAll,
};
var name = 'Michael';
person1.sayName(); // exibe "Nicholas"
person2.sayName(); // exibe "Greg"
sayNameForAll(); // exibe "Michael"
