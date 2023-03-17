function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[\w\W]*\*\//g, '');
}
console.log(stripComments('1 + /* 2 */3')); // → 1 + 3
console.log(stripComments('x = 10;// ten!')); // → x = 10;
console.log(stripComments('1 /* a */+/* b */ 1')); // → 1 1

// ===========================

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[\w\W]*?\*\//g, '');
}
console.log(stripComments('1 /* a */+/* b */ 1')); // → 1 + 1
