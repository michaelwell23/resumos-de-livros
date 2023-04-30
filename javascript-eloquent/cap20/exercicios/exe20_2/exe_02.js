function urlToPath(url) {
  var path = require('url').parse(url).pathname;
  var result = '.' + decodeURIComponent(path);
  for (;;) {
    var simplified = result.replace(/(\/|\\)\.\.(\/|\\|$)/, '/');
    if (simplified == result) return result;
    result = simplified;
  }
}
