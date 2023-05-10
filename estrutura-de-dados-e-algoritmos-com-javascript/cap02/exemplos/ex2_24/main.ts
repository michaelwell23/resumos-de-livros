interface Person {
  name: string;
  age: number;
}
function printName(person: Person) {
  console.log(person.name);
}

const john = { name: 'John', age: 21 };
const mary = { name: 'Mary', age: 21, phone: '123-45678' };
printName(john);
printName(mary);

function printName2(person) {
  console.log(person.name);
}
var john2 = { name: 'John', age: 21 };
var mary2 = { name: 'Mary', age: 21, phone: '123-45678' };

interface Comparable {
  compareTo(b): number;
}
class MyObject implements Comparable {
  age: number;
  compareTo(b): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
