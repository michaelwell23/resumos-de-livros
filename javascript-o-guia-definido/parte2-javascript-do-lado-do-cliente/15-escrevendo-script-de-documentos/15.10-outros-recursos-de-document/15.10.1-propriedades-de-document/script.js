if (document.referrer.indexOf('http://www.google.com/search?') == 0) {
  var args = document.referrer.substring(ref.indexOf('?') + 1).split('&');
  for (var i = 0; i < args.length; i++) {
    if (args[i].substring(0, 2) == 'q=') {
      document.write('<p>Welcome Google User. ');
      document.write(
        'You searched for: ' + unescape(args[i].substring(2)).replace('+', ' ')
      );
      break;
    }
  }
}
