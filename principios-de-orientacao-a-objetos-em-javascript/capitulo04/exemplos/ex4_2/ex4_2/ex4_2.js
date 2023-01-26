var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};
console.log('title' in book); // true
console.log(book.hasOwnProperty('title')); // true
console.log('hasOwnProperty' in book); // true
console.log(book.hasOwnProperty('hasOwnProperty')); // false
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
