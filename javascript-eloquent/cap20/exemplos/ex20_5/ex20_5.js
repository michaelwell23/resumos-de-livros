var figlet = require('figlet');
figlet.text('Hello world!', function (error, data) {
  if (error) console.error(error);
  else console.log(data);
});
