var author = book.author; // Obtém a propriedade "author" de book.
var name = author.surname; // Obtém a propriedade "surname" de author.
var title = book['main title']; // Obtém a propriedade "main title" de book.

// Para criar ou configurar uma propriedade, use um ponto ou colchetes, como faria para consultar a propriedade, mas coloque-os no lado esquerdo de uma expressão de atribuição:
book.edition = 6; // Cria uma propriedade "edition" de book.
book['main title'] = 'ECMAScript'; // Configura a propriedade "main title".
