// Juntando;

let arrays = [[1, 2, 3], [4, 5], [6]];

const juntando = arrays.reduce((flat, current) => flat.concat(current), []);
console.log(juntando);
