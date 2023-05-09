const circleArea = (r) => 3.14 * r ** 2;
const squareArea = (s) => s * s;
export { circleArea, squareArea }; // {1}

export const circleArea2 = (r) => 3.14 * r ** 2;
export const squareArea2 = (s) => s * s;

export default class Book {
  constructor(title) {
    this.title = title;
  }
  printTitle() {
    console.log(this.title);
  }
}
