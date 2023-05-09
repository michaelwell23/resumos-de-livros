import { circleArea, squareArea } from './17-CalcArea'; // {2}

console.log(circleArea(2));
console.log(squareArea(2));

import * as area from './17-CalcArea';
console.log(area.circle(2));
console.log(area.square(2));

import Book from './17-Book';
const myBook = new Book('some title');
myBook.printTitle();
