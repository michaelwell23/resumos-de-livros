var num = 0; // {1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; // {2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

// BIT A BIT
console.log('5 & 1:', 5 & 1);
console.log('5 | 1:', 5 | 1);
console.log('~ 5:', ~5);
console.log('5 ^ 1:', 5 ^ 1);
console.log('5 << 1:', 5 << 1);
console.log('5 >> 1:', 5 >> 1);

// TYPEOF
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name: John}:', typeof { name: 'John' });

// DELETE
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); //exibe Object {name: "John"}
