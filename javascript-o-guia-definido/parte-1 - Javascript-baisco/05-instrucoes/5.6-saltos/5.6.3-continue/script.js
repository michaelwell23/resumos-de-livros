// A instrução continue é semelhante à instrução break . No entanto, em vez de sair de um laço, continue reinicia um laço na próxima iteração. A sintaxe da instrução continue é tão simples quanto a da instrução break :
// continue;

for (i = 0; i < data.length; i++) {
  if (!data[i]) continue; // Não pode prosseguir com dados indefinidos
  total += data[i];
}
