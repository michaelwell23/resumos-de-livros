// O Rhino define várias funções globais importantes que não fazem parte de JavaScript básica:
// Globais específicas da incorporação: digite help() no prompt do rhino para mais
// informações
print(x); // A função global print imprime na console
version(170); // Diz ao Rhino que queremos recursos da linguagem JS 1.7
// load(filename, ...) // Carrega e executa um ou mais arquivos de código JavaScript
readFile(file); // Lê um arquivo de texto e retorna seu conteúdo como uma string
readUrl(url); // Lê o conteúdo textual de um URL e retorna como uma string
spawn(f); // Executa f() ou carrega e executa o arquivo f em uma nova thread
// runCommand (cmd, [args...]); // Executa um comando de sistema com zero ou mais args de linha de comando
quit(); // Faz o Rhino encerrar

// O Rhino representa pacotes e classes Java como objetos JavaScript:
// Global Packages é a raiz da hierarquia de pacotes Java
Packages.any.package.name; // Qualquer pacote do CLASSPATH Java
java.lang; // Global java é um atalho para Packages.java
javax.swing; // E javax é um atalho para Packages.javax
// Classes: acessadas como propriedades de pacotes
var System = java.lang.System;
var JFrame = javax.swing.JFrame;

// Como os pacotes e classes são representados como objetos JavaScript, você pode atribuí-los a variáveis para dar-lhes nomes mais curtos. Mas também pode importá-los mais formalmente, se quiser:
var ArrayList = java.util.ArrayList; // Cria um nome mais curto para uma classe
importClass(java.util.HashMap);
// O mesmo que: var HashMap = java.util.HashMap
// Importa um pacote (de forma preguiçosa) com importPackage().
// Não importa java.lang: muitos conflitos de nome com globais de JavaScript.
importPackage(java.util);
importPackage(java.net);
// Outra técnica: passa qualquer número de classes e pacotes para JavaImporter()
// e usa o objeto que retorna em uma instrução with
var guipkgs = JavaImporter(java.awt, java.awt.event, Packages.javax.swing);
with (guipkgs) {
  /* Classes como Font, ActionListener e JFrame definidas aqui */
}

// As classes Java podem ser instanciadas com new , exatamente como as classes em JavaScript:
// Objetos: instancia classes Java com new
var f = new java.io.File('/tmp/test'); // Vamos usar esses objetos a seguir
var out = new java.io.FileWriter(f);

// O Rhino permite que o operador instanceof de JavaScript funcione com objetos e classes Java:
f instanceof java.io.File;
// => verdadeiro
out instanceof java.io.Reader;
// => falso: é um Writer, não um Reader
out instanceof java.io.Closeable; // => verdadeiro: Writer implementa Closeable

// Os métodos Java são muito parecidos com as construtoras Java e o Rhino permite que os programas JavaScript chamem métodos Java:
// Os métodos estáticos Java funcionam como funções de JavaScript
java.lang.System.getProperty('java.version'); // Retorna a versão de Java
var isDigit = java.lang.Character.isDigit; // Atribui método estático à variável
isDigit(' '); // => verdadeiro: Algarismo arábico 2
// Chama métodos de instância dos objetos Java f e out criados anteriormente
out.write('Hello World\n');
out.close();
var len = f.length();

// Quando existem métodos getter e setter, o Rhino os expõe como propriedades de JavaScript:
// Lê um campo estático de uma classe Java
var stdout = java.lang.System.out;
// O Rhino mapeia métodos getter e setter em propriedades únicas de JavaScript
f.name;
// => "/tmp/test": chama f.getName()
f.directory; // => falso: chama f.isDirectory()

// Rhino consegue descobrir qual versão de um método se quer chamar, com base no tipo dos argumentos passados. Em alguns momentos, é preciso identificar um método specificamente pelo nome e pela assinatura:
// Supõe que o objeto Java o tem um método chamado f que espera um int ou
// um float. Em JavaScript, deve-se especificar a assinatura explicitamente:
o['f(int)'](3); // Chama o método int
o['f(float)'](Math.PI); // Chama o método float

// Um laço for/in pode ser usado para iterar pelos métodos, campos e propriedades de classes e objetos Java:
importClass(java.lang.System); // Imprime os membros estáticos de java.lang.System
for (var m in System) print(m); // Imprime os membros de instância de java.io.File
for (m in f) print(m); // Note que você não pode enumerar as classes em um pacote dessa maneira
for (c in java.lang) print(c); // Isto não funciona

// Não existe uma sintaxe JavaScript natural que o Rhino possa estender para permitir que programas JavaScript criem novos arrays Java; portanto, é preciso fazer isso usando a classe java.lang.reflect.Array:
// Cria um array de 10 strings e um array de 128 bytes
var words = java.lang.reflect.Array.newInstance(java.lang.String, 10);
var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 128);
// Uma vez criados os arrays, você pode usá-los exatamente como os arrays de JavaScript:
for (var i = 0; i < bytes.length; i++) bytes[i] = i;

// Os exemplos a seguir demonstram como se implementa receptores de evento em Java:
// Interfaces: implementa interfaces como segue:
var handler = new java.awt.event.FocusListener({
  focusGained: function (e) {
    print('got focus');
  },
  focusLost: function (e) {
    print('lost focus');
  },
});
// Estende classes abstratas da mesma maneira
var handler = new java.awt.event.WindowAdapter({
  windowClosing: function (e) {
    java.lang.System.exit(0);
  },
});
// Quando uma interface tem apenas um método, você pode simplesmente usar uma função em
// seu lugar
button.addActionListener(function (e) {
  print('button clicked');
});
// Se todos os métodos de uma interface ou classe abstrata têm a mesma assinatura,
// então você pode usar uma única função como implementação e o Rhino
// passará o nome do método como último argumento
frame.addWindowListener(function (e, name) {
  if (name === 'windowClosing') java.lang.System.exit(0);
});
// Se precisar de um objeto que implemente várias interfaces, use JavaAdapter:
var o = new JavaAdapter(java.awt.event.ActionListener, java.lang.Runnable, {
  run: function () {},
  // Implementa Runnable
  actionPerformed: function (e) {}, // Implementa ActionListener
});

// Quando um método Java lança uma exceção, o Rhino a propaga como uma exceção de JavaScript. Você pode obter o objeto Java java.lang.Exception original por meio da propriedade javaException do objeto Error de JavaScript:
try {
  java.lang.System.getProperty(null); // null não é um argumento válido
} catch (e) {
  // e é a exceção JavaScript
  print(e.javaException);
  // ela empacota java.lang.NullPointerException
}

// As strings JavaScript são convertidas automaticamente em strings Java, mas (e isso pode ser um obstáculo) as strings Java deixadas como objetos java.lang.String não são convertidas de volta para strings JavaScript. Considere esta linha do código anterior:
var version = java.lang.System.getProperty('java.version');

var version = String(java.lang.System.getProperty('java.version'));
