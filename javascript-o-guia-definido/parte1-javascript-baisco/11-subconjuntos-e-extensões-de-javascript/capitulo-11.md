# CAPÍTULO 11 - SUBCONJUNTOS E EXTENSÕES DE JAVASCRIPT

Os subconjuntos foram definidos, de modo geral, por questões de segurança: um script escrito usando apenas um subconjunto seguro da linguagem pode ser executado com segurança, mesmo que seja proveniente de uma fonte não confiável, como um servidor de anúncios. Após uma seção preliminar sobre subconjuntos da linguagem, o restante deste capítulo descreve as extensões. Como não são padronizadas, elas estão documentadas como tutoriais, com menos rigor do que os recursos da linguagem descritos em outras partes do livro.

---

## 11.1 - SUBCONJUNTO DE JAVASCRIPT

A maioria dos subconjuntos da linguagem é definida para permitir a execução segura de código não confiável. Há um interessante subconjunto definido por diferentes motivos. Vamos abordar primeiramente esse e depois vamos ver os subconjuntos seguros da linguagem.

### 11.1.1 - The Good Parts

O livro JavaScript: The Good Parts (O’Reilly), de Douglas Crockford, descreve um subconjunto de JavaScript que consiste nas partes da linguagem que ele considera úteis. O objetivo desse subconjunto é simplificar a linguagem, ocultar peculiaridades e imperfeições e, basicamente, tornar a programação mais fácil e os programas melhores. O subconjunto de Crockford não inclui as instruções with e continue nem a função eval(). Ele define funções usando apenas expressões de definição de função e não inclui a instrução de definição de função. O subconjunto exige que os corpos dos laços e condicionais sejam colocados entre chaves – ele não permite que as chaves sejam omitidas se o corpo consistir em uma única instrução. Qualquer instrução que não termine com uma chave deve ser terminada com um ponto e vírgula. O subconjunto não inclui o operador vírgula, os operadores bit a bit nem os operadores ++ e --. Também não permite == e != por causa da conversão de tipo que fazem, exigindo, em vez disso, o uso de === e !==. Como JavaScript não tem escopo de bloco, o subconjunto de Crockford restringe a instrução var, exigindo que apareça somente no nível superior de um corpo de função e que os programadores declarem todas as variáveis de uma função usando apenas uma instrução var e como a primeira de um corpo de função.

### 11.1.2 - Subconjuntos de segurança

O subconjunto The Good Parts foi projetado por razões estéticas e visando a uma maior produtividade do programador. Os subconjuntos seguros funcionam proibindo todos os recursos e APIs da linguagem que possam permitir ao código escapar de sua caixa de areia e afetar o ambiente de execução global. Cada subconjunto é acoplado a um verificador estático que analisa o código para garantir que corresponda ao subconjunto. Como os subconjuntos da linguagem que podem ser verificados estaticamente tendem a ser muito restritivos, alguns sistemas de caixa de areia definem um subconjunto maior e menos restritivo, e adicionam uma etapa de transformação de código que verifica se o código se ajusta ao subconjunto maior, o transforma para usar um subconjunto menor da linguagem e acrescenta verificações em tempo de execução quando a análise estática do código não é suficiente para garantir a segurança.

---

## 11.2 - CONSTANTES E VARIÁVEIS COM ESCOPO

Em JavaScript 1.5 e posteriores, pode-se usar a palavra-chave const para definir constantes. As constantes são como as variáveis, exceto que as atribuições a elas são ignoradas (a tentativa de alterar uma constante não causa erro) e as tentativas de redeclará-las causam erros. A palavra-chave const se comporta de forma muito parecida com a palavra-chave var: não há escopo de bloco e as constantes são içadas para o início da definição de função circundante. A falta de escopo de bloco para variáveis em JavaScript há tempos é considerada uma deficiência da linguagem, sendo que JavaScript 1.7 trata disso adicionando a palavra-chave let na linguagem. A palavra-chave let pode ser usada de quatro maneiras:

- como uma declaração de variável, como var;
- em um laço for ou for/in , como substituta para var;
- como uma instrução de bloco, para definir novas variáveis e delimitar seu escopo explicitamente; e
- para definir variáveis cujo escopo é uma única expressão.

A forma mais simples de usar let é como uma substituta informal para var . As variáveis declaradas com var são definidas por toda a função circundante. As variáveis declaradas com let são definidas somente dentro do bloco circundante mais próximo. Há uma diferença interessante entre let usada como instrução de declaração e usada como inicializadora de laço. Usada como uma declaração, as expressões inicializadoras de variável são avaliadas no escopo da variável. Mas em um laço for , a expressão inicializadora é avaliada fora do escopo da nova variável. Isso só importa quando a nova variável estiver ocultando uma nova variável de mesmo nome.

---

## 11.3 - ATRIBUIÇÃO DE DESESTRUTURAÇÃO

Em uma atribuição de desestruturação, o valor do lado direito do sinal de igualdade é um array ou objeto (um valor “estruturado”) e o lado esquerdo especifica um ou mais nomes de variável usando uma sintaxe que imita a sintaxe de array e objeto literal. Quando uma atribuição de desestruturação ocorre, um ou mais valores são extraídos (“desestruturados”) do valor da direita e armazenados nas variáveis nomeadas da esquerda. Além de seu uso com o operador de atribuição normal, a atribuição de desestruturação também pode ser usada na inicialização de variáveis recentemente declaradas com var e let. A atribuição de desestruturação é simples e poderosa ao trabalhar com arrays e é especialmente útil com funções que retornam arrays de valores. Contudo, ela pode se tornar confusa e complexa quando usada com objetos e objetos aninhados.

---

## 11.4 - ITERAÇÃO

As extensões de JavaScript do Mozilla introduzem novas técnicas de iteração, incluindo o laço for each e iteradores e geradores estilo Python.

### 11.4.1 O laço for/each

O laço for each é muito parecido com o laço for/in . Contudo, em vez de iterar pelas propriedades de um objeto, ele itera pelos valores dessas propriedades. Quando usado com um array, o laço for/each itera pelos elementos (em vez dos índices) do laço. Normalmente, ele os enumera em ordem numérica, mas isso não é padronizado nem obrigatório. O laço for/each não se limita aos elementos de um array – ele enumera o valor de qualquer propriedade enumerável do array, incluindo métodos enumeráveis herdados pelo array. Por isso, normalmente não é recomendado usar o laço for/each com arrays.

### 11.4.2 Iteradores

Um iterador é um objeto que permite iteração sobre uma coleção de valores e mantém o estado que for necessário para monitorar a “posição” atual no conjunto. Um iterador deve ter um método next(). Cada chamada de next() retorna o próximo valor da coleção. Um objeto iterável representa um conjunto de valores que podem ser iterados. Os iteradores que trabalham em coleções finitas lançam StopIteration a partir de seus métodos quando não existem mais valores para iterar. StopIteration é uma propriedade do objeto global em JavaScript 1.7. Seu valor é um objeto normal (sem propriedades próprias), reservado para esse propósito especial de terminar iterações. É estranho usar um objeto iterador em um laço onde o método StopIteration deve ser manipulado explicitamente. Por causa disso, não utilizamos objetos iteradores diretamente com muita frequência. Um objeto iterável deve definir um método chamado **iterator**() (com dois sublinhados: no início e no fim do nome) o qual retorna um objeto iterador para o conjunto. O laço for/in de JavaScript 1.7 foi estendido para trabalhar com objetos iteráveis. Se o valor à direita da palavra-chave in é iterável, então o laço for/in vai chamar seu método **iterator**() automaticamente para obter um objeto iterador. Em seguida, ele chama o método next() do iterador, atribui o valor resultante à variável de laço e executa o corpo do laço. O laço for/in trata da exceção StopIteration em si e nunca é visível em seu código.

### 11.4.3 - Geradores

Os geradores são um recurso em JavaScript 1.7 (emprestado de Python) que usa a nova palavra-chave yield , isso significa que o código que os utiliza deve optar explicitamente pela versão 1.7. A palavra-chave yield é usada em uma função e, de modo semelhante a return, retorna um valor da função. No entanto, a diferença entre yield e return é que uma função que gera um valor para sua chamadora mantém seu estado interno, de modo que pode ser retomada. Essa capacidade de ser retomada torna yield uma ferramenta perfeita para escrever iteradores. Os geradores são um recurso muito poderoso da linguagem, mas podem ser difíceis de entender no início. Qualquer função que utilize a palavra-chave yield (mesmo que yield não possa ser alcançada) é uma função geradora. As funções geradoras retornam valores com yield . Elas podem usar a instrução return sem valor algum, para terminar antes de chegarem no fim do corpo da função, mas não podem usar return com um valor. A não ser pelo uso de yield e por essa restrição a respeito do uso de return , não dá para distinguir as funções geradoras das funções normais: elas são declaradas com a palavra-chave function , o operador typeof retorna “função” e elas herdam de Function.prototype, exatamente como as funções normais. Um gerador é um objeto que representa o estado atual da execução de uma função geradora. Ele define um método next() que retoma a execução da função geradora e permite que continue a executar até que sua próxima instrução yield seja encontrada.

### 11.4.4 - Array comprehension

Array comprehension é outro recurso que JavaScript 1.7 emprestou da Python. Trata-se de uma técnica para inicializar os elementos de um array a partir dos (ou com base nos) elementos de outro array ou objeto iterável. A sintaxe dos array comprehensions é baseada na notação matemática de definição dos elementos de um conjunto, ou seja, expressões e cláusulas ficam em lugares diferentes do que os programadores JavaScript esperariam que estivessem.

### 11.4.5 - Expressões geradoras

Em JavaScript 1.8 2 , pode-se substituir os colchetes em torno de uma inclusão de array por parênteses, para produzir uma expressão geradora. Uma expressão geradora é como um array comprehension (a sintaxe dentro dos parênteses é exatamente igual à sintaxe dentro dos colchetes), mas seu valor é um objeto gerador, em vez de um array. As vantagens de usar uma expressão geradora em vez de um array comprehension são que você obtém avaliação preguiçosa – os cálculos são efetuados conforme o necessário, em vez de todos de uma vez – e pode trabalhar com sequências potencialmente infinitas. A desvantagem de usar um gerador em vez de um array é que os geradores só permitem acesso sequencial aos seus valores e não acesso aleatório.

---

## 11.5 - Funções abreviadas

JavaScript 1.8 3 introduz um atalho (chamado “closures de expressão”) para escrever funções simples. Se uma função avalia uma única expressão e retorna seu valor, pode-se omitir a palavra-chave return e também as chaves em torno do corpo da função, e simplesmente colocar a expressão a ser avaliada imediatamente após a lista de argumentos.

---

## 11.6 - Cláusulas catch múltiplas

Em JavaScript 1.5, a instrução try/catch foi estendida para permitir várias cláusulas catch. Para usar esse recurso, coloque após o nome do parâmetro da cláusula catch a palavra-chave if e uma expressão condicional. Quando ocorre uma exceção, cada cláusula catch é tentada por sua vez. A exceção é atribuída ao parâmetro da cláusula catch nomeado e a condicional é avaliada. Se for verdadeira, o corpo dessa cláusula catch é avaliado e todas as outras cláusulas catch são puladas. Se uma cláusula catch não tem condicional, ela se comporta como se a condicional if fosse true e é sempre disparada se nenhuma cláusula antes dela foi disparada. Se todas as cláusulas catch têm uma condicional e nenhuma dessas condicionais é verdadeira, a exceção se propaga sem ser capturada.

---

## 11.7 - E4X: ECMAScript para XML

ECMAScript para XML, mais conhecida como E4X, é uma extensão 4 padronizada de JavaScript que define vários recursos poderosos para processar documentos XML. E4X é suportada pelo Spidermonkey 1.5 e pelo Rhino 1.6. Como não é amplamente suportada pelos fornecedores de navegador, talvez seja melhor considerar E4X como uma tecnologia para mecanismos de script baseados em Spidermonkey ou Rhino no lado do servidor. E4X representa um documento XML (ou um elemento ou atributo de um documento XML) como um objeto XML e representa fragmentos de XML (mais do que um elemento XML não incluído em um parente comum) com o objeto estreitamente relacionado XMLList. Vamos ver diversas maneiras
de criar e trabalhar com objetos XML por toda esta seção. Os objetos XML são um tipo fundamentalmente novo de objeto, com (conforme veremos) sintaxe E4X de propósito muito especial para suportá-los. Como você sabe, o operador typeof retorna “objeto” para todos os objetos padrão de JavaScript que não sejam funções. Os objetos XML são tão diferentes dos objetos normais de JavaScript quanto as funções, e o operador typeof retorna “xml”. É importante entender que os objetos XML não têm relação com os objetos DOM (Document Object Model) utilizados em JavaScript do lado do client
