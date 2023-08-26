// Carrega e executa um script de forma assíncrona a partir de um URL especificado
function loadasync(url) {
  var head = document.getElementsByTagName('head')[0]; // Localiza <head> do documento
  var s = document.createElement('script');
  // Cria um elemento <script>
  s.src = url;
  // Configura seu atributo src
  head.appendChild(s);
  // Insere o <script> no cabeçalho
}
