// O restante deste exemplo é código JavaScript na marca <script> a seguir
// Normalmente, este script ficaria na marca <head> do documento acima, mas
// é mais fácil entendê-lo aqui, depois de ter visto seu contexto HTML.

'use strict'; // Usa o modo restrito da ECMAScript 5 nos navegadores que o suportam
/*
 * Este script define a função calculate() chamada pelas rotinas de tratamento de evento
 * no código HTML acima. A função lê valores de elementos <input>, calcula
 * as informações de pagamento de empréstimo, exibe o resultado em elementos <span>.
 * Também salva os dados do usuário, exibe links para financeiras e desenha um gráfico.
 */
function calculate() {
  // Pesquisa os elementos de entrada e saída no documento
  var amount = document.getElementById('amount');
  var apr = document.getElementById('apr');
  var years = document.getElementById('years');
  var zipcode = document.getElementById('zipcode');
  var payment = document.getElementById('payment');
  var total = document.getElementById('total');
  var totalinterest = document.getElementById('totalinterest');
  // Obtém a entrada do usuário através dos elementos de entrada. Presume que tudo isso
  // é válido.
  // Converte os juros de porcentagem para decimais e converte de taxa
  // anual para taxa mensal. Converte o período de pagamento em anos
  // para o número de pagamentos mensais.
  var principal = parseFloat(amount.value);
  var interest = parseFloat(apr.value) / 100 / 12;
  var payments = parseFloat(years.value) * 12;
  // Agora calcula o valor do pagamento mensal.
  var x = Math.pow(1 + interest, payments); // Math.pow() calcula potências
  var monthly = (principal * x * interest) / (x - 1);
  // Se o resultado é um número finito, a entrada do usuário estava correta e
  // temos resultados significativos para exibir
  if (isFinite(monthly)) {
    // Preenche os campos de saída, arredondando para 2 casas decimais
    payment.innerHTML = monthly.toFixed(2);
    total.innerHTML = (monthly * payments).toFixed(2);
    totalinterest.innerHTML = (monthly * payments - principal).toFixed(2);
    // Salva a entrada do usuário para que possamos recuperá-la na próxima vez que
    // ele visitar
    save(amount.value, apr.value, years.value, zipcode.value);
    // Anúncio: localiza e exibe financeiras locais, mas ignora erros de rede
    try {
      // Captura quaisquer erros que ocorram dentro destas chaves
      getLenders(amount.value, apr.value, years.value, zipcode.value);
    } catch (e) {
      /* E ignora esses erros */
    }
    // Por fim, traça o gráfico do saldo devedor, dos juros e dos pagamentos do capital;
    chart(principal, interest, monthly, payments);
  } else {
    // O resultado foi Not-a-Number ou infinito, o que significa que a entrada
    // estava incompleta ou era inválida. Apaga qualquer saída exibida anteriormente.
    payment.innerHTML = ''; // Apaga o conteúdo desses elementos
    total.innerHTML = '';
    totalinterest.innerHTML = '';
    chart();
    // Sem argumentos, apaga o gráfico
  }
}
// Salva a entrada do usuário como propriedades do objeto localStorage. Essas
// propriedades ainda existirão quando o usuário visitar no futuro
// Esse recurso de armazenamento não vai funcionar em alguns navegadores (o Firefox, por
// exemplo), se você executar o exemplo a partir de um arquivo local:// URL. Contudo,
// funciona com HTTP.
function save(amount, apr, years, zipcode) {
  if (window.localStorage) {
    // Só faz isso se o navegador suportar
    localStorage.loan_amount = amount;
    localStorage.loan_apr = apr;
    localStorage.loan_years = years;
    localStorage.loan_zipcode = zipcode;
  }
}
// Tenta restaurar os campos de entrada automaticamente quando o documento é carregado
// pela primeira vez.
window.onload = function () {
  // Se o navegador suporta localStorage e temos alguns dados armazenados
  if (window.localStorage && localStorage.loan_amount) {
    document.getElementById('amount').value = localStorage.loan_amount;
    document.getElementById('apr').value = localStorage.loan_apr;
    document.getElementById('years').value = localStorage.loan_years;
    document.getElementById('zipcode').value = localStorage.loan_zipcode;
  }
};
// Passa a entrada do usuário para um script no lado do servidor que (teoricamente) pode
// retornar
// uma lista de links para financeiras locais interessadas em fazer empréstimos. Este
// exemplo não contém uma implementação real desse serviço de busca de financeiras. Mas
// se o serviço existisse, essa função funcionaria com ele.
function getLenders(amount, apr, years, zipcode) {
  // Se o navegador não suporta o objeto XMLHttpRequest, não faz nada
  if (!window.XMLHttpRequest) return;
  // Localiza o elemento para exibir a lista de financeiras
  var ad = document.getElementById('lenders');
  if (!ad) return; // Encerra se não há ponto de saída
  // Codifica a entrada do usuário como parâmetros de consulta em um URL
  var url =
    'getLenders.php' +
    // Url do serviço mais
    '?amt=' +
    encodeURIComponent(amount) +
    // dados do usuário na string
    // de consulta
    '&apr=' +
    encodeURIComponent(apr) +
    '&yrs=' +
    encodeURIComponent(years) +
    '&zip=' +
    encodeURIComponent(zipcode);
  // Busca o conteúdo desse URL usando o objeto XMLHttpRequest
  var req = new XMLHttpRequest(); // Inicia um novo pedido
  req.open('GET', url);
  // Um pedido GET da HTTP para o url
  req.send(null);
  // Envia o pedido sem corpo
  // Antes de retornar, registra uma função de rotina de tratamento de evento que será
  // chamada em um momento posterior, quando a resposta do servidor de HTTP chegar.
  // Esse tipo de programação assíncrona é muito comum em JavaScript do lado do
  // cliente.
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      // Se chegamos até aqui, obtivemos uma resposta HTTP válida e completa
      var response = req.responseText;
      // Resposta HTTP como string
      var lenders = JSON.parse(response); // Analisa em um array JS
      // Converte o array de objetos lender em uma string HTML
      var list = '';
      for (var i = 0; i < lenders.length; i++) {
        list +=
          "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + '</a>';
      }
      // Exibe o código HTML no elemento acima.
      ad.innerHTML = '<ul>' + list + '</ul>';
    }
  };
}
// Faz o gráfico do saldo devedor mensal, dos juros e do capital em um elemento <canvas>
// da HTML.
// Se for chamado sem argumentos, basta apagar qualquer gráfico desenhado anteriormente.
function chart(principal, interest, monthly, payments) {
  var graph = document.getElementById('graph');
  // Obtém a marca <canvas>
  graph.width = graph.width;
  // Mágica para apagar e redefinir o elemento
  // canvas
  // Se chamamos sem argumentos ou se esse navegador não suporta
  // elementos gráficos em um elemento <canvas>, basta retornar agora.
  if (arguments.length == 0 || !graph.getContext) return;
  // Obtém o objeto "contexto" de <canvas> que define a API de desenho
  var g = graph.getContext('2d'); // Todo desenho é feito com esse objeto
  var width = graph.width,
    height = graph.height;
  // Obtém o tamanho da tela de
  // desenho
  // Essas funções convertem números de pagamento e valores monetários em pixels
  function paymentToX(n) {
    return (n * width) / payments;
  }
  function amountToY(a) {
    return height - (a * height) / (monthly * payments * 1.05);
  }
  // Os pagamentos são uma linha reta de (0,0) a (payments, monthly*payments)
  g.moveTo(paymentToX(0), amountToY(0));
  // Começa no canto inferior esquerdo
  g.lineTo(
    paymentToX(payments),
    // Desenha até o canto superior direito
    amountToY(monthly * payments)
  );
  g.lineTo(paymentToX(payments), amountToY(0));
  // Para baixo, até o canto
  // inferior direito
  g.closePath();
  // E volta ao início
  g.fillStyle = '#f88';
  // Vermelho-claro
  g.fill();
  // Preenche o triângulo
  g.font = 'bold 12px sans-serif';
  // Define uma fonte
  g.fillText('Total Interest Payments', 20, 20);
  // Desenha texto na legenda
  // O capital acumulado não é linear e é mais complicado de representar no gráfico
  var equity = 0;
  g.beginPath();
  // Inicia uma nova figura
  g.moveTo(paymentToX(0), amountToY(0));
  // começando no canto inferior
  // esquerdo
  for (var p = 1; p <= payments; p++) {
    // Para cada pagamento, descobre quanto é o juro
    var thisMonthsInterest = (principal - equity) * interest;
    equity += monthly - thisMonthsInterest;
    // O resto vai para o capital
    g.lineTo(paymentToX(p), amountToY(equity));
    // Linha até este ponto
  }
  g.lineTo(paymentToX(payments), amountToY(0));
  // Linha de volta para o eixo X
  g.closePath();
  // E volta para o ponto inicial
  g.fillStyle = 'green';
  // Agora usa tinta verde
  g.fill();
  // E preenche a área sob a curva
  g.fillText('Total Equity', 20, 35);
  // Rotula em verde
  // Faz laço novamente, como acima, mas representa o saldo devedor como uma linha
  // preta grossa no gráfico
  var bal = principal;
  g.beginPath();
  g.moveTo(paymentToX(0), amountToY(bal));
  for (var p = 1; p <= payments; p++) {
    var thisMonthsInterest = bal * interest;
    bal -= monthly - thisMonthsInterest;
    // O resto vai para o capital
    g.lineTo(paymentToX(p), amountToY(bal)); // Desenha a linha até esse ponto
  }
  g.lineWidth = 3;
  // Usa uma linha grossa
  g.stroke();
  // Desenha a curva do saldo
  g.fillStyle = 'black';
  // Troca para texto preto
  g.fillText('Loan Balance', 20, 50);
  // Entrada da legenda
  // Agora faz marcações anuais e os números de ano no eixo X
  g.textAlign = 'center';
  // Centraliza o texto nas
  // marcas
  var y = amountToY(0);
  // Coordenada Y do eixo X
  for (var year = 1; year * 12 <= payments; year++) {
    // Para cada ano
    var x = paymentToX(year * 12);
    // Calcula a posição da marca
    g.fillRect(x - 0.5, y - 3, 1, 3);
    // Desenha a marca
    if (year == 1) g.fillText('Year', x, y - 5);
    // Rotula o eixo
    if (year % 5 == 0 && year * 12 !== payments)
      g.fillText(String(year), x, y - 5);
    // Numera cada 5 anos
  }
  // Marca valores de pagamento ao longo da margem direita
  g.textAlign = 'right';
  // Alinha o texto à direita
  g.textBaseline = 'middle';
  // Centraliza verticalmente
  var ticks = [monthly * payments, principal]; // Os dois pontos que marcaremos
  var rightEdge = paymentToX(payments);
  // Coordenada X do eixo Y
  for (var i = 0; i < ticks.length; i++) {
    // Para cada um dos 2 pontos
    var y = amountToY(ticks[i]);
    // Calcula a posição Y da marca
    g.fillRect(rightEdge - 3, y - 0.5, 3, 1);
    // Desenha a marcação
    g.fillText(
      String(ticks[i].toFixed(0)), // E a rotula.
      rightEdge - 5,
      y
    );
  }
}
