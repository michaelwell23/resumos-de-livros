# CAPÍTULO 06 - OBJETOS

O tipo fundamental de dados de JavaScript é o objeto. Um objeto é um valor composto: ele agrega diversos valores (valores primitivos ou outros objetos) e permite armazenar e recuperar esses valores pelo nome. Um objeto é um conjunto não ordenado de propriedades, cada uma das quais tendo um nome e um valor. Os nomes de propriedade são strings; portanto, podemos dizer que os objetos mapeiam strings em valores. Esse mapeamento de string em valor recebe vários nomes: você provavelmente já conhece a estrutura de dados fundamental pelo nome “hash”, “tabela de hash”, “dicionário” ou “array associativo”. Os objetos JavaScript são dinâmicos – normalmente propriedades podem ser adicionadas e excluídas –, mas podem ser usados para simular os objetos e as “estruturas” estáticas das linguagens estaticamente tipadas. Qualquer valor em JavaScript que não seja uma string, um número, true , false , null ou undefined , é um objeto. E mesmo que strings, números e valores booleanos não sejam objetos, eles se comportam como objetos imutáveis. As coisas mais comuns feitas com objetos são: criá-los e configurar, consultar, excluir, testar e enumerar suas propriedades.

---

## 6.1 - CRIANDO OBJETOS

Os objetos podem ser criados com objetos literais, com a palavra-chave new e (em ECMAScript 5) com a função Object.create().

### 6.1.1 - Objetos literais

A maneira mais fácil de criar um objeto é incluir um objeto literal no código JavaScript. Um objeto literal é uma lista separada com vírgulas de pares nome:valor separados por dois-pontos, colocados entre chaves. Um nome de propriedade é um identificador JavaScript ou uma string literal (a string vazia é permitida). Um valor de propriedade é qualquer expressão JavaScript; o valor da expressão (pode ser um valor primitivo ou um valor de objeto) se torna o valor da propriedade. Um objeto literal é uma expressão que cria e inicializa um objeto novo e diferente cada vez que é avaliada. O valor de cada propriedade é avaliado cada vez que o literal é avaliado. Isso significa que um único objeto literal pode criar muitos objetos novos, caso apareça dentro do corpo de um laço em uma função que é chamada repetidamente, e que os valores de propriedade desses objetos podem diferir uns dos outros.

### 6.1.2 - Criando objetos com new

O operador new cria e inicializa um novo objeto. A palavra-chave new deve ser seguida de uma chamada de função. Uma função usada dessa maneira é chamada de construtora e serve para inicializar um objeto recém-criado. JavaScript básica contém construtoras internas para tipos nativos. Além dessas construtoras internas, é comum definir suas próprias funções construtoras para inicializar objetos recém-criados.

### 6.1.3 - Protótipos

Todo objeto JavaScript tem um segundo objeto JavaScript (ou null, mas isso é raro) associado. Esse segundo objeto é conhecido como protótipo e o primeiro objeto herda propriedades do protótipo. Todos os objetos criados por objetos literais têm o mesmo objeto protótipo e podemos nos referir
a esse objeto protótipo em código JavaScript como Object.prototype . Os objetos criados com a palavra-chave new e uma chamada de construtora utilizam o valor da propriedade prototype da função construtora como protótipo. Assim, o objeto criado por new Object() herda de Object.prototype ,
exatamente como acontece com o objeto criado por {}. Da mesma forma, o objeto criado por new Array() usa Array.prototype como protótipo e o objeto criado por new Date() usa Date.prototype como protótipo.

### 6.1.4 - Object.create()

ECMAScript 5 define um método, Object.create(), que cria um novo objeto, usando seu primeiro argumento como protótipo desse objeto. Object.create() também recebe um segundo argumento opcional que descreve as propriedades do novo objeto. Pode-se passar null para criar um novo objeto que não tem protótipo, mas se você fizer isso, o objeto recém-criado não vai herdar nada, nem mesmo métodos básicos, como toString() (isso significa que também não funcionaria com o operador +).

---

## 6.2 - CONSULTADO E CONFIGURANDO PROPRIEDADES

Para obter o valor de uma propriedade, use os operadores ponto (.) ou colchete ( [] ). O lado esquerdo deve ser uma expressão cujo valor é um objeto. Se for usado o operador ponto, o lado direito deve ser um identificador simples que dê nome à propriedade. Se forem usados colchetes, o valor dentro deles deve ser uma expressão avaliada como uma string contendo o nome da propriedade desejada.

### 6.2.1 - Objetos como arrays associativos

A primeira sintaxe, usando o ponto e um identificador, é como a sintaxe utilizada para acessar um campo estático de uma estrutura ou um objeto em C ou Java. A segunda sintaxe, usando colchetes e uma string, parece acesso a array, mas a um array indexado por strings e não por números. Esse tipo de array é conhecido como array associativo (ou hash ou mapa ou dicionário). Em C, C++, Java e linguagens fortemente tipadas semelhantes, um objeto só pode ter um número fixo de propriedades e os nomes dessas propriedades devem ser definidos antecipadamente. Como JavaScript é uma linguagem pouco tipada, essa regra não se aplica: um programa pode criar qualquer número de propriedades em qualquer objeto. No entanto, quando se usa o operador `.` para acessar uma propriedade de um objeto, o nome da propriedade é expresso como um identificador. Os identificadores devem ser digitados literalmente em seu programa JavaScript – eles não são um tipo de dados, de modo que não podem ser manipulados pelo programa. Por outro lado, ao se acessar uma propriedade de um objeto com a notação de array [] , o nome da propriedade é expresso como uma string. As strings são tipos de dados de JavaScript, de modo que podem ser manipuladas e criadas enquanto um programa está em execução.

### 6.2.2 - Herança

Os objetos em JavaScript têm um conjunto de “propriedades próprias” e também herdam um conjunto de propriedades de seus objetos protótipos. Para entendermos isso, devemos considerar o acesso à propriedade com mais detalhes. Suponha que você consulte a propriedade x do objeto o . Se o não tem uma propriedade própria com esse nome, a propriedade x é consultada no objeto protótipo de o . Se o objeto protótipo não tem uma propriedade própria com esse nome, mas ele próprio tem um protótipo, a consulta é feita no protótipo do protótipo. Isso continua até que a propriedade x seja encontrada ou até que seja pesquisado um objeto com um protótipo null . Como você pode ver, o atributo protótipo de um objeto cria um encadeamento ou lista encadeada das propriedades herdadas. Agora, suponha que você atribua um valor à propriedade x do objeto o . Se o já tem uma propriedade própria (não herdada) chamada x , então a atribuição simplesmente altera o valor dessa propriedade já existente. Caso contrário, a atribuição cria uma nova propriedade chamada x no objeto o. Se o herdou a propriedade x anteriormente, essa propriedade herdada é agora oculta pela propriedade
própria recém-criada de mesmo nome. A atribuição de propriedades examina o encadeamento de protótipos para determinar se a atribuição é permitida. Se o herda uma propriedade somente de leitura chamada x , por exemplo, então a atribuição não é permitida. Contudo, se a atribuição é permitida, ela sempre cria ou configura uma propriedade no objeto original e nunca modifica o encadeamento de protótipos.

### 6.2.3 - Erros de acesso à propriedade

Não é um erro consultar uma propriedade que não existe. Se a propriedade x não é encontrada como uma propriedade própria ou como uma propriedade herdada de o , a expressão de acesso à propriedade o.x é avaliada como undefined. No entanto, é um erro tentar consultar um propriedade de um objeto que não existe. Os valores null e undefined não têm propriedades e é um erro consultar propriedades desses valores. As regras que especificam quando uma atribuição de propriedade é bem-sucedida e quando falha são intuitivas, mas difíceis de expressar resumidamente. Uma tentativa de configurar uma propriedade p de um objeto o falha nas seguintes circunstâncias:

- o tem uma propriedade própria p que é somente para leitura: não é possível configurar propriedades somente de leitura. (Contudo, consulte o método defineProperty() para ver uma exceção que permite configurar propriedades somente de leitura.)
- o tem uma propriedade herdada p que é somente para leitura: não é possível ocultar uma propriedade somente de leitura herdada com uma propriedade própria de mesmo nome.
- o não tem uma propriedade própria p ; o não herda uma propriedade p com um método setter e o atributo extensível de o é false. Se p ainda não existe em o e se não há qualquer método setter para chamar, então p deve ser adicionada em o. Mas se o não é extensível, então nenhuma propriedade nova pode ser definida nele.

---

## 6.3 - EXCLUINDO PROPRIEDADES

O operador delete remove uma propriedade de um objeto. Seu operando deve ser uma expressão de acesso à propriedade. Surpreendentemente, delete não opera no valor da propriedade, mas na própria propriedade. O operador delete exclui apenas as propriedades próprias, não as herdadas. (Para excluir uma propriedade herdada, você deve excluí-la do objeto protótipo em que ela é definida. Fazer isso afeta todo objeto que herda desse protótipo.). Uma expressão delete é avaliada como true se a exclusão é bem-sucedida ou se a exclusão não tem efeito (como a exclusão de uma propriedade inexistente). delete também é avaliada como true quando usada (sem sentido) com uma expressão que não é uma expressão de acesso à propriedade.

---

## 6.4 - TESTANDO PROPRIEDADES

Os objetos em JavaScript podem ser considerados conjuntos de propriedades e frequentemente é útil testar a participação como membro do conjunto – verificar se um objeto tem uma propriedade com determinado nome. Isso é feito com o operador in , com os métodos hasOwnProperty() e propertyIsEnumerable() ou simplesmente consultando-se a propriedade. O operador in espera um nome de propriedade (como uma string) em seu lado esquerdo e um objeto à sua direita. Ele retorna true se o objeto tem uma propriedade própria ou uma propriedade herdada com esse nome. O método hasOwnProperty() de um objeto testa se esse objeto tem uma propriedade própria com o nome dado. Ele retorna false para propriedades herdadas.
O método propertyIsEnumerable() refina o teste de hasOwnProperty() . Ele retorna true somente se a propriedade nomeada é uma propriedade própria e seu atributo enumerável é true. Certas propriedades internas não são enumeráveis. As propriedades criadas por código JavaScript normal são
enumeráveis, a menos que você tenha usado um dos métodos de ECMAScript 5, mostrados posteriormente, para torná-las não enumeráveis.

---

## 6.5 - ENUMERANDO PROPRIEDADES

Em vez de testar a existência de propriedades individuais, às vezes queremos fazer uma iteração por todas as propriedades de um objeto ou obter uma lista delas. Isso normalmente é feito com o laço for/in , embora ECMAScript 5 forneça duas alternativas práticas. Ele executa o corpo do laço uma vez para cada propriedade enumerável (própria ou herdada) do objeto especificado, atribuindo o nome da propriedade à variável de laço. Os métodos internos herdados pelos objetos não são enumeráveis, mas as propriedades que seu código adiciona nos objetos são enumeráveis. Algumas bibliotecas utilitárias adicionam novos métodos (ou outras propriedades) em Object.prototype , de modo que eles são herdados por (e estão disponíveis para) todos os objetos. Antes de ECMAScript 5, entretanto, não havia como tornar esses métodos adicionados não enumeráveis, de modo que eles eram enumerados por laços for/in . Para prevenir-se contra isso, talvez você queira filtrar as propriedades retornadas por for/in. Além do laço for/in ,ECMAScript 5 define duas funções que enumeram nomes de propriedade. A primeira é Object.keys() , que retorna um array com os nomes das propriedades próprias enumeráveis de um objeto. A segunda função de enumeração de propriedade de ECMAScript 5 é Object.getOwnProperty Names(). Ela funciona como Object.keys() , mas retorna os nomes de todas as propriedade próprias do objeto especificado e não apenas as propriedades enumeráveis.

---

## 6.6 - MÉTODOS GETTER E SETTER DE PROPRIEDADES

A propriedade de um objeto é um nome, um valor e um conjunto de atributos. Em ECMAScript 5 3 , o valor pode ser substituído por um ou dois métodos, conhecidos como getter e setter. As propriedades definidas por métodos getter e setter às vezes são conhecidas como propriedades de acesso,
para distingui-las das propriedades de dados que têm um valor simples. Quando um programa consulta o valor de uma propriedade de acesso, JavaScript chama o método getter (sem passar argumentos). O valor de retorno desse método se torna o valor da expressão de acesso à propriedade. Quando um programa configura o valor de uma propriedade de acesso, JavaScript chama o método setter, passando o valor do lado direito da atribuição. Esse método é responsável por “configurar”, de certo modo, o valor da propriedade. O valor de retorno do método setter é ignorado. As propriedades de acesso não têm um atributo gravável, como as propriedades de dados. Se uma propriedade tem um método getter e um método setter, ela é uma propriedade de leitura/gravação. Se ela tem somente um método getter, ela é uma propriedade somente de leitura. E se ela tem somente um método setter, ela é uma propriedade somente de gravação (algo que não é possível com propriedades de dados) e as tentativas de lê-la são sempre avaliadas como undefined.

---

## 6.7 ATRIBUTOS DE PROPRIEDADE

Todas as propriedades criadas pelos programas ECMAScript 3 são graváveis, enumeráveis e configuráveis, e isso não pode ser mudado. Esta seção explica a API de ECMAScript 5 para consultar e configurar atributos de propriedade. Essa API é especialmente importante para os autores de bibliotecas, pois:

• Permite adicionar métodos em objetos protótipos e torná-los não enumeráveis, assim como os métodos internos.
• Permite “bloquear” os objetos, definindo propriedades que não podem ser alteradas nem excluídas.

Os métodos de ECMAScript 5 para consultar e configurar os atributos de uma propriedade utilizam um objeto chamado descritor de propriedade para representar o conjunto de quatro atributos. Um objeto descritor de propriedade tem propriedades com os mesmos nomes dos atributos da propriedade que descreve. Assim, o objeto descritor de uma propriedade de dados tem propriedades chamadas value , writable , enumerable e configurable. Para obter o descritor de uma propriedade nomeada de um objeto especificado, chame Object.getOwnPropertyDescriptor(). Para configurar os atributos de uma propriedade ou criar uma nova propriedade com os atributos especificados, chame Object.defineProperty(), passando o objeto a ser modificado, o nome da propriedade a ser criada ou alterada e o objeto descritor de propriedade. Se quiser criar ou modificar mais de uma propriedade simultaneamente, use Object.defineProperties(). O primeiro argumento é o objeto a ser modificado. O segundo argumento é um objeto que mapeia os nomes das propriedades a serem criadas ou modificadas nos descritores dessas propriedades.

### 6.7.1 - API legada para métodos getter e setter

A maioria das implementações de JavaScript (com a importante exceção do navegador Web IE)suportava a sintaxe de objeto literal get e set mesmo antes da adoção de ECMAScript 5. Essas implementações suportam uma API legada não padronizada para consultar e configurar métodos getter e setter. Essa API consiste em quatro métodos, disponíveis em todos os objetos. `__lookupGetter__()` e `__lookupSetter__()` retornam o método getter ou setter de uma propriedade nomeada. E `__defineGetter__()` e `__defineSetter__()` definem um método getter ou setter: passam primeiro o nome da
propriedade e depois o método getter ou setter.

---

## 6.8 - ATRIBUTOS DE OBJETO

Todo objeto tem atributos protótipo, classe e extensível associados. As subseções a seguir explicam o que esses atributos fazem e (quando possível) como consultá-los e configurá-los.

### 6.8.1 - O atributo protótipo

O atributo protótipo de um objeto especifica o objeto do qual ele herda propriedades. Esse é um atributo tão importante que em geral dizemos simplesmente “o protótipo de o ”, em vez de “o atributo protótipo de o ”. Além disso, é importante entender que, quando prototype aparece no código-fonte, isso se refere a uma propriedade de objeto normal e não ao atributo protótipo. O atributo protótipo é configurado quando um objeto é criado. Os objetos criados com new utilizam como protótipo o valor da propriedade prototype de sua função construtora. E os objetos criados com Object.create() usam o primeiro argumento dessa função (que pode ser null ) como protótipo. Em ECMAScript 5, pode-se consultar o protótipo de qualquer objeto, passando esse objeto para Object.getPrototypeOf(). Para determinar se um objeto é o protótipo de (ou faz parte do encadeamento de protótipos de) outro objeto, use o método isPrototypeOf().

### 6.8.2 - O atributo classe

O atributo classe de um objeto é uma string que fornece informações sobre o tipo do objeto. Nem ECMAScript 3 nem ECMAScript 5 fornecem um modo de configurar esse atributo, sendo que há apenas uma técnica indireta para consultá-lo. O método padrão toString() (herdado de Object.prototype) retorna uma string da forma. Assim, para obter a classe de um objeto, você pode chamar esse método toString() nele e extrair do oitavo ao penúltimo caracteres da string retornada. A parte complicada é que muitos objetos herdam outros métodos toString() mais úteis e, para chamar a versão correta de toString() , precisamos fazer isso indiretamente, usando o método Function.call().

### 6.8.3 - O atributo extensível

ECMAScript 5 define funções para consultar e configurar a capacidade de extensão de um objeto. Para determinar se um objeto é extensível, passe-o para Object.isExtensible(). Para tornar um objeto não extensível, passe-o para Object.preventExtensions(). Note que não há qualquer modo de tornar um objeto novamente extensível, uma vez que você o tenha tornado não extensível. Note também que chamar preventExtensions() afeta apenas a capacidade de extensão do próprio objeto. Se novas propriedades forem adicionadas no protótipo de um objeto não extensível, o objeto não extensível vai herdar essas novas propriedades.O objetivo do atributo extensível é “bloquear” os objetos em um estado conhecido e evitar falsificação externa. O atributo de objeto extensível é frequentemente usado em conjunto com os atributos de propriedade configurável e gravável. ECMAScript 5 define funções que tornam fácil configurar esses atributos juntos. Object.seal() funciona como Object.preventExtensions() , mas além de tornar o objeto não extensível, também torna todas as propriedades próprias desse objeto não configuráveis. Isso significa que novas propriedades não podem ser adicionadas no objeto e que as propriedades já existentes não podem ser excluídas nem configuradas. Object.freeze() bloqueia os objetos ainda mais firmemente. Além de tornar o objeto não extensível e suas propriedades não configuráveis, também transforma todas as propriedades de dados próprias do objeto em somente para leitura. Use Object.isFrozen() para determinar se um objeto está congelado. É importante entender que Object.seal() e Object.freeze() afetam apenas o objeto em que são passados: eles não têm efeito algum sobre o protótipo desse objeto. Se quiser bloquear um objeto
completamente, você provavelmente também precisa selar ou congelar os objetos no encadeamento de protótipos.

---

## 6.9 - SERIALIZANDO OBJETOS

Serialização de objeto é o processo de converter o estado de um objeto em uma string a partir da qual ele pode ser restaurado posteriormente. ECMAScript 5 fornece as funções nativas JSON.stringify() e JSON.parse() para serializar e restaurar objetos de JavaScript. Essas funções utilizam o formato de troca de dados JSON. JSON significa “JavaScript Object Notation” (notação de objeto JavaScript) e sua sintaxe é muito parecida com a de objetos e array literais de JavaScript.

---

## 6.10 - MÉTODOS DE OBJETOS

Conforme discutido, todos os objetos de JavaScript (exceto aqueles explicitamente criados sem protótipo) herdam propriedades de Object.prototype. Essas propriedades herdadas são principalmente métodos e, como estão disponíveis universalmente, são de interesse especial para os programadores
de JavaScript.

### 6.10.1 - O método toString()

O método toString() não recebe argumentos; ele retorna uma string que de algum modo representa o valor do objeto em que é chamado. JavaScript chama esse método de um objeto quando precisa converter o objeto em uma string.

### 6.10.2 - O método toLocaleString()

Além do método toString() básico, todos os objetos têm um método toLocaleString(). O objetivo desse método é retornar uma representação de string localizada do objeto. O método toLocaleString() padrão definido por Object não faz localização alguma sozinho: ele simplesmente chama toString() e retorna esse valor.

### 6.10.3 - O método toJSON()

Se esse método existe no objeto a ser serializado, ele é chamado, sendo que o valor de retorno é serializado em vez do objeto original.

### 6.10.4 - O método valueOf()

O método valueOf() é muito parecido com o método toString() , mas é chamado quando JavaScript precisa converter um objeto em algum tipo primitivo que não seja uma string – normalmente um número. JavaScript chama esse método automaticamente se um objeto é usado em um contexto em que é exigido um valor primitivo.
