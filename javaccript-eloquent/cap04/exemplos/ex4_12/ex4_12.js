function noArguments() {}
noArguments(1, 2, 3); // This is okay

function threeArguments(a, b, c) {}
threeArguments(); // And so is this

// =================================
function argumentCounter() {
  console.log('You gave me', arguments.length, 'arguments.');
}

argumentCounter('Straw man', 'Tautology', 'Ad hominem'); // → You gave me 3 arguments.

// ==== EXEMPLO DE ENTRADA NO DIÁRIO DO JACQUES ====
// addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);

// ========= ALTERNATIVA SIMPLES DE ENVIO DE PARÂMETROS =============
const journal = [];

function addEntry(squirrel) {
  var entry = { events: [], squirrel: squirrel };
  for (var i = 1; i < arguments.length; i++) entry.events.push(arguments[i]);
  journal.push(entry);
}
addEntry(true, 'work', 'touched tree', 'pizza', 'running', 'television');
