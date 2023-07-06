var point = { x: 1, y: 1 }; // Define um objeto
'x' in point; // => verdadeiro: o objeto tem uma propriedade chamada "x"

'z' in point; // => falso: o objeto não tem propriedade "z".
'toString' in point; // => verdadeiro: o objeto herda o método toString

var data = [7, 8, 9]; // Um array com elementos 0, 1 e 2
'0' in data; // => verdadeiro: o array tem um elemento "0"
1 in data; // => verdadeiro: números são convertidos em strings
3 in data; // => falso: nenhum elemento 3
