var then = new Date(2010, 0, 1); // O 1º dia do 1º mês de 2010
var later = new Date(2010, 0, 1, 17, 10, 30); // O mesmo dia, às 5:10:30 da tarde, horário local
var now = new Date(); // A data e hora atuais

later.getFullYear(); // => 2010
later.getMonth(); // => 0: Meses com base em zero
later.getDate(); // => 1: dias com base em um
later.getDay(); // => 5: dia da semana. 0 é domingo, 5 é sexta-feita.
later.getHours(); // => 17: 5 da tarde, horário local
later.getUTCHours(); // => Horas em UTC; dependen do fuso horário
