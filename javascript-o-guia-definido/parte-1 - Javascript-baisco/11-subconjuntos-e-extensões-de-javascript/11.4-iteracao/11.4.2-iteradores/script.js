// a seguir, por exemplo, retorna um iterador que retorna inteiros sucessi- vamente maiores a cada chamada de next(). Observe o uso do escopo de função como uma closure que contém o estado atual do contador:

// Uma função que retorna um iterator;
function counter(start) {
  let nextValue = Math.round(start); // Estado privado do iterator
  return {
    // Retorna o obj iterator
    next: function () {
      return nextValue++;
    },
  };
}
let serialNumberGenerator = counter(1000);
let sn1 = serialNumberGenerator.next(); // 1000
let sn2 = serialNumberGenerator.next(); // 1001

// Aqui, por exemplo, está um método rangeIter() que retorna um iterador que itera os inteiros em determinado intervalo:
// Uma função que retorna um iterador de um intervalo de inteiros
function rangeIter(first, last) {
  let nextValue = Math.ceil(first);
  return {
    next: function () {
      if (nextValue > last) throw StopIteration;
      return nextValue++;
    },
  };
}
// Uma iteração estranha usando o iterador de intervalo.
let r = rangeIter(1,5); // Obtém um objeto iterador
while(true) { // Agora o utiliza em um laço
try {
 console.log(r.next()); // Tenta chamar seu método next()
}
catch(e) {
  if (e == StopIteration) break; // Sai do laço em StopIteration
    else throw e;
  }
}

// O código a seguir define uma função range() que retorna um objeto iterável (não um iterador) que representa um intervalo de inteiros. Observe como é muito mais fácil  usar um laço for/in com um intervalo iterável do que usar um laço while com um iterador de intervalo.
// Retorna um objeto iterável que representa um intervalo inclusivo de números
function range(min, max) {
  return {
    // Retorna um objeto representando um intervalo.
    get min() {
      return min;
    },
    // Os limites do intervalo são imutáveis.
    get max() {
      return max;
    },
    // e armazenados na closure.
    includes: function (x) {
      // Os intervalos podem testar a participação como membro.
      return min <= x && x <= max;
    },
    toString: function () {
      // Os intervalos têm uma representação de string.
      return '[' + min + ',' + max + ']';
    },
    __iterator__: function () {
      // Os inteiros em um intervalo são iteráveis.
      let val = Math.ceil(min); // Armazena a posição atual na closure.
      return {
        // Retorna um objeto iterador.
        next: function () {
          // Retorna o próximo inteiro no intervalo.
          if (val > max)
            // Se passamos do final, paramos.
            throw StopIteration;
          return val++;
          // Caso contrário, retorna o próximo e incrementa.
        },
      };
    },
  };
}
// Aqui está como podemos iterar em um intervalo:
for (let i in range(1, 10)) console.log(i);
// Imprime números de 1 a 10


for(let [k,v] in Iterator({a:1,b:2})) // Itera chaves e valores
console.log(k + "=" + v); // Imprime "a=1" e "b=2"

o = {x:1, y:2} // Um objeto com duas propriedades
Object.prototype.z = 3; // Agora todos os objetos herdam z
for(p in o) console.log(p); // Imprime "x", "y" e "z"
for(p in Iterator(o, true)) console.log(p); // Imprime somente "x" e "y"