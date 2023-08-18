var o = { x: 1 };
'x' in o;
// verdadeiro: o tem uma propriedade própria "x"
'y' in o;
// falso: o não tem uma propriedade "y"
'toString' in o; // verdadeiro: o herda uma propriedade toString

var o = { x: 1 };
o.hasOwnProperty('x'); // verdadeiro: o tem uma propriedade própria x
o.hasOwnProperty('y'); // falso: o não tem uma propriedade y
o.hasOwnProperty('toString'); // falso: toString é uma propriedade herdada

var o = inherit({ y: 2 });
o.x = 1;
o.propertyIsEnumerable('x');
// verdadeiro: o tem uma propriedade própria enumerável x
o.propertyIsEnumerable('y');
// falso: y é herdada e não própria
Object.prototype.propertyIsEnumerable('toString');
// falso: não enumerável

var o = { x: 1 };
o.x !== undefined;
// verdadeiro: o tem uma propriedade x

o.y !== undefined; // falso: o não tem uma propriedade y
o.toString !== undefined; // verdadeiro: o herda uma propriedade toString

var o = { x: undefined }; // A propriedade é configurada explicitamente como undefined
o.x !== undefined; // falso: a propriedade existe, mas é undefined
o.y !== undefined; // falso: a propriedade nem mesmo existe
'x' in o; // verdadeiro: a propriedade existe
'y' in o; // falso: a propriedade não existe
delete o.x; // Exclui a propriedade x
'x' in o; // falso: ela não existe mais

// Se o tem uma propriedade x cujo valor não é null ou undefined, duplica-o.
if (o.x != null) o.x *= 2;
// Se o tem uma propriedade x cujo valor não é convertido em false, duplica-o.
// Se x é undefined, null, false, "", 0 ou NaN, deixa-a como está.
if (o.x) o.x *= 2;
