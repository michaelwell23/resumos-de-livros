Number('3'); // 3
String(false); // False ou use false.toString()
Boolean([]); // verdadeiro
Object(3); // novo Number(3)

x +
  '' + // O mesmo que String(x)
  x; // O mesmo que NUmber(x). Você também poderá ver x-0
!!x; //O mesmo que Boolean(x). Observe o duplo !

var n = 17;
binary_string = n.toString(2); // é avaliado como "10001"
octal_string = 'O' + n.toString(8); // é avaliado como "021"
hex_string = '0x' + n.toString(16); // é avaliado como "0x11"

var o = 123456.789;
o.toFixed(0); // "1234567"
o.toFixed(2); // "123456.79"
o.toFixed(5); // "123456.78900"
o.toExponential(1); // "1.2e+5"
o.toExponential(3); // "1.235e+5"
o.toPrecision(4); // "1.235e+5"
o.toPrecision(7); // "123456.8"
o.toPrecision(10); // "123456.7890"

arseInt('3 blind mice'); // => 3
parseFloat(' 3.14 meters'); // => 3.14
parseInt('-12.34'); // => -12
parseInt('0xFF'); // => 255
parseInt('0xff'); // => 255
parseInt('-0XFF'); // => -255
parseFloat('.1'); // => 0.1
parseInt('0.1'); // => 0
parseInt('.1'); // => NaN: inteiros não podem começar com "."
parseFloat('$72.47'); // => NaN: números não podem começar com "$"

parseInt('11', 2); // =>3 (1*2 + 1)
parseInt('ff', 16); // =>255 (15*16 + 15)
parseInt('zz', 36); // =>1295 (35*36 + 35)
parseInt('077', 8); // =>63 (7*8 + 7)
parseInt('077', 10); // =>77 (7*10 + 7)
