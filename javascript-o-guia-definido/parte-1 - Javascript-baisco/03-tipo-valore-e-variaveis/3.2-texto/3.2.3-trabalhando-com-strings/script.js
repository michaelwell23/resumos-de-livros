var name = 'Michael Wllington Lopes';

var msg = 'hello, ' + 'world'; // Produz a string "Hello, world";
greeting = 'Welcome to my blog,' + ' ' + name;

// determinar o comprimento de uma string
console.log(name.length);

// métodos de uma string
var s = 'hello, wolrd';
console.log(s.charAt(0)); // Começa com um texto.
console.log(s.charAt(s.length - 1)); // "h": o primeiro caractere.
console.log(s.substring(1, 4)); // "d": o último caractere.
console.log(s.slice(1, 4)); //"ell": 0 2º, 3º e 4º caractere.
console.log(s.slice(-3)); // "rld": os últimos 3 caracteres
console.log(s.indexOf('1')); // 2: posição da primeira letra l.
console.log(s.lastIndexOf('1')); // 10: posição da última letra l.
console.log(s.indexOf('1', 3)); // 3: posição do primeiro "l" em ou após 3
console.log(s.split(', ')); // => ["hello", "world"] divide em substrings
console.log(s.replace('h', 'H')); // => "Hello, world": substitui todas as instâncias
console.log(s.toUpperCase()); // => "HELLO, WORLD"

// strings podem ser tratadas como array somente para leitura, pondendo assim ter seus caracteres acesados individualmente
console.log(s[0]); // "h"
console.log(s[s.length - 1]); //"d"
