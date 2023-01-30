// valueOf()

var now = new Date();
var earlier = new Date(2010, 1, 1);
console.log(now > earlier); //true

//toString()
var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
};
var message = 'Book = ' + book;
console.log(message); // "Book = [object Object]"

var book = {
  title: 'Princípios de orientação a objetos em JavaScript',
  toString: function () {
    return '[Book ' + this.title + ']';
  },
};
var message = 'Book = ' + book;
// "Book = [Book Princípios de orientação a objetos em JavaScript]"
console.log(message);
