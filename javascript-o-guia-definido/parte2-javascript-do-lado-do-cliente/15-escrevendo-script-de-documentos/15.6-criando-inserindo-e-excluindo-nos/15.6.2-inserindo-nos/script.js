// Insere o nó filho no pai de modo a se tornar o nó filho n
function insertAt(parent, child, n) {
  if (n < 0 || n > parent.childNodes.length) throw new Error('invalid index');
  else if (n == parent.childNodes.length) parent.appendChild(child);
  else parent.insertBefore(child, parent.childNodes[n]);
}

// Classifica as linhas no primeiro <tbody> da tabela especificada, de acordo com
// o valor da n-ésima célula dentro de cada linha. Usa a função comparator
// se uma estiver especificada. Caso contrário, compara os valores alfabeticamente.
function sortrows(table, n, comparator) {
  var tbody = table.tBodies[0];
  // Primeiro <tbody>; pode ser criado implicitamente
  var rows = tbody.getElementsByTagName('tr'); // Todas as linhas no tbody
  rows = Array.prototype.slice.call(rows, 0); // Instantâneo em um array real
  // Agora classifica as linhas com base no texto do n-ésimo elemento <td>
  rows.sort(function (row1, row2) {
    var cell1 = row1.getElementsByTagName('td')[n]; // Obtém a n-ésima célula
    var cell2 = row2.getElementsByTagName('td')[n]; // das duas linhas
    var val1 = cell1.textContent || cell1.innerText; // Obtém conteúdo do texto
    var val2 = cell2.textContent || cell2.innerText; // das duas células
    if (comparator) return comparator(val1, val2);
    // Compara-os!
    if (val1 < val2) return -1;
    else if (val1 > val2) return 1;
    else return 0;
  });

  // Agora anexa as linhas no tbody, em sua ordem classificada.
  // Isso as move automaticamente de sua posição atual; portanto, não há
  // necessidade de removê-las primeiro. Se o <tbody> contiver quaisquer
  // nós que não sejam elementos <tr>, esses nós vão flutuar para o topo.
  for (var i = 0; i < rows.length; i++) tbody.appendChild(rows[i]);
}
// Localiza os elementos <th> da tabela (supondo que exista apenas uma linha deles)
// e os torna clicáveis para que um clique em um cabeçalho de coluna classifique
// por essa coluna.
function makeSortable(table) {
  var headers = table.getElementsByTagName('th');
  for (var i = 0; i < headers.length; i++) {
    (function (n) {
      // Função aninhada para criar um escopo local
      headers[i].onclick = function () {
        sortrows(table, n);
      };
    })(i);
    // Atribui o valor de i à variável local n
  }
}
