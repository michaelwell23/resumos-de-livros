// A maneira mais comum de iterar através dos elementos de um array é com um laço for.
var keys = Object.keys(o); // Obtém um array de nomes de propriedade do objeto o
var values = []; // Armazena os valores de propriedade correspondentes nesse array
for (var i = 0; i < keys.length; i++) {
  // Para cada índice no array
  var key = keys[i];
  // Obtém a chave nesse índice
  values[i] = o[key];
  // Armazena o valor no array values
}

// laço de iteração básico de array otimizado, de modo que o comprimento do array é pesquisado apenas uma vez, em vez de a cada iteração
for (var i = 0, len = keys.length; i < len; i++) {
  // o corpo do laço permanece o mesmo
}

// excluindo elementos null , undefined e inexistentes
for (var i = 0; i < a.length; i++) {
  if (!a[i]) continue; // Pula elementos null, undefined e inexistentes
  // corpo do laço aqui
}

// pulando apenas os elementos indefinidos e inexistentes
for (var i = 0; i < a.length; i++) {
  if (a[i] === undefined) continue; // Pula elementos indefinidos + inexistentes
  // corpo do laço aqui
}

// pulando apenas os índices para os quais não existe qualquer elemento no array, mas ainda manipulando os elementos indefinidos existentes, faça isto:
for (var i = 0; i < a.length; i++) {
  if (!(i in a)) continue; // Pula os elementos inexistentes
  // corpo do laço aqui
}

// O laço for/in (Seção 5.5.4) também pode ser usado com arrays esparsos. Esse laço atribui nomes de propriedade enumeráveis (incluindo índices de array) à variável de laço, um por vez. Os índices que não existem não são iterados:
for (var index in sparseArray) {
  var value = sparseArray[index];
  // Agora faz algo com index e value
}

// laço for/in pode retornar os nomes de propriedades herdadas, como os nomes de métodos que foram adicionados a Array.prototype . Por isso, não se deve usar um laço for/in em um array, a não ser que seja incluído um teste adicional para filtrar as propriedades indesejadas.
for (var i in a) {
  if (!a.hasOwnProperty(i)) continue;
  // corpo do laço aqui
}
// Pula as propriedades herdadas
for (var i in a) {
  // Pula i se não for um inteiro não negativo
  if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;
}

// ECMAScript 5 define vários métodos novos para iterar por elementos de array, passando cada um, na ordem do índice, para uma função definida por você. O método forEach() é o mais geral deles:
var data = [1, 2, 3, 4, 5]; // Este é o array pelo qual queremos iterar
var sumOfSquares = 0; // Queremos calcular a soma dos quadrados de data
data.forEach(function (x) {
  // Passa cada elemento de data para essa função soma os quadrados
  sumOfSquares += x * x;
});
sumOfSquares; // =>55 : 1+4+9+16+25
