// Carrega e exibe o relatório de status mais recente a cada 60 segundos
setInterval(function () {
  $('#stats').load('status_report.html');
}, 60000);

// Carrega e exibe a parte da previsão do tempo referente à temperatura
$('#temp').load('weather_report.html #temperature');

// Carrega a previsão do tempo para um código postal especificado
$('#temp').load('us_weather_report.html', 'zipcode=02134');
// Aqui, usamos em vez disso um objeto como dados e especificamos graus em Fahrenheit
$('#temp').load('us_weather_report.html', { zipcode: `02134`, units: 'F' });
