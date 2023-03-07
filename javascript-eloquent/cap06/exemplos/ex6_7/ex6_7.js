function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(repeat(' ', width - line.length) + line);
  }
  return result;
};

// ==========================================================

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function (name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function (row) {
    return keys.map(function (name) {
      var value = row[name];
      // This was changed:
      if (typeof value == 'number') return new RTextCell(String(value));
      else return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}
console.log(drawTable(dataTable(MOUNTAINS))); // → … beautifully aligned table
