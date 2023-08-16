let o = {one: 1, two: 2, three: 3}
for(let p in o) console.log(p); // for/in: imprime 'one', 'two', 'three'
for each(let v in o) console.log(v); // for/each: imprime 1, 2, 3

a = ['one', 'two', 'three'];
for(let p in a) console.log(p); // Imprime os índices de array 0, 1, 2
for each (let v in a) console.log(v); // Imprime elementos de array 'one', 'two', 'three'