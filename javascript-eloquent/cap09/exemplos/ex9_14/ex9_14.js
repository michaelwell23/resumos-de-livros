var name = 'harry';
var text = 'Harry is a suspicious character.';
var regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_')); // → _Harry_ is a suspicious character

var name = 'dea+hl[]rd';
var text = 'This dea+hl[]rd guy is quite annoying.';
var escaped = name.replace(/[^\w\s]/g, '\\$&');
var regexp = new RegExp('\\b(' + escaped + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_')); // → This _dea+hl[]rd_ guy is quite annoying.
