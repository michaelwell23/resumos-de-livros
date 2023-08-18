function map(i, f) { // Um gerador que gera f(x) para cada elemento de i
  for(let x in i) yield f(x);
  }

  let h = (f(x) for (x in g));

  let lines = eachline(text);
let trimmed = (l.trim() for (l in lines));
let nonblank = (l for (l in trimmed) if (l.length > 0 && l[0]!='#'));