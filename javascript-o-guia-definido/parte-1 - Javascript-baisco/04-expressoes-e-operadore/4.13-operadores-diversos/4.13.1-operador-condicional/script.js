x > 0 ? x : -x; // O valor absoluto de x

greeting = 'hello ' + (username ? username : 'there');

greeting = 'hello ';
if (username) greeting += username;
else greeting += 'there';
