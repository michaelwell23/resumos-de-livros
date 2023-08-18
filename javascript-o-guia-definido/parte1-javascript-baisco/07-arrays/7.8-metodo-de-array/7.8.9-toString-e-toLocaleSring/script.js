// Um array, assim como qualquer objeto de JavaScript, tem um método toString() . Para um array, esse método converte cada um de seus elementos em uma string (chamando os métodos toString() de seus elementos, se necessário) e produz na saída uma lista separada com vírgulas dessas strings.
[1, 2, 3].toString(); // Produz '1,2,3'
['a', 'b', 'c'].toString(); // Produz 'a,b,c'
[1, [2, 'c']].toString(); // Produz '1,2,c'

// toLocaleString() é a versão localizada de toString() . Ele converte cada elemento do array em uma string chamando o método toLocaleString() do elemento e, então, concatena as strings resultantes usando uma string separadora específica para a localidade
