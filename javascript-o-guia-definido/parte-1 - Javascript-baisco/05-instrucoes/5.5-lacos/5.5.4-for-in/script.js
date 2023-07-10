// for (variavle in objeto) instrução

// for normal para iterar pelos elementos de um array:
for (
  var i = 0;
  i < a.length;
  i++ // Atribui índices do array à variável i
)
  console.log(a[i]); // Imprime o valor de cada elemento do array

// O laço for/in torna fácil fazer o mesmo para as propriedades de um objeto:
for (var p in o) // Atribui nomes de propriedade de o à variável p
  console.log(o[p]); // Imprime o valor de cada propriedade

// copiar os nomes de todas as propriedades de objeto em um array:
var o = { x: 1, y: 2, z: 3 };
var a = [],
  i = 0;
for (a[i++] in o /* vazio */);

// Acrecentando essa linha a seguir no código anterior enumera os índices 0, 1 e 2 do array:
for (i in a) console.log(i);
