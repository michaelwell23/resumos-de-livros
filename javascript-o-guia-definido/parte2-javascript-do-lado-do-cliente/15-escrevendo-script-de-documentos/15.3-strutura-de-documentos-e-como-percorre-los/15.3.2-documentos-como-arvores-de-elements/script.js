/**
 * Retorna o n-ésimo ascendente de e, ou null se não existe tal ascendente
 * ou, se esse ascendente não é um Element (um Document ou DocumentFragment, por
 * exemplo).
 * Se n é 0, retorna o próprio e. Se n é 1 (ou
 * é omitido), retorna o pai. Se n é 2, retorna o avô, etc.
 */
function parent(e, n) {
  if (n === undefined) n = 1;
  while (n-- && e) e = e.parentNode;
  if (!e || e.nodeType !== 1) return null;
  return e;
}
/**
 * Retorna o n-ésimo elemento irmão do Element e.
 * Se n é positivo, retorna o n-ésimo próximo elemento irmão.
 * Se n é negativo, retorna o n-ésimo elemento irmão anterior.
 * Se n é zero, retorna o próprio e.
 */
function sibling(e, n) {
  while (e && n !== 0) {
    // Se e não está definido, apenas o retornamos
    if (n > 0) {
      // Localiza o próximo irmão do elemento
      if (e.nextElementSibling) e = e.nextElementSibling;
      else {
        for (
          e = e.nextSibling;
          e && e.nodeType !== 1;
          e = e.nextSibling
          /* laço vazio */
        );
      }
      n--;
    } else {
      // Localiza o irmão anterior do elemento
      if (e.previousElementSibing) e = e.previousElementSibling;
      else {
        for (
          e = e.previousSibling;
          e && e.nodeType !== 1;
          e = e.previousSibling
          /* laço vazio */
        );
      }
      n++;
    }
  }
  return e;
}

/**
 * Retorna o n-ésimo elemento filho de e, ou null se ele não tem um.
 * Valores negativos de n contam a partir do final. 0 significa o primeiro filho, mas
 * -1 significa o último filho, -2 significa o penúltimo e assim por diante.
 */
function child(e, n) {
  if (e.children) {
    // Se o array children existe
    if (n < 0) n += e.children.length;
    // Converte n negativo no índice do array
    if (n < 0) return null;
    // Se ainda é negativo, nenhum filho
    return e.children[n];
    // Retorna o filho especificado
  }
  // Se e não tem um array de filhos, localiza o primeiro filho e conta
  // para frente ou localiza o último filho e conta para trás a partir de lá.
  if (n >= 0) {
    // n é não negativo: conta para frente a partir do primeiro filho
    // Localiza o primeiro elemento filho de e
    if (e.firstElementChild) e = e.firstElementChild;
    else {
      for (
        e = e.firstChild;
        e && e.nodeType !== 1;
        e = e.nextSibling
        /* vazio */
      );
    }
    return sibling(e, n); // Retorna o n-ésimo irmão do primeiro filho
  } else {
    // n é negativo; portanto, conta para trás a partir do fim
    if (e.lastElementChild) e = e.lastElementChild;
    else {
      for (
        e = e.lastChild;
        e && e.nodeType !== 1;
        e = e.previousSibling
        /* vazio */
      );
    }
    return sibling(e, n + 1); // +1 para converter filho -1 para irmão 0 do último
  }
}
