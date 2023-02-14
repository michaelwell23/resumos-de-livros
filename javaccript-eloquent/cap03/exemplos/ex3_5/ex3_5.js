// conotação utilizando function
function square(x) {
  return x * x;
}

// funçaõ sendo chamada antes de ser declarada
console.log('The future says:', future());

function future() {
  return 'We STILL have no flying cars.';
}

// utilizando função dentro de um bloco if
function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}
