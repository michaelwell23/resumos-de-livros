let movie = 'Lord of the Rings'; // {1}
//var movie = 'Batman v Superman'; // erro, movie já foi declarada
function starWarsFan() {
  const movie = 'Star Wars'; // {2}
  return movie;
}
function marvelFan() {
  movie = 'The Avengers'; // {3}
  return movie;
}
function blizzardFan() {
  const isFan = true;
  let phrase = 'Warcraft'; // {4}
  console.log('Before if: ' + phrase);
  if (isFan) {
    let phrase = 'initial text'; // {5}
    phrase = 'For the Horde!'; // {6}
    console.log('Inside if: ' + phrase);
  }
  phrase = 'For the Alliance!'; // {7}
  console.log('After if: ' + phrase);
}
console.log(movie); // {8}
console.log(starWarsFan()); // {9}
console.log(marvelFan()); // {10}
console.log(movie); // {11}
blizzardFan(); // {12}
