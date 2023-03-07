// usando if
var theNumber = Number(prompt('Pick a number', ''));

if (!isNaN(theNumber))
  alert('Your number is the square root of ' + theNumber * theNumber);

// usando if/ else
var theNumber = Number(prompt('Pick a number', ''));

if (!isNaN(theNumber))
  alert('Your number is the square root of ' + theNumber * theNumber);
else alert("Hey. Why didn't you give me a number?");

// encadeando if else com mais de dois argumentos
var num = Number(prompt('Pick a number', '0'));

if (num < 10) alert('Small');
else if (num < 100) alert('Medium');
else alert('Large');
