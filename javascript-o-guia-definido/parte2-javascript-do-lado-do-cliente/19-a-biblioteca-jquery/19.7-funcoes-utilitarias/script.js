if ($.browser.mozilla && parseInt($.browser.version) < 4) {
  // Contorna um hipotético erro do Firefox aqui...
}

var clone = jQuery.extend({}, original);
var options = jQuery.extend({}, default_options, user_options);
