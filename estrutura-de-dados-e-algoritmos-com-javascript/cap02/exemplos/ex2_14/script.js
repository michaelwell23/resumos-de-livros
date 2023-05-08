class ITBook extends Book {
  // {1}
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn); // {2}
    this.technology = technology;
  }
  printTechnology() {
    console.log(this.technology);
  }
}
let jsBook = new ITBook(
  'Learning JS Algorithms',
  '200',
  '1234567890',
  'JavaScript'
);
console.log(jsBook.title);
console.log(jsBook.printTechnology());
