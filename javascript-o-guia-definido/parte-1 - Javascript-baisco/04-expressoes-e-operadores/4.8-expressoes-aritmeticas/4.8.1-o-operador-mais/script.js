// O operador binário + soma operandos numéricos ou concatena operandos string

1 + 2;
'hello' + ' ' + 'there';
'1' + '2';

1 + 2; // => 3: adição
'1' + '2'; // => "12": concatenação
'1' + 2; // => "12": concatenação após número para string
1 + {}; // => "1[object Object]": concatenação após objeto para string
true + true; // => 2: adição após booleano para número
2 + null; // => 2: adição após null converte em 0
2 + undefined; // => NaN: adição após undefined converte em NaN

1 + 2 + ' blind mice'; // => "3 blind mice"
1 + (2 + ' blind mice'); // => "12 blind mice"
