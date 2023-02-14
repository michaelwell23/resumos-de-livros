function power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}

console.log(power(2, 3));

// ======================== ==========================
function findSolution(target) {
  function find(start, history) {
    if (start == target) return history;
    else if (start > target) return null;
    else
      return (
        find(start + 5, '(' + history + ' + 5)') ||
        find(start * 3, '(' + history + ' * 3)')
      );
  }
  return find(1, '1');
}

console.log(findSolution(24)); // → (((1 * 3) + 5) * 3)
