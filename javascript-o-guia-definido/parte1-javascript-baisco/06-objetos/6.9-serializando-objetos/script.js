o = { x: 1, y: { z: [false, null, ''] } }; // Define um objeto de teste
s = JSON.stringify(o); // s é '{"x":1,"y":{"z":[false,null,""]}}'
p = JSON.parse(s); // p é uma cópia profunda de o
