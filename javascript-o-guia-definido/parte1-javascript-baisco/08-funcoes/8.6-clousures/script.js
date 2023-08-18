// O primeiro passo para entender as closures é examinar as regras do escopo léxico para funções aninhadas. Considere o código a seguir (que é semelhante ao código já visto na Seção 3.10):
var scope = 'global scope'; // Uma variável global
function checkscope() {
  var scope = 'local scope'; // Uma variável local
  function f() {
    return scope; // Retorna o valor de scope aqui
  }
  return f();
}
checkscope(); // => "local scope"

// A função checkscope() declara uma variável local e então define e chama uma função que retorna o valor dessa variável. Deve estar claro para você o motivo da chamada de checkscope() retornar “local scope”. Agora, vamos alterar o código apenas ligeiramente. Você consegue dizer o que esse código vai retornar?
var scope = 'global scope'; // Uma variável global
function checkscope() {
  var scope = 'local scope'; // Uma variável local
  function f() {
    return scope; // Retorna o valor de scope aqui
  }
  return f;
}
checkscope()(); // O que isso retorna?

// As closures capturam as variáveis locais de uma única chamada de função e podem usar essas variáveis como estado privado. Aqui está como poderíamos reescrever a função uniqueInteger() usando closures:
var uniqueInteger = (function () {
  // Define e chama
  var counter = 0;
  // Estado privado da função abaixo
  return function () {
    return counter++;
  };
})();

// Variáveis privadas como counter não precisam ser exclusivas de uma única closure: é perfeitamente possível duas ou mais funções aninhadas serem definidas dentro da mesma função externa e compartilharem o mesmo encadeamento de escopo. Considere o código a seguir:
function counter() {
  var n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}
var c = counter(),
  d = counter(); // os métodos reset() e count() compartilham estado
d.count(); // os métodos reset() e count() compartilham estado
c.count(); // os métodos reset() e count() compartilham estado
c.reset(); // os métodos reset() e count() compartilham estado
c.count(); // os métodos reset() e count() compartilham estado
d.count(); // os métodos reset() e count() compartilham estado

// Vale notar aqui que é possível combinar essa técnica de closure com propriedades getters e setters. A versão da função counter() a seguir é uma variação do código que apareceu na Seção 6.6, mas utiliza closures para estado privado, em vez de contar com uma propriedade de objeto normal:
function counter(n) {
  // O argumento da função n é a variável privada
  return {
    // O método getter da propriedade retorna e incrementa a variável privada counter.
    get count() {
      return n++;
    },
    // O método setter da propriedade não permite que o valor de n diminua
    set count(m) {
      if (m >= n) n = m;
      else throw Error('count can only be set to a larger value');
    },
  };
}
var c = counter(1000);
c.count; // => 1000
c.count; // => 1001
c.count = 2000;
c.count; // => 2000
c.count = 2000; // => Erro!

// O Exemplo abaixo é uma generalização do estado privado compartilhado, por meio da técnica de closures que demonstramos aqui. Esse exemplo define uma função addPrivateProperty() que define uma variável privada e duas funções aninhadas para configurar e obter o valor dessa variável. Ela adiciona essas funções aninhadas como métodos do objeto especificado:
// Esta função adiciona métodos de acesso para uma propriedade com
// o nome especificado no objeto o. Os métodos são denominados get<name>
// e set<name>. Se é fornecida uma função predicado, o método setter
// a utiliza para testar a validade de seu argumento antes de armazená-lo.
// Se o predicado retorna false, o método setter lança uma exceção.
//
// O incomum nessa função é que o valor de propriedade
// manipulado pelos métodos getter e setter não é armazenado no
// objeto o. Em vez disso, o valor é armazenado apenas em uma variável local
// nessa função. Os métodos getter e setter também são definidos
// localmente nessa função e, portanto, têm acesso a essa variável local.
// Isso significa que o valor é privado para os dois métodos de acesso e
// não pode ser configurado nem modificado, a não ser por meio do método setter.
function addPrivateProperty(o, name, predicate) {
  var value; // Essa é a propriedade value
  // O método getter simplesmente retorna o valor.
  o['get' + name] = function () {
    return value;
  };
  // O método setter armazena o valor ou lança uma exceção se
  // o predicado rejeita o valor.
  o['set' + name] = function (v) {
    if (predicate && !predicate(v))
      throw Error('set' + name + ': invalid value ' + v);
    else value = v;
  };
}
// O código a seguir demonstra o método addPrivateProperty().
var o = {}; // Aqui está um objeto vazio

// Adiciona métodos de acesso à propriedade getName e setName()
// Garante que somente valores de string sejam permitidos
addPrivateProperty(o, 'Name', function (x) {
  return typeof x == 'string';
});

o.setName('Frank'); // Configura a propriedade value
console.log(o.getName()); // Obtém a propriedade value
o.setName(0); // Tenta configurar um valor de tipo errado

// também é importante reconhecer quando as closures compartilham inadvertidamente o acesso a uma variável que não deveriam compartilhar. Considere o código a seguir:
// Esta função retorna uma função que sempre retorna v
function constfunc(v) {
  return function () {
    return v;
  };
}
// Cria um array de funções constantes:
var funcs = [];
for (var i = 0; i < 10; i++) funcs[i] = constfunc(i);
// A função no elemento 5 do array retorna o valor 5.
funcs[5](); // => 5

// Ao se trabalhar com código como esse, que cria várias closures usando um laço, é um erro comum tentar colocar o laço dentro da função que define as closures. Pense no código a seguir, por exemplo:
// Retorna um array de funções que retornam os valores 0-9
function constfuncs() {
  var funcs = [];
  for (var i = 0; i < 10; i++)
    funcs[i] = function () {
      return i;
    };
  return funcs;
}
var funcs = constfuncs();
funcs[5](); // O que isso retorna?

// toda chamada de função tem um valor this e uma closure não pode acessar o valor de this de sua função externa, a não ser que a função externa tenha salvo esse valor em uma variável:
var self = this; // Salva o valor de this em uma variável para uso de funções aninhadas.

// uma closure tem seu próprio vínculo para arguments , não pode acessar o array de argumentos da função externa, a não ser que a função externa tenha salvo esse array em uma variável com um nome diferente:
var outerArguments = arguments; // Salva para uso de funções aninhadas
