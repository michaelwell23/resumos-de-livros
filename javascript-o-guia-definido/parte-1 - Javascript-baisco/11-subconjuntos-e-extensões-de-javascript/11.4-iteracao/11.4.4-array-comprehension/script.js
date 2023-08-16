let evensquares = [x*x for (x in range(0,10)) if (x % 2 === 0)]

let evensquares2 = [];
for (x in range(0, 10)) {
  if (x % 2 === 0) evensquares2.push(x * x);
}

data = [2,3,4, -5];
// Um array de números
squares = [x*x for each (x in data)];
// O quadrado de cada um: [4,9,16,25]
// Agora tira a raiz quadrada de cada elemento não negativo
roots = [Math.sqrt(x) for each (x in data) if (x >= 0)]
// Agora vamos criar arrays de nomes de propriedade de um objeto
o = {a:1, b:2, f: function(){}}
let allkeys = [p for (p in o)]
let ownkeys = [p for (p in o) if (o.hasOwnProperty(p))]
let notfuncs = [k for ([k,v] in Iterator(o)) if (typeof v !== "function")]