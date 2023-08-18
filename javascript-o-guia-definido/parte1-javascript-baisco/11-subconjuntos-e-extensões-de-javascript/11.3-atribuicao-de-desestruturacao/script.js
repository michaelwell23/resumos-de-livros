// o atribuições de desestruturação simples usando arrays de valores:
let [x, y] = [1, 2]; // O mesmo que let = x=1, y=2
[x, y] = [x + 1, y + 1]; //  O mesmo que que x = x + 1, y = y+1
[x, y] = [y, x]; //Troca o valor das duas variáveis
console.log([x, y]); //Imprime [3,2]

// a atribuição de desestruturação torna fácil trabalhar com funções que retornam arrays de valores
// Converte coordenadas [x,y] em coordenadas polares [r,theta]
function polar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}
// Converte coordenadas polares em cartesianas
function cartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}
let [r, theta] = polar(1.0, 1.0); // r=Math.sqrt(2), theta=Math.PI/4
let [a, b] = cartesian(r, theta); // x=1.0, y=1.0

// lista de variáveis à esquerda pode incluir vírgulas extras para pular certos valores à direita:
let [c, d] = [1]; // x = 1, y = undefined
[c, d] = [1, 2, 3]; // x = 1, y = 2
[, c, , d] = [1, 2, 3, 4]; // x = 2, y = 4

// "encadeando” atribuições
let first, second, all;
all = [first, second] = [1, 2, 3, 4]; // first=1, second=2, all=[1,2,3,4]

let [one, [twoA, twoB]] = [1, [2, 2.5], 3]; // one=1, twoA=2, twoB=2.5

let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 }; // Uma cor RGBA
let { r: red, g: green, b: blue } = transparent; // red=0.0,green=0.0,blue=0.0

// O mesmo que let sin=Math.sin, cos=Math.cos, tan=Math.tan
let { sin: sin, cos: cos, tan: tan } = Math;

// Uma estrutura de dados aninhada: um objeto que contém um array de objetos
let data = {
  name: 'destructuring assigment',
  type: 'extension',
  impl: [
    { engine: 'spidermonkey', version: 1.7 },
    { engine: 'rhino', version: 1.7 },
  ],
};
// Usa atribuição de desestruturação para extrair quatro valores da estrutura de dados
let(
  ({
    name: feature,
    impl: [{ engine: impl1, version: v1 }, { engine: impl2 }],
  } = data)
);
{
  console.log(feature); // Imprime "destructuring assigment"
  console.log(impl1); // Imprime "spidermonkey"
  console.log(v1); // Imprime 1.7
  console.log(impl2); // Imprime "rhino"
}
