// Se quiser determinar se um objeto é um verdadeiro objeto função (e tem métodos de função), pode testar seu atributo classe (Seção 6.8.2) usando a técnica mostrada no Exemplo 6-4:
function isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}
