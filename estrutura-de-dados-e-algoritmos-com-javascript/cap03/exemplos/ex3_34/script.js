let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

console.log(
  names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  })
);

names.sort((a, b) => a.localeCompare(b));

// Usando localeCompare
const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));
