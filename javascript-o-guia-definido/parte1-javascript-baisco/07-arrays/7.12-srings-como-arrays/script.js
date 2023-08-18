var s = test;
s.charAt(0); // => "t"
s[1];
// => "e"

s = 'JavaScript';
Array.prototype.join.call(s, ' '); // => "J a v a S c r i p t"
Array.prototype.filter // Filtra os caracteres da string
  .call(s, function (x) {
    return x.match(/[^aeiou]/); // Corresponde apenas às não vogais
  })
  .join(''); // => "JvScrpt"
