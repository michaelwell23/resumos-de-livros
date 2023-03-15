console.log(new Date()); // → Fri Feb 21 2014 09:39:31 GMT-0300 (BRT)

console.log(new Date(2014, 6, 29)); // → Tue Jul 29 2014 00:00:00 GMT-0300 (BRT)
console.log(new Date(1981, 6, 29, 18, 30, 50)); // → Wed Jul 29 1981 18:30:50 GMT-0300 (BRT)

console.log(new Date(2014, 2, 21).getTime()); // → 1395370800000
console.log(new Date(1395370800000)); // → Fri Mar 21 2014 00:00:00 GMT-0300 (BRT)

function buscaData(string) {
  var dateTime = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]), Number(match[2]), Number(match[1]));
}
console.log(buscaData('21/1/2014')); // → Fri Feb 21 2014 00:00:00 GMT-0300 (BRT)
