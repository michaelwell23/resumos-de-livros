// O método filter() retorna um array contendo um subconjunto dos elementos do array em que é chamado. A função passada para ele deve ser um predicado: uma função que retorna true ou false. O predicado é chamado exatamente como para forEach() e map() . Se o valor de retorno é true ou um valor que se converte em true , então o elemento passado para o predicado é membro do subconjunto e é adicionado no array que se tornará o valor de retorno.
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function (x) {
  return x < 3;
}); // [2, 1]
everyother = a.filter(function (x, i) {
  return i % 2 == 0;
}); // [5, 3, 1]

// Note que filter() pula elementos ausentes em arrays esparsos e que seu valor de retorno é sempre denso. Para fechar as lacunas de um array esparso, você pode fazer o seguinte:
var dense = sparse.filter(function () {
  return true;
});

// E para fechar as lacunas e remover elementos indefinidos e nulos, você pode usar filter como segue:
a = a.filter(function (x) {
  return x !== undefined && x != null;
});
