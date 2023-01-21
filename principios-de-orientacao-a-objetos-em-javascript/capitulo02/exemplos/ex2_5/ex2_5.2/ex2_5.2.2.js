// UTILIZANDO MÉTODO APPLY()

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
sayNameForAll.apply(this, ['global']); // exibe "global:Michael"
sayNameForAll.apply(person1, ['person1']); // exibe "person1:Nicholas"
sayNameForAll.apply(person2, ['person2']); // exibe "person2:Greg"
