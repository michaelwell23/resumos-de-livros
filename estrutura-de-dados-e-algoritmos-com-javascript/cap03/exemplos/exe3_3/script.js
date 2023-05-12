for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

const fibonacci = []; // {1}
fibonacci[1] = 1; // {2}
fibonacci[2] = 1; // {3}
for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4}
}
for (let i = 1; i < fibonacci.length; i++) {
  // {5}
  console.log(fibonacci[i]); // {6}
}
