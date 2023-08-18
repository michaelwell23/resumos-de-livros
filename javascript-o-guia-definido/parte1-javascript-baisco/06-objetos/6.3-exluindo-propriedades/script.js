delete book.author; // Agora o objeto book não tem a propriedade author.
delete book['main title']; // Agora também não tem "main title".

o = { x: 1 }; // o tem a propriedade própria x e herda a propriedade toString
delete o.x; // Exclui x e retorna true
delete o.x; // Não faz nada (x não existe) e retorna true
delete o.toString; // Não faz nada (toString não é uma propriedade própria), retorna true
delete 1; // Não tem sentido, mas é avaliada como true

delete Object.prototype; // Não pode excluir; a propriedade não é configurável
var x = 1; // Declara uma variável global
delete this.x; // Não pode excluir esta propriedade
function f() {} // Declara uma função global
delete this.f; // Também não pode excluir esta propriedade

this.x = 1; // Cria uma propriedade global configurável (sem var)
delete x; // E a exclui

delete x; // SyntaxError no modo restrito
delete this.x; // Isto funciona
