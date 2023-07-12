function classof(o) {
  if (o === null) return 'Null';
  if (o === undefined) return 'Undefined';
  return Object.prototype.toString.call(o).slice(8, -1);
}

classof(null); // => "Null"
classof(1); // => "Number"
classof(''); // => "String"
classof(false); // => "Boolean"
classof({}); // => "Object"
classof([]); // => "Array"
classof(/./); // => "Regexp"
classof(new Date()); // => "Date"
classof(window); // => "Window" (um objeto hospedeiro do lado do cliente)
function f() {} // Define uma construtora personalizada
classof(new f()); // => "Object"
