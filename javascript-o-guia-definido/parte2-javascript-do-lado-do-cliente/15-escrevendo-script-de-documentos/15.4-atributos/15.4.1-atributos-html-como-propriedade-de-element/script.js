var image = document.getElementById('myimage');
var imgurl = image.src; // O atributo src é o URL da imagem
image.id === 'myimage'; // Visto que pesquisamos a imagem pela identificação

var f = document.forms[0]; // Primeiro <form> no documento
f.action = 'http://www.example.com/submit.php'; // Configura o URL para envio.
f.method = 'POST'; // Tipo de pedido HTTP
