// return expressão;

// Quando a instrução return é executada, a função que a contém retorna o valor de expressão para sua chamadora. Por exemplo:
function square(x) {
  return x * x; // uma função que tem instrução return
}
square(2); // esta chamada é avaliada com 4

// A instrução return também pode ser usada sem uma expressão, para fazer a função retornar undefined para sua chamadora. Por exemplo:
function display_objeto(o) {
  // Retorna imediatamente se o argumento for null ou undefined.
  if (!o) return;
  // O restante da função fica aqui...
}
