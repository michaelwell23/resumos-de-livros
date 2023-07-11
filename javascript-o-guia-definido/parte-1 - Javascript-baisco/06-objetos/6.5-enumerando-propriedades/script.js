var o = { x: 1, y: 2, z: 3 }; // Três propriedades próprias enumeráveis
o.propertyIsEnumerable('toString'); // => falso: não enumerável
for (p in o); // Itera pelas propriedades
console.log(p); // Imprime x, y e z, mas não toString

for (p in o) {
  if (!o.hasOwnProperty(p)) continue; // Pula as propriedades herdadas
}

for (p in o) {
  if (typeof o[p] === 'function') continue; // Pula os métodos
}

/*
 * Copia as propriedades enumeráveis de p em o e retorna o.
 * Se o e p têm uma propriedade de mesmo nome, a propriedade de o é sobrescrita.
 * Esta função não manipula métodos getter e setter nem copia atributos.
 */
function extend(o, p) {
  for (prop in p) {
    // Para todas as props em p.
    o[prop] = p[prop];
    // Adiciona a propriedade em o.
  }
  return o;
}
/*
 * Copia as propriedades enumeráveis de p em o e retorna o.
 * Se o e p têm uma propriedade de mesmo nome, a propriedade de o é deixada intacta.
 * Esta função não manipula métodos getter e setter nem copia atributos.
 */
function merge(o, p) {
  for (prop in p) {
    // Para todas as props em p.
    if (o.hasOwnProperty[prop]) continue;
    // Exceto as que já estão em o.
    o[prop] = p[prop];
    // Adiciona a propriedade em o.
  }
  return o;
}
/*
 * Remove as propriedades de o se não existe uma propriedade com o mesmo nome em p.
 * Retorna o.
 */
function restrict(o, p) {
  for (prop in o) {
    // Para todas as props em o
    if (!(prop in p)) delete o[prop];
    // Exclui se não estiver em p
  }
  return o;
}
/*
 * Para cada propriedade de p, exclui de o a propriedade de mesmo nome.
 * Retorna o.
 */
function subtract(o, p) {
  for (prop in p) {
    delete o[prop];
  }
  return;
}

/*
 * Retorna um novo objeto contendo as propriedades de o e p.
 * Se o e p têm propriedades de mesmo nome, os valores de p são usados.
 */
function union(o, p) {
  return extend(extend({}, o), p);
}
/*
 * Retorna um novo objeto contendo apenas as propriedades de o que também aparecem
 * em p. Isso é como a interseção de o e p, mas os valores das
 * propriedades em p são descartados
 */
function intersection(o, p) {
  return restrict(extend({}, o), p);
}
/*
 * Retorna um array contendo os nomes das propriedades próprias enumeráveis de o.
 */
function keys(o) {
  if (typeof o !== 'object') throw TypeError();
  // Argumento object exigido
  var result = [];
  // O array que retornaremos
  for (var prop in o) {
    // Para todas as propriedades enumeráveis
    if (o.hasOwnProperty(prop))
      // Se for uma propriedade própria
      result.push(prop);
    // a adiciona no array.
  }
  return result;
  // Retorna o array.
}
