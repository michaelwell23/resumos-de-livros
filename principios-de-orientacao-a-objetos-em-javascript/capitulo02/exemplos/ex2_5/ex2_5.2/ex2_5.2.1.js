// UTILIZANDO MÉTODO CALL()

function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}
var person1 = {
  name: 'Nicholas',
};
var person2 = {
  name: 'Greg',
};
var name = 'Michael';
sayNameForAll.call(this, 'global'); // exibe "global: Michael"
sayNameForAll.call(person1, 'person1'); // exibe "person1:Nicholas"
sayNameForAll.call(person2, 'person2'); // exibe "person2:Greg"
