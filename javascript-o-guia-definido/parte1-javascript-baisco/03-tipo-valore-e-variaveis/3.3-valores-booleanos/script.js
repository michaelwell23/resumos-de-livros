a == 4;

if (a == 4) b = b + 1;
else a = a + 1;

// Valores que são convertidos em falso
undefined;
null;
0 - 0;
NaN;
(''); // => string vazia

if ((x == 0 && y == 0) || !(z == 0)) {
  // x e y são ambos zero ou z não é zero
}
