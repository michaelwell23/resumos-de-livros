// Para obter o descritor de uma propriedade nomeada de um objeto especificado, chame Object.getOwnPropertyDescriptor() :
// Retorna {value: 1, writable:true, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor({ x: 1 }, 'x');
// Agora consulta a propriedade octet do objeto random definido anteriormente.
// Retorna { get: /*func*/, set:undefined, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor(random, 'octet');
// Retorna undefined para propriedades herdadas e propriedades que não existem.
Object.getOwnPropertyDescriptor({}, 'x');
// indefinido, não existe essa prop
Object.getOwnPropertyDescriptor({}, 'toString'); // indefinido, herdada

// Para configurar os atributos de uma propriedade ou criar uma nova propriedade com os atributos especificados, chame Object.defineProperty(), passando o objeto a ser modificado, o nome da propriedade a ser criada ou alterada e o objeto descritor de propriedade:
var o = {}; // Começa sem propriedade alguma
// Adiciona uma propriedade de dados não enumerável x com valor 1.
Object.defineProperty(o, 'x', {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true,
});

// Verifica se a propriedade existe mas não é enumerável
o.x; // => 1
Object.keys(o); // => []

// Agora modifica a propriedade x para que ela seja somente para leitura
Object.defineProperty(o, 'x', { writable: false }); // Tenta alterar o valor da propriedade
o.x = 2; // Falha silenciosamente ou lança TypeError no modo restrito
o.x; // => 1

// A propriedade ainda é configurável; portanto, podemos alterar seu valor, como segue:
Object.defineProperty(o, 'x', { value: 2 });
o.x; // => 2

// Agora altera x de uma propriedade de dados para uma propriedade de acesso
Object.defineProperty(o, 'x', {
  get: function () {
    return 0;
  },
});
o.x;
// => 0

// Se quiser criar ou modificar mais de uma propriedade simultaneamente, use Object.define Properties() O primeiro argumento é o objeto a ser modificado. O segundo argumento é um objeto que mapeia os nomes das propriedades a serem criadas ou modificadas nos descritores dessas propriedades.
var p = Object.defineProperties(
  {},
  {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
      get: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      enumerable: true,
      configurable: true,
    },
  }
);

/*
 * Adiciona um método não enumerável extend() em Object.prototype.
 * Este método estende o objeto no qual é chamado, copiando propriedades
 * do objeto passado como argumento. Todos os atributos de propriedade são
 * copiados e não apenas o valor da propriedade. Todas as propriedades próprias (mesmo as não
 * enumeráveis) do objeto argumento são copiadas, a não ser que já
 * exista uma propriedade com mesmo nome no objeto de destino.
 */
Object.defineProperty(
  Object.prototype,
  'extend',
  // Define Object.prototype.extend
  {
    writable: true,
    enumerable: false,
    // Torna-o não enumerável
    configurable: true,
    value: function (o) {
      // Seu valor é esta função
      // Obtém todas as props próprias, até as não enumeráveis
      var names = Object.getOwnPropertyNames(o);
      // Itera por elas
      for (var i = 0; i < names.length; i++) {
        // Pula as props que já estão nesse objeto
        if (names[i] in this) continue;
        // Obtém a descrição da propriedade de o
        var desc = Object.getOwnPropertyDescriptor(o, names[i]);
        // A utiliza para criar propriedade em this
        Object.defineProperty(this, names[i], desc);
      }
    },
  }
);
