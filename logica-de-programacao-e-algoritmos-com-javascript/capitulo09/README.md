# CAPÍTULO 09 - INSERIR ELEMENTOS HTML VIA JAVASCRIPT

Para ampliar a interação com o usuário, veremos como inserir elementos HTML na página, modificar suas propriedades, estilos, bem como remover esses elementos. Depois de o usuário interagir com os dados da página, é possível enviar esses dados para Web Services ou uma API. O processo de utilizar um código JavaScript para auxiliar na composição do layout de uma página HTML pode conter outros inúmeros exemplos. Para “mergulhar” nesse contexto, é necessário entender a forma utilizada pela linguagem HTML para organizar a estrutura dos elementos (tags) que compõem uma página.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Lógica de Programação e Algoritmos com JavaScript</title>
  </head>
  <body>
    <h1>Capítulo 9</h1>
    <p>Inserir Elementos HTML via JavaScript</p>
    <div id="quadro1" style="display: inline-block">
      <img src="img/fig1.jpg" alt="Paisagem 1" />
      <p>Detalhes da Figura 1</p>
    </div>
    <div id="quadro2" style="display: inline-block">
      <img src="img/fig2.jpg" alt="Paisagem 2" />
      <p>Detalhes da Figura 2</p>
    </div>
  </body>
</html>
```

Os elementos HTML que compões uma página são organizados pelo navegador na memória principal da máquina como uma estrutura hierárquica semelhante a uma árvore genealógica de uma família. A convenção HTML utilizada para representar os componentes de uma página é chamada de DOM ou modelo de objeto do documento.

Se observarmos, a tag HTML se comporta como “pai” das tags `head` e `body`, por sua vez, tem como "filhas" as tags h1 , p e as divs. Cada div tem duas tags filhas, img e p. Em JavaScript, para inserir uma nova tag HTML na página, deve-se criar uma referência ao elemento pai, e adicionar a ele um filho.

![EX9_0](/.github/cap09/ex9_0.png);
