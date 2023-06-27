//Oculta o elemento e faz script de seu estilo
function hide(e, reflow) {
  if (reflow) {
    // Se o 2º argumento é verdadeiro
    e.style.diplay = 'none'; // oculta o elemento e utiliza seu espaço
  } else {
    // caso contrário
    e.style.visivility = 'hidden'; // torna e invisivel, mas deixa seu espaço
  }
}
