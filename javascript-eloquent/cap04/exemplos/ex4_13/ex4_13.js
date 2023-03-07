// SIN, CON, TAN, PI DO MÉTODO MATH
function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}
console.log(randomPointOnCircle(2)); // → {x: 0.3667, y: 1.966}

// RANDOM DO MÉTODO MATH (RETORNAM NUMEROS ALEATÓRIOS)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// RANDOM + FLOOR DO MÉTODO MATH (RETORNA UM NUMERO ALEATÓRIO)
console.log(Math.floor(Math.random() * 10));
