function reflect(value) {
  return value;
}
// é o mesmo que:
var reflect = new Function('value', 'return value;');
