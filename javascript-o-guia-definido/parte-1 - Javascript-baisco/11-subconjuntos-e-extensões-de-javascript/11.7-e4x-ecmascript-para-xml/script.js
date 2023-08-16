// Cria um objeto XML
var pt = (
  <periodictable>
    <element id='1'>
      <name>Hydrogen</name>
    </element>
    <element id='2'>
      <name>Helium</name>
    </element>
    <element id='3'>
      <name>Lithium</name>
    </element>
  </periodictable>
);
// Adiciona um novo elemento na tabela
pt.element += (
  <element id='4'>
    <name>Beryllium</name>
  </element>
);

pt = <periodictable></periodictable>;
// Começa com a tabela vazia
var elements = ['Hydrogen', 'Helium', 'Lithium'];
// Elementos a adicionar
// Cria marcações XML usando conteúdo de array
for (var n = 0; n < elements.length; n++) {
  pt.element += (
    <element id={n + 1}>
      <name>{elements[n]}</name>
    </element>
  );
}

pt.element += new XML('<element id="5"><name>Boron</name></element>');

pt.element += new XMLList(
  '<element id="6"><name>Carbon</name></element>' +
    '<element id="7"><name>Nitrogen</name></element>'
);

var elements = pt.element; // Avaliado em uma lista de todas as marcações <element>
var names = pt.element.name; // Uma lista de todas as marcações <name>
var n = names[0]; // "Hydrogen": conteúdo da marcação <name> 0.

// Aqui está outro modo de obter uma lista de todas as marcações <name>
var names2 = pt..name;

// Obtém todos os descendentes de todas as marcações <element>.
// Esta é ainda outra maneira de obter uma lista de todas as marcações <name>. var
names3 = pt.element.*;

// Qual é o número atômico do Hélio?
var atomicNumber = pt.element[1].@id;

// Uma lista de todos os atributos de todas as marcações <element>
var atomicNums = pt.element.@*;

// Começa com uma lista de todos os elementos e a filtra para
// que inclua somente aqueles cujo atributo id seja < 3
var lightElements = pt.element.(@id < 3);
// Começa com uma lista de todas as marcações <element> e filtra para que inclua somente
// aquelas cujos nomes começam com "B". Então, faz uma lista das marcações <name>
// de cada uma das marcações <element> restantes.
var bElementNames = pt.element.(name.charAt(0) == 'B').name;

// Imprime os nomes de cada elemento da tabela periódica
for each (var e in pt.element) {
  console.log(e.name);
  }
  // Imprime os números atômicos dos elementos
  for each (var n in pt.element.@*) console.log(n);

// Modifica a marcação <element> de Hydrogen para adicionar um novo atributo
// e um novo elemento filho, para que apareça como segue:
//
// <element id="1" symbol="H">
//
<name>Hydrogen</name>
//
<weight>1.00794</weight>
// </element>
//
pt.element[0].@symbol = "H";
pt.element[0].weight = 1.00794

delete pt.element[0].@symbol; // exclui um atributo
delete pt..weight; // exclui todas as marcações <weight>

pt.insertChildBefore(pt.element[1],
  <element id="1"><name>Deuterium</name></element>);

// Declara o espaço de nomes padrão usando uma instrução "default xml namespace": default xml espaço de nomes = "http://www.w3.org/1999/xhtml";
// Aqui está um documento xhtml que também contém algumas marcações svg:
d = <html>
<body>
This is a small red square:
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
<rect x="0" y="0" width="10" height="10" fill="red"/>
</svg>
</body>
</html>
// O elemento body e seu espaço de nomes uri e seu nome local
var tagname = d.body.name();

var bodyns = tagname.uri;
var localname = tagname.localName;
// Selecionar o elemento <svg> é mais complicado, pois não está no
// espaço de nomes padrão. Assim, cria um objeto Namespace para svg e usa o
// operador :: para adicionar um namespace em um nome de marcação
var svg = new Namespace('http://www.w3.org/2000/svg');
var color = d..svg::rect.@fill // "red"