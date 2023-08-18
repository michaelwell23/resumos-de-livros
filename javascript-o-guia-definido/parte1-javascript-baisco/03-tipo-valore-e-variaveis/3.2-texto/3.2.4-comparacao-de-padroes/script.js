console.log(/^HTML/); // Corresponde às letras H T M L  no início de uma string
console.log(/[1-9][0-9]*/); // Corresponde a um dífito diferente de zero, seguido de qualquer numero de dígitos
console.log(/\bjavascript\b/i); // corresponde a "javascript" com uma palavra, sem considerar letras maiúsculas e minúsculas

var text = 'testing: 1,2,3'; // emplo de texto.
var pattern = /\d+/g; // corresponde a todas as instâncias de um ou mais dígito.
pattern.test(text); // verdadeiro: existe uma correspondência
text.search(pattern); // 0: posição da primeira correspondência
text.match(pattern); //["1", "2", "3"]: array de todas as correspondências
text.replace(pattern, '#'); // "testing: #, #, #"
text.split(/\D+/); // ["","1","2","3"]: divide em não dígitos
