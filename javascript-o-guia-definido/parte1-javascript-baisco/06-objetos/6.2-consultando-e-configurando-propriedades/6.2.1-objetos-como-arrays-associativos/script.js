object.property;
object['property'];

var addr = '';
for (i = 0; i < 4; i++) addr += customer['address' + i] + '\n';

function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares;
}

function getvalue(portfolio) {
  var total = 0.0;
  for (stock in portfolio) {
    // Para cada ação no portfólio:
    var shares = portfolio[stock]; // obtém o número de quotas
    var price = getquote(stock); // pesquisa o preço da quota
    total += shares * price; // soma o valor da ação no valor total
  }
  return total; // Retorna o valor total.
}
