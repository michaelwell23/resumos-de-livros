var socket = new WebSocket('ws://ws.example.com:1234/resource');

socket.onopen = function (e) {
  /* Agora o soquete está conectado. */
};
socket.onclose = function (e) {
  /* O soquete fechado. */
};
socket.onerror = function (e) {
  /* Algo de errado. */
};
socket.onmessage = function (e) {
  var message = e.data; /* O servidor nos enviou uma mensagem. */
};

socket.send('Hello, server!');
