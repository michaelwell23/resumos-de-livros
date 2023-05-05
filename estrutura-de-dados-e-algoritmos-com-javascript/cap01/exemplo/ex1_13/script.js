// criando objeto através de um construtor
var obj = new Object();

//criando objeto de maneira simples
var obj = {};

// criando objeto completo
obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey',
  },
  address: 'Middle Earth',
};

// declarando uma classe
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

// instanciando uma classe
var book = new Book('title', 'pag', 'isbn');

//acessando e atualizado valores de uma propriedade
console.log(book.title); // exibe o título do livro
book.title = 'new title'; // atualiza o valor do título do livro
console.log(book.title); // exibe o valor atualizado

// adicionando funções(métodos) a uma classe
Book.prototype.printTitle = function () {
  console.log(this.title);
};
book.printTitle();

// outra forma de declar funções (métodos) a uma classe
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}
book.printIsbn();
